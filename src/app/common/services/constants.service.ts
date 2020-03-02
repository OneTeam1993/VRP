import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor(public http: HttpClient) {

  }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  readonly baseAppUrl: string = 'https://app.track-asia.com/';
  readonly mainAppURL: string = 'https://track-asia.com/';
  readonly uri_track: string = 'tracksgwebapi/api/';
  readonly resellerApi: string = this.baseAppUrl + this.uri_track + "resellerinfo/";
  readonly companyApi: string = this.baseAppUrl + this.uri_track + "companyinfo/";
  readonly assetApi: string = this.baseAppUrl + this.uri_track + "assetinfo/";
  readonly zoneApi: string = this.baseAppUrl + this.uri_track + "zoneinfo/";
  readonly zonetypeApi: string = this.baseAppUrl + this.uri_track + "zonetypeinfo/";
  readonly reportApi: string = this.baseAppUrl + this.uri_track + "reportinfo/";
  readonly param_put: string = "?id=";
  readonly url_login = 'https://app.track-asia.com/tracksgwebapi/api/login';
  readonly url_events = 'https://app.track-asia.com/tracksgwebapi/api/eventinfo';
  readonly GetTrackVersion = "sg";
 
  //Declare Session Storage
  readonly getSessionstorageValueLanguage: string = sessionStorage.getItem('setSessionstorageValueLanguage');
  readonly getSessionstorageValueUserID: number = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
  readonly getSessionstorageValueUser: string = sessionStorage.getItem('setSessionstorageValueUser');
  readonly getSessionstorageValueCompany: string = sessionStorage.getItem('setSessionstorageValueCompany');
  readonly getSessionstorageValueCompanyID: number = Number(sessionStorage.getItem('setSessionstorageValueCompanyID'));
  readonly getSessionstorageValueUserNotifications: string = sessionStorage.getItem('setSessionstorageValueUserNotifications');
  readonly getSessionstorageValueRoleID: number = Number(sessionStorage.getItem('setSessionstorageValueRoleID'));
  readonly getSessionstorageValueEmail: string = sessionStorage.getItem('setSessionstorageValueEmail');
  readonly getSessionstorageValueUserResellerID: number = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
  readonly getSessionstorageValueAssetReseller: string = sessionStorage.getItem('setSessionstorageValueAssetReseller');
  readonly getSessionstorageValueAssetCompany: string = sessionStorage.getItem('setSessionstorageValueAssetCompany');
  readonly getSessionstorageValueDefaultReseller: Number =  4;
  readonly getSessionstorageValueDefaultCompany: Number = 14;

  //Markers
  readonly mapTypeIds = ["Mapbox", "OSM", "PublicTransport", "OneMap"];
  readonly shape = {
    coord: [16, 0, 18, 1, 21, 2, 24, 3, 26, 4, 27, 5, 28, 6, 29, 7, 29, 8, 29, 9, 29, 10, 29, 11, 29, 12, 29, 13, 29, 14, 29, 15, 29, 16, 29, 17, 29, 18, 29, 19, 29, 20, 29, 21, 29, 22, 29, 23, 29, 24, 29, 25, 29, 26, 29, 27, 29, 28, 28, 29, 3, 29, 2, 28, 2, 27, 1, 26, 1, 25, 1, 24, 0, 23, 0, 22, 0, 21, 0, 20, 0, 19, 0, 18, 0, 17, 0, 16, 0, 15, 0, 14, 0, 13, 0, 12, 0, 11, 0, 10, 0, 9, 0, 8, 0, 7, 1, 6, 2, 5, 2, 4, 3, 3, 5, 2, 6, 1, 8, 0, 16, 0],
    type: 'poly'
  };

  getResellers() {
    let url: string;

    if (this.getSessionstorageValueRoleID == 1) {
      url = this.resellerApi;
    } else if (this.getSessionstorageValueRoleID == 2) {
      url = this.baseAppUrl + this.uri_track + 'resellerinfo' + '?UserID=' + this.getSessionstorageValueUserID + '&ResellerID=' + this.getSessionstorageValueUserResellerID + '&CompanyID=' + this.getSessionstorageValueCompanyID;
    } else if (this.getSessionstorageValueRoleID >= 3) {
      url = '';
    }

    return url;
  }

  getCompanies() {
    let url: string;

    if (this.getSessionstorageValueRoleID == 1) {
      url = this.baseAppUrl + this.uri_track + 'companyinfo' + '?&ResellerID=' + this.getSessionstorageValueUserResellerID;
    } else if (this.getSessionstorageValueRoleID == 2) {
      url = this.baseAppUrl + this.uri_track + 'companyinfo' + '?&ResellerID=' + this.getSessionstorageValueUserResellerID;
    } else if (this.getSessionstorageValueRoleID >= 3) {
      url = this.baseAppUrl + this.uri_track + 'companyinfo' + '?CompanyID=' + this.getSessionstorageValueCompanyID + "&ResellerID=" + this.getSessionstorageValueUserResellerID;
    }

    return url;
  }

  getCompaniesFilter() {
    let url: string;
    if (this.getSessionstorageValueRoleID == 1) {
      url = this.baseAppUrl + this.uri_track + 'companyinfo' + '?&ResellerID=' + $('#load-reseller').val();
    } else if (this.getSessionstorageValueRoleID == 2) {
      url = this.baseAppUrl + this.uri_track + 'companyinfo' + '?&ResellerID=' + $('#load-reseller').val();
    } else if (this.getSessionstorageValueRoleID >= 3) {
      url = this.baseAppUrl + this.uri_track + 'companyinfo' + '?CompanyID=' + $('#load-reseller').val() + "&ResellerID=" + $('#load-company').val();
    }
    return url;
  }

  getAssets() {
    let url: string;
    if (this.getSessionstorageValueRoleID == 1) {
      if (this.getSessionstorageValueDefaultReseller > 0 && this.getSessionstorageValueDefaultCompany > 0) {
        url = this.baseAppUrl + this.uri_track + 'assetinfo' + '?UserID=' + '&ResellerID=' + this.getSessionstorageValueUserResellerID + '&CompanyID=' + this.getSessionstorageValueCompanyID;
      } else {
        url = '';
      }
    } else if (this.getSessionstorageValueRoleID == 2) {

      url = this.baseAppUrl + this.uri_track + 'assetinfo' + '?UserID=' + this.getSessionstorageValueUserID + '&ResellerID=' + this.getSessionstorageValueUserResellerID + '&CompanyID=' + this.getSessionstorageValueCompanyID;

    } else if (this.getSessionstorageValueRoleID >= 3) {

      url = this.baseAppUrl + this.uri_track + 'assetinfo' + '?UserID=' + this.getSessionstorageValueUserID + '&ResellerID=' + this.getSessionstorageValueUserResellerID + '&CompanyID=' + this.getSessionstorageValueCompanyID;
    }
    return url;
  }

  getAssetsFilter() {
    let url: string;
    if (this.getSessionstorageValueRoleID == 1) {
      if (this.getSessionstorageValueDefaultReseller > 0 && this.getSessionstorageValueDefaultCompany > 0) {
        url = this.baseAppUrl + this.uri_track + 'assetinfo' + '?UserID=' + '&ResellerID=' + $('#load-reseller').val() + '&CompanyID=' + $('#load-company').val();
      } else {
        url = '';
      }
    } else if (this.getSessionstorageValueRoleID == 2) {

      url = this.baseAppUrl + this.uri_track + 'assetinfo' + '?UserID=' + this.getSessionstorageValueUserID + '&ResellerID=' + this.getSessionstorageValueUserResellerID + '&CompanyID=' + $('#load-company').val();

    } else if (this.getSessionstorageValueRoleID >= 3) {

      url = this.baseAppUrl + this.uri_track + 'assetinfo' + '?UserID=' + this.getSessionstorageValueUserID + '&ResellerID=' + this.getSessionstorageValueUserResellerID + '&CompanyID=' + $('#load-company').val();
    }
    return url;
  }

  getZones() {
    let url: string;
    if (this.getSessionstorageValueRoleID == 1) {

      if (this.getSessionstorageValueDefaultReseller > 0 && this.getSessionstorageValueDefaultCompany > 0) {
        url = this.baseAppUrl + this.uri_track + 'zoneinfo' + '?ResellerID=' + this.getSessionstorageValueUserResellerID + '&CompanyID=' + this.getSessionstorageValueCompanyID;
      } else {
        url = this.baseAppUrl + this.uri_track + 'zoneinfo' + '?ResellerID=' + this.getSessionstorageValueAssetReseller + '&CompanyID=' + sessionStorage.getItem('setSessionstorageValueDefaultCompany');
      }

    } else if (this.getSessionstorageValueRoleID == 2) {

      url = this.baseAppUrl + this.uri_track + 'zoneinfo' + '?ResellerID=' + this.getSessionstorageValueUserResellerID + '&CompanyID=' + sessionStorage.getItem('setSessionstorageValueDefaultCompany');

    } else if (this.getSessionstorageValueRoleID >= 3) {

      url = this.baseAppUrl + this.uri_track + 'zoneinfo' + '?ResellerID=' + this.getSessionstorageValueUserResellerID + '&CompanyID=' + this.getSessionstorageValueCompanyID;

    }

    return url;
  }

  getReports() {

    let url: string = this.reportApi;
    return url;
  }


}
