'use strict';

var userString = prompt('Эффективно это означает, как минимум, что не следует делать подсчёт.');

if (userString === null || userString === '') {
    alert('Вы ничего не ввели!');
} else {
    var userStringLowCase = userString.toLowerCase();
    console.log(russianVowelCount(userStringLowCase));
}

function russianVowelCount(text) {
    var userVowelNumber = 0;
    var russianVowel = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
    for (var i = 0; i < text.length; i++) {
        var userLetter = text.charAt(i);
        if (russianVowel.indexOf(userLetter) !== -1) {
            userVowelNumber++;
        }
    }
    return userVowelNumber;
}