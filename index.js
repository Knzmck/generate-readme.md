const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
const util = require("util");
const axios = require("axios")


function promptFunction () {
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "motivation",
        message: "What is your motivation for creating and maintaining this project?"
    }
])

function writeToFile(data) {
    var fileName = "readme.JSON";
    fs.writeFile(fileName, JSON.stringify(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("success!");
    })
}
};


// Initialize repository
async function init() {

}

init();



// Create prompts for good readme.md file 
// Project Title - simple text prompt
// Motivation - simple text prompt
// Code Style with options - HTML, CSS, JS, Jquery, ECT
// Option to add screenshots - add JPEG or PNG
// Tech Framework used (in bulleted list format) - Built with... electron 
// Features - why does your code stand out? - what makes this solution better than others or different. - Simple text prompt
// How does your code solve your problem with code examples. - maybe a bulleted list too
// How to use? - text prompt
// Credits - icons 
// Licenses- 


// write function to write file
// Write function to initialize repository
