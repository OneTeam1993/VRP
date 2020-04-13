import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import axios from "axios";
declare var $: any;
let _table: any = $("#assetsData");

@Component({
  templateUrl: 'assets.component.html',
  styleUrls: ["./assets.component.css"],
})

export class AssetsComponent implements OnInit {

  time = new Date();
  api = this._constant.getAssets();
  api_reseller = this._constant.getResellers();
  api_company = this._constant.getCompanies();
  api_drivers = this._constant.getDrivers();
  api_transmission = this._constant.apiTransmissionType;
  api_fuel = this._constant.apiFuelType;
  api_make = this._constant.apiMake;
  api_category = this._constant.apiCategory;
  api_device = this._constant.apiDevice;
  api_serviceType = this._constant.apiServiceType;
  _serviceTable: any = $("#assetsService");
  _contractTable: any = $("#assetsContract");

  clickEventsubscription: Subscription;
  route: string;
  api_assets_individual: string;
  constructor(private _constant: ConstantsService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    $.getJSON(this.api_reseller, function (data) {
      $.each(data, function (index, item) {
        $('#assetReseller').append($('<option></option>').val(item.ResellerID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });
    $.getJSON(this.api_company, function (data) {
      $.each(data, function (index, item) {
        $('#assetCompany').append($('<option></option>').val(item.CompanyID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });
    $.getJSON(this.api_drivers, function (data) {
      $.each(data, function (index, item) {
        $('#assetDriver').append($('<option></option>').val(item.DriverID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });
    $.getJSON(this.api_make, function (data) {
      $.each(data, function (index, item) {
        $('#assetMake').append($('<option></option>').val(item.MakeID).html(item.Make));
      });
      $('.selectpicker').selectpicker('refresh');
    });
    $.getJSON(this.api_category, function (data) {
      $.each(data, function (index, item) {
        $('#assetCategory').append($('<option></option>').val(item.CategoryDesc).html(item.CategoryDesc));
      });
      $('.selectpicker').selectpicker('refresh');
    });
    $.getJSON(this.api_transmission, function (data) {
      $.each(data, function (index, item) {
        $('#assetTransmission').append($('<option></option>').val(item.TransmissionID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });
    $.getJSON(this.api_fuel, function (data) {
      $.each(data, function (index, item) {
        $('#assetFuelType').append($('<option></option>').val(item.FuelTypeID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });
    $.getJSON(this.api_device, function (data) {
      $.each(data, function (index, item) {
        var AssignedTags = item.AssetID;
        if (AssignedTags != 0) {
        } else {
          $('#assetDevice').append($('<option data-installDate="' + item.InstallDate + '"></option>').val(item.Name).html(item.Name));
        }
      });
      $('.selectpicker').selectpicker('refresh');
    });

    _table = $("#assetsData").DataTable({
      "destroy": true,
      "responsive": false,
      "select": true,
      "filter": true,
      //"orderCellsTop": true,
      fixedHeader: {
        header: true,
      },
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
      "dom": '<"addNew"><"floatRight"B><"top"l>frti<"bottom"p><"clear">',
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
            $('#assetsData').DataTable().ajax.reload();
          }
        },
      ],
      "columns": [
        { data: "AssetID", title: "ID", className: 'reorder' },
        //{ data: "Image", title: "Image", className: 'reorder' },
        { data: "Name", title: "Assets", className: 'reorder' },
        { data: "Category", title: "Category", className: 'reorder' },
        { data: "Driver.Name", title: "Driver", className: 'reorder' },
        { data: "Tag", title: "Device", className: 'reorder' },
        { data: "InstallDate", title: "Install Date", className: 'reorder' },
        { data: "Phone", title: "Phone", className: 'reorder' },
        { data: "Email", title: "Email", className: 'reorder' },
        {
          data: null,
          title: "Action",
          className: "center",
          defaultContent: '<a class="assetServicing">Servicing</a>'
        },
        {
          data: null,
          title: "Action",
          className: "center",
          defaultContent: '<a class="assetContract">Contract</a>'
        },
        {
          data: null,
          title: "Action",
          className: "center",
          defaultContent: '<a class="editAsset"><i class="fa fa-edit"></i></a> &emsp; <a class="deleteAsset" data-toggle="modal"><i class="fa fa-trash"></i></a>'
        }
      ],
      "ajax": {
        url: this.api,
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
            return data;
          },
          "targets": 0
        },
        {
          // The `data` parameter refers to the data for the cell (defined by the
          // `data` option, which defaults to the column being worked with, in
          // this case `data: 0`.
          "render": function (data, type, row) {
            return moment(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
          },
          "targets": 5
        }
      ],
      "initComplete": function (data, type, row) {
        $(".addNew").html('<button id="add" class="addBtn float-left">Add New</button>');
        $('#add').on('click', function (e) {
          $('#assetsModal').modal("show");
          $('#assetsFormTitle').text('Add New Asset');
        });
      },
      "footerCallback": function (row, data, start, end, display) {
      }
    })


  /*------------------- Add Assets Date & Time Dropdown ---------------------------*/


    var dateFormat = "D-MMM-YYYY HH:mm A";

    var dI = new Date();
    dI.setHours(0);
    dI.setMinutes(0);
    var dateInstall = moment(dI).format(dateFormat);

    $('#dateInstall').datetimepicker({
      format: 'd-M-Y H:i A',
      theme: 'dark',
      lang: 'en',
      value: dateInstall
    });

    var dC = new Date();
    dC.setHours(0);
    dC.setMinutes(0);
    var assetContractDate = moment(dC).format(dateFormat);

    $('#assetContractDate').datetimepicker({
      format: 'd-M-Y H:i A',
      theme: 'dark',
      lang: 'en',
      value: assetContractDate
    });

    var dM = new Date();
    dM.setHours(0);
    dM.setMinutes(0);
    var assetImmatriculation = moment(dM).format(dateFormat);

    $('#assetImmatriculation').datetimepicker({
      format: 'd-M-Y H:i A',
      theme: 'dark',
      lang: 'en',
      value: assetImmatriculation
    });

    /*-------------------- Edit Assets -------------------------*/

    $('#assetsData').on('click', 'a.editAsset', function (e) {

      $('#assetsModal').modal('show');
      $('#assetsFormTitle').text('Edit Asset');

      var data = _table.row($(this).parents('tr')).data();
      $('#assetID').val(data.AssetID);
      $('#assetName').val(data.Name);
      $('#assetLicense').val(data.LicensePlate);
      $('#assetMake').val(data.Make);
      $('#assetCategory').val(data.Category);
      $('#assetModel').val(data.Model);
      $('#assetModelYear').val(data.ModelYear);
      $('#assetReseller').val(data.Reseller);
      $('#assetCompany').val(data.Company);
      $('#assetZone').val(data.Zone);
      $('#assetDriver').val(data.Driver.Name); 
      $('#assetDevice').val(data.Tag);
      $('#assetIMEI').val(data.Tag);
      $('#dateInstall').val(data.InstallDate);
      $('#assetContractDate').val(data.FirstContractDate);
      $('#assetEmail').val(data.Email);
      $('#assetPhone').val(data.Phone);
      $('#assetIdleLimit').val(data.IdleLimit);
      $('#assetSpeedLimit').val(data.SpeedLimit);
      $('#assetTransmission').val(data.Transmission);
      $('#assetFuelType').val(data.FuelType);
      $('#assetChassis').val(data.ChassisNo);
      $('#assetImmatriculation').val(data.ImmatriculationDate);
      $('#assetCatalogValue').val(data.CatalogValue);
      $('#assetResidualValue').val(data.ResidualValue);
      $('#assetHorsepower').val(data.Horsepower);
      $('#assetHorsepowerTax').val(data.HorsepowerTaxation);
      $('#assetCO2').val(data.CO2);
      $('#assetPower').val(data.Power);
      $('#assetSeatsNumber').val(data.SeatNo);
      $('#assetDoorsNumber').val(data.DoorNo);
      $('#assetColor').val(data.Color);
      $('#assetRemarks').val(data.Remarks);

      return moment(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');

    });


    /*---------------------- Delete Assets ---------------------*/

    $('#assetsData').on('click', 'a.deleteAsset', function (e) {

      $('#deleteAsset').modal('show');

      var data = _table.row($(this).parents('tr')).data();
      $('#assetID').val(data.AssetID);
      $('#deleteAsset').on('click', '.deleteAssetBtn', function (e) {
        let obj: any = {
          AssetID: data.AssetID,
        };
        axios.delete(this.api + obj.AssetID, obj)
          .then(function (response) {
            console.log(response);
            $('#assetsModal').modal('hide');
            $('#deleteAsset').modal('hide');
            $("#assetsData").DataTable().ajax.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    });

  /*--------------------------- Open Asset Servicing Modal -----------------------------*/

    $('#assetsData').on('click', 'a.assetServicing', function (e) {

      $('#servicingModal').modal('show');

      var data = _table.row($(this).parents('tr')).data();
      //$('#assetID').val(data.AssetID);
      $('#servicingModal').on('click', '.onServiceSubmit', function (e) {
        let obj: any = {
          AssetID: data.AssetID,
        };
      });
    });

    $.getJSON(this.api_serviceType, function (data) {
      $.each(data, function (index, item) {
        $('#serviceType').append($('<option></option>').val(item.ServiceTypeID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });

    var driver = $.getJSON(this.api_drivers, function (data) {
      $('#serviceDriver').append($('<option selected="selected"></option>').val(0).html("---"));
      $.each(data, function (index, item) {
        $('#serviceDriver').append($('<option></option>').val(item.DriverID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });

    this._serviceTable = $("#assetsService").DataTable({
      "destroy": true,
      "responsive": false,
      "select": true,
      "filter": true,
      //"orderCellsTop": true,
      fixedHeader: {
        header: true,
      },
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
          className: 'refreshBtn float-right',
          action: function (e, dt, node, config) {
            $('#assetsService').DataTable().ajax.reload();
          }
        },
      ],
      "columns": [
        { data: "ItemNo", title: "No.", className: 'reorder' },
        { data: "ServiceID", title: "ID", className: 'reorder' },
        { data: "CompanyName", title: "Company", className: 'reorder' },
        { data: "Asset", title: "Asset", className: 'reorder' },
        { data: "Driver", title: "Driver", className: 'reorder' },
        { data: "Services", title: "Services", className: 'reorder' },
        { data: "Timestamp", title: "Date of Service", className: 'reorder' },
        { data: "RxTime", title: "Date of Completion", className: 'reorder' },
        { data: "Invoice", title: "Invoice", className: 'reorder' },
        { data: "Odometer", title: "Odometer", className: 'reorder' },
        { data: "Price", title: "Price", className: 'reorder' },
        { data: "Address", title: "Address", className: 'reorder' },
        { data: "Remarks", title: "Remarks", className: 'reorder' },
        { data: "Status", title: "Status", className: 'reorder' },
        {
          data: null,
          title: "Action",
          className: "center",
          defaultContent: '<a class="editService"><i class="fa fa-edit"></i></a> &emsp; <a class="deleteService" data-toggle="modal"><i class="fa fa-trash"></i></a>'
        }
      ],
      "ajax": {
        url: "https://app.track-asia.com/tracksgwebapi/api/servicinginfo",
        dataType: 'json',
        dataSrc: ''
      },

      "columnDefs": [
        {
          // The `data` parameter refers to the data for the cell (defined by the
          // `data` option, which defaults to the column being worked with, in
          // this case `data: 0`.
          "render": function (data, type, row) {
            return data;
          },
          "targets": 0
        },
        {
          // The `data` parameter refers to the data for the cell (defined by the
          // `data` option, which defaults to the column being worked with, in
          // this case `data: 0`.
          "render": function (data, type, row) {
            return moment(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
          },
          "targets": 5
        }
      ],
      "footerCallback": function (row, data, start, end, display) {
      }
    })

    /*--------------------------- Open Asset Contract Modal -----------------------------*/

    $('#assetsData').on('click', 'a.assetContract', function (e) {

      $('#contractModal').modal('show');

      var data = _table.row($(this).parents('tr')).data();
      //$('#assetID').val(data.AssetID);
      $('#contractModal').on('click', '.onContractSubmit', function (e) {
        let obj: any = {
          AssetID: data.AssetID,
        };
      });
    });

    this._contractTable = $("#assetsContract").DataTable({
      "destroy": true,
      "responsive": false,
      "select": true,
      "filter": true,
      //"orderCellsTop": true,
      fixedHeader: {
        header: true,
      },
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
          className: 'refreshBtn float-right',
          action: function (e, dt, node, config) {
            $('#assetsContract').DataTable().ajax.reload();
          }
        },
      ],
      "columns": [
        { data: "ItemNo", title: "No.", className: 'reorder' },
        { data: "ContractID", title: "ID", className: 'reorder' },
        { data: "Asset", title: "Asset", className: 'reorder' },
        { data: "DriverName", title: "Driver", className: 'reorder' },
        { data: "ContractType", title: "Type", className: 'reorder' },
        { data: "Name", title: "Name", className: 'reorder' },
        { data: "ContractNo", title: "Contract Number", className: 'reorder' },
        { data: "Email", title: "Email", className: 'reorder' },
        { data: "Phone", title: "Phone", className: 'reorder' },
        { data: "InvoiceDate", title: "Invoice Date", className: 'reorder' },
        { data: "ContractStart", title: "Contract Start Date", className: 'reorder' },
        { data: "ContractEnd", title: "Contract End Date", className: 'reorder' },
        { data: "ContractInterval", title: "Contract Interval", className: 'reorder' },
        { data: "NotificationInterval", title: "Notification Interval", className: 'reorder' },
        { data: "OdometerAtCreation", title: "Odometer", className: 'reorder' },
        { data: "ContractPrice", title: "Price", className: 'reorder' },
        { data: "TermsAndConditions", title: "Terms and Conditions", className: 'reorder' },
        {
          data: null,
          title: "Action",
          className: "center",
          defaultContent: '<a class="editService"><i class="fa fa-edit"></i></a> &emsp; <a class="deleteService" data-toggle="modal"><i class="fa fa-trash"></i></a>'
        }
      ],
      "ajax": {
        url: "https://app.track-asia.com/tracksgwebapi/api/servicinginfo",
        dataType: 'json',
        dataSrc: ''
      },

      "columnDefs": [
        {
          // The `data` parameter refers to the data for the cell (defined by the
          // `data` option, which defaults to the column being worked with, in
          // this case `data: 0`.
          "render": function (data, type, row) {
            return data;
          },
          "targets": 0
        },
        {
          // The `data` parameter refers to the data for the cell (defined by the
          // `data` option, which defaults to the column being worked with, in
          // this case `data: 0`.
          "render": function (data, type, row) {
            return moment(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
          },
          "targets": 5
        }
      ],
      "footerCallback": function (row, data, start, end, display) {
      }
    })

    this.spinner.hide();
}


  onSubmit() {
    //this.activeModal.close(true);
    let obj: any = {
      ResellerID: $('#assetID').val(),
      Flag: 1,
      Name: $('#assetName').val(),
      Email: $('#assetEmail').val(),
      Phone: $('#assetPhone').val()
    };

    function clearForms() {
      $('#assetName').val('');
        $('#assetEmail').val(''),
        $('#assetPhone').val('')
    }

    if (obj.AssetID == 'undefined' || obj.AssetID == null || obj.AssetID == 0) {

      axios.post(this._constant.assetApi, obj)
        .then(function (response) {
          console.log(response);
          clearForms();
          $('#assetsModal').modal('hide');
          $('#confirmAsset').modal('hide');
          $("#assetsData").DataTable().ajax.reload();
        })
        .catch(function (error) {
          console.log(error);
        });

    } else {

      axios.put(this._constant.assetApi + this._constant.param_put + obj.AssetID, obj)
        .then(function (response) {
          console.log(response);
          clearForms();
          $('#assetsModal').modal('hide');
          $('#confirmAsset').modal('hide');
          $("#assetsData").DataTable().ajax.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    };

  }

  clearForms() {
    $('#assetName').val('');
      $('#assetEmail').val(''),
      $('#assetPhone').val('')
  }

  //decline() {
  //  this.activeModal.close(false);
  //}

  //dismiss() {
  //  this.activeModal.dismiss();
  //}

}
