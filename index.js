const fs = require('fs');
const inquirer = require('inquirer');

const generateReadme = (answers) => {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
[![License](https://img.shields.io/badge/License-${answers.license}-brightgreen)](https://opensource.org/licenses/${answers.license})

This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Project Title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation Instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage Information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a License:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Contribution Guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Test Instructions:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'GitHub Username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email Address:',
    },
  ])
  .then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile('/Users/ornata/Dev/bootcamp/week9ReadMeGenerator/generatedReadMe/README.md', readmeContent, (err) => {
      if (err) {
        console.error('Error writing README.md:', err);
      } else {
        console.log('README.md generated successfully!');
      }
    });
  });