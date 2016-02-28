class NextTetrominoView {

  static render(graphics, model) {
    NextTetrominoView.renderTitle(graphics);
    NextTetrominoView.renderBackground(graphics);

    TetrominoView.render(graphics, model);
  }

  static renderTitle(graphics) {
    graphics.textAlign = "center";
    graphics.font = "bold 20px helvetica";
    graphics.fillStyle = "white";

    graphics.fillText("NEXT", CellView.SIZE*2, -10, CellView.SIZE*4);
  }

  static renderBackground(graphics) {
    for(let y=0; y < 4; y++) {
      for(let x=0; x < 4; x++) {
        CellView.renderEmpty(graphics, {x: x, y: y});
      }
    }
  }

}
