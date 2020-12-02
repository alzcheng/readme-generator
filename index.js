const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for user
const questions = [
  //Basic questions for the main section
  {
    type: "input",
    message: "What is the title of your project?",
    name: "inputTitle",
    validate: (input) => {
      if (!isNaN(parseInt(input)) || input === "") {
        return "Please enter a string.";
      } else {
        console.log("\nData received.");
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What would be a good description for your project?",
    name: "inputDescription",
    validate: (input) => {
      if (!isNaN(parseInt(input)) || input === "") {
        return "Please enter a string.";
      } else {
        console.log("\nData received.");
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What are the instructions to install your project?",
    name: "inputInstallation",
    validate: (input) => {
      if (!isNaN(parseInt(input)) || input === "") {
        return "Please enter a string.";
      } else {
        console.log("\nData received.");
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What should be the usage information for your project?",
    name: "inputUsage",
    validate: (input) => {
      if (!isNaN(parseInt(input)) || input === "") {
        return "Please enter a string.";
      } else {
        console.log("\nData received.");
        return true;
      }
    },
  },

  {
    type: "input",
    message: "What are the contribution guidelines for your project?",
    name: "inputContribute",
    validate: (input) => {
      if (!isNaN(parseInt(input)) || input === "") {
        return "Please enter a string.";
      } else {
        console.log("\nData received.");
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What are the testing instructions for your project?",
    name: "inputTest",
    validate: (input) => {
      if (!isNaN(parseInt(input)) || input === "") {
        return "Please enter a string.";
      } else {
        console.log("\nData received.");
        return true;
      }
    },
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
    validate: (input) => {
      if (!isNaN(parseInt(input)) || input === "") {
        return "Please enter a string.";
      } else {
        console.log("\nData received.");
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "inputEmail",
    validate: (input) => {
      if (!isNaN(parseInt(input)) || input === "") {
        return "Please enter a string.";
      } else {
        console.log("\nData received.");
        return true;
      }
    },
  },
];

// This function is used to create a README files
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    //when ReadMe is successfully created, show in terminal
    console.log("ReadMe created!");
  });
}

// This function is used initialize program and start the questions
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      //Select the badges to be placed for the licenses
      if (answers.inputLicense === "Apache License 2.0") {
        answers.inputBadge =
          "https://img.shields.io/badge/License-Apache_2.0-red";
      } else if (answers.inputLicense === "GNU General Public License v3.0") {
        answers.inputBadge =
          "https://img.shields.io/badge/License-GNU_3.0-blue";
      } else {
        answers.inputBadge = "https://img.shields.io/badge/License-MIT-green";
      }
      //Generate a README with the project's name and the answers appropriately
      writeToFile(`${answers.inputTitle}_README.md`, generateMarkdown(answers));
    })
    .catch((error) => {
      if (error) throw error;
    });
}

// This function is called to initialize program
init();
