class TetrominoView {

  static render(graphic, model) {
    model.eachCellPosition((position) => {
      let matrixPosition = Position.add(position, model.position);

      CellView.render(graphic, matrixPosition, model.color())
    });
  }

}
