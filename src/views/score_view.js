class ScoreView {

  static render(graphics, score) {
    ScoreView.renderBackground(graphics);
    ScoreView.renderScore(graphics, score);
  }

  static renderBackground(graphics) {
    graphics.fillStyle = "#333333";

    graphics.fillRect(CellView.SIZE, CellView.SIZE, CellView.SIZE * 4, CellView.SIZE);
    graphics.fill();
  }

  static renderScore(graphics, score) {
    graphics.textAlign = "right";
    graphics.font = "48px helvetica";
    graphics.fillStyle = "orange";
    graphics.fillText(score, CellView.SIZE * 5, CellView.SIZE*2 - 2, 100);
  }

}
