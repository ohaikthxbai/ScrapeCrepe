// adding file first
var mongoose = reuiqre("mongoose");
var Schema =   mongoose.Schema;

var Headlines = new Schema({
    title: {
        type: String, 
        required: true, 
        trim: true,
        unique: true
    },
    link: {
        type: String, 
        required: true, 
        trim: true
    },    
    iamge: {
        type: String, 
        required: false, 
        trim: true
    },    
    preview: {
        type: String, 
        required: true, 
        trim: true
    },    
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }
    ]
});

var Headline = mongoose.model("Headline", Headlines);

module.exports = Headlines