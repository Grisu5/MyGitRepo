var express = require(express);
var app = express();

app.get("/", function(req, res){
  res.send("you just sent a get request, friend")
});

app.listen(3000, function(){
    console.log("CRUD app is listening on port 3000")
});