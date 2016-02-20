class MatrixView {
  static render(graphic, model) {
    model.forEachPosition((position) => {
      MatrixView.renderCell(graphic, model, position);
    });
  }

  static renderCell(graphic, model, position) {
    if(model.isFilled(position)) {
      let color = model.value(position);

      CellView.render(graphic, position, color);
    } else {
      CellView.renderEmpty(graphic, position);
    }
  }
}
