let numbers = [];

while (true) {

    let value = prompt("Введите число");

    if (value === "" || value === null || isNaN(value)) break;

    numbers.push(+value);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

alert( sum );