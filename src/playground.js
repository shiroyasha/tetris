class Playground {
  constructor() {
    this.cellSize = 30;

    this.matrix = new Matrix(10, 24);

    this.timeSinceLastMove = 0;
    this.moveInterval = 300;

    this.handleTetraminoEvents();
    this.nextTetramino();
  }

  handleTetraminoEvents() {
    Events.onLeft(() => { this.tetromino.position.x -= 1; });
    Events.onRight(() => { this.tetromino.position.x += 1; });
  }

  render(g) {
    if(this.tetromino) {
      g.save();

      let xTranslation = this.tetromino.position.x * this.cellSize;
      let yTranslation = (this.tetromino.position.y-4) * this.cellSize;

      g.translate(xTranslation, yTranslation);

      this.tetromino.render(g);
      g.restore();
    }

    this.matrix.render(g);
  }

  update(dt) {
    this.timeSinceLastMove += dt;

    while(this.timeSinceLastMove > this.moveInterval) {
      this.timeSinceLastMove -= this.moveInterval;

      let nextPosition = Position.add(this.tetromino.position, {x: 0, y: 1});

      if(this.canTetrominoMoveTo(nextPosition)) {
        this.tetromino.setPosition(nextPosition);
      } else {
        this.matrix.integrateTetromino(this.tetromino);
        this.nextTetramino();
      }
    }
  }

  nextTetramino() {
    this.tetromino = new TetrominoFactory.generate();
    this.tetromino.setPosition({ x: 4, y: 0 });
  }

  canTetrominoMoveTo(position) {
    let cellPositions = this.tetromino.cellPositions.map((cellPosition) => {
      return Position.add(cellPosition, position);
    });

    return this.matrix.areValidPositions(cellPositions) &&
           this.matrix.areEmptyPositions(cellPositions);
  }
}
