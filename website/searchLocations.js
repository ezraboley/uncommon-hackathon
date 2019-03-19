// Get the input field
var marker;
var input1 = document.getElementById("locate");
var input2 = document.getElementById("find");
// Execute a function when the user releases a key on the keyboard
input1.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn").click();
  }
}); 

input2.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn2").click();
  }
}); 

function search() {
    var location = document.getElementById("locate").value;
    var geocoder; //To use later
    geocoder = new google.maps.Geocoder();
                    geocoder.geocode({
                            'address': location, "componentRestrictions":{"country":"US"}
                    }, function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                    map.setCenter(results[0].geometry.location);
                                map.setZoom(20)
                                    var marker = new google.maps.Marker({
                                            map: map,
                                            position: results[0].geometry.location
                                    });
                            } else {
                                    alert("Geocode was not successful for the following reason: " + status);
                            }
                    
                    });
    document.getElementById("googlemaps").style.opacity = "1";
    document.getElementById("form").style.display = "none";
    document.getElementById("top-search").style.display = "";
    
}

function fsearch() {
    var location = document.getElementById("find").value;
    var geocoder; //To use later

        geocoder = new google.maps.Geocoder();
                        geocoder.geocode({
                                'address': location, "componentRestrictions":{"country":"US"}
                        }, function (results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                        map.setCenter(results[0].geometry.location);
                                    map.setZoom(20)
                                    if (marker !== undefined)
                                        marker.setMap(null);
                                    marker = new google.maps.Marker({
                                                map: map,
                                                position: results[0].geometry.location
                                        });
                                } else {
                                        alert("Geocode was not successful for the following reason: " + status);
                                }
                        });
    
}

function currLoc() {
    
    infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
              if (marker !== undefined)
                                        marker.setMap(null);
              marker = new google.maps.Marker({
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
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }


