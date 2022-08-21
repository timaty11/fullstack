const first_name = prompt('Enter your first name, please:');
const second_name = prompt('Enter your second name, please:');

if (first_name.match(/[^A-Za-z]/) && second_name.match(/[^A-Za-z]/)) {
  alert('Wrong input: incorrectly entered data!!!');
} else {
  const greeting = (data) => {
    const dataValue = data.split('');
    return dataValue
      .map((symbol, iter) => {
        if (iter === 0) {
          return symbol.toUpperCase();
        }
        return symbol.toLowerCase();
      })
      .join('');
  };

  alert(`Hello ${greeting(first_name)} ${greeting(second_name)}!`);
}
