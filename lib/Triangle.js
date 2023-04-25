const Shape = require('./shapes');
//if user selects a circle then it will render an svg file circle with choosen color, text, and text color

// using our shape class to create a new circle and extending our values from our shape class using the constructor and super method
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
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
  }
}

module.exports = Triangle;
