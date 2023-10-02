const express = require('express');
const errormiddle = require('./middleware/errors');
const  cors = require('cors');
const app = express();
const path = require('path');


app.use(cors());
//used for json responses
app.use(express.json());
//import routes endpoint
const student =require('./routes/Router')
//create student route endpoint
app.use('/student', student);

//merge frontend and backend routes
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*' ,(req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
})



//handle error response
app.use(errormiddle);

module.exports = app;