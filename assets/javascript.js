$(document).ready(function() {
  
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.6846, lng:-117.8265},
    zoom: 8
  });

}


  var initMap = function(){
    // Map options
    var options = {
        zoom: 8, // starting zoom of map
        center:{lat:42.3601, lng:-71.0589} // boston need to change to input of search
    };
        // New Map
    var map = new google.maps.Map(document.getElementById('map'),options);
  
    // add marker
    var marker = new google.maps.Marker({
        position:{lat:42.4668, lng:-70.9495},
        map:map,
    });
    console.log(initMap);
    
  };