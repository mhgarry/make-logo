/// where we initialize the app and create the logo
const inquirer = require('inquirer');
const fs = require('fs');
const prompts = require('./lib/prompt');
const createShape = require('./lib/createshape')


// creates the svg file using the data from the prompts
function makeLogo(response) {
const svg = createShape(response);
	fs.writeFile('testSVG.svg', svg, ()=> console.log('Your logo has been created!'));
}
// initialize the app
function init() {
	inquirer.prompt(prompts)
	.then((response) => {
      makeLogo(response);
	})
	.catch((err) => {
    console.log(err);
  });
}



init();
