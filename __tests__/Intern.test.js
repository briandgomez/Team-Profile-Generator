const Intern = require('../lib/Intern');
let intern;

describe('constructor intern function test', () => {
    beforeEach(() => {
        intern = new Intern('brian', 123, 'email');
    })

    test('creates a new "Intern" object', () => {
        expect(intern).toEqual(expect.any(Object));
    });

    test('assigns value to "name" property', () => {
        expect(intern.name).toEqual('brian');
    })

    test('assigns value to "id" property', () => {
        expect(intern.id).toEqual(123);
    })

    test('assigns value to "email" property', () => {
        expect(intern.email).toEqual('email');
    })
})

describe('method test', () => {
    beforeEach(() => {
        intern = new Intern('kevin', 999, 'email', 'Einstein Academy');
    })

    test('gets school name', () => {
        expect(intern.getSchool()).toEqual('Einstein Academy');
    })

    test('returns "Intern" ', () => {
        expect(intern.getRole()).toEqual('Intern');
    })
})