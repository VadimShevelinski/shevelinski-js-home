'use strict';

//alcobar
let drinkStorage = new LocStorage("drinks");

function addDrink() {
    let drinkName = prompt("Введите название напитка");
    let drinkInfo = {};
    drinkInfo.Type = confirm("Напиток алкогольный?") ? "aлкогольный" : "безалкогольный";
    drinkInfo.Recipe = prompt("Введите рецепт напитка");
    drinkStorage.addValue(drinkName, drinkInfo);
    console.log(drinkStorage);
}

function getDrink() {
    let drinkName = prompt("Введите название напитка");
    console.log(`Информация о "${drinkName}":
Тип напитка: ${drinkStorage.getValue(drinkName).Type}
Рецепт напитка: ${drinkStorage.getValue(drinkName).Recipe}`);
}

function deleteDrink() {
    let drinkName = prompt("Введите название удаляемого напитка");
    console.log(drinkStorage.deleteValue(drinkName));
}

function getDrinkList() {
    console.log(drinkStorage.getList());
}

//foodcort))
let foodStorage = new LocStorage("food");

function addFood() {
    let foodName = prompt("Введите название блюда");
    let foodInfo = {};
    foodInfo.Type = confirm("Блюдо диетическое?") ? "диетическое" : "обычное";
    foodInfo.Recipe = prompt("Введите рецепт блюда");
    foodStorage.addValue(foodName, foodInfo);
    console.log(foodStorage);
}

function getFood() {
    let foodName = prompt("Введите название блюда");
    console.log(`Информация о "${foodName}":
Тип блюда: ${foodStorage.getValue(foodName).Type}
Рецепт блюда: ${foodStorage.getValue(foodName).Recipe}`);
}

function deleteFood() {
    let foodName = prompt("Введите название удаляемого блюда");
    console.log(foodStorage.deleteValue(foodName));
}

function getFoodList() {
    console.log(foodStorage.getList());
}