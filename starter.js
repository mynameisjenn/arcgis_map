require([
      "esri/Map",
      "esri/views/MapView",
      "dojo/domReady!"
    ], function(Map, MapView, BasemapToggle, BasemapGallery) {

    var map = new Map({
      basemap: "streets-relief-vector"
    });

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-118.71511,34.09042],
      zoom: 10
    });
  });
