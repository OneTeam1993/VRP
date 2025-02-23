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
    let company_id = Number(sessionStorage.getItem('setSessionstorageValueUserCompanyID'));
    let api_assets = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + company_id;
    this.api_assets_individual = this._constant.assetApi;
    let api_news = this._constant.covid_news_sg;
    let role_id = this._constant.getSessionstorageValueRoleID;

    //================================INIT==================================//

    initDashboard(loadDashboard, api_assets, role_id, this.toastr, this.route);
    initNews(loadNews, api_news, role_id, this.toastr, this.route);

    //===============================Dashboard===================================================//

    function initNews(callback: any, api_news: string, role_id, toastr, route) {

      axios.get(api_news)
        .then(function (response) {
          callback(response.data, toastr, route);

        })
        .catch(function (error) {
          console.log(error);
          if (role_id == 1) {
            toastr.error('News API Error in Dashboard: ' + error, 'Error', {
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

    function loadNews(data, toastr, route) {

      if (route == "/dashboard") {
        if ($('#infected').val() != null || $('#infected').val() != undefined) document.getElementById('infected').innerHTML = data.infected;
        if ($('#stableHospitalized').val() != null || $('#stableHospitalized').val() != undefined) document.getElementById('stableHospitalized').innerHTML = data.stableHospitalized;
        if ($('#criticalHospitalized').val() != null || $('#criticalHospitalized').val() != undefined) document.getElementById('criticalHospitalized').innerHTML = data.criticalHospitalized;
        if ($('#activeCases').val() != null || $('#activeCases').val() != undefined) document.getElementById('activeCases').innerHTML = data.activeCases;
        if ($('#deceased').val() != null || $('#deceased').val() != undefined) document.getElementById('deceased').innerHTML = data.deceased;
        if ($('#recovered').val() != null || $('#recovered').val() != undefined) document.getElementById('recovered').innerHTML = data.recovered;
      }

    }

    function initDashboard(callback: any, api_assets: string, role_id, toastr, route) {

      axios.get(api_assets)
        .then(function (response) {
          callback(response.data, toastr, route);

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

    function loadDashboard(data, toastr, route) {

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
              var fix = data[i].LastPos.Fix;
              var install_date = moment.utc(data[i].InstallDate).local().format("D-MMM-YYYY, hh:mm:ss A");
              var address = data[i].LastPos.Location;
              var speed = data[i].LastPos.Speed;
              var gps = data[i].Gps;
              var gprs = data[i].Gprs;
              var engine = data[i].Engine;

              var assetTimestamp = data[i].LastPos.Timestamp;
              var timestamp1: any = moment.utc(assetTimestamp).local().format("DD MMM YYYY");
              var d = new Date();
              var timestamp2: any = moment.utc(d).local().format("DD MMM YYYY");
              timestamp2 = Date.parse(timestamp2);
              timestamp1 = Date.parse(timestamp1);
              var timestamp = moment.utc(assetTimestamp).local().format("D-MMM-YYYY, hh:mm:ss A");
              var elapsedTimestamp = moment.utc(assetTimestamp).local().format();
              var _el = getElapsedTime(elapsedTimestamp);
              var el = get_el(elapsedTimestamp);

              let driverName: string;
              if (data[i].Driver.Name == null) {
                driverName = "No Driver Assigned";
              } else {
                driverName = data[i].Driver.Name;
              }

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
                case "Mobile":
                  vehicleImg = "assets/img/mobile.jpg";
                  break;
                case "Personnel":
                  vehicleImg = "assets/img/personnel.jpg";
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
                  + address
                  + "</td>"
                  + "<td>"
                  + timestamp
                  + "</td>"
                  + "<td>"
                  + _el
                  + "</td>"
                  + "<td>"
                  + category
                  + "</td>"
                  + "<td>"
                  + speedFormatter(speed)
                  + "</td>"
                  + "<td>"
                  + install_date
                  + "</td>"
                  + "<td>"
                  + fix
                  + "</td>"
                  + "<td>"
                  + statusFormatter(engine, timestamp)
                  + "</td>"
                  + "<td>"
                  + gpsStatus(gps, timestamp)
                  + "</td>"
                  + "<td>"
                  + gprsStatus(gprs, timestamp)
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
      else {
        //Object
        if (data) {

          var tag = data.Tag;
          var category = data.Category;
          var vechs = data.Name;
          var fix = data.LastPos.Fix;
          var install_date = moment.utc(data.InstallDate).local().format("D-MMM-YYYY, hh:mm:ss A");
          var address = data.LastPos.Location;
          var speed = data.LastPos.Speed;
          var gps = data.Gps;
          var gprs = data.Gprs;
          var engine = data.Engine;

          var assetTimestamp = data.LastPos.Timestamp;
          var timestamp1: any = moment.utc(assetTimestamp).local().format("DD MMM YYYY");
          var d = new Date();
          var timestamp2: any = moment.utc(d).local().format("DD MMM YYYY");
          timestamp2 = Date.parse(timestamp2);
          timestamp1 = Date.parse(timestamp1);
          var timestamp = moment.utc(assetTimestamp).local().format("D-MMM-YYYY, hh:mm:ss A");
          var elapsedTimestamp = moment.utc(assetTimestamp).local().format();
          var _el = getElapsedTime(elapsedTimestamp);
          var el = get_el(elapsedTimestamp);

          let driverName: string;
          if (data.Driver.Name == null) {
            driverName = "No Driver Assigned";
          } else {
            driverName = data.Driver.Name;
          }

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
              + address
              + "</td>"
              + "<td>"
              + timestamp
              + "</td>"
              + "<td>"
              + _el
              + "</td>"
              + "<td>"
              + category
              + "</td>"
              + "<td>"
              + speedFormatter(speed)
              + "</td>"
              + "<td>"
              + install_date
              + "</td>"
              + "<td>"
              + fix
              + "</td>"
              + "<td>"
              + statusFormatter(engine, timestamp)
              + "</td>"
              + "<td>"
              + gpsStatus(gps, timestamp)
              + "</td>"
              + "<td>"
              + gprsStatus(gprs, timestamp)
              + "</td>"
              + "</tr>"
              + "<hr style='border: 1px solid #FFFFFF !important'>";

            if (route == "/dashboard") {
              if ($('#total-assets').val() != null || $('#total-assets').val() != undefined) document.getElementById('total-assets').innerHTML = "1";
              if ($('#active').val() != null || $('#active').val() != undefined) document.getElementById('active').innerHTML = active.toString();
              if ($('#inactive').val() != null || $('#inactive').val() != undefined) document.getElementById('inactive').innerHTML = inactive.toString();
              if ($('#repair').val() != null || $('#repair').val() != undefined) document.getElementById('repair').innerHTML = repair.toString();
            }


          }

        } else {

          if (route == "/dashboard") {
            if ($('#total-assets').val() != null || $('#total-assets').val() != undefined) document.getElementById('total-assets').innerHTML = "0";
            if ($('#active').val() != null || $('#active').val() != undefined) document.getElementById('active').innerHTML = "0";
            if ($('#inactive').val() != null || $('#inactive').val() != undefined) document.getElementById('inactive').innerHTML = "0";
            if ($('#repair').val() != null || $('#repair').val() != undefined) document.getElementById('repair').innerHTML = "0";
          }

        }

      }


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
        text = "OFF";
      } else {
        labelColor = "down";
        text = "DOWN";
      }

      return "<span style='padding: 4px; color:white;' class='" + labelColor + "'>" + text + "</span>";
    }

    function speedFormatter(value) {

      var roundoff = Math.round(value * 100) / 100;

      return roundoff + ' km/h';
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

      const awaitOnchangeCompany = async (loadDashboard, toastr, route) => {
        const result = await initDashboard(loadDashboard, getAssetsFilter(role_id, base, uri, user_id, reseller_id), role_id, toastr, route);
        ClearList();      
      }

      awaitOnchangeCompany(loadDashboard, event.data.toastr, event.data.route);

    });

    $('.SelectAssetFilter').change({ api: this.api_assets_individual, toastr: this.toastr, route: this.route }, function (event) {
      var selected = $(this).find("option:selected").val();
      var api_assets_filter_new = event.data.api + selected;
      if (selected == 0) {
        api_assets_filter_new = getAssetsFilter(role_id, base, uri, user_id, reseller_id);
      }

      if (event.data.route == "/dashboard") {
        const awaitOnchangeAsset = async (loadDashboard, toastr, api_assets_filter_new, route) => {
          const result = await initDashboard(loadDashboard, api_assets_filter_new, role_id, toastr, route);
          ClearList();
        }

        awaitOnchangeAsset(loadDashboard, event.data.toastr, api_assets_filter_new, event.data.route);
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
