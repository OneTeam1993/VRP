(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"card-body pb-3 bg-success\">\r\n          <div class=\"btn-group float-right\">\r\n            <i class=\"fa fa-car fa-2x\"></i>\r\n          </div>\r\n          <div class=\"text-value\" id=\"active\"></div>\r\n          <div>Active vehicles</div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-uppercase text-muted small\">Number of active vehicles</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"card-body pb-3 bg-danger\">\r\n          <div class=\"btn-group float-right\">\r\n            <i class=\"fa fa-car fa-2x\"></i>\r\n          </div>\r\n          <div class=\"text-value\" id=\"inactive\"></div>\r\n          <div>In-active vehicles</div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-uppercase text-muted small\">Number of in-active vehicles</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"card-body pb-3 bg-dark\">\r\n          <div class=\"btn-group float-right\">\r\n            <i class=\"fa fa-car fa-2x\"></i>\r\n          </div>\r\n          <div class=\"text-value\" id=\"repair\"></div>\r\n          <div>Vehicles with issues</div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-uppercase text-muted small\">Number of vehicles with issues</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"card-body pb-3 bg-info\">\r\n          <div class=\"btn-group float-right\">\r\n            <i class=\"fa fa-car fa-2x\"></i>\r\n          </div>\r\n          <div class=\"text-value\" id=\"total-assets\"></div>\r\n          <div>Total vehicles</div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-uppercase text-muted small\">Total number of vehicles</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Vehicle Activities<span class=\"float-right\" id=\"coordinates-panel\"></span>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div style=\"height:600px;\" id=\"heat-map\"></div>\r\n            </div><!--/.col-->\r\n          </div><!--/.row-->\r\n          <br>\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <table class=\"table table-responsive-sm table-hover table-outline mb-0\" width=\"100%\">\r\n                <thead class=\"thead-dark\">\r\n                  <tr>\r\n                    <th class=\"text-center\"><i class=\"fa fa-car\"></i></th>\r\n                    <th>Name</th>\r\n                    <th>Device #</th>\r\n                    <th>License Plate Number</th>\r\n                    <th>Make</th>\r\n                    <th>Model</th>\r\n                    <th>Category</th>\r\n                    <th>Transmission</th>\r\n                    <th>Fuel Type</th>\r\n                    <th>Installation Date</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody id=\"assetDetails\">\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\n\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n\r\n</div>\n");

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*------------------------------------ Asset Details Table -----------------------------------------*/\n#assetDetails {\n  color: #000 !important;\n}\n#assetDetails i.fa {\n    width: 20px;\n    height: 20px;\n    padding-top: 5px;\n    text-align: center;\n    border-radius: 2px;\n    color: #fff !important;\n  }\n#assetDetails .vehicle-img {\n    width: 60px !important;\n  }\n.table {\n  table-layout: fixed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFHQUFxRztBQUNyRztFQUNFLHNCQUFzQjtBQUN4QjtBQUVFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUVGO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQXNzZXQgRGV0YWlscyBUYWJsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4jYXNzZXREZXRhaWxzIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuICAjYXNzZXREZXRhaWxzIGkuZmEge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuXG4gICNhc3NldERldGFpbHMgLnZlaGljbGUtaW1nIHtcbiAgICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICB9XG5cbi50YWJsZSB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/locale/en-gb */ "./node_modules/moment/locale/en-gb.js");
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_services_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/constants.service */ "./src/app/common/services/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_constant, location, router) {
        var _this = this;
        this._constant = _constant;
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (location.path() != "") {
                _this.route = location.path();
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var base = this._constant.baseAppUrl;
        var uri = this._constant.uri_track;
        var user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
        var reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
        var company_id = Number(sessionStorage.getItem('setSessionstorageValueCompanyID'));
        var api_assets = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + company_id;
        this.api_assets_individual = this._constant.assetApi;
        var role_id = this._constant.getSessionstorageValueRoleID;
        //Filter Dropdown
        $('#_reports').hide();
        if (role_id >= 3) {
            $('#_reseller').hide();
        }
        if (this.route == '/reports')
            $('#_reports').show();
        else
            $('#_reports').hide();
        var _map, heatmap;
        var locations = new Array();
        //================================INIT==================================//
        var latlng = new google.maps.LatLng(1.3521, 103.8198);
        var heatmapOptions = {
            zoom: 13,
            center: latlng,
            panControl: false,
            zoomControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            streetViewControl: false,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            fullscreenControl: true,
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
            },
            scaleControl: false,
            overviewMapControl: false
        };
        _map = new google.maps.Map(document.getElementById("heat-map"), heatmapOptions);
        setHeatMarkers(updateHeatAssets, api_assets);
        google.maps.event.addListener(_map, 'mousemove', function (event) {
            document.getElementById('coordinates-panel').innerHTML =
                event.latLng.lat() + ', ' + event.latLng.lng();
        });
        //=====================================Heat Map=============================================//
        function setHeatMarkers(callback, api_assets) {
            axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(api_assets)
                .then(function (response) {
                //console.log(response);
                callback(response.data);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        function updateHeatAssets(data) {
            var active = 0;
            var inactive = 0;
            var repair = 0;
            var outputDiv = document.getElementById('assetDetails');
            for (var i = 0, length = data.length; i < length; i++) {
                if (data[i]) {
                    if (data[i].LastPos == null || data[i].LastPos.Engine == null || data[i].LastPos.PosID == 0 || data[i].LastPos === "") {
                        console.log('Data is Null');
                        continue;
                    }
                    else {
                        var latLng = new google.maps.LatLng(data[i].LastPos.PosY, data[i].LastPos.PosX);
                        var id = data[i].AssetID;
                        var tag = data[i].Tag;
                        var category = data[i].Category;
                        var vechs = data[i].Name;
                        var make = data[i].Make;
                        var model = data[i].Model;
                        var plate_no = data[i].LicensePlate;
                        var transmission = data[i].Transmission;
                        var fuel_type = data[i].FuelType;
                        var install_date = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](data[i].InstallDate).local().format("D-MMM-YYYY, hh:mm:ss A");
                        var address = data[i].LastPos.Location;
                        var assetTimestamp = data[i].LastPos.Timestamp;
                        var timestamp1 = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](assetTimestamp).local().format("DD MMM YYYY");
                        var d = new Date();
                        var timestamp2 = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](d).local().format("DD MMM YYYY");
                        timestamp2 = Date.parse(timestamp2);
                        timestamp1 = Date.parse(timestamp1);
                        var timestamp = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](assetTimestamp).local().format("D-MMM-YYYY, hh:mm:ss A");
                        var elapsedTimestamp = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](assetTimestamp).local().format();
                        var el = get_el(elapsedTimestamp);
                        var vehicleImg = void 0;
                        // Category image
                        switch (category) {
                            case "Car":
                                vehicleImg = "../assets/img/car.jpg";
                                break;
                            case "Truck":
                                vehicleImg = "../assets/img/truck.jpg";
                                break;
                            case "Van":
                                vehicleImg = "../assets/img/van.jpg";
                                break;
                            case "Bus":
                                vehicleImg = "../assets/img/bus.jpg";
                                break;
                            case "Motorcycle":
                                vehicleImg = "../assets/img/motorcycle.jpg";
                                break;
                            case "Recovery Veh":
                                vehicleImg = "../assets/img/truck.jpg";
                                break;
                            case "Lorry":
                                vehicleImg = "../assets/img/truck.jpg";
                                break;
                            case "10 Footer Lorry":
                                vehicleImg = "../assets/img/truck.jpg";
                                break;
                            case "14 Footer Lorry":
                                vehicleImg = "../assets/img/truck.jpg";
                                break;
                            case "Ambulance":
                                vehicleImg = "../assets/img/ambulance.jpg";
                                break;
                        }
                        if (el == "Active")
                            active++;
                        else if (el == "Inactive")
                            inactive++;
                        else if (el == "Repair")
                            repair++;
                        if (outputDiv) {
                            outputDiv.innerHTML += "<tr>"
                                + "<td>"
                                + "<img class='vehicle-img' src='" + vehicleImg + "'/>"
                                + "</td>"
                                + "<td>"
                                //+ "<strong><a href='javascript:google.maps.event.trigger(openmarker[" + k + "],\"click\");' style='color:#458FD2;'>" + markers[k].title + '</a></strong><br>' + markers[k].address + "<br>"
                                + "<strong><a style='color:#458FD2;'>" + vechs + '</a></strong>'
                                + "</td>"
                                + "<td>"
                                + tag
                                + "</td>"
                                + "<td>"
                                + plate_no
                                + "</td>"
                                + "<td>"
                                + make
                                + "</td>"
                                + "<td>"
                                + model
                                + "</td>"
                                + "<td>"
                                + category
                                + "</td>"
                                + "<td>"
                                + transmission
                                + "</td>"
                                + "<td>"
                                + fuel_type
                                + "</td>"
                                + "<td>"
                                + install_date
                                + "</td>"
                                + "</tr>"
                                + "<hr style='border: 1px solid #FFFFFF !important'>";
                            document.getElementById('total-assets').innerHTML = data.length;
                            document.getElementById('active').innerHTML = active.toString();
                            document.getElementById('inactive').innerHTML = inactive.toString();
                            document.getElementById('repair').innerHTML = repair.toString();
                        }
                        locations.push(latLng);
                    } //end of else continue     
                }
            } //end of for
            if (locations.length == 0) {
                if (data.LastPos == null || data.LastPos.Engine == null || data.LastPos.PosID == 0 || data.LastPos === "") {
                    console.log('Data is Null');
                }
                else {
                    var latLng = new google.maps.LatLng(data.LastPos.PosY, data.LastPos.PosX);
                    locations.push(latLng);
                } //end of else continue     
            }
            heatmap = new google.maps.visualization.HeatmapLayer({
                data: locations,
                map: _map,
                dissipating: false,
            });
            heatmap.setMap(_map);
            //heatmap.set('radius', heatmap.get('radius') ? null : 20);
        }
        function get_el(timestamp) {
            var now = moment__WEBPACK_IMPORTED_MODULE_2__().format();
            var diff = moment__WEBPACK_IMPORTED_MODULE_2__["duration"](moment__WEBPACK_IMPORTED_MODULE_2__(now).diff(moment__WEBPACK_IMPORTED_MODULE_2__(timestamp)));
            var days = parseInt(diff.asDays()); //84
            var hours = parseInt(diff.asHours()); //2039 hours, but it gives total hours in given miliseconds which is not expacted.
            hours = hours - days * 24; // 23 hours
            var minutes = parseInt(diff.asMinutes()); //122360 minutes,but it gives total minutes in given miliseconds which is not expacted.
            minutes = minutes - (days * 24 * 60 + hours * 60); //20 minutes.
            var ms = "";
            if (days == 0 && hours == 0 && minutes == 0) {
                ms = "Active";
            }
            else if (days == 0) {
                ms = "Inactive";
            }
            else {
                ms = "Repair";
            }
            return ms;
        }
        function ClearHeatmapFilter() {
            locations = [];
            heatmap.setMap(null);
            $("#assetDetails").empty();
        }
        //=======================================On Change==================================================//
        $('.SelectResellerFilter').on('change', function () {
            ClearHeatmapFilter();
        });
        $('.SelectCompanyFilter').change({ route: this.route }, function (event) {
            ClearHeatmapFilter();
            var api_assets_filter = getAssetsHeatFilter(role_id, base, uri, user_id, reseller_id);
            setHeatMarkers(updateHeatAssets, api_assets_filter);
        });
        $('.SelectAssetFilter').change({ api: this.api_assets_individual }, function (event) {
            var selected = $(this).find("option:selected").val();
            var api_assets_filter_new = event.data.api + selected;
            ClearHeatmapFilter();
            setHeatMarkers(updateHeatAssets, api_assets_filter_new);
        }); // end of on change
        //====================================GET API WITH PARAM=================================//
        function getAssetsHeatFilter(role_id, base, uri, user_id, reseller_id) {
            var url;
            if (role_id == 1) {
                url = base + uri + 'assetinfo' + '?UserID=' + '&ResellerID=' + $('#load-reseller').val() + '&CompanyID=' + $('#load-company').val();
            }
            else if (role_id == 2) {
                url = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + $('#load-company').val();
            }
            else if (role_id >= 3) {
                url = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + $('#load-company').val();
            }
            return url;
        }
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _common_services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.css */ "./src/app/views/dashboard/dashboard.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/dashboard/dashboard-routing.module.ts");








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map