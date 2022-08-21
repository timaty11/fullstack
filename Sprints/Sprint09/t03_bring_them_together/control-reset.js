import { getEmails, email_list, setHash } from './utils.js';
import shortid from 'shortid';
import User from './models/user.js';
import sendMassage from './send-massage.js';

export const resetPage = (app) => {
  app.get('/reminder-password', (_, res) => {
    if (req.session.user) {
      res.render('user-account', {
        login: req.session.user.login,
        roles: req.session.user.roles,
      });
      return;
    }

    getEmails();
    res.render('reminder-form');
  });

  app.post('/push-massege', async (req, res) => {
    const email = req.body.email;
    if (!email_list.includes(email)) {
      res.render('form-reminder', {
        errorClass: 'alert alert-danger text-center',
        errorMass: 'Email not found',
      });
      return;
    }

    const newPass = shortid.generate();
    const currentUser = new User();
    currentUser.find(email);
    setTimeout(() => {
      currentUser.password = setHash(newPass);
      currentUser.update = true;
      currentUser.save();
      sendMassage(email, currentUser, newPass).catch(console.error);
      res.render('index', {
        confirmClass: 'alert alert-success',
        confirmMass: 'Password sent on your email',
      });
    }, 100);
  });
};

export default resetPage;
