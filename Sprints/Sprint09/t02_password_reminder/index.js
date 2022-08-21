import express from 'express';
import session from 'express-session';
import expressThymeleaf from 'express-thymeleaf';
import nodemailer from 'nodemailer';
import path from 'path';
import { TemplateEngine } from 'thymeleaf';
import { pool } from './db.js';
import bcrypt from 'bcrypt';
import shortid from 'shortid';
import Hero from './models/users.js';

const PORT = 8080 ?? process.env.PORT;
const HOST = 'localhost';
const app = express();
const __dirname = path.resolve();
const templateEngine = new TemplateEngine();
const emails = [];
app.use('/public', express.static(path.join(__dirname, '/public')));
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: 'amogus',
    secret: 'amogus',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/exit', (req, res) => {
  res.redirect('/');
});

app.get('/reminder-password', (_, res) => {
  getEmails();
  res.render('form-reminder');
});

app.post('/push-massege', async (req, res) => {
  const email = req.body.email;
  if (!emails.includes(email)) {
    res.render('form-reminder', {
      errorClass: 'alert alert-danger text-center',
      errorMass: 'Email not found',
    });
    return;
  }
  const newPass = shortid.generate();
  const currentUser = new Hero();
  currentUser.find(email);
  setTimeout(() => {
    currentUser.password = setHash(newPass);
    currentUser.update = true;
    currentUser.save();
    main(email, currentUser, newPass).catch(console.error);
    res.render('index', {
      confirmClass: 'alert alert-success',
      confirmMass: 'Password has been sent by email',
    });
  }, 100);
});

app.listen(PORT, HOST, () => {
  console.log(`Server running`);
});

const getEmails = async () => {
  const [result, _] = await pool.promise().query('SELECT email FROM users;');
  result.map(({ email }) => emails.push(email));
};

const main = async (email, { login, ..._ }, password) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: '',
      pass: '',
    },
  });

  let info = await transporter.sendMail({
    from: '"anonymous 👻" <anon@example.com>',
    to: email,
    subject: 'Reset password',
    html: `<h1>Reset password</h1>
      <br>
      <p>Login: ${login}</p>
      <p>Password: ${password}</p>`,
  });
};

const setHash = (password) => {
  const salt = bcrypt.genSaltSync(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  const HASH = bcrypt.hashSync(password, salt);
  return HASH;
};
