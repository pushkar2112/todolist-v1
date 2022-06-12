//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

var items = ["Buy Food","Cook Food","Eat Food"];

app.set('view engine', 'ejs'); //add ejs support for templating

app.get("/", function(req, res){
  var today = new Date();

  var options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  }

  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {kindOfDay : day, newListItems : items}) //Add a variable to change as per the needs

});

app.post("/", function(req, res){
    var item = req.body.newItem;
    
    items.push(item);

    res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
