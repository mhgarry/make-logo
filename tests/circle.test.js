const Cirlce = require('..//lib/Circle');
//	we're testing that we can create a new circle object that has a color, text, and text color
describe('Circle', () => {
  it('creates a new circle object with color, text and text color properties', () => {
    const circle = new Cirlce('red', 'sometext', 'black');
    expect(circle.shapeColor).toBe('red');
    expect(circle.shapeText).toBe('sometext');
    expect(circle.textColor).toBe('black');
  });
});
