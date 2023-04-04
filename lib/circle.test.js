const Circle = require('./circle')



describe('Circle', () => {
	test('renders a red circle', () => {
		const shape = new Circle();
		shape.setColor('red');
		expect(shape.render()).toEqual('<circle cx="100" cy="50" r="50" fill="red" />');
	});
});
//we're testing if we're going to render a red circle
