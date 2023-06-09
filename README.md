# Logo Generator
![Logo Preview][Logo Preview]

## Table of contents
1. [License](#licensing)
2. [Description](#description)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Packages](#packages)
6. [Features](#features)
7. [Resources](#resources)
8. [Tests](#tests)
9. [How to contribute](#how-to-contribute)
10. [Questions](#questions)
11. [Video Demonstration](#video-demonstration)
## Licensing
Refer to <https://choosealicense.com/> for licensing information
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description

1. Application description: Logo Generator is a command line application using Node.js with the inquirer package to prompt the user to pick values (shape, shape color, text, text color) and once done the application generates a unique dynamic logo for the user. The logo returned will be written into an SVG file 
2. I built this app The logo generator application was built to quickly and efficiently generate logos through prompts so that anyone regardless of artistic ability can make a professional logo for their application. 
3. This app Logo Generator lets users of any artistic ability create professional logos quickly with no experience in graphic design saving users time and money.
## Installation

To install Logo Generator clone the repository https://github.com/mhgarry/make-logo, install Node.js and the npm packages inquirer and jest. Refer to https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository for information on cloning a repository

## Usage

Once in the "make-logo" repository in the command line in Node.js type "node index.js" to start the inquirer prompts. Answer the inquirer prompts and your logo is automatically generated for you
![Starting Prompt][Starting Prompt]
## Packages

 This application requires Node.js, inquirer and jest packages installed on your machine.

## Features

Logo Generator has the ability to generate SVG logos of three different shapes (circle, triangle, and rectangle) as well as a wide plethora of colors, and allows you to put text on your SVG logo as well. Since it's an SVG image your logo is infinitely scalable to fit your needs for any project  or application

## Resources

Logo Generator was built using Node.js as well as Inquirer and Jest.

## Tests
This application was tested with Jest. 
![tests][Tests]
To test Logo Generator a user simply has to run the application and answer the prompts to create various different logos. A user can also  create their own tests with the Jest testing suite which is already set up in the package.json file.

## How to Contribute

Other developers can contribute to this project by forking and cloning this repository. Contributors are encouraged to follow GitHub's contribution guidelines here https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors

## Questions

For any further questions I'm avaialble at mhgarry92@gmail.com
To view and clone this project's repository as well as view other projects I'm working on visit github.com/mhgarry

## Video Demonstration


## Sources
https://www.w3schools.com/cssref/css_colors.php
https://www.geeksforgeeks.org/how-to-build-your-own-cli-command-line-interface-with-node-js/
https://gist.github.com/daxburatto/307e8365c41fd5401f9ac315676490bf
https://www.freecodecamp.org/news/how-to-create-a-hex2rgb-color-converter-ce32d32afd1f/
https://www.smashingmagazine.com/2014/05/love-generating-svg-javascript-move-to-server/
https://codepen.io/ZevanRosser/pen/JBreYj
https://en.wikipedia.org/wiki/SVG
https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts
https://www.w3.org/TR/SVG2/shapes.html#InterfaceSVGRectElement
https://gist.github.com/carlynorama/c29ef418130da85114c89cbf4e8c399f
https://www.w3schools.com/graphics/svg_rect.asp
https://www.w3schools.com/graphics/svg_intro.asp
https://www.w3.org/TR/SVG2/shapes.html#InterfaceSVGRectElement
https://www.w3schools.com/tags/ref_colornames.asp


[Logo Preview]: images/logo-preview.png
[Tests]: images/logo-tests.png
[Starting Prompt]: images/svgbeginningprompt.png
