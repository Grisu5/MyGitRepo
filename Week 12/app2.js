var express = require("express"); //reuires the Express module
var http = require("http");
var app = express();

app.use(function(request, response, next) {           //this is the middleware
    console.log ("In comes a "+ request.method + "to" + request.url);

    next();

});

app.use(function(request, response, next) {           
   var minute = (new Date()).getMinutes();
   if ((minute %2)===0){
    next();
   }
   else {
    response.statusCode = 403;
    response.end("not authorized!");
   }
});

app.use(function(request, response)
{
    response.end('secret info: the password is"swordfish!');
});

http.createServer(app).listen(3000); 