"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScoreView = function () {
  function ScoreView() {
    _classCallCheck(this, ScoreView);
  }

  _createClass(ScoreView, null, [{
    key: "render",
    value: function render(graphics, score) {
      ScoreView.renderTitle(graphics);
      ScoreView.renderBackground(graphics);
      ScoreView.renderScore(graphics, score);
    }
  }, {
    key: "renderTitle",
    value: function renderTitle(graphics) {
      graphics.textAlign = "center";
      graphics.font = "bold 20px helvetica";
      graphics.fillStyle = "white";

      graphics.fillText("SCORE", CellView.SIZE * 2, -10, CellView.SIZE * 4);
    }
  }, {
    key: "renderBackground",
    value: function renderBackground(graphics) {
      for (var x = 0; x < 4; x++) {
        CellView.renderEmpty(graphics, { x: x, y: 0 });
      }
    }
  }, {
    key: "renderScore",
    value: function renderScore(graphics, score) {
      graphics.textAlign = "center";
      graphics.font = "30px helvetica";
      graphics.fillStyle = "orange";

      ScoreView.scoreDigits(score).forEach(function (digit, index) {
        var x = CellView.SIZE * index + Math.floor(CellView.SIZE / 2);
        var y = CellView.SIZE - 10;

        graphics.fillText(digit, x, y, CellView.SIZE);
      });
    }
  }, {
    key: "scoreDigits",
    value: function scoreDigits(score) {
      var digits = score.toString();
      var padding = "0000";

      var paddedScore = padding.substring(0, padding.length - digits.length) + digits;

      return paddedScore.split("");
    }
  }]);

  return ScoreView;
}();