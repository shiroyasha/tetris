class TTetromino extends Tetromino {
  constructor() {
    super();

    this.shape = [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ];
  }

  shapeMatrix() {
    return this.shape;
  }
}
