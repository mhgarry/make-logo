//test all 3 shapes we can make with SVG
//tests triangle by making a triangle class and intializing a constructor that sets it's color property to an empty string. Then with setColor I give a container for the color. and with render i give a container for the pixels
class Triangle {
	constructor() {
		this.color = '';
	}

	setColor(color) {
		this.color = color;
	}

	render() {
		return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
	}
};
//export Triangle to testing suite
module.exports = Triangle;
