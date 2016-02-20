class PlaygroundView {

  static render(graphic, model) {
    MatrixView.render(graphic, model.matrix);

    TetrominoView.render(graphic, model.tetromino);
  }

}
