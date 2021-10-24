const inquirer = require('inquirer');

class Employee {
    constructor(name='brian', id=0, email='email') {
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
            type: 'number',
            name: 'id',
            message: 'What is their Id?: '
        })
            .then(result => {
                this.id = result.id;
                console.log(result);

                //this.getEmail();
            })
    }
    
}

module.exports = Employee;