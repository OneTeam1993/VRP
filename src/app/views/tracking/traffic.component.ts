import { Component, SecurityContext, ViewEncapsulation, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import * as moment from 'moment';
//import 'moment/locale/en-gb';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import axios from "axios";
declare var $: any;
declare const google: any;

@Component({
  templateUrl: 'traffic.component.html',
  styleUrls: ["./traffic.component.css"],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class TrafficComponent implements OnInit  {

  route: string;

  slides: any[] = [];
 _slides: any[] = [];

  constructor(private _constant: ConstantsService, location: Location, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (location.path() != "") {
        this.route = location.path();
      }
    });
  }

  ngOnInit(): void {

    let base = this._constant.baseAppUrl;
    let uri = this._constant.uri_track;
    let user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
    let reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
    let company_id = Number(sessionStorage.getItem('setSessionstorageValueCompanyID'));
    let role_id = this._constant.getSessionstorageValueRoleID;
    let traffic_api = this._constant.trafficApi;
    let traffic_incident_api = this._constant.traffic_incidentApi;

    //Filter Dropdown
    $('#_reports').hide();
    if (role_id >= 3) {
      $('#_reseller').hide();
    }
    if (this.route == '/reports') $('#_reports').show();
    else $('#_reports').hide();

    var map, marker, paramtitle, infoBubble;
    let infoBoxList: any = [];
    var markers = new Array();
    var firstData = true;
    var randMarkers = [];
    var _randMarkers = [];

    var shape = {
      coord: [16, 0, 18, 1, 21, 2, 24, 3, 26, 4, 27, 5, 28, 6, 29, 7, 29, 8, 29, 9, 29, 10, 29, 11, 29, 12, 29, 13, 29, 14, 29, 15, 29, 16, 29, 17, 29, 18, 29, 19, 29, 20, 29, 21, 29, 22, 29, 23, 29, 24, 29, 25, 29, 26, 29, 27, 29, 28, 28, 29, 3, 29, 2, 28, 2, 27, 1, 26, 1, 25, 1, 24, 0, 23, 0, 22, 0, 21, 0, 20, 0, 19, 0, 18, 0, 17, 0, 16, 0, 15, 0, 14, 0, 13, 0, 12, 0, 11, 0, 10, 0, 9, 0, 8, 0, 7, 1, 6, 2, 5, 2, 4, 3, 3, 5, 2, 6, 1, 8, 0, 16, 0],
      type: 'poly'
    };

    //================================INIT==================================//
    var latlng = new google.maps.LatLng(1.3521, 103.8198);
    var trafficmapOptions = {
      zoom: 12,
      center: latlng,
      panControl: false,
      zoomControl: false,
      zoomControlOptions:
      {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      mapTypeControl: false,
      //mapTypeId: google.maps.MapTypeId.SATELLITE,
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

    map = new google.maps.Map(document.getElementById("traffic-map"), trafficmapOptions);

    setTrafficMarkers(updateTraffic, traffic_api, this.route, this.slides, this._slides);
    //setTrafficAlerts(updateTrafficAlert, traffic_incident_api, this.route);

    google.maps.event.addListener(map, 'mousemove', function (event) {
      document.getElementById('coordinates-panel').innerHTML =
        event.latLng.lat() + ', ' + event.latLng.lng();
    });

    //================================AUTOREFRESH========================================//

    setInterval(() => {
      setTrafficMarkers(updateTraffic, traffic_api, this.route, this.slides, this._slides);
    }, 30000);

    //=====================================Traffic Map=============================================//

    function setTrafficMarkers(callback: any, traffic_api: string, route: string, slides: any, _slides: any) {

      axios.get(traffic_api)
        .then(function (response) {
          //console.log(response);
          callback(response.data, route, slides, _slides);

        })
        .catch(function (error) {
          console.log(error);
        });

    }

    function updateTraffic(data, route, slides: any, _slides: any) {

      var traffic = data.items[0];
      var _timestamp = traffic.timestamp;
      var bounds = new google.maps.LatLngBounds();
      if (data.api_info.status == "healthy") {

        var _cameras = traffic.cameras;
        for (var k = 0, length = _cameras.length; k < length; k++) {
          var camera_id = _cameras[k].camera_id;
          var image = _cameras[k].image;
          var trafficTimestamp = _cameras[k].timestamp;
          var timestamp = moment.utc(trafficTimestamp).local().format("D-MMM-YYYY, hh:mm:ss A");
          var latitude = _cameras[k].location.latitude;
          var longitude = _cameras[k].location.longitude;
          var latLng = new google.maps.LatLng(latitude, longitude);
          var elapsedTimestamp = moment.utc(trafficTimestamp).local().format();
          var el = getElapsedTime(elapsedTimestamp);
          var imageUrl = 'https://chart.apis.google.com/chart?cht=mm&chs=24x32&' + 'chco=FFFFFF,63C2DE&ext=.png';

          let content: any = "<div id='trafficInfo' class='form-group row' style='padding:0px !important;'>";
          content += "<div class='col-md-8'><h6>Camera ID: " + camera_id + "</h6></div>";
          content += "<table class='table table-vcenter'>" +
            "<tbody>" +
            "<tr>" + "<td colspan='2'>";
          content += "<span class='font-weight-bold'>Latitude:&nbsp;</span>" + latitude +
            "<br />" +
            "<span class='font-weight-bold'>Longtitude:&nbsp;</span>" + longitude +
            "<br />" +"<span class='font-weight-bold'>Date:&nbsp;</span>" + timestamp +
            "<br />" +
            "<span class='font-weight-bold'>Last Updated:&nbsp;</span>" + el +
            "<br />" +
            "</td>" +
            "<td colspan='2' class='pl-4'>" +
            "<img class='traffic-img' src='" + image + "'/>" + "<br />";
            content += "</td>" +
            "</tr>" +
            "</tbody>" + "</table>" +
            "</div></div>";

          marker = setInfoBubble({
            icon: imageUrl,
            map: map,
            position: latLng,
            title: camera_id,
            shape: shape,
            camera_id: camera_id,
            image: image,
            timestamp: timestamp,
            elapsed_timestamp: el,
            latitude: latitude,
            longitude: longitude,
            content: content
          });

          marker.setMap(map);

          if (markers[k] && markers[k].setPosition) {
            $("#trafficStatus").empty();
            randMarkers = [];
            _randMarkers = [];
            slides = [];
            // To remove the marker from the map
            marker.setMap(null);
        
            if (paramtitle == camera_id) {
              markers[k].setPosition(latLng);
              markers[k].setIcon(imageUrl);
              markers[k].id = camera_id;
              markers[k].content = content;
              markers[k].timestamp = timestamp;
              markers[k].image = image;
              markers[k].elapsed_timestamp = el;
              markers[k].latitude = latitude;
              markers[k].longitude = longitude;

              if ($('#trafficInfo').val() != null || $('#trafficInfo').val() != undefined) {
                document.getElementById('trafficInfo').innerHTML = content
                map.panTo(marker.getPosition());
              }
        
            }
            else {
              markers[k].id = camera_id;
              markers[k].content = content;
              markers[k].timestamp = timestamp;
              markers[k].image = image;
              markers[k].elapsed_timestamp = el;
              markers[k].latitude = latitude;
              markers[k].longitude = longitude;
            }


          } else {
            bounds.extend(latLng);
            markers[k] = marker;

          }//end of else

        }//end of for

        if (firstData) {
          map.setZoom(7);
          map.fitBounds(bounds);
          firstData = false;
        }

        if (route == "/tracking/traffic") {
          do {          
            randMarkers[randMarkers.length] = markers.splice(
              Math.floor(Math.random() * markers.length)
              , 1)[0];
          } while (randMarkers.length < 4);

          for (var n = 0; n < randMarkers.length; n++) {
            if (randMarkers[n]) {
              slides.push({
                image: randMarkers[n].image,
                latitude: randMarkers[n].latitude,
                longitude: randMarkers[n].longitude,
                title: randMarkers[n].title
              });
            }
          }

          do {
            _randMarkers[_randMarkers.length] = markers.splice(
              Math.floor(Math.random() * markers.length)
              , 1)[0];
          } while (_randMarkers.length < 4);

          for (var g = 0; g < _randMarkers.length; g++) {
            if (_randMarkers[g]) {
              _slides.push({
                image: _randMarkers[g].image,
                latitude: _randMarkers[g].latitude,
                longitude: _randMarkers[g].longitude,
                title: _randMarkers[g].title
              });
            }
          }

          document.getElementById('total-cameras').innerHTML = _cameras.length;
        }
      }
    }

    function setInfoBubble(param: any) {

      var newMarker = new google.maps.Marker({
        icon: param.icon,
        camera_id: param.camera_id,
        map: param.map,
        position: param.position,
        title: param.title,
        content: param.content,
        image: param.image,
        shape: param.shape,
        latitude: param.latitude,
        longitude: param.longitude,
        timestamp: param.timestamp,
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
          }

          this.getMap().newMarker.setContent(this.content);
          this.getMap().newMarker.open(this.getMap(), this);
          this.getMap().setCenter(this.position);
          paramtitle = param.title;

        });
      }

      return newMarker;
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

    //=====================================Traffic Alerts=============================================//

    function setTrafficAlerts(callback: any, traffic_api: string, route: string) {

      $.ajax({
        url: traffic_api,
        type: 'GET',
        datatype: 'json',
        success: function () { alert("Success"); },
        error: function () { alert('Failed!'); },
        headers: {
          'AccountKey': '81mllMnBSuaCHobzZ61TXQ==',
          'accept': 'application/json'
        },
      });
    }

    function updateTrafficAlert(data, route) {

      var traffic = data.value;
      console.log(JSON.stringify(traffic))
      alert(JSON.stringify(traffic))
      for (var k = 0, length = traffic.length; k < length; k++) {

      }//end of for


    }

  }
}
