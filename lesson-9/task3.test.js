var anClean = require('./task3');

describe('check anClean function', function () {
    it('last anagrams must remain', function () {
    var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
    expect(anClean(arr)).toEqual(['ЗОВ', 'гробик', 'сектор']);
});
});