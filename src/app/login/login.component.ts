import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConstantsService } from '../common/services/constants.service';
import { ToastrService } from 'ngx-toastr';
import { Compiler } from '@angular/core';

import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
   styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  constructor(private http: HttpClient, private router: Router, private _constant: ConstantsService, private toastr: ToastrService, private _compiler: Compiler) {

  }

  ngOnInit() {

    if ($("#ctn-preloader").length > 0) {
        $('#top-bg').delay(1750).slideUp();
        $('#bottom-bg').delay(1750).slideUp();
        $('#loader-middle').delay(1500).fadeOut();
      // Preloader timeout
      setTimeout(() => {
        $('#ctn-preloader').addClass('d-none');
        this._compiler.clearCache();
      }, 2000);
    };

  }

  submit() {

    try {
      let username: string = $('#username').val().toString();
      let password: string = $('#password').val().toString();

      sessionStorage.setItem("SetUsername", username);
      sessionStorage.setItem("SetPassword", password);
    }
    catch (e) {
      console.log('You got this error: ' + e);
    }

    var getPassword = $('#password').val().toString();

    var hash = CryptoJS.SHA3(getPassword, { outputLength: 256 }).toString();


    var userlogin = {
      User: $('#username').val().toString(),
      Password: hash
    };

    this.http.post<any>(this._constant.url_login, userlogin, this._constant.httpOptions).subscribe(data => {

      console.log(data);

      if (data.ErrorMessage == null && data.LoginRetry == "Active") {

        let GetUserID: number = data.UserID;
        let GetCompany: string = data.Company;
        let GetCompanyID: number = data.CompanyID;
        let GetCompanyCode: number = data.CompanyCode;
        let GetEmail: string = data.Email;
        let GetPhone: string = data.Phone;
        let GetName: string = data.Name;
        let GetRoleID: number = data.RoleID;
        let GetRoleDesc: string = data.RoleDesc;
        let GetUser: string = data.User;
        let GetNotifications: string = data.Notifications;
        let GetResellerID: number = data.ResellerID;
        let GetResellerDesc: string = data.ResellerDesc;
        let GetImage: string = data.Image;
        let GetImageFill: string = data.ImageFill;
        let GetUserAssets: string = data.Assets;
        let GetImageCompany: number = data.ImageCompany;
        let GetImageFillCompany: string = data.ImageFillCompany;
        let GetCurrentDate = moment.utc().add(8, 'hours').format('D-MMM-YYYY, hh:mm:ss A');

        sessionStorage.setItem("setSessionstorageValueTrackVersion", this._constant.GetTrackVersion);
        sessionStorage.setItem("setSessionstorageValueUserID", GetUserID.toString());
        sessionStorage.setItem("setSessionstorageValueCompany", GetCompany);
        sessionStorage.setItem("setSessionstorageValueEmail", GetEmail);
        sessionStorage.setItem("setSessionstorageValuePhone", GetPhone);
        sessionStorage.setItem("setSessionstorageValueName", GetName);
        sessionStorage.setItem("setSessionstorageValueRoleID", GetRoleID.toString());
        sessionStorage.setItem("setSessionstorageValueRoleDesc", GetRoleDesc);
        sessionStorage.setItem("setSessionstorageValueUser", GetUser);
        sessionStorage.setItem("setSessionstorageValueUserLoginDate", GetCurrentDate);
        sessionStorage.setItem("setSessionstorageValueUserNotifications", GetNotifications);
        sessionStorage.setItem("setSessionstorageValueUserResellerDesc", GetResellerDesc);
        sessionStorage.setItem("setSessionstorageValueUserImage", GetImage);
        sessionStorage.setItem("setSessionstorageValueUserImageFill", GetImageFill);
        sessionStorage.setItem("setSessionstorageValueUserAssets", GetUserAssets);

        if (GetRoleID == 1) {
          Number(sessionStorage.setItem('setSessionstorageValueCompanyID', String(14)));
          Number(sessionStorage.setItem("setSessionstorageValueUserResellerID", String(4)));
        } else {
          sessionStorage.setItem("setSessionstorageValueCompanyID", GetCompanyID.toString());
          sessionStorage.setItem("setSessionstorageValueUserResellerID", GetResellerID.toString());
        }

        var getUserLogin = {
          AssetID: 0,
          TagID: 0,
          Timestamp: moment().format(),
          RxTime: moment().format(),
          StatusID: 13,
          Remarks: "Username: " + GetUser + "\n" + "Company:" + GetCompany + "\n",
          AlertLevel: 0,
          AlertLevelEx: 0,
          Flag: 1,
          AckUserID: GetRoleID,
          CompanyID: GetCompanyID
        };

        this.http.post<any>(this._constant.url_events, getUserLogin, this._constant.httpOptions).subscribe(events => {
          console.log(events);
          this.router.navigate(['/dashboard']);
          return false;

        });

      } else {
        console.log('Invalid Username or Password!!!');
        this.toastr.error('Invalid username or password! Pls. try again.', 'Error', {
          timeOut: 3000,
          closeButton: true,
          enableHtml: true,
        });
      }
    });



  }
}

