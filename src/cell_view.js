class CellView {

  static get CELL_PADDING() { return 2; }
  static get CELL_RADIUS() { return 2; }

  static renderEmptyCell(graphic, x, y) {
    CellView.renderCell(graphic, x, y, "#333333");
  }

  static renderCell(graphic, x, y, color) {
    graphic.fillStyle = color;

    let paddedX = x + Math.floor(CellView.CELL_PADDING / 2);
    let paddedY = y + Math.floor(CellView.CELL_PADDING / 2);

    let paddedSize = MatrixView.CELL_SIZE - CellView.CELL_PADDING;

    graphic.roundRect(paddedX, paddedY, paddedSize, paddedSize, CellView.CELL_RADIUS);

    graphic.fill();
  }

}
