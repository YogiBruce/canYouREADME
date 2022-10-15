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
            validate:userInput => {
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
            validate:userInput => {
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
            validate:userInput => {
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
            name: ``,
            message: ``,
            validate:userInput => {
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
            name: ``,
            message: ``,
            choices: [],
            default:['MIT'],
            validate:userInput => {
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
            name: ``,
            message: ``,
            validate:userInput => {
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
            name: ``,
            message: ``,
            validate:userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('');
                    return false;
                }
            } 
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






