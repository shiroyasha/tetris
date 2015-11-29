class Tetromino {
  constructor() {
    this.cellSize = 30;
  }

  shapeMatrix() {
    throw new Error("Shape matrix is not implemented");
  }

  render(g) {
    let shape = this.shapeMatrix();

    for(let i=0; i < 4; i++) {
      for(let j=0; j < 4; j++) {
        if(shape[i][j] === 1) { this.renderCell(g, j, i) }
      }
    }
  }

  renderCell(g, x, y) {
    g.fillRect(x*this.cellSize, y*this.cellSize, this.cellSize, this.cellSize);
  }

  update(dt) {
  }
}
