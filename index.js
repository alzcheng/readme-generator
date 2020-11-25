const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
  //Basic questions for the main section
  {
    type: "input",
    message: "What is the title of your project?",
    name: "inputTitle",
  },
  {
    type: "input",
    message: "What would be a good description for your project?",
    name: "inputDescription",
  },
  {
    type: "input",
    message: "What are the instructions to install your project?",
    name: "inputInstallation",
  },
  {
    type: "input",
    message: "what should be the usage information for your project?",
    name: "inputUsage",
  },

  {
    type: "input",
    message: "What are the contribution guidelines for your project?",
    name: "inputContribute",
  },
  {
    type: "input",
    message: "What are the testing instructions for your project?",
    name: "inputTest",
  },
  //Additional questions to provide links and such to different sections
  {
    type: "list",
    message: "Which license did you use in this project?",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
    ],
    name: "inputLicense",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "inputGithubName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "inputEmail",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("ReadMe created!");
  });
}

// function to initialize program
function init() {
  //Need to gather data from the questions
  //Need to create a list of licenses that I can choose for the project and adding the badge tile on the top
  //Need to create a prompt to enter the Github username
  //Need to create a prompt for email and add to the section with questions
  //Linking to access to Table of contents

  inquirer
    .prompt(questions)
    .then((answers) => {
      if (answers.inputLicense === "Apache License 2.0") {
        answers.inputBadge =
          "https://img.shields.io/badge/License-Apache_2.0-red";
      } else if (answers.inputLicense === "GNU General Public License v3.0") {
        answers.inputBadge =
          "https://img.shields.io/badge/License-GNU_3.0-blue";
      } else {
        answers.inputBadge = "https://img.shields.io/badge/License-MIT-green";
      }
      console.log(answers);
      writeToFile("README.md", generateMarkdown(answers));
    })
    .catch((error) => {
      if (error) throw error;
    });
}

// function call to initialize program
init();
