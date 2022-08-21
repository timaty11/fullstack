let minNumber = prompt(`Enter min range`);
let maxNumber = prompt(`Enter max( > ${minNumber}) range`);

const even = ' is even';
const odd = ' is a multiple of 3';
const notShared = ' -';
const divisibleTen = ' is a multiple of 10';

let min = 1;
let max = 100;

const if_even = (num) => (num % 2 === 0 ? true : false);
const if_odd = (num) => (num % 3 === 0 ? true : false);
const if_divid_by_ten = (num) => (num % 10 === 0 ? true : false);

const calculNumber = (min = 1, max = 100) => {
  let result = '';
  for (let i = min; i <= max; i += 1) {
    if (if_even(i) && if_odd(i) && if_divid_by_ten(i)) {
      result += `${i}${even},${odd},${divisibleTen}\n`;
    } else if (!if_even(i) && if_odd(i) && if_divid_by_ten(i)) {
      result += `${i}${odd},${divisibleTen}\n`;
    } else if (if_even(i) && !if_odd(i) && if_divid_by_ten(i)) {
      result += `${i}${even},${divisibleTen}\n`;
    } else if (if_even(i)) {
      result += `${i}${even}\n`;
      console.log(result);
    } else if (if_odd(i)) {
      result += `${i}${odd}\n`;
      console.log(result);
    } else if (if_divid_by_ten(i)) {
      result += `${i}${divisibleTen}\n`;
      console.log(result);
    } else if (!if_even(i) && !if_odd(i) && !if_divid_by_ten(i)) {
      result += `${i}${notShared}\n`;
    }
  }

  return result;
};


if (minNumber.match(/^[1-9]+[0-9]*$/) || maxNumber.match(/^[1-9]+[0-9]*$/)) {
  min = Number(minNumber);
  max = Number(maxNumber);
}


if (max > 101 || min <= 0 || max <= min || isNaN(min) || isNaN(max)) {
  alert(calculNumber());
  console.log(calculNumber());
} else {
  alert(calculNumber(min, max));
  console.log(calculNumber(min, max));
}
