var express = require("express");
var app = express();

app.get("/elnasir", function(request, response){
    response.send("welcome to Elnasir's homepage");
});

app.get("/users/:userid", function(request, response){
    var userId = parseInt(request.params.userid);
    response.send ("welocome to Elnasir's homepage");
});


app.use(function(request, response){
    response.status(404).send("Page not found");

});

app.listen(3000);