String.prototype.removeDuplicates = function removeDuplicates() {
  let str = this.replace(/ +(?= )/g,'').trim();
  let str_arr = str.split(' ');

  str = str_arr.filter((item, index, str_arr) => {
    return str_arr.indexOf(item) === index;
  }).join(' ');

  return str;
}
