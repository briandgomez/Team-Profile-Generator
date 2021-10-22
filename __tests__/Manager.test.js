const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const newManager = new Manager('Augie', 523, 'augiechung@gmail.com', 123);

    expect(newManager.name).toEqual(expect.any(String));
    expect(newManager.id).toEqual(expect.any(Number));
    expect(newManager.email).toEqual(expect.any(String));
    expect(newManager.office).toEqual(expect.any(Number));
})