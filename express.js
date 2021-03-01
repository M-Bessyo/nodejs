const express = require('express')
const app = express();

app.get('/bootcamp1', (req, res) => {
    res.send('BOOTCAMP 1\n');
});

app.get('/bootcamp2', (req, res) => {
    res.send('BOOTCAMP 2\n');
});

app.post('/create', (req, res) => {
    res.send('Create Bootcamp\n');
});

app.listen(3000);