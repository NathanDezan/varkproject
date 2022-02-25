var express = require('express');
require('dotenv').config();
var app = express();
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(express.static(path.join(__dirname, '.', '/front')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 8080, () => {
    console.log("Aplicação rodando via porta", process.env.PORT + "ou na porta 8080....");
});

app.post('/result', function(req, res) {
    //res.sendFile(path.join(__dirname, './front/result.html'));
    //console.log(req.body);
    bdConnect(req.body);
});

//Conexão com o MongoDB
async function bdConnect(data){
    const client = new MongoClient(process.env.URI_MONGO, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});
    await client.connect(err => {
        const collection = client.db("varkproject").collection("results");
        bdSave(collection, data);
    });
    client.close();
}

async function bdSave(collection, data){
    await collection.insertOne(data);
}