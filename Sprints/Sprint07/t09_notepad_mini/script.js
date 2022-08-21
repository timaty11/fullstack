const list = document.getElementById('list');
const listURL = '/list';

async function getList() {
    const notes = await fetch(listURL).then(res => res.json());
    let listCode = '';
    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        listCode += ` <li><a href="/${element.name}">${element.date} > ${element.name}</a> <a href="/delete/${element.name}">DELETE</a></li>`;
    }
    list.innerHTML = '';
    list.innerHTML = listCode;
}

getList();