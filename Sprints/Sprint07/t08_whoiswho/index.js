const express = require('express');
const ejs = require('ejs');
const csv = require('csv-parser');
const fs = require('fs');


const app = express();
const host = '127.0.0.1';
const port = process.env.port ?? 7777;

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: false }));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname);

let results = new Array();

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    const path = req.body.inputFile;
    if (path != '') {
        fs.createReadStream(path)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                res.render('index');
            });
    } else {
        res.render('index');
    }
});

app.get('/spreadsheet', (req, res) => {
    if (results.length > 0) {
        res.json({ results });
    } else {
        res.json({ results: 'No Data' });
    }
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}/`);
});
