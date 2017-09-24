// requirements
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Notes = new Schema({
    note: {
        type: String
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

var Note =  mongoose.model("Note", Notes);