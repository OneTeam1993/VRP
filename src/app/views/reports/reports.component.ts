import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import { EventEmitterService } from "../../views/reports/event-emitter.service";
import { Subscription } from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';
import { ToastrService } from 'ngx-toastr';
import axios from "axios";
declare var $: any;
declare const google: any;

@Component({
  templateUrl: 'reports.component.html',
  styleUrls: ["./reports.component.css"],
})

export class ReportsComponent implements OnInit {


  clickEventsubscription: Subscription;
  route: string;
  api_assets_individual: string;
  constructor(private _constant: ConstantsService, location: Location, private router: Router, private eventEmitterService: EventEmitterService, private toastr: ToastrService) {
    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
      }

    });
	  this.clickEventsubscription = this.eventEmitterService.getClickEvent().subscribe(() => {
      this.generateEN();
    })
  }

  ngOnInit(): void {

    let base = this._constant.baseAppUrl;
    let uri = this._constant.uri_track;
    let user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
    let reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
    let company_id = Number(sessionStorage.getItem('setSessionstorageValueCompanyID'));
    let api_assets = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + company_id;
    this.api_assets_individual = this._constant.assetApi;
    let role_id = this._constant.getSessionstorageValueRoleID;
    let getReport = $("#load-report").val();
    //Default
    $('#_reports').hide();
    $('#reports-container').hide();
    filter(role_id, getReport, this.route);
        function filter(role_id, getReport, _route) {

      if (role_id >= 3) {
        $('#_reseller').hide();
      }
      if (_route == '/reports') $('#_reports').show();
      else $('#_reports').hide();

      if (getReport == 3) {
        $('#_speed').show();
      } else {
        $('#_speed').hide();
      }
    }
  }


  showSuccess() {
    this.toastr.success('This is toaster description', 'Success', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true,

    });
  }

  showError() {
    this.toastr.error('This is toaster description', 'Error', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true,
    });
  }

  showWarning() {
    this.toastr.warning('This is toaster description', 'Warning', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true,
    });
  }

  showInfo() {
    this.toastr.info('This is toaster description', 'Warning', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true,
    });
  }

  generateEN() {

    let WebApi: string;

    var getAsset = $("#load-assets").val(); //the value of the selected option
    var getCompany = $("#load-company").val();
    var getReseller = $("#load-reseller").val();
    var getReport = $("#load-report").val();
    var getTimestamp = $("#dateFrom").val();
    var getRxTime = $("#dateTo").val();
    var getSpeed = $("#speedLimit").val();
    var getStatusID = $("#load-events").val();
    var getFlag = $("#load-messages").val();
    var dateFormat = "D-MMM-YYYY, hh:mm:ss A";

    $('#reports-container').show();
    let convertTmestamp: any = moment(getTimestamp, dateFormat);
    let convertRxtime: any = moment(getRxTime, dateFormat);

    var timestamp = moment(convertTmestamp).subtract('hours', 8).format(dateFormat);
    var rxtime = moment(convertRxtime).subtract('hours', 8).format(dateFormat);


    var duration = '<div style="color:white">Selected Date:&nbsp;' + moment.duration(convertRxtime - convertTmestamp).humanize() + ' duration</div>';
    var validateTimestamp = moment(getTimestamp, dateFormat).isValid();
    var validateRxTime = moment(getRxTime, dateFormat).isValid();
    if (validateTimestamp == true && validateRxTime == true) {
    }

    if (getReport == 2) {
      WebApi = "https://app.track-asia.com/tracksgwebapi/api/posinfo?Asset=" + getAsset + "&CompanyID=" + getCompany + "&Timestamp=" + timestamp + "&RxTime=" + rxtime;
    }
    else if (getReport == 3) {
      WebApi = "https://app.track-asia.com/tracksgwebapi/api/posinfo?Asset=" + getAsset + "&Speed=" + getSpeed + "&CompanyID=" + getCompany + "&Timestamp=" + timestamp + "&RxTime=" + rxtime;
    }
    else if (getReport >= 4 && getReport <= 6 ) {
      WebApi  = "https://app.track-asia.com/tracksgwebapi/api/utilizationinfo?Asset=" + getAsset + "&StartTime=" + timestamp + "&EndTime=" + rxtime;
    }
    console.log(WebApi)
    Reports(WebApi);

    function Reports(WebApi) {

      if (getReport == 2) {
        //Position Report
        positionReport(WebApi, getReport);
      }
      else if (getReport == 3) {
        //Speed Report
        speedReport(WebApi, getReport);
      }
      else if (getReport == 4) {
        //Mileage Report
        mileageReport(WebApi, getReport);
      }
      else if (getReport == 5) {
        //Utilization Report
        utilizationReport(WebApi, getReport);
      }
      else if (getReport == 6) {
        //Utilization2 Report
        utilization2Report(WebApi, getReport);
      }
    }

    function positionReport(WebApi, report_no) {
      checkForTables();
      $('#_positionR').show();
   
      //Position report
      $("#positionReport").DataTable({
        "destroy": true,
        "responsive": true,
        "select": true,
        "filter": true,
        "colReorder": false,
        "rowReorder": true,
        "keys": true,
        "fixedHeader": {
          "header": true,
          "footer": true
        },
        "scrollX": true,
	      "scrollY": (screen.height - 335) + 'px',
        "scrollCollapse": true,
        "fnInitComplete": function () {
          const ps = new PerfectScrollbar('.dataTables_scrollBody');
        },
        "paging": true,
        "pagingType": "full_numbers",
        "pageLength": 12,
        "lengthMenu": [[12, 25, 50, -1], [12, 25, 50, 'All']],
        "searching": true,
        "ordering": true,
        "order": [[0, 'asc']],
        "info": true,
        "dom": 'Blfrtip',
        "processing": true,
        "language": {
        "processing": '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span> ',
      //"zeroRecords": "Nothing found - sorry",
          "infoEmpty": "No events available",
          "infoFiltered": "(filtered from MAX total events)",
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
          { data: "PosID", title: "ID", className: 'reorder' },
          { data: "Asset", title: "Asset", className: 'reorder' },
          { data: "Tag", title: "Device", className: 'reorder' },
          { data: "Driver", title: "Driver", className: 'reorder' },
          { data: "PosY", title: "Latitude", className: 'reorder' },
          { data: "PosX", title: "Longtitude", className: 'reorder' },
          { data: "Location", title: "Location", className: 'reorder' },
          { data: "Timestamp", title: "Timestamp", className: 'reorder' },
          { data: "Speed", title: "Speed", className: 'reorder' },
          { data: "Engine", title: "Engine", className: 'reorder' },
          { data: "Ignition", title: "Ignition", className: 'reorder' }
        ],
        "ajax": {
          url: WebApi,
          type: 'GET',
          dataType: 'json',
          dataSrc: ''
        },
        "columnDefs": [
          {

            "render": function (data, type, row) {
              return data;
            },
            "targets": 0
          },
          {
            "render": function (data) {
              return moment(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
            },
            "targets": 7
          },
          {
            "render": function (data) {
              return '<span>' + data + ' Km/h' + '</span>';
            },
            "targets": 8
          }
        ],
        "footerCallback": function (row, data, start, end, display) {
        }
      });
    }

    function speedReport(WebApi, report_no) {
  
      checkForTables();
      $('#_speedR').show();

      $("#speedReport").DataTable({
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
        "dom": 'Blfrtip',
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
          { data: "PosID", title: "ID", className: 'reorder' },
          { data: "Asset", title: "Asset", className: 'reorder' },
          { data: "Tag", title: "Device", className: 'reorder' },
          { data: "Driver", title: "Driver", className: 'reorder' },
          { data: "PosY", title: "Latitude", className: 'reorder' },
          { data: "PosX", title: "Longtitude", className: 'reorder' },
          { data: "Location", title: "Location", className: 'reorder' },
          { data: "Timestamp", title: "Timestamp", className: 'reorder' },
          { data: "Speed", title: "Speed", className: 'reorder' },
          { data: "Engine", title: "Engine", className: 'reorder' },
          { data: "Ignition", title: "Ignition", className: 'reorder' }

        ],
        "ajax": {
          url: WebApi,
          type: 'GET',
          dataType: 'json',
          dataSrc: ''
        },

        "columnDefs": [
          {

            "render": function (data, type, row) {
              return data;
            },
            "targets": 0
          },
          {
            "render": function (data) {
              return '<span>' + data + ' Km/h' + '</span>';
            },
            "targets": 4
          },
          {
            "render": function (data) {
              return moment(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
            },
            "targets": 5
          }
        ],
        "footerCallback": function (row, data, start, end, display) {


        }
      });
    }

    function mileageReport(WebApi, report_no) {

      checkForTables();
      $('#_mileageR').show();

      $("#mileageReport").DataTable({
        "destroy": true,
        "responsive": true,
        "select": true,
        "filter": true,
        "colReorder": false,
        "rowReorder": true,
        "keys": true,
        "fixedHeader": {
          "header": true,
          "footer": true
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
        "dom": 'Blfrtip',
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
          { data: "UtilId", title: "ID", className: 'reorder' },
          { data: "Date", title: "Date", className: 'reorder' },
          { data: "Driver", title: "Driver", className: 'reorder' },
          { data: "Asset", title: "Asset", className: 'reorder' },
          { data: "Category", title: "Category", className: 'reorder' },
          { data: "StartTime", title: "StartTime", className: 'reorder' },
          { data: "EndTime", title: "EndTime", className: 'reorder' },
          { data: "Mileage", title: "Mileage", className: 'reorder' },
          { data: "LastIgnition", title: "Last Ignition", className: 'reorder' }

        ],
        "ajax": {
          url: WebApi,
          type: 'GET',
          dataType: 'json',
          dataSrc: ''
        },

        "columnDefs": [
          {

            "render": function (data, type, row) {
              return data;
            },
            "targets": 0
          },
          {
            "render": function (data, row) {
              timestamp = moment(data).format('D-MMM-YYYY');

              return '<div>' + '<span><i class="fa fa-clock-o hidden-xs hidden-md"></i>&nbsp;' + timestamp + '</span>' + '</div>';
            },
            "targets": 1
          },
          {
            "render": function (data) {
              timestamp = moment(data).add('hours', 8).format('hh:mm:ss A');

              return '<div>' + '<span><i class="fa fa-clock-o hidden-xs hidden-md"></i>&nbsp;' + timestamp + '</span>' + '</div>';
            },
            "targets": [5, 6]
          },
          {
            "render": function (num, type, full) {
             //let strVal: number = num / 10;
             // return strVal + ' km';

             // return +(Math.round((strVal) + "e+2") + "e-2") + ' km';
              var value = (num / 10).toFixed(2)
              return value + ' km';
            },
            "targets": 7
          },
          {
            "render": function (data) {
              return moment(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
            },
            "targets": 8
          }
        ],
        "footerCallback": function (row, data, start, end, display) {


        }
      });
    }

    function utilizationReport(WebApi, report_no) {

      checkForTables();
      $('#_utilizationR').show();

      $("#utilizationReport").DataTable({
        "destroy": true,
        "responsive": true,
        "select": true,
        "filter": true,
        "colReorder": false,
        "rowReorder": true,
        "keys": true,
        "fixedHeader": {
          "header": true,
          "footer": true
        },
        "scrollX": true,
        "scrollY": (screen.height - 335) + 'px',
        "scrollCollapse": true,
        "fnInitComplete": function () {
          const ps = new PerfectScrollbar('.dataTables_scrollBody');
        },
        "paging": true,
        "pagingType": "full_numbers",
        "pageLength": 12,
        "lengthMenu": [[12, 25, 50, -1], [12, 25, 50, 'All']],
        "searching": true,
        "ordering": true,
        "order": [[0, 'asc']],
        "info": true,
        "dom": 'Blfrtip',
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
          { data: "UtilId", title: "ID", className: 'reorder' },
          { data: "Date", title: "Date", className: 'reorder' },
          { data: "Driver", title: "Driver", className: 'reorder' },
          { data: "Asset", title: "Asset", className: 'reorder' },
          { data: "Category", title: "Category", className: 'reorder' },
          { data: "Idle", title: "Idle", className: 'reorder' },
          { data: "Move", title: "Move", className: 'reorder' },
          { data: "Stop", title: "Stop", className: 'reorder' },
          { data: "Mileage", title: "Mileage", className: 'reorder' },
          { data: "LastIgnition", title: "Last Ignition", className: 'reorder' },
          { data: "Location", title: "Location", className: 'reorder' }

        ],
        "ajax": {
          url: WebApi,
          type: 'GET',
          dataType: 'json',
          dataSrc: ''
        },

        "columnDefs": [
          {

            "render": function (data, type, row) {
              return data;
            },
            "targets": 0
          },
          {
            "render": function (data, row) {
              timestamp = moment(data).format('D-MMM-YYYY');

              return '<div>' + '<span><i class="fa fa-clock-o hidden-xs hidden-md"></i>&nbsp;' + timestamp + '</span>' + '</div>';
            },
            "targets": 1
          },
          //{
          //  "render": function (data, row) {
          //    data = data * 60000;
          //    var seconds2 = 0;
          //    var minutes2 = 0;
          //    var hours2 = 0;
          //    var days2 = 0;
          //    var hoursDays2 = 0;
          //    seconds2 = parseInt((data / 1000) % 60);
          //    minutes2 = parseInt((data / (1000 * 60)) % 60);
          //    hours2 = parseInt((data / (1000 * 60 * 60)) % 24);
          //    days2 = parseInt(data / (1000 * 60 * 60 * 24));
          //    hoursDays2 = parseInt(days2 * 24);
          //    hours2 += hoursDays2;
          //    hours2 = (hours2 < 10) ? "0" + hours2 : hours2;
          //    minutes2 = (minutes2 < 10) ? "0" + minutes2 : minutes2;
          //    seconds2 = (seconds2 < 10) ? "0" + seconds2 : seconds2;
          //    var TimeString2 = hours2 + ':' + minutes2 + ':' + seconds2;
          //    return TimeString2;
          //  },
          //  "targets": [5, 6, 7]
          //},
          {
            "render": function (num) {
              var value = (num / 10).toFixed(2)
              return value + ' km';
            },
            "targets": 8
          },
          {
            "render": function (data) {
              return moment(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
            },
            "targets": 9
          }
        ],
        "footerCallback": function (row, data, start, end, display) {


        }
      });
    }

    function utilization2Report(WebApi, report_no) {

      checkForTables();
      $('#_utilization2R').show();

      $("#utilization2Report").DataTable({
        "destroy": true,
        "responsive": true,
        "select": true,
        "filter": true,
        "colReorder": false,
        "rowReorder": true,
        "keys": true,
        "fixedHeader": {
          "header": true,
          "footer": true
        },
        "scrollX": true,
        "scrollY": (screen.height - 335) + 'px',
        "scrollCollapse": true,
        "fnInitComplete": function () {
          const ps = new PerfectScrollbar('.dataTables_scrollBody');
        },
        "paging": true,
        "pagingType": "full_numbers",
        "pageLength": 12,
        "lengthMenu": [[12, 25, 50, -1], [12, 25, 50, 'All']],
        "searching": true,
        "ordering": true,
        "order": [[0, 'asc']],
        "info": true,
        "dom": 'Blfrtip',
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
          { data: "UtilId", title: "ID", className: 'reorder' },
          { data: "Date", title: "Date", className: 'reorder' },
          { data: "Driver", title: "Driver", className: 'reorder' },
          { data: "Asset", title: "Asset", className: 'reorder' },
          { data: "Category", title: "Category", className: 'reorder' },
          { data: "Idle", title: "Idle", className: 'reorder' },
          { data: "Move", title: "Move", className: 'reorder' },
          { data: "Stop", title: "Stop", className: 'reorder' },
          { data: "StopCount", title: "StopCount", className: 'reorder' },
          { data: "Mileage", title: "Mileage", className: 'reorder' },
          { data: "LastIgnition", title: "Last Ignition", className: 'reorder' },
          { data: "Location", title: "Location", className: 'reorder' }

        ],
        "ajax": {
          url: WebApi,
          type: 'GET',
          dataType: 'json',
          dataSrc: ''
        },

        "columnDefs": [
          {

            "render": function (data, type, row) {
              return data;
            },
            "targets": 0
          },
          {
            "render": function (data, row) {
              timestamp = moment(data).format('D-MMM-YYYY');

              return '<div>' + '<span><i class="fa fa-clock-o hidden-xs hidden-md"></i>&nbsp;' + timestamp + '</span>' + '</div>';
            },
            "targets": 1
          },
          {
            "render": function (data, row) {
              return Math.round(data * 100 / 1440) + ' %';
            },
            "targets": [5, 6, 7]
          },
          {
            "render": function (num) {
              //let strVal: number = num / 10;
              //return strVal + ' km';
              var value = (num / 10).toFixed(2)
              return value + ' km';
            },
            "targets": 9
          },
          {
            "render": function (data) {
              return moment(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
            },
            "targets": 10
          }
        ],
        "footerCallback": function (row, data, start, end, display) {


        }
      });
    }

    function checkForTables() {

      //check for the positionReport table
      if ($.fn.DataTable.isDataTable('#positionReport') == true) {
        $("#positionReport").DataTable().clear().draw();
        $("#positionReport").DataTable().destroy();
        $("#positionReport thead").html('');
        $('#_positionR').hide();
      }

      //check for the speedReport table
      else if ($.fn.DataTable.isDataTable('#speedReport') == true) {
        $("#speedReport").DataTable().clear().draw();
        $("#speedReport").DataTable().destroy();
        $("#speedReport thead").html('');
        $('#_speedR').hide();
      }

      //check for the mileageReport table
      else if ($.fn.DataTable.isDataTable('#mileageReport') == true) {
        $("#mileageReport").DataTable().clear().draw();
        $("#mileageReport").DataTable().destroy();
        $("#mileageReport thead").html('');
        $('#_mileageR').hide();
      }

      //check for the utilizationReport table
      else if ($.fn.DataTable.isDataTable('#utilizationReport') == true) {
        $("#utilizationReport").DataTable().clear().draw();
        $("#utilizationReport").DataTable().destroy();
        $("#utilizationReport thead").html('');
        $('#_utilizationR').hide();
      }
      //check for the utilization2Report table
      else if ($.fn.DataTable.isDataTable('#utilization2Report') == true) {
        $("#utilization2Report").DataTable().clear().draw();
        $("#utilization2Report").DataTable().destroy();
        $("#utilization2Report thead").html('');
        $('#_utilization2R').hide();
      }

    }

  }
   
}
