let iter = 1;


function transformation() {
  let content = document.getElementById("lab");
  let name = document.getElementById("hero");

  if (iter % 2 == 0) {
    content.style.backgroundColor = '#ffb300';
    
    name.innerHTML = "Bruce Banner";
    name.style.fontSize = "60px";
    name.style.letterSpacing = "2px";

    iter--;
  } else if (iter % 2 != 0) {
    content.style.backgroundColor = '#70964b';

    name.innerHTML = "Hulk";
    name.style.fontSize="130px";
    name.style.letterSpacing = "6x";

    iter++;
  }
}
