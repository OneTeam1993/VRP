import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import axios from "axios";
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import { NgxSpinnerService } from "ngx-spinner";
declare var $: any;

declare const google: any;

@Component({
  templateUrl: 'direction.component.html',
  styleUrls: ["./direction.component.css"],
  encapsulation: ViewEncapsulation.None
})

export class DirectionComponent implements OnInit {
  route: string;
  constructor(private _constant: ConstantsService, location: Location, private router: Router, private spinner: NgxSpinnerService) {

    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
      } 

    });
  

  }

  ngOnInit(): void {
    this.spinner.show();
    var timerHandle = null;
    var car_marker = null;

    var step = 50; // 5; // metres
    var tick = 100; // milliseconds
    var eol;
    var k = 0;
    var stepnum = 0;
    var speed = "";
    var lastVertex = 1;
    var car = "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z";
    var car_icon: any = {
      path: car,
      scale: .5,
      //strokeColor: 'white',
      //strokeWeight: .10,
      fillOpacity: 1,
      fillColor: 'yellow',
      offset: '5%',
      // rotation: parseInt(heading[i]),
      anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
    };
    var startLocation: any = new Object();
    var endLocation: any = new Object();
    var steps = [];

    // Instantiate a directions service.
    var directionsService = new google.maps.DirectionsService();

    // Create a renderer for directions and bind it to the map.
    var rendererOptions = {
      map: map
    };

    var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

    var polyline = new google.maps.Polyline({
      path: [],
      strokeColor: '#FF0000',
      strokeWeight: 3
    });
    var poly2 = new google.maps.Polyline({
      path: [],
      strokeColor: '#FF0000',
      strokeWeight: 3
    });

    //================================INIT==================================//
    var latlng = new google.maps.LatLng(1.3521, 103.8198);
    for (var type in google.maps.MapTypeId) {
      this._constant.mapTypeIds.push(google.maps.MapTypeId[type]);
    }
    var mapOptions = {
      zoom: 12,
      center: latlng,
      panControl: false,
      zoomControl: false,
      zoomControlOptions:
      {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      mapTypeControl: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: this._constant.mapTypeIds,
        position: google.maps.ControlPosition.TOP_LEFT
      },
      streetViewControl: false,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      fullscreenControl: true,
      fullscreenControlOptions:
      {
        position: google.maps.ControlPosition.TOP_LEFT
      },
      scaleControl: false,
      overviewMapControl: false
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    SearchPlacesFrom();
    SearchPlacesTo();

    $("#calcRoute").on('click', {spinner: this.spinner},function (e) {
      e.preventDefault();
      e.data.spinner.show();

      if ($('#start').val().length == 0 || $('#end').val().length == 0) {

        alert('Start/End must not be empty');

      } else {

        if (timerHandle) {
          clearTimeout(timerHandle);
        }
        if (car_marker) {
          car_marker.setMap(null);
        }

        polyline.setMap(null);
        poly2.setMap(null);
        directionsDisplay.setMap(null);
        polyline = new google.maps.Polyline({
          path: [],
          strokeColor: '#FF0000',
          strokeWeight: 3
        });
        poly2 = new google.maps.Polyline({
          path: [],
          strokeColor: '#FF0000',
          strokeWeight: 3
        });
        // Create a renderer for directions and bind it to the map.
        var rendererOptions = {
          map: map
        };
        directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

        var start = $("#start").val();
        var end = $("#end").val();
        var travelMode = google.maps.DirectionsTravelMode.DRIVING;
        var tolls, highways;

        if ($('#tolls').prop("checked") == true) {
          tolls = true;
        } else {
          tolls = false;
        }

        if ($('#highways').prop("checked") == true) {
          highways = true;
        } else {
          highways = false;
        }

        var request = {
          origin: start,
          destination: end,
          travelMode: travelMode,
          optimizeWaypoints: true,
          provideRouteAlternatives: false,
          avoidTolls: tolls,
          avoidHighways: highways,
          drivingOptions: {
            departureTime: new Date(Date.now()),
            trafficModel: $('#traffic_mode').val()
          }

        };

        // Route the directions and pass the response to a
        // function to create markers for each step.
        directionsService.route(request, function (response, status) {

          if (status == google.maps.DirectionsStatus.OK) {
          
            if (document.getElementById("directions-result")) {
              directionsDisplay.setMap(null);
              directionsDisplay.setPanel(null);
              document.getElementById("directions-result").innerHTML = "";
            }


            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(map);
            directionsDisplay.setPanel(document.getElementById("directions-result"));

            //Direction Panel
            var route = response.routes[0];
            var summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = '';

            var markup = "<div style='border-style: none; margin: 0px; padding: 0px 3px; overflow: auto;' class=''>" +
              "<table id='resultsTable' class='table table-bordered' cellspacing='0' width='100%'>" +
              "<thead>" +
              "<tr>" +
              "<th style='color: blue;'>SN</th>" +
              "<th style='color: blue;'>Segment</th>" +
              "<th style='color: blue;'>Location From</th>" +
              "<th style='color: blue;'>Location To</th>" +
              "<th style='color: blue;'>Duration</th>" +
              "<th style='color: blue;'>Distance</th>" +
              "<th style='color: blue;'>Service Time</th>" +
              "<th style='color: blue;'>Arrival at waypoint</th>" +
              "<th style='color: blue;'>Departure at waypoint</th>" +
              "<th style='color: blue;'>Waypoint Status</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody>"

            var genSvcDuration = $("#gen_svc_duration").val();
            var dateFormat = 'HH:mm';
            var getTimestamp = $("#start_time").val();
            var convertTimestamp = moment(getTimestamp, dateFormat);
            var hour: any = moment(convertTimestamp).format('HH');
            var minutes: any = moment(convertTimestamp).format('mm');
            var totalDist = 0;
            var secondsToArrival = 0

            // set arrival time
            var arrival = new Date();
            arrival.setHours(hour); //Set Time
            arrival.setMinutes(minutes);
            arrival.setSeconds(0);

            var bounds = new google.maps.LatLngBounds();
            var svcTemp = [];

            // For each route, display summary information.
            var legs = response.routes[0].legs;
            for (var i = 0; i < legs.length; i++) {
              if (i === 0) {
                startLocation.latlng = legs[i].start_location;
                startLocation.address = legs[i].start_address;
              }
              endLocation.latlng = legs[i].end_location;
              endLocation.address = legs[i].end_address;
              var steps = legs[i].steps;
              for (var j = 0; j < steps.length; j++) {
                var nextSegment = steps[j].path;
                for (var k = 0; k < nextSegment.length; k++) {
                  polyline.getPath().push(nextSegment[k]);
                  bounds.extend(nextSegment[k]);
                }
              }

              var routeSegment = i + 1;
              secondsToArrival += legs[i].duration.value;
              totalDist += legs[i].distance.value;

              // new date variable.
              var startAtWaypoint = new Date();
              startAtWaypoint.setHours(arrival.getHours());
              startAtWaypoint.setMinutes(arrival.getMinutes());
              startAtWaypoint.setSeconds(arrival.getSeconds());

              // calculate difference.  We subtract the seconds.
              startAtWaypoint.setSeconds(arrival.getSeconds() + secondsToArrival); // Start

              switch (i) {
                case 0:
                  var segment = 'A to B';
                  break;
                case 1:
                  var segment = 'B to C';
                  break;
                case 2:
                  var segment = 'C to D';
                  break;
                case 3:
                  var segment = 'D to E';
                  break;
                case 4:
                  var segment = 'E to F';
                  break;
                case 5:
                  var segment = 'F to G';
                  break;
                case 6:
                  var segment = 'G to H';
                  break;
                case 7:
                  var segment = 'H to I';
                  break;
                case 8:
                  var segment = 'I to J';
                  break;
                case 9:
                  var segment = 'J to K';
                  break;
                case 10:
                  var segment = 'K to L';
                  break;
                case 11:
                  var segment = 'L to M';
                  break;
                case 12:
                  var segment = 'M to N';
                  break;
                case 13:
                  var segment = 'N to O';
                  break;
                case 14:
                  var segment = 'O to P';
                  break;
                case 15:
                  var segment = 'P to Q';
                  break;
                case 16:
                  var segment = 'Q to R';
                  break;
                case 17:
                  var segment = 'R to S';
                  break;
                case 18:
                  var segment = 'S to T';
                  break;
                case 19:
                  var segment = 'T to U';
                  break;
                case 20:
                  var segment = 'U to V';
                  break;
                case 21:
                  var segment = 'V to W';
                  break;
                case 22:
                  var segment = 'W to X';
                  break;
                case 23:
                  var segment = 'X to Y';
                  break;
                case 24:
                  var segment = 'Y to Z';
                  break;
                default:
                  var segment = '';
              }

              var arrival_waypoint, departure_waypoint;

              if (i == 0) {
                arrival_waypoint = moment(startAtWaypoint).format(dateFormat);
                departure_waypoint = moment(startAtWaypoint).add(genSvcDuration, 'm').format(dateFormat);
                svcTemp.push(genSvcDuration);
              } else {

                if (genSvcDuration) {

                  arrival_waypoint = moment(startAtWaypoint).add(genSvcDuration * (routeSegment) - parseInt(genSvcDuration), 'm').format(dateFormat);
                  var sum = parseInt(genSvcDuration) + parseInt(svcTemp[0]);
                  svcTemp = [];
                  svcTemp.push(sum);
                }
                else {
                  arrival_waypoint = moment(startAtWaypoint).add(svcTemp[0], 'm').format(dateFormat);
                  svcTemp = [];
                }

                if (genSvcDuration) departure_waypoint = moment(startAtWaypoint).add(genSvcDuration * (routeSegment), 'm').format(dateFormat);
              }

              summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + " (" + segment + ")" +
                '</b><br>';
              summaryPanel.innerHTML += 'Location: ' + route.legs[i].start_address + ' to ';
              summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
              summaryPanel.innerHTML += 'Duration: ' + route.legs[i].duration.text + '<br>';
              summaryPanel.innerHTML += 'Distance: ' + route.legs[i].distance.text + '<br>';
              if (route.legs[i].duration_in_traffic) summaryPanel.innerHTML += 'Traffic Duration: ' + route.legs[i].duration_in_traffic.text;
              summaryPanel.innerHTML += ' <hr>';

              var duration = route.legs[i].duration.text;
              var distance = route.legs[i].distance.text;

              //Tables
              markup += "<tr>" +
                "<td style='padding: 5px;'>" +
                serialFormatter(i) +
                "</td>" +
                "<td style='padding: 5px;'>Route Segment&nbsp;" +
                routeSegment + " (" + segment + ")" +
                "</td>" +
                "<td style='padding: 5px;'>" +
                route.legs[i].start_address +
                "</td>" +
                "<td style='padding: 5px;'>" +
                route.legs[i].end_address +
                "</td>" +
                "<td style='padding: 5px;'>" +
                duration.replace(/[^\d.-]/g, '') +
                "</td>" +
                "<td style='padding: 5px;'>" +
                distance.replace(/[^\d.-]/g, '') +
                "</td>" +
                "<td style='padding: 5px;'>" +
                genSvcDuration +
                "</td>" +
                "<td style='padding: 5px;'>" +
                arrival_waypoint +
                "</td>" +
                "<td style='padding: 5px;'>" +
                departure_waypoint +
                "</td>" +
                "<td style='padding: 5px;'>" +
                waypointFormatter(i, legs.length) +
                "</td>" +
                "</tr>"

              if (i + 1 == legs.length) {
                markup += "</tbody></table>" + "</div>";

                if (markup !== undefined || markup !== null) $('#results-panel').html(markup);
              }

            }

            //Display total
            totalDist = totalDist / 1000.
            document.getElementById("total").innerHTML = "<div style='margin-top:10px;'><strong>Total Distance:&nbsp;</strong><span id='total_distance'></span>&nbsp;km<br>" +
              "<strong>Total Driving Time:&nbsp;</strong><span id='total_journey'></span>&nbsp;minutes<br>";

            $("#total_distance").text(totalDist);
            $("#total_journey").text((secondsToArrival / 60).toFixed(2));
            $("#total_svc").text(svcTemp[0]);
            $("#end_time").text(moment(startAtWaypoint).add(svcTemp[0], 'm').format(dateFormat));

            polyline.setMap(map);
            map.fitBounds(bounds);
            map.setZoom(18);
            startAnimation();
          }
        });
      }


      e.data.spinner.hide();
    });

    //Search Places
    function SearchPlacesFrom() {

      var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(1.3000, 103.8000),
        new google.maps.LatLng(1.3000, 103.5710));


      var input = document.getElementById('start');

      var options = {
        bounds: defaultBounds,
        types: $('#autocomplete').val(),
        componentRestrictions: {
          country: 'SG'
        }
      };

      var autocomplete = new google.maps.places.Autocomplete(input, options);
      autocomplete.setTypes();


    }
    function SearchPlacesTo() {

      var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(1.3000, 103.8000),
        new google.maps.LatLng(1.3000, 103.5710));


      var input = document.getElementById('end');

      var options = {
        bounds: defaultBounds,
        types: $('#autocomplete').val(),
        componentRestrictions: {
          country: 'SG'
        }
      };

      var autocomplete = new google.maps.places.Autocomplete(input, options);
      autocomplete.setTypes();


    }


    function serialFormatter(value) {

      return value + 1;
    }

    function waypointFormatter(value, arryNo) {
      var rtnVal;

      if (value == 0) {
        rtnVal = 1;
      }
      else if (value > 0 && value + 1 < arryNo) {
        rtnVal = 2;
      }
      else if (value + 1 == arryNo) {
        rtnVal = 3;
      }

      return rtnVal;
    }

    //=============== animation functions ======================
    function updatePoly(d) {
      // Spawn a new polyline every 20 vertices, because updating a 100-vertex poly is too slow
      if (poly2.getPath().getLength() > 20) {
        poly2 = new google.maps.Polyline([polyline.getPath().getAt(lastVertex - 1)]);
        // map.addOverlay(poly2)
      }

      if (polyline.GetIndexAtDistance(d) < lastVertex + 2) {
        if (poly2.getPath().getLength() > 1) {
          poly2.getPath().removeAt(poly2.getPath().getLength() - 1);
        }
        poly2.getPath().insertAt(poly2.getPath().getLength(), polyline.GetPointAtDistance(d));
      } else {
        poly2.getPath().insertAt(poly2.getPath().getLength(), endLocation.latlng);
      }
    }

    function animate(d) {
      if (d > eol) {
        //map.panTo(endLocation.latlng);
        car_marker.setPosition(endLocation.latlng);
        return;
      }
      var p = polyline.GetPointAtDistance(d);
      //map.panTo(p);
      var lastPosn = car_marker.getPosition();
      car_marker.setPosition(p);
      var heading = google.maps.geometry.spherical.computeHeading(lastPosn, p);
      car_icon.rotation = heading;
      car_marker.setIcon(car_icon);
      updatePoly(d);
      //timerHandle = setTimeout("animate(" + (d + step) + ")", tick);
      timerHandle = setTimeout(() => {
        animate(d + step);
      }, tick);
    }

    function startAnimation() {
      eol = polyline.Distance();
      map.setCenter(polyline.getPath().getAt(0));
      car_marker = new google.maps.Marker({
        position: polyline.getPath().getAt(0),
        map: map,
        icon: car_icon
      });

      poly2 = new google.maps.Polyline({
        path: [polyline.getPath().getAt(0)],
        strokeColor: "#0000FF",
        strokeWeight: 10
      });

      //setTimeout("animate(50)", 2000); // Allow time for the initial map display

      setTimeout(() => {    //<<<---    using ()=> syntax
        animate(50);
      }, 2000);
    }

    //=============== ~animation funcitons =====================

    // === first support methods that don't (yet) exist in v3
    google.maps.LatLng.prototype.distanceFrom = function (newLatLng) {
      var EarthRadiusMeters = 6378137.0; // meters
      var lat1 = this.lat();
      var lon1 = this.lng();
      var lat2 = newLatLng.lat();
      var lon2 = newLatLng.lng();
      var dLat = (lat2 - lat1) * Math.PI / 180;
      var dLon = (lon2 - lon1) * Math.PI / 180;
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = EarthRadiusMeters * c;
      return d;
    }

    google.maps.LatLng.prototype.latRadians = function () {
      return this.lat() * Math.PI / 180;
    }

    google.maps.LatLng.prototype.lngRadians = function () {
      return this.lng() * Math.PI / 180;
    }

    // === A method which returns the length of a path in metres ===
    google.maps.Polygon.prototype.Distance = function () {
      var dist = 0;
      for (var i = 1; i < this.getPath().getLength(); i++) {
        dist += this.getPath().getAt(i).distanceFrom(this.getPath().getAt(i - 1));
      }
      return dist;
    }

    // === A method which returns a GLatLng of a point a given distance along the path ===
    // === Returns null if the path is shorter than the specified distance ===
    google.maps.Polygon.prototype.GetPointAtDistance = function (metres) {
      // some awkward special cases
      if (metres == 0) return this.getPath().getAt(0);
      if (metres < 0) return null;
      if (this.getPath().getLength() < 2) return null;
      var dist = 0;
      var olddist = 0;
      for (var i = 1;
        (i < this.getPath().getLength() && dist < metres); i++) {
        olddist = dist;
        dist += this.getPath().getAt(i).distanceFrom(this.getPath().getAt(i - 1));
      }
      if (dist < metres) {
        return null;
      }
      var p1 = this.getPath().getAt(i - 2);
      var p2 = this.getPath().getAt(i - 1);
      var m = (metres - olddist) / (dist - olddist);
      return new google.maps.LatLng(p1.lat() + (p2.lat() - p1.lat()) * m, p1.lng() + (p2.lng() - p1.lng()) * m);
    }

    // === A method which returns an array of GLatLngs of points a given interval along the path ===
    google.maps.Polygon.prototype.GetPointsAtDistance = function (metres) {
      var next = metres;
      var points = [];
      // some awkward special cases
      if (metres <= 0) return points;
      var dist = 0;
      var olddist = 0;
      for (var i = 1;
        (i < this.getPath().getLength()); i++) {
        olddist = dist;
        dist += this.getPath().getAt(i).distanceFrom(this.getPath().getAt(i - 1));
        while (dist > next) {
          var p1 = this.getPath().getAt(i - 1);
          var p2 = this.getPath().getAt(i);
          var m = (next - olddist) / (dist - olddist);
          points.push(new google.maps.LatLng(p1.lat() + (p2.lat() - p1.lat()) * m, p1.lng() + (p2.lng() - p1.lng()) * m));
          next += metres;
        }
      }
      return points;
    }

    // === A method which returns the Vertex number at a given distance along the path ===
    // === Returns null if the path is shorter than the specified distance ===
    google.maps.Polygon.prototype.GetIndexAtDistance = function (metres) {
      // some awkward special cases
      if (metres == 0) return this.getPath().getAt(0);
      if (metres < 0) return null;
      var dist = 0;
      var olddist = 0;
      for (var i = 1;
        (i < this.getPath().getLength() && dist < metres); i++) {
        olddist = dist;
        dist += this.getPath().getAt(i).distanceFrom(this.getPath().getAt(i - 1));
      }
      if (dist < metres) {
        return null;
      }
      return i;
    }
    // === Copy all the above functions to GPolyline ===
    google.maps.Polyline.prototype.Distance = google.maps.Polygon.prototype.Distance;
    google.maps.Polyline.prototype.GetPointAtDistance = google.maps.Polygon.prototype.GetPointAtDistance;
    google.maps.Polyline.prototype.GetPointsAtDistance = google.maps.Polygon.prototype.GetPointsAtDistance;
    google.maps.Polyline.prototype.GetIndexAtDistance = google.maps.Polygon.prototype.GetIndexAtDistance;

    //====================================END===============================================//
    $('.selectpicker').selectpicker('refresh');
    this.spinner.hide();
  } //end of ngOnInit
  calcRoute() {


  }

}
