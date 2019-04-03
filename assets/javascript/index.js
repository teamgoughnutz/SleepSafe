// Here is our javascript file
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
var search = localStorage.getItem('userSearch');
console.log(search);
database.ref().on("value", function (snapshot) {

    if (snapshot.child("city").exists()) {
        city = snapshot.val().city;
        console.log(city);

    }

});
var city = "";
//geocoder


firebase.database().ref().on("value", function (snapshot) {
    city = snapshot.val().clicks;

});


 // links to homepage 
 $(".brand-logo").on("click", function(){
    window.location.href = 'homepage.html';
});

// navbar slides down
$(window).on("load", function () {
    $('.navbar').slideDown();
});
// grabs the input from user in the search bar
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
//      database.ref().update({
//          city: {
//              name: city,
//             articles: array

//          }
//      });
//  });

