import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router, NavigationEnd } from '@angular/router';
import { Location } from "@angular/common";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
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
  navigationSubscription: any;
  constructor(private _constant: ConstantsService, location: Location, private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService) {
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
    let company_id = Number(sessionStorage.getItem('setSessionstorageValueCompanyID'));
    let api_assets = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + company_id;
    this.api_assets_individual = this._constant.assetApi;
    let role_id = this._constant.getSessionstorageValueRoleID;

    //================================INIT==================================//

    initDashboard(loadDashboard, api_assets, role_id, this.toastr);

    //=====================================Heat Map=============================================//

    function initDashboard(callback: any, api_assets: string, role_id, toastr) {

      axios.get(api_assets)
        .then(function (response) {
          callback(response.data, toastr, );

        })
        .catch(function (error) {
          console.log(error);
          if (role_id == 1) {
            toastr.error('Asset API Error in Dashboard: ' + error, 'Error', {
              timeOut: 3000,
              closeButton: true,
              enableHtml: true,
            });
          } else {
            toastr.error('Error: Network Error. Pls. Try again.', 'Error', {
              timeOut: 3000,
              closeButton: true,
              enableHtml: true,
            });
          }
        });

    }

    function loadDashboard(data, toastr) {

      var active = 0;
      var inactive = 0;
      var repair = 0;

      if (Array.isArray(data) == true) {

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
                  vehicleImg = "assets/img/car.jpg";
                  break;
                case "Truck":
                  vehicleImg = "assets/img/truck.jpg";
                  break;
                case "Van":
                  vehicleImg = "assets/img/van.jpg";
                  break;
                case "Bus":
                  vehicleImg = "assets/img/bus.jpg";
                  break;
                case "Motorcycle":
                  vehicleImg = "assets/img/motorcycle.jpg";
                  break;
                case "Recovery Veh":
                  vehicleImg = "assets/img/truck.jpg";
                  break;
                case "Lorry":
                  vehicleImg = "assets/img/truck.jpg";
                  break;
                case "10 Footer Lorry":
                  vehicleImg = "assets/img/truck.jpg";
                  break;
                case "14 Footer Lorry":
                  vehicleImg = "assets/img/truck.jpg";
                  break;
                case "Ambulance":
                  vehicleImg = "assets/img/ambulance.jpg";
                  break;
              }


              if (el == "Active")
                active++;
              else if (el == "Inactive")
                inactive++;
              else if (el == "Repair")
                repair++;

              var outputDiv = document.getElementById('assetDetails');

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
                  + "</tr>";

                document.getElementById('total-assets').innerHTML = data.length;
                document.getElementById('active').innerHTML = active.toString();
                document.getElementById('inactive').innerHTML = inactive.toString();
                document.getElementById('repair').innerHTML = repair.toString();
              }
            }//end of else continue     

          }
        }//end of for
      }
      else {
        //Object
        if (data) {

          var tag = data.Tag;
          var category = data.Category;
          var vechs = data.Name;
          var make = data.Make;
          var model = data.Model;
          var plate_no = data.LicensePlate;
          var transmission = data.Transmission;
          var fuel_type = data.FuelType;
          var install_date = moment.utc(data.InstallDate).local().format("D-MMM-YYYY, hh:mm:ss A");

          var assetTimestamp = data.LastPos.Timestamp;
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
              vehicleImg = "assets/img/car.jpg";
              break;
            case "Truck":
              vehicleImg = "assets/img/truck.jpg";
              break;
            case "Van":
              vehicleImg = "assets/img/van.jpg";
              break;
            case "Bus":
              vehicleImg = "assets/img/bus.jpg";
              break;
            case "Motorcycle":
              vehicleImg = "assets/img/motorcycle.jpg";
              break;
            case "Recovery Veh":
              vehicleImg = "assets/img/truck.jpg";
              break;
            case "Lorry":
              vehicleImg = "assets/img/truck.jpg";
              break;
            case "10 Footer Lorry":
              vehicleImg = "assets/img/truck.jpg";
              break;
            case "14 Footer Lorry":
              vehicleImg = "assets/img/truck.jpg";
              break;
            case "Ambulance":
              vehicleImg = "assets/img/ambulance.jpg";
              break;
          }

          if (el == "Active")
            active++;
          else if (el == "Inactive")
            inactive++;
          else if (el == "Repair")
            repair++;

          var outputDiv = document.getElementById('assetDetails');

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

       
            document.getElementById('total-assets').innerHTML = "1";
            document.getElementById('active').innerHTML = active.toString();
            document.getElementById('inactive').innerHTML = inactive.toString();
            document.getElementById('repair').innerHTML = repair.toString();

          }

        } else {
          document.getElementById('total-assets').innerHTML = "0";
          document.getElementById('active').innerHTML = "0";
          document.getElementById('inactive').innerHTML = "0";
          document.getElementById('repair').innerHTML = "0";
        }

      }


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

    $('.SelectCompanyFilter').change({ route: this.route, toastr: this.toastr }, function (event) {

      const awaitOnchangeCompany = async (loadDashboard, toastr) => {
        const result = await initDashboard(loadDashboard, getAssetsFilter(role_id, base, uri, user_id, reseller_id), role_id, toastr);
        ClearList();      
      }

      awaitOnchangeCompany(loadDashboard, event.data.toastr);

    });

    $('.SelectAssetFilter').change({ api: this.api_assets_individual, toastr: this.toastr, route: this.route }, function (event) {
      var selected = $(this).find("option:selected").val();
      var api_assets_filter_new = event.data.api + selected;
      if (selected == 0) {
        api_assets_filter_new = getAssetsFilter(role_id, base, uri, user_id, reseller_id);
      }

      if (event.data.route = "/dashboard") {
        const awaitOnchangeAsset = async (loadDashboard, toastr, api_assets_filter_new) => {
          const result = await initDashboard(loadDashboard, api_assets_filter_new, role_id, toastr);

          ClearList();
        }

        awaitOnchangeAsset(loadDashboard, event.data.toastr, api_assets_filter_new);
      }

     
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


    this.spinner.hide();
  }
}
