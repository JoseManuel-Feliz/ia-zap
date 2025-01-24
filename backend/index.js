require('dotenv').config();
const axios = require('axios');

const express = require('express');
const app = express();
const port = 3000;


const instance = axios.create({
    baseURL: "https://api.mistral.ai/v1/",
    headers: { 'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}` },
});

const uri = "chat/completions";

const Playload = {
    "model": "pixtral-12b-2409",
    "stream": false,
    "messages":
        [{
            "role": "user",
            "content": "Ciao, chi sei?"
        }],
    "response_format": { "type": "json_object" },
}

app.get('/', (req, res) => {

    instance.post(uri, Playload)
        .then(response => {
            res.send(response.data);
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
