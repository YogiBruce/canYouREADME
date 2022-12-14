// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)<br/>
  - [Usage Information](#usage)<br/>
  - [License](#license)<br/>
  - [Contributors](#contributors)<br/>
  - [Tests](#tests)<br/>
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage Information
  ${data.usage}
  
  ## License
  This projects use is licensed under ${data.license}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions

  For any question regarding the ${data.title} project, please contact me via email at ${data.email}.

  More of my software development projects can be viewed at my GitHub repo : https://github.com/${data.github}/

`;
}

//Exports generate Markdown to index.js
module.exports = generateMarkdown;

