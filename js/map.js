
var map;
function loadMap() {
    var australia = {lat: -25.734968, lng: 134.489563};
    map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: australia
    });

    var earthQuakeData = JSON.parse(document.getElementById('mapdata').innerHTML);
    displayCurrentEarthQuake(earthQuakeData);
}

/*
 * Display all the marker and create content for marker to show when click
 */
function displayCurrentEarthQuake(quakeData) {
    Array.prototype.forEach.call(quakeData.features, function (data) {
        var location = data.properties.place;
        var time = convertTime(data.properties.time);
        var content = document.createElement('div');
        var strong = document.createElement('strong');
        var detail = "<strong>Location : </strong> " + location +"<br/> " +"<strong>Time : </strong> " + time;
        strong.textContent = detail;
        content.appendChild(strong);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(data.geometry.coordinates[1], data.geometry.coordinates[0]),
            map: map
        }); 
        addInfoWindow(marker,detail);   
    });
}
function addInfoWindow(marker, message) {

    var infoWindow = new google.maps.InfoWindow({
        content: message
    });
    google.maps.event.addListener(marker,'mouseover', (function(){ 
        infoWindow.open(map,marker);
    })); 
    google.maps.event.addListener(marker, 'mouseout', (function(){ 
        infoWindow.close();
    })); 
}


/*
 * Convert time in sec to UTC
 */
function convertTime(secs) {
    var t = new Date(secs);
    var utcDate = t.toUTCString();
    return utcDate;
}
