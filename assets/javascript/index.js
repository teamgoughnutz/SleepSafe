// Here is our javascript file
var search = localStorage.getItem('userSearch');
console.log(search);



firebase.database().ref().on("value", function (snapshot) {
    city = snapshot.val().clicks;

});


// navbar slides down
$(window).on("load", function () {
    $('.navbar').slideDown();
    
    
  
});

  // links to homepage 
  $(".brand-logo").on("click", function () {
    window.location.href = "searchResults.html";
}); 

// //grabs the input from user in the search bar
//  $(".searchButtons").on("click", function () {
//      city = $(".searchTerms").val().trim();






//      // logs search value to the console
//      $(".searchTerms").val(city);
//      console.log(city);

//      // add to local storage
//      localStorage.clear();

//      localStorage.setItem("userSearch", city);
//      // updates to firebase
//      var array = ["code", "yeti", "sponage bob"];
//      database.ref().push({
//          city: {
//              name: city,
//             articles: array

//          }
//      });
//  });

