require('dotenv').config();
const axios = require('axios');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');

    axios.get('/user?ID=12345')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
