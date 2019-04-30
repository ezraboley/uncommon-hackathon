var map;
var google;

var parkingLots = [];

function dumpMaps() {
    console.log(parkingLots);
    parkingLots.forEach((lot) => {
        console.log("{corners:[");
        lot.corners.forEach((corner) => {
            console.log("{lat: " + corner.lat() + "lng: " + corner.lng() + "},");
        });
        console.log("]},");
    });
}


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.7997015, lng: -87.5913876}, zoom: 20, mapTypeId: google.maps.MapTypeId.SATELLITE
        });


    var drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            drawingControlOptions: {
                      position: google.maps.ControlPosition.TOP_CENTER,
                      drawingModes: ['polygon', 'rectangle']
            },
            polygonOptions: {
                  fillColor: '#ff0000',
                  fillOpacity: .3,
                  strokeWeight: 5,
                  clickable: true,
                  editable: true,
                  zIndex: 1
                },
            rectangleOptions: {
                fillOpacity: .7,
                clickable: true,
                zIndex:2
            }
    });
    drawingManager.setMap(map);
    google.maps.event.addListener(drawingManager, 'polygoncomplete', function(polygon) {
            let paths = polygon.getPath();
            let lot = {path: polygon.getPath(), corners: []};
            parkingLots.push(lot);
            paths.forEach((point)=> {
                lot.corners.push(point);
            });
      });


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




