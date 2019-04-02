<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SleepSafe</title>
    <link rel="stylesheet" href="css/materialize.css">
    <link rel="stylesheet" href="assets/style.css">

    <style>
        /* Always set the map height explicitly to define the size of the div
         * element that contains the map. */
        #map {
            height: 425px;
            width: 70%;
        }
    </style>

</head>

<body>

    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">SleepSafe</a>

                <ul class="right hide-on-med-and-down">
                    <li><a href="#"></a>Search Results</li>
                </ul>
            </div>
        </nav>
    </div>

    <div class="row">

        <div class="col s3 left" id="resultsDiv">
        </div>

        <div class="col s9 left" id="map">

        </div>

    </div>
  <script>
        var map;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 33.6846, lng: -117.8265 },
                zoom: 12
            });
        }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGCcbAi-00_5G6Sjw2Amnt0sl-5ndTKsU&callback=initMap"
        async defer></script>
    <script src="https://code.jquery.com/jquery-3.3.1.js"
        integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script src="js/materialize.min.js"></script>
    <script src="js/materialize.js"></script>
    <script src="assets/javascript.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGCcbAi-00_5G6Sjw2Amnt0sl-5ndTKsU&callback=initMap"
        async defer></script>

</body>

</html>