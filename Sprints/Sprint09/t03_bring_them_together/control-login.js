import User from './models/user.js';
import { admin_list, getAdmins, isCorrectPass, getAllData } from './utils.js';

const loginPage = (app) => {
  app.get('/login', (req, res) => {
    if (req.session.user) {
      res.render('user-account', {
        login: req.session.user.login,
        roles: req.session.user.roles,
      });
      return;
    }
    getAllData();
    res.render('login-form');
  });
  
  app.post('/login', async (req, res) => {
    getAdmins();
    const { login, password } = req.body;
    let roles = 'User';
    const currentUser = new User();
    currentUser.parametr = 'login';
    currentUser.find(login);
    
    setTimeout(() => {
      if (currentUser.login === login && isCorrectPass(password, currentUser.password)) {
        if (admin_list.includes(login)) {
          roles = 'Admin';
        }

        admin_list.length = 0;
        req.session.user = { login, roles };
        res.render('user-account', { login, roles });
        return;
      }
      res.render('login-form', {
        errorMass: 'User or password uncorrect',
        errorClass: 'alert alert-danger text-center',
      });
    }, 10);
  });
};

export default loginPage;
