const inquirer = require('inquirer');

class Employee {
    constructor(name = 'brian', id = 0, email = 'name@email.com') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role  = 'Employee';
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;