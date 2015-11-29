class ITetromino extends Tetromino {
  constructor() {
    super();

    this.shape = [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ];
  }

  shapeMatrix() {
    return this.shape;
  }
}
