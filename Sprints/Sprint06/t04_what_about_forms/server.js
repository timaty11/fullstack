const express = require('express');
const expressThymeleaf = require('express-thymeleaf');
const {TemplateEngine} = require('thymeleaf');
const bodyParser = require('body-parser');
const PORT = process.env.PORT ?? 8080;

const app = express();
const templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname + '/');
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
}) 

app.get('/', function (req, res) {
  res.render('index', {answer: 'Make your choise, yong padavan!'});
})

app.post('/', (req, res) => {
  if (!req.body) {
    return res.sendStatus(400);
  }

  if (req.body['answer'] === 'correct') {
    return res.render('index.html', { answer: 'Correct!' });
  }
  
  res.render('index', { answer: 'Shame on you! Go and watch Avengers!' });
})
