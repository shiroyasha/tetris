class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
  }

  start() {
    this.render(this.canvasContext);
  }

  render(g) {
    g.fillRect(0, 0, 300, 300);
  }
}

var canvas = document.getElementById("gameCanvas");

var game = new Game(canvas);

game.start();
