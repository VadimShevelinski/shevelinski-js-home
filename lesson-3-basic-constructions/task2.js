'use strict';

function userFullNameValidation(string) {
    if (!string) {
        return false;
    }
    if (isNaN(parseInt(string))) {
        return true;
    }
    return false;
}

var firstName = prompt('Введите вашe имя:', 'иван');

while ((userFullNameValidation(firstName) === false)) {
    firstName = prompt('Вы ввели имя неверно или ничего не ввели! Пожалуйста введите вашe имя:', 'иван');
}

var secondName = prompt('Введите ваше отчество:', 'иванович');

while ((userFullNameValidation(secondName) === false)) {
    secondName = prompt('Вы ввели отчество неверно или ничего не ввели! Пожалуйста введите вашe отчество:', 'иванович');
}

var lastName = prompt('Введите вашу фамилию:', 'иванов');

while ((userFullNameValidation(lastName) === false)) {
    lastName = prompt('Вы ввели фамилию неверно или ничего не ввели! Пожалуйста введите вашу фамилию:', 'иванов');
}

var fullYears = prompt('Сколько вам лет:', '25');

function userAgeValidation(age) {
    if (!age) {
        return false;
    }
    if ((age <= 0) || (age > 130)) {
        return false;
    }
    for (var i = 0; i <= age.length; i++) {
        var prohibitedSymbols = [' ', '-', '/', '#', '+'];
        var userSymbol = age.charAt(i);
        if (prohibitedSymbols.indexOf(userSymbol) !== -1) {
            return false;
        }
        if (!isFinite(age) ) {
            return false;
        }
    }
    return true;
}

while ((userAgeValidation(fullYears) === false)) {
    fullYears = prompt('Вы ввели возраст неверно или ничего не ввели! Пожалуйста введите ваш возраст:', '26');
}

var gender = confirm('Ваш пол - мужской?');
var pension = false;

if (gender && (fullYears >= 63)) {
    pension = true;
} else if (!gender && (fullYears >= 58)) {
    pension = true;
}

var fullName = firstName + ' ' + secondName + ' ' + lastName;
var ageInDays = Math.floor(fullYears * 365.2425);
var futureYears = Number(fullYears) + 5;

gender = (gender) ? 'мужской' : 'женский';
pension = (pension) ? 'да' : 'нет';

var finalMessage = 'ваше ФИО: ' + fullName + '\n' +
    'ваш возраст в годах: ' + fullYears + '\n' +
    'ваш возраст в днях: ' + ageInDays + '\n' +
    'через 5 лет вам будет: ' + futureYears + '\n' +
    'ваш пол: ' + gender + '\n' +
    'вы на пенсии: ' + pension;

alert(finalMessage);