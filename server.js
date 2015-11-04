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

//setup the view engine
app.set("view engine", "vash");

//Opt into services
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var cookieParser = require("cookie-parser");
app.use(cookieParser());

var expressSession = require("express-session");
app.use(expressSession({ secret: "PluralSightTheBoard", cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }));

var flash = require("connect-flash");
app.use(flash());

// set a public static resources folder
app.use(express.static(__dirname + "/staticResources"));


var controllers = require("./controllers");
var apiControllers = require("./controllers/api");

// Mapping the routes
controllers.init(app);
apiControllers.init(app);

var server = http.createServer(app);

server.listen(3000);

