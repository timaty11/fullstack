const concat = (string1, string2) => {
  askWrite.count = 0;

  function askWrite() {
    askWrite.count++;
    let string2 = prompt('Enter the text:');

    if (string2.length < 1) {
      return string1;
    } else {
      return `${string1} ${string2}`;
    }
  }

  if (string2 === undefined) {
    return askWrite;
  } else {
    return `${string1} ${string2}`;
  }
};
