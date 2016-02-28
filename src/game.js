class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
    this.lastTick = null;
    this.playground = new Playground();

    Events.onStart(this.startNewGame.bind(this));
  }

  start() {
    window.requestAnimationFrame((timestamp) => {
      this.step(timestamp);
      this.start();
    });
  }

  startNewGame() {
    if(this.playground.isPending()) {
      this.playground.start();
    } else if(this.playground.isFinished()) {
      this.playground = new Playground();
      this.playground.start();
    }
  }

  step(timestamp) {
    var deltaTime = timestamp - (this.lastTick || timestamp);

    this.lastTick = timestamp;

    this.update(deltaTime);
    this.render(this.canvasContext);
  }

  update(dt) {
    if(!this.playground.isStarted()) return;

    this.playground.update(dt);
  }

  render(g) {
    g.clearRect(0, 0, this.canvas.width, this.canvas.height);

    PlaygroundView.render(g, this.playground);
  }
}
