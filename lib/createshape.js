Const shape = require('./shape');
const Circle = require('./Circle');
const { shape } = require('./construct');
const Square = require('./Rectangle');
const Triangle = require('./Triangle');

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
