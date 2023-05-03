// Packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/shapes');

// Inquirer questions
const questions = [
    {
        type: 'input',
        message: 'Enter text for your logo',
        name: 'text'
    }
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log(`Wrote data to ${fileName}`));
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => writeToFile('./examples/logo.svg', generateSVG(response)));
}

init();