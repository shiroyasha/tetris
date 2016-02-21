class NextTetrominoView {

  static render(graphics, model) {
    NextTetrominoView.renderTitle(graphics);
    NextTetrominoView.renderBackgroung(graphics);

    model.eachCellPosition((position) => {
      CellView.render(graphics, position, model.color())
    });
  }

  static renderTitle(graphics) {
    graphics.textAlign = "center";
    graphics.font = "bold 20px helvetica";
    graphics.fillStyle = "white";

    graphics.fillText("NEXT", CellView.SIZE*2, -10, CellView.SIZE*4);
  }

  static renderBackgroung(graphics) {
    for(let y=0; y < 4; y++) {
      for(let x=0; x < 4; x++) {
        CellView.renderEmpty(graphics, {x: x, y: y});
      }
    }
  }

}
