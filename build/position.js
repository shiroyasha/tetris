"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Position = function () {
  function Position() {
    _classCallCheck(this, Position);
  }

  _createClass(Position, null, [{
    key: "add",
    value: function add(a, b) {
      return { x: a.x + b.x, y: a.y + b.y };
    }
  }, {
    key: "translate",
    value: function translate(arrayOfPositions, position) {
      return arrayOfPositions.map(function (p) {
        return Position.add(p, position);
      });
    }
  }]);

  return Position;
}();