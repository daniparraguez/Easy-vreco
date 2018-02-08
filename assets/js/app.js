
    function initMap() {

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: false,//si es true suprime los marcadores 
      draggable: true,}); //permite mover marcador

    var mapOptions = {
      zoom: 11,
      center: {lat: -33.534255099999996, lng: -70.7752498},
      mapTypeId: 'hybrid'
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    directionsDisplay.setMap(map);

var inicioRuta = document.getElementById('inicio');
var finRuta = document.getElementById('fin');

var inicio= new google.maps.places.Autocomplete(inicioRuta);
var fin = new google.maps.places.Autocomplete(finRuta);

      function calculateRoute() {
      var request = {
        origin: inicioRuta.value,
        destination: finRuta.value,
        travelMode: "DRIVING"
        }

      directionsService.route(request, function(result,status){
      if (status === "OK"){
      directionsDisplay.setDirections(result);
      };


    new google.maps.Marker({
    position: {lat:latitud, lng:longitud},
    map: map,
    icon: "http://www.raileurope.ca/squelettes/img/services/VEL.png",
    animation: google.maps.Animation.DROP
    });
  });

};
    document.getElementById("trazar-ruta").addEventListener("click", calculateRoute);
};


/*
    var miUbicacion = new google.maps.Marker({
    position: {lat:latitud, lng:longitud},
    map: map,
    icon: "http://www.raileurope.ca/squelettes/img/services/VEL.png",
    animation: google.maps.Animation.DROP
    });*/
   
