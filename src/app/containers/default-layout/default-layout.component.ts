import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import * as moment from 'moment';
import 'moment/locale/en-gb';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router, NavigationEnd } from '@angular/router';
import { Location } from "@angular/common";
import { EventEmitterService } from '../../views/reports/event-emitter.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import axios from "axios";
declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ["./default-layout.component.css"]
})

export class DefaultLayoutComponent implements OnInit {

  public sidebarMinimized = false;
  public navItems = navItems;
  base = this._constant.baseAppUrl;
  uri = this._constant.uri_track;
  user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
  reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
  company_id = Number(sessionStorage.getItem('setSessionstorageValueUserCompanyID'));
  role_id = Number(sessionStorage.getItem('setSessionstorageValueRoleID'));
  username = sessionStorage.getItem('setSessionstorageValueUser');
  company = sessionStorage.getItem('setSessionstorageValueCompany');
  api_reseller = this._constant.getResellers();
  api_company = this._constant.getCompanies();
  api_assets = this._constant.getAssets();
  api_reports = this._constant.getReports();
  api_events = this._constant.eventsApi;
  time = new Date();
  route: string;
  default_reseller = this._constant.getSessionstorageValueUserResellerID;
  default_company = this._constant.getSessionstorageValueCompanyID;
  navigationSubscription: any;

  constructor(private _constant: ConstantsService, location: Location, private router: Router, private eventEmitterService: EventEmitterService, private toastr: ToastrService) {
    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
      }

      if (this.route) {
        if (this.route == '/dashboard' || this.route == '/drivers' || this.route == '/reseller' || this.route == '/tracking/traffic' || this.route == '/tracking/weather' || this.route == '/tracking/carpark' || this.route == '/tracking/street' || this.route == '/vrp/direction') {
          $('#_reseller_filter').hide();
          $('#_company_filter').hide();
          $('#_asset_filter').hide();
          $('#_reports').hide();
        }
        else if (this.route == '/dashboard' || this.route == '/tracking' || this.route == '/heatmap') {
          $('#_reseller_filter').show();
          $('#_company_filter').show();
          $('#_asset_filter').show();
          $('#_reports').hide();
        }
        else if (this.route == '/companies') {
          $('#_reseller_filter').show();
          $('#_company_filter').hide();
          $('#_asset_filter').hide();
          $('#_reports').hide();
        }
        else if (this.route == '/reports') {
          $('#_reseller_filter').show();
          $('#_company_filter').show();
          $('#_asset_filter').show();
          $('#_reports').show();
          $('#_events_filter').hide();
        }
        else {
          $('#_reseller_filter').show();
          $('#_company_filter').show();
          $('#_asset_filter').show();
          $('#_reports').hide();
        }
      }
      else {
        console.log('Route Problem')
      }

      if (this.role_id >= 3) {
        $('#_reseller_filter').hide();
      }

    });

    //=============Refresh an Angular Component without reloading the same Component =========//
    //this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //  return false;
    //};

    //this.navigationSubscription = this.router.events.subscribe((event) => {
    //  if (event instanceof NavigationEnd) {
    //    //this.initialiseInvites();
    //    this.router.navigated = false;
    //  }
    //});
  }

  initialiseInvites() {

    // Set default values and re-fetch any data you need.


  }

  //============Refresh an Angular Component without reloading the same Component =========//

  ngOnDestroy() {

    if (this.navigationSubscription) {

      this.navigationSubscription.unsubscribe();

    }

  }

 
  ngOnInit() {


    const initFilters = async (callback: any, api_reseller, api_company, toastr, default_reseller, default_company, role_id, api_assets, api_reports) => {
      const result = await initCompany(api_company, toastr, default_company, role_id, api_assets, api_reports)

      axios.get(api_reseller)
        .then(function (response) {
          callback(response.data, toastr, default_reseller);
        })
        .catch(function (error) {
          console.log(error);
          if (role_id == 1) {
            toastr.error('Reseller API Error: ' + error, 'Error', {
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

    initFilters(loadReseller, this.api_reseller, this.api_company, this.toastr, this.default_reseller, this.default_company, this.role_id, this.api_assets, this.api_reports);

    function loadReseller(data, toastr, default_reseller) {
      for (var i = 0, length = data.length; i < length; i++) {
        if (data[i]) {
          if (data[i].ResellerID == default_reseller) {
            $('#load-reseller').append($('<option selected="selected"></option>').val(data[i].ResellerID).html(data[i].Name));
          } else {
            $('#load-reseller').append($('<option></option>').val(data[i].ResellerID).html(data[i].Name));
          }

        } else {
          toastr.error('Error: Data not found! Pls. try again.', 'Error', {
            timeOut: 3000,
            closeButton: true,
            enableHtml: true,
          });
        }
      }

      $('.selectpicker').selectpicker('refresh');

      return true;
    }

    function initCompany(api_company, toastr, default_company, role_id, api_assets, api_reports) {

      const awaitCompany = async (callback: any, api_company, toastr, default_company, role_id) => {
        const result = await initAssets(api_assets, toastr, role_id, api_reports)

        axios.get(api_company)
          .then(function (response) {
            callback(response.data, toastr, default_company, role_id);
          })
          .catch(function (error) {
            console.log(error);
            if (role_id == 1) {
              toastr.error('Company API Error: ' + error, 'Error', {
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

      awaitCompany(loadCompany, api_company, toastr, default_company, role_id);
    }

    function loadCompany(data, toastr, default_company, role_id) {

      if (role_id == 1 || role_id == 2) $('#load-company').append($('<option></option>').val(0).html('---'));
      for (var i = 0, length = data.length; i < length; i++) {
        if (data[i]) {
          if (data[i].CompanyID == default_company) {
            $('#load-company').append($('<option selected="selected"></option>').val(data[i].CompanyID).html(data[i].Name));
          } else {
            $('#load-company').append($('<option></option>').val(data[i].CompanyID).html(data[i].Name));
          }

        } else {
          toastr.error('Error: Data not found! Pls. try again.', 'Error', {
            timeOut: 3000,
            closeButton: true,
            enableHtml: true,
          });
        }
      }

      $('.selectpicker').selectpicker('refresh');

      return true;

    }

    function initAssets(api_assets, toastr, role_id, api_reports) {

      const awaitAssets = async (callback: any, toastr, role_id) => {
        const result = await initReports(loadReports, api_reports, toastr, role_id)

        axios.get(api_assets)
          .then(function (response) {
            callback(response.data, toastr, role_id);
          })
          .catch(function (error) {
            console.log(error);
            if (role_id == 1) {
              toastr.error('Asset API Error: ' + error, 'Error', {
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

      awaitAssets(loadAssets, toastr, role_id);
    }

    function loadAssets(data, toastr, role_id) {

      $('#load-assets').append($('<option></option>').val(0).html('---'));
      for (var i = 0, length = data.length; i < length; i++) {
        if (data[i]) {
          if (role_id >= 3) {
            if (data[i].AssetID == sessionStorage.getItem('setSessionstorageValueUserAssetID')) {
              $('#load-assets').append($('<option selected="selected"></option>').val(data[i].AssetID).html(data[i].Name));
            } else {
              $('#load-assets').append($('<option></option>').val(data[i].AssetID).html(data[i].Name));
            }
          } else {
            $('#load-assets').append($('<option></option>').val(data[i].AssetID).html(data[i].Name));
          }
        } else {
          toastr.error('Error: Data not found! Pls. try again.', 'Error', {
            timeOut: 3000,
            closeButton: true,
            enableHtml: true,
          });
        }
      }

      $('.selectpicker').selectpicker('refresh');

      return true;

    }

    function initReports(callback_reports: any, api_reports, toastr, role_id) {

      axios.get(api_reports)
        .then(function (response) {
          callback_reports(response.data, toastr, role_id);
        })
        .catch(function (error) {
          console.log(error);
          if (role_id == 1) {
            toastr.error('Reports API Error: ' + error, 'Error', {
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

    function loadReports(data, toastr, role_id) {
      $('#load-report').append($('<option></option>').val(0).html('---'));
      for (var i = 0, length = data.length; i < length; i++) {
        if (data[i]) {
          if (role_id >= 3) {

            if (data[i].ReportID == 1 || data[i].ReportID == 2 || data[i].ReportID == 7 ||data[i].ReportID == 10 || data[i].ReportID == 11) {

              if (data[i].ReportID == sessionStorage.getItem('setSessionstorageValueUserReport')) {
                $('#load-report').append($('<option selected="selected"></option>').val(data[i].ReportID).html(data[i].Name));
              } else {
                $('#load-report').append($('<option></option>').val(data[i].ReportID).html(data[i].Name));
              }
            }

          } else {
            $('#load-report').append($('<option></option>').val(data[i].ReportID).html(data[i].Name));
          }
        } else {
          toastr.error('Error: Data not found! Pls. try again.', 'Error', {
            timeOut: 3000,
            closeButton: true,
            enableHtml: true,
          });
        }
      }

      if (Number(sessionStorage.getItem('setSessionstorageValueUserReport')) == 1) $('#_events_filter').show();
      else $('#_events_filter').hide();

      $('.selectpicker').selectpicker('refresh');

      return true;
    }

    $.getJSON(this.api_events, function (data) {
      $.each(data, function (index, item) {

        if (item.StatusID == 5 || item.StatusID == 6 || item.StatusID == 12 || item.StatusID == 13 || item.StatusID == 16 || item.StatusID == 17 || item.StatusID == 18) {
          $('#load-events').append($('<option></option>').val(item.StatusID).html(item.StatusDesc));
        }
      });

      $(".selectpicker").selectpicker('refresh');

      return true;

    });

    var dateFormat = "D-MMM-YYYY HH:mm A";
    var d1 = new Date();
    d1.setHours(0);
    d1.setMinutes(0);
    var dateFrom = moment(d1).format(dateFormat);

    $('#dateFrom').datetimepicker({
      format: 'd-M-Y H:i A',
      theme: 'dark',
      lang: 'en',
      value: dateFrom,
      onChangeDateTime: function (dp, $input) {
        sessionStorage.setItem("setSessionstorageValueUserDateFrom", $input.val());
        $(this).hide();
      }
    });

    var dateFormat = "D-MMM-YYYY HH:mm A";
    var d2 = new Date();
    d2.setDate(d2.getDate());
    var dateTo = moment(d2).format(dateFormat);
   
    $('#dateTo').datetimepicker({
      format: 'd-M-Y H:i A',
      theme: 'dark',
      lang: 'en',
      value: dateTo,
      onChangeDateTime: function (dp, $input) {
        sessionStorage.setItem("setSessionstorageValueUserDateTo", $input.val());
        $(this).hide();
      }
    });


    //Setup new Nav bar
    var visible = 'd-block';
    var hidden = 'd-none';
    var dashboard;
    var tracking;
    var location;
    var traffic;
    var carpark;
    var weather;
    var heatmap;
    var jds;
    var jds_basic;
    var vrp;
    var tsp;
    var standard_vrp;
    var reports;
    var settings;
    var assets;
    var drivers;
    var users;
    var companies;
    var reseller;
    var street;
    var direction;
    var messages;

    switch (this.role_id) {
      case 1:
        dashboard = visible;
        tracking = visible;
        location = visible;
        traffic = visible;
        carpark = visible;
        weather = visible;
        street = visible;
        heatmap = visible;
        jds = visible;
        jds_basic = visible;
        vrp = visible;
        direction = visible;
        tsp = visible;
        standard_vrp = visible;
        reports = visible;
        settings = visible;
        assets = visible;
        drivers = visible;
        users = visible;
        companies = visible;
        reseller = visible;
        messages = visible;
        break;
      case 2:
        dashboard = visible;
        tracking = visible;
        location = visible;
        traffic = visible;
        carpark = visible;
        weather = visible;
        street = visible;
        heatmap = visible;
        jds = visible;
        jds_basic = visible;
        vrp = visible;
        direction = visible;
        tsp = visible;
        standard_vrp = visible;
        reports = visible;
        settings = visible;
        assets = visible;
        drivers = visible;
        users = visible;
        companies = visible;
        reseller = visible;
        messages = visible;
        break;
      case 3:
        dashboard = visible;
        tracking = visible;
        location = visible;
        traffic = visible;
        carpark = visible;
        weather = visible;
        street = visible;
        heatmap = visible;
        jds = visible;
        jds_basic = visible;
        vrp = visible;
        direction = visible;
        tsp = visible;
        standard_vrp = visible;
        reports = visible;
        settings = visible;
        assets = visible;
        drivers = visible;
        users = visible;
        companies = visible;
        reseller = hidden;
        messages = visible;
        break;
      case 4:
        dashboard = visible;
        tracking = visible;
        location = visible;
        traffic = visible;
        carpark = visible;
        weather = visible;
        street = visible;
        heatmap = visible;
        jds = visible;
        jds_basic = visible;
        vrp = visible;
        direction = visible;
        tsp = visible;
        standard_vrp = visible;
        reports = visible;
        settings = visible;
        assets = visible;
        drivers = visible;
        users = visible;
        companies = visible;
        reseller = hidden;
        messages = visible;
        break;
      case 5:
        dashboard = visible;
        tracking = visible;
        location = visible;
        traffic = hidden;
        carpark = hidden;
        weather = hidden;
        street = hidden;
        heatmap = hidden;
        jds = visible;
        jds_basic = visible;
        vrp = hidden;
        direction = hidden;
        tsp = hidden;
        standard_vrp = hidden;
        reports = visible;
        settings = visible;
        assets = hidden;
        drivers = visible;
        users = hidden;
        companies = hidden;
        reseller = hidden;
        messages = visible;
        break;
      case 6:
        dashboard = visible;
        tracking = hidden;
        location = hidden;
        traffic = hidden;
        carpark = hidden;
        weather = hidden;
        street = hidden;
        heatmap = hidden;
        jds = hidden;
        jds_basic = hidden;
        vrp = hidden;
        direction = hidden;
        tsp = hidden;
        standard_vrp = hidden;
        reports = visible;
        settings = hidden;
        assets = hidden;
        drivers = hidden;
        users = hidden;
        companies = hidden;
        reseller = hidden;
        messages = visible;
        break;
      case 7:
        dashboard = visible;
        tracking = hidden;
        location = hidden;
        traffic = hidden;
        carpark = hidden;
        weather = hidden;
        street = hidden;
        heatmap = hidden;
        jds = hidden;
        jds_basic = hidden;
        vrp = hidden;
        direction = hidden;
        tsp = hidden;
        standard_vrp = hidden;
        reports = hidden;
        settings = hidden;
        assets = hidden;
        drivers = hidden;
        users = hidden;
        companies = hidden;
        reseller = hidden;
        messages = visible;
        break;
    }

    this.navItems = [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        class: dashboard
      },
      {
        name: 'Tracking',
        url: '/tracking',
        icon: 'icon-map',
        badge: {
          variant: 'info',
          text: 'Live'
        },
        class: tracking,
        children: [
          {
            name: 'Live Location',
            url: '/tracking',
            icon: 'icon-location-pin',
            class: location
          },
          {
            name: 'Traffic',
            url: '/tracking/traffic',
            icon: 'fa fa-warning',
            class: traffic
          },
          {
            name: 'Carpark',
            url: '/tracking/carpark',
            icon: 'fa fa-th',
            class: carpark
          },
          {
            name: 'Weather',
            url: '/tracking/weather',
            icon: 'fa fa-cloud',
            class: weather
          },
          {
            name: 'Street View',
            url: '/tracking/street',
            icon: 'fa fa-road',
            class: street
          },
          {
            name: 'Heat Map',
            url: '/tracking/heatmap',
            icon: 'fa fa-thermometer',
            class: heatmap
          },
        ]
      },
      {
        name: 'SHN Reporting',
        url: '/basic',
        icon: 'icon-puzzle',
        class: jds
      },
      {
        name: 'Route Optimization',
        url: '/vrp',
        icon: 'icon-map',
        class: vrp,
        children: [
          {
            name: 'Directions',
            url: '/vrp/direction',
            icon: 'fa fa-car',
            class: direction
          },
          {
            name: 'Travelling Salesman',
            url: '/vrp/tsp',
            icon: 'fa fa-car',
            class: tsp
          },
          {
            name: 'Standard VRP',
            url: '/vrp',
            icon: 'fa fa-car',
            class: standard_vrp
          },
        ]
      },
      {
        name: 'History Report',
        url: '/reports',
        icon: 'icon-chart',
        class: reports
      },
      {
        name: 'Settings',
        url: '/settings',
        icon: 'cui-cog icons',
        class: settings,
        children: [
          {
            name: 'Messages',
            url: '/messages',
            icon: 'icon-envelope-open',
            class: messages,
          },
          {
            name: 'Assets',
            url: '/assets',
            icon: 'fa fa-truck',
            class: assets,
          },
          {
            name: 'Personnel',
            url: '/drivers',
            icon: 'fa fa-users',
            class: drivers
          },
          {
            name: 'Users',
            url: '/users',
            icon: 'fa fa-user',
            class: users
          },
          {
            name: 'Companies',
            url: '/companies',
            icon: 'fa fa-building-o',
            class: companies
          },
          {
            name: 'Reseller',
            url: '/reseller',
            icon: 'icon-people',
            class: reseller
          },
        ]
      },
      {
        name: 'Download iOS',
        url: 'https://track-asia.com',
        icon: 'fa fa-apple fa-2x',
        class: 'mt-auto',
        variant: 'primary',
        attributes: { target: '_blank', rel: 'noopener' }
      },
      {
        name: 'Download Android',
        url: 'https://play.google.com/store/apps/details?id=sg.com.acecom.trackSGAdmin&hl=en',
        icon: 'fa fa-android fa-2x',
        variant: 'success',
        attributes: { target: '_blank', rel: 'noopener' }
      }
    ];

    //===========================================================//

    window.onresize = function (event) {
      setTimeout(function () {
        AutoAdjustScreen(this.route);

      }, 500);
    };

    function AutoAdjustScreen(route) {
      if (route == '/reseller') {
        $('#resellerData').DataTable().ajax.reload();
      }
      else if (route == '/companies') {
        $('#companyData').DataTable().ajax.reload();
      }
    }

    //Timer 
    setInterval(() => {
      this.time = new Date();
    }, 1000);

  }

  generate() {
    this.eventEmitterService.sendClickEvent();
  }

  onOptionsSelectedReseller(value: any) {

    sessionStorage.setItem('setSessionstorageValueResellerDesc', $("#load-reseller option:selected").text())
    Number(sessionStorage.setItem('setSessionstorageValueUserResellerID', value));

    if (this.route == '/tracking') {
      $("#getMove").hide().html('0').fadeIn('0');
      $("#getIdle").hide().html('0').fadeIn('0');
      $("#getStop").hide().html('0').fadeIn('0');
      $("#getDown").hide().html('0').fadeIn('0');
      $('#assetStatus').empty(); //table
    }

    if (this.route == '/companies') {

      $("#companyData").empty();
      $('#companyReseller').val(value);
      $('.selectpicker').selectpicker('refresh');

    }


    $('#load-company').empty();
    $('#load-assets').empty();
    $('#load-company').append($('<option></option>').val(0).html('---'));

    let company_api: string;
    if (this.role_id == 1) {
      company_api = this.base + this.uri + 'companyinfo' + '?&ResellerID=' + $('#load-reseller').val();
    } else if (this.role_id == 2) {
      company_api = this.base + this.uri + 'companyinfo' + '?&ResellerID=' + $('#load-reseller').val();
    } else if (this.role_id >= 3) {
      company_api = this.base + this.uri + 'companyinfo' + '?ResellerID=' + $('#load-reseller').val() + "&CompanyID=" + $('#load-company').val();
    }   

    $.getJSON(company_api, function (data) {
      $.each(data, function (index, item) {
        $('#load-company').append($('<option></option>').val(item.CompanyID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });

    $(".selectpicker").selectpicker('refresh');
  }

  onOptionsSelectedCompany(value: any) {

    sessionStorage.setItem('setSessionstorageValueCompany', $("#load-company option:selected").text())
    this.company = $("#load-company option:selected").text();

    Number(sessionStorage.setItem('setSessionstorageValueUserCompanyID', value));
    let selected_reseller = $('#load-reseller').val();
    let selected_company = $('#load-company').val();
    let api_assets_filter: string = getAssetsFilter(this.role_id, this.base, this.uri, selected_reseller, selected_company);

    function getAssetsFilter(role_id: Number, base: string, uri: string, selected_reseller: Number, selected_company: Number) {
      let url: string;
  
      if (role_id == 1) {
        url = base + uri + 'assetinfo' + '?UserID=' + '&ResellerID=' + selected_reseller + '&CompanyID=' + selected_company;
      } else if (role_id == 2) {
        url = base + uri + 'assetinfo' + '?UserID=' + this.getSessionstorageValueUserID + '&ResellerID=' + this.getSessionstorageValueUserResellerID + '&CompanyID=' + selected_company;

      } else if (role_id >= 3) {

        url = base + uri + 'assetinfo' + '?UserID=' + this.getSessionstorageValueUserID + '&ResellerID=' + this.getSessionstorageValueUserResellerID + '&CompanyID=' + selected_company;
      }
      return url;
    }

    if (value > 0)
    {
      $('#assetStatus').empty(); //table
      $('#load-assets').empty();

      $.getJSON(api_assets_filter, function (data) {
        $('#load-assets').append($('<option></option>').val(0).html('---'));
        $.each(data, function (index, item) {
          $('#load-assets').append($('<option></option>').val(item.AssetID).html(item.Name));
        });
        $('.selectpicker').selectpicker('refresh');
      });

       $(".selectpicker").selectpicker('refresh');

    } else {

      $('#load-company').append($('<option></option>').val(0).html('---'));
      sessionStorage.setItem("setSessionstorageValueDefaultReseller", String(0));
      sessionStorage.setItem("setSessionstorageValueDefaultCompany", String(0));

      if (this.route == '/tracking') {
        var getCountMove = 0;
        var getCountIdle = 0;
        var getCountStop = 0;
        var getCountDown = 0;

        document.getElementById("getMove").innerHTML = getCountMove.toString();
        document.getElementById("getIdle").innerHTML = getCountIdle.toString();
        document.getElementById("getStop").innerHTML = getCountStop.toString();
        document.getElementById("getDown").innerHTML = getCountDown.toString();

        $('#assetStatus').empty(); //Table
      }

      $('#load-assets').empty();

      $(".selectpicker").selectpicker('refresh');

    }

  }

  onOptionsSelectedAsset(value: any) {

    Number(sessionStorage.setItem('setSessionstorageValueUserAssetID', value));

  }

  onOptionsSelectedReport(value: any) {

    if (this.route == '/reports') {

      Number(sessionStorage.setItem('setSessionstorageValueUserReport', value));

    }

  }

  logOut() {

    sessionStorage.clear();
    sessionStorage.removeItem("setSessionstorageValuePerimeterLength");
    sessionStorage.removeItem("setSessionstorageValueIgnition");
    sessionStorage.removeItem("setSessionstorageValueEngine");
    sessionStorage.removeItem("setSessionstorageValueCompany");
    sessionStorage.removeItem("setSessionstorageValueUserCompanyID");
    sessionStorage.removeItem("setSessionstorageValueEmail");
    sessionStorage.removeItem("setSessionstorageValueName");
    sessionStorage.removeItem("setSessionstorageValueRoleDesc");
    sessionStorage.removeItem("setSessionstorageValueUser");
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  toggleMinimize(e) {

    //AutoAdjust table
    if (this.route == '/reseller') {
      $('#resellerData').DataTable().ajax.reload();
    }
    else if (this.route == '/companies') {
      $('#companyData').DataTable().ajax.reload();
    }
    this.sidebarMinimized = e;
  }
}
