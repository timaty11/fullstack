let i = 1;

while (true) {
  number = prompt("Previous result: " + i + ". Enter a new number:");
  
  if (number.match(`/\D/g`) != null || isNaN(number)) {
    alert("Invalid number!");
    break;
  } else {
    number = Number(number);
    i += number;
    if (i > 10000) i = 1;
  }
}
      