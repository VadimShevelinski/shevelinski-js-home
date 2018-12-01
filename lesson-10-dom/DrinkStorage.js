var DrinkStorage = new TLocalStorage("drinks");

DrinkStorage.Reset();

function PutInfo(){
    var ingredients = [];
    var recepieH = {name_key:nameDrink, alcоhol_key:"", ingred_key:ingredients};
    var nameDrink = prompt("Введите название напитка:","");

    recepieH.name_key=nameDrink;
    var Alc = confirm("Это алкогольный напиток?\n ДА-нажмите ОК, НЕТ-ОТМЕНА");
    if(Alc === false)
        recepieH.alcоhol_key = "нет";
    else
        recepieH.alcоhol_key = "да";

    var ingredient ="";
    do {
        ingredient = prompt("Введите 1 ингредиент напитка","");
        if ((ingredient!==null)&&(ingredient.length)) ingredients.push(ingredient);
    } while(ingredient!==null);

    DrinkStorage.AddValue(nameDrink, recepieH);
}

function GetInfo() {
    var g_info = document.getElementById('getInformation').value;
    var nap = DrinkStorage.GetValue(g_info);

    if(nap === undefined) {
        var DivMes = "Такого напитка нет";
    } else {
        DivMes = "Напиток: " +  nap.name_key +'<br/>'+
            "Алкогольный: " + nap.alcоhol_key + '<br/>'+
            "Рецепт приготовления: " + nap.ingred_key + " смешать, готово!!!";
    }

    var message = document.getElementById('messageId');
    message.innerHTML = DivMes;
}

// delete drink
function DelInfo() {
    var d_info = document.getElementById('deleteInformation').value;
    var nap = DrinkStorage.DeleteValue(d_info);
    if(nap === false) {
        alert("Удалять нечего");
    } else {
        alert("Элемент удален");
    }
}

function GetInfoKeys() {
    var DivMes = DrinkStorage.GetKeys();
    console.log(DivMes);
    var message = document.getElementById('messageId');
    message.innerHTML = DivMes;
}