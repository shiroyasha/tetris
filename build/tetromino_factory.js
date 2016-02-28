"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TetrominoFactory = function () {
  function TetrominoFactory() {
    _classCallCheck(this, TetrominoFactory);
  }

  _createClass(TetrominoFactory, null, [{
    key: "generate",
    value: function generate(position) {
      var tetrominos = [ITetromino, JTetromino, LTetromino, OTetromino, STetromino, TTetromino, ZTetromino];

      var randomIndex = Math.randomInt(0, tetrominos.length);
      var generator = new tetrominos[randomIndex]();

      var shapes = generator.generateShapes();
      var color = generator.color();

      return new Tetromino(shapes, color);
    }
  }]);

  return TetrominoFactory;
}();