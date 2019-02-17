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
    console.log("]},");
}

var lotIds = 0;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), 
        {
        center: {lat: 41.7997015, lng: -87.5913876}, zoom: 20, mapTypeId: google.maps.MapTypeId.SATELLITE
        });

    //disableMap();

    drawer = new ParkDrawManager();
    drawer.setVisible();
    drawer.drawingManager.setDrawingMode("polygon");
    google.maps.event.addListener(drawer.drawingManager, 'polygoncomplete', function(polygon) {
            // This should put us into edit mode
            let corners = [];
            let paths = polygon.getPath();
            drawer.toggleEditMode();
            paths.forEach((point)=> {
                corners.push(point);
            });
            let lot = new ParkingLot(corners, lotIds++); 
            parkingLots.push(lot);
      });
     
    google.maps.event.addListener(drawer.drawingManager, 'rectanglecomplete', (rect) => {
         let path = rect.getBounds();
         let corners = [];
        console.log(path);
        
        corners.push(path.getNorthEast());
        corners.push(path.getSouthWest());
        let spot = parkingLots[parkingLots.length - 1].addSpot(corners);
        parkingLots[parkingLots.length - 1].
            spots[parkingLots[parkingLots.length - 1].spots.length - 1].
            rectangle = rect;
        parkingLots[parkingLots.length - 1].
            spots[parkingLots[parkingLots.length - 1].spots.length - 1].
            free();
        parkingLots[parkingLots.length - 1].
            spots[parkingLots[parkingLots.length - 1].spots.length - 1].
            rectangle.addListener("click", (e) => {
                spot.remove();
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
              var marker = new google.maps.Marker({
                                            map: map,
                                            position: pos
                                    });
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
    loadLots();
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





