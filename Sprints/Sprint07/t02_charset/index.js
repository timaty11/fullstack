const express = require('express');
const iconv = require('iconv-lite');

const app = express();
const host = '127.0.0.1';
const port = process.env.PORT ?? 7777;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    if (req.body.inputtext && req.body.charset) {
        res.send(ren(getChs(req.body)));
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});

function ren(par = '') {
    let result = `<h1>Charset</h1>
    <form action="/" method="POST">
        <div>
            <label for="inputtext">Change charset:</label>
            <input type="text" name="inputtext" placeholder="Input string">
        </div><br>
        <div>
            <label for="charset">Select charset or several charsets:</label>
            <select id="charset" name="charset" multiple>
                <option value="UTF-8">UTF-8</option>
                <option value="ISO-8859-1">ISO-8859-1</option>
                <option value="Windows-1252">Windows-1252</option>
            </select>
            <button type="submit">Change charset</button>
            <button onclick="location.href='/'">Clear</button>
        </div>
    </form>
    ${par}`;
    return result;
}

function getChs(request) {
    let result = `<div><label>Input string: </label><textarea type="current_charset" cols="22" rows="2" 
        placeholder="${request.inputtext}" disabled></textarea></div>`;
    if (typeof request.charset === 'string') {
        return result + getString(request.charset, request.inputtext);
    } else {
        request.charset.forEach(item => {
            result += getString(item, request.inputtext);
        });
        return result;
    }
}

function getString(charset, text) {
    if (charset == 'UTF-8') {
        return `<div><label>${charset} </label><textarea type="current_charset" cols="22" rows="2" placeholder="${text}" disabled></textarea></div>`;
    }
    if (charset == "Windows-1252") {
        return `<div><label>${charset} </label><textarea type="current_charset" cols="22" rows="2" 
            placeholder="${iconv.encode(text, 'Windows-1252')}" disabled></textarea></div>`;
    }
    return `<div><label>${charset} </label><textarea type="current_charset" cols="22" rows="2" 
        placeholder="${iconv.encode(text, 'ISO-8859-1')}" disabled></textarea></div>`;
}
