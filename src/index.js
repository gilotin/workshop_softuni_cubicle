const express = require('express');
const config = require("./config");



const app = express();

app.get('/', (req, res) =>{

    res.send('Home Page');
});

app.listen(config.PORT, ()=> console.log(`Server is Running on ${config.PORT}`));