const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./util/generateMarkdown")
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);

// Questions for Prompt
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
        type: "list", 
        message: "Choose a license for this application",
        name: "license",
        choices: [
            "Apache-2.0",
            "BSD-3-Clause",
            "BSD-2-Clause"
        ]
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
        message: "What email should people send their questions or concerns to?"
    },
    {
        type: "input",
        name: "user",
        message: "What is your github username? "
    }

]

// Main function to initialize repository and create markdown file 
async function init() {
    try {
        // Function first prompts user to answer series of questions about content on readme.md file
        const readmeInfo = await inquirer.prompt(questions);
        // Info run through generate markdown function in the js doc in util folder
        const data = generateMarkdown(readmeInfo);
        // Markdown file is created 
        await writeFileAsync("README.md", data);
    } catch (err) {
        console.log(err)
    }
}
// Calling on main function
init();