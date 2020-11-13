require('dotenv').config();

const express = require('express');
const massive = require('massive');
// const session = require('express-session');

// const controller = require('./controller');

const {CONNECTION_STRING, SERVER_PORT} = process.env;
const auth = require('./controller');

const app = express(); 

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log(`seriously, if this works, I may give myself permission to take a break`)
}).catch( err => console.log(err));

app.listen(SERVER_PORT, ()=>console.log(`Take a break. I'm listening on ${SERVER_PORT}`))
