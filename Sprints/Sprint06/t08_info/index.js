const express = require('express');
const path = require('path');
const ip = require('ip');
const os = require('os');

const PORT = process.env.PORT ?? 8080;

const app = express();

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
})


app.get('/', (req, res) => {
  console.log(
    `a name of file of the executed script: ${path.basename(__filename)}\n` +
    `arguments passed to the script: ${process.argv.slice(2)}\n` +
    `IP address of the server ${ip.address()}\n` +
    `a name of host that invokes the current script: ${os.hostname()}\n` +
    `a name and a version of the information protocol: ${req.protocol}\n` +
    `a query method: ${req.method}\n` +
    `User-Agent information: ${req.get('user-agent')}\n` +
    `IP address of the client: ${ip.address()}\n` +
    `a list of parameters passed by URL: ${req.url.slice(1)}`
  );
})
