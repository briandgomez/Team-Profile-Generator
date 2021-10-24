const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
            console.log(newManager);
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
            console.log(newEngineer);
            createIntern();
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
            console.log(newIntern);
        })
}
createManager();