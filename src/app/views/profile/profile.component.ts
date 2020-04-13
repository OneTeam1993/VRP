declare var $: any;
import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import axios from "axios";
import * as CryptoJS from 'crypto-js';

//import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  base = this._constant.baseAppUrl;
  uri = this._constant.uri_track;
  user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
  profileName = sessionStorage.getItem('setSessionstorageValueName');
  username = sessionStorage.getItem('SetUsername');
  profilePassword = sessionStorage.getItem('SetPassword');
  profilePhone = sessionStorage.getItem('setSessionstorageValuePhone');
  profileEmail = sessionStorage.getItem('setSessionstorageValueEmail');
  profileImage = sessionStorage.getItem('setSessionstorageValueUserImage');
  profileImageFill = sessionStorage.getItem('setSessionstorageValueUserImageFill');
  profileAssets = sessionStorage.getItem('setSessionstorageValueUserAssets');
  profileReseller = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
  profileCompany = Number(sessionStorage.getItem('setSessionstorageValueUserCompanyID'));
  profileRole = Number(sessionStorage.getItem('setSessionstorageValueRoleID'));
  profileNotification = sessionStorage.getItem('setSessionstorageValueUserNotifications');
  api_reseller = this._constant.getResellers();
  route: string;

  constructor(private _constant: ConstantsService, private activeModal: NgbActiveModal, location: Location, private router: Router) {

    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
      }

    });
  }

  ngOnInit(): void {

  /*------------------------------ Display info in fields -----------------------------------------------------*/
    let router: any = this.router;
    let profileReseller = this._constant.getSessionstorageValueUserResellerID;
    let profileCompany = this.profileCompany;
    let profileRole = this.profileRole;
    let profileNotification = this.profileNotification;
    let user_id = this._constant.getSessionstorageValueUserID;
    let api_user = this._constant.userApi;

    axios.get(this.api_reseller)
      .then(function (response) {
        var data = response.data;
        for (var i = 0; i < data.length; i++) {
          var reseller_ID = data[i].ResellerID;
          if (reseller_ID == profileReseller) {
            $('#profileReseller').append($('<option selected="selected"></option>').val(data[i].ResellerID).html(data[i].Name));
          } else {
            $('#profileReseller').append($('<option></option>').val(data[i].ResellerID).html(data[i].Name));
          }
        }
        $('.selectpicker').selectpicker('refresh');
      })
      .catch(function (error) {
        console.log(error);
        alert(error)
      });



    $.getJSON("https://app.track-asia.com/tracksgwebapi/api/companyinfo?&ResellerID=" + profileReseller, function (data) {
      $.each(data, function (index, item) {
        if (Number(item.CompanyID) == profileCompany) {
          $('#profileCompany').append($('<option selected="selected"></option>').val(item.CompanyID).html(item.Name));
        } else {
          $('#profileCompany').append($('<option></option>').val(item.CompanyID).html(item.Name));
        }
      });
      $('.selectpicker').selectpicker('refresh');
    });

    /*------------------ Click to Show Image in Modal + Size Notification -----------------*/

    $("input[type='file']").on('click', function () {
      if (!$(this).val()) {
        //Initial Case when no document has been uploaded
        $("input[type='file']").change(function () {
          ValidateSize(this);
        });
      } else {
        //Subsequent cases when the exact same document will be uploaded several times
        $(this).val('');
        $("input[type='file']").unbind('change');
        $("input[type='file']").change(function () {
          ValidateSize(this);
        });
      }
    });

    function ValidateSize(file) {
      var reader = new FileReader();
      var FileSize = file.files[0].size / 1024 / 1024; // in MB
      if (FileSize > 1) {
        alert('File size exceeds 1 MB');
        $('#profileLabelUpload').val(''); //for clearing with Jquery
      } else {
        if (file.files && file.files[0]) {
          reader.onload = function (e) {
            $('#profileImageBox')
              .attr('src', e.target.result)
              .width(110)
              .height(110);
          };
          reader.readAsDataURL(file.files[0]);
          $('#profileLabelUpload').text("File " + file.files[0].name + " is " + Math.round(FileSize * 100) / 100 + " MB in size");
        }
      }
    }

    $('#profileID').val(this.user_id);
    $('#profileImageBox').attr('src', this.profileImage).width(110).height(110);
    $('#profileFullName').val(this.profileName);
    $('#username').val(this.username);
    $('#profilePassword').val(this.profilePassword);
    $('#profileConfirmPassword').val(this.profilePassword);
    $('#profilePhone').val(this.profilePhone);
    $('#profileEmail').val(this.profileEmail);
    $('#profileReseller').val(profileReseller);
    $('#profileCompany').val(profileCompany);
    //$('#profileAssets').val(getAsset);
    $('#profileRole').val(profileRole);


    /*------------------ Delete Profile -----------------*/

    $('#deleteProfile').on('click', '.deleteProfileBtn', { route: router }, function (e) {

      var router = e.data.route;

      let obj: any = {
        UserID: user_id,
      };
      axios.delete(api_user + obj.UserID, obj)
          .then(function (response) {
            console.log(response);
            $('#deleteProfile').modal('hide');
            router.navigate(['/login']);
          })
          .catch(function (error) {
            console.log(error);
          });
      });


  }

  onSubmit() {

    let profileRole = Number(sessionStorage.getItem('setSessionstorageValueRoleID'));

    /*------------------------------------------------- User Password ----------------------------------------------*/
    var GetUserID = $('#profileID').val();
    var hashPassword = "";
    var getPassword = $('#profilePassword').val();
    try {
      if (GetUserID == null || GetUserID == "" || GetUserID == "undefined") {
        var hash = CryptoJS.SHA3(getPassword, { outputLength: 256 }).toString();
        hashPassword = hash;
      }
      else if (GetUserID != null && getPassword.length == 256) {
        hashPassword = getPassword;
      }
      else {
        if (getPassword.length == 64) {
          hashPassword = getPassword;
        }
        else {
          var hash = CryptoJS.SHA3(getPassword, { outputLength: 256 }).toString(CryptoJS.enc.Base64);
          hashPassword = hash;
        }
      }
    }
    catch (e) {
      console.log('You got this error: ' + e);
    }

    let obj: any = {
      UserID: $('#profileID').val(),
      Name: $('#profileFullName').val(),
      User: $('#username').val(),
      Password: hashPassword,
      RoleID: this.profileRole,
      Phone: $('#profilePhone').val(),
      Email: $('#profileEmail').val(),
      CompanyID: $('#profileCompany').val(),
      Assets: sessionStorage.getItem('setSessionstorageValueUserAssets'),
      Notifications: this.profileNotification,
      LoginRetry: 10,
      Reports: "",
      Language: "English",
      ApiKey: '',
      ResellerID: $('#profileReseller').val(),
    };

    alert(JSON.stringify(obj))

    axios.put("https://app.track-asia.com/tracksgwebapi/api/userinfo?id=" + obj.UserID, obj)
      .then(function (response) {
        console.log(response);

        /*------------------------ Save Edited Image ------------------------*/
        var data = new FormData();
        var files = $("#uploadProfile").get(0).files;
        if (files.length > 0) {
          data.append("UploadedImageUser", files[0], obj.UserID + ".png");
        }

        var ajaxRequest = $.ajax({
          type: "POST",
          url: "https://app.track-asia.com/tracksgwebapi/api/fileupload/uploadfileuser",
          contentType: false,
          processData: false,
          data: data,
          success: function (data) {
            console.log('success');
          }
        });

        ajaxRequest.done(function (responseData, textStatus) {
          if (textStatus == 'success') {
            if (responseData != null) {
              if (responseData.Key) {
                alert(responseData.Value);
                $("#uploadProfile").val('');
              } else {
                alert(responseData.Value);
              }
            }
          } else {
            alert(responseData.Value);
          }
        });

      })
      .catch(function (error) {
        console.log(error);
      });

  }

}
