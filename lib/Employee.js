const inquirer = require('inquirer');

class Employee {
    constructor(name = 'brian', id = 0, email = 'name@email.com') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'What is their name?: '
        })
            .then(result => {
                this.name = result.name;
                this.getId();
            })
    }

    getId() {
        return inquirer.prompt({
            type: 'input',
            name: 'id',
            message: 'What is their Id?: '
        })
            .then(result => {
                this.id = result.id;
                this.getEmail();
            })
    }

    getEmail() {
        return inquirer.prompt({
            type: 'input',
            name: 'email',
            message: 'What is their email?: '
        })
            .then(result => {
                this.email = result.email;
            })
    }

}

module.exports = Employee;