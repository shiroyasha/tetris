class Tetromino {
  constructor(shapes, color) {
    this.position = {x: 0, y: 0};
    this.rotationIndex = 0;
    this.shapes = shapes;
    this.color = color;
  }

  get cellPositions() {
    let shape = this.shapes[this.rotationIndex];
    let result = [];

    for(let i=0; i < 4; i++) {
      for(let j=0; j < 4; j++) {
        if(shape[i][j] === 1) {
          result.push({x: j, y: i});
        }
      }
    }

    return Position.translate(result, this.position);
  }

  rotateLeft() {
    this.rotationIndex = Math.mod(this.rotationIndex + 1, this.shapes.length);
  }

  rotateRight() {
    this.rotationIndex = Math.mod(this.rotationIndex - 1, this.shapes.length);
  }
}
