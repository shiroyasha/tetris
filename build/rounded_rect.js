"use strict";

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  this.beginPath();
  if (r < 1) {
    this.rect(x, y, w, h);
  } else {
    if (window["opera"]) {
      this.moveTo(x + r, y);
      this.arcTo(x + r, y, x, y + r, r);
      this.lineTo(x, y + h - r);
      this.arcTo(x, y + h - r, x + r, y + h, r);
      this.lineTo(x + w - r, y + h);
      this.arcTo(x + w - r, y + h, x + w, y + h - r, r);
      this.lineTo(x + w, y + r);
      this.arcTo(x + w, y + r, x + w - r, y, r);
    } else {
      this.moveTo(x + r, y);
      this.arcTo(x + w, y, x + w, y + h, r);
      this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r);
      this.arcTo(x, y, x + w, y, r);
    }
  }
  this.closePath();
};