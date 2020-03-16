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
import * as Highcharts from 'highcharts';
import Exporting from "highcharts/modules/exporting";
import { NgxSpinnerService } from "ngx-spinner";

import axios from "axios";
declare var $: any;
declare const google: any;
Exporting(Highcharts);
@Component({
  templateUrl: 'reports.component.html',
  styleUrls: ["./reports.component.css"],
})

export class ReportsComponent implements OnInit {

  clickEventsubscription: Subscription;
  route: string;
  api_assets_individual: string;
  reports: string;
  map: any;
  markers: any[] = [];
  coordinates: any[] = [];
  polylines: any[] = [];


  constructor(private _constant: ConstantsService, location: Location, private router: Router, private eventEmitterService: EventEmitterService, private toastr: ToastrService, private spinner: NgxSpinnerService) {
    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
      }

    });
    this.clickEventsubscription = this.eventEmitterService.getClickEvent().subscribe(() => {

      event.preventDefault();
      this.generateEN();
    })
  }

  ngOnInit(): void {
    this.spinner.show();

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
    filter(role_id, getReport);
    function filter(role_id, getReport) {

      $("#_charts").hide();
      $("#_playback").hide();
      $('#_reports_table').hide();

      if (role_id >= 3) {
        $('#_reseller').hide();
      }

      if (getReport == 3) {
        $('#_speed').show();
      } else {
        $('#_speed').hide();
      }
    }


    //=========================MAPS=============================//
    if (!google) {
      this.toastr.error('Error: Network Error. Pls. Try again.', 'Error', {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
      });
    } else {
      // map settings
      var latlng = new google.maps.LatLng(1.3521, 103.8198);
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
        //mapTypeId: google.maps.MapTypeId.SATELLITE,
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

      // initialize map
      this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }

    $('#load-report').on('change', function () {
      //Default hide everything
      $("#_charts").hide();
      $("#_playback").hide();
      $("#_reports_table").hide();

      if (this.value == 1) {
        $("#positionSection").hide();
        $("#speedSection").hide();
        $("#mileageSection").hide();
        $("#utilizationSection").hide();
        $("#utilization2Section").hide();
      }
      else if (this.value == 2) {
        $("#positionSection").show();
        $("#speedSection").hide();
        $("#mileageSection").hide();
        $("#utilizationSection").hide();
        $("#utilization2Section").hide();
      }
      else if (this.value == 3) {
        $("#positionSection").hide();
        $("#speedSection").show();
        $("#mileageSection").hide();
        $("#utilizationSection").hide();
        $("#utilization2Section").hide();
      }
      else if (this.value == 4) {
        $("#positionSection").hide();
        $("#speedSection").hide();
        $("#mileageSection").show();
        $("#utilizationSection").hide();
        $("#utilization2Section").hide();
      }
      else if (this.value == 5) {
        $("#positionSection").hide();
        $("#speedSection").hide();
        $("#mileageSection").hide();
        $("#utilizationSection").show();
        $("#utilization2Section").hide();
      }
      else if (this.value == 6) {
        $("#positionSection").hide();
        $("#speedSection").hide();
        $("#mileageSection").hide();
        $("#utilizationSection").hide();
        $("#utilization2Section").show();
      }
      else if (this.value == 7) {
        $("#positionSection").hide();
        $("#speedSection").hide();
        $("#mileageSection").hide();
        $("#utilizationSection").hide();
        $("#utilization2Section").hide();
      }
    });

    this.spinner.hide();
  }


  generateEN() {

    this.spinner.show();
    let WebApi: string;
    let icon_url = this._constant.iconURL;

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

    $("#_charts").show();
    $("#_playback").show();
    $('#_reports_table').show();

    let convertTmestamp: any = moment(getTimestamp, dateFormat);
    let convertRxtime: any = moment(getRxTime, dateFormat);
    var timestamp = moment(convertTmestamp).subtract(8, 'hours').format(dateFormat);
    var rxtime = moment(convertRxtime).subtract(8, 'hours').format(dateFormat);
    var duration = '<div style="color:white">Selected Date:&nbsp;' + moment.duration(convertRxtime - convertTmestamp).humanize() + ' duration</div>';
    var validateTimestamp = moment(getTimestamp, dateFormat).isValid();
    var validateRxTime = moment(getRxTime, dateFormat).isValid();


    if (validateTimestamp == true && validateRxTime == true) {

    }

    if (getReport == 2) {
      WebApi = "https://app.track-asia.com/tracksgwebapi/api/posinfo?AssetID=" + getAsset + "&CompanyID=" + getCompany + "&Timestamp=" + timestamp + "&RxTime=" + rxtime;
    }
    else if (getReport == 3) {
      WebApi = "https://app.track-asia.com/tracksgwebapi/api/posinfo?AssetID=" + getAsset + "&Speed=" + getSpeed + "&CompanyID=" + getCompany + "&Timestamp=" + timestamp + "&RxTime=" + rxtime;
    }
    else if (getReport >= 4 && getReport <= 6 ) {
      WebApi  = "https://app.track-asia.com/tracksgwebapi/api/utilizationinfo?AssetID=" + getAsset + "&StartTime=" + timestamp + "&EndTime=" + rxtime;
    }
   
    console.log(WebApi)
    Reports(WebApi, this.toastr, this.map, this.markers, icon_url, this.polylines, this.coordinates, this.spinner);

    function Reports(WebApi, toastr, map, markers, icon_url, polylines, coordinates, spinner) {

      if (getReport == 2) {
        //Position Report
        positionReport(WebApi, toastr, map, markers, icon_url, polylines, coordinates, spinner);
        $('#label_reports').text("Positions Report");
      }
      else if (getReport == 3) {
        //Speed Report
        speedReport(WebApi, toastr);
        $('#label_reports').text("Speed Report");
      }
      else if (getReport == 4) {
        //Mileage Report
        mileageReport(WebApi, toastr);
        $('#label_reports').text("Mileage Report");
      }
      else if (getReport == 5) {
        //Utilization Report
        utilizationReport(WebApi, toastr);
        $('#label_reports').text("Utilization Report (Type 1)");
      }
      else if (getReport == 6) {
        //Utilization2 Report
        utilization2Report(WebApi, toastr);
        $('#label_reports').text("Utilization Report (Type 2)");
      }
    }

    function positionReport(WebApi, toastr, map, markers, icon_url, polylines, coordinates, spinner) {
     
      clearMarkers(markers, polylines, coordinates);
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
          dataSrc: '',
          error: function (xhr, textStatus, errorThrown) {
            toastr.error('Error: Network Error - ' + errorThrown + '. Pls. try again!', 'Error', {
              timeOut: 3000,
              closeButton: true,
              enableHtml: true,
            });
          }
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
              return moment(data).add(8, 'hours').format('D-MMM-YYYY, hh:mm:ss A');
            },
            "targets": 7
          },
          {
            "render": function (data) {
              return '<span>' + data + ' km/h' + '</span>';
            },
            "targets": 8
          },
          {
            "render": function (data, row) {
              var labelColor;
              if (data == "MOVE") {
                labelColor = "success";
              } else if (data == "IDLE") {
                labelColor = "warning";
              } else if (data == "STOP") {
                labelColor = "danger";
              }
              var icon = row.id % 2 === 0 ? 'fa-star' : 'fa-user';
              return '<div class="badge badge-' + labelColor + '"> ' + data + '</div>';
            },
            "targets": 9
          },
          {
            "render": function (data, row) {
              var labelColor;
              var text;
              if (data == 1) {
                labelColor = "success";
                text = "On";
              } else if (data == 0) {
                labelColor = "dark";
                text = "Off";
              } else if (data == null || data == undefined || data == "" || data > 1) {


                if (row.Engine == "IDLE") {
                  labelColor = "success";
                  text = "On"
                } else if (row.Engine == "MOVE") {
                  labelColor = "success";
                  text = "On"
                }
                else if (row.Engine == "STOP") {
                  labelColor = "danger";
                  text = "Off"
                }
              }
              var icon = row.id % 2 === 0 ? 'fa-star' : 'fa-user';
              return '<div class="badge badge-' + labelColor + '"> ' + text + '</div>';
            },
            "targets": 10
          },
        ],
        "initComplete": function (data, type, row) {

          //console.log(JSON.stringify(type));
          if (type) {
  
            //************************Highchart*************************//
            if (getDuration() <= 24) {

              var titleText = "Positions Chart";
              var titleSpeed = "Speed";
              var titleLabel = "Vehicle Status";
              var titleStatus = "Status";
              var titleMove = "Move";
              var titleIdle = "Idle";
              var titleStop = "Stop";
              var titleIgnition = "Phone Power";
              var titleOn = "On";
              var titleOff = "Off";
              var titledownloadJPEG = "Download JPEG Image";
              var titledownloadPDF = "Download PDF Document";
              var titledownloadPNG = 'Download PNG Image';
              var titledownloadSVG = 'Download SVG Vector Image';
              var titleprintChart = 'Print Chart';

              var move = 0;
              var idle = 0;
              var stop = 0;
              var on = 0;
              var off = 0;
              var getStart = $('#dateFrom').val();
              var getEnd = $('#dateTo').val();

              var arrSpeed = [];
              var arrTimestamp = [];
              var arrDriver = [];
              var arrMileage = [];

              var timeFormat = "D/MM/YY hh:mm A";

              for (var i = 0, length = type.length; i < length; i++) {

                var speed = type[i].Speed;
                var assetTimestamp = type[i].Timestamp;
                var driver = type[i].Driver;
                var mileage = type[i].Mileage;
                var timestamp = moment(assetTimestamp).add(8, 'hours').format(timeFormat);

                arrSpeed.push(speed);
                arrTimestamp.push(timestamp);
                arrDriver.push(driver);
                arrMileage.push(mileage);
              }

              for (var k = 0; k < type.length; ++k) {
                if (type[k].Engine == "MOVE") {
                  move++;
                } else if (type[k].Engine == "IDLE") {
                  idle++;
                } else if (type[k].Engine == "STOP") {
                  stop++;
                }

              }

              for (var k = 0; k < type.length; ++k) {
                if (type[k].Ignition == 1) {
                  on++;
                } else if (type[k].Ignition == 0) {
                  off++;
                }

              }

              $('#chartPosition').highcharts({
                exporting: {
                  buttons: {
                    contextButton: {
                      menuItems: ['viewFullscreen', 'downloadPNG', 'downloadJPEG', 'downloadPDF']
                    }
                  }
                },
                lang: {
                  downloadJPEG: titledownloadJPEG,
                  downloadPDF: titledownloadPDF,
                  downloadPNG: titledownloadPNG,
                  downloadSVG: titledownloadSVG,
                  printChart: titleprintChart,
                },
                chart: {
                  // type: 'line',
                  zoomType: 'xy'
                },
                title: {
                  text: titleText
                },
                subtitle: {
                  text: getStart + " - " + getEnd
                },
                legend: {
                  shadow: true
                },
                scrollbar: {
                  enabled: true,
                  barBackgroundColor: 'gray',
                  barBorderRadius: 7,
                  barBorderWidth: 0,
                  buttonBackgroundColor: 'gray',
                  buttonBorderWidth: 0,
                  buttonArrowColor: 'yellow',
                  buttonBorderRadius: 7,
                  rifleColor: 'yellow',
                  trackBackgroundColor: 'white',
                  trackBorderWidth: 1,
                  trackBorderColor: 'silver',
                  trackBorderRadius: 7
                },
                xAxis: {
                  categories: arrTimestamp,
                  crosshair: true
                },
                yAxis: [{ // Primary yAxis
                  title: {
                    text: titleSpeed,
                    style: {
                      color: Highcharts.getOptions().colors[1]
                    }
                  },
                  labels: {
                    format: '{value} km/h',
                    style: {
                      color: Highcharts.getOptions().colors[1]
                    }
                  },
                  opposite: true

                }, { // Secondary yAxis
                  gridLineWidth: 0,
                  labels: {
                    format: '{value} KM',
                    style: {
                      color: Highcharts.getOptions().colors[1]
                    }
                  },
                  opposite: true
                }],
                labels: {
                  items: [{
                    html: titleLabel,
                    style: {
                      left: '40px',
                      top: '14px',

                    }
                  }]
                },
                series: [{
                  type: 'spline',
                  name: titleSpeed,
                  data: arrSpeed,
                  tooltip: {
                    valueSuffix: ' km/h'
                  }
                }, {
                  type: 'pie',
                  name: titleStatus,
                  data: [{
                    name: titleMove,
                    y: move,
                    color: '#7FB842'
                  }, {
                    name: titleIdle,
                    y: idle,
                    color: '#FEA01B'
                  }, {
                    name: titleStop,
                    y: stop,
                    color: '#E7472D'
                  }],
                  center: [40, 70],
                  size: 100,
                  showInLegend: false,
                  dataLabels: {
                    enabled: false
                  }
                }]

              });//end of chart
            }
            else {

              setTimeout(() => {
                toastr.warning('Chart disabled.', 'Warning', {
                  timeOut: 3000,
                  closeButton: true,
                  enableHtml: true,
                });
              }, 500);

            }

            //************************Playback*************************//
            if (getDuration() <= 4) {

              var car = "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z";

              // store all route coordinate as google maps latlng object
              for (var i = 0; i < type.length; i++) {

                coordinates.push(new google.maps.LatLng(type[i].PosY, type[i].PosX));

                var icon;

                //Background marker
                switch (type[i].Engine) {
                  case "MOVE":
                    icon = "move";
                    break;
                  case "IDLE":
                    icon = "idle";
                    break;
                  case "STOP":
                    icon = "stop";
                    break;
                }
                icon = icon_url + icon + ".png";

                var finaldata = type[i].Asset;
                var assetTimestamp = type[i].Timestamp;
                var timestamp = moment(assetTimestamp).add(8, 'hours').format("D-MMM-YYYY, hh:mm:ss A");

                var contentString = '<div style="width=200px; class="scrollFix"><p class="text-primary"><strong><font size="1.5">' + finaldata + '</font></strong></p>' +
                  '<div id="toggleInfobox" style="color:black;">' +
                  '<b>Date:&nbsp;</b>' + timestamp + '<br>' +
                  '</div>' +
                  '</div>';

                var marker = new google.maps.Marker({
                  icon: icon,
                  position: new google.maps.LatLng(type[i].PosY, type[i].PosX),
                  map: map,
                  content: contentString
                });

                markers.push(marker);
                setInfoBubble(marker);
              };

              var marker1 = new google.maps.Marker({
                position: new google.maps.LatLng(type[0].PosY, type[0].PosX),
                map: map,
                icon: 'assets/img/blue_MarkerA.png'
              });
              markers.push(marker1);

              var marker2 = new google.maps.Marker({
                position: new google.maps.LatLng(type[(type.length - 1)].PosY, type[(type.length - 1)].PosX),
                map: map,
                icon: 'assets/img/blue_MarkerB.png'
              });
              markers.push(marker2);

              // symbol settings
              var symbolOptions = {
                path: car,
                scale: 0.5,
                fillOpacity: 0.8,
                fillColor: 'yellow',
                offset: '100%',
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 16),
              };

              // polyline settings
              var polylineOptions = {
                path: [],
                asset: '',
                location: '',
                geodesic: false,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 3,
                icons: [{
                  icon: symbolOptions,
                  offset: '0%'
                }]
              };

              // if polyline doesnt exist, create
              if (!this.polyline) {
                polylineOptions.path = coordinates;
                this.polyline = new google.maps.Polyline(polylineOptions);
              }

              // plot the polyline
              this.polyline.setMap(map);

              // center map on polyline
              zoomToMap(this.polyline, map);

              polylines.push(this.polyline);

              var app = {
                map: map, // map object
                polyline: this.polyline, // polyline object
                route: type, //  API data
                coordinates: coordinates, // route coordinates 
                tempCount: 0, // previous count
                count: 0, // current count
                offset: 0, //  symbol current offset value
                isPlay: false, // play / pause flag
                speed: 200, // adjust play speed
                animateTimeout: false,
                startRoute: function () {

                  var pauseTimeout;

                  function plot() {

                    // count add
                    app.count++;

                    // update slider's current value
                    $('#forwind').val(app.count);

                    if (app.offset < 100) {

                      pauseTimeout = setTimeout(function (data) {

                        if (data) {
                          console.log(app.count + ', ' + app.offset);
                          if (app.isPlay) {

                            // continue playing
                            plot();

                            console.log(app.count + ': ' + data.PosY + ', ' + data.PosX);

                          } else {

                            // reset timeout
                            clearTimeout(pauseTimeout);

                            console.log('paused at ' + app.count);

                          }
                        } else {
                          toastr.error('Playback Error: Data not found', 'Error', {
                            timeOut: 3000,
                            closeButton: true,
                            enableHtml: true,
                          });
                        }


                      }, app.speed, app.route[app.count]);

                    }

                  }

                  if (this.isPlay) {

                    // continue playing
                    plot();

                    // start animating
                    this.animateSymbol();

                  }

                },
                animateSymbol: function () {

                  // reset timeout
                  clearTimeout(this.animateTimeout);

                  this.animateTimeout = setInterval(function () {

                    if ((app.count / app.route.length * 100) === 100) {

                      // reset timeout
                      clearTimeout(this.animateTimeout);

                    } else {

                      // move symbol relative to polyline
                      app.count = (app.count) % app.coordinates.length;

                      // track symbol
                      app.trackSymbol(app.count);

                    }

                  }, 20);
                },
                trackSymbol: function (count) {

                  // set symbol's current offset on the polyline
                  this.offset = (count / (this.coordinates.length - 1) * 100);
                  var icons = this.polyline.get('icons');
                  icons[0].offset = this.offset + '%';
                  this.polyline.set('icons', icons);
                  var position = google.maps.geometry.spherical.interpolate(this.coordinates[0], this.coordinates[this.coordinates.length - 1], (count / this.coordinates.length));
                  // always center the symbol on the map
                  //this.map.setZoom(15);
                  this.map.setCenter(position);

                }
              }

              // show control
              $('.control').show();
              $('.controlSlider').show();

              // update slider's max value
              $('#forwind').attr('max', (type.length - 1));

              $('#play').on('click', function (e) {

                e.preventDefault();

                // prevent multi click
                $(this).prop('disabled', 'disabled');
                $('#pause').removeAttr('disabled');

                // play, play where you left
                play();

              });

              $('#pause').on('click', function (e) {

                e.preventDefault();

                // prevent multi click
                $(this).prop('disabled', 'disabled');
                $('#play').removeAttr('disabled');

                // pause
                pause();

              });

              $("#forwind").on('input change', function (e) {

                // stop playing
                app.isPlay = false;

                // prevent multi click
                $('#play').removeAttr('disabled');
                $('#pause').prop('disabled', 'disabled');

                // update count
                app.count = $(this).val();

                // move symbol relative to polyline
                app.count = (app.count) % type.length;

                // track symbol
                //trackSymbol(count);

                // detect slider direction
                if (app.count > app.tempCount) {
                  console.log('forward at ' + app.count);
                } else if (app.count < app.tempCount) {
                  console.log('rewind at ' + app.count);
                }

                // save previous value
                app.tempCount = app.count;

              });

 
            }
            else {

              $('.control').hide();
              $('.controlSlider').hide();

              setTimeout(() => {
                toastr.warning('Playback disabled.', 'Warning', {
                  timeOut: 3000,
                  closeButton: true,
                  enableHtml: true,
                });
              }, 500);

            }


            spinner.hide();

            setTimeout(() => {
              toastr.success('Loaded Successful', 'Success', {
                timeOut: 3000,
                closeButton: true,
                enableHtml: true,
              });
            }, 50);

          }
          else {

            setTimeout(() => {
              toastr.error('Data not found.', 'Danger', {
                timeOut: 3000,
                closeButton: true,
                enableHtml: true,
              });
            }, 500);

          }


          function setInfoBubble(marker) {

            var infoWindow = new google.maps.InfoWindow({
              content: marker.content
            });

            marker.addListener('click', function () {
              infoWindow.open(marker.get('map'), marker);
            });

          }

          function zoomToMap(obj, map) {
            var bounds = new google.maps.LatLngBounds();
            var points = obj.getPath().getArray();

            for (var n = 0; n < points.length; n++) {
              bounds.extend(points[n]);
            }

            map.fitBounds(bounds);
          }

          function play() {

            // start playing
            app.isPlay = true;

            // start symbol routing
            app.startRoute();

            console.log('played at ' + app.count);

          }

          function pause() {

            // stop playing
            app.isPlay = false;

            //clearTimeout(app.animateTimeout);

          }


        },
        "footerCallback": function (row, data, start, end, display) {

        }
      });


    }

    function speedReport(WebApi, toastr) {
  
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
              return moment(data).add(8, 'hours').format('D-MMM-YYYY, hh:mm:ss A');
            },
            "targets": 7
          },
          {
            "render": function (data) {
              return '<span>' + data + ' km/h' + '</span>';
            },
            "targets": 8
          },
          {
            "render": function (data, row) {
              var labelColor;
              if (data == "MOVE") {
                labelColor = "success";
              } else if (data == "IDLE") {
                labelColor = "warning";
              } else if (data == "STOP") {
                labelColor = "danger";
              }
              var icon = row.id % 2 === 0 ? 'fa-star' : 'fa-user';
              return '<div class="badge badge-' + labelColor + '"> ' + data + '</div>';
            },
            "targets": 9
          },
          {
            "render": function (data, row) {
              var labelColor;
              var text;
              if (data == 1) {
                labelColor = "success";
                text = "On";
              } else if (data == 0) {
                labelColor = "dark";
                text = "Off";
              } else if (data == null || data == undefined || data == "" || data > 1) {


                if (row.Engine == "IDLE") {
                  labelColor = "success";
                  text = "On"
                } else if (row.Engine == "MOVE") {
                  labelColor = "success";
                  text = "On"
                }
                else if (row.Engine == "STOP") {
                  labelColor = "danger";
                  text = "Off"
                }
              }
              var icon = row.id % 2 === 0 ? 'fa-star' : 'fa-user';
              return '<div class="badge badge-' + labelColor + '"> ' + text + '</div>';
            },
            "targets": 10
          },
        ],
        "initComplete": function (data, type, row) {

          console.log(JSON.stringify(type));

          var titleText = "Speed Chart";
          var titleSpeed = "Speed";
          var titleLabel = "Engine Status & Ignition";
          var titleStatus = "Engine Status";
          var titleMove = "Move";
          var titleIdle = "Idle";
          var titleStop = "Stop";
          var titleIgnition = "Ignition";
          var titleOn = "On";
          var titleOff = "Off";
          var titledownloadJPEG = "Download JPEG Image";
          var titledownloadPDF = "Download PDF Document";
          var titledownloadPNG = 'Download PNG Image';
          var titledownloadSVG = 'Download SVG Vector Image';
          var titleprintChart = 'Print Chart';

          var move = 0;
          var idle = 0;
          var stop = 0;
          var on = 0;
          var off = 0;
          var getStart = $('#dateFrom').val();
          var getEnd = $('#dateTo').val();

          var arrSpeed = [];
          var arrTimestamp = [];
          var arrDriver = [];
          var arrMileage = [];

          var timeFormat = "D/MM/YY hh:mm A";

          for (var i = 0, length = type.length; i < length; i++) {

            var speed = type[i].Speed;
            var assetTimestamp = type[i].Timestamp;
            var driver = type[i].Driver;
            var mileage = type[i].Mileage;
            var timestamp = moment(assetTimestamp).add(8, 'hours').format(timeFormat);

            arrSpeed.push(speed);
            arrTimestamp.push(timestamp);
            arrDriver.push(driver);
            arrMileage.push(mileage);
          }

          for (var k = 0; k < type.length; ++k) {
            if (type[k].Engine == "MOVE") {
              move++;
            } else if (type[k].Engine == "IDLE") {
              idle++;
            } else if (type[k].Engine == "STOP") {
              stop++;
            }

          }

          for (var k = 0; k < type.length; ++k) {
            if (type[k].Ignition == 1) {
              on++;
            } else if (type[k].Ignition == 0) {
              off++;
            }

          }

          //************************Highchart*************************//

          // draw chart
          $('#chartSpeed').highcharts({
            exporting: {
              buttons: {
                contextButton: {
                  menuItems: ['viewFullscreen', 'downloadPNG', 'downloadJPEG', 'downloadPDF']
                }
              }
            },
            lang: {
              downloadJPEG: titledownloadJPEG,
              downloadPDF: titledownloadPDF,
              downloadPNG: titledownloadPNG,
              downloadSVG: titledownloadSVG,
              printChart: titleprintChart,
            },
            chart: {
              zoomType: 'x'
            },
            title: {
              text: titleText
            },
            subtitle: {
              text: getStart + " - " + getEnd
            },
            xAxis: {
              categories: arrTimestamp,
              crosshair: true
            },
            yAxis: [{ // Primary yAxis
              title: {
                text: titleSpeed,
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              labels: {
                format: '{value} km/h',
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              opposite: true

            }, { // Secondary yAxis
              gridLineWidth: 0,
              labels: {
                format: '{value} KM',
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              opposite: true
            }],
            series: [{
              type: 'spline',
              name: titleSpeed,
              data: arrSpeed,
              tooltip: {
                valueSuffix: ' km/h'
              }
            }]

          });//end of chart



          if (type.length > 0) {
            toastr.success('Loaded Successful', 'Success', {
              timeOut: 3000,
              closeButton: true,
              enableHtml: true,
            });
          } else {
            toastr.warning('No Data', 'Warning', {
              timeOut: 3000,
              closeButton: true,
              enableHtml: true,
            });
          }
        },
        "footerCallback": function (row, data, start, end, display) {


        }
      });
    }

    function mileageReport(WebApi, toastr) {

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
              timestamp = moment(data).add(8, 'hours').format('hh:mm:ss A');

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
              return moment(data).add(8, 'hours').format('D-MMM-YYYY, hh:mm:ss A');
            },
            "targets": 8
          }
        ],
        "initComplete": function (data, type, role) {
          console.log(JSON.stringify(type));

          var titleText = "Mileage Chart";
          var titleMileage = "Mileage";
          var titledownloadJPEG = "Download JPEG Image";
          var titledownloadPDF = "Download PDF Document";
          var titledownloadPNG = 'Download PNG Image';
          var titledownloadSVG = 'Download SVG Vector Image';
          var titleprintChart = 'Print Chart';

          var move = 0;
          var idle = 0;
          var stop = 0;
          var on = 0;
          var off = 0;
          var getStart = $('#dateFrom').val();
          var getEnd = $('#dateTo').val();

          var arrSpeed = [];
          var arrTimestamp = [];
          var arrDriver = [];
          var arrMileage = [];

          var timeFormat = "D/MM/YY";

          for (var i = 0, length = type.length; i < length; i++) {

            var assetTimestamp = type[i].Date;
            var mileage = Number(mileageFormatter(type[i].Mileage));
            var timestamp = moment(assetTimestamp).add(8, 'hours').format(timeFormat);

            arrTimestamp.push(timestamp);
            arrMileage.push(mileage);
          }

          function mileageFormatter(mileage) {
            var value = (mileage / 10).toFixed(2);
            return value;
          }

          //************************Highchart*************************//

          // draw chart
          $('#chartMileage').highcharts({
            exporting: {
              buttons: {
                contextButton: {
                  menuItems: ['viewFullscreen', 'downloadPNG', 'downloadJPEG', 'downloadPDF']
                }
              }
            },
            lang: {
              downloadJPEG: titledownloadJPEG,
              downloadPDF: titledownloadPDF,
              downloadPNG: titledownloadPNG,
              downloadSVG: titledownloadSVG,
              printChart: titleprintChart,
            },
            chart: {
              zoomType: 'x'
            },
            title: {
              text: titleText
            },
            subtitle: {
              text: getStart + " - " + getEnd
            },
            xAxis: {
              categories: arrTimestamp,
              crosshair: true
            },
            yAxis: [{ // Primary yAxis
              title: {
                text: titleMileage,
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              labels: {
                format: '{value} km',
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              opposite: true

            }, { // Secondary yAxis
              gridLineWidth: 0,
              labels: {
                format: '{value} KM',
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              opposite: true
            }],
            series: [{
              type: 'spline',
              name: titleMileage,
              data: arrMileage,
              tooltip: {
                valueSuffix: ' km',

              }
            }]

          });//end of chart


        },
        "footerCallback": function (row, data, start, end, display) {


        }
      });
    }

    function utilizationReport(WebApi, toastr) {

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
          {
            "render": function (num) {
              var value = (num / 10).toFixed(2)
              return value + ' km';
            },
            "targets": 8
          },
          {
            "render": function (data) {
              return moment(data).add(8, 'hours').format('D-MMM-YYYY, hh:mm:ss A');
            },
            "targets": 9
          }
        ],
        "initComplete": function (data, type, role) {
          console.log(JSON.stringify(type));

          var titleText = "Utilization (Type 1) Chart";
          var titleUtilization = "Utilization";
          var titleLabel = "Engine Status & Ignition";
          var titleStatus = "Engine Status";
          var titleMove = "Move";
          var titleIdle = "Idle";
          var titleStop = "Stop";
          var titleIgnition = "Ignition";
          var titleOn = "On";
          var titleOff = "Off";
          var titledownloadJPEG = "Download JPEG Image";
          var titledownloadPDF = "Download PDF Document";
          var titledownloadPNG = 'Download PNG Image';
          var titledownloadSVG = 'Download SVG Vector Image';
          var titleprintChart = 'Print Chart';

          var move = 0;
          var idle = 0;
          var stop = 0;
          var on = 0;
          var off = 0;
          var getStart = $('#dateFrom').val();
          var getEnd = $('#dateTo').val();

          var arrUtilization = [];
          var arrTimestamp = [];
          var arrDriver = [];
          var arrMileage = [];

          var timeFormat = "D/MM/YY";

          for (var i = 0, length = type.length; i < length; i++) {

            var assetTimestamp = type[i].Date;
            var mileage = Number(mileageFormatter(type[i].Mileage));
            var timestamp = moment(assetTimestamp).add(8, 'hours').format(timeFormat);

            arrTimestamp.push(timestamp);
            arrMileage.push(mileage);
          }

          for (var k = 0; k < type.length; ++k) {
            if (type[k].Engine == "MOVE") {
              move++;
            } else if (type[k].Engine == "IDLE") {
              idle++;
            } else if (type[k].Engine == "STOP") {
              stop++;
            }

          }

          for (var k = 0; k < type.length; ++k) {
            if (type[k].Ignition == 1) {
              on++;
            } else if (type[k].Ignition == 0) {
              off++;
            }

          }

          function mileageFormatter(mileage) {
            var value = (mileage / 10).toFixed(2);
            return value;
          }

          //************************Highchart*************************//

          // draw chart
          $('#chartUtilization').highcharts({
            exporting: {
              buttons: {
                contextButton: {
                  menuItems: ['viewFullscreen', 'downloadPNG', 'downloadJPEG', 'downloadPDF']
                }
              }
            },
            lang: {
              downloadJPEG: titledownloadJPEG,
              downloadPDF: titledownloadPDF,
              downloadPNG: titledownloadPNG,
              downloadSVG: titledownloadSVG,
              printChart: titleprintChart,
            },
            chart: {
              zoomType: 'x'
            },
            title: {
              text: titleText
            },
            subtitle: {
              text: getStart + " - " + getEnd
            },
            xAxis: {
              categories: arrTimestamp,
              crosshair: true
            },
            yAxis: [{ // Primary yAxis
              title: {
                text: titleUtilization,
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              labels: {
                format: '{value} km',
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              opposite: true

            }, { // Secondary yAxis
              gridLineWidth: 0,
              labels: {
                format: '{value} KM',
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              opposite: true
            }],
            series: [{
              type: 'spline',
              name: titleUtilization,
              data: arrMileage,
              tooltip: {
                valueSuffix: ' km',

              }
            }]

          });//end of chart

        }, 
        "footerCallback": function (row, data, start, end, display) {


        }
      });
    }

    function utilization2Report(WebApi, toastr) {

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
              return moment(data).add(8, 'hours').format('D-MMM-YYYY, hh:mm:ss A');
            },
            "targets": 10
          }
        ],
        "initComplete": function (data, type, role) {
          console.log(JSON.stringify(type));

          var titleText = "Utilization (Type 2) Chart";
          var titleUtilization = "Utilization ";
          var titleLabel = "Engine Status & Ignition";
          var titleStatus = "Engine Status";
          var titleMove = "Move";
          var titleIdle = "Idle";
          var titleStop = "Stop";
          var titleIgnition = "Ignition";
          var titleOn = "On";
          var titleOff = "Off";
          var titledownloadJPEG = "Download JPEG Image";
          var titledownloadPDF = "Download PDF Document";
          var titledownloadPNG = 'Download PNG Image';
          var titledownloadSVG = 'Download SVG Vector Image';
          var titleprintChart = 'Print Chart';

          var move = 0;
          var idle = 0;
          var stop = 0;
          var on = 0;
          var off = 0;
          var getStart = $('#dateFrom').val();
          var getEnd = $('#dateTo').val();

          var arrUtilization = [];
          var arrTimestamp = [];
          var arrDriver = [];
          var arrMileage = [];

          var timeFormat = "D/MM/YY";

          for (var i = 0, length = type.length; i < length; i++) {

            var assetTimestamp = type[i].Date;
            var mileage = Number(mileageFormatter(type[i].Mileage));
            var timestamp = moment(assetTimestamp).add(8, 'hours').format(timeFormat);

            arrTimestamp.push(timestamp);
            arrMileage.push(mileage);
          }

          for (var k = 0; k < type.length; ++k) {
            if (type[k].Engine == "MOVE") {
              move++;
            } else if (type[k].Engine == "IDLE") {
              idle++;
            } else if (type[k].Engine == "STOP") {
              stop++;
            }

          }

          for (var k = 0; k < type.length; ++k) {
            if (type[k].Ignition == 1) {
              on++;
            } else if (type[k].Ignition == 0) {
              off++;
            }

          }

          function mileageFormatter(mileage) {
            var value = (mileage / 10).toFixed(2);
            return value;
          }

          //************************Highchart*************************//

          // draw chart
          $('#chartUtilization2').highcharts({
            exporting: {
              buttons: {
                contextButton: {
                  menuItems: ['viewFullscreen', 'downloadPNG', 'downloadJPEG', 'downloadPDF']
                }
              }
            },
            lang: {
              downloadJPEG: titledownloadJPEG,
              downloadPDF: titledownloadPDF,
              downloadPNG: titledownloadPNG,
              downloadSVG: titledownloadSVG,
              printChart: titleprintChart,
            },
            chart: {
              zoomType: 'x'
            },
            title: {
              text: titleText
            },
            subtitle: {
              text: getStart + " - " + getEnd
            },
            xAxis: {
              categories: arrTimestamp,
              crosshair: true
            },
            yAxis: [{ // Primary yAxis
              title: {
                text: titleUtilization,
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              labels: {
                format: '{value} km',
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              opposite: true

            }, { // Secondary yAxis
              gridLineWidth: 0,
              labels: {
                format: '{value} KM',
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              opposite: true
            }],
            series: [{
              type: 'spline',
              name: titleUtilization,
              data: arrMileage,
              tooltip: {
                valueSuffix: ' km',

              }
            }]

          });//end of chart


        },
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

    function clearMarkers(markers, polylines, coordinates) {

      const awaitClearArray = async () => {
        const result = await clearArray(coordinates)
        if (markers) {
          for (var i = 0; i < markers.length; i++) {
            if (markers[i]) markers[i].setMap(null);
          }
        }

        markers = [];

        if (polylines) {
          for (var i = 0; i < polylines.length; i++) {
            if (polylines[i]) polylines[i].setMap(null);
          }
        }

        polylines = [];
      }

      awaitClearArray();

    }

    function clearArray(array) {
      while (array.length) {
        array.pop();
      }
    }

    function getDuration() {

      var dateFormat = "D-MMM-YYYY, hh:mm:ss";   
      var startDate = moment(getTimestamp, dateFormat);
      var endDate = moment(getRxTime, dateFormat);
      var result = endDate.diff(startDate, 'hours');

      return result;

    }

    function toTime(string) {
      var m = string.match(/(\d{2}):({\d2})/);
      return m && 60 * parseInt(m[1], 10) + parseInt(m[2], 10);
    }

    function fromTime(minutes) {
      var m = minutes % 60,
        h = (minutes - m) / 60;
      return ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
    }

  }



}
