import mainPage from './control-main.js';
import registerPage from './control-register.js';
import loginPage from './control-login.js';
import resetPage from './control-reset.js';
import userPage from './control-userAcc.js';

export const routPages = (app) => {
  mainPage(app);
  registerPage(app);
  loginPage(app);
  resetPage(app);
  userPage(app);
};
