"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MatrixView = function () {
  function MatrixView() {
    _classCallCheck(this, MatrixView);
  }

  _createClass(MatrixView, null, [{
    key: "render",
    value: function render(graphic, model) {
      model.forEachPosition(function (position) {
        MatrixView.renderCell(graphic, model, position);
      });
    }
  }, {
    key: "renderCell",
    value: function renderCell(graphic, model, position) {
      if (position.y < 4) return;

      if (model.isFilled(position)) {
        var color = model.value(position);

        CellView.render(graphic, position, color);
      } else {
        CellView.renderEmpty(graphic, position);
      }
    }
  }]);

  return MatrixView;
}();