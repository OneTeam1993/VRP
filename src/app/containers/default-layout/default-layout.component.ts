import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import * as moment from 'moment';
import 'moment/locale/en-gb';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import { EventEmitterService } from '../../views/reports/event-emitter.service';


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
  company_id = Number(sessionStorage.getItem('setSessionstorageValueCompanyID'));
  role_id = Number(sessionStorage.getItem('setSessionstorageValueRoleID'));
  username = sessionStorage.getItem('setSessionstorageValueUser');
  company = sessionStorage.getItem('setSessionstorageValueCompany');
  api_reseller = this._constant.getResellers();
  api_company = this._constant.getCompanies();
  api_assets = this._constant.getAssets();
  api_reports = this._constant.getReports();
  time = new Date();
  route: string;

  constructor(private _constant: ConstantsService, location: Location, private router: Router, private eventEmitterService: EventEmitterService) {
    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
      }

    });


  }

  ngOnInit() {

    let default_reseller = this._constant.getSessionstorageValueUserResellerID;
    let default_company = this._constant.getSessionstorageValueCompanyID;

    $.getJSON(this.api_reseller, function (data) {
      $.each(data, function (index, item) {

        if (item.ResellerID == default_reseller) {
          $('#load-reseller').append($('<option selected="selected"></option>').val(item.ResellerID).html(item.Name));
        } else {

          $('#load-reseller').append($('<option></option>').val(item.ResellerID).html(item.Name));
        }
      });
      $('.selectpicker').selectpicker('refresh');
    });

    $.getJSON(this.api_company, function (data) {
      if (this.role_id == 1 || this.role_id == 2) $('#load-company').append($('<option></option>').val(0).html('---'));
      $.each(data, function (index, item) {
        if (item.CompanyID == default_company) {
          $('#load-company').append($('<option selected="selected"></option>').val(item.CompanyID).html(item.Name));
        } else {
          $('#load-company').append($('<option></option>').val(item.CompanyID).html(item.Name));
        }
      });
      $('.selectpicker').selectpicker('refresh');
    });


    if (this.role_id >= 3) {
      let getSessionstorageValueAssetID = sessionStorage.getItem('setSessionstorageValueUserAssetID');
      let getSessionstorageValueUserReport = sessionStorage.getItem('setSessionstorageValueUserReport');

      $.getJSON(this.api_assets, function (data) {
        $('#load-assets').append($('<option></option>').val(0).html('---'));
        $.each(data, function (index, item) {
          if (item.AssetID == Number(getSessionstorageValueAssetID)) {
            $('#load-assets').append($('<option selected="selected"></option>').val(item.AssetID).html(item.Name));
          } else {
            $('#load-assets').append($('<option></option>').val(item.AssetID).html(item.Name));
          }
         
        });
        $('.selectpicker').selectpicker('refresh');
      });

      $.getJSON(this.api_reports, function (data) {
        $('#load-report').append($('<option></option>').val(0).html('---'));
        $.each(data, function (index, item) {
          if (item.ReportID == Number(getSessionstorageValueUserReport)) {
            $('#load-report').append($('<option selected="selected"></option>').val(item.ReportID).html(item.Name));
          } else {
            $('#load-report').append($('<option></option>').val(item.ReportID).html(item.Name));
          }

        });
        $('.selectpicker').selectpicker('refresh');
      });

      $(".selectpicker").selectpicker('refresh');
    } else {

      $.getJSON(this.api_assets, function (data) {
        $('#load-assets').append($('<option></option>').val(0).html('---'));
        $.each(data, function (index, item) {
          $('#load-assets').append($('<option></option>').val(item.AssetID).html(item.Name));
        });
        $('.selectpicker').selectpicker('refresh');
      });

      $.getJSON(this.api_reports, function (data) {
        $('#load-report').append($('<option></option>').val(0).html('---'));
        $.each(data, function (index, item) {
          $('#load-report').append($('<option></option>').val(item.ReportID).html(item.Name));
        });
        $('.selectpicker').selectpicker('refresh');
      });

    }

  
    var dateFormat = "D-MMM-YYYY HH:mm A";
    var d1 = new Date();
    d1.setHours(0);
    d1.setMinutes(0);
    var dateFrom = moment(d1).format(dateFormat);

    var d2 = new Date();
    d2.setDate(d2.getDate());
    var dateTo = moment(d2).format(dateFormat);
   
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


    //Timer 
    setInterval(() => {
      this.time = new Date();
    }, 1000);

    //Setup new Nav bar
    if (this.role_id >= 3) {

      this.navItems = [{
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
      },
      {
        name: 'Tracking',
        url: '/tracking',
        icon: 'icon-map',
        badge: {
          variant: 'info',
          text: 'Live Map'
        },
        children: [
          {
            name: 'Fleet',
            url: '/tracking',
            icon: 'fa fa-car'
          },
          {
            name: 'Traffic',
            url: '/tracking/traffic',
            icon: 'icon-puzzle'
          },
          {
            name: 'Weather',
            url: '/tracking/weather',
            icon: 'icon-puzzle'
          },
          {
            name: 'Heat Map',
            url: '/tracking/heatmap',
            icon: 'icon-puzzle'
          },
        ]
      },
      {
        name: 'Reports',
        url: '/reports',
        icon: 'icon-chart',
      },
      {
        name: 'Settings',
        url: '/settings',
        icon: 'cui-cog icons',
        children: [
          {
            name: 'Users',
            url: '/users',
            icon: 'icon-user'
          },
          {
            name: 'Companies',
            url: '/companies',
            icon: 'fa fa-building-o'
          },
          {
            name: 'Reseller',
            url: '/reseller',
            icon: 'icon-people',
            attributes: {
              hidden: true
            }
          },
        ]
        },
        {
          name: 'Download iOS',
          url: 'http://coreui.io/angular/',
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
        }];
    } 

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

  }

  generate() {
    this.eventEmitterService.sendClickEvent();
  }

  onOptionsSelectedReseller(value: any) {

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
    Number(sessionStorage.setItem('setSessionstorageValueCompanyID', value));
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
    sessionStorage.removeItem("setSessionstorageValueCompanyID");
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
