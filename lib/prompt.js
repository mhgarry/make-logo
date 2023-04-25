const inquirer = require('inquirer');
const colorList = require('./color')



const prompts = [
		{
      name: 'shape',
			type: 'list',
      message: 'What shape would you like to use for your logo?',
      choices: ['Circle', 'Rectangle', 'Triangle'],
		},
