'use strict';

var container = document.getElementById("container");
container.style = "position: relative";
var hour_hand = document.createElement("div");
var minute_hand = document.createElement("div");
var second_hand = document.createElement("div");

// градус окружности
var TimeCircle = parseFloat(360);
// радиус 120px
var Radius=parseFloat(120);

// создание циферблата
// создание дива большого
var Hour_circle = document.createElement("div");
Hour_circle.style.cssText = "width: 300px; height: 300px; background-color: orange; border-radius: 50%;";
container.appendChild(Hour_circle);
// расчет центра большого
var H_CenterX=Hour_circle.offsetLeft+Hour_circle.offsetWidth/2;
var H_CenterY=Hour_circle.offsetTop+Hour_circle.offsetHeight/2;

// создание маленьких дивов
var cifra = 1;

for (var GR = 30; GR <= TimeCircle; GR = GR + 30) {
    // сдвиг кругов для цикла 30 градусов
    var Angle=parseFloat(GR)/180*Math.PI;
    // создание маленького дива
    var Min_circle = document.createElement("div");
    Min_circle.style.cssText = "position: absolute; width: 40px; height: 40px; background-color: green; border-radius: 50%;";
    container.appendChild(Min_circle);
    // создание числа
    var number = document.createElement("span");
    number.style.cssText = "display: block; line-height: 40px; text-align: center; font-size: 18px; height: 100%";
    number.innerHTML = cifra;
    Min_circle.appendChild(number);

    // расчет центра маленького
    var Min_CenterX=H_CenterX+Radius*Math.sin(Angle);
    var Min_CenterY=H_CenterY-Radius*Math.cos(Angle);
    // позиционирование
    Min_circle.style.left=Math.round(Min_CenterX-Min_circle.offsetWidth/2)+'px';
    Min_circle.style.top=Math.round(Min_CenterY-Min_circle.offsetHeight/2)+'px';

    cifra=cifra + 1;
}

// создание экрана текущего времени
var timeNum = document.createElement("span");
timeNum.style.cssText = "position: absolute;  height: 30px; text-align: left; font-weight: bold; font-size: 18px";
timeNum.style.left = "120px";
timeNum.style.top = (Hour_circle.offsetHeight/4) + "px";
container.appendChild(timeNum);


// создание стрелок
// часовая стрелка

function hour(){
    hour_hand.style.cssText = "border: 4px solid black;  height: 50px; position: absolute; border-radius:5px";
    hour_hand.style.left = (Hour_circle.offsetWidth/2 - 4) + "px";
    hour_hand.style.top = (Hour_circle.offsetHeight/2 - 56) + "px";
    hour_hand.style.transformOrigin = "50% 56px";
    container.appendChild(hour_hand);

}

// минутная стрелка
function minute(){
    minute_hand.style.cssText = "border: 2px solid black; height: 100px; position: absolute; border-radius:2px";
    minute_hand.style.left = (H_CenterY - 2) + "px";
    minute_hand.style.top = (H_CenterX - 104)+"px";
    minute_hand.style.transformOrigin = "50% 104px";
    container.appendChild(minute_hand);
}

// // секундная стрелка
function second(){
    second_hand.style.cssText = "border: 1px solid black; border-radius: 1px; height: 150px; position: absolute; border-radius:1px";
    second_hand.style.left = (H_CenterY - 1) + "px";
    second_hand.style.top = (H_CenterX - 125) + "px";
    second_hand.style.transformOrigin = "50% 125px";
    container.appendChild(second_hand);
}
minute();
second();
hour();

// координаты для разворота стрелок



