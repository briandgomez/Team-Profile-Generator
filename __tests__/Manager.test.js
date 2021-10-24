const Manager = require('../lib/Manager');
let manager;

describe('constructor manager function test', () => {
    beforeEach(() => {
        manager = new Manager('brian', 123, 'email');
    })

    test('creates a new "Manager" object', () => {
        expect(manager).toEqual(expect.any(Object));
    });

    test('assigns value to "name" property', () => {
        expect(manager.name).toEqual('brian');
    })

    test('assigns value to "id" property', () => {
        expect(manager.id).toEqual(123);
    })

    test('assigns value to "email" property', () => {
        expect(manager.email).toEqual('email');
    })
})

describe('method test', () => {
    beforeEach(() => {
        manager = new Manager('kevin', 999, 'email', 456);
    })

    test('gets office number', () => {
        expect(manager.getOfficeNumber()).toEqual(456);
    })

    test('returns "Manager" ', () => {
        expect(manager.getRole()).toEqual('Manager');
    })
})