"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameOverView = function () {
  function GameOverView() {
    _classCallCheck(this, GameOverView);
  }

  _createClass(GameOverView, null, [{
    key: "render",
    value: function render(graphics) {
      GameOverView.renderBackground(graphics);
      // GameOverView.renderPanel(graphics);
      GameOverView.renderTitle(graphics);
      GameOverView.renderSubtitle(graphics);
    }
  }, {
    key: "renderTitle",
    value: function renderTitle(graphics) {
      graphics.textAlign = "center";
      graphics.font = "bold 50px helvetica";
      graphics.fillStyle = "white";

      var x = CellView.SIZE * 5;
      var y = CellView.SIZE * 10;

      graphics.fillText("GAME OVER", x, y);
    }
  }, {
    key: "renderSubtitle",
    value: function renderSubtitle(graphics) {
      graphics.textAlign = "center";
      graphics.font = "bold 18px helvetica";
      graphics.fillStyle = "orange";

      var x = CellView.SIZE * 5;
      var y = CellView.SIZE * 11;

      graphics.fillText("PRESS SPACE TO START AGAIN", x, y);
    }
  }, {
    key: "renderBackground",
    value: function renderBackground(graphics) {
      var x = 0;
      var y = 0;
      var width = CellView.SIZE * 20;
      var height = CellView.SIZE * 20;

      graphics.fillStyle = "rgba(0, 0, 0, 0.7)";

      graphics.roundRect(x, y, width, height, 2);
      graphics.fill();
    }
  }]);

  return GameOverView;
}();