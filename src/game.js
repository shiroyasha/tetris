class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
    this.lastTick = null;
  }

  start() {
    this.loop();
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
    //console.log(dt);
  }

  render(g) {
    g.fillRect(0, 0, 300, 300);
  }
}
