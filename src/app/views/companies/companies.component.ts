import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import axios from "axios";
declare var $: any;
let _table: any = $("#companyData");

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {

  base = this._constant.baseAppUrl;
  uri = this._constant.uri_track;
  user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
  reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
  company_id = Number(sessionStorage.getItem('setSessionstorageValueCompanyID'));
  role_id = Number(sessionStorage.getItem('setSessionstorageValueRoleID'));
  username = sessionStorage.getItem('setSessionstorageValueUser');
  company = sessionStorage.getItem('setSessionstorageValueCompany');
  route: string;
  constructor(private _constant: ConstantsService, location: Location, private router: Router) {

    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
      }

    });

  }

  ngOnInit(): void {

    let api = this._constant.companyApi;
    let api_reseller = this._constant.resellerApi;
    let base = this._constant.baseAppUrl;
    let uri = this._constant.uri_track;
    let user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
    let reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
    let company_id = Number(sessionStorage.getItem('setSessionstorageValueCompanyID'));
    let role_id = this._constant.getSessionstorageValueRoleID;
    let api_companies: string;

    if (role_id == 1) {
      api_companies = base + uri + 'companyinfo' + '?ResellerID=' + $('#load-reseller').val();
    } else if (role_id == 2) {
      api_companies = base + uri + 'companyinfo' + '?ResellerID=' + reseller_id;
    }
    if (role_id >= 3) {
      $('#_jds').hide();
      $('#_routing').hide();
      $('#_limits').hide();
      $('#company_reseller').hide();
      api_companies = base + uri + 'companyinfo' + '?ResellerID=' + reseller_id + "&CompanyID=" + company_id;
    }

    $.getJSON(api_reseller, function (data) {
      $.each(data, function (index, item) {
        $('#companyReseller').append($('<option></option>').val(item.ResellerID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });

    _table = $("#companyData").DataTable({
      "destroy": true,
      "responsive": false,
      "select": true,
      "filter": true,
      //"orderCellsTop": true,
      "fixedHeader": {
        "header": true,
        "footer": false
      },
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
      "dom": '<"addNew">Blfrtip',
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
            $('#resellerData').DataTable().ajax.reload();
          }
        },
      ],
      "columns": [
        //{ data: " ", title: "Status", className: 'reorder' },
        { data: "CompanyID", title: "ID", className: 'reorder' },
        { data: "Image", title: "Image", className: 'reorder' },
        { data: "Name", title: "Company", className: 'reorder' },
        { data: "Address", title: "Address", className: 'reorder' },
        { data: "Phone", title: "Phone", className: 'reorder' },
        { data: "Email", title: "Email", className: 'reorder' },
        { data: "Reseller", title: "Reseller", className: 'reorder' },
        {
          data: null,
          title: "Action",
          className: "center",
          //defaultContent: 
        }
      ],
      "ajax": {
        url: api_companies,
        type: 'GET',
        dataType: 'json',
        dataSrc: ''
      },

      "columnDefs": [
        {
          // The `data` parameter refers to the data for the cell (defined by the
          // `data` option, which defaults to the column being worked with, in
          // this case `data: 0`.
          "render": function (data, type, row) {
            if (row.ImageFill == "Uniform") {
              return '<img src="' + data + '" width="50" height="50">'
            } else {
              return '<img src="../assets/img/avatars/default-company.jpg" width="50" height="50">'
            }
          },
          "targets": 1
        },
        {
          "render": function (data) {

            if (role_id  <= 2) {
              return '<a class="editCompany"><i class="fa fa-edit"></i></a> &emsp; <a class="deleteCompany" data-toggle="modal"><i class="fa fa-trash"></i></a>'
            } else {
              return '<a class="editCompany"><i class="fa fa-edit"></i></a>'
            }
          },
          "targets": 7
        }
      ],
      "initComplete": function (data, type, row) {
   

        $(".addNew").html('<button id="add" class="addBtn float-left">Add New</button>');

        $('#add').on('click', function (e) {

          $('#companyModal').modal("show");
          $('#companyFormTitle').text('Add New Company');
          $('#companyReseller').val(Number(sessionStorage.getItem('setSessionstorageValueUserResellerID')));
          $('.selectpicker').selectpicker('refresh');

        });


      },
      "footerCallback": function (row, data, start, end, display) {
      }
    })

    /*------------------ Edit Company-----------------*/

    $('#companyData').on('click', 'a.editCompany', function (e) {

      $('#companyModal').modal('show');
      $('#companyFormTitle').text('Edit Company');

      var data = _table.row($(this).parents('tr')).data();
      $('#companyID').val(data.CompanyID);
      if (data.Image.includes('http')) {
        $('#companyImageBox').attr('src', data.Image).width(110).height(110);
      } else {
        $('#companyImageBox').attr('src', '../assets/img/avatars/default-company.jpg').width(110).height(110);
      }

      $('#companyStatus').val(data.Flag);
      $('#companyName').val(data.Name);
      $('#companyAddress').val(data.Address);
      $('#companyPhone').val(data.Phone);
      $('#companyEmail').val(data.Email);
      $('#companyReseller').val(data.ResellerID);
      //$('#companyFleet').val(data.Fleet);
      //$('#companyTraffic').val(data.Traffic);
      //$('#companyHeatMap').val(data.HeatMap);
      //$('#companyCarpark').val(data.Carpark);
      //$('#companyWeather').val(data.Carpark);

      $('.selectpicker').selectpicker('refresh');

    });

    /*------------------ Delete Company -----------------*/

    $('#companyData').on('click', 'a.deleteCompany', function (e) {

      $('#deleteCompany').modal('show');

      var data = _table.row($(this).parents('tr')).data();
      $('#companyID').val(data.CompanyID);
      $('#deleteCompany').on('click', '.deleteCompanyBtn', function (e) {
        let obj: any = {
          CompanyID: data.CompanyID,
        };
        axios.delete(api + obj.CompanyID, obj)
          .then(function (response) {
            console.log(response);
            $('#companyModal').modal('hide');
            $('#deleteCompany').modal('hide');
            $("#companyData").DataTable().ajax.reload();
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
        $('#companyLabelUpload').val(''); //for clearing with Jquery
      } else {
        if (file.files && file.files[0]) {
          reader.onload = function (e) {
            $('#companyImageBox')
              .attr('src', e.target.result)
              .width(110)
              .height(110);
          };
          reader.readAsDataURL(file.files[0]);
          $('#companyLabelUpload').text("File " + file.files[0].name + " is " + Math.round(FileSize * 100) / 100 + " MB in size");
        }
      }
    }

    //=======================================On Change==================================================//

    $('.SelectResellerFilter').on('change', { role_id: this.role_id, base: this.base, uri: this.uri }, function (event) {

      let company_api: string;
      if (role_id == 1) {
        company_api = base + uri + 'companyinfo' + '?&ResellerID=' + $('#load-reseller').val();
      } else if (role_id == 2) {
        company_api = base + uri + 'companyinfo' + '?&ResellerID=' + $('#load-reseller').val();
      } else if (role_id >= 3) {
        company_api = base + uri + 'companyinfo' + '?ResellerID=' + $('#load-reseller').val() + "&CompanyID=" + $('#load-company').val();
      }

      _table = $("#companyData").DataTable({
        "destroy": true,
        "responsive": false,
        "select": true,
        "filter": true,
        //"orderCellsTop": true,
        //"fixedHeader": true,
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
        "dom": '<"addNew">Blfrtip',
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
              $('#resellerData').DataTable().ajax.reload();
            }
          },
        ],
        "columns": [
          //{ data: " ", title: "Status", className: 'reorder' },
          { data: "CompanyID", title: "ID", className: 'reorder' },
          { data: "Image", title: "Image", className: 'reorder' },
          { data: "Name", title: "Company", className: 'reorder' },
          { data: "Address", title: "Address", className: 'reorder' },
          { data: "Phone", title: "Phone", className: 'reorder' },
          { data: "Email", title: "Email", className: 'reorder' },
          { data: "Reseller", title: "Reseller", className: 'reorder' },
          {
            data: null,
            title: "Action",
            className: "center",
            defaultContent: '<a class="editCompany"><i class="fa fa-edit"></i></a> &emsp; <a class="deleteCompany" data-toggle="modal"><i class="fa fa-trash"></i></a>'
          }
        ],
        "ajax": {
          url: company_api,
          type: 'GET',
          dataType: 'json',
          dataSrc: ''
        },

        "columnDefs": [
          {
            // The `data` parameter refers to the data for the cell (defined by the
            // `data` option, which defaults to the column being worked with, in
            // this case `data: 0`.
            "render": function (data, type, row) {
              if (row.ImageFill == "Uniform") {
                return '<img src="' + data + '" width="50" height="50">'
              } else {
                return '<img src="../assets/img/avatars/default-company.jpg" width="50" height="50">'
              }
            },
            "targets": 1
          }
        ],
        "initComplete": function (data, type, row) {

          $(".addNew").html('<button id="add" class="addBtn float-left">Add New</button>');

          $('#add').on('click', function (e) {

            $('#companyModal').modal("show");
            $('#companyFormTitle').text('Add New Reseller');

          });


        },
        "footerCallback": function (row, data, start, end, display) {
        }
      })


    });

    $('.SelectResellerModalFilter').on('change', { role_id: this.role_id, base: this.base, uri: this.uri }, function (event) {

      let company_api: string;
      if (role_id == 1) {
        company_api = base + uri + 'companyinfo' + '?&ResellerID=' + $('#companyReseller').val();
      } else if (role_id == 2) {
        company_api = base + uri + 'companyinfo' + '?&ResellerID=' + $('#companyReseller').val();
      } else if (role_id >= 3) {
        company_api = base + uri + 'companyinfo' + '?ResellerID=' + $('#companyReseller').val() + "&CompanyID=" + $('#load-company').val();
      }

      _table = $("#companyData").DataTable({
        "destroy": true,
        "responsive": false,
        "select": true,
        "filter": true,
        //"orderCellsTop": true,
        //"fixedHeader": true,
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
        "dom": '<"addNew">Blfrtip',
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
              $('#resellerData').DataTable().ajax.reload();
            }
          },
        ],
        "columns": [
          //{ data: " ", title: "Status", className: 'reorder' },
          { data: "CompanyID", title: "ID", className: 'reorder' },
          { data: "Image", title: "Image", className: 'reorder' },
          { data: "Name", title: "Company", className: 'reorder' },
          { data: "Address", title: "Address", className: 'reorder' },
          { data: "Phone", title: "Phone", className: 'reorder' },
          { data: "Email", title: "Email", className: 'reorder' },
          { data: "Reseller", title: "Reseller", className: 'reorder' },
          {
            data: null,
            title: "Action",
            className: "center",
            defaultContent: '<a class="editCompany"><i class="fa fa-edit"></i></a> &emsp; <a class="deleteCompany" data-toggle="modal"><i class="fa fa-trash"></i></a>'
          }
        ],
        "ajax": {
          url: company_api,
          type: 'GET',
          dataType: 'json',
          dataSrc: ''
        },

        "columnDefs": [
          {
            // The `data` parameter refers to the data for the cell (defined by the
            // `data` option, which defaults to the column being worked with, in
            // this case `data: 0`.
            "render": function (data, type, row) {
              if (row.ImageFill == "Uniform") {
                return '<img src="' + data + '" width="50" height="50">'
              } else {
                return '<img src="../assets/img/avatars/default-company.jpg" width="50" height="50">'
              }
            },
            "targets": 1
          }
        ],
        "initComplete": function (data, type, row) {

          $(".addNew").html('<button id="add" class="addBtn float-left">Add New</button>');

          $('#add').on('click', function (e) {

            $('#companyModal').modal("show");
            $('#companyFormTitle').text('Add New Company');

          });


        },
        "footerCallback": function (row, data, start, end, display) {
        }
      })


    });

  }

  /*----------------------------------------------------------- Submit Company -----------------------------------------------------*/


  onSubmit() {

    var GetCompanyID = $('#CompanyID').val();

    var flag;
    if ($('#companyStatus').prop("checked") == true) {
      flag = 1;
    } else {
      flag = 0;
    }

    if ($('#companyFleet').prop("checked") == true) {
      flag = 1;
    } else {
      flag = 0;
    }

    if ($('#companyTraffic').prop("checked") == true) {
      flag = 1;
    } else {
      flag = 0;
    }

    if ($('#companyHeatMap').prop("checked") == true) {
      flag = 1;
    } else {
      flag = 0;
    }

    if ($('#companyCarpark').prop("checked") == true) {
      flag = 1;
    } else {
      flag = 0;
    }

    if ($('#companyWeather').prop("checked") == true) {
      flag = 1;
    } else {
      flag = 0;
    }

    let obj: any = {
      CompanyID: $('#companyID').val(),
      Flag: flag,
      Name: $('#companyName').val(),
      Address: $('#companyAddress').val(),
      Email: $('#companyEmail').val(),
      Phone: $('#companyPhone').val(),
      ResellerID: $('#companyReseller').val(),
      UserLimit: $('#companyUserLimit').val(),
      ZoneLimit: $('#companyZoneLimit').val(),
      AssetLimit: $('#companyAssetLimit').val(),
      Fleet: $('#companyFleet').val(),
      Traffic: $('#companyTraffic').val(),
      HeatMap: $('#companyHeatMap').val(),
      Carpark: $('#companyCarpark').val(),
      Weather: $('#companyWeather').val()
    };


    if (obj.CompanyID == 'undefined' || obj.CompanyID == null || obj.CompanyID == 0) {

      axios.post(this._constant.companyApi, obj)
        .then(function (response) {
          console.log(response);


          /*------------------------ Save Uploaded Image ------------------------*/
          var data = new FormData();
          var files = $("#uploadCompany").get(0).files;
          if (files.length > 0) {
            data.append("UploadedImageCompany", files[0], GetCompanyID + ".png");
          }

          let apiCompanyImage = this._constant.apiCompanyImage;

          var ajaxRequest = $.ajax({
            type: "POST",
            url: this.apiCompanyImage,
            contentType: false,
            processData: false,
            data: data,
            success: function (data) {
              console.log('success');
              clearForms();
              $('#companyModal').modal('hide');
              $('#confirmCompany').modal('hide');
              $("#companyData").DataTable().ajax.reload();
            }
          });

          ajaxRequest.done(function (responseData, textStatus) {
            if (textStatus == 'success') {
              if (responseData != null) {
                if (responseData.Key) {
                  alert(responseData.Value);
                  $("#uploadCompany").val('');
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

    } else {

      axios.put(this._constant.companyApi + this._constant.param_put + obj.CompanyID, obj)
        .then(function (response) {
          console.log(response);

          /*------------------------ Save Edited Image ------------------------*/
          var data = new FormData();
          var files = $("#uploadCompany").get(0).files;
          if (files.length > 0) {
            data.append("UploadedImageCompany", files[0], obj.CompanyID + ".png");
          }

          var ajaxRequest = $.ajax({
            type: "POST",
            url: "https://app.track-asia.com/tracksgwebapi/api/fileupload/uploadfilecompany",
            contentType: false,
            processData: false,
            data: data,
            success: function (data) {
              console.log('success');
              clearForms();
              $('#companyModal').modal('hide');
              $('#confirmCompany').modal('hide');
              $("#companyData").DataTable().ajax.reload();
            }
          });

          ajaxRequest.done(function (responseData, textStatus) {
            if (textStatus == 'success') {
              if (responseData != null) {
                if (responseData.Key) {
                  alert(responseData.Value);
                  $("#uploadCompany").val('');
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

    function clearForms() {
      $('#companyID').val('');
      $('#companyName').val('');
      $('#companyAddress').val(''),
      $('#companyEmail').val(''),
      $('#companyPhone').val(''),
      $('#companyReseller').val(''),
      $('#companyUserLimit').val(''),
      $('#companyZoneLimit').val(''),
      $('#companyAssetLimit').val('')
    }

  }

  clearForms() {
    $('#companyID').val('');
    $('#companyName').val('');
    $('#companyAddress').val(''),
      $('#companyEmail').val(''),
      $('#companyPhone').val(''),
      $('#companyReseller').val(''),
      $('#companyUserLimit').val(''),
      $('#companyZoneLimit').val(''),
      $('#companyAssetLimit').val('')
  }

  onOptionsSelectedReseller(value: any) {
 
    Number(sessionStorage.setItem('setSessionstorageValueUserResellerID', value));

    if (this.route == '/companies') {

      $("#companyData").empty();
      $('#load-reseller').val(value);
      $(".selectpicker").selectpicker('refresh');
    }


    $('#load-company').empty();
    $('#load-assets').empty();
    $('#load-company').append($('<option></option>').val(0).html('---'));

    let company_api: string;
    if (this.role_id == 1) {
      company_api = this.base + this.uri + 'companyinfo' + '?&ResellerID=' + value;
    } else if (this.role_id == 2) {
      company_api = this.base + this.uri + 'companyinfo' + '?&ResellerID=' + value;
    } else if (this.role_id >= 3) {
      company_api = this.base + this.uri + 'companyinfo' + '?ResellerID=' + value;
    }

    $.getJSON(company_api, function (data) {
      $.each(data, function (index, item) {
        $('#load-company').append($('<option></option>').val(item.CompanyID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });

    $(".selectpicker").selectpicker('refresh');
  }

}
