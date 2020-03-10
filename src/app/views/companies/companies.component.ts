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

  constructor(private _constant: ConstantsService) { }

  ngOnInit(): void {

    let api = this._constant.companyApi;
    let api_reseller = this._constant.resellerApi;

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
      "dom": 'Blfrtip',
      "language": {
        "zeroRecords": "Nothing found - sorry",
        "infoEmpty": "No events available",
        "infoFiltered": "(filtered from MAX total events)"
      },
      "buttons": [
        {
          text: 'Add New',
          className: 'addBtn',
          action: function (e, dt, node, config) {
            $('#companyModal').modal("show");
            $('#companyFormTitle').text('Add New Company');

            if ($('#companyID').val().length == 0) $("#companyStatus").prop("checked", true);

          }
        },
        { extend: 'colvis' },
        [
          // Export Button
          {
            extend: 'collection',
            text: 'Export',
            class: 'button-export',
            buttons: [
              'excel',
              'csv',
              'pdf',
              'print'
            ]
          },
        ],
        { extend: 'copy' },
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
        url: this._constant.companyApi,
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
      "footerCallback": function (row, data, start, end, display) {
      }
    })

    /*------------------ Edit Company-----------------*/

    $('#companyData').on('click', 'a.editCompany', function (e) {

      $('#companyModal').modal('show');
      $('#companyFormTitle').text('Edit Company');

      var data = _table.row($(this).parents('tr')).data();
      $('#companyID').val(data.CompanyID);
      $('#companyImageBox').attr('src', data.Image).width(110).height(110);
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

  }

  /*----------------------------------------------------------- Submit Company -----------------------------------------------------*/


  onSubmit() {

    var GetCompanyID = $('#CompanyID').val();


    //this.activeModal.close(true);

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

    alert(JSON.stringify(obj))

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
}
