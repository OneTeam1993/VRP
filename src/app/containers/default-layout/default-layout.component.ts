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

    $.getJSON(this.api_assets, function (data) {
      $('#load-assets').append($('<option></option>').val(0).html('---'));
      $.each(data, function (index, item) {
        //$('#load-assets').append($('<option></option>').val(item.AssetID).html(item.Name));
        $('#load-assets').append($('<option></option>').val(item.Name).html(item.Name));
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

    var getReport = $("#load-report").val();

    if (getReport == 3) {
      $('#_speed').hide();
    } else {
      $('#_speed').show();
    }

    var dateFormat = "D-MMM-YYYY HH:mm A";
    var d1 = new Date();
    d1.setHours(0);
    d1.setMinutes(0);
    var dateFrom = moment(d1).format(dateFormat);

    var d2 = new Date();
    d2.setDate(d2.getDate() + 1);
    d2.setHours(0);
    d2.setMinutes(0);
    var dateTo = moment(d2).format(dateFormat);

    $('#dateFrom').datetimepicker({
      format: 'd-M-Y H:i A',
      theme: 'dark',
      lang: 'en',
      value: dateFrom
    });

    $('#dateTo').datetimepicker({
      format: 'd-M-Y H:i A',
      theme: 'dark',
      lang: 'en',
      value: dateTo
    });

    //Timer 
    setInterval(() => {
      this.time = new Date();
    }, 1000);

  }
    generate() {
    this.eventEmitterService.sendClickEvent();
  }
  onOptionsSelectedReseller(value: any) {
    Number(sessionStorage.setItem('setSessionstorageValueUserResellerID', value));
    $("#getMove").hide().html('0').fadeIn('0');
    $("#getIdle").hide().html('0').fadeIn('0');
    $("#getStop").hide().html('0').fadeIn('0');
    $("#getDown").hide().html('0').fadeIn('0');
    $('#assetStatus').empty(); //table
    $('#load-company').empty();
    $('#load-assets').empty();

    $('#load-company').append($('<option></option>').val(0).html('---'));

    $.getJSON(this._constant.getCompaniesFilter(), function (data) {
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

      var getCountMove = 0;
      var getCountIdle = 0;
      var getCountStop = 0;
      var getCountDown = 0;

      document.getElementById("getMove").innerHTML = getCountMove.toString();
      document.getElementById("getIdle").innerHTML = getCountIdle.toString();
      document.getElementById("getStop").innerHTML = getCountStop.toString();
      document.getElementById("getDown").innerHTML = getCountDown.toString();

      $('#assetStatus').empty(); //Table
      $('#load-assets').empty();

      $(".selectpicker").selectpicker('refresh');

    }

  }
  onOptionsSelectedAsset(value: any) {
      
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
    this.sidebarMinimized = e;
  }
}
