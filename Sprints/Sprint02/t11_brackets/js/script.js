const checkBrackets = (str) => {
  let arr_val = [];

  if (!(typeof str === 'string') || !str.match(/[()]/)) {
    return -1;
  }
  for (let i = 0; i <= str.length; i += 1) {
    if (str[i] == '(' || str[i] == ')') {
      arr_val.push(str[i]);
    }
  }

  let new_str = arr_val.join('');

  for (let i = 0; i <= str.length; i += 1) {
    new_str = new_str.replace('()', '');
  }

  return new_str.length;
};
