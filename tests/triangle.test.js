const Triangle = require('../lib/Triangle');
//	we're testing that we can create a new triangle object that has a color, text, and text color
describe('Triangle', () => {
  it('creates a new triangle object with color, text and text color properties', () => {
    const triangle = new Triangle('red', 'sometext', 'black');
    expect(triangle.shapeColor).toBe('red');
    expect(triangle.shapeText).toBe('sometext');
    expect(triangle.textColor).toBe('black');
  });
});
