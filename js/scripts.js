var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {


});

$(window).resize(function() {


});

$(document).scroll(function() {


});

$(document).ready(function() {


});

if( document.getElementById("map") ) {

  var map, marker, latCoord, lngCoord;

  function initMap() {
    latCoord = 54.729918;
    lngCoord = 55.9507824;
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: latCoord, lng: lngCoord},
      scrollwheel: false,
      scaleControl: false,
      zoom: 16
    });
    marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: {lat: latCoord, lng: lngCoord},
      title: 'ГЛОБАЛЖКХ'
    });
    marker.addListener('click', toggleBounce);
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}