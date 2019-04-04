//firebase database
var config = {
    apiKey: "AIzaSyAyc2X_c36dZ7S1vqFwCbDFIggL6qr9yuM",
    authDomain: "sleepsafe-6c621.firebaseapp.com",
    databaseURL: "https://sleepsafe-6c621.firebaseio.com",
    projectId: "sleepsafe-6c621",
    storageBucket: "sleepsafe-6c621.appspot.com",
    messagingSenderId: "616346102752"
};
firebase.initializeApp(config);
var database = firebase.database();


firebase.database().ref().limitToLast(5).on("value", function (snapshot) {
    function buildCity(cityKey) {

        var numArticles = 5

        var city = previousSearches[cityKey];
        var searchContainer = $('<div class="search-container">');
        var prevSearchButton = $('<button class="previous-search-button">');
        prevSearchButton.html(city.name);
        console.log('city', city)
        searchContainer.append(prevSearchButton);
        $('.all-searches-container').append(searchContainer);

        var searchDisplay = $('<div class="search-display">');
        searchDisplay.hide();
        var searchResultsShown = false;
        prevSearchButton.click(function () {
            if (searchResultsShown) {
                searchResultsShown = false;
                searchDisplay.hide();
            } else {
                searchResultsShown = true;
                searchDisplay.show();
            }
        })
        searchContainer.append(searchDisplay);

        for (var i = 0; i < numArticles; i++) {
            var article = city.articles[i];

            var articleCount = i + 1;

            var $articleList = $("<ul>");
            $articleList.addClass("list-group");

            searchDisplay.append($articleList);

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
    };
    var previousSearches = snapshot.val();
    $('.all-searches-container').empty();
    console.log(previousSearches);
    for (var cityKey in previousSearches) {
        buildCity(cityKey)
    }
});
// navbar slides down
$(window).on("load", function () {
    $('.navbar').slideDown(800);
});

var city = "";
// grabs the input from user in the search bar
$(".searchButtons").on("click", function () {
    city = $(".searchTerms").val().trim();



    // logs search value to the console
    console.log(city);

    // add to local storage
    localStorage.clear();

    localStorage.setItem("userSearch", city);

    // moves user to index page
    window.location.href = 'index.html';
});