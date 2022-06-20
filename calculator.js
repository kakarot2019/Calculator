//express is used for reading files from html page such as in forms
// body parser is used to get data from those forms
// these npm packages needs tp be installed first using "node instal ___" ,the we have 'require' it to use in file
// nodemon is also installed for suto refresh after saving
const express = require('express');
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded());

//when localhost:3000 will get called then following action will happen
app.get('/', function (req, res) {
    //this line sends file (index.html) on being searched for localhost:3000 
    //dirname gives the exact location of thisa file on the server, and helps in locating nearby file
  res.sendFile(__dirname + "/index.html")
})

//when form is submitted, a post method is called and the following function will be called as a post function at localhost:3000
app.post('/', function(req,res){
    //bodypartser helps in extracting data from forn using name parameter of input, Number() is used to convert data into number since the data extraced is 
    // in the form of json 
    var x = Number(req.body.num1);
    var y = Number(req.body.num2);

    var result=x+y;
    res.send("The result is " + result);
})

//thius function gets called when a post method is called at localhos:3000/bmi
app.post('/bmi', function(req,res){
    var x = parseFloat(req.body.weight);
    var y = parseFloat(req.body.height);

    var result=x/(y*y);
    res.send("The bmi is " + result);
})

//this function gets called when server ios started at port 3000
app.listen(3000, function(){
    //this messege is sent at git bash
    console.log("Server running..!")
})