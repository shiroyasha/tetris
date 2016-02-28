"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventsHandler = function () {
  function EventsHandler() {
    _classCallCheck(this, EventsHandler);

    this.callbacks = {
      left: [],
      right: [],
      rotateLeft: [],
      rotateRight: [],
      speedUp: [],
      resetSpeed: [],
      start: []
    };

    this.registerEventHandler();
  }

  _createClass(EventsHandler, [{
    key: "registerEventHandler",
    value: function registerEventHandler() {
      window.addEventListener("keydown", this.onKeyDown.bind(this), false);
      window.addEventListener("keyup", this.onKeyUp.bind(this), false);
    }
  }, {
    key: "onLeft",
    value: function onLeft(action) {
      this.callbacks.left.push(action);
    }
  }, {
    key: "onRight",
    value: function onRight(action) {
      this.callbacks.right.push(action);
    }
  }, {
    key: "onRotateLeft",
    value: function onRotateLeft(action) {
      this.callbacks.rotateLeft.push(action);
    }
  }, {
    key: "onRotateRight",
    value: function onRotateRight(action) {
      this.callbacks.rotateRight.push(action);
    }
  }, {
    key: "speedUp",
    value: function speedUp(action) {
      this.callbacks.speedUp.push(action);
    }
  }, {
    key: "resetSpeed",
    value: function resetSpeed(action) {
      this.callbacks.resetSpeed.push(action);
    }
  }, {
    key: "onStart",
    value: function onStart(action) {
      this.callbacks.start.push(action);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      this.findKeyDownCallbacks(event.keyCode).forEach(function (callback) {
        callback();
      });
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      this.findKeyUpCallbacks(event.keyCode).forEach(function (callback) {
        callback();
      });
    }
  }, {
    key: "findKeyDownCallbacks",
    value: function findKeyDownCallbacks(keyCode) {
      switch (keyCode) {
        case 37:
          return this.callbacks.left;
        case 39:
          return this.callbacks.right;
        case 40:
          return this.callbacks.speedUp;
        case 38:
          return this.callbacks.rotateLeft;
        case 32:
          return this.callbacks.start;
        default:
          return [];
      }
    }
  }, {
    key: "findKeyUpCallbacks",
    value: function findKeyUpCallbacks(keyCode) {
      switch (keyCode) {
        case 40:
          return this.callbacks.resetSpeed;
        default:
          return [];
      }
    }
  }]);

  return EventsHandler;
}();

var Events = new EventsHandler();