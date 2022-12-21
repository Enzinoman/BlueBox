const express = require('express');
const axios = require('axios');
const app = express();
const CORS = require('cors');
app.use(CORS());
const port = 2022;


app.get('/test', (req, res) => {
        
    axios.get('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', {
        headers: {
            'X-RapidAPI-Key':'83e0e090d5msha3f06865ed72c28p16284ajsn36df8c2e848f',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    })
        .then(response => {
            // Do something with the response data
            res.send(response.data);
        })
        .catch(error => {
            // Handle any error that occurred
            console.error(error);
            res.send(error);
        });
});



// app.get('/movies', (req, res) => {

//     axios.get('https://imdb-top-100-movies.p.rapidapi.com/top17', {
//         headers: {
//             'X-RapidAPI-Key': '83e0e090d5msha3f06865ed72c28p16284ajsn36df8c2e848f',
//             'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//         }
//     })
//         .then(response => {
//             // Do something with the response data
//             res.send(response.data);
//         })
//         .catch(error => {
//             // Handle any error that occurred
//             console.error(error);
//             res.send(error);
//         });
// });







app.listen(port, () => {
    console.log(`BlueFrog Server listening on port ${port} Happy Hopping`);
});