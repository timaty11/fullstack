const filter = (word) => {
  word.filter((item, index) => word.indexOf(item) === index && item !== '');
}


const addWords = (obj, wrds) => {
  let old_str = obj.words.trim();
  let new_str = old_str + ' ' + wrds;
  let arr_words = new_str.split(' ');
  let result = filter(arr_words).join(' ');
  obj.words = result;
  return;
};


function removeWords(obj, wrds) {
  let remove_item = obj.words;
  let arr_words = remove_item.split(' ');
  let filter_word = filter(arr_words);
  let filter_words = filter(wrds.split(' '));
  let result = filter_word
    .filter((item) => !filter_words.includes(item))
    .join(' ');
  obj.words = result;
  return;
}


const changeWords = (obj, oldWrds, newWrds) => {
  let change_item = obj.words.split(' ');
  let filter_words = filter(change_item);
  let old_words = filter(oldWrds.split(' '));
  let new_words = filter(newWrds.split(' '));
  let result = old_words
    .map((item, iter) => {
      if (filter_words.includes(item)) {
        return new_words[iter];
      }
      return old_words[iter];
    })
    .join(' ');
  obj.words = result.trim();
  return;
};
