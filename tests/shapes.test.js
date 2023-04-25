const Triangle = require('./shapes');

describe('Triangle', () => {
	test('renders a blue triangle', () => {
		const shape = new Triangle();
		shape.setColor('blue');
		expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
	});
});
//we're testing if we're going to render a blue triangle
