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

  eachCellPosition(callback) {
    let shape = this.currentShape();

    for(let i=0; i < 4; i++) {
      for(let j=0; j < 4; j++) {
        if(shape[i][j] === 1) callback({x: j, y: i});
      }
    }
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

  update(dt) {
  }

  rotateLeft() {
    this.rotationIndex = (this.rotationIndex + 1) % this.shapes.length;
  }

  rotateRight() {
    this.rotationIndex = (this.rotationIndex - 1) % this.shapes.length;
  }
}
