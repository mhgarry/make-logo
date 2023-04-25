const Circle = require('./Circle');
const Rectangle = require('./Rectangle');
const Triangle = require('./Triangle');
//	we are going to use the makeshape function to create the SVG file and use if statements to determine the shape type. After determining the shape type we will assign teh shape shapeColor, shapeText, and textColor based on the inquirer resposnes. We are going to pass this function to our construct.js file to create the SVG file
function makeShape(response) {
  if (response.shape === 'Circle') {
    const theShape = new Circle(response.shapeColor, response.shapeText, response.textColor);
    return theShape.render();
  } if (response.shape === 'Rectangle') {
    const theShape = new Rectangle(response.shapeColor, response.shapeText, response.textColor);
    return theShape.render();
  } if (response.shape === 'Triangle') {
    const theShape = new Triangle(response.shapeColor, response.shapeText, response.textColor);
    return theShape.render();
  }
  // Handle unsupported shape types
  return '';
}

module.exports = makeShape;
