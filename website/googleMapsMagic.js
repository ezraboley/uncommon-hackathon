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
        lot.spots.forEach((spot) => {
            spot.corners.forEach((corner) => {
                console.log("{lat:" + corner.lat() + ",lng:" + corner.lng() + "},");
            });
        });
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

function drawBox(coords) {
        let poly = new google.maps.Polygon({
            fillColor: "blue",
            paths: test
        });
        poly.setMap(map);
        poly.setEditable(true);
        console.log("drawing");

}





