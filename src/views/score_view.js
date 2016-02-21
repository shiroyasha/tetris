class ScoreView {

  static render(graphics, score) {
    ScoreView.renderTitle(graphics);
    ScoreView.renderBackground(graphics);
    ScoreView.renderScore(graphics, score);
  }

  static renderTitle(graphics) {
    graphics.textAlign = "center";
    graphics.font = "bold 20px helvetica";
    graphics.fillStyle = "white";

    graphics.fillText("SCORE", CellView.SIZE*2, -10, CellView.SIZE*4);
  }

  static renderBackground(graphics) {
    for(let x=0; x < 4; x++) {
      CellView.renderEmpty(graphics, {x: x, y: 0});
    }
  }

  static renderScore(graphics, score) {
    graphics.textAlign = "center";
    graphics.font = "30px helvetica";
    graphics.fillStyle = "orange";

    ScoreView.scoreDigits(score).forEach((digit, index) => {
      let x = CellView.SIZE * index + Math.floor(CellView.SIZE/2);
      let y = CellView.SIZE - 10;

      graphics.fillText(digit, x, y, CellView.SIZE);
    });
  }

  static scoreDigits(score) {
    let digits = score.toString();
    let padding = "0000";

    let paddedScore = padding.substring(0, padding.length - digits.length) + digits;

    return paddedScore.split("");
  }

}
