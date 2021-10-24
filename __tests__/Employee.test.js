const Employee = require('../lib/Employee');
const inquirer = require('inquirer');
let employee;

//Creates a 'copy' of npm inquirer
jest.mock('inquirer');

//Assigns variable to inquirer method (.prompt)
const inquirerPrompt = inquirer.prompt;

//Tests for constructor (this.name,this.id)
describe('constructor function test', () => {
    //Creates new employee instance for each test before they execute
    beforeEach(() => {
        //console.log('employee')
        employee = new Employee('brian', 123, 'email');
    })

    test('creates a new "Employee" object', () => {
        expect(employee).toEqual(expect.any(Object));
    });

    test('assigns value to "name" property', () => {
        expect(employee.name).toEqual(expect.any(String));
    })

    test('assigns value to "id" property', () => {
        expect(employee.id).toEqual(expect.any(Number));
    })

    test('assigns value to "email" property', () => {
        expect(employee.email).toEqual(expect.any(String));
    })
})

describe('method test', () => {
    beforeEach(() => {
        employee = new Employee();
        //Resets what is being captured by inquirer.prompt
        inquirerPrompt.mockReset();
    })

    test('gets name of the employee', () => {
        //Test for user
        inquirerPrompt.mockResolvedValue(Promise.resolve({ name: 'ringo' }));
        //Makes sure 1 item is being called during a test
        expect.assertions(1);
        employee.getName().then(() => {
            //Confirm test for user
            expect(employee.name).toEqual('ringo');
        })
    })

    test('gets id of the employee', () => {
        inquirerPrompt.mockResolvedValue(Promise.resolve({ id: 123 }));

        expect.assertions(1);
        employee.getId().then(() => {
            expect(employee.id).toEqual(123)
        })
    })

    test('gets email of the employee', () => {
        inquirerPrompt.mockResolvedValue(Promise.resolve({ email: 'name@email.com' }));

        expect.assertions(1);
        employee.getEmail().then(() => {
            expect(employee.email).toEqual('name@email.com')
        })
    })

    test('returns "Employee" ', () => {
        expect(employee.getRole()).toEqual({"email": "name@email.com", "id": 0, "name": "brian"});
    })
});