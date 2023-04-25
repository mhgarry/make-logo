const Shape = require('./shapes');
// if user selects a Triangle then we will create a new Triangle and extend our values from the shape parent class using the constructor values by calling the parent's class constructor method and exposing the child class. We are then rendering the Triangle with the parameters passed in from the constructor
class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `
    <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>
        </svg>
        `;
  }
}

module.exports = Triangle;
