"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Matrix = function () {
  function Matrix(width, height) {
    _classCallCheck(this, Matrix);

    this.width = width;
    this.height = height;

    this.generateCells();
  }

  _createClass(Matrix, [{
    key: "set",
    value: function set(position, value) {
      this.cells[position.y][position.x] = value;
    }
  }, {
    key: "value",
    value: function value(position) {
      return this.cells[position.y][position.x];
    }
  }, {
    key: "forEachPosition",
    value: function forEachPosition(callback) {
      for (var i = 0; i < this.height; i++) {
        for (var j = 0; j < this.width; j++) {
          callback({ x: j, y: i });
        }
      }
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
  }, {
    key: "removeLine",
    value: function removeLine(y) {
      console.log("removing line", y);

      for (var i = y; i >= 1; i--) {
        this.cells[i] = this.cells[i - 1];
      }

      this.cells[0] = this.generateLine();
    }
  }, {
    key: "isValidPosition",
    value: function isValidPosition(position) {
      return position.y < this.height && position.y >= 0 && position.x < this.width && position.x >= 0;
    }
  }, {
    key: "areValidPositions",
    value: function areValidPositions(positions) {
      var _this = this;

      return positions.every(function (position) {
        return _this.isValidPosition(position);
      });
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(position) {
      return !this.isFilled(position);
    }
  }, {
    key: "areEmptyPositions",
    value: function areEmptyPositions(positions) {
      var _this2 = this;

      return positions.every(function (position) {
        return _this2.isEmpty(position);
      });
    }
  }, {
    key: "isFilled",
    value: function isFilled(position) {
      return this.value(position) !== null;
    }
  }, {
    key: "generateCells",
    value: function generateCells() {
      this.cells = [];

      for (var i = 0; i < this.height; i++) {
        this.cells[i] = this.generateLine();
      }
    }
  }, {
    key: "generateLine",
    value: function generateLine() {
      var result = [];

      for (var j = 0; j < this.width; j++) {
        result[j] = null;
      }

      return result;
    }
  }]);

  return Matrix;
}();