const inquirer = require('inquirer');

class Parent {
    constructor() {
        this.name;
        this.id;
        this.email;
    }

    sameQuestions() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is their name?: "
            },
            {
                type: 'input',
                name: 'id',
                message: "What is their ID?: "
            },
            {
                type: 'input',
                name: 'email',
                message: "What is their email?: "
            }
        ])
        .then((input) => {
            this.name = input.name;
            this.id = input.id;
            this.email = input.email;
            console.log(this.name);
            console.log(this.id);
            console.log(this.email);
        })
    }
}

module.exports = Parent;