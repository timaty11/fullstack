export const userPage = (app) => {
  app.get('/account', (req, res) => {
    if (!req.session.user) {
      res.redirect('/');
    }
    res.render('user-account');
  });

  app.post('/exit', (req, res) => {
    req.session.destroy();
    res.render('index', {
      massageExit: 'Bye',
    });
  });
};

export default userPage;
