# svg-logo-maker

## Description
Create an SVG logo by choosing its: shape from the options of circle, square, or triangle; shape color; text(up to 3 characters); and text color.

## Installation
You must have Node.js installed to run this application. To install dependencies, use the command "npm install". For running tests using Jest, use "npm install --save-dev jest" to install.

## Usage
Clone the project repository to your computer. Once you have the project open, open up the project in your terminal as well and start by typing "node index.js" or "npm start". Answer the prompts based on the desired outcome of your logo. If you enter an invalid response, you will be prompted to try again until you submit an accepted value (example: colors must be a valid hexidecimal or color keyword). After answering all questions, your logo will be generated as a file named "logo.svg". Attached is a video demonstrating how to use the application.
<video controls src="SVG-Logo-Maker.mp4" title="SVG Logo Maker Demo"></video>

## Tests
Each shape's (circle, square, and triangle) render() method is tested by typing "npm test" in the terminal. Jest, as explained in the "installation" portion of the README, runs each of the three tests. The test should return without any errors if the application is generating the SVGs correctly.