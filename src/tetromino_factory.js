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

    let randomIndex = Math.randomInt(0, tetrominos.length);

    let tetromino = new tetrominos[randomIndex]();

    tetromino.setPosition({ x: 4, y: 0 });

    return tetromino;
  }
}
