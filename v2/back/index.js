var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '..', '/front')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {
    console.log("Application listening on port 8080...");
});

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../front/index.html'));
// });

app.post('/result', function(req, res) {
    res.sendFile(path.join(__dirname, '../front/result.html'));
    console.log(req.body);
})