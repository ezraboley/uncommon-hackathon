var map1;
var drawer1;

function initMap() {
   map = new google.maps.Map(document.getElementById('map'),
        {
        center: {lat: 41.7997015, lng: -87.5913876}, zoom: 20, mapTypeId: google.maps.MapTypeId.SATELLITE
        });


    drawer1 = new ParkDrawManager();
    

    loadLots();
}

