var interviewQuestion = require('./task2');

describe('function check', function () {
    it('verification of truth', function () {
        expect(interviewQuestion('teacher')('John')).toBe('What subject do you teach, John?');
    });
    it('check for lies', function () {
        expect(interviewQuestion('other')('John')).toBe('John, can you please explain what UX design is?');
    });
});