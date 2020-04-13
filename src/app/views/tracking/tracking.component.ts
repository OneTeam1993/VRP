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
declare const StyledMarker: any;
declare const StyledIcon: any;
declare const MarkerWithLabel: any;

@Component({
  templateUrl: 'tracking.component.html',
  styleUrls: ["./tracking.component.css"],
  encapsulation: ViewEncapsulation.None
})

export class TrackingComponent implements OnInit {
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

    //Call StyledMarker Library
    //var sm = document.createElement("script");
    //sm.type = "text/javascript";
    //sm.src = "https://track-asia.com/sg/Dashboard/plugins/StyledMarker/StyledMarker.js";
    //$("head").append(sm);

    //Call Marker with Library
    //var ml = document.createElement("script");
    //ml.type = "text/javascript";
    //ml.src = "https://track-asia.com/sg/Dashboard/plugins/marker-with-label/markerwithlabel.js";
    //$("head").append(ml);

    $('#panel').hide();
    $('#infobubbleDrawing').hide();

    let base = this._constant.baseAppUrl;
    let uri = this._constant.uri_track;
    let user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
    let reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
    let company_id = Number(sessionStorage.getItem('setSessionstorageValueUserCompanyID'));
    let role_id = this._constant.getSessionstorageValueRoleID;
    let api_zonetype = this._constant.zonetypeApi;
    let api_post_zones = this._constant.zoneApi;
    let api_assets = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + company_id;
    let api_zones = base + uri + 'zoneinfo' + '?ResellerID=' + reseller_id + '&CompanyID=' + company_id;

    //var openmarker= [];
    var openmarker = new Array();
    var map;
    var markers = new Array();
    var marker: any;
    var infoBubble;
    var styleMaker;
    var styleMakers = new Array();
    var infoWindow;

    let infoBoxList: any = [];
    var k;
    var polygon;
    var pathCoordinates = new google.maps.MVCArray();
    var polygonCoordinates = new Array();
    var circleCoordinates = new Array();
    var circleCoordinates1 = new Array();

    var paramtitle;
    var firstData = true;

    //=====================================//
    var drawingManager;
    var all_overlays = [];
    var selectedShape;
    var colors = ['#1E90FF', '#FF1493', '#32CD32', '#FF8C00', '#4B0082', '#8560a8', '#005e20', '#CBCC29', '#495f75', '#a00000', '#1B1B1B'];
    var selectedColor;
    var colorButtons = {};
    var polygon;
    var polygons = [];
    var circle = {};
    var circle1 = {};
    var polygon1 = {};
    var circles = [];
    var poi;
    var pois = new Array();
    var poiContent;
    var markerLabel;
    var markerLabels = new Array();

    var all_overlays = [];
    var selectedShape;
    var infoWindowList = [];
    var infoWindowListLabel = [];
    var contentString;
    var finalString;
    var poiContent;
    var rectangle;
    var arrRectangle = [];
    var marker1;
    var marker2;
    var recmarkers = new Array();
    //=====================================//

    //search destination
    var URLDest;
    var destfrom;
    var destto;

    var assets = [];

    var shape = {
      coord: [16, 0, 18, 1, 21, 2, 24, 3, 26, 4, 27, 5, 28, 6, 29, 7, 29, 8, 29, 9, 29, 10, 29, 11, 29, 12, 29, 13, 29, 14, 29, 15, 29, 16, 29, 17, 29, 18, 29, 19, 29, 20, 29, 21, 29, 22, 29, 23, 29, 24, 29, 25, 29, 26, 29, 27, 29, 28, 28, 29, 3, 29, 2, 28, 2, 27, 1, 26, 1, 25, 1, 24, 0, 23, 0, 22, 0, 21, 0, 20, 0, 19, 0, 18, 0, 17, 0, 16, 0, 15, 0, 14, 0, 13, 0, 12, 0, 11, 0, 10, 0, 9, 0, 8, 0, 7, 1, 6, 2, 5, 2, 4, 3, 3, 5, 2, 6, 1, 8, 0, 16, 0],
      type: 'poly'
    };


    //===================Timer=================================================//
    var assetMarkerInterval;

    //===================================STYLED MARKER========================//

    var StyledIconTypes: any = {};
    var bu_ = 'https://chart.googleapis.com/chart?chst=';
    var gm_ = google.maps;
    var gp_ = gm_.Point;
    var ge_ = gm_.event;
    var gmi_ = gm_.MarkerImage;



    //================================INIT==================================//
    var latlng = new google.maps.LatLng(1.3521, 103.8198);
    for (var type in google.maps.MapTypeId) {
      this._constant.mapTypeIds.push(google.maps.MapTypeId[type]);
    }

    var mapOptions = {
      zoom: 12,
      center: latlng,
      panControl: false,
      zoomControl: true,
      zoomControlOptions:
      {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      mapTypeControl: true,
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
      scaleControl: true,
      overviewMapControl: true
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(document.getElementById('panel'));

    Layers();
    setZones(handleZones, api_zones);
    setMarkers(updateAssets, api_assets, this.route);

    google.maps.event.addListener(map, 'mousemove', function (event) {
      document.getElementById('coordinates-panel').innerHTML =
        event.latLng.lat() + ', ' + event.latLng.lng();
    });

    //==================================DRAWING==========================================//
    var polyOptions = {
      strokeWeight: 0,
      fillOpacity: 0.45,
      editable: false
    };

    // Creates a drawing manager attached to the map that allows the user to draw
    // markers, lines, and shapes.
    drawingManager = new google.maps.drawing.DrawingManager({
      drawingControl: false,
      drawingControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.CIRCLE,
          google.maps.drawing.OverlayType.POLYGON,
          google.maps.drawing.OverlayType.MARKER,
          google.maps.drawing.OverlayType.RECTANGLE
        ]
      },

      markerOptions: {
        draggable: true
      },
      polylineOptions: {
        editable: true
      },
      rectangleOptions: polyOptions,
      circleOptions: polyOptions,
      polygonOptions: polyOptions,
      map: map
    });

    drawingManager.setMap(map);

    buildColorPalette();

    google.maps.event.addListener(drawingManager, 'overlaycomplete', function (e) {
      deleteAllShape();
      all_overlays.push(e);

      if (e.type == google.maps.drawing.OverlayType.CIRCLE) {
        var radius = e.overlay.getRadius();
      }

      if (e.type != google.maps.drawing.OverlayType.MARKER) {
        // Switch back to non-drawing mode after drawing a shape.
        drawingManager.setDrawingMode(null);

        // To hide:
        drawingManager.setOptions({
          drawingControl: false
        });

        // Add an event listener that selects the newly-drawn shape when the user
        // mouses down on it.
        var newShape = e.overlay;
        newShape.type = e.type;
        google.maps.event.addListener(newShape, 'click', function () {
          setSelection(newShape);
        });
        setSelection(newShape);
      }

      if (e.type == google.maps.drawing.OverlayType.MARKER) {
        var latlng = e.overlay.getPosition()
        console.log(latlng);
      }

    });

    google.maps.event.addListener(drawingManager, 'drawingmode_changed', clearSelection);

    google.maps.event.addListener(map, 'click', clearSelection);

    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {

      polygons.push(polygon);
      getCoordinates();
      function getCoordinates() {
        console.log(polygon.getPath().getArray());
        var vertices = polygon.getPath().getArray();

        var arrayToString = vertices.toString();
        var removeSpace = arrayToString.replace(/\ /g, "");
        var removeOpen = removeSpace.replace(/\(/g, "");
        var removeClose = removeOpen.replace(/\),/g, " ");
        finalString = removeClose.replace(/\)/g, "");


        var coords = finalString.split(" ");
        var recoords;

        for (var k = 0; k < coords.length; k++) {
          recoords = coords[0].split(",");
        };

        var position = new google.maps.LatLng(parseFloat(recoords[0]), parseFloat(recoords[1]));

        // Replace the info infoBubble's content and position.
        var infoBubble = new google.maps.InfoWindow({
          content: document.getElementById("infobubbleDrawing"),
        });

        infoWindowList.push(infoBubble);

        infoBubble.setPosition(position);
        infoBubble.open(map);

        document.getElementById("infobubbleDrawing").style.display = 'block';
        $('#panel').show();

        google.maps.event.addListener(infoBubble, 'closeclick', function () {
          deleteAllShape();
          $('#panel').hide();
        });

        //var coordsPolygon = polygon.getPath().getArray();
        //document.getElementById("Perimeter").value += coordsPolygon;

        //sessionStorage.setItem("setSessionstorageValuePerimeterLength", coordsPolygon.length);

      }

      google.maps.event.addDomListener(document.getElementById('savebutton'), 'click', saveZone);

    });

    google.maps.event.addListener(drawingManager, 'circlecomplete', function (circle) {
      circles.push(circle);

      var circleCenter;
      var circleRadius;
      var pointA;
      var pointB;

      for (var i = 0; i < circles.length; i++) {
        circleCenter = circles[i].getCenter();
        circleRadius = circles[i].getRadius();

        google.maps.LatLng.prototype.destinationPoint = function (brng, dist) {
          dist = dist / 6371;
          brng = toRadians(brng);

          var lat1 = toRadians(this.lat()), lon1 = toRadians(this.lng());

          var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) +
            Math.cos(lat1) * Math.sin(dist) * Math.cos(brng));

          var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist) *
            Math.cos(lat1),
            Math.cos(dist) - Math.sin(lat1) *
            Math.sin(lat2));

          if (isNaN(lat2) || isNaN(lon2)) return null;

          return new google.maps.LatLng(toRadians(lat2), toDegrees(lon2));
        }

        var getKm = circleRadius / 1000;

        pointA = new google.maps.LatLng(circleCenter.lat(), circleCenter.lng());
        pointB = pointA.destinationPoint(90, getKm);

        var arrayToString = pointB.toString();
        var removeSpace = arrayToString.replace(/\ /g, "");
        var removeOpen = removeSpace.replace(/\(/g, "");
        var removeClose = removeOpen.replace(/\),/g, " ");
        var removeEnd = removeClose.replace(/\)/g, "");

        //5.977254,116.079409 5.980241,116.080362
        finalString = circleCenter.lat() + "," + circleCenter.lng() + " " + removeEnd;

        //alert(circleCenter.lat() + "," + circleCenter.lng() + "," + circleRadius);

        //sessionStorage.setItem("setSessionstorageValuePerimeterLength", circles.length);

      }

      //var position = new google.maps.LatLng(parseFloat(circleCenter.lat()), parseFloat(circleCenter.lng()));
      let content: any = '<div class="form-group row">' +
        '<div style="padding-top: 10px;">' +
        '<h6 style="color:#4286CF; padding-bottom:10px;"><i class="fa fa-map-marker fa-lg" style="color: cornflowerblue; font-size: 1.5em;"></i> Save Zone </h6 >' +
        '</div>' +
        '<table style="width:100%">' +
        '<tbody>' +
        '<tr>' +
        '<th><div class="col-sm-12 form-group"><div class=".text-normal"> Zone Name </div><input class="form-control" id="zname" name="zname" placeholder="Enter Zone Name" type="text" style="color:black !important;"></div></th>' +
        '</tr>' +
        '<tr>' +
        '<th>' +
        '<div style="padding: 10px 0 10px 0;"></div>' +
        '</th>' +
        '</tr>' +
        '<tr>' +
        '<th><div class="col-sm-12 form-group"><div class=".text-normal"> Zone Type </div><select class="form-control" data-live-search="true" data-width="100%" id="getZoneTypes" name="getZoneTypes" style="background-color:#2F343B; color:azure;"></select > </div></th >' +
        '</tr>' +
        '<tr>' +
        '<th>' +
        '<div style="padding: 10px 0 10px 0;"></div>' +
        '</th>' +
        '</tr>' +
        '<tr>' +
        '<th><button id="savebutton" class="btn-dark btn btn-md pull-right"> Submit </button></th>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>';

      $.getJSON(api_zonetype, function (data) {
        $.each(data, function (index, item) {
          $('#getZoneTypes').append($('<option></option>').val(item.ZoneTypeID).html(item.Name));
        });
      });

      // Replace the info infoBubble's content and position.
      infoBubble = new google.maps.InfoWindow({
        content: content
      });
      infoWindowList.push(infoBubble);
      infoBubble.setPosition(pointA);
      infoBubble.open(map);

      $('#panel').show();

      google.maps.event.addListener(infoBubble, 'closeclick', function () {
        deleteAllShape();
        $('#panel').hide();
      });

      //google.maps.event.addDomListener($('#savebutton'), 'click', saveZone);
      google.maps.event.addListener(infoBubble, 'domready', function () {
        $("#savebutton").click(() => saveZone());
      });

    });

    google.maps.event.addListener(drawingManager, 'markercomplete', function (poi) {

      pois.push(poi);
      var coords;

      for (var i = 0; i < pois.length; i++) {
        coords = pois[i].getPosition();
        var arrayToString = coords.toString();
        var removeSpace = arrayToString.replace(/\ /g, "");
        var removeOpen = removeSpace.replace(/\(/g, "");
        var removeClose = removeOpen.replace(/\),/g, " ");
        finalString = removeClose.replace(/\)/g, "");
      }

      // Replace the info infoBubble's content and position.
      var infoBubble = new google.maps.InfoWindow({
        content: document.getElementById("infobubbleDrawing")
      });

      infoWindowList.push(infoBubble);

      infoBubble.setPosition(coords);
      infoBubble.open(map);

      document.getElementById("infobubbleDrawing").style.display = 'block';
      $('#panel').hide();
      google.maps.event.addListener(infoBubble, 'closeclick', function () {
        deleteAllPoi();
        $('#panel').hide();
      });

      google.maps.event.addDomListener(document.getElementById('savebutton'), 'click', saveZone);

    });

    google.maps.event.addListener(drawingManager, 'rectanglecomplete', function (rectangle) {

      arrRectangle.push(rectangle);

      var bounds = rectangle.getBounds();
      var NE = bounds.getNorthEast();
      var SW = bounds.getSouthWest();
      var NW = new google.maps.LatLng(NE.lat(), SW.lng());
      var SE = new google.maps.LatLng(SW.lat(), NE.lng());


      // Plot two markers to represent the Rectangle's bounds.
      marker1 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(NE.lat(), SW.lng()),
        draggable: false,
        title: 'Drag me!'
      });

      marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(SW.lat(), NE.lng()),
        draggable: false,
        title: 'Drag me!'
      });

      recmarkers.push(marker1, marker2);

      function getRectangleCoordinates() {
        return NW + "," + SW + "," + SE + "," + NE;
      }

      var arrayToString = getRectangleCoordinates();
      var removeSpace = arrayToString.replace(/\ /g, "");
      var removeOpen = removeSpace.replace(/\(/g, "");
      var removeClose = removeOpen.replace(/\),/g, " ");
      finalString = removeClose.replace(/\)/g, "");

      var coords = finalString.split(" ");
      var recoords;

      for (var k = 0; k < coords.length; k++) {
        recoords = coords[0].split(",");
      };

      var position = new google.maps.LatLng(NE.lat(), SW.lng());

      // Replace the info infoBubble's content and position.
      var infoBubble = new google.maps.InfoWindow({
        content: document.getElementById("infobubbleDrawing")
      });

      infoWindowList.push(infoBubble);

      infoBubble.setPosition(position);
      infoBubble.open(map);

      document.getElementById("infobubbleDrawing").style.display = 'block';
      $('#panel').show();
      google.maps.event.addListener(infoBubble, 'closeclick', function () {
        deleteAllShape();
        $('#panel').hide();
      });

      sessionStorage.setItem("setSessionstorageValuePerimeterLength", String(4));

      google.maps.event.addDomListener(document.getElementById('savebutton'), 'click', saveZone);

    });

    //================================AUTOREFRESH========================================//

    assetMarkerInterval = setInterval(() => {
      setMarkers(updateAssets, api_assets, this.route);
    }, 10000);

    //=====================================CONVERSION========================================//

    function toDegrees(angle) {
      return angle * (180 / Math.PI);
    }

    function toRadians(angle) {
      return angle * (Math.PI / 180);
    }

    //=====================================ZONES==========================================//

    function setZones(callback: any, api_zones: string) {

      axios.get(api_zones)
        .then(function (response) {
          //console.log(response);
          callback(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function handleZones(zones) {

      for (var i = 0; i < zones.length; i++) {

        let str_zone: any = zones[i];
        var zoneID = str_zone.ZoneID;
        var name = str_zone.Name;
        var type = str_zone.Type;
        var perimeter = str_zone.Perimeter;
        var company = str_zone.Company;
        var color = str_zone.Color;
        var location = str_zone.Location;

        var coords = perimeter.split(" ");
        var recoords;
        var Pos;
        var zoneCircle;
        var zoneCircle1;
        var imageUrl = 'https://chart.apis.google.com/chart?cht=mm&chs=24x32&' + 'chco=FFFFFF,' + (Math.random() * 0xFFFFFF << 0).toString(16) + '&ext=.png';

        if (/\s/.test(perimeter)) {
          // It has any kind of whitespace
          if (coords.length == 1) {

            for (var k = 0; k < coords.length; k++) {

              recoords = coords[k].split(",");

              //var circle1 = {};
              circle1['Zones'] = {
                center: new google.maps.LatLng(parseFloat(recoords[0]), parseFloat(recoords[1])),
                radius: recoords[2]
                //radius: 100
              };


            }

            // Construct the circle for each value in citymap.
            // Note: We scale the area of the circle based on the population.
            for (var zone in circle1) {
              var radiusOptions = {
                strokeColor: color,
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: color,
                fillOpacity: 0.35,
                map: map,
                Company: company,
                Name: name,
                Pos: coords,
                zoneID: zoneID,
                center: circle1[zone].center,
                radius: Math.sqrt(circle1[zone].radius)
              };
              // Add the circle for this city to the map.
              zoneCircle1 = new google.maps.Circle(radiusOptions);

            }
            circleCoordinates1.push(zoneCircle1);

            // Add a listener for the click event.
            google.maps.event.addListener(zoneCircle1, 'click', showArrayCircle);
            infoWindow = new google.maps.InfoWindow();

            // Click Zones
            google.maps.event.addListener(zoneCircle1, 'click', (function (zoneCircle1) {

              return function () {

                map.panTo(this.position);

              }

            })(zoneCircle1));

          }
          //Circle - 1.042346,99.939392 1.038056,99.937031
          else if (coords.length <= 2) {

            var latlng1 = coords[0];
            var latlng2 = coords[1];
            var getlatlng1 = latlng1.split(",");

            var lat1 = getlatlng1[0];
            var lon1 = getlatlng1[1];

            var getlatlng2 = latlng2.split(",");

            var lat2 = getlatlng2[0];
            var lon2 = getlatlng2[1];

            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2 - lat1);  // deg2rad below
            var dLon = deg2rad(lon2 - lon1);
            var a =
              Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2)
              ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
            var Radius = d * 100;
            recoords = coords[0].split(",");

            circle['Zones'] = {
              center: new google.maps.LatLng(parseFloat(recoords[0]), parseFloat(recoords[1])),
              radius: Radius
            };


            for (var z in circle) {
              var radiusOptions2 = {
                strokeColor: color,
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: color,
                fillOpacity: 0.35,
                map: map,
                Company: company,
                Name: name,
                Pos: coords,
                zoneID: zoneID,
                center: circle[z].center,
                radius: Math.sqrt(circle[z].radius) * 100
              };
              // Add the circle for this city to the map.
              zoneCircle = new google.maps.Circle(radiusOptions2);
            }

            circleCoordinates.push(zoneCircle);


            // Add a listener for the click event.
            google.maps.event.addListener(zoneCircle, 'click', showArrayCircle);

            infoWindow = new google.maps.InfoWindow();

            // Click Zones
            google.maps.event.addListener(zoneCircle, 'click', (function (zoneCircle) {

              return function () {

                map.panTo(this.position);

              }

            })(zoneCircle));

          }
          else if (coords.length >= 3) {

            for (var k = 0; k < coords.length; k++) {
              recoords = coords[k].split(",");
              pathCoordinates.push(new google.maps.LatLng(parseFloat(recoords[0]), parseFloat(recoords[1])));
            }

            // Construct the polygon.
            polygon = new google.maps.Polygon({
              path: pathCoordinates,
              strokeColor: color,
              strokeOpacity: 0.8,
              strokeWeight: 3,
              fillColor: color,
              fillOpacity: 0.35,
              Company: company,
              Name: name,
              Pos: coords,
              zoneID: zoneID,
              map: map
            });



            pathCoordinates = [];
            polygonCoordinates.push(polygon);

            polygon.setMap(map);

            // Add a listener for the click event.
            google.maps.event.addListener(polygon, 'click', showArrays);

            infoWindow = new google.maps.InfoWindow();


            // Click Zones
            google.maps.event.addListener(polygon, 'click', (function (polygon, i) {

              return function () {

                map.panTo(this.position);

              }

            })(polygon, i));


          } //end of if

        } else {


          var perimeterPOI = zones[i].Perimeter.split(",");
          var latLngPOI = new google.maps.LatLng(parseFloat(perimeterPOI[0]), parseFloat(perimeterPOI[1]));

          //poi = new google.maps.Marker({
          //  map: map,
          //  position: latLngPOI,
          //  draggable: false,
          //  zoneID: zoneID,
          //  icon: imageUrl,
          //  title: name
          //});

          //pois.push(poi);

          markerLabel = new MarkerWithLabel({
            position: latLngPOI,
            draggable: false,
            raiseOnDrag: false,
            map: map,
            icon: imageUrl,
            labelContent: name,
            labelAnchor: new google.maps.Point(40, 0),
            labelClass: "labels", // the CSS class for the label
            labelStyle: { opacity: 0.75 },
            labelInBackground: false
          });

          markerLabels.push(markerLabel);

          poiContent = "<div class='form-group' style='color:#4C4C4C;>" +
            "<div class='col-md-8'><h6 class='map-heading'>" + name + "</h6></div>" +
            "<table id='assetDetails' class='table table-vcenter'>" +
            "<tbody>" +
            "<tr>" + "<td>" +
            "<span data-l11n class='text-bold'>Location:&nbsp;</span>" + location +
            "<br />" +
            "<span data-l11n class='text-bold'>Type:&nbsp;</span>" + type +
            "<br />" +
            "<span class='text-bold'>Coordinates:&nbsp;</span>" + perimeter +
            "</td>" + "</tr>"
          "</tbody>" + "</table>" +
            "</div>";


          setPOILabel(markerLabel);
        }


        //$(function () {

        //  $('.SelectZonesFilter').on('change', function () {

        //    var selected = $(this).find("option:selected").val();


        //    for (var p = 0; p < pois.length; p++) {
        //      poi = pois[p];
        //      if (poi.zoneID == selected || selected.length === 0) {
        //        poi.setVisible(true);
        //        var position = poi.getPosition();
        //        map.setCenter(position);
        //        map.setZoom(18);
        //      }
        //    }
        //    for (var b = 0; b < circleCoordinates1.length; b++) {
        //      circle1 = circleCoordinates1[b];
        //      if (circle1.zoneID == selected || selected.length === 0) {

        //        map.fitBounds(circle1.getBounds());

        //      }
        //    }
        //    for (var j = 0; j < circleCoordinates.length; j++) {
        //      circle = circleCoordinates[j];
        //      if (circle.zoneID == selected || selected.length === 0) {

        //        map.fitBounds(circle.getBounds());

        //      }
        //    }
        //    for (var a = 0; a < polygonCoordinates.length; a++) {

        //      polygon = polygonCoordinates[a];

        //      if (polygon.zoneID == selected || selected.length === 0) {

        //        var bounds = new google.maps.LatLngBounds();
        //        var point = [];

        //        var getPolygon = polygon.Pos;

        //        for (var i = 0; i < polygon.getPath().length; i++) {
        //          getPolygonEx = getPolygon[i].split(",");
        //          point = new google.maps.LatLng(parseFloat(getPolygonEx[0]), parseFloat(getPolygonEx[1]));
        //          bounds.extend(point);
        //        }


        //        map.fitBounds(bounds);
        //      }//end if
        //    }//end for

        //  }); // end of on change

        //}); //end of function

      }
      return zones;
    }

    function deg2rad(deg) {
      return deg * (Math.PI / 180)
    }

    function showArrays(event) {

      // Since this polygon has only one path, we can call getPath()
      // to return the MVCArray of LatLngs.
      var vertices = this.getPath();

      var contentString = "<div class='form-group' style='color:#4C4C4C;>" +
        "<div class='col-md-8'><h6 class='map-heading'>" + this.Name + "</h6></div>" +
        "<table id='assetDetails' class='table table-vcenter'>" +
        "<tbody>" +
        "<tr>" + "<td>" +
        "<span data-l11n class='text-bold'>Company:&nbsp;</span>" + this.Company +
        "<br />" +
        "<span class='text-bold'>Clicked location:&nbsp;</span>" + event.latLng.lat() + ',' + event.latLng.lng() +
        "</td>" + "</tr>"
      "</tbody>" + "</table>" +
        "</div>";

      // Iterate over the vertices.
      //for (var i = 0; i < vertices.getLength() ; i++) {
      //    var xy = vertices.getAt(i);
      //    contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
      //        xy.lng();
      //}

      // Replace the info window's content and position.
      infoWindow.setContent(contentString);
      infoWindow.setPosition(event.latLng);

      infoWindow.open(map);

    }

    function showArrayCircle(event) {

      var contentString = "<div class='form-group' style='color:#4C4C4C;>" +
        "<div class='col-md-8'><h6 class='map-heading'>" + this.Name + "</h6></div>" +
        "<table id='assetDetails' class='table table-vcenter'>" +
        "<tbody>" +
        "<tr>" + "<td>" +
        "<span data-l11n class='text-bold'>Company:&nbsp;</span>" + this.Company +
        "<br />" +
        "<span class='text-bold'>Clicked location:&nbsp;</span>" + event.latLng.lat() + ',' + event.latLng.lng() +
        "</td>" + "</tr>"
      "</tbody>" + "</table>" +
        "</div>";

      // Replace the info window's content and position.
      infoWindow.setContent(contentString);
      infoWindow.setPosition(event.latLng);

      infoWindow.open(map);
    }

    function setPOILabel(markerLabel) {

      var infoBubble = new google.maps.InfoWindow({
        content: poiContent
      });
      infoWindowListLabel.push(infoBubble);

      markerLabel.addListener('click', function () {
        infoBubble.open(markerLabel.get('map'), markerLabel);
      });

    }

    //=====================================DRAWING============================================//

    function clearSelection() {
      if (selectedShape) {
        selectedShape.setEditable(false);
        selectedShape = null;
      }
    }

    function setSelection(shape) {
      clearSelection();
      selectedShape = shape;

      if (shape.type == "rectangle") {

        shape.setEditable(false);
      }

      else {
        shape.setEditable(true);
      }
    }

    function deleteAllShape() {

      for (var i = 0; i < all_overlays.length; i++) {
        all_overlays[i].overlay.setMap(null);
      }
      all_overlays = [];

      for (var i = 0; i < infoWindowList.length; i++) {
        infoWindowList[i].close();
      }

      // Reset the markers array
      infoWindowList = [];

      for (var i = 0; i < recmarkers.length; i++) {
        recmarkers[i].setMap(null);
      }
      recmarkers = [];

      // To show:
      drawingManager.setOptions({
        drawingControl: true
      });

    }

    function saveZone() {

      var checkName = $('#zname').val();

      if (checkName == "") {

        alert('Zone name must not be empty');
      }
      else {

        if (/\s/.test(finalString)) {
          savePoi("Default");
        } else {

          var form = new FormData();
          form.append("email", "anthony_agustin@acecom.com.sg");
          form.append("password", "acecom2015");

          var settings: any = {
            "async": true,
            "crossDomain": true,
            "url": "https://developers.onemap.sg/privateapi/auth/post/getToken",
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
          }

          $.ajax(settings).done(function (response: any) {
            var obj = JSON.parse(response);

            var onemap_api = 'https://developers.onemap.sg/privateapi/commonsvc/revgeocode?location=' + finalString + '&token=' + obj.access_token;
            console.log(onemap_api)
            $.ajax({
              url: onemap_api,
              type: 'GET',
              success: function (data) {
                if (data.GeocodeInfo.length > 0) {
                  //console.log(data);
                  var address_block = '';
                  var address_road = '';
                  var address_building = '';
                  var full_address = '';

                  if (data.GeocodeInfo[0].BLOCK != null || data.GeocodeInfo[0].BLOCK != undefined) {
                    address_block = data.GeocodeInfo[0].BLOCK
                    full_address = address_block + " ";
                  }

                  if (data.GeocodeInfo[0].ROAD != null || data.GeocodeInfo[0].ROAD != undefined) {
                    address_road = data.GeocodeInfo[0].ROAD
                    full_address += address_road + " ";
                  }

                  if (data.GeocodeInfo[0].BUILDINGNAME != null || data.GeocodeInfo[0].BUILDINGNAME != undefined) {
                    if (data.GeocodeInfo[0].BUILDINGNAME != "null") {
                      address_building = data.GeocodeInfo[0].BUILDINGNAME
                      full_address += address_building;
                    }

                  }

                  savePoi(full_address);
                } else {

                  var onemap_api = 'https://developers.onemap.sg/privateapi/commonsvc/revgeocode?location=' + finalString + '&token=' + obj.access_token;
                  console.log(onemap_api)
                  $.ajax({
                    url: onemap_api,
                    type: 'GET',
                    success: function (data) {
                      if (data.GeocodeInfo.length == 0) {
                        console.log('No Address')
                        savePoi('No Address');
                      } else {
                        var address_block = '';
                        var address_road = '';
                        var address_building = '';
                        var full_address = '';

                        if (data.GeocodeInfo[0].BLOCK != null || data.GeocodeInfo[0].BLOCK != undefined) {
                          address_block = data.GeocodeInfo[0].BLOCK
                          full_address = address_block + " ";
                        }

                        if (data.GeocodeInfo[0].ROAD != null || data.GeocodeInfo[0].ROAD != undefined) {
                          address_road = data.GeocodeInfo[0].ROAD
                          full_address += address_road + " ";
                        }

                        if (data.GeocodeInfo[0].BUILDINGNAME != null || data.GeocodeInfo[0].BUILDINGNAME != undefined) {

                          if (data.GeocodeInfo[0].BUILDINGNAME != "null") {
                            address_building = data.GeocodeInfo[0].BUILDINGNAME
                            full_address += address_building;
                          }
                        }

                        savePoi(full_address);

                      }
                    }
                  });
                }
              }
            });

          });

        }
      }

    }

    function savePoi(address) {

      var d = new Date();
      var timestamp = moment.utc(d).local().format("DD MMM YYYY, hh:mm:ss A");
      let obj_zones: any;
      if (Number(sessionStorage.getItem('setSessionstorageValueRoleID')) > 2) {

        obj_zones = {
          ZoneID: 0,
          Name: $('#zname').val(),
          TypeID: $('#getZoneTypes').val(),
          CompanyID: Number(sessionStorage.getItem('setSessionstorageValueUserCompanyID')),
          CreatedDate: timestamp,
          Perimeter: finalString,
          CellIds: '',
          Location: address,
          Created_User: sessionStorage.getItem('setSessionstorageValueUser'),
          Modified_User: sessionStorage.getItem('setSessionstorageValueUser'),
          Color: sessionStorage.getItem('setSessionstorageValueZoneColor')
        };

      } else {

        obj_zones = {
          ZoneID: 0,
          Name: $('#zname').val(),
          TypeID: $('#getZoneTypes').val(),
          CompanyID: sessionStorage.getItem('setSessionstorageValueAssetCompany'),
          CreatedDate: timestamp,
          Perimeter: finalString,
          CellIds: '',
          Location: address,
          Created_UserID: Number(sessionStorage.getItem('setSessionstorageValueUserID')),
          Modified_UserID: Number(sessionStorage.getItem('setSessionstorageValueUserID')),
          Color: sessionStorage.getItem('setSessionstorageValueZoneColor')
        };

      }

      //if (zones.ZoneID == 'undefined' || zones.ZoneID == null || zones.ZoneID == 0) {
      //  $.ajax({
      //    url: 'https://app.track-asia.com/tracksgwebapi/api/zoneinfo',
      //    type: "POST",
      //    data: JSON.stringify(zones),
      //    crossDomain: true,
      //    contentType: 'application/json; charset=utf-8',
      //    xhrFields: {
      //      withCredentials: false
      //    },
      //    permissions: ["https://*.track-asia.com"],
      //    success: function (zones) {
      //      console.log(zones);
      //      //return false;
      //      //window.location.reload(true);
      //      window.location.reload(true);
      //    },
      //  });
      //}

      axios.post(api_post_zones, obj_zones)
        .then(function (response) {
          console.log(response.data);
          window.location.reload(true);
        })
        .catch(function (error) {
          console.log(error);
        });


    }

    function deleteAllPoi() {

      for (var i = 0; i < pois.length; i++) {
        pois[i].setMap(null);
      }
      pois = [];

      //for (var i = 0; i < markerLabels.length; i++) {
      //    markerLabels[i].setMap(null);
      //}
      //markerLabels = [];

      for (var i = 0; i < all_overlays.length; i++) {
        all_overlays[i].overlay.setMap(null);
      }
      all_overlays = [];

      for (var i = 0; i < infoWindowList.length; i++) {
        infoWindowList[i].close();
      }

      // Reset the markers array
      infoWindowList = [];

      // To show:
      drawingManager.setOptions({
        drawingControl: true
      });

    }

    function selectColor(color) {
      selectedColor = color;
      for (var i = 0; i < colors.length; ++i) {
        var currColor = colors[i];
        colorButtons[currColor].style.border = currColor == color ? '2px solid #789' : '2px solid #fff';
      }

      // Retrieves the current options from the drawing manager and replaces the
      // stroke or fill color as appropriate.
      var polylineOptions = drawingManager.get('polylineOptions');
      polylineOptions.strokeColor = color;
      drawingManager.set('polylineOptions', polylineOptions);

      var rectangleOptions = drawingManager.get('rectangleOptions');
      rectangleOptions.fillColor = color;
      drawingManager.set('rectangleOptions', rectangleOptions);

      var circleOptions = drawingManager.get('circleOptions');
      circleOptions.fillColor = color;
      drawingManager.set('circleOptions', circleOptions);

      var polygonOptions = drawingManager.get('polygonOptions');
      polygonOptions.fillColor = color;
      drawingManager.set('polygonOptions', polygonOptions);


      //Set
      sessionStorage.setItem("setSessionstorageValueZoneColor", selectedColor);

    }

    function setSelectedShapeColor(color) {
      if (selectedShape) {
        if (selectedShape.type == google.maps.drawing.OverlayType.POLYLINE) {
          selectedShape.set('strokeColor', color);
        } else {
          selectedShape.set('fillColor', color);
        }
      }
    }

    function makeColorButton(color) {
      var button = document.createElement('span');
      button.className = 'color-button';
      button.style.backgroundColor = color;
      google.maps.event.addDomListener(button, 'click', function () {
        selectColor(color);
        setSelectedShapeColor(color);
      });

      return button;
    }

    function buildColorPalette() {
      var colorPalette = document.getElementById('color-palette');
      for (var i = 0; i < colors.length; ++i) {
        var currColor = colors[i];
        var colorButton = makeColorButton(currColor);
        colorPalette.appendChild(colorButton);
        colorButtons[currColor] = colorButton;
      }
      selectColor(colors[0]);
    }

    //=====================================MARKERS=============================================//

    function setMarkers(callback: any, api_assets: string, route: string) {

      axios.get(api_assets)
        .then(function (response) {
          //console.log(response);
          callback(response.data, route);
        })
        .catch(function (error) {
          console.log(error);
        });

    }

    function updateAssets(data, route) {

      //first start
      var move = 0;
      var idle = 0;
      var stop = 0;
      var down = 0;
      var nogps = 0;
      var nogprs = 0;


      var bounds = new google.maps.LatLngBounds();

      for (var i = 0, length = data.length; i < length; i++) {

        if (data[i]) {

          if (data[i].LastPos == null || data[i].LastPos.Engine == null || data[i].LastPos.PosID == 0 || data[i].LastPos === "") {
            console.log('Data is Null');
            down++;
            continue;
          }

          else {

            var assets = data[i];
            var latLng = new google.maps.LatLng(data[i].LastPos.PosY, data[i].LastPos.PosX);
            var id = data[i].AssetID;
            var tag = data[i].Tag;
            var category = data[i].Category;
            var company = data[i].Company;
            var vechs = data[i].Name;
            var gps = data[i].Gps;
            var gprs = data[i].Gprs;
            var engine = data[i].Engine;
            var battery = data[i].LastPos.Battery;
            var fix = data[i].LastPos.Fix;
            var make = data[i].Make;
            var model = data[i].Model;
            var plate_no = data[i].LicensePlate;
            var address = data[i].LastPos.Location;
            var speed = data[i].LastPos.Speed;
            var course = data[i].LastPos.Course;
            var zone = data[i].LastPos.Zone;
            var speedLimit = data[i].SpeedLimit;
            var tagID = data[i].TagID;
            var mileage = data[i].LastPos.Mileage;
            var assetTimestamp = data[i].LastPos.Timestamp;
            var assetBattery = data[i].LastPos.Battery.toFixed(2);
            var finaldata1 = data[i].Name.match(/.{1,28}/g).join("<br/>");
            var finaldata = finaldata1.substring(0, 18);
            var getXPosition = data[i].LastPos.PosX;
            var getYPosition = data[i].LastPos.PosY;
            var timestamp1: any = moment.utc(assetTimestamp).local().format("DD MMM YYYY");
            var d = new Date();
            var timestamp2: any = moment.utc(d).local().format("DD MMM YYYY");
            timestamp2 = Date.parse(timestamp2);
            timestamp1 = Date.parse(timestamp1);
            var timestamp = moment.utc(assetTimestamp).local().format("D-MMM-YYYY, hh:mm:ss A");
            var elapsedTimestamp = moment.utc(assetTimestamp).local().format();
            var el = getElapsedTime(elapsedTimestamp);

            let vehicleImg: string;
            let markerCategory: string;
            let path: string;
            let scale: any;
            let _iconcolor: string;
            let color: string;
            let icon_style_anchor: any;
            let icon_style_shadow: any;

            if (engine == 'MOVE') {
              color = "#5cb85c";
            }
            else if (engine == 'IDLE') {
              color = "#f0ad4e";
            }
            else if (engine == 'STOP' && timestamp2 > timestamp1) {
              color = "#696969";
            }
            else if (engine == 'STOP') {
              color = "#d9534f";
            }

            // Category image
            switch (category) {
              case "Car":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "car";
                scale = 0.6;
                vehicleImg = "assets/img/car.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Truck":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "truck";
                scale = 0.6;
                vehicleImg = "assets/img/truck.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Van":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "van";
                scale = 0.6;
                vehicleImg = "assets/img/van.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Bus":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "bus";
                scale = 0.6;
                vehicleImg = "assets/img/bus.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Motorcycle":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "motorcycle";
                scale = 0.07;
                vehicleImg = "assets/img/motorcycle.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Recovery Veh":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "truck";
                scale = 0.6;
                vehicleImg = "assets/img/truck.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Lorry":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "truck";
                scale = 0.6;
                vehicleImg = "assets/img/truck.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "10 Footer Lorry":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "truck";
                scale = 0.6;
                vehicleImg = "assets/img/truck.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "14 Footer Lorry":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "truck";
                scale = 0.6;
                vehicleImg = "assets/img/truck.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Ambulance":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "ambulance";
                scale = 0.6;
                vehicleImg = "assets/img/ambulance.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Personnel":
                icon_style_anchor = new google.maps.Point(-4, 24);
                icon_style_shadow = new google.maps.Point(-4, 26);
                _iconcolor = color;
                course = 0;
                scale = 0.06;
                markerCategory = "personnel";
                vehicleImg = "assets/img/personnel.jpg";
                path = 'M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z';
                break;
              case "Mobile":
                icon_style_anchor = new google.maps.Point(-7, 30);
                icon_style_shadow = new google.maps.Point(-7, 32);
                _iconcolor = color;
                course = 0;
                scale = 0.05;
                markerCategory = "mobile";
                vehicleImg = "assets/img/mobile.jpg";
                path = 'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z';
                break;
            }

            let icon: any;
            if (timestamp2 > timestamp1) {
              //down
              icon = {
                path: path,
                scale: scale,
                strokeColor: color,
                strokeWeight: 1,
                strokeOpacity: 1,
                fillOpacity: 1,
                fillColor: _iconcolor,
                offset: '5%',
                rotation: course,
                anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
              }
            }
            else {
              icon = {
                path: path,
                scale: scale,
                strokeColor: color,
                strokeWeight: 1,
                strokeOpacity: 1,
                fillOpacity: 1,
                fillColor: _iconcolor,
                offset: '5%',
                rotation: course,
                anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
              }
            }

            let driverName: string;
            if (assets.Driver.Name == null) {
              driverName = "No Personnel Assigned";
            } else {
              driverName = assets.Driver.Name;
            }

            //Count Status
            if (engine == "MOVE")
              move++;
            else if (engine == "IDLE")
              idle++;
            else if (engine == "STOP" && timestamp2 > timestamp1)
              down++;
            else if (engine == "STOP")
              stop++;

            if (gps < 2)
              nogps++;

            if (gprs == 2)
              nogprs++;

            let assetContent: any = "<div id='assetInfo' class='form-group row' style='padding:0px !important;'>";
            if (plate_no !== "Unknown") assetContent += "<div class='col-md-8'><h6 class='map-heading'>" + finaldata + "</h6></div>";
            else assetContent += "<div class='col-md-8'><h6 class='map-heading'>" + finaldata + "</h6></div>";

            assetContent += "<div class='col-md-4'><p style='text-align:right; padding-right:30px; padding-bottom:0px !important'>"
              + gpsStatus(gps, timestamp)
              + "&nbsp;" + gprsStatus(gprs, timestamp) + "</p></div>";

            assetContent += "<table id='assetDetails' class='table table-vcenter'>" +
              "<tbody>" +
              "<tr>" + "<td colspan='2'>";

            assetContent += "<span class='font-weight-bold'>Address:&nbsp;</span>" + address +
              "<br />" +
              "<span class='font-weight-bold'>Date:&nbsp;</span>" + timestamp +
              "<br />" +
              "<span class='font-weight-bold'>Speed:&nbsp;</span>" + speedFormatter(speed) +
              "<br />" +
              "<span class='font-weight-bold'>Battery:&nbsp;</span>" + batteryFormatter(battery) +
              "<br />" +
              "<span class='font-weight-bold'>GPS Status:&nbsp;</span>" + fix +
              "<br />" +
              "<span class='font-weight-bold'>Zones:&nbsp;</span>" + zone +
              "<br />" +
              "<span class='font-weight-bold'>Last Updated:&nbsp;</span>" + el +
              "<br />" +
              "</td>" +
              "<td colspan='2' class='pl-4'>" +
              "<img class='vehicle-img' src='" + vehicleImg + "'/>" + "<br />";

            if (make !== "Unknown") assetContent += "<span class='font-weight-bold'>Brand:&nbsp;</span>" + make +
              "<br />";
            if (model !== "Unknown") assetContent += "<span class='font-weight-bold'>Model:&nbsp;</span>" + model +
              "<br />";

            assetContent += "</td>" +
              "</tr>" +
              "</tbody>" + "</table>" +
              "</div></div>";


            //===================================================================//

            marker = setInfoBubble({
              map: map,
              position: latLng,
              icon: icon,
              shape: shape,
              category: category,
              cat_img: vehicleImg,
              address: address,
              vechs: vechs,
              tag: tag,
              id: id,
              gps: gps,
              gprs: gprs,
              title: vechs,
              zone: zone,
              battery: battery,
              fix: fix,
              engine: engine,
              speed: speed,
              mileage: mileage,
              timestamp: timestamp,
              course: course,
              color: color,
              getYPosition: getYPosition,
              getXPosition: getXPosition,
              assetBattery: assetBattery,
              content: assetContent,
              driver: driverName,
              elapsed_timestamp: el,
              path: path
            });

            marker.setMap(map);

            StyledIconTypes.BUBBLE = {
              defaults: {
                text: '',
                color: '00ff00',
                fore: '000000',
                starcolor: null
              },
              getURL: function (props) {
                var _url = bu_ + 'd_bubble_text_small_withshadow&chld=bb|';
                _url += props.get('text') + '|';
                _url += props.get('color').replace(/#/, '') + '|';
                _url += props.get('fore').replace(/#/, '');
                return _url;
              },
              getShadowURL: function (props) {
                return bu_ + 'd_bubble_text_small_withshadow&chld=bb|' + props.get('text');
              },
              getAnchor: function (props, width, height) {
                return icon_style_anchor;
              },
              getShadowAnchor: function (props, width, height) {
                return icon_style_shadow;
              },
              getShape: function (props, width, height) {
                var _iconmap: any = {};
                _iconmap.coord = [
                  0, 44,
                  13, 26,
                  13, 6,
                  17, 1,
                  width - 4, 1,
                  width, 6,
                  width, 21,
                  width - 4, 26,
                  21, 26
                ];
                _iconmap.type = 'poly';
                return _iconmap;
              }
            };

            styleMaker = new StyledMarker({
              styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, {
                color: "#458FD2",
                text: vechs,
                fore: "#FFFFFF"
              }),
              position: latLng,
              map: map,
              shadow: 'none'
            });


            if (markers[i] && markers[i].setPosition) {
              $("#assetStatus").empty();

              // To remove the marker from the map
              marker.setMap(null);
              styleMaker.setMap(null);

              markers[i].setPosition(latLng);
              styleMakers[i].setPosition(latLng);
              markers[i].setIcon(icon);

              if (paramtitle == vechs) {
                markers[i].id = id;
                markers[i].content = assetContent;
                markers[i].address = address;
                markers[i].timestamp = timestamp;
                markers[i].gps = gps;
                markers[i].gprs = gprs;
                markers[i].engine = engine;
                markers[i].battery = battery;
                markers[i].fix = fix;
                markers[i].tag = tag;
                markers[i].speed = speed;
                markers[i].cat_img = vehicleImg;
                markers[i].driver = driverName;
                markers[i].elapsed_timestamp = el;


                if ($('#assetInfo').val() != null || $('#assetInfo').val() != undefined) {
                  document.getElementById('assetInfo').innerHTML = assetContent
                }
                //map.panTo(marker.getPosition());
              }
              else {
                markers[i].id = id;
                markers[i].content = assetContent;
                markers[i].address = address;
                markers[i].timestamp = timestamp;
                markers[i].gps = gps;
                markers[i].gprs = gprs;
                markers[i].engine = engine;
                markers[i].battery = battery;
                markers[i].fix = fix;
                markers[i].tag = tag;
                markers[i].speed = speed;
                markers[i].cat_img = vehicleImg;
                markers[i].driver = driverName;
                markers[i].elapsed_timestamp = el;
              }


            } else {

              bounds.extend(latLng);
              markers[i] = marker;
              styleMakers[i] = styleMaker;


            }//end of else


          }//end of else continue     

        }


      }//end of for

      if (firstData) {
        map.setZoom(7);
        map.fitBounds(bounds);
        firstData = false;
      }

      var outputDiv = document.getElementById('assetStatus');

      if (route == "/tracking") {

        if (outputDiv) {
          for (k = 0; k < markers.length; k++) {

            if (markers[k] != undefined || markers[k]) {

              outputDiv.innerHTML += "<tr>"
                + "<td>"
                + "<strong><a class='openTrackingModal' style='color:#458FD2;'>" + markers[k].id + '</a></strong>'
                + "</td>"
                + "<td>"
                + "<strong>" + markers[k].title + '</strong>'
                + "</td>"
                + "<td>"
                + markers[k].address
                + "</td>"
                + "<td>"
                + markers[k].timestamp
                + "</td>"
                + "<td>"
                + markers[k].elapsed_timestamp
                + "</td>"
                + "<td>"
                + speedFormatter(markers[k].speed)
                + "</td>"
                + "<td>"
                + markers[k].driver
                + "</td>"
                + "<td>"
                + batteryFormatter(markers[k].battery)
                + "</td>"
                + "<td>"
                + markers[k].fix
                + "</td>"
                + "<td>"
                + statusFormatter(markers[k].engine, markers[k].timestamp)
                + "</td>"
                + "<td>"
                + gpsStatus(markers[k].gps, markers[k].timestamp)
                + "</td>"
                + "<td>"
                + gprsStatus(markers[k].gprs, markers[k].timestamp)
                + "</td>"
                + "</tr>";
            }

          }

          document.getElementById('total-vehicles').innerHTML = data.length;
          document.getElementById('getMove').innerHTML = move.toString();
          document.getElementById('getIdle').innerHTML = idle.toString();
          document.getElementById('getStop').innerHTML = stop.toString();
          document.getElementById('getDown').innerHTML = down.toString();
          //document.getElementById('getGPS').innerHTML = nogps.toString();
          //document.getElementById('getGPRS').innerHTML = nogprs.toString();
        }

      }

    }

    /*------------------ Open Tracking Modal -----------------*/
    $('#assetStatus').on('click', 'a.openTrackingModal', { spinner: this.spinner }, function (e) {
      e.data.spinner.show();
      $('#trackingModal').modal('show');
      let asset_id = e.target.innerHTML;
      let api_asset = base + uri + 'assetinfo/' + asset_id;
      //$('#trackingFormTitle').text(asset_name);
      var markers_modal = new Array();
      var newMarker: any;
      var latlng = new google.maps.LatLng(1.3521, 103.8198);
      var bounds = new google.maps.LatLngBounds();
      var firstData = true;
      var infoBubble;
      var mapOptions = {
        zoom: 12,
        center: latlng,
        panControl: false,
        zoomControl: true,
        zoomControlOptions:
        {
          position: google.maps.ControlPosition.LEFT_TOP
        },
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        fullscreenControlOptions:
        {
          position: google.maps.ControlPosition.TOP_LEFT
        },
        scaleControl: false,
        overviewMapControl: false
      };

      var map_asset = new google.maps.Map(document.getElementById("map-asset"), mapOptions);

      setModalMarkers(updateModalAssets, api_asset);

      assetMarkerInterval = setInterval(() => {
        setModalMarkers(updateModalAssets, api_asset);
      }, 10000);

      function setModalMarkers(callback: any, api_asset: string) {

        axios.get(api_asset)
          .then(function (response) {
            callback(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      function updateModalAssets(data) {

        if (data) {

          if (data.LastPos == null || data.LastPos.Engine == null || data.LastPos.PosID == 0 || data.LastPos === "") {
            console.log('Data is Null');
          }

          else {

            var latLng = new google.maps.LatLng(data.LastPos.PosY, data.LastPos.PosX);
            var id = data.AssetID;
            var tag = data.Tag;
            var category = data.Category;
            var company = data.Company;
            var vechs = data.Name;
            var gps = data.Gps;
            var gprs = data.Gprs;
            var engine = data.Engine;
            var battery = data.LastPos.Battery;
            var fix = data.LastPos.Fix;
            var make = data.Make;
            var model = data.Model;
            var plate_no = data.LicensePlate;
            var address = data.LastPos.Location;
            var speed = data.LastPos.Speed;
            var course = data.LastPos.Course;
            var zone = data.LastPos.Zone;
            var speedLimit = data.SpeedLimit;
            var tagID = data.TagID;
            var mileage = data.LastPos.Mileage;
            var assetTimestamp = data.LastPos.Timestamp;
            var assetBattery = data.LastPos.Battery.toFixed(2);
            var finaldata1 = data.Name.match(/.{1,28}/g).join("<br/>");
            var finaldata = finaldata1.substring(0, 18);
            var getXPosition = data.LastPos.PosX;
            var getYPosition = data.LastPos.PosY;
            var timestamp1: any = moment.utc(assetTimestamp).local().format("DD MMM YYYY");
            var d = new Date();
            var timestamp2: any = moment.utc(d).local().format("DD MMM YYYY");
            timestamp2 = Date.parse(timestamp2);
            timestamp1 = Date.parse(timestamp1);
            var timestamp = moment.utc(assetTimestamp).local().format("D-MMM-YYYY, hh:mm:ss A");
            var elapsedTimestamp = moment.utc(assetTimestamp).local().format();
            var el = getElapsedTime(elapsedTimestamp);

            let vehicleImg: string;
            let markerCategory: string;
            let path: string;
            let scale: any;
            let _iconcolor: string;
            let color: string;
            let icon_style_anchor: any;
            let icon_style_shadow: any;

            if (engine == 'MOVE') {
              color = "#5cb85c";
            }
            else if (engine == 'IDLE') {
              color = "#f0ad4e";
            }
            else if (engine == 'STOP' && timestamp2 > timestamp1) {
              color = "#696969";
            }
            else if (engine == 'STOP') {
              color = "#d9534f";
            }

            // Category image
            switch (category) {
              case "Car":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                scale = 0.6;
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                markerCategory = "car";
                vehicleImg = "assets/img/car.jpg";
                break;
              case "Truck":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                scale = 0.6;
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                markerCategory = "truck";
                vehicleImg = "assets/img/truck.jpg";
                break;
              case "Van":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                scale = 0.6;
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                markerCategory = "van";
                vehicleImg = "assets/img/van.jpg";
                break;
              case "Bus":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                scale = 0.6;
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                markerCategory = "bus";
                vehicleImg = "assets/img/bus.jpg";
                break;
              case "Motorcycle":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                scale = 0.6;
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                markerCategory = "motorcycle";
                vehicleImg = "assets/img/motorcycle.jpg";
                break;
              case "Recovery Veh":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                scale = 0.6;
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                markerCategory = "truck";
                vehicleImg = "assets/img/truck.jpg";
                break;
              case "Lorry":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                scale = 0.6;
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                markerCategory = "truck";
                vehicleImg = "assets/img/truck.jpg";
                break;
              case "10 Footer Lorry":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                scale = 0.6;
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                markerCategory = "truck";
                vehicleImg = "assets/img/truck.jpg";
                break;
              case "14 Footer Lorry":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                scale = 0.6;
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                markerCategory = "truck";
                vehicleImg = "assets/img/truck.jpg";
                break;
              case "Ambulance":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                scale = 0.6;
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                markerCategory = "ambulance";
                vehicleImg = "assets/img/ambulance.jpg";
                break;
              case "Personnel":
                icon_style_anchor = new google.maps.Point(-4, 24);
                icon_style_shadow = new google.maps.Point(-4, 26);
                _iconcolor = color;
                course = 0;
                scale = 0.06;
                markerCategory = "personnel";
                vehicleImg = "assets/img/personnel.jpg";
                path = 'M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z';
                break;
              case "Mobile":
                icon_style_anchor = new google.maps.Point(-7, 30);
                icon_style_shadow = new google.maps.Point(-7, 32);
                _iconcolor = color;
                course = 0;
                scale = 0.05;
                markerCategory = "mobile";
                vehicleImg = "assets/img/mobile.jpg";
                path = 'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z';
                break;
            }


            let icon: any;
            if (timestamp2 > timestamp1) {
              //down
              icon = {
                path: path,
                scale: scale,
                strokeColor: color,
                strokeWeight: 1,
                strokeOpacity: 1,
                fillOpacity: 1,
                fillColor: _iconcolor,
                offset: '5%',
                rotation: course,
                anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
              }
            }
            else {

              icon = {
                path: path,
                scale: scale,
                strokeColor: color,
                strokeWeight: 1,
                strokeOpacity: 1,
                fillOpacity: 1,
                fillColor: _iconcolor,
                offset: '5%',
                rotation: course,
                anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
              }
            }

            let driverName: string;
            if (data.Driver.Name == null) {
              driverName = "No Driver Assigned";
            } else {
              driverName = data.Driver.Name;
            }

            let assetContent: any = "<div id='assetInfo' class='form-group row' style='padding:0px !important;'>";
            if (plate_no !== "Unknown") assetContent += "<div class='col-md-8'><h6 class='map-heading'>" + finaldata + "</h6></div>";
            else assetContent += "<div class='col-md-8'><h6 class='map-heading'>" + finaldata + "</h6></div>";

            assetContent += "<div class='col-md-4'><p style='text-align:right; padding-right:30px; padding-bottom:0px !important'>"
              + gpsStatus(gps, timestamp)
              + "&nbsp;" + gprsStatus(gprs, timestamp) + "</p></div>";

            assetContent += "<table id='assetDetails' class='table table-vcenter'>" +
              "<tbody>" +
              "<tr>" + "<td colspan='2'>";

            assetContent += "<span class='font-weight-bold'>Address:&nbsp;</span>" + address +
              "<br />" +
              "<span class='font-weight-bold'>Date:&nbsp;</span>" + timestamp +
              "<br />" +
              "<span class='font-weight-bold'>Speed:&nbsp;</span>" + speedFormatter(speed) +
              "<br />" +
              "<span class='font-weight-bold'>Battery:&nbsp;</span>" + batteryFormatter(battery) +
              "<br />" +
              "<span class='font-weight-bold'>GPS Status:&nbsp;</span>" + fix +
              "<br />" +
              "<span class='font-weight-bold'>Zones:&nbsp;</span>" + zone +
              "<br />" +
              "<span class='font-weight-bold'>Last Updated:&nbsp;</span>" + el +
              "<br />" +
              "</td>" +
              "<td colspan='2' class='pl-4'>" +
              "<img class='vehicle-img' src='" + vehicleImg + "'/>" + "<br />";

            if (make !== "Unknown") assetContent += "<span class='font-weight-bold'>Brand:&nbsp;</span>" + make +
              "<br />";
            if (model !== "Unknown") assetContent += "<span class='font-weight-bold'>Model:&nbsp;</span>" + model +
              "<br />";

            assetContent += "</td>" +
              "</tr>" +
              "</tbody>" + "</table>" +
              "</div></div>";


            //===================================================================//

            newMarker = new google.maps.Marker({
              id: id,
              map: map_asset,
              position: latLng,
              title: vechs,
              category: category,
              address: address,
              timestamp: timestamp,
              vechs: vechs,
              gps: gps,
              gprs: gprs,
              zone: zone,
              engine: engine,
              speed: speed,
              battery: battery,
              fix: fix,
              driver: driverName,
              icon: icon,
              shape: shape,
              content: assetContent,
              tag: tag,
              cat_img: vehicleImg,
              elapsed_timestamp: el
            });


            newMarker.setMap(map_asset);

            if (newMarker.content) {

              google.maps.event.addListener(newMarker, 'click', function () {

                infoBubble = this.getMap().newMarker = new google.maps.InfoWindow({
                  zIndex: 999999
                });

                this.getMap().newMarker.setContent(this.content);
                this.getMap().newMarker.open(this.getMap(), this);
                this.getMap().setCenter(this.position);
                map_asset.panTo(this.getPosition());

              });

              infoBubble = newMarker.getMap().newMarker = new google.maps.InfoWindow({
                zIndex: 999999
              });

              newMarker.getMap().newMarker.setContent(newMarker.content);
              newMarker.getMap().newMarker.open(newMarker.getMap(), newMarker);
              newMarker.getMap().setCenter(newMarker.position);
              map_asset.panTo(newMarker.getPosition());
            }

            if (markers_modal[0] && markers_modal[0].setPosition) {

              newMarker.setMap(null);
              markers_modal[0].setPosition(latLng);
              markers_modal[0].setIcon(icon);
              markers_modal[0].id = id;
              markers_modal[0].content = assetContent;
              markers_modal[0].address = address;
              markers_modal[0].timestamp = timestamp;
              markers_modal[0].gps = gps;
              markers_modal[0].gprs = gprs;
              markers_modal[0].engine = engine;
              markers_modal[0].battery = battery;
              markers_modal[0].fix = fix;
              markers_modal[0].tag = tag;
              markers_modal[0].speed = speed;
              markers_modal[0].cat_img = vehicleImg;
              markers[0].driver = driverName;
              markers_modal[0].elapsed_timestamp = el;

            } else {

              bounds.extend(latLng);
              map_asset.setZoom(7);
              markers_modal[0] = newMarker;

            }

            if (firstData) {
              map_asset.setZoom(7);
              map_asset.fitBounds(bounds);
              firstData = false;
              $('#trackingFormTitle').text(vechs);
            }

          }//end of else continue     

        }

      }

      e.data.spinner.hide();
    });
    /*-------------------------------------------------------*/
    function findMarker(pt: any) {
      openmarker = [];
      for (var i = 0; i < markers.length; i++) {
        openmarker.push(markers[i]);
      }

      return openmarker.splice(0);
    }

    function setInfoBubble(param: any) {

      var newMarker = new google.maps.Marker({
        id: param.id,
        map: param.map,
        position: param.position,
        title: param.title,
        category: param.category,
        address: param.address,
        timestamp: param.timestamp,
        vechs: param.vechs,
        gps: param.gps,
        gprs: param.gprs,
        zone: param.zone,
        engine: param.engine,
        speed: param.speed,
        battery: param.battery,
        fix: param.fix,
        driver: param.driver,
        icon: param.icon,
        shape: param.shape,
        content: param.content,
        tag: param.tag,
        cat_img: param.cat_img,
        elapsed_timestamp: param.elapsed_timestamp
      });

      if (param.content) {

        google.maps.event.addListener(newMarker, 'click', function () {

          for (var i = 0; i < infoBoxList.length; i++) {

            infoBoxList[i].close();
          }

          // Reset the markers array
          infoBoxList = [];

          // this -> the marker on which the onclick event is being attached
          if (!this.getMap().newMarker) {
            infoBubble = this.getMap().newMarker = new google.maps.InfoWindow({
              zIndex: 999999
            });
            infoBoxList.push(infoBubble);
            google.maps.event.addListener(infoBubble, 'domready', function () {
              $("#submitdest").click(() => searchdestination(param.address));
            });

          }

          let content: any = this.content;

          content += "<div class='form-group row col-md-12 form-inline' id='assetRoutes'>" +
            "<div class='col-md-2'>" +
            "<span class='text-bold'>Route Info:&nbsp;</span>" +
            "</div>" +
            "<div class='col-md-6' style='background-color:black !important;'>" +
            '<input id="destination" type="text" class="form-control form-control-sm" placeholder="Enter Destination">' +
            "</div>" +
            "<div class='col-md-3' style='margin-left:10px;'>" +
            '<button id="submitdest" class="btn btn-block btn-primary">Search</button>' +
            "</div>" +
            "</div>";

          this.getMap().newMarker.setContent(content);
          this.getMap().newMarker.open(this.getMap(), this);
          this.getMap().setCenter(this.position);
          paramtitle = param.title;

        });
      }


      return newMarker;
    }

    function searchdestination(address: any) {

      destto = $('#destination').val();

      URLDest = "https://www.google.com/maps/dir/" + address + "/" + destto;
      var str = new String($('#destination').val());
      let destination: number = str.length;
      if (destination == 0) {
        alert("Your Destination is empty!");
      } else {
        window.open(URLDest, 'newwindow');
      }
    }

    function Layers() {

      TrafficLayer();
      //TransitLayer();
      //BicycleLayer();

      map.mapTypes.set("Mapbox", new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {

          var normalizedCoord = getNormalizedCoord(coord, zoom);
          if (!normalizedCoord) {
            return null;
          }
          var bound = Math.pow(2, zoom);
          //https://{s}-tiles.locationiq.com/v2/obk-en/r/{z}/{x}/{y}.png?key={Your_Access_Token}
          return "https://tiles.locationiq.com/v2/obk/r/" + zoom + "/" + normalizedCoord.x + "/" + normalizedCoord.y + ".png?key=ece7de2808b2c0";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "Mapbox",
        alt: "Mapbox GL",
        maxZoom: 20

      }));

      map.mapTypes.set("OSM", new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {

          var normalizedCoord = getNormalizedCoord(coord, zoom);
          if (!normalizedCoord) {
            return null;
          }
          var bound = Math.pow(2, zoom);

          return "https://tile.openstreetmap.org/" + zoom + "/" + normalizedCoord.x + "/" + normalizedCoord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "OSM",
        alt: "Open Street Map",
        maxZoom: 20

      }));

      map.mapTypes.set("PublicTransport", new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {

          var normalizedCoord = getNormalizedCoord(coord, zoom);
          if (!normalizedCoord) {
            return null;
          }
          var bound = Math.pow(2, zoom);

          return "https://tile.memomaps.de/tilegen/" + zoom + "/" + normalizedCoord.x + "/" + normalizedCoord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "Public", //Public
        alt: "Show Public Transport", //Show Public Transport
        maxZoom: 20

      }));

      map.mapTypes.set("OneMap", new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {

          var normalizedCoord = getNormalizedCoord(coord, zoom);
          if (!normalizedCoord) {
            return null;
          }
          var bound = Math.pow(2, zoom);
          return "https://maps-a.onemap.sg/v3/Night/" + zoom + "/" + normalizedCoord.x + "/" + normalizedCoord.y + ".png";
          //return "https://maps-a.onemap.sg/v3/Default/" + zoom + "/" + normalizedCoord.x + "/" + normalizedCoord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "One Map",
        alt: "One Map",
        maxZoom: 20

      }));



      //End
      /*=================================================*/

    }

    function TrafficLayer() {

      //Traffic Layer - On
      //Start
      /*=================================================*/
      var controlDiv = document.createElement('DIV');
      $(controlDiv).addClass('gmap-control-container')
        .addClass('gmnoprint');

      var controlUI = document.createElement('DIV');
      $(controlUI).addClass('gmap-control');
      $(controlUI).text('Traffic'); //Traffic
      $(controlDiv).append(controlUI);

      var legend = '<ul>'
        + '<li><span style="background-color: #30ac3e">&nbsp;&nbsp;</span><span style="color: #30ac3e"> &gt; Smooth Traffic</span></li>'
        + '<li><span style="background-color: #ffcf00">&nbsp;&nbsp;</span><span style="color: #ffcf00"> Slow Moving Traffic</span></li>'
        + '<li><span style="background-color: #ff0000">&nbsp;&nbsp;</span><span style="color: #ff0000"> &lt; Heavy Traffic</span></li>'
        + '<li><span style="background-color: #c0c0c0">&nbsp;&nbsp;</span><span style="color: #c0c0c0"> No data available</span></li>'
        + '</ul>';

      var controlLegend = document.createElement('DIV');
      $(controlLegend).addClass('gmap-control-legend');
      $(controlLegend).html(legend);
      $(controlLegend).hide();
      $(controlDiv).append(controlLegend);

      // Set hover toggle event
      $(controlUI)
        .mouseenter(function () {
          $(controlLegend).show();
        })
        .mouseleave(function () {
          $(controlLegend).hide();
        });

      var trafficLayer = new google.maps.TrafficLayer();

      google.maps.event.addDomListener(controlUI, 'click', function () {
        if (typeof trafficLayer.getMap() == 'undefined' || trafficLayer.getMap() === null) {
          $(controlUI).addClass('gmap-control-active');
          trafficLayer.setMap(map);
        } else {
          trafficLayer.setMap(null);
          $(controlUI).removeClass('gmap-control-active');
        }
      });

      map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlDiv);

      //Traffic Layer - On
      //End
      /*=================================================*/

    }

    function gpsStatus(gps, timestamp) {

      var d = new Date();
      var timestamp2 = moment.utc(d).local().format("D-MMM-YYYY");
      var dateEntered = moment(timestamp, 'D-MMM-YYYY').format('D-MMM-YYYY');

      var labelColor;
      if (timestamp2 > dateEntered) {
        labelColor = "down";
      }
      else if (gps >= 2) {
        labelColor = "move";
      }
      else if (gps < 2 && timestamp2 == dateEntered) {
        labelColor = "stop";
      } else {
        labelColor = "down";
      }


      return "<i class='fa fa-map-marker " + labelColor + "' title='GPS'></i>";
    }

    function gprsStatus(gprs, timestamp) {

      var d = new Date();
      var timestamp2 = moment.utc(d).local().format("D-MMM-YYYY");
      var dateEntered = moment(timestamp, 'D-MMM-YYYY').format('D-MMM-YYYY');

      var labelColor;
      if (timestamp2 > dateEntered) {
        labelColor = "down";
      }
      else if (gprs == 0) {
        labelColor = "move";

      } else if (gprs == 1) {
        labelColor = "idle";
      }
      else if (gprs == 2 && timestamp2 == dateEntered) {
        labelColor = "stop";
      } else {
        labelColor = "down";
      }

      return "<i class='fa fa-signal " + labelColor + "' title='3G'></i>";
    }

    function convertKmPerHour(value) {

      //Speed Formula
      if (value < 20) {
        var convertKmPerHour = value * 3.6;
      }
      else {
        var convertKmPerHour = value * 3.6 / 2;
      }

      var roundoff = Math.round(convertKmPerHour * 100) / 100;

      return roundoff + ' Km/h';
    }

    function speedFormatter(value) {

      var roundoff = Math.round(value * 100) / 100;

      return roundoff + ' km/h';
    }

    function batteryFormatter(value) {

      var roundoff = Math.round(value * 100) / 100;

      return roundoff + ' %';
    }

    function getElapsedTime(timestamp) {

      var now = moment().format();
      var diff: any = moment.duration(moment(now).diff(moment(timestamp)));
      var days = parseInt(diff.asDays()); //84
      var hours = parseInt(diff.asHours()); //2039 hours, but it gives total hours in given miliseconds which is not expacted.
      hours = hours - days * 24;  // 23 hours
      var minutes = parseInt(diff.asMinutes()); //122360 minutes,but it gives total minutes in given miliseconds which is not expacted.
      minutes = minutes - (days * 24 * 60 + hours * 60); //20 minutes.
      var ms = "";

      if (days == 0 && hours == 0 && minutes == 0) {
        ms = "a moment ago";
      } else if (days == 0) {
        ms = hours + " hours " + minutes + " minutes ago";
      } else {
        if (days == 1) {
          ms = days + " day " + hours + " hours " + minutes + " minutes ago";
        } else {
          ms = days + " days " + hours + " hours " + minutes + " minutes ago";
        }

      }

      return ms;
    }

    function statusFormatter(val, timestamp) {
      var text;
      var d = new Date();
      var timestamp2 = moment.utc(d).local().format("D-MMM-YYYY");
      var dateEntered = moment(timestamp, 'D-MMM-YYYY').format('D-MMM-YYYY');

      var labelColor;
      if (timestamp2 > dateEntered) {
        labelColor = "down";
        text = "DOWN";
      }
      else if (val == "MOVE") {
        labelColor = "move";
        text = "MOVE";
      }
      else if (val == "IDLE") {
        labelColor = "idle";
        text = "IDLE";
      }
      else if (val == "STOP" && timestamp2 == dateEntered) {
        labelColor = "stop";
        text = "STOP";
      } else {
        labelColor = "down";
        text = "DOWN";
      }

      return "<span style='padding: 4px; color:white;' class='" + labelColor + "'>" + text + "</span>";
    }

    function ClearResellerFilter() {

      // Loop through markers and set map to null for each
      for (var i = 0; i < markers.length; i++) {
        if (markers[i]) markers[i].setMap(null);
      }

      // Reset the markers array
      markers = [];

      for (var i = 0; i < styleMakers.length; i++) {
        if (styleMakers[i]) styleMakers[i].setMap(null);
      }
      styleMakers = [];

      for (var i = 0; i < infoBoxList.length; i++) {

        if (infoBoxList[i]) infoBoxList[i].close();
      }

      // Reset the markers array
      infoBoxList = [];

    }

    function ClearZoneFilter() {

      for (var i = 0; i < polygonCoordinates.length; i++) {
        polygonCoordinates[i].setMap(null);
      }

      for (var i = 0; i < circleCoordinates.length; i++) {
        circleCoordinates[i].setMap(null);
      }

      for (var i = 0; i < pois.length; i++) {
        pois[i].setMap(null);
      }
      pois = [];

      for (var i = 0; i < infoWindowList.length; i++) {
        infoWindowList[i].close();
      }
      infoWindowList = [];

      for (var i = 0; i < markerLabels.length; i++) {
        markerLabels[i].setMap(null);
      }
      markerLabels = [];

      for (var i = 0; i < all_overlays.length; i++) {
        all_overlays[i].overlay.setMap(null);
      }
      all_overlays = [];

      for (var i = 0; i < recmarkers.length; i++) {
        recmarkers[i].setMap(null);
      }
      recmarkers = [];

      // To show:
      drawingManager.setOptions({
        drawingControl: true
      });

    }

    //=====================================OnChange==========================================//

    $('.SelectResellerFilter').on('change', function () {
      clearInterval(assetMarkerInterval);
      ClearResellerFilter();
      ClearZoneFilter();
    });

    $('.SelectCompanyFilter').change({ route: this.route }, function (event) {

      clearInterval(assetMarkerInterval);
      ClearResellerFilter();
      ClearZoneFilter();
      //get new api
      let api_zones_filter = getZonesFilter(role_id, base, uri, reseller_id);
      let api_assets_filter = getAssetsFilter(role_id, base, uri, user_id, reseller_id);
      //recreate
      setZones(handleZones, api_zones_filter);
      //resume
      setMarkers(updateAssets, api_assets_filter, event.data.route);
      assetMarkerInterval = setInterval(() => {
        setMarkers(updateAssets, api_assets_filter, event.data.route);
      }, 10000);
    });

    $('.SelectAssetFilter').change({ router: this.router }, function (event) {

      var selected = $(this).find("option:selected").val();

  
      for (k = 0; k < markers.length; k++) {
        marker = markers[k];

        if (markers[k]) {
          // If is same assets or assets not picked
          if (marker.id == selected) {
            google.maps.event.trigger(markers[k], "click");
          }
        }


      }

    }); // end of on change


    //====================================GET API WITH PARAM=================================//

    function getZonesFilter(role_id: Number, base: string, uri: string, reseller_id: Number) {

      let url: string;
      if (role_id == 1) {
        url = base + uri + 'zoneinfo' + '?ResellerID=' + $('#load-reseller').val() + '&CompanyID=' + $('#load-company').val();
      } else if (role_id == 2) {

        url = base + uri + 'zoneinfo' + '?ResellerID=' + reseller_id + '&CompanyID=' + $('#load-company').val();

      } else if (role_id >= 3) {

        url = base + uri + 'zoneinfo' + '?ResellerID=' + reseller_id + '&CompanyID=' + $('#load-company').val();
      }
      return url;
    }

    function getAssetsFilter(role_id: Number, base: string, uri: string, user_id: Number, reseller_id: Number) {

      let url: string;
      if (role_id == 1) {
        url = base + uri + 'assetinfo' + '?UserID=' + '&ResellerID=' + $('#load-reseller').val() + '&CompanyID=' + $('#load-company').val();
      } else if (role_id == 2) {

        url = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + $('#load-company').val();

      } else if (role_id >= 3) {

        url = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + $('#load-company').val();
      }
      return url;
    }

    //==================================================//

    function getNormalizedCoord(coord, zoom) {
      var y = coord.y;
      var x = coord.x;
      // tile range in one direction range is dependent on zoom level
      // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
      var tileRange = 1 << zoom;
      // don't repeat across y-axis (vertically)
      if (y < 0 || y >= tileRange) {
        return null;
      }
      // repeat across x-axis
      if (x < 0 || x >= tileRange) {
        x = (x % tileRange + tileRange) % tileRange;
      }
      return {
        x: x,
        y: y
      };
    }



    //====================================END===============================================//
    this.spinner.hide();
    //google.maps.event.addDomListener(window, 'load', this.ngOnInit);
  } //end of ngOnInit

}
