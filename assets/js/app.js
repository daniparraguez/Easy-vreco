
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

  });

};
    document.getElementById("trazar-ruta").addEventListener("click", calculateRoute);


/*
    var miUbicacion = new google.maps.Marker({
    position: {lat:latitud, lng:longitud},
    map: map,
    icon: "http://www.raileurope.ca/squelettes/img/services/VEL.png",
    animation: google.maps.Animation.DROP
    });*/
   


    function buscar() {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    };
  };

      document.getElementById("encuentrame").addEventListener("click", buscar);
      var latitud, longitud;

    var funcionExito = function(posicion) {
      latitud = posicion.coords.latitude;
      longitud = posicion.coords.longitude;

    var miUbicacion = new google.maps.Marker({
    position: {lat:latitud, lng:longitud},
    map: map,
    icon: "http://www.raileurope.ca/squelettes/img/services/VEL.png",
    animation: google.maps.Animation.DROP
    });

  map.setTilt(45); //Todo esto dentro de la función éxito
  map.setZoom(18);
  map.setCenter({lat:latitud, lng:longitud});
  };

    var funcionError = function(error) {
      alert("No has permitido usar tu ubicación maldito engendro");
    }

};