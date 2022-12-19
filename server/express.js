const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 2022;


<<<<<<< HEAD

const axios = require("axios");

=======
>>>>>>> development


//graphs the full schedule of tv shows beware of mass of data
app.get('/displayarea', async (req, res) => {
    try {
        const response = await axios.get(' https://api.tvmaze.com/schedule/web?date=2020-05-29'); 

        res.json(response.data);
    }
    catch (err) {
        console.log(err);
    }
});

//graps breaking bad data as a test
app.get('/test', async (req, res) => {
    try {
        const response = await axios.get('https://api.tvmaze.com/lookup/shows?thetvdb=81189');
        res.json(response.data);
    }
    catch (err) {
        console.log(err);
    }
});

//graps data from given date in given country
app.get('/stream-schedule', async (req, res) => {
    try {
        const response = await axios.get('https://api.tvmaze.com/schedule/web?date=2022-12-15&country=US');
        res.json(response.data);
    }
    catch (err) {
        console.log(err);
    }
});

app.get('*', (req, res) => {
    res.status(500).json({ message: 'error' });
});


app.listen(port, () => {
    console.log(`BlueFrog Server listening on port ${port} Happy Hopping`);
});