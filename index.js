var inquirer = require("inquirer");
var fs = require('fs');


inquirer.prompt([
    {
        type: "input",
        name: "name", 
        message: "What is your name?"
    }
]).then(function writeToFile(fileName, data) {
    var fileName = "readme.MD";
    fs.writeFile(fileName, JSON.stringify(data, null, '/t'), function (err) {

        if (err) {
            return console.log(err);
        }
        console.log("success!")
    })
});


// const questions = [

// ];



function init() {

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
