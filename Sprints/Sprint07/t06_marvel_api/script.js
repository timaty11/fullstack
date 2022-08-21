const api_route = '/marvel_api';
const data = document.getElementById('data');
const get_btn = document.getElementById('get_btn');

function createContainer(prop) {
    const div = document.createElement('div');
    div.className = 'container';
    const bold = document.createElement('b');
    bold.innerHTML = `${prop}: `;
    div.appendChild(bold);
    return div;
}

function createRow(prop, value) {
    const div = document.createElement('div');
    div.className = 'row';
    const label = document.createElement('label');
    label.innerHTML = `${prop}: `;
    div.appendChild(label);
    const span = document.createElement('span');
    span.innerHTML = value;
    div.appendChild(span);
    return div;
}

function displayData(data, parent) {
    for (const el in data) {
        if (typeof (data[el]) === 'object') {
            const div = createContainer(el);
            parent.appendChild(div);
            displayData(data[el], div);
        } else {
            const div = createRow(el, data[el]);
            parent.appendChild(div);
        }
    }
}

function getData() {
    get_btn.style.display = 'none';
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('get', api_route);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            displayData(xhr.response, data)
        }
    }
    xhr.onerror = () => {
        data.innerText = xhr.responseText;
        console.error(xhr.responseText);
    }
    xhr.send()
}
