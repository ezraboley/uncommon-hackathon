const searchBar = document.getElementById("form");
function zipToAddr() {
    searchBar.placeholder = "Address";
    map.setOptions({gestureHandling: "auto"});
    map.setZoom(15);
}

function addrToLots() {
    searchBar.style.position = "absolute";
    searchBar.style.top = "50px";
    searchBar.style.left = "50px";
    searchBar.placeholder = "ZIP Code";
    // Highlight the parking places, query
    
}
