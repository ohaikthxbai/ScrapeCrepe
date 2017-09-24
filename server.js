// require npm packages
var express = require("express");
var exphb = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");


// port setup
var PORT = process.env.PORT || 3000; 

// initialize express
var app = express();

// views directory
app.use(express.static(__dirname + "/public"));

// connecting the handlebars
app.engine("handlebars", exphb({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// setting up the express router
var router = express.Router();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

// requiring routes
require("./config/routes")(router);

// connect to mongoooose!
var db = process.env.MONGO_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("mongoose connected");
    }
});

app.listen(PORT, function() {
    // es6 woot!
    console.log(`Listening on port: ${PORT}`);
});