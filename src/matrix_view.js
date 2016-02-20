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

      this._renderFilledCell(x, y, color);
    } else {
      this._renderEmptyCell(x, y);
    }
  }

  // private

  _renderFilledCell(x, y, color) {
    this.graphic.fillStyle = color;
    this.graphic.fillRect(x, y, MatrixView.CELL_SIZE, MatrixView.CELL_SIZE);
  }

  _renderEmptyCell(x, y) {
    this.graphic.strokeStyle = MatrixView.STROKE_COLOR
    this.graphic.beginPath();
    this.graphic.rect(x, y, MatrixView.CELL_SIZE, MatrixView.CELL_SIZE);
    this.graphic.stroke();
  }
}
