import express from 'express';
import ejs from 'ejs';
import fetch from 'node-fetch';
import MD5 from "crypto-js/md5.js";
import path from 'path';


const app = express();
const host = '127.0.0.1';
const port = process.env.port ?? 7777;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve()));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.resolve());

const ts = Date.now();
const public_key = 'dbde435fb9e47b659742711406646118';
const private_key = '49040d84845c945ad76287d6d4ce9e4adb16e591';
const hash = MD5(ts + private_key + public_key).toString();
const api_url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${public_key}&hash=${hash}`;


app.get('/', (req, res) => {
	res.render('index');
});

app.get('/marvel_api', async (req, res) => {
	const api = await fetch(api_url);
	res.json(await api.json());
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}/`);
});
