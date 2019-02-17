var map;
var google;

function initMap() {
    google = google;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.7997015, lng: -87.5913876}, zoom: 20, mapTypeId: google.maps.MapTypeId.SATELLITE
        });
}
let coords = [
                        {lat: 41.799632, lng:-87.591115},
                        {lat: 41.799793, lng: -87.591124},
                        {lat: 41.799790, lng: -87.591670},
                        {lat: 41.799626, lng: -87.591666}
                    ];
window.google.maps.Polygon({
    map: window.map, 
    fillColor: "blue",
    paths: coords
});
          
