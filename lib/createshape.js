const { response } = require('express');
const Circle = require('./Circle');
const Rectangle = require('./Rectangle')
const Triangle = require('./Triangle');
// function passed to our render file to use the classes we created to make the SVG shape
// we pass the response object to the render file so that it can use the classes to make the SVG shape
function makeShape(response) {
	if(response.shape === 'Circle') {
		let theShape = new Circle(response.shapeColor, response.shapeText, response.textColor )
		return theShape.render();
	};
};

if (response.shape === 'Rectangle') {
	let theShape = new Rectangle(response.shapeColor, response.shapeText, response.textColor)
	return theShape.render
};

if (response.shape === 'Triangle') {
  let theShape = new Triangle(response.shapeColor, response.shapeText, response.textColor)
  return theShape.render
};
module.exports = makeShape;
