//import {ParkingLot, ParkingSpot} from './parking.js';

var db = [{corners:
    [
        {lat: 41.799784212070946, lng: -87.59167459636461},
        {lat: 41.79963858219933, lng: -87.59166654973757}, 
        {lat: 41.79962868501158, lng: -87.59111937909853}, 
        {lat: 41.799796936995484, lng: -87.59112072020304},
    ]}, {corners:[ 
        {lat: 41.799876114246814, lng: -87.59166923194658}, 
        {lat: 41.799878942003964, lng: -87.59123069077265}, 
        {lat: 41.79991711671353, lng: -87.5912414196087}, 
        {lat: 41.799934083243784, lng: -87.5916531386925},
]}];

function loadLots() {
    let lots = [];
    let num = 0;
    db.forEach((entry) => {
        lots.push(new ParkingLot(entry.corners, num++));
        console.log(lots[lots.length - 1]);
        lots[lots.length - 1].randomize();
        lots[lots.length - 1].draw();
    });
}
