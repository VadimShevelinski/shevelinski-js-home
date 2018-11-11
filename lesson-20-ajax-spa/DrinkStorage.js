'use strict';

//alcobar
let drinkStorage = new tAJAXStorage("drinks");

function addDrink() {
    let drinkName = prompt("Введите название напитка");
    while(drinkName.length < 2){
        drinkName = prompt("Введите название напитка");
    }
    let drinkInfo = {};
    drinkInfo.Type = confirm("Напиток алкогольный?") ? "aлкогольный" : "безалкогольный";
    drinkInfo.Recipe = prompt("Введите рецепт напитка");
    while (drinkInfo.length < 5){
        drinkInfo = prompt("введите рецепт напитка, не менее пяти букв");
    }
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
