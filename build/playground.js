"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Playground = function () {
  function Playground() {
    _classCallCheck(this, Playground);

    this.matrix = new TetrominoMatrix(10, 24);
    this.score = 0;

    this.timeSinceLastStep = 0;
    this.moveInterval = 300;
    this.fastFall = false;

    this.handleTetraminoEvents();
    this.generateTetromino();

    this.state = "pending";
  }

  _createClass(Playground, [{
    key: "handleTetraminoEvents",
    value: function handleTetraminoEvents() {
      var _this = this;

      Events.onLeft(this.moveTetrominoBy.bind(this, { x: -1, y: 0 }));
      Events.onRight(this.moveTetrominoBy.bind(this, { x: 1, y: 0 }));
      Events.speedUp(function () {
        console.log("here");_this.fastFall = true;
      });
      Events.resetSpeed(function () {
        console.log("down");_this.fastFall = false;
      });
      Events.onRotateLeft(this.rotateTetromino.bind(this));
    }
  }, {
    key: "update",
    value: function update(dt) {
      this.timeSinceLastStep += dt;

      var stepTime = this.fastFall ? Math.floor(this.moveInterval / 10) : this.moveInterval;

      while (this.timeSinceLastStep > stepTime) {
        this.timeSinceLastStep -= stepTime;

        this.nextStep();
      }
    }
  }, {
    key: "isPending",
    value: function isPending() {
      return this.state == "pending";
    }
  }, {
    key: "isStarted",
    value: function isStarted() {
      return this.state == "started";
    }
  }, {
    key: "isFinished",
    value: function isFinished() {
      return this.state == "finished";
    }
  }, {
    key: "start",
    value: function start() {
      console.log("here");
      this.state = "started";
    }
  }, {
    key: "finish",
    value: function finish() {
      this.state = "finished";
    }
  }, {
    key: "nextStep",
    value: function nextStep() {
      var movementSucceded = this.moveTetrominoBy({ x: 0, y: 1 });

      if (movementSucceded) return;

      this.matrix.integrate(this.tetromino);
      this.score += this.matrix.clearFullLines();
      this.generateTetromino();

      if (!this.matrix.canFit(this.tetromino)) {
        this.finish();
      }
    }
  }, {
    key: "generateTetromino",
    value: function generateTetromino() {
      if (!this.nextTetromino) {
        this.nextTetromino = TetrominoFactory.generate();
      }

      this.tetromino = this.nextTetromino;
      this.nextTetromino = TetrominoFactory.generate();

      this.tetromino.position = { x: 4, y: 0 };
    }
  }, {
    key: "rotateTetromino",
    value: function rotateTetromino() {
      this.tetromino.rotateLeft();

      if (!this.matrix.canFit(this.tetromino)) {
        this.tetromino.rotateRight();
      }
    }
  }, {
    key: "moveTetrominoBy",
    value: function moveTetrominoBy(position) {
      var oldPosition = this.tetromino.position;
      var newPosition = Position.add(this.tetromino.position, position);

      this.tetromino.position = newPosition;

      if (!this.matrix.canFit(this.tetromino)) {
        this.tetromino.position = oldPosition;
        return false;
      } else {
        return true;
      }
    }
  }]);

  return Playground;
}();