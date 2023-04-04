//test all 3 shapes we can make with SVG
//tests circle by making a rectangle class and intializing a constructor that sets it's color property to an empty string. Then with setColor I give a container for the color. and with render i give a container for the pixels. We're going to run a contianer for all three properties
class Rectangle {
	constructor() {
		this.color = '';
	}

	setColor(color) {
		this.color = color;
	}

	render() {
		return `<rect x="0" y="0" width="200" height="100" fill="${this.color}" />`;
	}
}
//export Rectangle to testing suite
module.exports = Rectangle;

