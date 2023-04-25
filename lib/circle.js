const Shape = require('./shapes');
//if user selects a circle then it will render an svg file circle with choosen color, text, and text color

//using our shape class to create a new circle and extending our values from our shape class using the constructor and super method
class Circle extends Shape {
  // eslint-disable-next-line no-useless-constructor
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
  }
}

module.exports = Circle;
