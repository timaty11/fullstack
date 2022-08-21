import express from 'express';
import expressThymeleaf from 'express-thymeleaf';
import session from 'express-session';
import path from 'path';
import { TemplateEngine } from 'thymeleaf';
import Hero from './models/user.js';
import { pool } from './db.js';

const PORT = 8080 ?? process.env.PORT;
const HOST = 'localhost';
const app = express();
const __dirname = path.resolve();
const templateEngine = new TemplateEngine();
const login_list = [];
const email_list = [];

app.use('/public', express.static(path.join(__dirname, '/public')));
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname + '/public');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: 'lol',
    secret: 'lol',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.get('/', (_, res) => {
  allLogin();
  res.render('index');
});

app.post('/exit', (_, res) => {
  res.redirect('/');
});

app.get('/connect', (_, res) => {
  res.render('user-account');
});

app.post('/register', async (req, res) => {
  if (!req.body) {
    res.redirect('/');
  }
  const { login, userName, email, password, password_confirmation } = req.body;

  if (login_list.includes(login)) {
    res.render('index', {
      errorLogin: 'User with such login already exists',
      errorL: 'alert alert-danger',
    });
  } else if (email_list.includes(email)) {
    res.render('index', {
      errorEmail: 'User with such email already exists',
      errorE: 'alert alert-danger',
    });
  } else if (password !== password_confirmation) {
    res.render('index', {
      errorPass: 'Incorrectly entered password!',
      errorP: 'alert alert-danger',
    });
  } else {
    const userCreate = new Hero(login, userName, email, password);
    userCreate.save();
    login_list.length = 0;
    email_list.length = 0;
    allLogin();

    res.render('index', {
      completeClass: 'alert alert-success',
      completeMess: 'Registration complete!',
    });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server running`);
});

const allLogin = () => {
  pool.query('SELECT login, email FROM users', (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    res.map(({ login }) => login_list.push(login));
    // console.log(login_list);
    res.map(({ email }) => email_list.push(email));
    // console.log(email_list);
  });
};
