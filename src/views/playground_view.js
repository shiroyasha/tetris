class PlaygroundView {

  static render(graphics, model) {
    graphics.save();
    graphics.translate(model.matrix.width * CellView.SIZE, 0);

    ScoreView.render(graphics, model.score);

    graphics.restore();

    MatrixView.render(graphics, model.matrix);

    TetrominoView.render(graphics, model.tetromino);
  }

}
