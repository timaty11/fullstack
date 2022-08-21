const express = require('express');
const expressThymeleaf = require('express-thymeleaf');
const { TemplateEngine } = require('thymeleaf');
const File = require('./File.js');
const FileList = require('./FileList.js');


const app = express();
const host = '127.0.0.1';
const port = process.env.PORT ?? 7777;

const templateEngine = new TemplateEngine();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/'));
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname + '/');


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    let file = new File(req.body.filename);
    let fileList = new FileList();
    file.write(req.body.content);
    if (fileList.hasFiles()) {
        res.render('index', { list: fileList.getListForTemplate() });
    } else {
        res.render('index');
    }
});

app.get('/:file', (req, res) => {
    let file = new Object();
    let fileList = new FileList();
    if (fileList.getList().includes(req.params.file)) {
        file = new File(req.params.file);
        res.render('index', {
            list: fileList.getListForTemplate(),
            filename: file?.name,
            content: file.read?.()
        });
    } else {
        res.sendStatus(404);
    }
});

app.post('/:file', function (req, res) {
    let file = new File(req.params.file);
    let fileList = new FileList();
    file.delete();
    if (fileList.hasFiles()) {
        res.render('index', { list: fileList.getListForTemplate() });
    } else {
        res.render('index');
    }
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}/`);
});
