const clear = document.querySelector('#clear');
const add = document.querySelector('#add');
const notes = document.querySelector('#output');
let item = 0;

add.addEventListener('click', addToLocalStorage);
clear.addEventListener('click', clearLocalStorage);

function addToLocalStorage() {
  let textareaValue = document.querySelector('#textarea').value;

  if (textareaValue === "") {
    alert('It\'s empty. Try to input something in "Text input"')
  } else {
    localStorage.setItem(item.toString(), textareaValue+generateDate());
    if (notes.innerHTML === '[Empty]') {
      notes.innerHTML = '';
      notes.insertAdjacentHTML('beforeend', `<div>--> ${localStorage.getItem(item.toString())}</div>`);
    } else {
      notes.insertAdjacentHTML('beforeend', `<div>--> ${localStorage.getItem(item.toString())}</div>`);
    }
    item++;
  }
}


function clearLocalStorage() {
  let question = confirm('Delete cookies?')
  if (question === true) {
    localStorage.clear();
    notes.innerHTML = '[Empty]';
  }
}


function generateDate() {
  const date = new Date();

  let day = date.getDate()<10?("0" + date.getDate()):date.getDate();
  let month = date.getMonth()<10?("0" + date.getMonth()):date.getMonth();
  let hours = date.getHours()<10?("0" + date.getHours()):date.getHours();
  let mins = date.getMinutes()<10?("0" + date.getMinutes()):date.getMinutes();
  let seconds = date.getSeconds()<10?("0" + date.getSeconds()):date.getSeconds();

  const date3 = ` [${day}.${month}.${date.getFullYear()}, ${hours}:${mins}:${seconds}]`;
  return date3;
}

if (localStorage.length === 0) {
  notes.innerHTML = '[Empty]';
} else {
  translation();
}

function translation() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.getItem(i.toString());
    if (i === 0) {
      notes.innerHTML = `--> ${key}`;
    } else {
      notes.innerHTML += `<div>--> ${key}</div>`;
    }
  }
}
