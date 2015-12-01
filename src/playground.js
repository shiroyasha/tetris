class Playground {
  constructor() {
    this.height = 24;
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

    for(let i=4; i < this.height; i++) {
      for(let j=0; j < this.width; j++) {
        this.renderCell(g, j, i);
      }
    }
  }

  renderTetromino(g) {
    g.save();

    let xTranslation = this.tetromino.position.x * this.cellSize;
    let yTranslation = (this.tetromino.position.y-4) * this.cellSize;

    g.translate(xTranslation, yTranslation);

    this.tetromino.render(g);
    g.restore();
  }

  renderCell(g, x, y) {
    let cell = this.matrix[y][x];

    if(cell) {
      g.fillStyle = cell;
      g.fillRect(x*this.cellSize, (y-4)*this.cellSize, this.cellSize, this.cellSize);
    } else {
      g.strokeStyle = "#eeeeee";
      g.beginPath();
      g.rect(x*this.cellSize, (y-4)*this.cellSize, this.cellSize, this.cellSize);
      g.stroke();
    }
  }

  update(dt) {
    this.timeSinceLastMove += dt;

    if(this.tetromino === null) { this.nextTetramino() }

    if(this.canTetrominoFallFurther()) {
      this.updateTetromino();
    } else {
      this.integrateTetromino();
      this.nextTetramino();
    }
  }

  nextTetramino() {
    this.tetromino = new TetrominoFactory.generate();
    this.tetromino.setPosition({ x: 4, y: 0 });
  }

  integrateTetromino() {
    let shape = this.tetromino.currentShape();

    for(let i=0; i < 4; i++) {
      for(let j=0; j < 4; j++) {
        if(shape[i][j] === 1) {
          this.matrix[i+this.tetromino.position.y][j+this.tetromino.position.x] = this.tetromino.color();
        }
      }
    }
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
