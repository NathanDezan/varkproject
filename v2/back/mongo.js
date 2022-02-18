const mongo = require('mongodb');

function bdConnect(data){
    const uri = "mongodb+srv://dezan:amLxIGFha3zPHR7b@cluster0.w4els.mongodb.net/varkproject?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
        const collection = client.db("varkproject").collection("results");
    });

    bdSave(collection, data);
    client.close();
}

function bdSave(collection, data){
    collection.insertOne(data);
}