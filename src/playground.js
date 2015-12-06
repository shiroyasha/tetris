class Playground {
  constructor() {
    this.cellSize = 30;

    this.matrix = new Matrix(10, 24);

    this.tetromino = null;
    this.timeSinceLastMove = 0;
    this.moveInterval = 300;

    this.handleTetraminoEvents();
  }

  handleTetraminoEvents() {
    Events.onLeft(() => { if(this.tetromino) this.tetromino.position.x -= 1; });
    Events.onRight(() => { if(this.tetromino) this.tetromino.position.x += 1; });
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

    let nextPosition = {
      x: this.tetromino.position.x,
      y: this.tetromino.position.y + 1
    };

    if(this.canTetrominoMoveTo(nextPosition)) {
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

  canTetrominoMoveTo(position) {
    let matrixPositions = this.tetromino.filledCells().map((tetrominoPosition) => {
      return { x: tetrominoPosition.x + position.x, y: tetrominoPosition.y + position.y };
    });

    return matrixPositions.every((position) => {
      return this.matrix.isValidPosition(position) &&
             this.matrix.isEmpty(position);
    });
  }

  updateTetromino() {
    while(this.timeSinceLastMove > this.moveInterval) {
      this.timeSinceLastMove -= this.moveInterval;

      let position = {x: this.tetromino.position.x, y: this.tetromino.position.y + 1};

      this.tetromino.setPosition(position);
    }
  }
}
