const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');

//Holds information inputeed by user
responseArray = [];

//Array of questions that all classes have
questionsArray = [
    {
        type: 'input',
        name: 'name',
        message: 'What is their name?: '
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their id?: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?: '
    },
]

//Creates manager object
function createManager() {
    inquirer.prompt([
        ...questionsArray,
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their office number?: '
        },
    ])
        .then(results => {
            const newManager = new Manager(results.name, results.id, results.email, results.officeNumber);
            newManager
            responseArray.push(newManager);
            //console.log(responseArray);
            menuOption();
        })
}

function menuOption() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'option',
            message: 'Would you like to add a engineer or intern?: '
        }
    ])
        .then(results => {
            if (results.option == 'Engineer' || results.option == 'engineer') {
                createEngineer();
            }
            else if (results.option == 'Intern' || results.option == 'intern') {
                createIntern();
            }
            else if (results.option == 'No' || results.option == 'no') {
                return arrayResults(responseArray);
            }
        })
}

function createEngineer() {
    inquirer.prompt([
        ...questionsArray,
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?: '
        },
    ])
        .then(results => {
            const newEngineer = new Engineer(results.name, results.id, results.email, results.github);
            responseArray.push(newEngineer);
            //console.log(responseArray);
            menuOption();
        })
}

function createIntern() {
    inquirer.prompt([
        ...questionsArray,
        {
            type: 'input',
            name: 'school',
            message: 'What is their school name?: '
        },
    ])
        .then(results => {
            const newIntern = new Intern(results.name, results.id, results.email, results.school);
            responseArray.push(newIntern);
            //console.log(responseArray);
            menuOption();
        })
}

function arrayResults(results) {
    generatePage(results)
        .then(html => {
            console.log(html)
            fs.writeFile('./dist/index.html', html, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('Page Successfully created');
                }
            })
        })
}

createManager()