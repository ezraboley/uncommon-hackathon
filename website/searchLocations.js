function search() {
    var location = document.getElementById("locate").value;
    var geocoder; //To use later
    geocoder = new google.maps.Geocoder();
                    geocoder.geocode({
                            'address': location, "componentRestrictions":{"country":"US"}
                    }, function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                    map.setCenter(results[0].geometry.location);
                                map.setZoom(12)
                                    var marker = new google.maps.Marker({
                                            map: map,
                                            position: results[0].geometry.location
                                    });
                            } else {
                                    alert("Geocode was not successful for the following reason: " + status);
                            }
                    
                    });
}

