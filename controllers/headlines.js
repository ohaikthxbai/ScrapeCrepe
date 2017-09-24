var scrape = require('../scripts/scrape');
var Headline = require('../models/Headlines');

module.exports = {
    fetch: function (cb) {
        var articles = data;
        for (var i = 0; i < articles.length; i++) {
            articles[i].saved = false;
        }
        Headline.collection.insertMany(articles, {ordered: false}, function (error, data){
            db(error, data);
        });
    }
}