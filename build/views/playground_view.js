"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlaygroundView = function () {
  function PlaygroundView() {
    _classCallCheck(this, PlaygroundView);
  }

  _createClass(PlaygroundView, null, [{
    key: "render",
    value: function render(graphics, model) {
      PlaygroundView.renderSidebar(graphics, model);
      PlaygroundView.renderMatrix(graphics, model);

      if (model.isPending()) {
        NewGameView.render(graphics);
      }

      if (model.isFinished()) {
        GameOverView.render(graphics);
      }
    }
  }, {
    key: "renderSidebar",
    value: function renderSidebar(graphics, model) {
      graphics.save();
      graphics.translate(model.matrix.width * CellView.SIZE, 0);
      graphics.translate(CellView.SIZE, CellView.SIZE);

      ScoreView.render(graphics, model.score);

      graphics.translate(0, CellView.SIZE * 3);

      NextTetrominoView.render(graphics, model.nextTetromino);

      graphics.restore();
    }
  }, {
    key: "renderMatrix",
    value: function renderMatrix(graphics, model) {
      graphics.save();
      graphics.translate(0, -4 * CellView.SIZE);

      MatrixView.render(graphics, model.matrix);

      TetrominoView.render(graphics, model.tetromino);

      graphics.restore();
    }
  }]);

  return PlaygroundView;
}();