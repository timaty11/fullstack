import { pool } from './db.js';
import bcrypt from 'bcrypt';

const login_list = [];
const email_list = [];
const admin_list = [];

const getAllData = () => {
  pool.query('SELECT login, email FROM users', (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    res.map(({ login }) => login_list.push(login));
    res.map(({ email }) => email_list.push(email));
  });
};

const getAdmins = () => {
  pool.query('SELECT user_login FROM admin_list', (err, res) => {
    if (err) {
      return;
    }
    res.map(({ user_login }) => admin_list.push(user_login));
  });
};

const setHash = (password) => {
  const salt = bcrypt.genSaltSync(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  const HASH = bcrypt.hashSync(password, salt);
  return HASH;
};

const getEmails = async () => {
  const [result, _] = await pool.promise().query('SELECT email FROM users;');
  result.map(({ email }) => email_list.push(email));
};

const isCorrectPass = (pass, hash) => bcrypt.compareSync(pass, hash);

export {
  getAllData,
  setHash,
  isCorrectPass,
  getAdmins,
  getEmails,
  admin_list,
  login_list,
  email_list,
};
