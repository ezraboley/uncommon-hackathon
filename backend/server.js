const express = require('express');
const db = require('./db.js');
const bodyParser = require('body-parser');
const app = express();

const plDB = new db("test");
const port = 3000;

app.use(bodyParser.json());

app.get('/save', (req, res) => {
    //console.log(req);
    plDB.addLot({lot: 10});
});

app.get('/close', (req, res) => {
    console.log(plDB);
    plDB.close();
});

app.get('/load', (req, res) => {
    //console.log(req);
    lots = plDB.loadLots();
    console.log(lots);
    res.json(res);
});

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
});


