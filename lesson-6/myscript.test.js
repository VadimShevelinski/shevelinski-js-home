var task1 = require('./tack1sample');
var john = task1.john;
var mark = task1.mark;

describe('test john object', function () {
    it('check processing of variables', function () {
        expect(john.bills.length === john.tips.length).toBe(true);
    });

    it('check function', function () {
        expect(john.tips[1]).toBe(john.bills[1] * 0.2);
    });

    it('check result', function () {
        john.bills = [100, 200, 50, 10, 250];
        john.calcTips();
        expect(john.tips[1] === 30).toBe(true);
    })
});

describe('test mark object', function () {
    it('check processing of variables', function () {
        expect(mark.bills.length === mark.tips.length).toBe(true);
    });

    it('check function', function () {
        expect(mark.tips[1]).toBe(mark.bills[1] * 0.25);
    });

    it('check result', function () {
        expect(mark.tips[1] === 100).toBe(true);
    })
});
