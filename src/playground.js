class Playground {
  constructor() {
    this.height = 22;
    this.width = 10;
    this.cellSize = 30;

    this.matrix = this.createEmptyMatrix();

    this.tetromino = null;
    this.timeSinceLastMove = 0;
  }

  createEmptyMatrix() {
    let matrix = [];

    for(let i=0; i < this.height; i++) {
      matrix[i] = [];

      for(let j=0; j < this.width; j++) {
        matrix[i][j] = null;
      }
    }

    return matrix;
  }

  render(g) {
    if(this.tetromino) { this.renderTetromino(g); }

    for(let i=0; i < this.height; i++) {
      for(let j=0; j < this.width; j++) {
        this.renderCell(g, j, i);
      }
    }
  }

  renderTetromino(g) {
    g.save();

    let xTranslation = this.tetromino.position.x * this.cellSize;
    let yTranslation = this.tetromino.position.y * this.cellSize;

    g.translate(xTranslation, yTranslation);

    this.tetromino.render(g);
    g.restore();
  }

  renderCell(g, x, y) {
    let cell = this.matrix[y][x];

    if(cell) {
      g.fillStyle = color;
      g.fillRect(x*this.cellSize, y*this.cellSize, this.cellSize, this.cellSize);
    } else {
      g.strokeStyle = "#eeeeee";
      g.beginPath();
      g.rect(x*this.cellSize, y*this.cellSize, this.cellSize, this.cellSize);
      g.stroke();
    }
  }

  update(dt) {
    if(this.tetromino === null) { this.nextTetramino() }

    this.timeSinceLastMove += dt;

    if(this.canTetrominoFallFurther()) {
      this.updateTetromino();
    } else {
      this.nextTetramino();
    }
  }

  nextTetramino() {
    this.tetromino = new TetrominoFactory.generate();
    this.tetromino.setPosition({ x: 4, y: 10 });
  }

  canTetrominoFallFurther() {
    return this.tetromino.position.y < this.height - 4;
  }

  updateTetromino() {
    while(this.timeSinceLastMove > 500) {
      this.timeSinceLastMove -= 500;

      let position = {x: this.tetromino.position.x, y: this.tetromino.position.y + 1};

      this.tetromino.setPosition(position);
    }
  }
}
