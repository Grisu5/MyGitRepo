var express = require("express");

var ALLOWED_IPS = [
    "127.0.0.1",
    "123.456.7.89",
];

var api = express.Router();
api.get("/users", function(req, res){
    res.send("welcome to elnasir's page");
})

api.use(function(req, res, next){
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if (!userIsAllowed){
        res.status(401).send("not authorized!");
    }
    else {
        next();
    }
});

module.exports = api;
