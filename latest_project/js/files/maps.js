function initMap(lat, lng) {
    var uluru = { lat: lat, lng: lng };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

const API = 'AIzaSyCb2oP_MeowX0-7Ergz6LlTELmkV5uf3og';

$(document).ready(function() {
    var address = document.querySelector('footer .info-block li span').textContent;
    console.log(address);
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API}`;
    $.getJSON(url, function(data) {
        // var {lat,lng}=data.results[0].geometry.location
        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        initMap(lat, lng);
    })
});