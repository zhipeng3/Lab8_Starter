// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('Test isPhoneNumber true case 1', () => {
    // TODO
    let temp = functions.isPhoneNumber('(123)123-123-1234');
    expect(temp).toBe(true);
});

test('Test isPhoneNumber true case 2', () => {
    // TODO
    let temp = functions.isPhoneNumber('(999)999-999-9999');
    expect(temp).toBe(true);
});

test('Test isPhoneNumber false case 1', () => {
    // TODO
    let temp = functions.isPhoneNumber('(abc)qqq-zzz-sss');
    expect(temp).toBe(false);
});

test('Test isPhoneNumber false case 2', () => {
    // TODO
    let temp = functions.isPhoneNumber('1a2s3d');
    expect(temp).toBe(false);
});


test('Test isEmail true case 1', () => {
    // TODO
    let temp = functions.isEmail('ouagh@gmail.com');
    expect(temp).toBe(true);
});

test('Test isEmail true case 2', () => {
    // TODO
    let temp = functions.isEmail('adfh@oihafd.com');
    expect(temp).toBe(true);
});

test('Test isEmail false case 1', () => {
    // TODO
    let temp = functions.isEmail('agfnbadsf');
    expect(temp).toBe(false);
});

test('Test isEmail false case 2', () => {
    // TODO
    let temp = functions.isEmail('1234@56789');
    expect(temp).toBe(false);
});


test('Test isStrongPassword true case 1', () => {
    // TODO
    let temp = functions.isStrongPassword('EgvffgEVCh_6');
    expect(temp).toBe(true);
});

test('Test isStrongPassword true case 2', () => {
    // TODO
    let temp = functions.isStrongPassword('d92385UHkcJ');
    expect(temp).toBe(true);
});

test('Test isStrongPassword false case 1', () => {
    // TODO
    let temp = functions.isStrongPassword('1234567890');
    expect(temp).toBe(false);
});

test('Test isStrongPassword false case 2', () => {
    // TODO
    let temp = functions.isStrongPassword('mypasswordsolongsolong');
    expect(temp).toBe(false);
});


test('Test isDate true case 1', () => {
    // TODO
    let temp = functions.isDate('11/23/1568');
    expect(temp).toBe(true);
});

test('Test isDate true case 2', () => {
    // TODO
    let temp = functions.isDate('11/12/2021');
    expect(temp).toBe(true);
});

test('Test isDate false case 1', () => {
    // TODO
    let temp = functions.isDate('123123');
    expect(temp).toBe(false);
});

test('Test isDate false case 2', () => {
    // TODO
    let temp = functions.isDate('999/999/9999');
    expect(temp).toBe(false);
});


test('Test isHexColor true case 1', () => {
    // TODO
    let temp = functions.isHexColor('#123');
    expect(temp).toBe(true);
});

test('Test isHexColor true case 2', () => {
    // TODO
    let temp = functions.isHexColor('0f0f0f');
    expect(temp).toBe(true);
});

test('Test isHexColor false case 1', () => {
    // TODO
    let temp = functions.isHexColor('#12345678');
    expect(temp).toBe(false);
});

test('Test isHexColor false case 2', () => {
    // TODO
    let temp = functions.isHexColor('notright');
    expect(temp).toBe(false);
});