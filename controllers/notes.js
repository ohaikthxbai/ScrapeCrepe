var Note = require('../models/Note');

module.exports = {
    get: function(data, db) {
        Note.find({
            _headlineId: data._id
        }, cb);
    },
    save: function (data, db) {
        var newNote = {
            _headlineId: data._id,
            text: data.text
        };

        Note.create(newNote, function (err, data) {
            if(err) {
                console.log(err);
            }
            else {
                console.log(data);
                cb(data);
            }
        });
    },
    delete: function (data, db) {
        Note.remove({
            _id: data._id
        }, cb);
    }
};