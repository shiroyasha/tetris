class Tetromino {
  constructor() {
    this.cellSize = 30;
    this.shapes = this.generateShapes();
    this.rotationIndex = 0;
  }

  generateShapes() {
    throw new Error("Not implemented");
  }

  render(g) {
    let shape = this.shapes[this.rotationIndex];

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

  rotateLeft() {
    this.rotationIndex = (this.rotationIndex + 1) % this.shapes.length;
  }

  rotateRight() {
    this.rotationIndex = (this.rotationIndex - 1) % this.shapes.length;
  }
}
