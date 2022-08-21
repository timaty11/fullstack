const express = require('express');
const data = require('./test');
const ListAvengerQuotes = require('./ListAvengerQuotes');


const app = express();
const host = '127.0.0.1';
const port = process.env.PORT ?? 7777;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/js', express.static(__dirname + '/'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/toXML', function (req, res) {
    let quotesList = new ListAvengerQuotes(data);
    quotesList.toXML();
    res.json({ before: JSON.stringify(quotesList.data, undefined, 2), after: quotesList.fromXML() });
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}/`);
});
