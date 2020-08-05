const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h2>hello world</h2>');
});

app.post('/', (req, res) => {
    res.send('Got a post request');
});

app.put('/user', (req, res) => {
    res.send('Got a put request at /user');
});

app.delete('/user', (req, res) => {
    res.send('Got a delete request at /user');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));