class TetrominoFactory {
  static generate(position) {
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

    tetromino.setPosition({ x: 4, y: 0 });

    return tetromino;
  }

  static randomNumber(a, b) {
    return Math.floor(Math.random()*(b-a) + a);
  }
}
