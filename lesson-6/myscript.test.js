var task1 = require('./task1');
var average = task1.calcAverageTip;
var john = task1.john;
var mark = task1.mark;

describe('calcAverageTip', () => {
    it('average (2 + 3 + 5 + 6) equally 4', () => {
    var testTips = {tips: [2, 3, 5, 6]};
    expect(average(testTips)).toBe(4);
});
});

describe('method tipCalculator', () => {
    it('mark\'s tips from bills [40, 200, 400] are equal [8, 20, 100]', () => {
    mark.bills = [40, 200, 400];
    mark.tipCalculator();
    expect(mark.tips).toEqual([8, 20, 100]);
});

it('john\'s tips from bills [40, 100, 300] are equal [8, 20, 100]', () => {
    john.bills = [40, 100, 300];
john.tipCalculator();
expect(john.tips).toEqual([8, 15, 30]);
});
});