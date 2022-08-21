const express = require('express');
const ejs = require('ejs');
const Note = require('./Note');
const NotePad = require('./NotePad');

const app = express();
const host = '127.0.0.1';
const port = process.env.PORT ?? 7777;
const NotePadMini = new NotePad();

app.use(express.urlencoded({ extended: true }));
app.use('/js', express.static(__dirname));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname);


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    NotePadMini.addNote(new Note(req.body.name, req.body.text, req.body.importance));
    res.render('index');
});

app.get('/list', (req, res) => {
    res.json(NotePadMini.getAllNotes());
})

app.get('/:file', (req, res) => {
    res.render('index', NotePadMini.getNote(req.params.file));
})

app.get('/delete/:file', (req, res) => {
    NotePadMini.DeleteNote(req.params.file);
    res.redirect('/');
})

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}/`);
});
