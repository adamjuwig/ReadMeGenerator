const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")


// array of questions for user
const questions = [
inquirer.prompt(
    [{
        type: "input",
        message: "What is the title of the project?",
        name: "Title"
    },
    {
        type: "input",
        message: "Please provide a description",
        name: "Description"
    },
    {
        type: "input",
        message: "How will you install your application?",
        name: "Install"
    },
    {
        type: "input",
        message: "How will you use your application?",
        name: "Usage"
    },
    {
        type: "input",
        message: "Who contributed to this application?",
        name: "Contribution",
    },
    {
        type: "input",
        message: "How is this application tested?",
        name: "Testing"
    },
    {
        type: "list",
        message: "What type of licenses will you be using?",
        name: "License",
        choices: [ "Apache", "MIT", "IBM" ]
    },
    {   
        type: "input", 
        message: "Please enter your Github user name",
        name: "Github"
    },
    
    ]
) 
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response =>
       writeToFile("GoodReadMe.md", generateMarkdown(response)));
}

// function call to initialize program
init();
