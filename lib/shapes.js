// shape parent class to extend to triangle, circle, and square

class Shape {
  constructor(shapeColor, shapeText, textColor) {
    this.shapeColor = shapeColor;
    this.shapeText = shapeText;
    this.textColor = textColor;
  }
}
// export the shape class
module.exports = Shape;
