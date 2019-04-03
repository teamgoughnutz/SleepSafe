// navbar slides down
$(window).on("load", function () {
    $('.navbar').slideDown();
});
var city = "";
// grabs the input from user in the search bar
$("#search-form").on("submit", function (event) {
    event.preventDefault();
    city = $(".searchTerms").val().trim();

    
    
    // logs search value to the console
    console.log(city);

    // add to local storage
    localStorage.clear();

    localStorage.setItem("userSearch", city);

    // moves user to index page
    window.location.href = 'index.html';
});