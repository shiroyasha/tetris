class TetrominoFactory {
  static generate() {
    let tetrominos = [
      ITetromino,
      JTetromino,
      LTetromino,
      OTetromino,
      STetromino,
      TTetromino,
      ZTetromino
    ];

    let randomIndex = TetrominoFactory.randomNumber(0, tetrominos.length);

    let tetromino = new tetrominos[randomIndex]();

    return tetromino;
  }

  static randomNumber(a, b) {
    return Math.floor(Math.random()*(b-a) + a);
  }
}
