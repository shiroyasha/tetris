class TetrominoView {

  static render(graphic, model) {
    model.cellPositions.forEach((position) => {
      CellView.render(graphic, position, model.color)
    });
  }

}
