// required to check that input matches an accepted color
const colorKeywords = require('./colorKeywords.js')

const questions = [
//User can choose shape
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

// User can choose color either by hexadecimal or by using a color keyword
    {
        name: 'shapeColorChoice',
        message: 'What is the color of the shape? Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    // color keyword (validate with colorKeywords array)
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color keyword",
        when: (answers) => {
            if(answers.shapeColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    // hexadecimal (validate hexadecimal with RegEx pattern)
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },

    // User can input logo letters (up to 3)
    {
        name: 'text',
        message: 'What is the text? (three character maximum)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again");
            }
            return true;
        }
    },

    // user can choose color keyword or hexadecimal for text color
    {
        name: 'textColorChoice',
        message: 'What is the color of the text? Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    // color keyword (validate with colorKeywords array)
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color keyword",
        when: (answers) => {
            if(answers.textColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    // hexadecimal (validate hexadecimal with RegEx pattern)
    {
        type: "input",
        name: "textColor",
        message: "Enter the text hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.textColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
];

module.exports = questions;