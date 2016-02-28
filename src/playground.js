class Playground {
  constructor() {
    this.matrix = new TetrominoMatrix(10, 24);
    this.score = 0;

    this.timeSinceLastStep = 0;
    this.moveInterval = 300;
    this.fastFall = false;

    this.handleTetraminoEvents();
    this.generateTetromino();

    this.state = "pending";
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

  isFinished() {
    return this.state == "finished";
  }

  finish() {
    this.state = "finished";
  }

  nextStep() {
    let movementSucceded = this.moveTetrominoBy({x: 0, y: 1});

    if(movementSucceded) return;

    this.matrix.integrate(this.tetromino);
    this.score += this.matrix.clearFullLines();
    this.generateTetromino();

    if(!this.matrix.canFit(this.tetromino)) {
      this.finish();
    }
  }

  generateTetromino() {
    if(!this.nextTetromino) {
      this.nextTetromino = TetrominoFactory.generate();
    }

    this.tetromino = this.nextTetromino;
    this.nextTetromino = TetrominoFactory.generate();

    this.tetromino.position = {x: 4, y: 0};
  }

  rotateTetromino() {
    this.tetromino.rotateLeft();

    if(!this.matrix.canFit(this.tetromino)) {
      this.tetromino.rotateRight();
    }
  }

  moveTetrominoBy(position) {
    let oldPosition = this.tetromino.position;
    let newPosition = Position.add(this.tetromino.position, position);

    this.tetromino.position = newPosition;

    if(!this.matrix.canFit(this.tetromino)) {
      this.tetromino.position = oldPosition;
      return false;
    } else {
      return true;
    }
  }
}
