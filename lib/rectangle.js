const Shape = require('./shapes')
//if user selects a rectangle then it will render an svg file rectangle with chosen color, text, and text color
class Rectangle extends Shape {
//using our shape class to create a new circle and extending our values from our shape class using the constructor and super method
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  };

  render() {
    return `
		<svg version="1.1"
				width="300" height="200"
				xmlns="http://www.w3.org/2000/svg">
				<rect width="200" height="100" fill="${this.shapeColor}"/>
				<text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
		</svg>
		`
  }
}
module.exports = Rectangle;
