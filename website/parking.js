class ParkingLot {
    constructor(corners, id) {
        this.corners = corners;
        this.spots = [];
        this.polygon = {};
        this.id = id;
    }
    
    getCorners() {
        return this.corners;    
    }
    
    draw() {
        this.polygon = new google.maps.Polygon({
            paths: this.corners,
            strokeColor: '#FF0000',
            strokeOpacity: 0.6,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.4
        });
        this.polygon.setMap(map);
        this.spots.forEach((spot) => {
            spot.draw();
        });
    }  
    
    addSpot(corners) {
        this.spots.push(new ParkingSpot(corners, this, this.createSpotId()));
    }
    
    createSpotId() {
        return this.id + "_" + this.numSpots
    }

    howManySpotsFree() {
        let numFree = 0;
        this.spots.forEach((spot) => {
            if (spot.isFree()) 
                numFree++;
        });
        return numFree;
    }

    withinRadius(center, radius) {
        this.corners.forEach((corner) => {
            let delLat = corner.lat - center.lat;
            let delLng = corner.lng - center.lng;
            let radSqr = Math.pow(radius, 2);
            let distSqr = Math.pow(delLat, 2) + Math.pow(delLng, 2);
            if (radSqr >= distSqr) {
                return true;
            }
        });
        return false;
    }
}


class ParkingSpot {
    constructor(corners, lot, id) {
        this.lot = lot;
        this.corners = corners;
        this.rectangle;
        this.isFree = true;
        this.STATUS_COLOR = {FREE: "green", FULL: "red"};
        this.id = id;
    }

    draw() {
        this.rectangle = new google.maps.Rectangle({
            paths: corners,
            strokeColor: "#000000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: this.isFree ? this.STATUS_COLOR.FREE : this.STATUS_COLOR.FULL,
            fillOpacity: 0.4
        });
        this.rectangle.setMap(map);
    }

    isFree() {
        return this.isFree;
    }

    free() {
        this.rectangle.setOptions({
            fillColor: this.STATUS_COLOR.FREE
        });
        this.isFree = true;
    }

    occupy() {
        this.rectangle.setOptions({
            fillColor: this.STATUS_COLOR.FULL
        });
        this.isFree = false;
    }
}
