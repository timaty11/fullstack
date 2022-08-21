import shortid from 'shortid';
import User from './models/user.js';
import { pool } from './db.js';
import { setHash, isCorrectPass } from './utils.js';

let curUser;

const mainLoader = async (req, res) => {
  if (curUser) {
    res.json({
      login: curUser,
    });
    return;
  }
  res.json({ user: 'No authorization' });
};

const registerLoader = async (req, res) => {
  if (curUser) {
    res.json({
      login: curUser,
    });
    return;
  }
  // getAllData();
  res.json({ user: 'No authorization' });
};

const loginLouder = async (req, res) => {
  if (curUser) {
    res.json({
      login: curUser,
    });
  } else {
    // getAllData(); // пока не нужно
    res.json({ user: 'No authorization' });
  }
};

const singUp = async (req, res) => {
  // getAdmins(); // пока не нужно
  const { login, password } = req.body;
  const currentUser = new User();

  console.log(login, password);
  currentUser.parametr = 'login';
  await currentUser.find(login);
  setTimeout(() => {
    if (
      currentUser.login === login &&
      isCorrectPass(password, currentUser.password)
    ) {
      curUser = login;
      res.json('authorization');
      return;
    }
    res.json({
      errorMass: 'User or uncorrect data',
    });
  }, 150);
};

const singIn = async (req, res) => {
  const { login, email, password } = req.body;
  const hashPass = setHash(password);
  const userCreate = new User(login, email, hashPass);
  await userCreate.save();
  curUser = login;
  res.json('correct');
};

const resetLoader = async (_, res) => {
  if (curUser) {
    res.json({
      login: curUser,
    });
    return;
  }
  getEmails();
  res.json('reminder-form');
};

const resetPassword = async (req, res) => {
  const email = req.body.email;
  if (!emails.includes(email)) {
    res.json({
      errorClass: 'alert alert-danger text-center',
      errorMass: 'Email not found',
    });
    return;
  }
  const newPass = shortid.generate();
  const curUser = new User();
  await curUser.find(email);
  curUser.password = setHash(newPass);
  curUser.update = true;
  curUser.save();
  sendMassage(email, curUser, newPass).catch(console.error);
  res.json({
    confirmClass: 'alert alert-success',
    confirmMass: 'Password has been sent by email',
  });
};

// const exitUser = async (req, res) => {
//   req.session.destroy();
//   res.json({
//     massageExit: 'Your exit account :( Bye',
//   });
// };

const getData = async (_, res) => {
  const logins = [];
  const emails = [];

  const [result, i] = await pool
    .promise()
    .query('SELECT login, email FROM users');
  result.map(({ login }) => logins.push(login));
  result.map(({ email }) => emails.push(email));
  res.json({ logins, emails });
};

export {
  loginLouder,
  singUp,
  mainLoader,
  registerLoader,
  singIn,
  resetLoader,
  resetPassword,
  getData,
};
