class Position {
  static add(a, b) {
    return { x: a.x + b.x, y: a.y + b.y };
  }

  static translate(arrayOfPositions, position) {
    return arrayOfPositions.map((p) => {
      return Position.add(p, position)
    });
  }
}
