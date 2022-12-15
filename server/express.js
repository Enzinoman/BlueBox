const express = require('express');
const axios = require('axios');
const app = express();
const port = 2022;

app.get('/test', async (req, res) => {
    try {
        const response = await axios.get('https://api.tvmaze.com/lookup/shows?thetvdb=81189');
        res.json(response.data);
    }
    catch (err) {
        console.log(err);
    }
});

app.get('/allshows', async (req, res) => {
    try {
        const response = await axios.get('https://api.tvmaze.com/');
        res.json(response.data);
    }
    catch (err) {
        console.log(err);
    }
});

app.get('*', (req, res) => {
    res.status(500).json({ message: 'error' });
});

//read by id
// app.get('/donuts/:id', (req, res) => {
//     async function oneDonuts(){
//         try{
//             let id=req.params.id;
//             let queryString ='SELECT * FROM donuts WHERE id =$1';
//             let value=[id];
//             const result = await pool.query(queryString,value);
//             if(result.rows.length == 0){
//                 res.status(404).send(`ID of "${id}" NOT FOUND`);
//             }else{
//                 res.status(200).send(result.rows);
//             }
//         }catch(e){
//             console.log(e);
//         }
//     }
//     oneDonuts();
// });
// //create
// app.post('/', (req, res) => {
//     async function createDonuts(){
//         try{
//             let donuts=req.body;
//             let name=donuts.name;
//             let topping=donuts.topping;
//             let qty=donuts.qty;
//             let queryString ='INSERT INTO donuts(name,topping,qty) VALUES($1,$2,$3) RETURNING *';
//             let value=[name,topping,qty];
//             const result = await pool.query(queryString,value);
//             if(name == undefined || topping == undefined|| qty == undefined){
//                 res.sendStatus(404);
//             }else{
//                 res.status(201).send(result.rows);
//             }
//         }catch(e){
//             console.log(e);
//         }
//     }
//     createDonuts();
// });
// //update
// app.patch('/donuts/:id',(req,res)=> {
//     async function updateDonut(){
//         try{
//             let id=req.params.id;
//             let donuts=req.body;
//             let name=donuts.name;
//             let topping=donuts.topping;
//             let qty=donuts.qty;
//             let queryString ='UPDATE donuts set name=$1, topping=$2, qty=$3 WHERE id=$4 RETURNING *';
//             let value=[name,topping,qty,id];
//             const result = await pool.query(queryString,value);
//             if(result.rows.length === 0){
//                 res.status(404).send(`ID of "${id}" NOT FOUND`);
//             }else(
//                 res.status(200).send(result.rows[0])
//             );
//         }catch(e){
//             console.log(e);
//         }

//     }
//     updateDonut();
// });
// //delete
// app.delete('/donuts/:id', (req,res) =>{
//     async function deleteDonut(){
//         try{
//             let id =req.params.id;
//             let queryString ='DELETE FROM donuts WHERE id =$1 RETURNING *';
//             let value =[id];
//             const result =await pool.query(queryString,value);
//             if(result.rows.length == 0){
//                 res.status(404).send(`ID of "${id}" NOT FOUND`);
//             }else{
//                 res.status(200).send(result.rows[0]);
//             }
//         }catch(e){
//             console.log(e);
//         }
//     }
//     deleteDonut();
// });

app.listen(port, () => {
    console.log(`BlueFrog Server listening on port ${port} Happy Hopping`);
});