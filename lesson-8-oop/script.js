function Question(_quaere, _answer) {
    this.quaere = _quaere;
    this.answer = _answer;
    this.show = function () {
        console.log(this.quaere + " ? " + '\n'
            + this.answer);
    }
}
ans1 = ['1.суббота', '\n', '2.пятница', '\n', '3.не помню'];
ans2 = ['1.да', '\n', '2.нет', '\n', '3.кто вы такие, я вас не звал'];
var question1 = new Question('Какой сегодня день', ans1.join(' '));
var question2 = new Question('class позволяет задавать свойства-значения?', ans2.join(' '));
answer_result = function () {
    var ans3 = prompt('введите правильный ответ');
    if (ans3 === '2') {
        console.log('cool!')
    } else {
        console.log('иди учись')
    }

};
question1.show();
answer_result();
