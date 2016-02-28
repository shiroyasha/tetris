"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
    this.lastTick = null;
    this.playground = new Playground();

    Events.onStart(this.startNewGame.bind(this));
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      var _this = this;

      window.requestAnimationFrame(function (timestamp) {
        _this.step(timestamp);
        _this.start();
      });
    }
  }, {
    key: "startNewGame",
    value: function startNewGame() {
      if (this.playground.isPending()) {
        this.playground.start();
      } else if (this.playground.isFinished()) {
        this.playground = new Playground();
        this.playground.start();
      }
    }
  }, {
    key: "step",
    value: function step(timestamp) {
      var deltaTime = timestamp - (this.lastTick || timestamp);

      this.lastTick = timestamp;

      this.update(deltaTime);
      this.render(this.canvasContext);
    }
  }, {
    key: "update",
    value: function update(dt) {
      if (!this.playground.isStarted()) return;

      this.playground.update(dt);
    }
  }, {
    key: "render",
    value: function render(g) {
      g.clearRect(0, 0, this.canvas.width, this.canvas.height);

      PlaygroundView.render(g, this.playground);
    }
  }]);

  return Game;
}();