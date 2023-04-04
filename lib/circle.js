//test all 3 shapes we can make with SVG
//tests circle by making a circle class and intializing a constructor that sets it's color property to an empty string. Then with setColor I give a container for the color. and with render i give a container for the pixels
class Circle {
	constructor() {
		this.color = '';
	}

	setColor(color) {
		this.color = color;
	}

	render() {
		return `<circle cx="100" cy="50" r="50" fill="${this.color}" />`;
	}
}
//export circle container to testing suite
module.exports = Circle;
