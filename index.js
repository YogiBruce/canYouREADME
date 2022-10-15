// TODO: Include packages needed for this application
const fs = require ('fs')
const inquirer = require ('inquirer')
const generatePage = require('./utils/generateMarkdowns.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: `input`,
            name: `email`,
            message: `What is your email address?`,
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            } 
        }
        {
            type: `input`,
            name: `github`,
            message: `What is your GitHub username?`,
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            } 
        }
        {
            type: `input`,
            name: `title`,
            message: `"What is the title of your project?`,
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a project title!');
                    return false;
                }
            } 
        }
        {
            type: `input`,
            name: `description`,
            message: `Write a short description of your project and goals achieved`,
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('');
                    return false;
                }
            } 
        }
        {
            type: `list`,
            name: `license`,
            message: `Please select a user license`,
            choices: ['MIT','Apache 2.0', 'GNU', 'Eclipse', 'Mozilla' ],
            default:['MIT'],
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('');
                    return false;
                }
            } 
        }
        {
            type: `input`,
            name: `install`,
            message: `What are the steps required for installation of your project?`,
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter installation information');
                    return false;
                }
            } 
        }
        {
            type: `input`,
            name: `usage`,
            message: `Describe common usage information for your app?`,
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter usage information');
                    return false;
                }
            } 
        }
        {
            type: 'input',
            name: 'constributors',
            message: 'Please provide requirements of user contributions to application',
            validate: userInput => {
                if (userInput){
                    return true;
                } else {
                    console.log('Please enter user contribution instructions!')
                    return false;
                }
            }
        }
        {
            type: 'input',
            name: 'test',
            message: 'What are common test practices for app?',
            default: 'npm test',
        }
    ])
   

};

//Function to write README file using FS
const writeFile = data => {
    fs.writeFile ('README.md', data, err=>{
        //Concole error
        if (err){
            console.log(err);
            return;
        }else {
        //Console ReadMe file has been created
        console.log("Your README.md file has been successfully generated!")
        }
    })
}

//Function to initialize app
questions()

// Get user answers from input
.then(answers => {
    return generatePage(answers);
})

//Input to questions generated to file
.then (data => {
    return writeFile (data);
})






