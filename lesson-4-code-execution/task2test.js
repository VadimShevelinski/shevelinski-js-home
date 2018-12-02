let multiplyNumeric = require('./task2');

let image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

let multiplyImage = {
    width: 200,
    height: 800,
    title: 'Cool image'
};

test('positive test', () => {
    expect(multiplyNumeric(image)).toEqual(multiplyImage);
});
