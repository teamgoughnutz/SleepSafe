// sleepsafe/citysearch

function buildQueryURL() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    var authKey = { "api-key": "MxuEsc7MF40JovGDK4Q2Zx19DQ3S7iEe" };

    // user input added to search
    authKey.q = $("#search-term")
        .val()
        .trim();

    // write url to console log to test 
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(authKey));
    return queryURL + $.param(authKey);
}

function updatePage(NYTData) {

    var numArticles = 5

    // print to console to test
    console.log(NYTData);

    for (var i = 0; i < numArticles; i++) {
        var article = NYTData.response.docs[i];

        var articleCount = i + 1;

        var $articleList = $("<ul>");
        $articleList.addClass("list-group");

        $("#article-section").append($articleList);

        // headline
        var headline = article.headline;
        var $articleListItem = $("<li class='list-group-item articleHeadline'>");

        if (headline && headline.main) {
            console.log(headline.main);
            $articleListItem.append(
                "<span class='label label-primary'>" +
                articleCount +
                "</span>" +
                "<strong> " +
                headline.main +
                "</strong>"
            );
        }

        // article section
        var section = article.section_name;
        console.log(article.section_name);
        if (section) {
            $articleListItem.append("<h5>Section: " + section + "</h5>");
        }

        // date of publication
        var pubDate = article.pub_date;
        console.log(article.pub_date);
        if (pubDate) {
            $articleListItem.append("<h5>" + article.pub_date + "</h5>");
        }

        // append and log url
        $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
        console.log(article.web_url);

        // append article
        $articleList.append($articleListItem);
    }
}

// clear articles
function clear() {
    $("#article-section").empty();
}

$("#run-search").on("click", function (event) {
    event.preventDefault();

    clear();

    var queryURL = buildQueryURL();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(updatePage);
});
