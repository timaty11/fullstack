const express = require('express');
const e_session = require('express-session');

const app = express();
const host = '127.0.0.1';
const port = process.env.PORT ?? 7777;

app.use(e_session({secret: 'keyCode', resave: true, saveUninitialized: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    if (req.session.name) { 
        return res.redirect('/admin'); 
    }
    res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
    let exp = 0;
    let purp = 1;
    let session = req.session;
    for (let key in req.body) {
        session[key] = req.body[key];
        key.includes('pw_') ? exp++ : undefined;
        key.includes('pb_') ? purp++ : undefined;
    }
    session.experience = exp;
    session.purpose = purp;
    res.redirect('/admin');
});

app.get('/admin', (req, res) => {
    let session = req.session;
    if (session.name && session.alias && session.age && session.description) {
        res.write(`<h1>Session for new</h1>
        <pre>
        name: ${session.name}
        alias: ${session.alias}
        age: ${session.age}
        description: ${session.description}
        photo: ${session.photo}
        experience: ${session.experience}
        level: ${session.level}
        purpose: ${session.purpose}
        </pre>`);
        res.end('<fieldset><a href=/logout><button>Forget</button></a></fieldset>');
    } else {
        res.redirect('/');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    });
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
