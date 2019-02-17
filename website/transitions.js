const searchBar = document.getElementById("form");
const mapdiv    = document.getElementById("map");

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
    mapdiv.style.opacity = "1";    
    // Highlight the parking places, query
    
}
