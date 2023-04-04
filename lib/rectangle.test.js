const Rectangle = require('./rectangle')

describe('Rectangle', () => {
	test('renders a yellow rectangle', () => {
		const shape = new Rectangle();
		shape.setColor('yellow');
		expect(shape.render()).toEqual('<rect x="0" y="0" width="200" height="100" fill="yellow" />'
		);
	});
});
//we're testing if we're going to render a yellow rectangle
