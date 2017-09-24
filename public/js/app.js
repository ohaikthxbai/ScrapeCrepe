$(document).ready(function() {
    console.log('working!');

    var articleDiv = $('.article-container');
    $(document).on('click', '.btn.save', articleSave);
    $(document).on('click', '.scrape-new', articleScrape);

    renderPage();

    function renderPage() {
        articleDiv.empty();
        $.get('api/headlines?saved=false').then(function(data) {
            if (data && data.length) {
                displayArticles(data);
            }
            else {
                displayNone();
            }
        });
    }

    function displayArticles(content) {
        var articles = [];
        for (var i = 0; i < articles.length; i++) {
            articles.push(createArticle(articles[i]));
        }
        articleDiv.append(articles);
    }

    function createArticle(content) {
        var displayArea = $(["<div class='section'>", "<p>", content.summary, "</p>", "</div>"].join(""));
        displayArea.data("_id", content._id);
        return displayArea;
    }

    function displayNone() {
        var nothing = $(["<div class='nothing-new", "<h3>Nothing to see here!</h3>", "</div>"].join(""));
        articleDiv.append(nothing);
    }

    function articleSave() {
        var saveArticle = $(this).parents(".section").data();
        saveArticle.saved = true;
    }

});