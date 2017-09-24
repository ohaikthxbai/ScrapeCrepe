var scrape = ("../scripts/scrape");

var headlinesCtrlr = require('../controllers/headlines');

module.exports = function(router) {
    router.get("/", function (req, res) {
        res.render("home");
    });

    router.get("/saved", function(req, res) {
        res.render("saved");
    });

    router.get('/api/fetch', function (req, res) {
        headlinesCtrlr.fetch(function (error, data) {
            if (!data || data.insertCount === 0) {
                res.json ({
                    message: 'Nothing new here. Move along.'
                });
            }
            else {
                res.json({
                    message: data.insertCount + 'articles added!'
                });
            }
        });
    });

    router.get('/api/headlines', function (req, res) {
        var query = {};
        if (req.query.saved) {
            query = req.query;
        }
        headlinesCtrlr.get(query, function (data) {
            res.json(data);
        });
    });

    router.delete('/api/headlines/:id', function (req, res) {
        var query = {};
        query._id = req.params.id;
        headlinesCtrlr.delete(query, function (err, data) {
            res.json(data);
        });
    });

    router.patch('api/headlines', function (req, res) {
        headlinesCtrlr.update(req.body, function (err, data) {
            res.json(data);
        });
    });
}