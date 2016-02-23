class PlaygroundView {

  static render(graphics, model) {
    PlaygroundView.renderSidebar(graphics, model);
    PlaygroundView.renderMatrix(graphics, model);

    if(model.isFinished()) {
      GameOverView.render(graphics);
    }
  }

  static renderSidebar(graphics, model) {
    graphics.save();
    graphics.translate(model.matrix.width * CellView.SIZE, 0);
    graphics.translate(CellView.SIZE, CellView.SIZE);

    ScoreView.render(graphics, model.score);

    graphics.translate(0, CellView.SIZE*3);

    NextTetrominoView.render(graphics, model.nextTetromino);

    graphics.restore();
  }

  static renderMatrix(graphics, model) {
    graphics.save();
    graphics.translate(0, -4 * CellView.SIZE);

    MatrixView.render(graphics, model.matrix);

    TetrominoView.render(graphics, model.tetromino);

    graphics.restore();
  }

}
