const Shape = require('../lib/shapes');
// describing a shape that has a color, text, and text color properties. We are creating this new shape object using our shape class constructor. Because we are using the Shape class  constructor, we are testing the shapeColor, shapeText, and TextColor properties of the shape class. These tests verify that the color, text, and text color properties of the new shape object are correct.
describe('Shape', () => {
  test('creates a new shape object with color, text, and text color properties', () => {
    const shape = new Shape('red', 'dog', 'white');
    expect(shape.shapeColor).toBe('red');
    expect(shape.shapeText).toBe('dog');
    expect(shape.textColor).toBe('white');
  });
});
