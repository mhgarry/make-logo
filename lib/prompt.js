const inquirer = require('inquirer');
const colorList = require('./color');
// our prompts to call in our construct.js file
const prompts = [
  {
    name: 'shape',
    message: 'What would you like your logo shape to be?',
    type: 'list',
    choices: ['Rectangle', 'Circle', 'Triangle'],
  },
  {
    name: 'shapeColor',
    message: 'What color would you like your logo shape to be?',
    type: 'list',
    choices: colorList,
  },
  {
    name: 'text',
    message: 'What text would you like to display on your logo?',
    type: 'input',
    validate: (answer) => {
      if (answer.length > 3) {
        return console.log('\n Text must be three characters or less! Please try again');
      }
      return true;
    },
  },
  {
    name: 'textColor',
    message: 'What color would you like your logo text to be?',
    type: 'list',
    choices: colorList,
  },
];

module.exports = prompts;
