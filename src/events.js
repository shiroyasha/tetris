class EventsHandler {

  constructor() {
    this.callbacks = {
      left: [],
      right: [],
      rotateLeft: [],
      rotateRight: [],
      fall: []
    };

    this.registerEventHandler();
  }

  registerEventHandler() {
    window.addEventListener("keydown", this.onKeyDown.bind(this), false);
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

  onFall(action) {
    this.callbacks.fall.push(action);
  }

  onKeyDown(event) {
    this.findCallbacks(event.keyCode).forEach((callback) => { callback(); });
  }

  findCallbacks(keyCode) {
    switch(event.keyCode) {
      case 37:
        return this.callbacks.left;
      case 39:
        return this.callbacks.right;
      case 40:
        return this.callbacks.fall;
      case 90:
        return this.callbacks.rotateLeft;
      case 88:
        return this.callbacks.rotateRight;
      default:
        return [];
    }
  }
}

var Events = new EventsHandler();
