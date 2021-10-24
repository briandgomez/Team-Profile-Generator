const Engineer = require('../lib/Engineer');
let engineer;

describe('constructor engineer function test', () => {
    beforeEach(() => {
        engineer = new Engineer('brian', 123, 'email');
    })

    test('creates a new "Engineer" object', () => {
        expect(engineer).toEqual(expect.any(Object));
    });

    test('assigns value to "name" property', () => {
        expect(engineer.name).toEqual('brian');
    })

    test('assigns value to "id" property', () => {
        expect(engineer.id).toEqual(123);
    })

    test('assigns value to "email" property', () => {
        expect(engineer.email).toEqual('email');
    })
})

describe('method test', () => {
    beforeEach(() => {
        engineer = new Engineer('kevin', 999, 'email', 456);
    })

    test('gets github username', () => {
        expect(engineer.getGitHub()).toEqual(456);
    })

    test('returns "Engineer" ', () => {
        expect(engineer.getRole()).toEqual('Engineer');
    })
})