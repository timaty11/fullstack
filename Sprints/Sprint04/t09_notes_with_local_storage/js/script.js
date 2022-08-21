document.cookie = `name=adsa`;

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearLocal);
const add = document.querySelector('#add');
add.addEventListener('click', addLocal);
const notes = document.querySelector('#output');
let item = 0;


function addLocal() {
    let text = document.querySelector('#textarea').value;
    var cookie_date = new Date();
    cookie_date.setYear(cookie_date.getFullYear() + 1);
    document.cookie = `${text}=${text};expires=${cookie_date.toUTCString()}`;
    var cookies = document.cookie.split(";");
    if (cookies.length == 0) {
        notes.innerHTML = '[Clear]';
    } else {
        let i = 0;
        while (i < cookies.length) {
            var key = cookies[i].split("=");
            if (i == 0) {
                notes.innerHTML = `--> ${key[0]}`;
            } else {
                notes.innerHTML += `<div>--> ${key[0]}</div>`;
            }
            i++;
        }
    }
    document.querySelector('#textarea').value = "";
}


function clearLocal() {
    let question = confirm('Delete local storage?')
    if (question == true) {
        var cookies = document.cookie.split(";");
        var i = 0;

        while (i < cookies.length) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
            document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            i++
        }
        
        notes.innerHTML = '[Clear]';
    }
}


var cookies = document.cookie.split(";");
if (cookies.length == 0) {
    notes.innerHTML = '[Clear]';
} else {
    for (let i = 0; i < cookies.length; i++) {
        var key = cookies[i].split("=");
        if (i == 0) {
            notes.innerHTML = `--> ${key[0]}`;
        } else {
            notes.innerHTML += `<div>--> ${key[0]}</div>`;
        }
    }
}

