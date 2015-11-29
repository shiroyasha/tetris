class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
    this.lastTick = null;
  }

  start() {
    this.loop();

    this.tetromino = new TetrominoFactory.generate();
    this.tetromino.rotateLeft();
  }

  loop() {
    window.requestAnimationFrame((timestamp) => {
      this.step(timestamp);
      this.loop();
    });
  }

  step(timestamp) {
    var deltaTime = timestamp - (this.lastTick || timestamp);

    this.lastTick = timestamp;

    this.update(deltaTime);
    this.render(this.canvasContext);

  }

  update(dt) {
    this.tetromino.update(dt);
  }

  render(g) {
    this.tetromino.render(g);
  }
}
