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
    let generator = new tetrominos[randomIndex]();

    let shapes = generator.generateShapes();
    let color = generator.color();

    return new Tetromino(shapes, color);
  }
}
