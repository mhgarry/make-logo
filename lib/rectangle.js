const Shape = require('./shapes');
// if user selects a rectangle then we will create a new rectangle and extend our values from the shape parent class using the constructor values by calling the parent's class constructor method and exposing the child class. We are then rendering the rectangle with the parameters passed in from the constructor
class Rectangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `
		<svg version="1.1"
				width="300" height="200"
				xmlns="http://www.w3.org/2000/svg">
				<rect width="200" height="100" fill="${this.shapeColor}"/>
				<text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>
		</svg>
		`;
  }
}
module.exports = Rectangle;
