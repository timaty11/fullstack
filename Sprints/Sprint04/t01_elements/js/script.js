let characters = document.getElementById("characters").children;

for (let i = 0; i < characters.length; i++) {
  let elem_class = characters[i].getAttribute("class");
  let elem_data = characters[i].getAttribute("data-element");

  if (!elem_class || (elem_class !== "good" && elem_class !== "evil")) {
    characters[i].className = "unknown";
  }
  
  if (!elem_data) {
    characters[i].setAttribute("data-element", "none");
  }
  
  characters[i].appendChild(document.createElement("br"));
  let circ = document.createElement("div");
  
  if (characters[i].getAttribute("data-element") !== "none") {
    elem_data = characters[i].getAttribute("data-element").split(' ');
    
    for (let j = 0; j < elem_data.length; j++) {
      circ = document.createElement("div");
      circ.setAttribute("class", `elem ${elem_data[j]}`);
      characters[i].appendChild(circ);
    }    
  } else {
    let line = document.createElement("div");

    circ.setAttribute("class", `elem ${elem_data}`);
    characters[i].appendChild(circ);
    line.setAttribute("class", "line");
    circ.appendChild(line);
  }
}
