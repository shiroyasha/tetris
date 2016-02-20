class MatrixView {
  static get CELL_SIZE() { return 30; }
  static get STROKE_COLOR() { return "#eeeeee"; }

  static render(model, graphic) {
    new MatrixView(model, graphic).render();
  }

  constructor(model, graphic) {
    this.graphic = graphic;
    this.model = model;
  }

  render() {
    this.model.forEachPosition((position) => {
      if(!this.isCellHidden(position)) {
        this.renderCell(position);
      }
    });
  }

  isCellHidden(position) {
    return position.y < 4;
  }

  renderCell(position) {
    let x = position.x * MatrixView.CELL_SIZE;
    let y = (position.y-4) * MatrixView.CELL_SIZE;

    if(this.model.isFilled(position)) {
      let color = this.model.value(position);

      CellView.renderCell(this.graphic, x, y, color);
    } else {
      CellView.renderEmptyCell(this.graphic, x, y);
    }
  }
}
