import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-gb';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import axios from "axios";
declare var $: any;
declare const google: any;

@Component({
  templateUrl: 'carpark.component.html',
  styleUrls: ["./carpark.component.css"],
  encapsulation: ViewEncapsulation.None,
})

export class CarparkComponent implements OnInit {

  route: string;
  api_assets_individual: string;
  constructor(private _constant: ConstantsService, location: Location, private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService) {
    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
      }

    });
  }

  ngOnInit(): void {
    this.spinner.show();
    let base = this._constant.baseAppUrl;
    let uri = this._constant.uri_track;
    let user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
    let reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
    let company_id = Number(sessionStorage.getItem('setSessionstorageValueUserCompanyID'));
    let role_id = this._constant.getSessionstorageValueRoleID;
    let api_carparkrates = this._constant.carparkRatesApi;
    let api_carparkavailability = this._constant.carkparkApi;

    initCarparkAvailability(loadCarparkAvailability, api_carparkavailability, this.toastr);
    initCarparkRates(loadCarparkRates, api_carparkrates, this.toastr);

    function initCarparkAvailability(callback: any, api_carparkavailability: string, toastr) {

      axios.get(api_carparkavailability)
        .then(function (response) {
          console.log(response);
          callback(response.data);

        })
        .catch(function (error) {
          console.log(error);

          if (role_id == 1) {
            toastr.error('Carpark Availability API Error: ' + error, 'Error', {
              timeOut: 3000,
              closeButton: true,
              enableHtml: true,
            });
          } else {
            toastr.error('Error: Network Error. Pls. Try again.', 'Error', {
              timeOut: 3000,
              closeButton: true,
              enableHtml: true,
            });
          }

        });

    }

    function loadCarparkAvailability(data) {

      var result = data.items[0].carpark_data;
      //for (var i = 0, length = result.length; i < length; i++) {
      //  if (result[i]) {
      //    alert(JSON.stringify(result[i].carpark_number))
      //  }
      //}

      $("#carparkavailabilityReport").DataTable({
        "destroy": true,
        "responsive": true,
        "select": true,
        "filter": true,
        "colReorder": false,
        "rowReorder": true,
        "keys": true,
        "fixedHeader": {
          "header": true,
          "footer": true,
          "headerOffset": $('#pageHeader').outerHeight()
        },
        "scrollX": true,
        "scrollCollapse": true,
        "paging": true,
        "pagingType": "full_numbers",
        "pageLength": 12,
        "lengthMenu": [[12, 25, 50, -1], [12, 25, 50, 'All']],
        "searching": true,
        "ordering": true,
        "order": [[0, 'asc']],
        "info": true,
        "dom": 'lBfrtip',
        "processing": true,
        "language": {
          "processing": '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span> ',
          "infoEmpty": "No events available",
          "infoFiltered": "(filtered from MAX total events)"
        },
        "buttons": [
          { extend: 'colvis', className: 'float-right ml-2' },
          [
            // Export Button
            {
              extend: 'collection',
              text: 'Export',
              className: 'float-right ml-2',
              buttons: [
                'excel'
              ]
            },
          ],
        ],
        "columns": [
          { data: "carpark_number", title: "Carpark Number", className: 'reorder' },
          { data: "carpark_info[0].total_lots", title: "Total Lots", className: 'reorder' },
          { data: "carpark_info[0].lots_available", title: "Available Lots", className: 'reorder' },
          { data: "carpark_info[0].lot_type", title: "Lot Type", className: 'reorder' },
          { data: "update_datetime", title: "Updated Timestamp", className: 'reorder' },
        ],
        "data": result,
        "columnDefs": [
          {
            "render": function (data) {
              return moment(data).format('D-MMM-YYYY, hh:mm:ss A');
            },
            "targets": 4
          },
        ],
        "initComplete": function (data, type, row) {

          console.log(JSON.stringify(type));

        },
        "footerCallback": function (row, data, start, end, display) {


        }
      });

    }

    function initCarparkRates(callback: any, api_carparkrates: string, toastr) {

      axios.get(api_carparkrates)
        .then(function (response) {
          console.log(response);
          callback(response.data);

        })
        .catch(function (error) {
          console.log(error);

          if (role_id == 1) {
            toastr.error('Carpark Rates API Error: ' + error, 'Error', {
              timeOut: 3000,
              closeButton: true,
              enableHtml: true,
            });
          } else {
            toastr.error('Error: Network Error. Pls. Try again.', 'Error', {
              timeOut: 3000,
              closeButton: true,
              enableHtml: true,
            });
          }

        });

    }

    function loadCarparkRates(data) {

      if (data.success == true) {
        var result = data.result.records;

        $("#carparkratesReport").DataTable({
          "destroy": true,
          "responsive": true,
          "select": true,
          "filter": true,
          "colReorder": false,
          "rowReorder": true,
          "keys": true,
          "fixedHeader": {
            "header": true,
            "footer": true,
            "headerOffset": $('#pageHeader').outerHeight()
          },
          "scrollX": true,
          "scrollCollapse": true,
          "paging": true,
          "pagingType": "full_numbers",
          "pageLength": 12,
          "lengthMenu": [[12, 25, 50, -1], [12, 25, 50, 'All']],
          "searching": true,
          "ordering": true,
          "order": [[0, 'asc']],
          "info": true,
          "dom": 'lBfrtip',
          "processing": true,
          "language": {
            "processing": '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span> ',
            "infoEmpty": "No events available",
            "infoFiltered": "(filtered from MAX total events)"
          },
          "buttons": [

            { extend: 'colvis', className: 'float-right ml-2' },
            [
              // Export Button
              {
                extend: 'collection',
                text: 'Export',
                className: 'float-right ml-2',
                buttons: [
                  'excel'
                ]
              },
            ],
          ],
          "columns": [
            { data: "carpark", title: "Carpark", className: 'reorder' },
            { data: "category", title: "Category", className: 'reorder' },
            { data: "weekdays_rate_1", title: "Weekdays Rate 1", className: 'reorder' },
            { data: "weekdays_rate_2", title: "Weekdays Rate 2", className: 'reorder' },
            { data: "saturday_rate", title: "Saturday Rate", className: 'reorder' },
            { data: "sunday_publicholiday_rate", title: "Sunday and Public Holiday Rate", className: 'reorder' },
          ],
          "data": result,
          "columnDefs": [
            {

              "render": function (data, type, row) {
                return data;
              },
              "targets": 0
            },

          ],
          "initComplete": function (data, type, row) {

            console.log(JSON.stringify(type));

          },
          "footerCallback": function (row, data, start, end, display) {


          }
        });


      }

    }

    this.spinner.hide();
  }
}
