// Get the input field
var input1 = document.getElementById("locate");

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

// Get the input field
var input2 = document.getElementById("find");

// Execute a function when the user releases a key on the keyboard
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
                                    var marker = new google.maps.Marker({
                                            map: map,
                                            position: results[0].geometry.location
                                    });
                            } else {
                                    alert("Geocode was not successful for the following reason: " + status);
                            }
                    
                    });
    
}

