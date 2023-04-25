const inquirer = require('inquirer');

function questions() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'logoText',
      message: 'Enter the text to display (up to 3 characters):'
		},
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the color of the text (hex code or color name):',
      transform: function() {
        return chalkPipe(chalk.rbg)(chalk.hex);
      }
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for your logo:',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color for your logo shape (hex code or color name):',
      transfrom: function() {
				 return chalkPipe(chalk.rbg)(chalk.hex);
      }
    },
  ]).then(async (answers) => {
    this.fileName = ".svg";
    this.width = 300;
    this.height = 200;
    this.logoText = answers.logoText;
    this.textColor = answers.textColor;
    this.shape = answers.shape;
    this.shapeColor = answers.shapeColor;});}
questions()
module.exports = answers;
