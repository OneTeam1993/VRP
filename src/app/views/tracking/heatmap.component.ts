import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-gb';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import axios from "axios";
declare var $: any;
declare const google: any;

@Component({
  templateUrl: 'heatmap.component.html',
  styleUrls: ["./heatmap.component.css"],
  encapsulation: ViewEncapsulation.None,
})

export class HeatmapComponent implements OnInit {

  route: string;
  api_assets_individual: string;
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
    let api_assets = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + company_id;
    this.api_assets_individual = this._constant.assetApi;
    let role_id = this._constant.getSessionstorageValueRoleID;

    var _map, heatmap;
    var locations = new Array();

    //================================INIT==================================//
    var latlng = new google.maps.LatLng(1.3521, 103.8198);
    var heatmapOptions = {
      zoom: 13,
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

    _map = new google.maps.Map(document.getElementById("heat-map"), heatmapOptions);

    setHeatMarkers(updateHeatAssets, api_assets);

    google.maps.event.addListener(_map, 'mousemove', function (event) {
      document.getElementById('coordinates-panel').innerHTML =
        event.latLng.lat() + ', ' + event.latLng.lng();
    });

    //=====================================Heat Map=============================================//

    function setHeatMarkers(callback: any, api_assets: string) {

      axios.get(api_assets)
        .then(function (response) {
          //console.log(response);
          callback(response.data);

        })
        .catch(function (error) {
          console.log(error);
        });

    }

    function updateHeatAssets(data) {

      for (var i = 0, length = data.length; i < length; i++) {

        if (data[i]) {

          if (data[i].LastPos == null || data[i].LastPos.Engine == null || data[i].LastPos.PosID == 0 || data[i].LastPos === "") {
            console.log('Data is Null');
            continue;
          }

          else {

            var latLng = new google.maps.LatLng(data[i].LastPos.PosY, data[i].LastPos.PosX);
  
            locations.push(latLng);
          }//end of else continue     

        } 
      }//end of for



      if (locations.length == 0) {

        if (data.LastPos == null || data.LastPos.Engine == null || data.LastPos.PosID == 0 || data.LastPos === "") {
            console.log('Data is Null');
          }

          else {

            var latLng = new google.maps.LatLng(data.LastPos.PosY, data.LastPos.PosX);
            locations.push(latLng);
          }//end of else continue     
      }

      heatmap = new google.maps.visualization.HeatmapLayer({
        data: locations,
        map: _map,
        dissipating: false,
      });

      heatmap.setMap(_map);
      //heatmap.set('radius', heatmap.get('radius') ? null : 20);

    }

    function get_el(timestamp) {

      var now = moment().format();
      var diff: any = moment.duration(moment(now).diff(moment(timestamp)));
      var days = parseInt(diff.asDays()); //84
      var hours = parseInt(diff.asHours()); //2039 hours, but it gives total hours in given miliseconds which is not expacted.
      hours = hours - days * 24;  // 23 hours
      var minutes = parseInt(diff.asMinutes()); //122360 minutes,but it gives total minutes in given miliseconds which is not expacted.
      minutes = minutes - (days * 24 * 60 + hours * 60); //20 minutes.
      var ms = "";

      if (days == 0 && hours == 0 && minutes == 0) {
        ms = "Active";
      } else if (days == 0) {
        ms = "Inactive";
      } else {
        ms = "Repair";
      }

      return ms;
    }

    function ClearHeatmapFilter() {

      locations = [];
      heatmap.setMap(null);
    }

    //=======================================On Change==================================================//

    $('.SelectResellerFilter').on('change', function () {
      ClearHeatmapFilter();

    });

    $('.SelectCompanyFilter').change({ route: this.route }, function (event) {
      ClearHeatmapFilter();
      let api_assets_filter = getAssetsHeatFilter(role_id, base, uri, user_id, reseller_id);
      setHeatMarkers(updateHeatAssets, api_assets_filter);
    });

    $('.SelectAssetFilter').change({ api: this.api_assets_individual }, function (event) {
      var selected = $(this).find("option:selected").val();
      var api_assets_filter_new = event.data.api + selected;
      ClearHeatmapFilter();
      setHeatMarkers(updateHeatAssets, api_assets_filter_new);
      
    }); // end of on change

    //====================================GET API WITH PARAM=================================//

    function getAssetsHeatFilter(role_id: Number, base: string, uri: string, user_id: Number, reseller_id: Number) {

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

  }
}
