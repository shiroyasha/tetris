Math.modulo = function(a, b) {
  let remainder = a % b;

  return a < 0 ? b + a : a;
}

Math.randomInt = function(a, b) {
  return Math.floor(Math.random()*(b-a) + a);
}
