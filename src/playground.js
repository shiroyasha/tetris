class Playground {
  constructor() {
    this.height = 22;
    this.width = 10;
    this.cellSize = 30;

    this.matrix = this.createEmptyMatrix();
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
    for(let i=0; i < this.height; i++) {
      for(let j=0; j < this.width; j++) {
        let cell = this.matrix[i][j];

        if(cell) {
          this.renderCell(g, cell, j, i);
        } else {
          this.renderEmptyCell(g, j, i);
        }
      }
    }
  }

  renderCell(g, color, x, y) {
    g.fillStyle = color;
    g.fillRect(x*this.cellSize, y*this.cellSize, this.cellSize, this.cellSize);
  }

  renderEmptyCell(g, x, y) {
    g.strokeStyle = "#eeeeee";

    g.beginPath();
    g.rect(x*this.cellSize, y*this.cellSize, this.cellSize, this.cellSize);
    g.stroke();
  }

  update(dt) {

  }
}
