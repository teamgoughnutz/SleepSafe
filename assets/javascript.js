$(document).ready(function() {
  
      console.log( "ready!" );
  var queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=UK&key=AIzaSyBGCcbAi-00_5G6Sjw2Amnt0sl-5ndTKsU';
  
      $.ajax({
        url: queryURL, 
        type: 'GET',
        success: function(response) {
          console.log(response);
        }
    });
  
   
  });
  
  
   
  function initMap(){
    // Map options
    var options = {
        zoom: 8, // starting zoom of map
        center:{lat:42.3601, lng:-71.0589} // boston need to change to input of search
    };
        // New Map
    var map = new
    google.maps.Map(document.getElementById('#map'),options);
  
    // add marker
    var marker = new google.maps.Marker({
        position:{lat:42.4668, lng:-70.9495},
        map:map,
    });
    console.log(initMap);
    
  }