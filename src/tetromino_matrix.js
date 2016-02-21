class TetrominoMatrix extends Matrix {
  constructor(width, height) {
    super(width, height);
  }

  integrate(tetromino) {
    tetromino.eachCellPosition((position) => {
      let matrixPosition = Position.add(tetromino.position, position);

      this.set(matrixPosition, tetromino.color());
    });
  }

  canFit(tetromino) {
    let cellPositions = tetromino.cellPositions.map((cellPosition) => {
      return Position.add(cellPosition, tetromino.position);
    });

    return this.areValidPositions(cellPositions) &&
           this.areEmptyPositions(cellPositions);
  }

  clearFullLines() {
    let fullLineCount = 0;

    for(let y=0; y < this.height; y++) {
      if(this.isFullLine(y)) {
        this.removeLine(y);
        fullLineCount++;
      }
    }

    return fullLineCount;
  }

  removeLine(y) {
    for(var i=y; i >= 1; i--) {
      this.cells[i] = this.cells[i-1];
    }

    this.cells[0] = this.generateLine();
  }

  isFullLine(y) {
    for(let x=0; x < this.width; x++) {
      if(this.cells[y][x] === null) {
        return false;
      }
    }

    return true;
  }

}
