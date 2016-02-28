"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TetrominoMatrix = function (_Matrix) {
  _inherits(TetrominoMatrix, _Matrix);

  function TetrominoMatrix(width, height) {
    _classCallCheck(this, TetrominoMatrix);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TetrominoMatrix).call(this, width, height));
  }

  _createClass(TetrominoMatrix, [{
    key: "integrate",
    value: function integrate(tetromino) {
      var _this2 = this;

      tetromino.cellPositions.forEach(function (position) {
        _this2.set(position, tetromino.color);
      });
    }
  }, {
    key: "canFit",
    value: function canFit(tetromino) {
      return this.areValidPositions(tetromino.cellPositions) && this.areEmptyPositions(tetromino.cellPositions);
    }
  }, {
    key: "clearFullLines",
    value: function clearFullLines() {
      var fullLineCount = 0;

      for (var y = 0; y < this.height; y++) {
        if (this.isFullLine(y)) {
          this.removeLine(y);
          fullLineCount++;
        }
      }

      return fullLineCount;
    }
  }, {
    key: "removeLine",
    value: function removeLine(y) {
      for (var i = y; i >= 1; i--) {
        this.cells[i] = this.cells[i - 1];
      }

      this.cells[0] = this.generateLine();
    }
  }, {
    key: "isFullLine",
    value: function isFullLine(y) {
      for (var x = 0; x < this.width; x++) {
        if (this.cells[y][x] === null) {
          return false;
        }
      }

      return true;
    }
  }]);

  return TetrominoMatrix;
}(Matrix);