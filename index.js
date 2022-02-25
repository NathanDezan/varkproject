var express = require('express');
var app = express();
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use('/', express.static(path.join(__dirname, '/front/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 8080, () => {
    console.log("Application listening on port 8080...");
});

app.post('/result', process.env.HOST, function(req, res) {
    res.sendFile(path.join(__dirname, '../front/result.html'));
    console.log(req.body);
    bdConnect(req.body);
});

//Funções refente ao bd
async function bdConnect(data){
    const uri = "mongodb+srv://dezan:amLxIGFha3zPHR7b@cluster0.w4els.mongodb.net/varkproject?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect(err => {
        const collection = client.db("varkproject").collection("results");
        bdSave(collection, data);
    });
    client.close();
}

async function bdSave(collection, data){
    await collection.insertOne(data);
}