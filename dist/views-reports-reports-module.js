(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-reports-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/reports.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/reports.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"reports-container\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    Reports\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n\r\n    <!-- Position Report -->\r\n    <div style=\"width: 100%;\">\r\n      <div class=\"table-responsive pt-3\">\r\n        <table datatable id=\"positionReport\" class=\"table table-striped table-hover dt-responsive display nowrap\" cellspacing=\"0\"></table>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Speed Report -->\r\n    <div style=\"width: 100%;\">\r\n      <div class=\"table-responsive pt-3\">\r\n        <table datatable id=\"speedReport\" class=\"table table-striped table-hover dt-responsive display nowrap\" cellspacing=\"0\"></table>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Mileage Report -->\r\n    <div style=\"width: 100%;\">\r\n      <div class=\"table-responsive pt-3\">\r\n        <table datatable id=\"mileageReport\" class=\"table table-striped table-hover dt-responsive display nowrap\" cellspacing=\"0\"></table>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Utilization Report -->\r\n    <div style=\"width: 100%;\">\r\n      <div class=\"table-responsive pt-3\">\r\n        <table datatable id=\"utilizationReport\" class=\"table table-striped table-hover dt-responsive display nowrap\" cellspacing=\"0\"></table>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Utilization2 Report -->\r\n    <div style=\"width: 100%;\">\r\n      <div class=\"table-responsive pt-3\">\r\n        <table datatable id=\"utilization2Report\" class=\"table table-striped table-hover dt-responsive display nowrap\" cellspacing=\"0\"></table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"card-footer\">\r\n\r\n  </div>\r\n</div>\n");

/***/ }),

/***/ "./src/app/views/reports/reports-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/reports/reports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.component */ "./src/app/views/reports/reports.component.ts");




var routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"],
        data: {
            title: 'Reports'
        }
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/reports/reports.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/reports/reports.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#positionReport {\r\n    color: #000;\r\n}\r\n\r\ntable.dataTable thead th {\r\n  color: #5c6873;\r\n  background-color: #e4e7ea;\r\n  border-color: #c8ced3;\r\n}\r\n\r\n/*.dataTables_scrollHeadInner table, .dataTables_scrollBody table {\r\n  width: 100% !important;\r\n}\r\n\r\ndiv.dt-buttons {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.buttons-colvis, .buttons-copy, .buttons-collection {\r\n  float: right !important;\r\n}*/\r\n\r\n.table {\r\n    table-layout: fixed;\r\n}\r\n\r\n#pageHeader {\r\n  background: Gainsboro;\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100px;\r\n  z-index: 11;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7Ozs7Ozs7Ozs7RUFXRTs7QUFDRjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sYUFBYTtFQUNiLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bvc2l0aW9uUmVwb3J0IHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgdGgge1xyXG4gIGNvbG9yOiAjNWM2ODczO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZWE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzhjZWQzO1xyXG59XHJcblxyXG4vKi5kYXRhVGFibGVzX3Njcm9sbEhlYWRJbm5lciB0YWJsZSwgLmRhdGFUYWJsZXNfc2Nyb2xsQm9keSB0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuZGl2LmR0LWJ1dHRvbnMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zLWNvbHZpcywgLmJ1dHRvbnMtY29weSwgLmJ1dHRvbnMtY29sbGVjdGlvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn0qL1xyXG4udGFibGUge1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuI3BhZ2VIZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IEdhaW5zYm9ybztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB6LWluZGV4OiAxMTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/views/reports/reports.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/reports/reports.component.ts ***!
  \****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/locale/en-gb */ "./node_modules/moment/locale/en-gb.js");
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_services_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/constants.service */ "./src/app/common/services/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _views_reports_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/reports/event-emitter.service */ "./src/app/views/reports/event-emitter.service.ts");








var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(_constant, location, router, eventEmitterService) {
        var _this = this;
        this._constant = _constant;
        this.router = router;
        this.eventEmitterService = eventEmitterService;
        this.router.events.subscribe(function (event) {
            if (location.path() != "") {
                _this.route = location.path();
            }
        });
        this.clickEventsubscription = this.eventEmitterService.getClickEvent().subscribe(function () {
            _this.generateEN();
        });
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var base = this._constant.baseAppUrl;
        var uri = this._constant.uri_track;
        var user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
        var reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
        var company_id = Number(sessionStorage.getItem('setSessionstorageValueCompanyID'));
        var api_assets = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + company_id;
        this.api_assets_individual = this._constant.assetApi;
        var role_id = this._constant.getSessionstorageValueRoleID;
        var getReport = $("#load-report").val();
        //Default
        $('#_reports').hide();
        $('#reports-container').hide();
        filter(role_id, getReport, this.route);
        function filter(role_id, getReport, _route) {
            if (role_id >= 3) {
                $('#_reseller').hide();
            }
            if (_route == '/reports')
                $('#_reports').show();
            else
                $('#_reports').hide();
            if (getReport == 3) {
                $('#_speed').hide();
            }
            else {
                $('#_speed').show();
            }
        }
    };
    ReportsComponent.prototype.generateEN = function () {
        $('#reports-container').show();
        var WebApi;
        var WebApiUtilization;
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
        var convertTmestamp = moment__WEBPACK_IMPORTED_MODULE_2__(getTimestamp, dateFormat);
        var convertRxtime = moment__WEBPACK_IMPORTED_MODULE_2__(getRxTime, dateFormat);
        var timestamp = moment__WEBPACK_IMPORTED_MODULE_2__(convertTmestamp).subtract('hours', 8).format(dateFormat);
        var rxtime = moment__WEBPACK_IMPORTED_MODULE_2__(convertRxtime).subtract('hours', 8).format(dateFormat);
        var duration = '<div style="color:white">Selected Date:&nbsp;' + moment__WEBPACK_IMPORTED_MODULE_2__["duration"](convertRxtime - convertTmestamp).humanize() + ' duration</div>';
        var validateTimestamp = moment__WEBPACK_IMPORTED_MODULE_2__(getTimestamp, dateFormat).isValid();
        var validateRxTime = moment__WEBPACK_IMPORTED_MODULE_2__(getRxTime, dateFormat).isValid();
        if (getReport == 2) {
            WebApi = "https://app.track-asia.com/tracksgwebapi/api/posinfo?Asset=" + getAsset + "&CompanyID=" + getCompany + "&Timestamp=" + timestamp + "&RxTime=" + rxtime;
        }
        else if (getReport == 3) {
            WebApi = "https://app.track-asia.com/tracksgwebapi/api/posinfo?Asset=" + getAsset + "&Speed=" + getSpeed + "&CompanyID=" + getCompany + "&Timestamp=" + timestamp + "&RxTime=" + rxtime;
        }
        else if (getReport >= 4 && getReport <= 6) {
            WebApi = "https://app.track-asia.com/tracksgwebapi/api/utilizationinfo?Asset=" + getAsset + "&StartTime=" + timestamp + "&EndTime=" + rxtime;
        }
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
                "language": {
                    "zeroRecords": "Nothing found - sorry",
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
                            return moment__WEBPACK_IMPORTED_MODULE_2__(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
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
                "language": {
                    "zeroRecords": "Nothing found - sorry",
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
                            return moment__WEBPACK_IMPORTED_MODULE_2__(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
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
                "language": {
                    "zeroRecords": "Nothing found - sorry",
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
                            timestamp = moment__WEBPACK_IMPORTED_MODULE_2__(data).format('D-MMM-YYYY');
                            return '<div>' + '<span><i class="fa fa-clock-o hidden-xs hidden-md"></i>&nbsp;' + timestamp + '</span>' + '</div>';
                        },
                        "targets": 1
                    },
                    {
                        "render": function (data) {
                            timestamp = moment__WEBPACK_IMPORTED_MODULE_2__(data).add('hours', 8).format('hh:mm:ss A');
                            return '<div>' + '<span><i class="fa fa-clock-o hidden-xs hidden-md"></i>&nbsp;' + timestamp + '</span>' + '</div>';
                        },
                        "targets": [5, 6]
                    },
                    {
                        "render": function (num, type, full) {
                            //let strVal: number = num / 10;
                            // return strVal + ' km';
                            // return +(Math.round((strVal) + "e+2") + "e-2") + ' km';
                            var value = (num / 10).toFixed(2);
                            return value + ' km';
                        },
                        "targets": 7
                    },
                    {
                        "render": function (data) {
                            return moment__WEBPACK_IMPORTED_MODULE_2__(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
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
                "language": {
                    "zeroRecords": "Nothing found - sorry",
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
                            timestamp = moment__WEBPACK_IMPORTED_MODULE_2__(data).format('D-MMM-YYYY');
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
                            var value = (num / 10).toFixed(2);
                            return value + ' km';
                        },
                        "targets": 8
                    },
                    {
                        "render": function (data) {
                            return moment__WEBPACK_IMPORTED_MODULE_2__(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
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
                "language": {
                    "zeroRecords": "Nothing found - sorry",
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
                            timestamp = moment__WEBPACK_IMPORTED_MODULE_2__(data).format('D-MMM-YYYY');
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
                            var value = (num / 10).toFixed(2);
                            return value + ' km';
                        },
                        "targets": 9
                    },
                    {
                        "render": function (data) {
                            return moment__WEBPACK_IMPORTED_MODULE_2__(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
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
            }
            //check for the speedReport table
            else if ($.fn.DataTable.isDataTable('#speedReport') == true) {
                $("#speedReport").DataTable().clear().draw();
                $("#speedReport").DataTable().destroy();
                $("#speedReport thead").html('');
            }
            //check for the mileageReport table
            else if ($.fn.DataTable.isDataTable('#mileageReport') == true) {
                $("#mileageReport").DataTable().clear().draw();
                $("#mileageReport").DataTable().destroy();
                $("#mileageReport thead").html('');
            }
            //check for the utilizationReport table
            else if ($.fn.DataTable.isDataTable('#utilizationReport') == true) {
                $("#utilizationReport").DataTable().clear().draw();
                $("#utilizationReport").DataTable().destroy();
                $("#utilizationReport thead").html('');
            }
            //check for the utilization2Report table
            else if ($.fn.DataTable.isDataTable('#utilization2Report') == true) {
                $("#utilization2Report").DataTable().clear().draw();
                $("#utilization2Report").DataTable().destroy();
                $("#utilization2Report thead").html('');
            }
        }
    };
    ReportsComponent.ctorParameters = function () { return [
        { type: _common_services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _views_reports_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["EventEmitterService"] }
    ]; };
    ReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/reports.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reports.component.css */ "./src/app/views/reports/reports.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _views_reports_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["EventEmitterService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/reports.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.component */ "./src/app/views/reports/reports.component.ts");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/views/reports/reports-routing.module.ts");





var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReportsRoutingModule"]
            ],
            declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-reports-reports-module.js.map