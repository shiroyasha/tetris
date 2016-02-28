"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NextTetrominoView = function () {
  function NextTetrominoView() {
    _classCallCheck(this, NextTetrominoView);
  }

  _createClass(NextTetrominoView, null, [{
    key: "render",
    value: function render(graphics, model) {
      NextTetrominoView.renderTitle(graphics);
      NextTetrominoView.renderBackground(graphics);

      TetrominoView.render(graphics, model);
    }
  }, {
    key: "renderTitle",
    value: function renderTitle(graphics) {
      graphics.textAlign = "center";
      graphics.font = "bold 20px helvetica";
      graphics.fillStyle = "white";

      graphics.fillText("NEXT", CellView.SIZE * 2, -10, CellView.SIZE * 4);
    }
  }, {
    key: "renderBackground",
    value: function renderBackground(graphics) {
      for (var y = 0; y < 4; y++) {
        for (var x = 0; x < 4; x++) {
          CellView.renderEmpty(graphics, { x: x, y: y });
        }
      }
    }
  }]);

  return NextTetrominoView;
}();