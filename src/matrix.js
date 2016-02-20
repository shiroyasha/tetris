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

  isFullLine(y) {
    for(let x=0; x < this.width; x++) {
      if(this.cells[y][x] === null) {
        return false;
      }
    }

    return true;
  }

  removeLine(y) {
    console.log("removing line", y);

    for(var i=y; i >= 1; i--) {
      this.cells[i] = this.cells[i-1];
    }

    this.cells[0] = this.generateLine();
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
      this.cells[i] = this.generateLine();
    }
  }

  generateLine() {
    let result = [];

    for(let j=0; j < this.width; j++) {
      result[j] = null;
    }

    return result;
  }
}
