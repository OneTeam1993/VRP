import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import { NgxSpinnerService } from "ngx-spinner";
import axios from "axios";
declare var $: any;
declare const google: any;


@Component({
  templateUrl: 'weather.component.html',
  styleUrls: ["./weather.component.css"],
  encapsulation: ViewEncapsulation.None
})

export class WeatherComponent implements OnInit {

  route: string;
  weathers: any[] = [];
  weather_label: string;

  constructor(private _constant: ConstantsService, location: Location, private router: Router, private spinner: NgxSpinnerService) {
    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
      }

    });
  }


  ngOnInit(): void {
    this.spinner.show();
    let base = this._constant.baseAppUrl;
    let uri = this._constant.uri_track;
    let user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
    let reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
    let company_id = Number(sessionStorage.getItem('setSessionstorageValueUserCompanyID'));
    let role_id = this._constant.getSessionstorageValueRoleID;
    let weather_api = this._constant.weatherApi;

    //================================INIT==================================//

    var latlng = new google.maps.LatLng(1.3521, 103.8198);
    var infowindow = new google.maps.InfoWindow();
    var weather_map;
    var geoJSON;
    var request;
    var gettingData = false;
    var openWeatherMapKey = "674aa5391eb5a469b7ef171bea64cbff"

    var weatherArray = ["clouds_new", "precipitation", "wind_new", "temp_new", "pressure_new"];
    var randomItem = weatherArray[Math.floor(Math.random() * weatherArray.length)];

    var toUppCase;

    switch (randomItem) {
      case "clouds_new":
        toUppCase = "Clouds";
        break;
      case "precipitation":
        toUppCase = "Precipitation";
        break;
      case "wind_new":
        toUppCase = "Wind";
        break;
      case "temp_new":
        toUppCase = "Temperature";
        break;
      case "pressure_new":
        toUppCase = "Pressure";
        break;
    }

    this.weather_label = toUppCase;
    var weather_mapOptions = {
      zoom: 3,
      center: latlng,
      panControl: false,
      zoomControl: false,
      zoomControlOptions:
      {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.HYBRID,
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

    weather_map = new google.maps.Map(document.getElementById("weather-map"), weather_mapOptions);

    var weather_imageMapType = new google.maps.ImageMapType({
      getTileUrl: function (coord, zoom) {
        var normalizedCoord = getNormalizedCoord(coord, zoom);
        if (!normalizedCoord) {
          return null;
        }
        return "https://tile.openweathermap.org/map/" + randomItem + "/" + zoom + "/" + normalizedCoord.x + "/" + normalizedCoord.y + ".png?appid=674aa5391eb5a469b7ef171bea64cbff";
      },
      tileSize: new google.maps.Size(256, 256),
      maxZoom: 20
    });

    weather_map.overlayMapTypes.push(weather_imageMapType);

    setWeather(updateWeather, weather_api, this.route, this.weathers);

   //================================INIT==================================//


    function setWeather(callback: any, weather_api: string, route: string, weathers: any) {

      axios.get(weather_api)
        .then(function (response) {
          //console.log(response);
          callback(response.data, route, weathers);

        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function updateWeather(data, route, weathers: any) {
      console.log(JSON.stringify(data))

      var weather = data.items[0];
      if (data.api_info.status == "healthy") {
        var _general = weather.general;

        weathers.push({
          forecast: _general.forecast,
          humidity: _general.relative_humidity,
          temperature: _general.temperature,
          wind: _general.wind
        });

      }

    }

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


   //====================================================================//
    this.spinner.hide();
  }
}
