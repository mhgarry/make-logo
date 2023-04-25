/// where we initialize the app and create the logo
// we need to import inquirer, fs, our prompts, and our createShape function to render the svg file
const inquirer = require('inquirer');
const fs = require('fs/promises');
const prompts = require('./lib/prompt.js');
const createShape = require('./lib/createshape.js');

// creates the svg file using the data from the prompts using the createShape function to make a new svg file from the class data passed to the createShape function from the prompts.js file. We are then writing the svg file to the lib folder and naming it test.svg
function makeLogo(res) {
  const svg = createShape(res);
  fs.writeFile('lib/test.svg', svg, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('SVG created!');
  });
}
// we are intializiting the app by calling the init function which takes in the responses from the prompts.js file. After that it resolves the promise to use the makeLogo function to create the svg
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
