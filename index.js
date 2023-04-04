const inquirer = require(inquirer)
const { default: inquirer } = require('inquirer')
const fs = require('fs/promises')


const questions = [
	{
		type: "input",
		name: "text",
		message: "Enter up to three characters to put on your logo",
		length: 3;


	},
	{
		type: "input",
		message: "enter a hexidecimal value or color value for your logo text",
		name: "text-color"
	},

];




