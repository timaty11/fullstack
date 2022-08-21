const serverURL = document.getElementById('url');
const data = document.getElementById('Data');
const info = document.getElementById('info');

function getData() {
    fetch(serverURL.value).then(res => res.text()).then(body => data.innerText = body);
}
