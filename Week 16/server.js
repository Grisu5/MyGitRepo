const express = require("express");

const cors = require("cors");

const app = express();
var db

app.use(express.json());
app.use(cors());
app.set('port', 3000)
app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
})

const MongoClient = require('mongodb').MongoClient;


MongoClient.connect("mongodb+srv://elhassanelnasir:5Lkk28daByh0h8nf@cluster0.u9vjymt.mongodb.net", (err, client) =>{
   
    db = client.db('Webstore')

})

app.get('/', (req, res, next)=> {
    res.send('Select a collection, e.g., /collection/messages')
})

app.param('collectionName', (req, res, next, collectionName)=> {
    req.collection = db.collection(collectionName)

    return next()
})

app.get('/collection/:collectionName', (req, res, next) => {
    req.collection.find({}).toArray((e, results)=> {
        if (e) return next(e)
        res.send(results)
    })
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> {console.log('express is running at localhost:3000')
})