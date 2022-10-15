// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ##Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage Information](#usage)
  -[License](#license)
  -[Constributors](#contributors)
  -[Tests](#tests)
  -[Questions](#questions)



`;
}

//Exports generate Markdown to index.js
module.exports = generateMarkdown;

