'use strict';

function generic() {
    let image = {
        width: 100,
        height: 400,
        title: 'Cool image'
    };

    function isNumeric(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }

    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (isNumeric(obj[key])) {
                obj[key] *= 2;
            }
        }
        return image;
    }

    multiplyNumeric(image);
}

module.exports = generic();