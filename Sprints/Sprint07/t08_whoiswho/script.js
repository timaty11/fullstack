const spreadsheet = document.getElementById('table');
const filterContainer = document.getElementById('filter');
const selector = document.getElementById('selector');

const reqUrl = '/spreadsheet';
let column = '';
let currentArray = [];

function filter() {
    const key = selector.options[selector.selectedIndex].value;
    currentArray.sort((a, b) => b[column] == key ? 1 : -1);
    createTable(currentArray);
}

function displayFilter(event) {
    filterContainer.style.display = 'unset';
    column = event.target.value;
    let sorted = currentArray
        .map(i => i[event.target.value])
        .filter((val, ind, arr) => arr.indexOf(val) === ind);
    let options = `<option value="NOT SELECTED" selected>NOT SELECTED</option>`;
    for (let i = 0; i < sorted.length; i++) {
        const element = sorted[i];
        options += `<option value="${element}">${element}</option>`;
    }
    selector.innerHTML = options;
}

function createHeaderArr(row) {
    const headerArr = [];
    for (let key in row) {
        headerArr.push(key);
    }
    return headerArr;
}

function createCell(value, row) {
    let cell = document.createElement("td");
    cell.innerText = value;
    row.appendChild(cell);
}

function createHeaderRow(headerData, table) {
    const headRow = document.createElement("tr");
    for (let i = 0; i < headerData.length; i++) {
        const cell = document.createElement("th");
        const button = document.createElement('button');
        button.innerText = headerData[i];
        button.setAttribute('value', headerData[i]);
        button.addEventListener('click', displayFilter);
        cell.appendChild(button);
        headRow.appendChild(cell);
    }
    table.appendChild(headRow);
}

function createTable(tableData) {
    const table = document.createElement('table');
    const headerArr = createHeaderArr(tableData[0]);
    createHeaderRow(headerArr, table);
    for (let i = 0; i < tableData.length; i++) {
        const element = tableData[i];
        let bodyRow = document.createElement("tr");
        for (let key in element) {
            createCell(element[key], bodyRow);
        }
        table.appendChild(bodyRow);
    }
    spreadsheet.innerHTML = '';
    spreadsheet.appendChild(table);
}

async function getData() {
    const { results } = await fetch(reqUrl).then(res => res.json());
    if (!(results == 'No Data')) {
        currentArray = results;
        createTable(currentArray);
    }
}

getData();