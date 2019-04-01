$(document).ready(function() {
 
    console.log( "ready!" );
var queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=UK&key=AIzaSyCvFr5c_8XDQMiVbPSyK1VGQ1hdwKXcTvU';

    $.ajax({
      url: queryURL, 
      type: 'GET',
      success: function(response) {
        console.log(response);
      }
  });

 initMap();
});


 
function initMap(){
  // Map options
  var options = {
      zoom: 8, // starting zoom of map
      center:{lat:33.685909, lng:-117.824722} 
  }
      // New Map
  var map = new
  google.maps.Map(document.getElementById('map'),options);

  // add marker
  var marker = new google.maps.Marker({
      position:{lat:33.685909, lng:-117.824722},
      map:map,
  });
}



// search button api pull from and google


// on click/submit load index from the homepage
// AIzaSyCvFr5c_8XDQMiVbPSyK1VGQ1hdwKXcTvU   google api key


// function to get city from search bar and input into google maps and news api

//function to display news into divs

