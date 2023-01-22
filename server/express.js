const express = require('express');
const axios = require('axios');
const app = express();
const CORS = require('cors');
app.use(CORS());
const port = 2022;




app.get('/test', (req, res) => {
        
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ab8c8392ff011eb0a1fc84b84c2bbce0&language=en-US&page=1', {
        headers: { }
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









app.listen(port, () => {
    console.log(`BlueFrog Server listening on port ${port} Happy Hopping`);
});





