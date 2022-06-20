const express = require('express');
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded());

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.post('/', function(req,res){
    var x = Number(req.body.num1);
    var y = Number(req.body.num2);

    var result=x+y;
    res.send("The result is " + result);
})

app.post('/bmi', function(req,res){
    var x = parseFloat(req.body.weight);
    var y = parseFloat(req.body.height);

    var result=x/(y*y);
    res.send("The bmi is " + result);
})

app.listen(3000, function(){
    console.log("Server running..!")
})