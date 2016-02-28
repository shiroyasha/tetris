"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tetromino = function () {
  function Tetromino(shapes, color) {
    _classCallCheck(this, Tetromino);

    this.position = { x: 0, y: 0 };
    this.rotationIndex = 0;
    this.shapes = shapes;
    this.color = color;
  }

  _createClass(Tetromino, [{
    key: "rotateLeft",
    value: function rotateLeft() {
      this.rotationIndex = Math.mod(this.rotationIndex + 1, this.shapes.length);
    }
  }, {
    key: "rotateRight",
    value: function rotateRight() {
      this.rotationIndex = Math.mod(this.rotationIndex - 1, this.shapes.length);
    }
  }, {
    key: "cellPositions",
    get: function get() {
      var shape = this.shapes[this.rotationIndex];
      var result = [];

      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (shape[i][j] === 1) {
            result.push({ x: j, y: i });
          }
        }
      }

      return Position.translate(result, this.position);
    }
  }]);

  return Tetromino;
}();