const MongoClient = require('mongodb').MongoClient;
const test = require('assert');

const url = 'mongodb://localhost:27017';


class parkalotDB {
    constructor(name) {
        this._dbname;
        this._client;
        this.db;
        MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
            this._client = client;
            this.db = client.db(name);
        });
    }

    addLot(lot) {
        this.db.collection('parkingLots').insert(lot, (err, result) => {
            console.log(result);
            if (err) console.log("[Error] Failed to add lot");
        });
    }

    loadLots() {
        let items;
        let col = this.db.collection('parkingLots');
        col.find({}).toArray((err, elem) => console.log(elem));
        return {a:1};
    }

    close() {
       this._client.close();
    }

}


function openDB() {
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
        db = client.db(dbName) 
    const col = client.db(dbName).collection('createIndexExample1');
    col.insert(data, (err, result) => {console.log(result)});
    col.find({}).toArray((err, items) => {console.log(items)});
    client.close();
});
}

function closeDB() {
    client.close();    
}

module.exports = parkalotDB;
