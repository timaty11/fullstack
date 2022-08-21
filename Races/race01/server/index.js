import express from 'express';
import session from 'express-session';
// import path from 'path';
import cors from 'cors';
import {
  loginLouder,
  singUp,
  mainLoader,
  registerLoader,
  singIn,
  resetLoader,
  resetPassword,
  getData,
} from './request.js';

const PORT = 8080 ?? process.env.PORT;
const app = express();
// const __dirname = path.resolve();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  session({
    name: 'amogus',
    secret: 'amogus',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 9000 * 60 * 100,
    },
  })
);

app.get('/', mainLoader);

app.get('/login', loginLouder);
app.post('/login', singUp);

app.get('/register', registerLoader);
app.post('/register', singIn);

app.get('/reminder-password', resetLoader);
app.post('/reminder-password', resetPassword);

app.get('/allData', getData);

app.listen(PORT, () => {
  console.log(`Server running at http://:${PORT}/`);
});
