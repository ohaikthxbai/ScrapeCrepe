// require npm packages
var express = require("express");
var exphb = require("express-handlebars");
var mongoodse = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");

// port setup
var PORT = process.env.PORT || 3000; 

// initialize express
var app = express();

var router = express.Router();


//requiring routes
require("./config/routes")(router);


// saving space for more content here



app.listen(PORT, function() {
    // es6 woot!
    console.log(`Listening on port: ${PORT}`);
});