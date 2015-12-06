class Playground {
  constructor() {
    this.cellSize = 30;

    this.matrix = new Matrix(10, 24);

    this.timeSinceLastStep = 0;
    this.moveInterval = 300;
    this.fastFall = false;

    this.handleTetraminoEvents();
    this.nextTetromino();
  }

  handleTetraminoEvents() {
    Events.onLeft(this.moveTetrominoBy.bind(this, {x: -1, y: 0}));
    Events.onRight(this.moveTetrominoBy.bind(this, {x: 1, y: 0}));
    Events.speedUp(() => { console.log("here"); this.fastFall = true; });
    Events.resetSpeed(() => { console.log("down"); this.fastFall = false; });
  }

  render(g) {
    this.tetromino.render(g);
    this.matrix.render(g);
  }

  update(dt) {
    this.timeSinceLastStep += dt;

    let stepTime = this.fastFall ? Math.floor(this.moveInterval/10) : this.moveInterval;

    while(this.timeSinceLastStep > stepTime) {
      this.timeSinceLastStep -= stepTime;

      this.nextStep();
    }
  }

  nextStep() {
    let nextPosition = Position.add(this.tetromino.position, {x: 0, y: 1});

    if(this.canTetrominoMoveTo(nextPosition)) {
      this.tetromino.setPosition(nextPosition);
    } else {
      this.integrate();
    }
  }

  integrate() {
    this.matrix.integrateTetromino(this.tetromino);
    this.nextTetromino();
  }

  nextTetromino() {
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

  moveTetrominoBy(position) {
    let newPosition = Position.add(this.tetromino.position, position);

    if(this.canTetrominoMoveTo(newPosition)) {
      this.tetromino.setPosition(newPosition);
    }
  }
}
