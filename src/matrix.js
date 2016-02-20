class Matrix {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.generateCells();
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
}
