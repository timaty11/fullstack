import express from 'express';
import ejs from 'ejs';
import got from 'got';
import path from 'path';


const app = express();
const host = '127.0.0.1';
const port = process.env.port ?? 7777;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.resolve() + '/');


app.get('/', async (req, res) => {
    let link = req.query.url;
    if (link) {
        const data = await got(link);
        res.render('index', { url: `url: ${link}`, content: `<body>\n${/<body.*?>([\s\S]*)<\/body>/.exec(data.body)[1]}</body>` });
    } else {
        res.render('index', { url: 'Type an URL...' });
    }
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}/`);
});
