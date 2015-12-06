class EventsHandler {

  constructor() {
    this.callbacks = {
      left: [],
      right: [],
      rotateLeft: [],
      rotateRight: [],
      speedUp: [],
      resetSpeed: [],
    };

    this.registerEventHandler();
  }

  registerEventHandler() {
    window.addEventListener("keydown", this.onKeyDown.bind(this), false);
    window.addEventListener("keyup", this.onKeyUp.bind(this), false);
  }

  onLeft(action) {
    this.callbacks.left.push(action);
  }

  onRight(action) {
    this.callbacks.right.push(action);
  }

  onRotateLeft(action) {
    this.callbacks.rotateLeft.push(action);
  }

  onRotateRight(action) {
    this.callbacks.rotateRight.push(action);
  }

  speedUp(action) {
    this.callbacks.speedUp.push(action);
  }

  resetSpeed(action) {
    this.callbacks.resetSpeed.push(action);
  }

  onKeyDown(event) {
    this.findKeyDownCallbacks(event.keyCode).forEach((callback) => { callback(); });
  }

  onKeyUp(event) {
    this.findKeyUpCallbacks(event.keyCode).forEach((callback) => { callback(); });
  }

  findKeyDownCallbacks(keyCode) {
    switch(event.keyCode) {
      case 37:
        return this.callbacks.left;
      case 39:
        return this.callbacks.right;
      case 40:
        return this.callbacks.speedUp;
      case 90:
        return this.callbacks.rotateLeft;
      case 88:
        return this.callbacks.rotateRight;
      default:
        return [];
    }
  }

  findKeyUpCallbacks(keyCode) {
    switch(event.keyCode) {
      case 40:
        return this.callbacks.resetSpeed;
      default:
        return [];
    }
  }
}

var Events = new EventsHandler();
