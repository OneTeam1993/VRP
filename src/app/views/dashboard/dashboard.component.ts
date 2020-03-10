import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import axios from "axios";
declare var $: any;
declare const google: any;

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ["./dashboard.component.css"],
  encapsulation: ViewEncapsulation.None,
})

export class DashboardComponent implements OnInit {

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

    //Filter Dropdown
    $('#_reports').hide();
    if (role_id >= 3) {
      $('#_reseller').hide();
    }
    if (this.route == '/reports') $('#_reports').show();
    else $('#_reports').hide();

    var _map, heatmap;
    var locations = new Array();

    //================================INIT==================================//

    setHeatMarkers(updateHeatAssets, api_assets);

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

      var active = 0;
      var inactive = 0;
      var repair = 0;
      var outputDiv = document.getElementById('assetDetails');

      for (var i = 0, length = data.length; i < length; i++) {

        if (data[i]) {

          if (data[i].LastPos == null || data[i].LastPos.Engine == null || data[i].LastPos.PosID == 0 || data[i].LastPos === "") {
            console.log('Data is Null');
            continue;
          }

          else {

            var latLng = new google.maps.LatLng(data[i].LastPos.PosY, data[i].LastPos.PosX);
            var id = data[i].AssetID;
            var tag = data[i].Tag;
            var category = data[i].Category;
            var vechs = data[i].Name;
            var make = data[i].Make;
            var model = data[i].Model;
            var plate_no = data[i].LicensePlate;
            var transmission = data[i].Transmission;
            var fuel_type = data[i].FuelType;
            var install_date = moment.utc(data[i].InstallDate).local().format("D-MMM-YYYY, hh:mm:ss A");
            var address = data[i].LastPos.Location;
    
            var assetTimestamp = data[i].LastPos.Timestamp;
            var timestamp1: any = moment.utc(assetTimestamp).local().format("DD MMM YYYY");
            var d = new Date();
            var timestamp2: any = moment.utc(d).local().format("DD MMM YYYY");
            timestamp2 = Date.parse(timestamp2);
            timestamp1 = Date.parse(timestamp1);
            var timestamp = moment.utc(assetTimestamp).local().format("D-MMM-YYYY, hh:mm:ss A");
            var elapsedTimestamp = moment.utc(assetTimestamp).local().format();
            var el = get_el(elapsedTimestamp);

            let vehicleImg: string;

            // Category image
            switch (category) {
              case "Car":
                vehicleImg = "../assets/img/car.jpg";
                break;
              case "Truck":
                vehicleImg = "../assets/img/truck.jpg";
                break;
              case "Van":
                vehicleImg = "../assets/img/van.jpg";
                break;
              case "Bus":
                vehicleImg = "../assets/img/bus.jpg";
                break;
              case "Motorcycle":
                vehicleImg = "../assets/img/motorcycle.jpg";
                break;
              case "Recovery Veh":
                vehicleImg = "../assets/img/truck.jpg";
                break;
              case "Lorry":
                vehicleImg = "../assets/img/truck.jpg";
                break;
              case "10 Footer Lorry":
                vehicleImg = "../assets/img/truck.jpg";
                break;
              case "14 Footer Lorry":
                vehicleImg = "../assets/img/truck.jpg";
                break;
              case "Ambulance":
                vehicleImg = "../assets/img/ambulance.jpg";
                break;
            }


            if (el == "Active")
              active++;
            else if (el == "Inactive")
              inactive++;
            else if (el == "Repair")
              repair++;

            if (outputDiv) {

              outputDiv.innerHTML += "<tr>"
                + "<td>"
                + "<img class='vehicle-img' src='" + vehicleImg + "'/>"
                + "</td>"
                + "<td>"
                //+ "<strong><a href='javascript:google.maps.event.trigger(openmarker[" + k + "],\"click\");' style='color:#458FD2;'>" + markers[k].title + '</a></strong><br>' + markers[k].address + "<br>"
                + "<strong><a style='color:#458FD2;'>" + vechs + '</a></strong>'
                + "</td>"
                + "<td>"
                + tag
                + "</td>"
                + "<td>"
                + plate_no
                + "</td>"
                + "<td>"
                + make
                + "</td>"
                + "<td>"
                + model
                + "</td>"
                + "<td>"
                + category
                + "</td>"
                + "<td>"
                + transmission
                + "</td>"
                + "<td>"
                + fuel_type
                + "</td>"
                + "<td>"
                + install_date
                + "</td>"
                + "</tr>"
                + "<hr style='border: 1px solid #FFFFFF !important'>";
              
              document.getElementById('total-assets').innerHTML = data.length;
              document.getElementById('active').innerHTML = active.toString();
              document.getElementById('inactive').innerHTML = inactive.toString();
              document.getElementById('repair').innerHTML = repair.toString();
            }
          }//end of else continue     

        } 
      }//end of for
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

    function ClearList() {
      $("#assetDetails").empty();
    }

    //=======================================On Change==================================================//

    $('.SelectResellerFilter').on('change', function () {
      ClearList();

    });

    $('.SelectCompanyFilter').change({ route: this.route }, function (event) {
      ClearList();
      let api_assets_filter = getAssetsFilter(role_id, base, uri, user_id, reseller_id);
      setHeatMarkers(updateHeatAssets, api_assets_filter);
    });

    $('.SelectAssetFilter').change({ api: this.api_assets_individual }, function (event) {
      var selected = $(this).find("option:selected").val();
      var api_assets_filter_new = event.data.api + selected;
      ClearList();
      setHeatMarkers(updateHeatAssets, api_assets_filter_new);
      
    }); // end of on change

    //====================================GET API WITH PARAM=================================//

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

  }
}
