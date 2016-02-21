class Playground {
  constructor() {
    this.matrix = new Matrix(10, 24);
    this.score = 0;

    this.timeSinceLastStep = 0;
    this.moveInterval = 300;
    this.fastFall = false;

    this.handleTetraminoEvents();
    this.generateTetromino();
  }

  handleTetraminoEvents() {
    Events.onLeft(this.moveTetrominoBy.bind(this, {x: -1, y: 0}));
    Events.onRight(this.moveTetrominoBy.bind(this, {x: 1, y: 0}));
    Events.speedUp(() => { console.log("here"); this.fastFall = true; });
    Events.resetSpeed(() => { console.log("down"); this.fastFall = false; });
    Events.onRotateLeft(this.rotateTetromino.bind(this));
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
      this.clearFullLines();
      this.generateTetromino();
    }
  }

  integrate() {
    this.tetromino.eachCellPosition((position) => {
      let matrixPosition = Position.add(this.tetromino.position, position);

      this.matrix.set(matrixPosition, this.tetromino.color());
    });
  }

  clearFullLines() {
    for(let y=0; y < this.matrix.height; y++) {
      if(this.matrix.isFullLine(y)) {
        this.score++;
        this.matrix.removeLine(y);
      }
    }
  }

  generateTetromino() {
    if(!this.nextTetromino) {
      this.nextTetromino = TetrominoFactory.generate();
    }

    this.tetromino = this.nextTetromino;
    this.nextTetromino = TetrominoFactory.generate();
  }

  canTetrominoMoveTo(position) {
    let cellPositions = this.tetromino.cellPositions.map((cellPosition) => {
      return Position.add(cellPosition, position);
    });

    return this.matrix.areValidPositions(cellPositions) &&
           this.matrix.areEmptyPositions(cellPositions);
  }

  rotateTetromino() {
    this.tetromino.rotateLeft();

    if(!this.canTetrominoMoveTo(this.tetromino.position)) {
      this.tetromino.rotateRight();
    }
  }

  moveTetrominoBy(position) {
    let newPosition = Position.add(this.tetromino.position, position);

    if(this.canTetrominoMoveTo(newPosition)) {
      this.tetromino.setPosition(newPosition);
    }
  }
}
