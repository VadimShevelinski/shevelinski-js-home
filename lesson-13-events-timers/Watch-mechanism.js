'use strict';

drawTime();

function drawTime() {
    var currTime = new Date();
    timeNum.innerHTML = FormatDateTime(currTime);
    var j =  (1/60)*currTime.getMinutes();
    second_hand.style.transform = "rotate(" + (currTime.getSeconds()*6) + "deg)";
    minute_hand.style.transform = "rotate(" + (currTime.getMinutes()*6 + currTime.getSeconds()/10) + "deg)";
    hour_hand.style.transform = "rotate(" + 30*(currTime.getHours() + j) + "deg)";
    setTimeout(drawTime, 1020 - currTime.getMilliseconds());
}


// форматирует переданную дату-время в формате дд.мм.гггг чч:мм:сс
function FormatDateTime(DT)
{
    var Hours=DT.getHours();
    var Minutes=DT.getMinutes();
    var Seconds=DT.getSeconds();
    return Str0L(Hours,2) + ':' + Str0L(Minutes,2) + ':' + Str0L(Seconds,2);
}

function Str0L(Val,Len){
    var StrVal=Val.toString();
    while ( StrVal.length < Len )
        StrVal='0'+StrVal;
    return StrVal;
}
