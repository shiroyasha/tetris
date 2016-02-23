class GameOverView {

  static render(graphics) {
    GameOverView.renderBackground(graphics);
    // GameOverView.renderPanel(graphics);
    GameOverView.renderTitle(graphics);
    GameOverView.renderSubtitle(graphics);
  }

  static renderTitle(graphics) {
    graphics.textAlign = "center";
    graphics.font = "bold 50px helvetica";
    graphics.fillStyle = "white";

    let x = CellView.SIZE*5;
    let y = CellView.SIZE*10;

    graphics.fillText("GAME OVER", x, y);
  }

  static renderSubtitle(graphics) {
    graphics.textAlign = "center";
    graphics.font = "bold 18px helvetica";
    graphics.fillStyle = "orange";

    let x = CellView.SIZE*5;
    let y = CellView.SIZE*11;

    graphics.fillText("PRESS SPACE TO START AGAIN", x, y);
  }

  static renderBackground(graphics) {
    let x = 0;
    let y = 0;
    let width = CellView.SIZE*20;
    let height = CellView.SIZE*20;

    graphics.fillStyle = "rgba(0, 0, 0, 0.7)";

    graphics.roundRect(x, y, width, height, 2)
    graphics.fill()
  }

}
