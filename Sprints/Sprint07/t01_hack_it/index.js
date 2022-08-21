const express = require('express');
const e_session = require('express-session');
const bcrypt = require('bcrypt');
const handler = require('./session_handler');

const app = express();
const host = '127.0.0.1';
const port = process.env.PORT ?? 7777;

app.use(e_session({secret: 'keyCode', resave: true, saveUninitialized: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


let is_hacked = false;

app.get('/', (req, res) => {
    let session = req.session;
    if (session.password) {
        res.redirect('/admin');
    } 
    else if (is_hacked) {
        res.send(handler(3));
        is_hacked = false;
    } 
    else {
        res.send(handler(1, '', session.hacked));
    }
});

app.post('/', (req, res) => {
    let session = req.session;
    session.password = req.body.password;
    session.salt = req.body.salt;
    session.hash = bcrypt.hashSync(session.password, +session.salt);
    res.redirect('/admin');
});

app.get('/admin', (req, res) => {
    let session = req.session;
    if (session.password) {
        res.send(handler(2, session.hash));
    } else {
        res.redirect('/');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return console.log(err);
        }
    });
    res.redirect('/');
});

app.post('/check', (req, res) => {
    let session = req.session;
    session.input = req.body.g_password;
    if (session.password) {
        if (bcrypt.compareSync(session.input, session.hash)) {
            session.hacked = true;
            is_hacked = true;
            req.session.destroy((err) => {
                if (err) {
                    return console.log(err);
                }
                res.redirect('/');
            });
        } else {
            res.send(handler(4, session.hash));
        }
    } else {
        res.redirect('/');
    }
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
