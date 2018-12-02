var isPal = require('./task2');

describe('check isPal function', function () {

    it('Anna is a palindrome', function () {
        expect(isPal('Anna')).toBe(true)});

    it('Оно но is a palindrome', function () {
        expect(isPal('Оно но')).toBe(true)
    });

    it('Вася not a palindrome', function () {
        expect(isPal('Вася')).toBe(false)
    });

    it('12321 is a palindrome', function () {
        expect(isPal('12321')).toBe(true)
    });

    it('123212 not a palindrome', function () {
        expect(isPal('123212')).toBe(false)
    });
});