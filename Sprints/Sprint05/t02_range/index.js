module.exports.checkDivision = (left, right) => {
    let res = " -";

    if (isNaN(right)) {
        right = 60;
    }

    if (left >= right || isNaN(left)){
        left = 1;
    }

    let number = left;

    while (number <= right) {
        if ((number % 2) === 0) {
            res = " is divisible by 2";
        }

        if ((number % 3) === 0) {
            if (res.match(" is divisible by 2")) {
                res += ", ";
            } else {
                res = " is ";
            }
            res += "is divisible by 3";
        }

        if ((number % 10) === 0) {
            res += ", is divisible by 10";
        }

        console.log('The number ' + number + res);

        res = " -";
        number++;
    }
}


// const i = require('./index');

// console.log('*** Range is 3 - 7 checkDivision(3, 7) ***');
// i.checkDivision(3, 7);

// console.log('*** Range is 58 checkDivision(58) ***');
// i.checkDivision(58);

// console.log('*** Range is ... - ... checkDivision() ***');
// i.checkDivision();
