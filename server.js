//101
//var http = require("http");
//var express = require("express");
////var myServerCallback = function (req, res) {
////    console.log(req.url);
////    res.write("<html><body><h1>" + req.url + "</h1></body></html>");
////    res.end();
////};

//var app = express();
////setup the view engine

///*var ejsEngine = require("ejs-locals");
//app.engine("ejs", ejsEngine); //support master pages
//app.set("view engine", "ejs"); // ejs view engine*/

//app.set("view engine", "vash");



//app.get("/", function (req, res) {
//    //res.send("<html><body><h1>" + req.url + "</h1></body></html>"); // code for when you are not using any view engine
//    //res.render("ejs/index", { title: "Express + EJS" });
//    res.render("vash/index", { title: "Express + EJS" });
//});

//app.get("/api/users", function (req, res) {
//    res.set("Content-type", "application/json");
//    res.send({ name: "Shawn", isValid: true, group: "Admin" });
//});

//var server = http.createServer(app);

//server.listen(3000);
//101

var http = require("http");
var express = require("express");
var app = express();

var controllers = require("./controllers");

//setup the view engine
app.set("view engine", "vash");

// set a public static resources folder
app.use(express.static(__dirname + "/staticResources"));


// Mapping the routes
controllers.init(app);

var server = http.createServer(app);

server.listen(3000);

