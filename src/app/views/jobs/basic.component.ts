import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import axios from "axios";
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
declare var $: any;

declare const google: any;
declare const StyledMarker: any;
declare const StyledIcon: any;


@Component({
  templateUrl: 'basic.component.html',
  styleUrls: ["./basic.component.css"],
  encapsulation: ViewEncapsulation.None
})

export class JobBasicComponent implements OnInit {

  table: any;
  company = sessionStorage.getItem('setSessionstorageValueCompany');
  role_id = Number(sessionStorage.getItem('setSessionstorageValueRoleID'));
  api_drivers = this._constant.getDrivers();
  api_status = this._constant.statusApi;
  route: string;
  constructor(private _constant: ConstantsService, location: Location, private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService) {

    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
      } 

    });

  }

  ngOnInit(): void {
    this.spinner.show();
    //Call StyledMarker Library
    //var sm = document.createElement("script");
    //sm.type = "text/javascript";
    //sm.src = "https://track-asia.com/sg/Dashboard/plugins/StyledMarker/StyledMarker.js";
    //$("head").append(sm);


    let base = this._constant.baseAppUrl;
    let uri = this._constant.uri_track;
    let user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
    let reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
    let company_id = Number(sessionStorage.getItem('setSessionstorageValueUserCompanyID'));
    let role_id = this._constant.getSessionstorageValueRoleID;
    let api_assets = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + company_id;
    let api_jobs = this._constant.getJobs();
    let company = this.company;

    //var openmarker= [];
    var openmarker = new Array();
    var map;
    var markers = new Array();
    var marker: any;
    var infoBubble;
    var styleMaker;
    var styleMakers = new Array();
    var infoWindow;

    let infoBoxList: any = [];
    var k;

    var paramtitle;
    var firstData = true;


    var shape = {
      coord: [16, 0, 18, 1, 21, 2, 24, 3, 26, 4, 27, 5, 28, 6, 29, 7, 29, 8, 29, 9, 29, 10, 29, 11, 29, 12, 29, 13, 29, 14, 29, 15, 29, 16, 29, 17, 29, 18, 29, 19, 29, 20, 29, 21, 29, 22, 29, 23, 29, 24, 29, 25, 29, 26, 29, 27, 29, 28, 28, 29, 3, 29, 2, 28, 2, 27, 1, 26, 1, 25, 1, 24, 0, 23, 0, 22, 0, 21, 0, 20, 0, 19, 0, 18, 0, 17, 0, 16, 0, 15, 0, 14, 0, 13, 0, 12, 0, 11, 0, 10, 0, 9, 0, 8, 0, 7, 1, 6, 2, 5, 2, 4, 3, 3, 5, 2, 6, 1, 8, 0, 16, 0],
      type: 'poly'
    };

    generateJN(this.company);

    $.getJSON(this.api_drivers, function (data) {
      $.each(data, function (index, item) {
        $('#jobDriver').append($('<option></option>').val(item.DriverID).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });

    $.getJSON(this.api_status, function (data) {
      $.each(data, function (index, item) {
        $('#_jobStatus').append($('<option></option>').val(item.FlagID).html(item.FlagValue));
      });
      $('.selectpicker').selectpicker('refresh');
    });

    var dateFormat = "D-MMM-YYYY HH:mm A";
    var d2 = new Date();
    d2.setDate(d2.getDate());
    var dateTo = moment(d2).format(dateFormat);

    $('#jobTimestamp').datetimepicker({
      format: 'd-M-Y H:i A',
      theme: 'dark',
      lang: 'en',
      value: dateTo,
      onChangeDateTime: function (dp, $input) {

        $(this).hide();
      }
    });

    this.table = initJobs(api_jobs, this.api_drivers, this.toastr, this.spinner);

    function initJobs(api_jobs, api_drivers, toastr, spinner) {

    var _table =  $("#jobList").DataTable({
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
              className: 'float-right',
              buttons: [
                'excel'
              ]
            },
            {
              text: 'Refresh',
              className: 'refreshBtn float-right ml-2',
              action: function (e, dt, node, config) {
                console.log(dt)               
                dt.ajax.reload();
                var data = dt.rows().data();
                countJobs(data);         
              }
            },
          ],
        ],
        "columns": [
          { data: "JobID", title: "Job ID", className: 'reorder' },
          { data: "JobNumber", title: "Reporting Info ID", className: 'reorder' },
          { data: "Driver", title: "Personnel", className: 'reorder' },
          { data: "Timestamp", title: "Schedule Date/Time", className: 'reorder' },
          { data: "RxTime", title: "Completed Date/Time", className: 'reorder' },
          { data: "Cancelled", title: "Cancelled Date/Time", className: 'reorder' },
          { data: "User", title: "Created By", className: 'reorder' },
          { data: "Remarks", title: "Admin Remarks", className: 'reorder' },
          { data: "Flag", title: "Status", className: 'reorder' },
          { data: "Forms", title: "Forms", className: 'reorder' },
          {
            data: null,
            title: "Action",
            className: "center",
            defaultContent: '<a class="editJob"><i class="fa fa-edit"></i></a> &emsp;'
          }
        ],
         "ajax": {
           url: api_jobs,
           type: 'GET',
           dataType: 'json',
           dataSrc: '',
           error: function (xhr, textStatus, errorThrown) {
             console.log('Error: Network Error - ' + errorThrown + '. Pls. try again!');
             //toastr.error('Error: Network Error - ' + errorThrown + '. Pls. try again!', 'Error', {
             //  timeOut: 3000,
             //  closeButton: true,
             //  enableHtml: true,
             //});
           }
        },
        "columnDefs": [
          {
            "render": function (data) {

              var stillUtc = moment.utc(data).toDate();
              var local = moment(stillUtc).local().format('D-MMM-YYYY, hh:mm:ss A');

              return local;
            },
            "targets": 3
          },
          {
            "render": function (data, type, row) {
              var text;
              if (row.Flag == 1 || row.Flag == 2) {
                text = '---';
              }
              else if (row.Flag == 3) {
                var stillUtc = moment.utc(data).toDate();
                text = moment(stillUtc).local().format('D-MMM-YYYY, hh:mm:ss A');
              } else {
                text = '---';
              }
  
              return text;

            },
            "targets": 4
          },
          {
            "render": function (data, type, row) {
              var text;
              if (row.Flag == 1 || row.Flag == 3) {
                text = '---';
              }
              else if (row.Flag == 2) {
                var stillUtc = moment.utc(data).toDate();
                text = moment(stillUtc).local().format('D-MMM-YYYY, hh:mm:ss A');
              }
              else {
                text = '---';
              }

              return text;

            },
            "targets": 5
          },
          {
            "render": function (data, type, row ) {

              var labelColor;
              var text;
              if (data == 1) {
                labelColor = "warning";
                text = "In-progress";
              } else if (data == 2) {
                labelColor = "danger";
                text = "Cancelled";
              } if (data == 3) {
                labelColor = "success";
                text = "Completed";
              } else if (data == null || data == undefined || data == "") {

                labelColor = "info";
                text = "Status is undefined. Pls. contact administrator!"
              }

              return '<div class="text-dark badge badge-' + labelColor + '"> ' + text + '</div>';

            },
            "targets": 8
          },
          {
            "render": function (data, type, row) {
              if (row.FormsFill == "Uniform") {
                return '<div class="align-self-center"><strong><a href="' + data + '" target="_blank"><i class="cui-file icons"></i></a></strong></div>'
              } else {
                return 'No form'
              }
            },
            "targets": 9
          },
        ],
        "initComplete": function (data, type, row) {

          countJobs(type);
        
        },
        "footerCallback": function (row, data, start, end, display) {


        }
    });

    function countJobs(data) {

        var inprogress = 0;
        var cancelled = 0;
        var completed = 0;

        if (data) {
          for (var k = 0; k < data.length; ++k) {
            if (data[k].Flag == 1) {
              inprogress++;
            } else if (data[k].Flag == 2) {
              cancelled++;
            } else if (data[k].Flag == 3) {
              completed++;
            }

          }

          document.getElementById('getInprogress').innerHTML = inprogress.toString();
          document.getElementById('getCancelled').innerHTML = cancelled.toString();
          document.getElementById('getCompleted').innerHTML = completed.toString();
        }
        else {

          inprogress = 0;
          cancelled = 0;
          completed = 0;
          document.getElementById('getInprogress').innerHTML = inprogress.toString();
          document.getElementById('getCancelled').innerHTML = cancelled.toString();
          document.getElementById('getCompleted').innerHTML = completed.toString();
        }


      }

    $('#jobList').on('click', 'a.editJob', function (e) {
        spinner.show();
        $('#jobModal').modal('show');
        $('#jobFormTitle').text('Edit SHN Schedule');
        $('#_jobDriver').empty();
        $('.selectpicker').selectpicker('refresh');

        var data = _table.row($(this).parents('tr')).data();
        $('#_jobID').val(data.JobID);
        $('#_jobNumber').val(data.JobNumber);
        $('#_jobTimestamp').val(data.Timestamp);
        $('#_jobRemarks').val(data.Remarks);
        $('#_jobStatus').val(data.Flag);

        var dateFormat = "DD-MMM-YYYY, hh:mm:ss A"; //DD-MMM-YYYY
        var stillUtc = moment.utc(data.Timestamp).toDate();
        var timestamp = moment(stillUtc).local().format(dateFormat);

        $('#_jobTimestamp').datetimepicker({
          format: 'd-M-Y H:i A',
          theme: 'dark',
          lang: 'en',
          value: timestamp,
          onChangeDateTime: function (dp, $input) {
            $(this).hide();
          }
        });

        var drive_id = data.DriverID;
        $.getJSON(api_drivers, function (data) {
          $.each(data, function (index, item) {        
            if (item.DriverID == drive_id) {
              $('#_jobDriver').append($('<option selected="selected"></option>').val(item.DriverID).html(item.Name));
            }
            else
            {
              $('#_jobDriver').append($('<option></option>').val(item.DriverID).html(item.Name));
            }
       
          });
          $('.selectpicker').selectpicker('refresh');
        });


        $('.selectpicker').selectpicker('refresh');
        spinner.hide();
      });

     return _table;
    }



    //===================================MAPS=================================================//
    var assetMarkerInterval;

    //===================================STYLED MARKER========================//

    var StyledIconTypes: any = {};
    var bu_ = 'https://chart.googleapis.com/chart?chst=';
    var gm_ = google.maps;
    var gp_ = gm_.Point;
    var ge_ = gm_.event;
    var gmi_ = gm_.MarkerImage;

    //================================INIT==================================//
    var latlng = new google.maps.LatLng(1.3521, 103.8198);
    for (var type in google.maps.MapTypeId) {
      this._constant.mapTypeIds.push(google.maps.MapTypeId[type]);
    }

    var mapOptions = {
      zoom: 12,
      center: latlng,
      panControl: false,
      zoomControl: false,
      zoomControlOptions:
      {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      mapTypeControl: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: this._constant.mapTypeIds,
        position: google.maps.ControlPosition.TOP_LEFT
      },
      streetViewControl: false,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      fullscreenControl: true,
      fullscreenControlOptions:
      {
        position: google.maps.ControlPosition.TOP_LEFT
      },
      scaleControl: false,
      overviewMapControl: false
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
   
    setMarkers(updateAssets, api_assets, this.route);

    google.maps.event.addListener(map, 'mousemove', function (event) {
      document.getElementById('coordinates-panel').innerHTML =
        event.latLng.lat() + ', ' + event.latLng.lng();
    });

    //================================AUTOREFRESH========================================//

    assetMarkerInterval = setInterval(() => {
      setMarkers(updateAssets, api_assets, this.route);
    }, 10000);

    function generateJN(company) {

      //populate Job Number
      var date = new Date();
      var todaydate = date.getDate();
      let todaymon: any = date.getMonth() + 1;
      let todayyear: any = date.getFullYear();
      //pull the last two digits of the year
      todayyear = todayyear.toString().substr(2, 2);

      var q = todayyear;
      let y: any;
      let z: any;
      if (todaymon <= 9) {
        y = "0" + todaymon;
      }
      else {
        y = todaymon;
      }


      if (todaydate <= 9) {
        z = "0" + todaydate;
      }
      else {
        z = todaydate;
      }


      function randomString() {
        var chars = "0123456789";
        var string_length = 6;
        var randomstring = '';
        for (var i = 0; i < string_length; i++) {
          var rnum = Math.floor(Math.random() * chars.length);
          randomstring += chars.substring(rnum, rnum + 1);
        }

        return randomstring;
      }

      var parseCompany = company.split(' ');
      var jobNumber = parseCompany[0] + "-" + z + y + q + "-" + randomString();

      $('#jobNumber').val(jobNumber);

    }

   //=====================================MARKERS=============================================//

    function setMarkers(callback: any, api_assets: string, route: string) {

      axios.get(api_assets)
        .then(function (response) {
          //console.log(response);
          callback(response.data, route);
        })
        .catch(function (error) {
          console.log(error);
        });

    }

    function updateAssets(data, route) {

      //first start
      var move = 0;
      var idle = 0;
      var stop = 0;
      var down = 0;
      var nogps = 0;
      var nogprs = 0;


      var bounds = new google.maps.LatLngBounds();

      for (var i = 0, length = data.length; i < length; i++) {

        if (data[i]) {

          if (data[i].LastPos == null || data[i].LastPos.Engine == null || data[i].LastPos.PosID == 0 || data[i].LastPos === "") {
            console.log('Data is Null');
            down++;
            continue;
          }

          else {

            var assets = data[i];
            var latLng = new google.maps.LatLng(data[i].LastPos.PosY, data[i].LastPos.PosX);
            var id = data[i].AssetID;
            var tag = data[i].Tag;
            var category = data[i].Category;
            var company = data[i].Company;
            var vechs = data[i].Name;
            var gps = data[i].Gps;
            var gprs = data[i].Gprs;
            var engine = data[i].Engine;
            var fix = data[i].LastPos.Fix;
            var make = data[i].Make;
            var model = data[i].Model;
            var plate_no = data[i].LicensePlate;
            var address = data[i].LastPos.Location;
            var speed = data[i].LastPos.Speed;
            var course = data[i].LastPos.Course;
            var zone = data[i].LastPos.Zone;
            var speedLimit = data[i].SpeedLimit;
            var tagID = data[i].TagID;
            var mileage = data[i].LastPos.Mileage;
            var assetTimestamp = data[i].LastPos.Timestamp;
            var assetBattery = data[i].LastPos.Battery.toFixed(2);
            var finaldata1 = data[i].Name.match(/.{1,28}/g).join("<br/>");
            var finaldata = finaldata1.substring(0, 18);
            var getXPosition = data[i].LastPos.PosX;
            var getYPosition = data[i].LastPos.PosY;
            var timestamp1: any = moment.utc(assetTimestamp).local().format("DD MMM YYYY");
            var d = new Date();
            var timestamp2: any = moment.utc(d).local().format("DD MMM YYYY");
            timestamp2 = Date.parse(timestamp2);
            timestamp1 = Date.parse(timestamp1);
            var timestamp = moment.utc(assetTimestamp).local().format("D-MMM-YYYY, hh:mm:ss A");
            var elapsedTimestamp = moment.utc(assetTimestamp).local().format();
            var el = getElapsedTime(elapsedTimestamp);

            let vehicleImg: string;
            let markerCategory: string;
            let path: string;
            let scale: any;
            let _iconcolor: string;
            let color: string;
            let icon_style_anchor: any;
            let icon_style_shadow: any;

            if (engine == 'MOVE') {
              color = "#5cb85c";
            }
            else if (engine == 'IDLE') {
              color = "#f0ad4e";
            }
            else if (engine == 'STOP' && timestamp2 > timestamp1) {
              color = "#696969";
            }
            else if (engine == 'STOP') {
              color = "#d9534f";
            }

            // Category image
            switch (category) {
              case "Car":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "car";
                scale = 0.6;
                vehicleImg = "assets/img/car.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Truck":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "truck";
                scale = 0.6;
                vehicleImg = "assets/img/truck.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Van":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "van";
                scale = 0.6;
                vehicleImg = "assets/img/van.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Bus":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "bus";
                scale = 0.6;
                vehicleImg = "assets/img/bus.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Motorcycle":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "motorcycle";
                scale = 0.07;
                vehicleImg = "assets/img/motorcycle.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Recovery Veh":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "truck";
                scale = 0.6;
                vehicleImg = "assets/img/truck.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Lorry":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "truck";
                scale = 0.6;
                vehicleImg = "assets/img/truck.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "10 Footer Lorry":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "truck";
                scale = 0.6;
                vehicleImg = "assets/img/truck.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "14 Footer Lorry":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "truck";
                scale = 0.6;
                vehicleImg = "assets/img/truck.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Ambulance":
                icon_style_anchor = new google.maps.Point(0, 42);
                icon_style_shadow = new google.maps.Point(0, 44);
                _iconcolor = 'white';
                markerCategory = "ambulance";
                scale = 0.6;
                vehicleImg = "assets/img/ambulance.jpg";
                path = 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z';
                break;
              case "Personnel":
                icon_style_anchor = new google.maps.Point(-4, 24);
                icon_style_shadow = new google.maps.Point(-4, 26);
                _iconcolor = color;
                course = 0;
                scale = 0.06;
                markerCategory = "personnel";
                vehicleImg = "assets/img/personnel.jpg";
                path = 'M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z';
                break;
              case "Mobile":
                icon_style_anchor = new google.maps.Point(-7, 30);
                icon_style_shadow = new google.maps.Point(-7, 32);
                _iconcolor = color;
                course = 0;
                scale = 0.05;
                markerCategory = "mobile";
                vehicleImg = "assets/img/mobile.jpg";
                path = 'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z';
                break;
            }


            let icon: any;
            if (timestamp2 > timestamp1) {
              //down
              icon = {
                path: path,
                scale: scale,
                strokeColor: color,
                strokeWeight: 1,
                strokeOpacity: 1,
                fillOpacity: 1,
                fillColor: _iconcolor,
                offset: '5%',
                rotation: course,
                anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
              }
            }
            else {
              icon = {
                path: path,
                scale: scale,
                strokeColor: color,
                strokeWeight: 1,
                strokeOpacity: 1,
                fillOpacity: 1,
                fillColor: _iconcolor,
                offset: '5%',
                rotation: course,
                anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
              }
            }

            let driverName: string;
            if (assets.Driver.Name == null) {
              driverName = "No Driver Assigned";
            } else {
              driverName = assets.Driver.Name;
            }

            //Count Status
            if (engine == "MOVE")
              move++;
            else if (engine == "IDLE")
              idle++;
            else if (engine == "STOP" && timestamp2 > timestamp1)
              down++;
            else if (engine == "STOP")
              stop++;

            if (gps < 2)
              nogps++;

            if (gprs == 2)
              nogprs++;

            let assetContent: any = "<div id='assetInfo' class='form-group row' style='padding:0px !important;'>";
            if (plate_no !== "Unknown") assetContent += "<div class='col-md-8'><h6 class='map-heading'>" + finaldata + "</h6></div>";
            else assetContent += "<div class='col-md-8'><h6 class='map-heading'>" + finaldata + "</h6></div>";

            assetContent += "<div class='col-md-4'><p style='text-align:right; padding-right:30px; padding-bottom:0px !important'>"
              + gpsStatus(gps, timestamp)
              + "&nbsp;" + gprsStatus(gprs, timestamp) + "</p></div>";

            assetContent += "<table id='assetDetails' class='table table-vcenter'>" +
              "<tbody>" +
              "<tr>" + "<td colspan='2'>";

            assetContent += "<span class='font-weight-bold'>Address:&nbsp;</span>" + address +
              "<br />" +
              "<span class='font-weight-bold'>Date:&nbsp;</span>" + timestamp +
              "<br />" +
              "<span>Speed:&nbsp;</span>" + speedFormatter(speed) +
              "<br />" +
              "<span class='font-weight-bold'>GPS Status:&nbsp;</span>" + fix +
              "<br />" +
              "<span class='font-weight-bold'>Driver:&nbsp;</span>" + driverName +
              "<br />" +
              "<span class='font-weight-bold'>Zones:&nbsp;</span>" + zone +
              "<br />" +
              "<span class='font-weight-bold'>Last Updated:&nbsp;</span>" + el +
              "<br />" +
              "</td>" +
              "<td colspan='2' class='pl-4'>" +
              "<img class='vehicle-img' src='" + vehicleImg + "'/>" + "<br />";

            if (make !== "Unknown") assetContent += "<span class='font-weight-bold'>Brand:&nbsp;</span>" + make +
              "<br />";
            if (model !== "Unknown") assetContent += "<span class='font-weight-bold'>Model:&nbsp;</span>" + model +
              "<br />";

            assetContent += "</td>" +
              "</tr>" +
              "</tbody>" + "</table>" +
              "</div></div>";


            //===================================================================//

            marker = setInfoBubble({
              map: map,
              position: latLng,
              icon: icon,
              shape: shape,
              category: category,
              cat_img: vehicleImg,
              address: address,
              vechs: vechs,
              tag: tag,
              id: id,
              gps: gps,
              gprs: gprs,
              title: vechs,
              zone: zone,
              fix: fix,
              engine: engine,
              speed: speed,
              mileage: mileage,
              timestamp: timestamp,
              course: course,
              color: color,
              getYPosition: getYPosition,
              getXPosition: getXPosition,
              assetBattery: assetBattery,
              content: assetContent,
              driver: driverName,
              elapsed_timestamp: el
            });

            marker.setMap(map);

            StyledIconTypes.BUBBLE = {
              defaults: {
                text: '',
                color: '00ff00',
                fore: '000000',
                starcolor: null
              },
              getURL: function (props) {
                var _url = bu_ + 'd_bubble_text_small_withshadow&chld=bb|';
                _url += props.get('text') + '|';
                _url += props.get('color').replace(/#/, '') + '|';
                _url += props.get('fore').replace(/#/, '');
                return _url;
              },
              getShadowURL: function (props) {
                return bu_ + 'd_bubble_text_small_withshadow&chld=bb|' + props.get('text');
              },
              getAnchor: function (props, width, height) {
                return icon_style_anchor;
              },
              getShadowAnchor: function (props, width, height) {
                return icon_style_shadow;
              },
              getShape: function (props, width, height) {
                var _iconmap: any = {};
                _iconmap.coord = [
                  0, 44,
                  13, 26,
                  13, 6,
                  17, 1,
                  width - 4, 1,
                  width, 6,
                  width, 21,
                  width - 4, 26,
                  21, 26
                ];
                _iconmap.type = 'poly';
                return _iconmap;
              }
            };

            styleMaker = new StyledMarker({
              styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, {
                color: "#458FD2",
                text: vechs,
                fore: "#FFFFFF"
              }),
              position: latLng,
              map: map,
              shadow: 'none'
            });

  
            if (markers[i] && markers[i].setPosition) {
              $("#assetStatus").empty();

              // To remove the marker from the map
              marker.setMap(null);
              styleMaker.setMap(null);

              markers[i].setPosition(latLng);
              styleMakers[i].setPosition(latLng);
              markers[i].setIcon(icon);

              if (paramtitle == vechs) {
                markers[i].id = id;
                markers[i].content = assetContent;
                markers[i].address = address;
                markers[i].timestamp = timestamp;
                markers[i].gps = gps;
                markers[i].gprs = gprs;
                markers[i].engine = engine;
                markers[i].fix = fix;
                markers[i].tag = tag;
                markers[i].speed = speed;
                markers[i].cat_img = vehicleImg;
                markers[i].driver = driverName;
                markers[i].elapsed_timestamp = el;

                if ($('#assetInfo').val() != null || $('#assetInfo').val() != undefined) {
                  document.getElementById('assetInfo').innerHTML = assetContent
                }
                //map.panTo(marker.getPosition());
              }
              else {
                markers[i].id = id;
                markers[i].content = assetContent;
                markers[i].address = address;
                markers[i].timestamp = timestamp;
                markers[i].gps = gps;
                markers[i].gprs = gprs;
                markers[i].engine = engine;
                markers[i].fix = fix;
                markers[i].tag = tag;
                markers[i].speed = speed;
                markers[i].cat_img = vehicleImg;
                markers[i].driver = driverName;
                markers[i].elapsed_timestamp = el;
              }


            } else {

              bounds.extend(latLng);
              markers[i] = marker;
              styleMakers[i] = styleMaker;


            }//end of else


          }//end of else continue     

        }

        if (i + 1 == data.length) {
     
        }


      }//end of for

      if (firstData) {
        map.setZoom(7);
        map.fitBounds(bounds);
        firstData = false;
      }

      if (route == "/basic") {
        document.getElementById('total-vehicles').innerHTML = data.length;
        document.getElementById('getMove').innerHTML = move.toString();
        document.getElementById('getIdle').innerHTML = idle.toString();
        document.getElementById('getStop').innerHTML = stop.toString();
        document.getElementById('getDown').innerHTML = down.toString();

      }

    }

    function setInfoBubble(param: any) {

      var newMarker = new google.maps.Marker({
        id: param.id,
        map: param.map,
        position: param.position,
        title: param.title,
        category: param.category,
        address: param.address,
        timestamp: param.timestamp,
        vechs: param.vechs,
        gps: param.gps,
        gprs: param.gprs,
        zone: param.zone,
        engine: param.engine,
        speed: param.speed,
        fix: param.fix,
        driver: param.driver,
        icon:  param.icon ,
        shape: param.shape,
        content: param.content,
        tag: param.tag,
        cat_img: param.cat_img,
        elapsed_timestamp: param.elapsed_timestamp
      });

      if (param.content) {

        google.maps.event.addListener(newMarker, 'click', function () {

          for (var i = 0; i < infoBoxList.length; i++) {

            infoBoxList[i].close();
          }

          // Reset the markers array
          infoBoxList = [];

          // this -> the marker on which the onclick event is being attached
          if (!this.getMap().newMarker) {
            infoBubble = this.getMap().newMarker = new google.maps.InfoWindow({
              zIndex: 999999
            });
            infoBoxList.push(infoBubble);
          }

          this.getMap().newMarker.setContent(this.content);
          this.getMap().newMarker.open(this.getMap(), this);
          this.getMap().setCenter(this.position);
          paramtitle = param.title;

        });
      }


      return newMarker;
    }

    function gpsStatus(gps, timestamp) {

      var d = new Date();
      var timestamp2 = moment.utc(d).local().format("D-MMM-YYYY");
      var dateEntered = moment(timestamp, 'D-MMM-YYYY').format('D-MMM-YYYY');

      var labelColor;
      if (timestamp2 > dateEntered) {
        labelColor = "down";
      }
      else if (gps >= 2) {
        labelColor = "move";
      }
      else if (gps < 2 && timestamp2 == dateEntered) {
        labelColor = "stop";
      } else {
        labelColor = "down";
      }


      return "<i class='fa fa-map-marker " + labelColor + "' title='GPS'></i>";
    }

    function gprsStatus(gprs, timestamp) {

      var d = new Date();
      var timestamp2 = moment.utc(d).local().format("D-MMM-YYYY");
      var dateEntered = moment(timestamp, 'D-MMM-YYYY').format('D-MMM-YYYY');

      var labelColor;
      if (timestamp2 > dateEntered) {
        labelColor = "down";
      }
      else if (gprs == 0) {
        labelColor = "move";

      } else if (gprs == 1) {
        labelColor = "idle";
      }
      else if (gprs == 2 && timestamp2 == dateEntered) {
        labelColor = "stop";
      } else {
        labelColor = "down";
      }

      return "<i class='fa fa-signal " + labelColor + "' title='3G'></i>";
    }

    function speedFormatter(value) {

      var roundoff = Math.round(value * 100) / 100;

      return roundoff + ' km/h';
    }

    function getElapsedTime(timestamp) {

      var now = moment().format();
      var diff: any = moment.duration(moment(now).diff(moment(timestamp)));
      var days = parseInt(diff.asDays()); //84
      var hours = parseInt(diff.asHours()); //2039 hours, but it gives total hours in given miliseconds which is not expacted.
      hours = hours - days * 24;  // 23 hours
      var minutes = parseInt(diff.asMinutes()); //122360 minutes,but it gives total minutes in given miliseconds which is not expacted.
      minutes = minutes - (days * 24 * 60 + hours * 60); //20 minutes.
      var ms = "";

      if (days == 0 && hours == 0 && minutes == 0) {
        ms = "a moment ago";
      } else if (days == 0) {
        ms = hours + " hours " + minutes + " minutes ago";
      } else {
        if (days == 1) {
          ms = days + " day " + hours + " hours " + minutes + " minutes ago";
        } else {
          ms = days + " days " + hours + " hours " + minutes + " minutes ago";
        }

      }

      return ms;
    }

    function ClearResellerFilter() {

      // Loop through markers and set map to null for each
      for (var i = 0; i < markers.length; i++) {
        if (markers[i]) markers[i].setMap(null);
      }

      // Reset the markers array
      markers = [];

      for (var i = 0; i < styleMakers.length; i++) {
        if (styleMakers[i]) styleMakers[i].setMap(null);
      }
      styleMakers = [];

      for (var i = 0; i < infoBoxList.length; i++) {

        if (infoBoxList[i]) infoBoxList[i].close();
      }

      // Reset the markers array
      infoBoxList = [];

    }

    //=====================================OnChange==========================================//

    $('.SelectResellerFilter').on('change', function () {
      clearInterval(assetMarkerInterval);
      ClearResellerFilter();
    });
   
    $('.SelectCompanyFilter').change({ route: this.route}, function (event) {
  
      var selectedText = $(this).find("option:selected").text();
      $('#jobNumber').val('');
      generateJN(selectedText);
      clearInterval(assetMarkerInterval);
      ClearResellerFilter();
      //get new api
      let api_assets_filter = getAssetsFilter(role_id, base, uri, user_id, reseller_id);

      //resume
      setMarkers(updateAssets, api_assets_filter, event.data.route);
      assetMarkerInterval = setInterval(() => {
        setMarkers(updateAssets, api_assets_filter, event.data.route);
      }, 10000);
    });

    $('.SelectAssetFilter').on('change', function () {

      var selected = $(this).find("option:selected").val();

      for (k = 0; k < markers.length; k++) {
        marker = markers[k];

        if (markers[k]) {
          // If is same assets or assets not picked
          if (marker.id == selected) {
            google.maps.event.trigger(markers[k], "click");
          }
        }


      }

    }); // end of on change


    //====================================GET API WITH PARAM=================================//

    function getAssetsFilter(role_id: Number, base: string, uri: string, user_id: Number, reseller_id: Number) {

      let url: string;
      if (role_id == 1) {
        url = base + uri + 'assetinfo' + '?UserID=' + '&ResellerID=' + $('#load-reseller').val() + '&CompanyID=' + $('#load-company').val();
      } else if (role_id == 2) {

        url = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + $('#load-company').val();

      } else if (role_id >= 3) {

        url = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + $('#load-company').val();
      }
      return url;
    }

   
    //====================================END===============================================//
    this.spinner.hide();   
  } //end of ngOnInit

  ngOnSubmit() {
 
    this.spinner.show();

    var getTimestamp = $("#jobTimestamp").val();
    var dateFormat = "DD-MMM-YYYY, hh:mm:ss A"; 
    var convertTimestamp = moment(getTimestamp, dateFormat);
    var validateTimestamp = moment(getTimestamp, dateFormat).isValid();
    var timestamp = moment.utc(convertTimestamp).format(dateFormat);
    var getDrivers = $('#jobDriver').val();

    function countJobs(data) {

      var inprogress = 0;
      var cancelled = 0;
      var completed = 0;

      if (data) {
        for (var k = 0; k < data.length; ++k) {
          if (data[k].Flag == 1) {
            inprogress++;
          } else if (data[k].Flag == 2) {
            cancelled++;
          } else if (data[k].Flag == 3) {
            completed++;
          }

        }

        document.getElementById('getInprogress').innerHTML = inprogress.toString();
        document.getElementById('getCancelled').innerHTML = cancelled.toString();
        document.getElementById('getCompleted').innerHTML = completed.toString();
      }
      else {

        inprogress = 0;
        cancelled = 0;
        completed = 0;
        document.getElementById('getInprogress').innerHTML = inprogress.toString();
        document.getElementById('getCancelled').innerHTML = cancelled.toString();
        document.getElementById('getCompleted').innerHTML = completed.toString();
      }


    }

    if (validateTimestamp == true) {

      if (getDrivers.length == 0) {

        $('#confirmJobs').modal('hide');
        this.spinner.hide();
        this.toastr.error('Pls. select personnel!', 'Error', {
          timeOut: 3000,
          closeButton: true,
          enableHtml: true,
        });

      } else {

        for (var n = 0; n < getDrivers.length; n++) {
          var driver_id = getDrivers[n];

          let obj: any = {
            JobID: $('#jobID').val(),
            JobNumber: $('#jobNumber').val(),
            DriverID: driver_id,
            CompanyID: sessionStorage.getItem('setSessionstorageValueUserCompanyID'),
            ResellerID: sessionStorage.getItem('setSessionstorageValueUserResellerID'),
            UserID: sessionStorage.getItem('setSessionstorageValueUserID'),
            Timestamp: timestamp,
            RxTime: moment().format(),
            Cancelled: moment().format(),
            Remarks: $('#jobRemarks').val(),
            Flag: 1,
          };

          axios.post(this._constant.jobApi, obj)
            .then(function (response) {
              $("#jobList").DataTable().ajax.reload();
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
              if (this.role_id == 1) {
                this.toastr.error('Job API Error: ' + error, 'Error', {
                  timeOut: 3000,
                  closeButton: true,
                  enableHtml: true,
                });
              } else {
                console.log('Job API Error: ' + error)
                this.toastr.error('Error: Network Error. Pls. Try again.', 'Error', {
                  timeOut: 3000,
                  closeButton: true,
                  enableHtml: true,
                });
              }
            });


          if (n + 1 == getDrivers.length) {
            $('#confirmJobs').modal('hide');

            setTimeout(() => {
              var data = $("#jobList").DataTable().rows().data();
              countJobs(data);
            }, 500);

            this.spinner.hide();
            this.toastr.success('Successful', 'Success', {
              timeOut: 3000,
              closeButton: true,
              enableHtml: true,
            });
          }

        }

      }

    } else {

      $('#confirmJobs').modal('hide');
      this.spinner.hide();
      this.toastr.error('Invalid Date!', 'Error', {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
      });

    }

  }

  ngOnSubmitEdit() {

    this.spinner.show();
    let _table = this.table;

    var getTimestamp = $("#_jobTimestamp").val();
    var dateFormat = "DD-MMM-YYYY, hh:mm:ss A"; //DD-MMM-YYYY
    var convertTimestamp = moment(getTimestamp, dateFormat);
    var validateTimestamp = moment(getTimestamp, dateFormat).isValid();
    var timestamp = moment.utc(convertTimestamp).format(dateFormat);
    var getDrivers = $('#_jobDriver').val();
    var getStatus = $('#_jobStatus').val();


    function countJobs(data) {

      var inprogress = 0;
      var cancelled = 0;
      var completed = 0;

      if (data) {
        for (var k = 0; k < data.length; ++k) {
          if (data[k].Flag == 1) {
            inprogress++;
          } else if (data[k].Flag == 2) {
            cancelled++;
          } else if (data[k].Flag == 3) {
            completed++;
          }

        }

        document.getElementById('getInprogress').innerHTML = inprogress.toString();
        document.getElementById('getCancelled').innerHTML = cancelled.toString();
        document.getElementById('getCompleted').innerHTML = completed.toString();
      }
      else {

        inprogress = 0;
        cancelled = 0;
        completed = 0;
        document.getElementById('getInprogress').innerHTML = inprogress.toString();
        document.getElementById('getCancelled').innerHTML = cancelled.toString();
        document.getElementById('getCompleted').innerHTML = completed.toString();
      }


    }
 
    if (validateTimestamp == true) {

      if (getDrivers.length == 0) {

        $('#confirmEditJobs').modal('hide');
        this.spinner.hide();
        this.toastr.error('Pls. select personnel!', 'Error', {
          timeOut: 3000,
          closeButton: true,
          enableHtml: true,
        });

      } else if (getStatus.length == 0) {

        $('#confirmEditJobs').modal('hide');
        this.spinner.hide();
        this.toastr.error('Pls. select status!', 'Error', {
          timeOut: 3000,
          closeButton: true,
          enableHtml: true,
        });

      }

      else {

        let obj: any = {
          JobID: $('#_jobID').val(),
          JobNumber: $('#_jobNumber').val(),
          DriverID: $('#_jobDriver').val(),
          CompanyID: sessionStorage.getItem('setSessionstorageValueUserCompanyID'),
          ResellerID: sessionStorage.getItem('setSessionstorageValueUserResellerID'),
          UserID: sessionStorage.getItem('setSessionstorageValueUserID'),
          Timestamp: timestamp,
          RxTime: moment().format(),
          Cancelled: moment().format(),
          Remarks: $('#_jobRemarks').val(),
          Flag: $('#_jobStatus').val(),
        };

        var spinner = this.spinner;
        var toastr = this.toastr;
        var role_id = this.role_id;

        axios.put(this._constant.jobApi + this._constant.param_put + obj.JobID, obj)
          .then(function (response) {
            console.log(response);

            $("#jobList").DataTable().ajax.reload();
            $('#jobModal').modal('hide');
            $('#confirmEditJobs').modal('hide');

            setTimeout(() => {
              var data = $("#jobList").DataTable().rows().data();
              countJobs(data); 
            }, 500);
   

            spinner.hide();
            toastr.success('Successful', 'Success', {
              timeOut: 3000,
              closeButton: true,
              enableHtml: true,
            });
          })
          .catch(function (error) {
            console.log(error);
            if (role_id == 1) {
              toastr.error('Job API Error: ' + error, 'Error', {
                timeOut: 3000,
                closeButton: true,
                enableHtml: true,
              });
            } else {
              console.log('Job API Error: ' + error)
              toastr.error('Error: Network Error. Pls. Try again.', 'Error', {
                timeOut: 3000,
                closeButton: true,
                enableHtml: true,
              });
            }
          });

      }

    } else {

      $('#confirmEditJobs').modal('hide');
      this.spinner.hide();
      this.toastr.error('Invalid Date!', 'Error', {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
      });

    }

  }

}
