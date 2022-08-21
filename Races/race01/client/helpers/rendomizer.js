const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const alphabet_big = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const symbols = ['@', '!', '^', '&', '*', '%', '$', '#'];

export const rendomizer = (length) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += number[Math.floor(Math.random() * symbols.length)];
    password += alphabet[Math.floor(Math.random() * symbols.length)];
    password += alphabet_big[Math.floor(Math.random() * symbols.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return password;
};
