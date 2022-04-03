const Employee = require('../lib/Employee');
let employee;

//Tests for constructor
//String = describes what the expected output should be
//Callback = runs the test

//describe = groups together related tests
describe('constructor function test', () => {
    //Creates new employee instance for each test before they execute
    beforeEach(() => {
        employee = new Employee('brian', 123, 'email');
    })

    test('creates a new "Employee" object', () => {
        expect(employee).toEqual(expect.any(Object));
    });

    test('assigns value to "name" property', () => {
        expect(employee.name).toEqual('brian');
    })

    test('assigns value to "id" property', () => {
        expect(employee.id).toEqual(123);
    })

    test('assigns value to "email" property', () => {
        expect(employee.email).toEqual('email');
    })
})

describe('method test', () => {
    beforeEach(() => {
        employee = new Employee('kevin', 999, 'yahoo.com');
    })

    test('gets name of the employee', () => {
        expect(employee.name).toEqual('kevin');
    })

    test('gets id of the employee', () => {
        expect(employee.id).toEqual(999);
    })

    test('gets email of the employee', () => {
        expect(employee.email).toEqual('yahoo.com');
    })

    test('returns "Employee" ', () => {
        expect(employee.getRole()).toEqual('Employee');
    })
})