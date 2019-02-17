var map;
var google;

var parkingLots = [];
var drawer;
function dumpMaps() {
    console.log(parkingLots);
    parkingLots.forEach((lot) => {
        console.log("{corners:[");
        lot.corners.forEach((corner) => {
            console.log("{lat:" + corner.lat() + ",lng:" + corner.lng() + "},");
        });
        console.log("]},");
    });
}


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), 
        {
        center: {lat: 41.7997015, lng: -87.5913876}, zoom: 20, mapTypeId: google.maps.MapTypeId.SATELLITE
        });

    //disableMap();

    drawer = new ParkDrawManager();
    drawer.setVisible();
    google.maps.event.addListener(drawer.drawingManager, 'polygoncomplete', function(polygon) {
            // This should put us into edit mode
            
            let paths = polygon.getPath();
            let lot = {path: polygon.getPath(), corners: []};
            drawer.toggleEditMode();
            parkingLots.push(lot);
            
            paths.forEach((point)=> {
                lot.corners.push(point);
            });
      });

    infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
}

function enterEditMode(drawingManager) {
    
}

function exitEditMode() {

}

function disableMap() {
    map.setOptions(
        {gestureHandling: "none", 
                    opacity: .3
    });
    console.log('called');
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

function drawBox(coords) {
        let poly = new google.maps.Polygon({
            fillColor: "blue",
            paths: test
        });
        poly.setMap(map);
        poly.setEditable(true);
        console.log("drawing");

}




