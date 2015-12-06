class Tetromino {
  constructor(position) {
    this.cellSize = 30;
    this.shapes = this.generateShapes();
    this.rotationIndex = 0;
  }

  setPosition(position) {
    this.position = position;
  }

  currentShape() {
    return this.shapes[this.rotationIndex];
  }

  get cellPositions() {
    let shape = this.currentShape();
    let result = [];

    for(let i=0; i < 4; i++) {
      for(let j=0; j < 4; j++) {
        if(shape[i][j] === 1) {
          result.push({x: j, y: i});
        }
      }
    }

    return result;
  }

  render(g) {
    g.save();

    let xTranslation = this.position.x * this.cellSize;
    let yTranslation = (this.position.y - 4) * this.cellSize;

    g.translate(xTranslation, yTranslation);

    let shape = this.currentShape();

    for(let i=0; i < 4; i++) {
      for(let j=0; j < 4; j++) {
        if(shape[i][j] === 1) { this.renderCell(g, j, i) }
      }
    }

    g.restore();
  }

  renderCell(g, x, y) {
    g.fillStyle = this.color();
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
