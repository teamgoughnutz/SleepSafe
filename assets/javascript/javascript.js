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
database.ref().on("value", function(snapshot){

    if (snapshot.child("city").exists()) {
        city = snapshot.val().city;
        console.log(city);

    }
    
});
var city = "";


  firebase.database().ref().on("value", function(snapshot) {
      city = snapshot.val().clicks;

  });

  
 
  
// navbar slides down
$(window).on("load", function(){
    $('.navbar').slideDown();
});
// grabs the input from user in the search bar
$(".searchButtons").on("click", function(){
    city = $(".searchTerms").val().trim();

    $(".searchTerms").val(city);
    console.log(city);

    // add to local storage

localStorage.clear();

localStorage.setItem("userSearch", city);
var array = ["code","yeti","sponage bob"];
database.ref().update({
    city: {
        name: city,
        articles: array

    }
});
});

