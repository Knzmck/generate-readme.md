const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./util/generateMarkdown")
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project"
    },
    {
        type: "input",
        name: "motivation",
        message: "What is your motivation for creating and maintaining this project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the instructions for installing this application?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this application?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this application?"
    },
    {
        type: "input",
        name: "tests",
        message: "Attach a link to image or video showing a test to this application"
    },
    {
        type: "input",
        name: "questions",
        message: "What questions still need to be resolved for this application?"
    },
    {
        type: "input",
        name: "user",
        message: "What is your github username? "
    }

]

// Initialize repository
async function init() {
    try {
        const readmeInfo = await inquirer.prompt(questions);
        const data = generateMarkdown(readmeInfo);

        console.log(data)
        await writeFileAsync("README.md", data);
    } catch (err) {
        console.log(err)
    }
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


// usernameq = [
//     {
//         type: "input",
//         name: "user",
//         message: "What is your github username? "
//     }
// ]

// // Verify github username
// async function usernameVerify() {
// try { 
//     const username = await inquirer.prompt(usernameq);

//     axios 
//     .get("https://github.com/" + username)
//     .then((response) => {
//        return usernameq
//     })
// } catch (err) {
//     console.log("Please enter a valid github username");
// }
// }
