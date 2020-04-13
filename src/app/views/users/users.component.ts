declare var $: any;
import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import axios from "axios";
import * as CryptoJS from 'crypto-js';

let _table: any = $("#userData");

//import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


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
  api_users = this._constant.getUsers();
  api_assets = this._constant.getAssets();
 

  constructor(private _constant: ConstantsService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {

    let api = this.api_users;
    let api_userrole = this._constant.userroleApi;
    let api_usernotifications = this._constant.userNotificationsApi;
    let default_reseller = this._constant.getSessionstorageValueUserResellerID;
    let default_company = this._constant.getSessionstorageValueCompanyID;
    let apiusers = this._constant.userApi;

    axios.get(this.api_reseller)
      .then(function (response) {
        var data = response.data;

        for (var i = 0; i < data.length; i++) {
          var reseller_ID = data[i].ResellerID;
          if (reseller_ID == default_reseller) {
             $('#userReseller').append($('<option selected="selected"></option>').val(data[i].ResellerID).html(data[i].Name));
           } else {
             $('#userReseller').append($('<option></option>').val(data[i].ResellerID).html(data[i].Name));
           }
        }
        $('.selectpicker').selectpicker('refresh');
      })
      .catch(function (error) {
        console.log(error);
        alert(error)
      });

    $.getJSON(this.api_company, function (data) {
      $('#userCompany').append($('<option></option>').val(0).html('---'));
      $.each(data, function (index, item) {
        if (item.CompanyID == default_company) {
          $('#userCompany').append($('<option selected="selected"></option>').val(item.CompanyID).html(item.Name));
        } else {
          $('#userCompany').append($('<option></option>').val(item.CompanyID).html(item.Name));
        }
      });
      $('.selectpicker').selectpicker('refresh');
    });

    axios.get(this.api_assets)
      .then(function (response) {
        var data = response.data;

        for (var i = 0; i < data.length; i++) {
          var assets_ID = data[i].AssetID;
            $('#userAssets').append($('<option></option>').val(data[i].AssetID).html(data[i].Name));
        }
        $('.selectpicker').selectpicker('refresh');
      })
      .catch(function (error) {
        console.log(error);
        alert(error)
      });

    $.getJSON(api_userrole, function (data) {
      $.each(data, function (index, item) {
        $('#userRole').append($('<option></option>').val(item.RoleID).html(item.RoleDesc));
      });
      $('.selectpicker').selectpicker('refresh');
    });

    $.getJSON(api_usernotifications, function (data) {
      $.each(data, function (index, item) {
        if (item.StatusID != 4 || item.StatusID != 20 || item.StatusID != 21) {
          $('#userNotifications').append($('<option></option>').val(item.StatusID).html(item.StatusDesc));
        }
      });
      $('.selectpicker').selectpicker('refresh');
    });


    _table = $("#userData").DataTable({
      "destroy": true,
      "responsive": true,
      "fixedHeader": false,
      "select": true,
      "filter": true,
      "colReorder": false,
      "rowReorder": true,
      "keys": true,
      "scrollX": true,
      "scrollCollapse": true,
      "stateSave": true,
      "paging": true,
      "pagingType": "full_numbers",
      "pageLength": 10,
      "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, 'All']],
      "searching": true,
      "ordering": true,
      "order": [[0, 'asc']],
      "info": true,
      "dom": '<"addNew"><"floatRight"B><"top"l>frti<"bottom"p><"clear">',
      "language": {
        "zeroRecords": "Nothing found - sorry",
        "infoEmpty": "No events available",
        "infoFiltered": "(filtered from MAX total events)"
      },
      "buttons": [
        { extend: 'colvis', className: 'float-right'},
        [
          {
            extend: 'collection',
            text: 'Export',
            className: 'float-right',
            buttons: [
              'excel',
              'csv',
              'pdf',
              'print'
            ]
          },
        ],
        { extend: 'copy', className: 'copyBtn' },
        {
          text: 'Refresh',
          className: 'refreshBtn float-right ml-2',
          action: function (e, dt, node, config) {
            $('#userData').DataTable().ajax.reload();
          }
        },
      ],
      "columns": [
        { data: "UserID", title: "ID", className: 'reorder' },
        { data: "Image", title: "Image", className: 'reorder' },
        { data: "Name", title: "Name", className: 'reorder' },
        { data: "User", title: "Username", className: 'reorder' },
        { data: "Phone", title: "Phone", className: 'reorder' },
        { data: "Email", title: "Email", className: 'reorder' },
        { data: "RoleDesc", title: "Role", className: 'reorder' },
        { data: "ResellerDesc", title: "Reseller", className: 'reorder' },
        { data: "Company", title: "Company", className: 'reorder' },
        { data: "Assets", title: "Assets", className: 'reorder' },
        { data: "Notifications", title: "Notifications", className: 'reorder' },
        {
          data: null,
          title: "Action",
          className: "center",
          defaultContent: '<a class="editUser"><i class="fa fa-edit"></i></a> &emsp; <a class="deleteUser" data-toggle="modal"><i class="fa fa-trash"></i></a>'
        }
      ],
      "ajax": {
        url: api,
        type: 'GET',
        dataType: 'json',
        dataSrc: ''
      },
      "columnDefs": [
        {
          "render": function (data, type, row) {
            if (row.ImageFill == "Uniform") {
              return '<img src="' + data + '" width="50" height="50">'
            } else {
              return '<img src="assets/img/default-avatar.png" width="50" height="50">'
            }
          },
          "targets": 1
        },

      ],
      "initComplete": function (data, type, row) {
        $(".addNew").html('<button id="add" class="addBtn float-left">Add New</button>');
        $('#add').on('click', function (e) {
          $('#userModal').modal("show");
          $('#userFormTitle').text('Add New User');
          clearForms();
        });
      },
      "footerCallback": function (row, data, start, end, display) {
      }
    })

    
    function clearForms() {
      $('#userID').val('');
      $('#userImageBox').attr('src', 'assets/img/default-avatar.png').width(110).height(110);
      $('#userFullName').val('');
      $('#userLoginName').val('');
      $('#userLoginPassword').val('');
      $('#userConfirmPassword').val('');
      $('#userPhone').val('');
      $('#userEmail').val('');
    }
    _table.column(9).visible(false);


  /*----------------------------------------------------------- Edit User -----------------------------------------------------*/

    $('#userData').on('click', 'a.editUser', { param: this.user_id }, function (e) {

      $('#userModal').modal('show');
      $('#userFormTitle').text('Edit User');

      $('#userCompany').empty();
      $('#userAssets').empty();

      var data = _table.row($(this).parents('tr')).data();
      let _companyID: Number = data.CompanyID;


      $.getJSON("https://app.track-asia.com/tracksgwebapi/api/companyinfo?&ResellerID=" + data.ResellerID, function (data) {
        $.each(data, function (index, item) {
          if (Number(item.CompanyID) == _companyID) {
            $('#userCompany').append($('<option selected="selected"></option>').val(item.CompanyID).html(item.Name));
          } else {
            $('#userCompany').append($('<option></option>').val(item.CompanyID).html(item.Name));
          }
        });
        $('.selectpicker').selectpicker('refresh');
      });

      axios.get("https://app.track-asia.com/tracksgwebapi/api/assetinfo?&UserID=" + e.data.param + "&ResellerID=" + data.ResellerID + "&CompanyID=" + data.CompanyID)
        .then(function (response) {
          var data = response.data;
          for (var i = 0; i < data.length; i++) {
            $('#userAssets').append($('<option></option>').val(data[i].AssetID).html(data[i].Name));
          }
          $('.selectpicker').selectpicker('refresh');
        })
        .catch(function (error) {
          console.log(error);
          alert(error)
        });

      $('#userID').val(data.UserID);
      $('#userImageBox').attr('src', data.Image).width(110).height(110);
      $('#userFullName').val(data.Name);
      $('#userLoginName').val(data.User);
      $('#userStatus').val(data.Flag);
      $('#userLoginPassword').val(data.Password);
      $('#userConfirmPassword').val(data.Password);
      $('#userPhone').val(data.Phone);
      $('#userEmail').val(data.Email);
      $('#userReseller').val(data.ResellerID);
      $('#userCompany').val(data.CompanyID);
      $('#userRole').val(data.RoleID);

      /*------------------------------ Notification in Edit ---------------------------------*/

      var Notifications = data.Notifications;
      var AssignedNotifications = new Array();
      AssignedNotifications = Notifications.split(",");
      var getNotification = new Array();
      var getNotificationType = new Array();

      var Email = AssignedNotifications[0].substring(3, 4) + "E";
      var SMS = AssignedNotifications[0].substring(4, 5) + "S";
      var UI = AssignedNotifications[0].substring(5, 6) + "U";
      getNotificationType.push(Email, SMS, UI);

      for (var n = 0; n < AssignedNotifications.length; n++) {
        var arrNotification = AssignedNotifications[n].substring(0, 2);
        getNotification.push(arrNotification);
      }

      $('#userNotifications').val(getNotification);
      $('#userNotificationsType').val(getNotificationType);

      /*---------------------------------- Assets in Edit ------------------------------------*/

      var Assets = data.Assets;
      var AssignedAssets = new Array();
      AssignedAssets = Assets.split(",");
      var getAsset = new Array();

      for (var a = 0; a < AssignedAssets.length; a++) {
        let arrAsset: Number = AssignedAssets[a];
        getAsset.push(Number(arrAsset));
      }

      setTimeout(function () {
        $('#userAssets').val(getAsset);
        $('#userAssets').selectpicker('refresh');
      }, 500);

      /*---------------------------------------------------------------*/

      $('.selectpicker').selectpicker('refresh');
    });


  /*----------------------------------------------------------- Delete User -----------------------------------------------------*/

    $('#userData').on('click', 'a.deleteUser', function (e) {

      $('#deleteUser').modal('show');
      var data = _table.row($(this).parents('tr')).data();
      $('#userID').val(data.UserID);
      $('#deleteUser').on('click', '.deleteUserBtn', function (e) {
        let obj: any = {
          UserID: data.UserID,
        };
        axios.delete(apiusers + obj.UserID, obj)
          .then(function (response) {
            console.log(response);
            $('#userModal').modal('hide');
            $('#deleteUser').modal('hide');
            $("#userData").DataTable().ajax.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
      });
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
        $('#userLabelUpload').val(''); //for clearing with Jquery
      } else {
        if (file.files && file.files[0]) {
          reader.onload = function (e) {
            $('#userImageBox')
              .attr('src', e.target.result)
              .width(110)
              .height(110);
          };
          reader.readAsDataURL(file.files[0]);
          $('#userLabelUpload').text("File " + file.files[0].name + " is " + Math.round(FileSize * 100) / 100 + " MB in size");
        }
      }
    }

  }


/*------------------ Reseller > Company > Assets -----------------*/

  onOptionsSelectedReseller(value: any) {
    Number(sessionStorage.setItem('setSessionstorageValueUserResellerID', value));
    $('#userCompany').empty();
    $('#userAssets').empty();

    $.getJSON(this._constant.getCompaniesUserFilter(), function (data) {
      $('#userCompany').append($('<option></option>').val(0).html('---'));
      $.each(data, function (index, item) {
        $('#userCompany').append($('<option></option>').val(item.CompanyID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });
    $(".selectpicker").selectpicker('refresh');
  }
  onOptionsSelectedCompany(value: any) {
    Number(sessionStorage.setItem('setSessionstorageValueUserCompanyID', value));
    let selected_reseller = $('#userReseller').val();
    let selected_company = $('#userCompany').val();
    let api_assets_filter: string = getAssetsUserFilter(this.role_id, this.base, this.uri, selected_reseller, selected_company);

    function getAssetsUserFilter(role_id: Number, base: string, uri: string, selected_reseller: Number, selected_company: Number) {
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

  }


  /*----------------------------------------------------------- Submit User -----------------------------------------------------*/

  onSubmit() {

    var flag;
    if ($('#userStatus').prop("checked") == true) {
      flag = 1;
    } else {
      flag = 0;
    }

    //this.activeModal.close(true);

    /*------------------------------------------ Vehicle Array to String ----------------------------------------*/
    var getAssets = $('#userAssets').val();
    var ObjAssets = JSON.stringify(getAssets);
    var parseObjAssets = ObjAssets.replace(/\[|\"|\]/g, "");



   /*------------------------------------------------- User Password ----------------------------------------------*/

    var GetUserID = $('#userID').val();
    var hashPassword = "";
    var getPassword = $('#userLoginPassword').val();
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


  /*-------------------------------------------------- Notifications --------------------------------------------*/

    var getAlertType = $('#userNotificationsType').val();
    var getAlerts = $('#userNotifications').val();

    var parseObjAlerts;
    if (getAlertType != null) {
      var i = 0;
      var ConcateC = "";
      for (i = 0; i < getAlertType.length; i++) {
        ConcateC += getAlertType[i];

      }
      var MergeAlert = [];
      for (i = 0; i < getAlerts.length; i++) {
        MergeAlert[i] = getAlerts[i] + ":" + ConcateC;
        //alert(c[i]);
      }
      var ObjAlerts = JSON.stringify(MergeAlert);
      parseObjAlerts = ObjAlerts.replace(/\[|\"|\]|\E|S|U/g, "");
    }


    /*---------------------------------------------------------- Save Data to DataTable ------------------------------------*/

    let obj: any = {
      UserID: $('#userID').val(),
      Flag: flag,
      Name: $('#userFullName').val(),
      User: $('#userLoginName').val(),
      Password: hashPassword,
      Phone: $('#userPhone').val(),
      Email: $('#userEmail').val(),
      ResellerID: $('#userReseller').val(),
      CompanyID: $('#userCompany').val(),
      LoginRetry: 10,
      Reports: "",
      Language: "English",
      ApiKey: '',
      RoleID: $('#userRole').val(),
      Assets: parseObjAssets,
      Notifications: parseObjAlerts,
    };

    if (obj.UserID == 'undefined' || obj.UserID == null || obj.UserID == 0) {

      axios.post(this._constant.userApi, obj)
        .then(function (res) {

          /*------------------------------------------------- User Image ----------------------------------------------*/

          var data = new FormData();
          var files = $("#uploadUser").get(0).files;
          if (files.length > 0) {
            data.append("UploadedImageUser", files[0], res.data.UserID  + ".png");

            $.ajax({
              type: "POST",
              url: "https://app.track-asia.com/tracksgwebapi/api/fileupload/uploadfileuser",
              contentType: false,
              processData: false,
              data: data,
              success: function (data) {
                console.log('success');

                $('#userModal').modal('hide');
                $('#confirmUser').modal('hide');
                $("#userData").DataTable().ajax.reload();
              }
            });
          }

          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });

    } else {

      axios.put(this._constant.userApi + this._constant.param_put + obj.UserID, obj)
        .then(function (response) {
          console.log(response);

          /*------------------------ Save Edited Image ------------------------*/
          var data = new FormData();
          var files = $("#uploadUser").get(0).files;
          if (files.length > 0) {
            data.append("UploadedImageUser", files[0], obj.UserID + ".png");
          }

          $.ajax({
            type: "POST",
            url: "https://app.track-asia.com/tracksgwebapi/api/fileupload/uploadfileuser",
            contentType: false,
            processData: false,
            data: data,
            success: function (data) {
              console.log('success');

              $('#userModal').modal('hide');
              $('#confirmUser').modal('hide');
              $("#userData").DataTable().ajax.reload();
            }
          });

        })
        .catch(function (error) {
          console.log(error);
        });
    }



  }

  

}
