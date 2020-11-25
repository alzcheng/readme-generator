// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.inputTitle}
  ## Description
  ${data.inputDescription}
  ## 
  ${data.inputUsage}
  ## ${data.inputContribute}
  ## ${data.inputTest}
`;
}

module.exports = generateMarkdown;
