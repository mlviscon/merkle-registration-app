// Main entry point for application

const PORT = 3001;

const router = require('./src/routes/index.js');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.use(router);

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
});