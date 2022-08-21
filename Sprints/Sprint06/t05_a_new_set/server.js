const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')
const PORT = process.env.PORT ?? 8080

const app = express();
const templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname + '/');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
})

app.get('/', function (req, res) {
    res.render('index');
})

app.post('/', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }

    res.render('index', {
        name: req.body['name'] === '' ? 'NONE' : req.body['name'],
        email: req.body['email'] === '' ? 'NONE' : req.body['email'],
        age: req.body['age'] === '' ? 'NONE' : req.body['age'],
        description: req.body['description'] === '' ? 'NONE' : req.body['description'],
        photo: req.body['photo'] === '' ? 'NONE' : req.body['photo'],
    });
})
