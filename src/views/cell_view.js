class CellView {

  static get PADDING() { return 4; }
  static get RADIUS() { return 3; }
  static get SIZE() { return 40; }

  static renderEmpty(graphic, position) {
    CellView.render(graphic, position, "#333333");
  }

  static render(graphic, position, color) {
    if(CellView.isHidden(position)) return;

    graphic.fillStyle = color;

    let x = position.x * CellView.SIZE;
    let y = (position.y-4) * CellView.SIZE;

    let paddedX = x + Math.floor(CellView.PADDING / 2);
    let paddedY = y + Math.floor(CellView.PADDING / 2);

    let paddedSize = CellView.SIZE - CellView.PADDING;

    graphic.roundRect(paddedX, paddedY, paddedSize, paddedSize, CellView.RADIUS);

    graphic.fill();
  }

  static isHidden(position) {
    return position.y < 4;
  }

}
