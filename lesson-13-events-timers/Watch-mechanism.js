'use strict';

function Time() {
    var currTime = new Date();
    timeNum.innerHTML = FormatDateTime(currTime);
    var j = (1 / 60) * currTime.getMinutes();
    secondHand.style.transform = "rotate(" + (currTime.getSeconds() * 6) + "deg)";
    minuteHand.style.transform = "rotate(" + (currTime.getMinutes() * 6 + currTime.getSeconds() / 10) + "deg)";
    hourHand.style.transform = "rotate(" + 30 * (currTime.getHours() + j) + "deg)";
    setInterval(Time, 1020 - currTime.getMilliseconds());


    function FormatDateTime(Date) {
        var Hours = Date.getHours();
        var Minutes = Date.getMinutes();
        var Seconds = Date.getSeconds();

        return Str0L(Hours, 2) + ':' + Str0L(Minutes, 2) + ':' + Str0L(Seconds, 2);

    }

    function pm(Val, Length) {
        var pmVal = Val.toString();
        while (pmVal.length < Length)
            pmVal = '0' + pmVal;
        return pmVal;
    }
}

Time();