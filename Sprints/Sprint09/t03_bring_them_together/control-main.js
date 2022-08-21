const mainPage = (app) => {
  app.get('/', (req, res) => {
    if (req.session.user) {
      res.render('user-account', {
        login: req.session.user.login,
        roles: req.session.user.roles,
      });
      return;
    }
    res.render('index');
  });
};

export default mainPage;
