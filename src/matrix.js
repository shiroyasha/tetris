class Matrix {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.generateCells();
  }

  set(position, value) {
    this.cells[position.y][position.x] = value;
  }

  value(position) {
    return this.cells[position.y][position.x];
  }

  forEachPosition(callback) {
    for(let i=0; i < this.height; i++) {
      for(let j=0; j < this.width; j++) {
        callback({x: j, y: i});
      }
    }
  }

  isValidPosition(position) {
    return position.y < this.height && position.y >= 0 &&
           position.x < this.width && position.x >= 0;
  };

  areValidPositions(positions) {
    return positions.every((position) => this.isValidPosition(position));
  }

  isEmpty(position) {
    return !this.isFilled(position);
  }

  areEmptyPositions(positions) {
    return positions.every((position) => this.isEmpty(position));
  }

  isFilled(position) {
    return this.value(position) !== null;
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
}
