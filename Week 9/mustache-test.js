var Mustache = require ("mustache");
var result = Mustache.render("hi, {{first}} {{last}}!", {
    first: "Nicolas",
    last: "Cage"
});
console.log(result);
