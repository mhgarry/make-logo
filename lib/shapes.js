// shape parent class to pass values using the constructor to the child classes rectangle, triangle, and circle classes to create unique shapes
class Shape {
  constructor(shapeColor, shapeText, textColor) {
    this.shapeColor = shapeColor;
    this.shapeText = shapeText;
    this.textColor = textColor;
  }
}
// export the shape class
module.exports = Shape;
