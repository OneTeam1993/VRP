declare var $: any;
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import axios from "axios";
import * as CryptoJS from 'crypto-js';

let _table: any = $("#driverData");
let _import: any = $("#importPersonnelTable");
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

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
  api_drivers = this._constant.getDrivers();
  api_assets = this._constant.getAssets();
 

  constructor(private _constant: ConstantsService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {

    let api = this.api_drivers;
    let driverApi = this._constant.driverApi;
    let default_reseller = this._constant.getSessionstorageValueUserResellerID;
    let default_company = this._constant.getSessionstorageValueCompanyID;

    axios.get(this.api_reseller)
      .then(function (response) {
        var data = response.data;

        for (var i = 0; i < data.length; i++) {
          var reseller_ID = data[i].ResellerID;
          if (reseller_ID == default_reseller) {
            $('#driverReseller').append($('<option selected="selected"></option>').val(data[i].ResellerID).html(data[i].Name));
          } else {
            $('#driverReseller').append($('<option></option>').val(data[i].ResellerID).html(data[i].Name));
          }
        }
        $('.selectpicker').selectpicker('refresh');
      })
      .catch(function (error) {
        console.log(error);
        alert(error)
      });

    $.getJSON(this.api_company, function (data) {
      $('#driverCompany').append($('<option></option>').val(0).html('---'));
      $.each(data, function (index, item) {
        if (item.CompanyID == default_company) {
          $('#driverCompany').append($('<option selected="selected"></option>').val(item.CompanyID).html(item.Name));
        } else {
          $('#driverCompany').append($('<option></option>').val(item.CompanyID).html(item.Name));
        }
      });
      $('.selectpicker').selectpicker('refresh');
    });

    axios.get(this.api_assets)
      .then(function (response) {
        var data = response.data;

        for (var i = 0; i < data.length; i++) {
          var assets_ID = data[i].AssetID;
          $('#driverAssets').append($('<option></option>').val(data[i].AssetID).html(data[i].Name));
        }
        $('.selectpicker').selectpicker('refresh');
      })
      .catch(function (error) {
        console.log(error);
        alert(error)
      });


    _table = $("#driverData").DataTable({
      "destroy": true,
      "responsive": false,
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
       "dom": '<"addNew"><"import"><"floatRight"B><"top"l>frti<"bottom"p><"clear">',
      "language": {
        "zeroRecords": "Nothing found - sorry",
        "infoEmpty": "No events available",
        "infoFiltered": "(filtered from MAX total events)"
      },
      "buttons": [
        { extend: 'colvis', className: 'float-right' },
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
            $('#driverData').DataTable().ajax.reload();
          }
        },
      ],
      "columns": [
        { data: "DriverID", title: "ID", className: 'reorder w30' },
        { data: "Image", title: "Image", className: 'reorder' },
        { data: "Name", title: "Name", className: 'reorder' },
        { data: "Phone", title: "Phone", className: 'reorder' },
        { data: "Email", title: "Email", className: 'reorder' },
        { data: "Address", title: "Address", className: 'reorder' },
        { data: "DateOfBirth", title: "Date of Birth", className: 'reorder' },
        { data: "Company", title: "Company", className: 'reorder' },
        { data: "Remarks", title: "Remarks", className: 'reorder' },
        {
          data: null,
          title: "Action",
          className: "center",
          defaultContent: '<a class="editDriver"><i class="fa fa-edit"></i></a> &emsp; <a class="deleteDriver" data-toggle="modal"><i class="fa fa-trash"></i></a>'
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
              return '<img src="../assets/img/default-avatar.png" width="50" height="50">'
            }
          },
          "targets": 1
        },
        {
          "render": function (data, type, row) {
            if (row.DateOfBirth == "0001-01-01T00:00:00") {
              return '---'
            } else {
              return moment(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
            }
          },
          "targets": 6
        },
        {
          "render": function (data, type, row) {
            if (row.AssetID == "0") {
              return '---'
            } else {
              return data;
            }
          },
          "targets": 8
        }
      ],
      "initComplete": function (data, type, row) {
        $(".addNew").html('<button id="add" class="addBtn float-left">Add New</button>');
        $('#add').on('click', function (e) {
          $('#driverModal').modal("show");
          $('#driverFormTitle').text('Add New Personnel');
          clearForms();
        });
	
       $(".import").html('<button id="import" class="importBtn float-left">Import</button>');
        $('#import').on('click', function (e) {
          $('#importPersonnelModal').modal("show");
          $('#importPersonnelFormTitle').text('Import Personnel');
          clearImportForms();
        });
      },
      "footerCallback": function (row, data, start, end, display) {
      }
    })

    function clearForms() {
      $('#driverID').val('');
      $('#driverImageBox').attr('src', 'assets/img/default-avatar.png').width(110).height(110);
      $("#uploadDriver").val('');
      $('#driverName').val('');
      $('#driverPassword').val('');
      $('#driverConfirmPassword').val('');
      $('#driverPhone').val('');
      $('#driverEmail').val('');
      $('#driverAddress').val('');
      $('#driverBirthDate').val('');
      $('#driverRemarks').val('');
    }
    _import = $("#importPersonnelTable").DataTable({
      "destroy": true,
      "responsive": false,
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
      "dom": '<"floatRight"B><"top"l>frti<"bottom"p><"clear">',
      "language": {
        "zeroRecords": "Nothing found - sorry",
        "infoEmpty": "No events available",
        "infoFiltered": "(filtered from MAX total events)"
      },
      "buttons": [
        { extend: 'colvis', className: 'float-right' }, 
        {
          text: 'Refresh',
          className: 'refreshBtn float-right ml-2',
          action: function (e, dt, node, config) {
            $('#importPersonnelTable').DataTable().ajax.reload();
          }
        },
      ],
      "columns": [
        { data: "DriverID", title: "ID", className: 'reorder' },
        { data: "Name", title: "Personnel", className: 'reorder' },
        { data: "Phone", title: "Phone", className: 'reorder' },
        { data: "Email", title: "Email", className: 'reorder' },
        { data: "Address", title: "Address", className: 'reorder' },
        { data: "DateOfBirth", title: "Date of Birth", className: 'reorder' },
        { data: "Company", title: "Company", className: 'reorder' },
        { data: "Asset", title: "Assigned Vehicle", className: 'reorder' },
        { data: "Remarks", title: "Remarks", className: 'reorder' },
      ],
      "columnDefs": [
        {
          "render": function (data, type, row) {
            if (row.DateOfBirth == "0001-01-01T00:00:00") {
              return '---'
            } else {
              return moment(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
            }
          },
          "targets": 5
        },
        {
          "render": function (data, type, row) {
            if (row.AssetID == "0") {
              return '---'
            } else {
              return data;
            }
          },
          "targets": 7
        }
      ],
      "footerCallback": function (row, data, start, end, display) {
      }
    })


    function clearImportForms() {
      $("#uploadImportPersonnel").val('');
    }


    /*------------------- Add Driver Date & Time Dropdown - Keep ---------------------------*/

    var dateFormat = "D-MMM-YYYY HH:mm A";

    var dDBD = new Date();
    dDBD.setHours(0);
    dDBD.setMinutes(0);
    var dateBirthDate = moment(dDBD).format(dateFormat);
     
    $('#driverBirthDate').datetimepicker({
      format: 'd-M-Y H:i A',
      theme: 'dark',
      lang: 'en',
      value: dateBirthDate
    });

  /*----------------------------------------------------------- Edit Driver -----------------------------------------------------*/

    $('#driverData').on('click', 'a.editDriver', {param: this.user_id}, function (e) {

      $('#driverModal').modal('show');
      $('#driverFormTitle').text('Edit Personnel');

      $('#driverCompany').empty();
      $('#driverAssets').empty();
      
      var data = _table.row($(this).parents('tr')).data();
      let _companyID: Number = data.CompanyID;

      $.getJSON("https://app.track-asia.com/tracksgwebapi/api/companyinfo?&ResellerID=" + data.ResellerID, function (data) {
        $.each(data, function (index, item) {
          if (Number(item.CompanyID) == _companyID) {
            $('#driverCompany').append($('<option selected="selected"></option>').val(item.CompanyID).html(item.Name));
          } else {
            $('#driverCompany').append($('<option></option>').val(item.CompanyID).html(item.Name));
          }
        });
        $('.selectpicker').selectpicker('refresh');
      });

      axios.get("https://app.track-asia.com/tracksgwebapi/api/assetinfo?&UserID=" + e.data.param + "&ResellerID=" + data.ResellerID + "&CompanyID=" + data.CompanyID)
        .then(function (response) {
          var _data = response.data;

          for (var i = 0; i < _data.length; i++) {
            $('#driverAssets').append($('<option></option>').val(_data[i].AssetID).html(_data[i].Name));
          }
          $('.selectpicker').selectpicker('refresh');
        })
        .catch(function (error) {
          console.log(error);
          alert(error)
        });

      $('#driverID').val(data.DriverID);
      $('#driverImageBox').attr('src', data.Image).width(110).height(110);
      $('#driverName').val(data.Name);
      $('#driverPassword').val(data.Password);
      $('#driverConfirmPassword').val(data.Password);
      $('#driverPhone').val(data.Phone);
      $('#driverEmail').val(data.Email);
      $('#driverAddress').val(data.Address);
      var stillUtc = moment.utc(data.DateOfBirth).toDate();
      var date_birth = moment(stillUtc).local().format(dateFormat);
      $('#driverBirthDate').val(date_birth);
      $('#driverReseller').val(data.ResellerID);
      $('#driverCompany').val(data.CompanyID);
      $('#driverRemarks').val(data.Remarks);

      /*---------------------------------- Assets in Edit ------------------------------------*/

        $('#driverAssets').val(data.AssetID);
        $('#driverAssets').selectpicker('refresh');

      /*---------------------------------------------------------------*/

      $('.selectpicker').selectpicker('refresh');
    });


  /*----------------------------------------------------------- Delete Driver -----------------------------------------------------*/

    $('#driverData').on('click', 'a.deleteDriver', function (e) {

      $('#deleteDriver').modal('show');
      var data = _table.row($(this).parents('tr')).data();
      $('#driverID').val(data.DriverID);
      $('#deleteDriver').on('click', '.deleteDriverBtn', function (e) {
        let obj: any = {
          DriverID: data.DriverID,
        };
        axios.delete(driverApi + obj.DriverID, obj)
          .then(function (response) {
            console.log(response);
            $('#driverModal').modal('hide');
            $('#deleteDriver').modal('hide');
            $("#driverData").DataTable().ajax.reload();
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
        $('#driverLabelUpload').val(''); //for clearing with Jquery
      } else {
        if (file.files && file.files[0]) {
          reader.onload = function (e) {
            $('#driverImageBox')
              .attr('src', e.target.result)
              .width(110)
              .height(110);
          };
          reader.readAsDataURL(file.files[0]);
          $('#driverLabelUpload').text("File " + file.files[0].name + " is " + Math.round(FileSize * 100) / 100 + " MB in size");
        }
      }
    }
  }

  /*------------------ Reseller > Company > Assets -----------------*/

  onOptionsSelectedReseller(value: any) {
    Number(sessionStorage.setItem('setSessionstorageValueUserResellerID', value));
    $('#driverCompany').empty();
    $('#driverAssets').empty();

    $.getJSON(this._constant.getCompaniesUserFilter(), function (data) {
      $('#driverCompany').append($('<option></option>').val(0).html('---'));
      $.each(data, function (index, item) {
        $('#driverCompany').append($('<option></option>').val(item.CompanyID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });
    $(".selectpicker").selectpicker('refresh');
  }
  onOptionsSelectedCompany(value: any) {
    Number(sessionStorage.setItem('setSessionstorageValueUserCompanyID', value));
    let selected_reseller = $('#driverReseller').val();
    let selected_company = $('#driverCompany').val();
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
    if ($('#driverStatus').prop("checked") == true) {
      flag = 1;
    } else {
      flag = 0;
    }

    //this.activeModal.close(true);

    /*------------------------------------------ Vehicle Array to String ----------------------------------------*/
    var getAssets = $('#driverAssets').val();
    var ObjAssets = JSON.stringify(getAssets);
    var parseObjAssets = ObjAssets.replace(/\[|\"|\]/g, "");

   /*------------------------------------------------- User Password ----------------------------------------------*/

    var GetDriverID = $('#driverID').val();
    var hashPassword = "";
    var getPassword = $('#driverPassword').val();
    try {
      if (GetDriverID == null || GetDriverID == "" || GetDriverID == "undefined") {
        var hash = CryptoJS.SHA3(getPassword, { outputLength: 256 }).toString();
        hashPassword = hash;
      }
      else if (GetDriverID != null && getPassword.length == 256) {
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

    

    /*---------------------------------------------------------- Save Data to DataTable ------------------------------------*/

    let obj: any = {
      DriverID: $('#driverID').val(),
      Flag: flag,
      Name: $('#driverName').val(),
      Password: hashPassword,
      Phone: $('#driverPhone').val(),
      Email: $('#driverEmail').val(),
      Address: $('#driverAddress').val(),
      DateOfBirth: $('#driverBirthDate').val(),
      ResellerID: $('#driverReseller').val(),
      CompanyID: $('#driverCompany').val(),
      AssetID: $('#driverAssets').val(),
      Remarks: $('#driverRemarks').val(),
    };

  /*------------------------------------------------- Driver Image ----------------------------------------------*/

    if (obj.DriverID == 'undefined' || obj.DriverID == null || obj.DriverID == 0) {

      axios.post(this._constant.driverApi, obj)
        .then(function (res) {

          var data = new FormData();
          var files = $("#uploadDriver").get(0).files;
          if (files.length > 0) {
            data.append("UploadedImageDriver", files[0], res.data.DriverID + ".png");

            $.ajax({
              type: "POST",
              url: "https://app.track-asia.com/tracksgwebapi/api/fileupload/uploadfile",
              contentType: false,
              processData: false,
              data: data,
              success: function (data) {
                console.log('success');
                $('#driverModal').modal('hide');
                $('#confirmDriver').modal('hide');
                $("#driverData").DataTable().ajax.reload();
                clearForms();
              }
            });

          } else {
            $('#driverModal').modal('hide');
            $('#confirmDriver').modal('hide');
            $("#driverData").DataTable().ajax.reload();
            clearForms();
          }
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });

    } else {

      axios.put(this._constant.driverApi + this._constant.param_put + obj.DriverID, obj)
        .then(function (response) {
          console.log(response);

          /*------------------------ Save Edited Image ------------------------*/
          var data = new FormData();
          var files = $("#uploadDriver").get(0).files;
          if (files.length > 0) {
            data.append("UploadedImageDriver", files[0], obj.DriverID + ".png");

            $.ajax({
              type: "POST",
              url: "https://app.track-asia.com/tracksgwebapi/api/fileupload/uploadfile",
              contentType: false,
              processData: false,
              data: data,
              success: function (data) {
                console.log('success');
                $('#driverModal').modal('hide');
                $('#confirmDriver').modal('hide');
                $("#driverData").DataTable().ajax.reload();
                clearForms();           
              }
            });
          } else {
            $('#driverModal').modal('hide');
            $('#confirmDriver').modal('hide');
            $("#driverData").DataTable().ajax.reload();
            clearForms();     
          }

        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function clearForms() {
      $("#uploadDriver").val('');
      $('#driverID').val('');
      $('#driverImageBox').attr('src', 'assets/img/default-avatar.png').width(110).height(110);
      $("#uploadDriver").val('');
      $('#driverName').val('');
      $('#driverPassword').val('');
      $('#driverConfirmPassword').val('');
      $('#driverPhone').val('');
      $('#driverEmail').val('');
      $('#driverAddress').val('');
      $('#driverBirthDate').val('');
      $('#driverRemarks').val('');
    }

  }


  clearForms() {

        $('#driverID').val('');
        $('#driverImageBox').attr('src', 'assets/img/default-avatar.png').width(110).height(110);
        $("#uploadDriver").val('');
        $('#driverName').val('');
        $('#driverPassword').val('');
        $('#driverConfirmPassword').val('');
        $('#driverPhone').val('');
        $('#driverEmail').val('');
        $('#driverAddress').val('');
        $('#driverBirthDate').val('');
        $('#driverRemarks').val('');
    }

}
