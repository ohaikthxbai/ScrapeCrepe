var request = require('request');
var cheerio = require('cheerio');

var scrape = function (cb) {
    request("http://www.nytimes.com", function (err, res, body) {
        var $ = cheerio.load(body);
        var articles = [];

        $('.summary').each(function (i, element) {
            var heading = $(this).children('.article-heding').text().trim;
            var summary = $(this).children('.summary').text.trim;

            if (head && sum) {
                var prettyHead = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var prettySum = summary.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var temp = {
                    headline: prettyHead,
                    summary: prettySum
                };

                articles.push(temp);
            }
        });
        cb(articles);
    });
};

module.exports = scrape;