function Question(_quaere, _answer, _correctAnswer) {
    this.question = _quaere;
    this.answers = _answer;
    this.correctAnswer = _correctAnswer;
}

var question1 = new Question('Какой сегодня день?', ['суббота', 'пятница', 'не помню'], 2);
var question2 = new Question('class позволяет задавать свойства-значения?', ['да', 'нет', 'кто вы такие, я вас не звал'], 1);
var question3 = new Question('кто проживает на дне окана?', ['дубка гоб', 'спанч боб', 'кто вы такие, я вас не звал'], 2);
var questions = [question1, question2, question3];

function selectOneRandom(questionsArray) {
    return questionsArray[(Math.ceil(Math.random() * (questionsArray.length)) - 1)];
}

Question.prototype.printQuestion  = function () {
    var strAnswers = '';
    for (var i = 1; i <= this.answers.length; i++) {
        strAnswers = strAnswers + i + ')' + this.answers[i - 1] + ';' + '\n';
    }
    console.log(this.question + '\n' + strAnswers);
};

var examQuestion = selectOneRandom(questions);
examQuestion.printQuestion();
var userAnswer = parseInt(prompt('Номер вашего варианта ответа'), 10);

Question.prototype.checkAnswer = function (answer) {
    if (answer === this.correctAnswer) {
        console.log('и это правильный ответ!');
    } else {
        console.log('вы самое слабое звено. прощайте \n Правильный ответ: ' + this.correctAnswer);
    }
};

examQuestion.checkAnswer(userAnswer);
