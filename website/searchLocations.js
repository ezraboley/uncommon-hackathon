// Get the input field
var input = document.getElementById("locate");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn").click();
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
    document.getElementById("googlemaps").style.opacity = "1";;
    
}

