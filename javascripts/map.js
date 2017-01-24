         var locations = [
              {
                  location : 'JHU',
                  desc : 'This is johns hopkins university',
                  lat : 39.329901,
                  long : -76.620518
              },
              {
                  location : 'Inner Harbor',
                  desc : 'This is the inner harbor',
                  lat : 39.285848,
                  long : -76.613111
              },
              {
                  location : 'Towson',
                  desc : 'This is the city Towson',
                  lat : 39.401496,
                  long : -76.601913
              },
              {
                  location : 'BWI',
                  desc : 'AirPort Station of Baltimore',
                  lat : 39.177404,
                  long : -76.668392
              }
          ];

          //Angular App Module and Controller
          var sampleApp = angular.module('mapsApp', []);
          sampleApp.controller('MapCtrl', function ($scope) {

              var mapOptions = {
                  zoom: 12,
                  center: new google.maps.LatLng(39.299236,-76.609383),
                  mapTypeId: google.maps.MapTypeId.HYBRID
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.location
                  });
                  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
              for (i = 0; i < locations.length; i++){
                  createMarker(locations[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });