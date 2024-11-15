const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.Port || 3000;

app.use('/', require ('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log(`Database is listennin and node Running on port ${port}`)})
    }
});


