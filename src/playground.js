class Playground {
  constructor() {
    this.cellSize = 30;

    this.matrix = new Matrix(10, 24);

    this.tetromino = null;
    this.timeSinceLastMove = 0;
    this.moveInterval = 300;
  }

  render(g) {
    if(this.tetromino) {
      g.save();

      let xTranslation = this.tetromino.position.x * this.cellSize;
      let yTranslation = (this.tetromino.position.y-4) * this.cellSize;

      g.translate(xTranslation, yTranslation);

      this.tetromino.render(g);
      g.restore();
    }

    this.matrix.render(g);
  }

  update(dt) {
    this.timeSinceLastMove += dt;

    if(this.tetromino === null) { this.nextTetramino() }

    if(this.canTetrominoFallFurther()) {
      this.updateTetromino();
    } else {
      this.matrix.integrateTetromino(this.tetromino);
      this.nextTetramino();
    }
  }

  nextTetramino() {
    this.tetromino = new TetrominoFactory.generate();
    this.tetromino.setPosition({ x: 4, y: 0 });
  }

  canTetrominoFallFurther() {
    let x = this.tetromino.position.x;
    let y = this.tetromino.position.y;

    let filledPositions = this.tetromino.filledCells();

    for(let i=0; i < filledPositions.length; i++) {
      let position = filledPositions[i];

      if(position.y + y + 1 === this.matrix.height) return false;
      if(this.matrix.isFilled(position.x + x, position.y + y + 1)) return false;
    }

    return true;
  }

  updateTetromino() {
    while(this.timeSinceLastMove > this.moveInterval) {
      this.timeSinceLastMove -= this.moveInterval;

      let position = {x: this.tetromino.position.x, y: this.tetromino.position.y + 1};

      this.tetromino.setPosition(position);
    }
  }
}
