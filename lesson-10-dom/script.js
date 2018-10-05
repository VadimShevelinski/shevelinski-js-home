function HashStorage(key, value) {

    var obj = {};

    this.addValue = function (key, value) {
        obj[key] = value;
    };

    this.getValue = function (key) {
        return obj[key];
    };

    this.deleteValue = function (key) {
        if (key in obj) {
            return delete obj[key];
        }
        else {
            console.log(false);
        }
    };

    this.getKeys = function () {
        return Object.keys(obj);
    };
}

var drinkStorage = new HashStorage;

document.getElementById('sub_add').addEventListener('click',function input(){
    var name = document.getElementById("name").value;
    var svo = [document.getElementById('recepes').value];
    var alko = undefined;
    document.getElementById("yes").onclick = function () {
        if(document.getElementById('yes').checked === true){
            alko = 'алкогольный'
        } else {
            alko = 'безалкогольный'
        }
    };
    drinkStorage.addValue(name, {'alco':alko, 'recepes':svo});
});

document.getElementById('get').addEventListener('click', function getInfo(){
    var name = document.getElementById('get_info')
    var drinkFeatures = drinkStorage.getValue(name);
    document.querySelector('#1').classList.remove('info_block');
    document.querySelector('#l').classList.add('block');
    if (drinkStorage.checkKey(drinkName)){
        document.getElementById('text').textContent =("напиток: " + name +  drinkFeatures.alco + " ингредиенты: " + drinkFeatures.recepes);
    } else {
        document.getElementById('text').textContent = "Такого напитка нет.";
    }
});

document.getElementById('sub_del').addEventListener('click', function deleteInf0(){
    var drinkName = document.getElementById('deleteValue');
    document.querySelector('#2').classList.remove('info_block');
    document.querySelector('#2').classList.add('block');
    if (drinkStorage.deleteValue(drinkName)){
        document.getElementById('text2').textContent = "Такого напитка больше нет.";}
});

document.getElementById('showList').addEventListener('click', function getAllList (){
    document.querySelector('#3').classList.remove('info_block');
    document.querySelector('#3').classList.add('block');
    document.getElementById('text3').textContent = (drinkStorage.getKeys());
});
