class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
    this.lastTick = null;

    Events.onStart(this.startNewGame.bind(this));
  }

  start() {
    this.playground = new Playground();

    this.loop();
  }

  loop() {
    window.requestAnimationFrame((timestamp) => {
      this.step(timestamp);
      this.loop();
    });
  }

  startNewGame() {
    if(this.playground.isFinished()) {
      this.playground = new Playground();
    }
  }

  step(timestamp) {
    var deltaTime = timestamp - (this.lastTick || timestamp);

    this.lastTick = timestamp;

    this.update(deltaTime);
    this.render(this.canvasContext);
  }

  update(dt) {
    if(!this.playground.isFinished()) {
      this.playground.update(dt);
    }
  }

  render(g) {
    g.clearRect(0, 0, this.canvas.width, this.canvas.height);

    PlaygroundView.render(g, this.playground);
  }
}
