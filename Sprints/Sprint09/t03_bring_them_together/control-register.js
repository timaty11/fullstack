import { login_list, email_list, setHash, getAllData } from './utils.js';
import User from './models/user.js';

export const registerPage = (app) => {
  app.get('/register', (req, res) => {
    if (req.session.user) {
      res.render('user-account', {
        login: req.session.user.login,
        roles: req.session.user.roles,
      });
      return;
    }
    getAllData();
    res.render('register-form');
  });

  app.post('/register', async (req, res) => {
    const { login, userName, email, password, password_confirmation, admin } = req.body;

    if (login_list.includes(login)) {
      res.render('register-form', {
        errorLogin: 'User with such login already exists',
        errorL: 'alert alert-danger',
      });
    } else if (email_list.includes(email)) {
      res.render('register-form', {
        errorEmail: 'User with such email already exists',
        errorE: 'alert alert-danger',
      });
    } else if (password !== password_confirmation) {
      res.render('register-form', {
        errorPass: 'Incorrect password',
        errorP: 'alert alert-danger',
      });
    } else {
      const hashPass = setHash(password);
      const userCreate = new User(login, userName, email, hashPass, admin);
      userCreate.save();
      setTimeout(() => {
        login_list.length = 0;
        email_list.length = 0;
        res.render('user-account', {
          login: userCreate.login,
          roles: userCreate.role,
        });
      }, 100);
    }
  });
};

export default registerPage;
