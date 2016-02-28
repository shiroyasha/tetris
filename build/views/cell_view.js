"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CellView = function () {
  function CellView() {
    _classCallCheck(this, CellView);
  }

  _createClass(CellView, null, [{
    key: "renderEmpty",
    value: function renderEmpty(graphic, position) {
      CellView.render(graphic, position, "#333333");
    }
  }, {
    key: "render",
    value: function render(graphic, position, color) {
      graphic.fillStyle = color;

      var x = position.x * CellView.SIZE;
      var y = position.y * CellView.SIZE;

      var paddedX = x + Math.floor(CellView.PADDING / 2);
      var paddedY = y + Math.floor(CellView.PADDING / 2);

      var paddedSize = CellView.SIZE - CellView.PADDING;

      graphic.roundRect(paddedX, paddedY, paddedSize, paddedSize, CellView.RADIUS);

      graphic.fill();
    }
  }, {
    key: "PADDING",
    get: function get() {
      return 4;
    }
  }, {
    key: "RADIUS",
    get: function get() {
      return 3;
    }
  }, {
    key: "SIZE",
    get: function get() {
      return 40;
    }
  }]);

  return CellView;
}();