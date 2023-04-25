const Rectangle = require('..//lib/Rectangle');
//	we're testing that we can create a new circle object that has a color, text, and text color
describe('Rectangle', () => {
  it('creates a new rectangle object with color, text and text color properties', () => {
    const rectangle = new Rectangle('blue', 'test', 'yellow');
    expect(rectangle.shapeColor).toBe('blue');
    expect(rectangle.shapeText).toBe('test');
    expect(rectangle.textColor).toBe('yellow');
  });
});
