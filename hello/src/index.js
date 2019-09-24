'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api/api-routes');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/messagehub', { useNewUrlParser: true });

let db = mongoose.connection
if (!db) {
    console.error('Error connecting to db');
} else {
    console.log('Connected to db');
}

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World with express and nodemon'));
app.use('/message', apiRoutes);

app.listen(port, '0.0.0.0', () => console.log(`Running inspiration on port ${ port }`));