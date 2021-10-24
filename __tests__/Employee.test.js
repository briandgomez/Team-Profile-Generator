const Employee = require('../lib/Employee');
const inquirer = require('inquirer');
let employee;

jest.mock('inquirer');

const inquirerPrompt = inquirer.prompt;

/*beforeEach(() => {
    console.log('line 3');
})*/

describe('constructor function test', () => {
    beforeEach(() => {
        //console.log('employee')
        employee = new Employee('brian', 123, 'email');
    })

    test('creates a new "Employee" object', () => {
        expect(employee).toEqual(expect.any(Object));
    });

    test('assigns property with name', () => {
        expect(employee.name).toEqual(expect.any(String));
    })

    test('gets id of the employee', () => {
        expect(employee.id).toEqual(expect.any(Number));
    })
})

describe('method test', () => {
    beforeEach(() => {
        employee = new Employee();
        inquirerPrompt.mockReset();
    })

    test('gets name of the employee', () => {
        inquirerPrompt.mockResolvedValue(Promise.resolve({ name: 'ringo' }));
        expect.assertions(1);
        employee.getName().then(() => {
            expect(employee.name).toEqual('brian');
        })
    })
})