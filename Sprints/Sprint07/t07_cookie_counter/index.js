const express = require('express');
const ejs = require('ejs');
const e_session = require('express-session');


const app = express();
const host = '127.0.0.1';
const port = 7777;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(e_session({ secret: 'keyCode', resave: true, cookie: { maxAge: 60000 }, saveUninitialized: false }));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname);


app.get('/', (req, res) => {
    if (!req.session.views) {
        req.session.views = 1;
    } else {
        req.session.views += 1;
    }
    res.render('index', { views: req.session.views });
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}/`);
});
