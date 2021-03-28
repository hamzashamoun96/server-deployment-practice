'use strict';

const express = require('express');
const app = express();
const notFound = require('./error-handlers/404.js');
const errHandler = require('./error-handlers/500.js');

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/bad', (req, res) => {
    throw new Error('something went wrong')
})

function listen(port) {
    app.listen(port, () => {
        console.log(`Heard From Port ${port}`)
    })
}


app.use('*',notFound);
app.use(errHandler)

module.exports = {
    app: app,
    listen: listen,
}