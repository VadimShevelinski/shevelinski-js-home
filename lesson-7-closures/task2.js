var interviewQuestion = function (work) {
    if (work === 'designer') {
        return function (name) {
            return (name + ', can you please explain what UX design is?');
        }
    }
    if (work === 'teacher') {
        return function (name) {
            return ('What subject do you teach, ' + name + '?');
        }
    }
    if (work === 'other') {
        return function (name) {
            return ('Hello ' + name + ', what do you do?');
        }
    }
    interviewQuestion('teacher')('John');
};

module.exports = interviewQuestion;
