"use strict";

Math.mod = function (a, b) {
  var remainder = a % b;

  return remainder < 0 ? b + remainder : remainder;
};

Math.randomInt = function (a, b) {
  return Math.floor(Math.random() * (b - a) + a);
};