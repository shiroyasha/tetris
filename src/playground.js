class Playground {
  constructor() {
    this.matrix = new TetrominoMatrix(10, 24);
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
    let movementSucceded = this.moveTetrominoBy({x: 0, y: 1});

    if(!movementSucceded) {
      this.matrix.integrate(this.tetromino);
      this.score += this.matrix.clearFullLines();
      this.generateTetromino();
    }
  }

  generateTetromino() {
    if(!this.nextTetromino) {
      this.nextTetromino = TetrominoFactory.generate();
    }

    this.tetromino = this.nextTetromino;
    this.nextTetromino = TetrominoFactory.generate();
  }

  rotateTetromino() {
    this.tetromino.rotateLeft();

    if(!this.matrix.canFit(this.tetromino)) {
      this.tetromino.rotateRight();
    }
  }

  moveTetrominoBy(position) {
    let oldPosition = this.tetromino.position;
    this.tetromino.setPosition(Position.add(this.tetromino.position, position));

    if(!this.matrix.canFit(this.tetromino)) {
      this.tetromino.setPosition(oldPosition);
      return false;
    } else {
      return true;
    }
  }
}
