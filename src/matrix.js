class Matrix {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.cellSize = 30;

    this.generateCells();
  }

  isFilled(x, y) {
    return this.cells[y][x];
  }

  generateCells() {
    this.cells = [];

    for(let i=0; i < this.height; i++) {
      this.cells[i] = [];

      for(let j=0; j < this.width; j++) {
        this.cells[i][j] = null;
      }
    }
  }

  integrateTetromino(tetromino) {
    let shape = tetromino.currentShape();

    for(let i=0; i < 4; i++) {
      for(let j=0; j < 4; j++) {
        if(shape[i][j] === 1) {
          let x = j + tetromino.position.x;
          let y = i + tetromino.position.y;

          this.cells[y][x] = tetromino.color();
        }
      }
    }
  }

  render(g) {
    for(let i=4; i < this.height; i++) {
      for(let j=0; j < this.width; j++) {
        let x = j;
        let y = i;
        let cell = this.cells[y][x];

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
    }
  }
}
