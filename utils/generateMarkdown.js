// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.inputTitle}  ![](${data.inputBadge})
  ## Table of Content
  * [Description](##Description)
  * [Installation Instructions](##Installation-Instructions)
  * [Usage Instructions](##Usage-Information)
  * [Contribution Guidelines](##Contribution-Guidelines)
  * [Test Instructions](##Test-Instructions)
  * [Questions](##Questions)
  
  ## Description
  ${data.inputDescription}

  ## Installation Instructions
  ${data.inputInstallation}

  ## Usage Information
  ${data.inputUsage}

  ## Contribution Guidelines
  ${data.inputContribute}

  ## Test Instructions
  ${data.inputTest}

  ## License
  This project and the application(s) hereinto is(are) covered under the ${data.inputLicense}.  
  
  ## Questions
  For any questions about this project, please first visit my Github repo [here](https://github.com/${data.inputGithubName}). 
  If the answers are not found in my repo, you can email me directly at <${data.inputEmail}>.
`;
}

module.exports = generateMarkdown;
