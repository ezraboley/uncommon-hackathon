//import {ParkingLot, ParkingSpot} from './parking.js';

var db = [{corners:[
        {lat:41.799809330539304,lng:-87.59170678287279},
{lat:41.799810744419396,lng:-87.5911327901436},
{lat:41.799621284211696,lng:-87.5911327901436},
{lat:41.799619870327454,lng:-87.59170678287279}], 
           spots:[
{lat:41.79980508889891,lng:-87.59164106875193},
{lat:41.7997570169547,lng:-87.59167057305109},
{lat:41.79980650277907,lng:-87.59160754113924},
{lat:41.79975984471712,lng:-87.59163436322939},
 {lat:41.79980367501872,lng:-87.59156596689951},
 {lat:41.79976267247943,lng:-87.59159547119867},
 {lat:41.79980791665921,lng:-87.59152439265978},
 {lat:41.79976691412265,lng:-87.59155657916796},
 {lat:41.79980791665921,lng:-87.59148013621103},
 {lat:41.79975560307347,lng:-87.59151232271921},
 {lat:41.79980650277907,lng:-87.59143185644876},
{lat:41.79975843083594,lng:-87.59146538406145},
 {lat:41.79980084725823,lng:-87.5913835766865},
 {lat:41.79975418919216,lng:-87.59141442209017},
 {lat:41.79980650277907,lng:-87.59132859140169},
 {lat:41.799761258598295,lng:-87.59136211901438},
 {lat:41.79980650277907,lng:-87.5912749472214},
 {lat:41.79975843083594,lng:-87.59130445152056},
 {lat:41.79980791665921,lng:-87.5912226441456},
 {lat:41.7997570169547,lng:-87.59124946623575},
 {lat:41.79980508889891,lng:-87.59116631775629},
 {lat:41.79975560307347,lng:-87.59119448095095},
 {lat:41.79967218402402,lng:-87.5912414196087},
 {lat:41.79963259528459,lng:-87.59126555948984},
 {lat:41.79968066732213,lng:-87.59128299384844},
 {lat:41.79962976751655,lng:-87.59130311041605},
 {lat:41.79968773673639,lng:-87.5915994945122},
 {lat:41.79962976751655,lng:-87.59163033991587},
 {lat:41.79968773673639,lng:-87.59155255585443},
 {lat:41.79963400916857,lng:-87.59158474236261},
 {lat:41.799677839556225,lng:-87.59150159388315},
 {lat:41.79962269809593,lng:-87.59153512149584},
 {lat:41.799677839556225,lng:-87.59144124418032},
 {lat:41.79962552586428,lng:-87.5914734306885},
 {lat:41.799679253439194,lng:-87.59138625889551},
 {lat:41.79962835363249,lng:-87.59141844540369},
 {lat:41.799677839556225,lng:-87.59133395581972},
 {lat:41.79962976751655,lng:-87.59136211901438},
 {lat:41.799677839556225,lng:-87.59128701716196},
 {lat:41.79962552586428,lng:-87.59131652146112},
 {lat:41.7996863228536,lng:-87.59163972764742},
 {lat:41.79963259528459,lng:-87.59166520863306},
 {lat:41.79968208120504,lng:-87.59123739629518},
 {lat:41.79962976751655,lng:-87.59127092390787},
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
