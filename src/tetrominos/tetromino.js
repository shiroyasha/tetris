class Tetromino {
  constructor() {
  }

  shapeMatrix() {
    throw new Error("Shape matrix is not implemented");
  }

  render(g) {
    let shape = this.shapeMatrix();

    for(let i=0; i < 4; i++) {
      for(let j=0; j < 4; j++) {
        if(shape[i][j] === 1) {
          g.fillRect(j*100, i*100, 100, 100);
        }
      }
    }
  }

  update(dt) {
  }
}
