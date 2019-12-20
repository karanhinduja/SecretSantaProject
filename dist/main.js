(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var AppComponent = /** @class */ (function () {
    // private _router: Subscription;
    // @ViewChild(NavbarComponent) navbar: NavbarComponent;
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        // var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        // this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        //     if (window.outerWidth > 991) {
        //         window.document.children[0].scrollTop = 0;
        //     }else{
        //         window.document.activeElement.scrollTop = 0;
        //     }
        //     this.navbar.sidebarClose();
        //     this.renderer.listenGlobal('window', 'scroll', (event) => {
        //         const number = window.scrollY;
        //         var _location = this.location.path();
        //         _location = _location.split('/')[2];
        //         if (number > 150 || window.pageYOffset > 150) {
        //             navbar.classList.remove('navbar-transparent');
        //         } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
        //             // remove logic
        //             navbar.classList.add('navbar-transparent');
        //         }
        //     });
        // });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/registration/registration.component */ "./src/app/pages/registration/registration.component.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");

 // this is needed!







// import { NavbarComponent } from './shared/navbar/navbar.component';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                // NavbarComponent,
                _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_13__["PagesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/registration/registration.component */ "./src/app/pages/registration/registration.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");









var routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'Registration', component: _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"] },
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_7__["PagesComponent"],
        children: [
            {
                path: 'Dashboard',
                component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
            }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-basic\">\n    <div class=\"container\">\n      <h3 class=\"title\">Basic Elements</h3>\n      <div id=\"buttons\">\n          <h4>Buttons</h4>\n          <p class=\"category\">Pick your style</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn btn-primary\" type=\"button\">Default</button>\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">Round</button>\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> With Icon\n                  </button>\n                  <button class=\"btn btn-primary btn-icon btn-round\" type=\"button\">\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                  </button>\n                  <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">Simple</button>\n              </div>\n          </div>\n          <p class=\"category\">Pick your size</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn btn-primary btn-sm\">Small</button>\n                  <button class=\"btn btn-primary\">Regular</button>\n                  <button class=\"btn btn-primary btn-lg\">Large</button>\n              </div>\n          </div>\n          <p class=\"category\">Pick your color</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn\">Default</button>\n                  <button class=\"btn btn-primary\">Primary</button>\n                  <button class=\"btn btn-info\">Info</button>\n                  <button class=\"btn btn-success\">Success</button>\n                  <button class=\"btn btn-warning\">Warning</button>\n                  <button class=\"btn btn-danger\">Danger</button>\n                  <button class=\"btn btn-neutral\">Neutral</button>\n              </div>\n          </div>\n          <h4>Links</h4>\n          <div class=\"row\">\n              <div class=\"col-md-8\">\n                  <button class=\"btn btn-link\">Default</button>\n                  <button class=\"btn btn-link btn-primary \">Primary</button>\n                  <button class=\"btn btn-link btn-info\">Info</button>\n                  <button class=\"btn btn-link btn-success\">Success</button>\n                  <button class=\"btn btn-link btn-warning\">Warning</button>\n                  <button class=\"btn btn-link btn-danger\">Danger</button>\n              </div>\n          </div>\n      </div>\n      <div id=\"inputs\">\n          <h4>Inputs</h4>\n          <p class=\"category\">Form Controls</p>\n          <div class=\"row\">\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group\">\n                      <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-success\">\n                      <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-danger\">\n                      <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                          <i class=\"fa fa-user-circle\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">\n                            <i class=\"now-ui-icons users_single-02\"></i>\n                        </span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"row\" id=\"checkRadios\">\n        <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Checkboxes</p>\n            <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\">\n                    <span class=\"form-check-sign\"></span>\n                    Unchecked\n                </label>\n            </div>\n            <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" checked>\n                    <span class=\"form-check-sign\"></span>\n                    Checked\n                </label>\n            </div>\n            <div class=\"form-check disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled Unchecked\n                </label>\n            </div>\n            <div class=\"form-check disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled Checked\n                </label>\n            </div>\n        </div>\n        <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Radios</p>\n            <div class=\"form-check form-check-radio\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n                    <span class=\"form-check-sign\"></span>\n                    Radio is off\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked>\n                    <span class=\"form-check-sign\"></span>\n                    Radio is on\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled radio is off\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled checked>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled radio is on\n                </label>\n            </div>\n        </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Toggle Buttons</p>\n              <bSwitch\n                  [(ngModel)]=\"state\">\n              </bSwitch>\n              <bSwitch> Toggle is off\n              </bSwitch>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Sliders</p>\n              <nouislider class=\"slider\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\n              <br>\n              <nouislider class=\"slider slider-primary\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\n          </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzaWNlbGVtZW50cy9iYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state = true;
        this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    BasicelementsComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Multiple Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Single Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    BasicelementsComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basicelements',
            template: __webpack_require__(/*! ./basicelements.component.html */ "./src/app/components/basicelements/basicelements.component.html"),
            styles: [__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('assets/img/header.jpg');\">\n\n    </div>\n      <div class=\"container\">\n          <div class=\"content-center brand\">\n              <img class=\"n-logo\" src=\"assets/img/now-logo.png\" alt=\"\">\n              <h1 class=\"h1-seo\">Now UI Kit.</h1>\n              <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>\n          </div>\n          <h6 class=\"category category-absolute\">Designed by\n              <a href=\"https://invisionapp.com/\" target=\"_blank\">\n                  <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\n              </a>. Coded by\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">\n                  <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\" />\n              </a>.</h6>\n      </div>\n  </div>\n\n  <div class=\"main\">\n    <div class=\"section section-images\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"hero-images-container\">\n                        <img src=\"assets/img/hero-image-1.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-1\">\n                        <img src=\"assets/img/hero-image-2.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-2\">\n                        <img src=\"assets/img/hero-image-3.png\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n      <app-basicelements></app-basicelements>\n      <app-navigation></app-navigation>\n      <div class=\"section section-tabs\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Icons on Card</p>\n                      <!-- Nav tabs -->\n\n                      <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons shopping_cart-simple\"></i> Profile\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                          <i class=\"now-ui-icons shopping_shop\"></i> Messages\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Background on Card</p>\n                      <!-- Tabs with Background on Card -->\n                      <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\" >\n                                    <ngb-tab title=\"Home\">\n                                      <ng-template ngbTabContent>\n                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Profile\">\n                                      <ng-template ngbTabContent>\n                                          <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Messages\">\n                                      <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Settings\">\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                      <!-- End Tabs on plain Card -->\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-pagination\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4>Progress Bars</h4>\n                      <div class=\"progress-container\">\n                        <span class=\"progress-badge\">Default</span>\n\n                        <ngb-progressbar [value]=\"25\"><span class=\"progress-value\">25%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-primary\">\n                          <span class=\"progress-badge\">Primary</span>\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <br />\n                      <h4>Navigation Pills</h4>\n                      <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space nav-pills-just-icons\">\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"far fa-gem\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"fa fa-thermometer-full\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"fa fa-suitcase\"></i>\n                              </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab [disabled]=\"true\">\n                              <ng-template ngbTabTitle>\n                                <i class=\"fa fa-exclamation\"></i>\n                              </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                      </ngb-tabset>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Pagination</h4>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"pagination-primary\"></ngb-pagination>\n                      <br/>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page2\" aria-label=\"Default pagination\"></ngb-pagination>\n                      <br>\n                      <h4>Labels</h4>\n                      <span class=\"badge badge-default\">Default</span>\n                      <span class=\"badge badge-primary\">Primary</span>\n                      <span class=\"badge badge-success\">Success</span>\n                      <span class=\"badge badge-info\">Info</span>\n                      <span class=\"badge badge-warning\">Warning</span>\n                      <span class=\"badge badge-danger\">Danger</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section\" id=\"notifications\">\n          <div class=\"container\">\n            <h4>Notifications</h4>\n          </div>\n          <app-notification></app-notification>\n      </div>\n      <app-typography></app-typography>\n      <div class=\"section section-javascript\" id=\"javascriptComponents\">\n          <div class=\"container\">\n              <h3 class=\"title\">Angular Native Components</h3>\n              <div class=\"row\" id=\"modals\">\n                  <div class=\"col-md-6\">\n                      <h4>Modal</h4>\n                      <ngbd-modal-component></ngbd-modal-component>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Popovers</h4>\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"right\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\" popoverClass=\"popover-primary\">\n                          On right\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"top\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                          On top\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"left\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                          On left\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"bottom\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                          On bottom\n                      </button>\n                  </div>\n                  <br />\n                  <br />\n                  <div class=\"col-md-6\">\n                      <h4>Datetimepicker</h4>\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"datepicker-container\">\n                                  <div class=\"form-group\">\n                                    <input class=\"form-control datetimepicker\" placeholder=\"06/07/2017\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" data-color=\"orange\">\n                \t\t\t            </div>\n                              </div>\n                          </div>\n                      </div>\n                      <!--                 end collapse -->\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Tooltips</h4>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                         On right\n                     </button>\n                     <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                       On left\n                     </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                         On top\n                      </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                          On bottom\n                      </button>\n                      <div class=\"clearfix\"></div>\n                      <br>\n                      <br>\n                  </div>\n              <!-- </div>\n            </div> -->\n          </div>\n\n          <div class=\"section\" id=\"carousel\">\n              <div class=\"container\">\n                  <div class=\"title\">\n                      <h4>Carousel</h4>\n                  </div>\n                  <div class=\"row justify-content-center\">\n                      <div class=\"col-8\">\n                        <ngb-carousel>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg1.jpg\" alt=\"First slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Nature, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg3.jpg\" alt=\"Second slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Somewhere Beyond, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg4.jpg\" alt=\"Third slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Yellowstone National Park, United States</h5>\n                              </div>\n                            </ng-template>\n                        </ngb-carousel>\n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"section section-nucleo-icons\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-12\">\n                      <h2 class=\"title\">Nucleo Icons</h2>\n                      <h5 class=\"description\">\n                          Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.\n                      </h5>\n                      <!-- <div class=\"nucleo-container\">\n        <img src=\"assets/img/nucleo.svg\" alt=\"\">\n      </div> -->\n                      <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg\">View Demo Icons</a>\n                      <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-primary btn-simple btn-round btn-lg\" target=\"_blank\">View All Icons</a>\n                  </div>\n                  <div class=\"col-lg-6 col-md-12\">\n                      <div class=\"icons-container\">\n                          <i class=\"now-ui-icons ui-1_send\"></i>\n                          <i class=\"now-ui-icons ui-2_like\"></i>\n                          <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                          <i class=\"now-ui-icons text_bold\"></i>\n                          <i class=\"now-ui-icons tech_headphones\"></i>\n                          <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                          <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                          <i class=\"now-ui-icons objects_spaceship\"></i>\n                          <i class=\"now-ui-icons media-2_note-03\"></i>\n                          <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                          <i class=\"now-ui-icons design_palette\"></i>\n                          <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                          <i class=\"now-ui-icons location_pin\"></i>\n                          <i class=\"now-ui-icons objects_key-25\"></i>\n                          <i class=\"now-ui-icons travel_istanbul\"></i>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"section\">\n          <div class=\"container text-center\">\n              <div class=\"row justify-content-md-center\">\n                  <div class=\"col-md-12 col-lg-8\">\n                      <h2 class=\"title\">Completed with examples</h2>\n                      <h5 class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 ui kit.</h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-signup\" style=\"background-image: url('assets/img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;\">\n          <div class=\"container login-page\">\n            <div class=\"row\">\n              <div class=\"col-md-4 content-center ml-auto mr-auto\">\n                  <div class=\"card card-login card-plain\">\n                      <form class=\"form\" method=\"\" action=\"\">\n                          <div class=\"header header-primary text-center\">\n                              <div class=\"logo-container\">\n                                  <img src=\"assets/img/now-logo.png\" alt=\"\">\n                              </div>\n                          </div>\n                          <div class=\"content\">\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\n                              </div>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                            </div>\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                              </div>\n                                <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\n                            </div>\n                          </div>\n                          <div class=\"footer text-center\">\n                              <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\n                          </div>\n                          <div class=\"text-center\">\n                              <h6>\n                                  <a href=\"#pablo\" class=\"link\">Create Account</a>\n                              </h6>\n                          </div>\n                          <div class=\"text-center\">\n                              <h6>\n                                  <a href=\"#pablo\" class=\"link\">Need Help?</a>\n                              </h6>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n            </div>\n              <div class=\"col text-center\">\n                  <a [routerLink]=\"['/examples/login']\" class=\"btn btn-simple btn-round btn-white btn-lg\">View Login Page</a>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-examples\" data-background-color=\"black\">\n          <div class=\"space-50\"></div>\n          <div class=\"container text-center\">\n              <div class=\"row\">\n                  <div class=\"col\">\n                      <a [routerLink]=\"['/examples/landing']\">\n                          <img src=\"assets/img/landing.jpg\" alt=\"Image\" class=\"img-raised\">\n                      </a>\n                      <a [routerLink]=\"['/examples/landing']\" class=\"btn btn-simple btn-primary btn-round\">View Landing Page</a>\n                  </div>\n                  <div class=\"col\">\n                      <a [routerLink]=\"['/examples/profile']\">\n                          <img src=\"assets/img/profile.jpg\" alt=\"Image\" class=\"img-raised\">\n                      </a>\n                      <a [routerLink]=\"['/examples/profile']\" class=\"btn btn-simple btn-primary btn-round\">View Profile Page</a>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-download\" id=\"#download-section\" data-background-color=\"black\">\n          <div class=\"container\">\n              <div class=\"row justify-content-md-center\">\n                  <div class=\"text-center col-md-12 col-lg-8\">\n                      <h3 class=\"title\">Do you love this Bootstrap 4 UI Kit?</h3>\n                      <h5 class=\"description\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!</h5>\n                  </div>\n                  <div class=\"text-center col-md-12 col-lg-8\">\n                      <a href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" class=\"btn btn-primary btn-lg btn-round\" role=\"button\">\n                          Download Angular\n                      </a>\n                      <a href=\"https://www.invisionapp.com/now\" target=\"_blank\" class=\"btn btn-primary btn-lg btn-simple btn-round\" role=\"button\">\n                          Download PSD/Sketch\n                      </a>\n                  </div>\n              </div>\n              <br>\n              <br>\n              <br>\n              <div class=\"row text-center mt-5\">\n                  <div class=\"col-md-8 ml-auto mr-auto\">\n                      <h2>Want more?</h2>\n                      <h5 class=\"description\">We've just launched\n                          <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" target=\"_blank\">Now UI Kit PRO Angular</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 UI Kit.</h5>\n                  </div>\n                  <div class=\"col-md-12\">\n                      <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" class=\"btn btn-neutral btn-round btn-lg\" target=\"_blank\">\n                          <i class=\"now-ui-icons arrows-1_share-66\"></i> Upgrade to PRO\n                      </a>\n                  </div>\n              </div>\n              <br>\n              <br>\n              <div class=\"row justify-content-md-center sharing-area text-center\">\n                <div class=\"text-center col-md-12 col-lg-8\">\n                  <h3>Thank you for supporting us!</h3>\n                </div>\n                <div class=\"text-center col-md-12 col-lg-8\">\n                  <a target=\"_blank\" href=\"https://www.twitter.com/creativetim\" class=\"btn btn-neutral btn-icon btn-twitter btn-round btn-lg\" rel=\"tooltip\" title=\"Follow us\">\n                    <i class=\"fab fa-twitter\"></i>\n                  </a>\n                  <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon btn-facebook btn-round btn-lg\" rel=\"tooltip\" title=\"Like us\">\n                    <i class=\"fab fa-facebook-square\"></i>\n                  </a>\n                  <a target=\"_blank\" href=\"https://www.linkedin.com/company-beta/9430489/\" class=\"btn btn-neutral btn-icon btn-linkedin btn-lg btn-round\" rel=\"tooltip\" title=\"Follow us\">\n                    <i class=\"fab fa-linkedin\"></i>\n                  </a>\n                  <a target=\"_blank\" href=\"https://github.com/creativetimofficial/now-ui-kit-angular\" class=\"btn btn-neutral btn-icon btn-github btn-round btn-lg\" rel=\"tooltip\" title=\"Star on Github\">\n                    <i class=\"fab fa-github\"></i>\n                  </a>\n                </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <footer class=\"footer\" data-background-color=\"black\">\n      <div class=\"container\">\n          <nav>\n              <ul>\n                  <li>\n                      <a href=\"https://www.creative-tim.com\">\n                          Creative Tim\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"https://www.creative-tim.com/about-us\">\n                          About Us\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"http://blog.creative-tim.com\">\n                          Blog\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                          MIT License\n                      </a>\n                  </li>\n              </ul>\n          </nav>\n          <div class=\"copyright\">\n              &copy;\n            {{data | date: 'yyyy'}}, Designed by\n              <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n          </div>\n      </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);




var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, config) {
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    ComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["NgbdModalBasic"]
            ],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" (click)=\"open(classic,'' , '')\">\n Launch Modal\n</button>\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header justify-content-center\">\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n        </button>\n        <h4 class=\"title title-up\">Modal title</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n        </p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n\n<button class=\"btn btn-warning\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\n   Launch Modal Mini\n</button>\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header justify-content-center\">\n      <div class=\"modal-profile\">\n          <i class=\"now-ui-icons users_circle-08\"></i>\n      </div>\n  </div>\n  <div class=\"modal-body\">\n      <p>Always have an access to your profile</p>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension == undefined && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h4>Menu</h4>\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item active\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                  <div ngbDropdown class=\"dropdown\">\n                                      <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                        <p>\n                                            Dropdown\n                                        </p>\n                                      </a>\n                                      <div ngbDropdownMenu class=\"dropdown-menu\">\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                                      </div>\n                                  </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <h4>Menu with Icons</h4>\n                <nav class=\"navbar navbar-expand-lg bg-info\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-icons\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar-icons\">\n                            <ul class=\"navbar-nav ml-auto\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons ui-1_send\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons users_single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"dropdown\">\n                                        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                            <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                        </a>\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n                                            <div class=\"dropdown-header\">Dropdown header</div>\n                                            <a class=\"dropdown-item\">Action</a>\n                                            <a class=\"dropdown-item\">Another action</a>\n                                            <a class=\"dropdown-item\">Something else here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Another separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n        <h4>Navigation</h4>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"navigation-example\" style=\"background-image:url('assets/img/bg7.jpg')\">\n            <!-- Navbar Primary  -->\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Primary color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Primary -->\n            <!-- Navbar Info -->\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Info Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-info\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Info -->\n            <!-- Navbar Success -->\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-success\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Success -->\n            <!-- Navbar Warning -->\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Warning Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-warning\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Warning -->\n            <!-- Navbar Danger -->\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Danger Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-danger\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Share</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Tweet</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-pinterest\"></i>\n                                    <p>Pin</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Danger -->\n            <!-- Navbar Transparent -->\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Transparent</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Facebook</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Twitter</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                    <p>Instagram</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Transparent-->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\n        <div class=\"container\">\n            <div class=\"alert-wrapper\">\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                  <span aria-hidden=\"true\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  </span>\n                </button>\n                <div class=\"message\">\n                    <ng-container *ngIf=\"alert.icon\">\n                      <div class=\"alert-icon\">\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\n                      </div>\n                    </ng-container>\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\n                </div>\n            </div>\n        </div>\n    </ngb-alert>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        // this.alerts.push({
        //     id: 1,
        //     type: 'success',
        //     strong: 'Well done!',
        //     message: 'You successfully read this important alert message.',
        //     icon: 'ui-2_like'
        // }, {
        //     id: 2,
        //     strong: 'Heads up!',
        //     type: 'info',
        //     message: 'This is an info alert',
        //     icon: 'travel_info'
        // }, {
        //     id: 3,
        //     type: 'warning',
        //     strong: 'Warning!',
        //     message: 'This is a warning alert',
        //     icon: 'ui-1_bell-53'
        // }, {
        //     id: 4,
        //     type: 'danger',
        //     strong: 'Oh snap!',
        //     message: 'This is a danger alert',
        //     icon: 'objects_support-17'
        // });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nucleo-icons-style\">\n  <header>\n      <h1>Nucleo Outline Web Font v2.9</h1>\n      <p>\n          <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a>\n      </p>\n  </header>\n  <div id=\"cd-nav\">\n      <nav>\n          <ul id=\"cd-main-nav\">\n              <li>\n                  <a href=\"#arrows\">Arrows</a>\n              </li>\n              <li>\n                  <a href=\"#business\">Business &amp; Finance</a>\n              </li>\n              <li>\n                  <a href=\"#clothes\">Clothes &amp; Accessories</a>\n              </li>\n              <li>\n                  <a href=\"#design\">Design &amp; Development</a>\n              </li>\n              <li>\n                  <a href=\"#emoticons\">Emoticons</a>\n              </li>\n              <li>\n                  <a href=\"#files\">Files &amp; Folders</a>\n              </li>\n              <li>\n                  <a href=\"#medical\">Healthcare &amp; Medical</a>\n              </li>\n              <li>\n                  <a href=\"#loaders\">Loaders</a>\n              </li>\n              <li>\n                  <a href=\"#maps\">Maps &amp; Location</a>\n              </li>\n              <li>\n                  <a href=\"#media\">Media</a>\n              </li>\n              <li>\n                  <a href=\"#objects\">Objects</a>\n              </li>\n              <li>\n                  <a href=\"#school\">School &amp; Education</a>\n              </li>\n              <li>\n                  <a href=\"#shopping\">Shopping</a>\n              </li>\n              <li>\n                  <a href=\"#sport\">Sport</a>\n              </li>\n              <li>\n                  <a href=\"#technology\">Technology</a>\n              </li>\n              <li>\n                  <a href=\"#text\">Text Editing</a>\n              </li>\n              <li>\n                  <a href=\"#gestures\">Touch Gestures</a>\n              </li>\n              <li>\n                  <a href=\"#transportation\">Transportation</a>\n              </li>\n              <li>\n                  <a href=\"#travel\">Travel</a>\n              </li>\n              <li>\n                  <a href=\"#interface\">User Interface</a>\n              </li>\n              <li>\n                  <a href=\"#users\">Users</a>\n              </li>\n          </ul>\n      </nav>\n  </div>\n  <div id=\"icons-wrapper\">\n      <section id=\"arrows\">\n          <h2>Arrows</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\n                  <p>arrows-1_cloud-download-93</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\n                  <p>arrows-1_cloud-upload-94</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                  <p>arrows-1_minimal-down</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\n                  <p>arrows-1_minimal-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\n                  <p>arrows-1_minimal-right</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\n                  <p>arrows-1_minimal-up</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                  <p>arrows-1_refresh-69</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\n                  <p>arrows-1_share-66</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"business\">\n          <h2>Business &amp; Finance</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons business_badge\"></i>\n                  <p>business_badge</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bank\"></i>\n                  <p>business_bank</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_briefcase-24\"></i>\n                  <p>business_briefcase-24</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bulb-63\"></i>\n                  <p>business_bulb-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                  <p>business_chart-bar-32</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                  <p>business_chart-pie-36</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_globe\"></i>\n                  <p>business_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_money-coins\"></i>\n                  <p>business_money-coins</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"clothes\">\n          <h2>Clothes &amp; Accessories</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                  <p>clothes_tie-bow</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"design\">\n          <h2>Design &amp; Development</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons design_app\"></i>\n                  <p>design_app</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_bullet-list-67\"></i>\n                  <p>design_bullet-list-67</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_image\"></i>\n                  <p>design_image</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_palette\"></i>\n                  <p>design_palette</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_scissors\"></i>\n                  <p>design_scissors</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_vector\"></i>\n                  <p>design_vector</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_html5\"></i>\n                  <p>design-2_html5</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                  <p>design-2_ruler-pencil</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"emoticons\">\n          <h2>Emoticons</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                  <p>emoticons_satisfied</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"files\">\n          <h2>Files &amp; Folders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons files_box\"></i>\n                  <p>files_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_paper\"></i>\n                  <p>files_paper</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_single-copy-04\"></i>\n                  <p>files_single-copy-04</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"medical\">\n          <h2>Healthcare &amp; Medical</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons health_ambulance\"></i>\n                  <p>health_ambulance</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"loaders\">\n          <h2>Loaders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons loader_gear spin\"></i>\n                  <p>loader_gear</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons loader_refresh spin\"></i>\n                  <p>loader_refresh</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"maps\">\n          <h2>Maps &amp; Location</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons location_bookmark\"></i>\n                  <p>location_bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_compass-05\"></i>\n                  <p>location_compass-05</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_map-big\"></i>\n                  <p>location_map-big</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_pin\"></i>\n                  <p>location_pin</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_world\"></i>\n                  <p>location_world</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"media\">\n          <h2>Media</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons media-1_album\"></i>\n                  <p>media-1_album</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-pause\"></i>\n                  <p>media-1_button-pause</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-play\"></i>\n                  <p>media-1_button-play</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-power\"></i>\n                  <p>media-1_button-power</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_camera-compact\"></i>\n                  <p>media-1_camera-compact</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_note-03\"></i>\n                  <p>media-2_note-03</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                  <p>media-2_sound-wave</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"objects\">\n          <h2>Objects</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons objects_diamond\"></i>\n                  <p>objects_diamond</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_globe\"></i>\n                  <p>objects_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_key-25\"></i>\n                  <p>objects_key-25</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_planet\"></i>\n                  <p>objects_planet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_spaceship\"></i>\n                  <p>objects_spaceship</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_support-17\"></i>\n                  <p>objects_support-17</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                  <p>objects_umbrella-13</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"school\">\n          <h2>School &amp; Education</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons education_agenda-bookmark\"></i>\n                  <p>education_agenda-bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_atom\"></i>\n                  <p>education_atom</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_glasses\"></i>\n                  <p>education_glasses</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_hat\"></i>\n                  <p>education_hat</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_paper\"></i>\n                  <p>education_paper</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"shopping\">\n          <h2>Shopping</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons shopping_bag-16\"></i>\n                  <p>shopping_bag-16</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_basket\"></i>\n                  <p>shopping_basket</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_box\"></i>\n                  <p>shopping_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                  <p>shopping_cart-simple</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_credit-card\"></i>\n                  <p>shopping_credit-card</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_delivery-fast\"></i>\n                  <p>shopping_delivery-fast</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_shop\"></i>\n                  <p>shopping_shop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_tag-content\"></i>\n                  <p>shopping_tag-content</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"sport\">\n          <h2>Sport</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons sport_trophy\"></i>\n                  <p>sport_trophy</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons sport_user-run\"></i>\n                  <p>sport_user-run</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"technology\">\n          <h2>Technology</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons tech_controller-modern\"></i>\n                  <p>tech_controller-modern</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_headphones\"></i>\n                  <p>tech_headphones</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_laptop\"></i>\n                  <p>tech_laptop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_mobile\"></i>\n                  <p>tech_mobile</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tablet\"></i>\n                  <p>tech_tablet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tv\"></i>\n                  <p>tech_tv</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_watch-time\"></i>\n                  <p>tech_watch-time</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"text\">\n          <h2>Text Editing</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons text_align-center\"></i>\n                  <p>text_align-center</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_align-left\"></i>\n                  <p>text_align-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_bold\"></i>\n                  <p>text_bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_caps-small\"></i>\n                  <p>text_caps-small</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"gestures\">\n          <h2>Touch Gestures</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons gestures_tap-01\"></i>\n                  <p>gestures_tap-01</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"transportation\">\n          <h2>Transportation</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                  <p>transportation_air-baloon</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons transportation_bus-front-12\"></i>\n                  <p>transportation_bus-front-12</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"travel\">\n          <h2>Travel</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons travel_info\"></i>\n                  <p>travel_info</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons travel_istanbul\"></i>\n                  <p>travel_istanbul</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"interface\">\n          <h2>User Interface</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons ui-1_bell-53\"></i>\n                  <p>ui-1_bell-53</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_calendar-60\"></i>\n                  <p>ui-1_calendar-60</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_check\"></i>\n                  <p>ui-1_check</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\n                  <p>ui-1_lock-circle-open</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_send\"></i>\n                  <p>ui-1_send</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                  <p>ui-1_settings-gear-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-add\"></i>\n                  <p>ui-1_simple-add</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-delete\"></i>\n                  <p>ui-1_simple-delete</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  <p>ui-1_simple-remove</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                  <p>ui-1_zoom-bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                  <p>ui-2_chat-round</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                  <p>ui-2_favourite-28</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_like\"></i>\n                  <p>ui-2_like</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                  <p>ui-2_settings-90</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_time-alarm\"></i>\n                  <p>ui-2_time-alarm</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_email-85\"></i>\n                  <p>ui-1_email-85</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"users\">\n          <h2>Users</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons users_circle-08\"></i>\n                  <p>users_circle-08</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons users_single-02\"></i>\n                  <p>users_single-02</p>\n              </li>\n          </ul>\n      </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nucleo-icons-style,\n.nucleo-icons-style,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* .nucleo-icons-style5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block; }\n\n.nucleo-icons-style {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* --------------------------------\n\nNucleo Outline Web Font - nucleoapp.com/\nLicense - nucleoapp.com/license/\nCreated using IcoMoon - icomoon.io\n\n-------------------------------- */\n\n/* --------------------------------\n\nPrimary style\n\n-------------------------------- */\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box; }\n\n.nucleo-icons-style {\n  font-size: 62.5%; }\n\n.nucleo-icons-style {\n  font-size: 1.6rem;\n  font-family: sans-serif;\n  color: #333333;\n  background: #efefef; }\n\na {\n  color: #766acf;\n  text-decoration: none; }\n\n/* --------------------------------\n\nMain components\n\n-------------------------------- */\n\nheader {\n  text-align: center;\n  padding: 120px 0 0; }\n\nheader h1 {\n  font-size: 1.2rem; }\n\nheader p {\n  font-size: .9rem;\n  margin-top: .6em; }\n\nheader a:hover {\n  text-decoration: underline; }\n\nsection {\n  width: 90%;\n  max-width: 1200px;\n  margin: 50px auto; }\n\nsection h2 {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 0 0 1em .2em;\n  margin-bottom: 1em;\n  font-size: 1rem; }\n\nul::after {\n  clear: both;\n  content: \"\";\n  display: table; }\n\nul li {\n  width: 25%;\n  float: left;\n  padding: 16px 0;\n  text-align: center;\n  border-radius: .25em;\n  -webkit-transition: background 0.2s;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden; }\n\nul li:hover {\n  background: #dbdbdb; }\n\nul p,\nul em,\nul input {\n  display: inline-block;\n  font-size: 0.7rem;\n  color: #999999;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer; }\n\nul p {\n  padding: 10px;\n  margin-top: 10px; }\n\nul p::-moz-selection,\nul em::-moz-selection {\n  background: #766acf;\n  color: #efefef; }\n\nul p::selection,\nul em::selection {\n  background: #766acf;\n  color: #efefef; }\n\nul em {\n  margin-bottom: 8px; }\n\nul em::before {\n  content: '['; }\n\nul em::after {\n  content: ']'; }\n\nul input {\n  text-align: center;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  outline: none; }\n\n@media only screen and (min-width: 768px) {\n  ul li {\n    width: 20%;\n    float: left; } }\n\n@media only screen and (min-width: 1024px) {\n  ul li {\n    width: 12.5%;\n    float: left;\n    padding: 32px 0; } }\n\n/* --------------------------------\n\nSmart fixed navigation\n\n-------------------------------- */\n\n#cd-nav ul {\n  /* mobile first */\n  position: fixed;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90%;\n  right: 5%;\n  bottom: 5%;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: white;\n  visibility: hidden;\n  /* remove overflow:hidden if you want to create a drop-down menu - but then remember to fix/eliminate the list items animation */\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n  -webkit-transition: -webkit-transform 0.3s, visibility 0s 0.3s;\n  -webkit-transition: visibility 0s 0.3s, -webkit-transform 0.3s;\n  transition: visibility 0s 0.3s, -webkit-transform 0.3s;\n  transition: transform 0.3s, visibility 0s 0.3s;\n  transition: transform 0.3s, visibility 0s 0.3s, -webkit-transform 0.3s; }\n\n#cd-nav ul li {\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: block;\n  width: 100%;\n  padding: 0;\n  text-align: left; }\n\n#cd-nav ul li:hover {\n  background-color: #FFF; }\n\n#cd-nav ul.is-visible {\n  visibility: visible;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: -webkit-transform 0.3s, visibility 0s 0s;\n  -webkit-transition: visibility 0s 0s, -webkit-transform 0.3s;\n  transition: visibility 0s 0s, -webkit-transform 0.3s;\n  transition: transform 0.3s, visibility 0s 0s;\n  transition: transform 0.3s, visibility 0s 0s, -webkit-transform 0.3s; }\n\n#cd-nav li a {\n  display: block;\n  padding: 1em;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eff2f6; }\n\n#cd-nav li a:hover {\n  color: #333333; }\n\n#cd-nav li:last-child a {\n  border-bottom: none; }\n\n.cd-nav-trigger {\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  /* image replacement */\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  z-index: 2; }\n\n.cd-nav-trigger span {\n  /* the span element is used to create the menu icon */\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #333333;\n  top: 50%;\n  margin-top: -1px;\n  left: 50%;\n  margin-left: -10px;\n  -webkit-transition: background 0.3s;\n  transition: background 0.3s; }\n\n.cd-nav-trigger span::before,\n.cd-nav-trigger span::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  background: inherit;\n  width: 100%;\n  height: 100%;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transition: -webkit-transform 0.3s, background 0s;\n  -webkit-transition: background 0s, -webkit-transform 0.3s;\n  transition: background 0s, -webkit-transform 0.3s;\n  transition: transform 0.3s, background 0s;\n  transition: transform 0.3s, background 0s, -webkit-transform 0.3s; }\n\n.cd-nav-trigger span::before {\n  top: -6px;\n  -webkit-transform: rotate(0);\n  transform: rotate(0); }\n\n.cd-nav-trigger span::after {\n  bottom: -6px;\n  -webkit-transform: rotate(0);\n  transform: rotate(0); }\n\n.cd-nav-trigger.menu-is-open {\n  box-shadow: none; }\n\n.cd-nav-trigger.menu-is-open span {\n  background: rgba(232, 74, 100, 0); }\n\n.cd-nav-trigger.menu-is-open span::before,\n.cd-nav-trigger.menu-is-open span::after {\n  background: #333333; }\n\n.cd-nav-trigger.menu-is-open span::before {\n  top: 0;\n  -webkit-transform: rotate(135deg);\n  transform: rotate(135deg); }\n\n.cd-nav-trigger.menu-is-open span::after {\n  bottom: 0;\n  -webkit-transform: rotate(225deg);\n  transform: rotate(225deg); }\n\n.now-ui-icons {\n  display: inline-block;\n  font: normal normal normal 32px/1 'Nucleo Outline';\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udWNsZW9pY29ucy9FOlxcTFRJXFxTZWNyZXQgU2FudGEgUHJvamVjdFxcV2ViVUlQcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxudWNsZW9pY29uc1xcbnVjbGVvaWNvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbnVjbGVvaWNvbnMvbnVjbGVvaWNvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QixFQUFBOztBQUc1QiwrREFBQTs7QUFFQTs7Ozs7Ozs7Ozs7O0VBWUksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7O0VBRUksZ0JBQWdCLEVBQUE7O0FBR3BCOztFQUVJLFlBQVksRUFBQTs7QUFHaEI7Ozs7RUFJSSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUdqQjtFQUNJLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTs7QUFLckI7Ozs7OztrQ0NKa0M7O0FEWWxDOzs7O2tDQ1BrQzs7QURhbEM7OztFQUdJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHekI7Ozs7a0NDWmtDOztBRGtCbEM7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdsQjtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBRW5DLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCOzs7RUFHSSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR3BCOztFQUVJLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBSGxCOztFQUVJLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJO0lBQ0ksVUFBVTtJQUNWLFdBQVcsRUFBQSxFQUNkOztBQUdMO0VBQ0k7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWUsRUFBQSxFQUNsQjs7QUFHTDs7OztrQ0NqQ2tDOztBRHVDbEM7RUFDSSxpQkFBQTtFQUNBLGVBQWU7RUFDZixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQix1Q0FBdUM7RUFDdkMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnSUFBQTtFQUNBLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLDBDQUFBO0VBQ0EsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFJM0IsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUluQywyQkFBMkI7RUFDM0IsOERBQThEO0VBRTlELDhEQUE4QztFQUE5QyxzREFBOEM7RUFBOUMsOENBQThDO0VBQTlDLHNFQUE4QyxFQUFBOztBQUdsRDtFQUNJLDBDQUFBO0VBQ0EsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBSTNCLG1CQUFtQjtFQUNuQiw0REFBNEQ7RUFFNUQsNERBQTRDO0VBQTVDLG9EQUE0QztFQUE1Qyw0Q0FBNEM7RUFBNUMsb0VBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQix1Q0FBdUM7RUFDdkMsc0JBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxxREFBQTtFQUNBLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUVuQywyQkFBMkIsRUFBQTs7QUFHL0I7O0VBRUksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQUE7RUFDQSxnQ0FBZ0M7RUFJaEMsd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IseURBQXlEO0VBRXpELHlEQUF5QztFQUF6QyxpREFBeUM7RUFBekMseUNBQXlDO0VBQXpDLGlFQUF5QyxFQUFBOztBQUc3QztFQUNJLFNBQVM7RUFDVCw0QkFBNEI7RUFJNUIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksWUFBWTtFQUNaLDRCQUE0QjtFQUk1QixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQ0FBaUMsRUFBQTs7QUFHckM7O0VBRUksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksTUFBTTtFQUNOLGlDQUFpQztFQUlqQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxTQUFTO0VBQ1QsaUNBQWlDO0VBSWpDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHFCQUFxQjtFQUNyQixrREFBa0Q7RUFDbEQsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsa0NBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL251Y2xlb2ljb25zL251Y2xlb2ljb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm51Y2xlby1pY29ucy1zdHlsZSxcbi5udWNsZW8taWNvbnMtc3R5bGUsXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiAubnVjbGVvLWljb25zLXN0eWxlNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5tYWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5OdWNsZW8gT3V0bGluZSBXZWIgRm9udCAtIG51Y2xlb2FwcC5jb20vXG5MaWNlbnNlIC0gbnVjbGVvYXBwLmNvbS9saWNlbnNlL1xuQ3JlYXRlZCB1c2luZyBJY29Nb29uIC0gaWNvbW9vbi5pb1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5QcmltYXJ5IHN0eWxlXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuYSB7XG4gICAgY29sb3I6ICM3NjZhY2Y7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NYWluIGNvbXBvbmVudHNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTIwcHggMCAwO1xufVxuXG5oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuNmVtO1xufVxuXG5oZWFkZXIgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbnNlY3Rpb24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbnNlY3Rpb24gaDIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgIHBhZGRpbmc6IDAgMCAxZW0gLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG51bDo6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbnVsIGxpIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudWwgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkYmRiZGI7XG59XG5cbnVsIHAsXG51bCBlbSxcbnVsIGlucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcbiAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xuICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcbiAgICB1c2VyLXNlbGVjdDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG51bCBwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnVsIHA6OnNlbGVjdGlvbixcbnVsIGVtOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICM3NjZhY2Y7XG4gICAgY29sb3I6ICNlZmVmZWY7XG59XG5cbnVsIGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbnVsIGVtOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdbJztcbn1cblxudWwgZW06OmFmdGVyIHtcbiAgICBjb250ZW50OiAnXSc7XG59XG5cbnVsIGlucHV0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHVsIGxpIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIHVsIGxpIHtcbiAgICAgICAgd2lkdGg6IDEyLjUlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMzJweCAwO1xuICAgIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuU21hcnQgZml4ZWQgbmF2aWdhdGlvblxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY2QtbmF2IHVsIHtcbiAgICAvKiBtb2JpbGUgZmlyc3QgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDkwJTtcbiAgICByaWdodDogNSU7XG4gICAgYm90dG9tOiA1JTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAvKiByZW1vdmUgb3ZlcmZsb3c6aGlkZGVuIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBhIGRyb3AtZG93biBtZW51IC0gYnV0IHRoZW4gcmVtZW1iZXIgdG8gZml4L2VsaW1pbmF0ZSB0aGUgbGlzdCBpdGVtcyBhbmltYXRpb24gKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xufVxuXG4jY2QtbmF2IHVsIGxpIHtcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI2NkLW5hdiB1bCBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuI2NkLW5hdiB1bC5pcy12aXNpYmxlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG59XG5cbiNjZC1uYXYgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMmY2O1xufVxuXG4jY2QtbmF2IGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4jY2QtbmF2IGxpOmxhc3QtY2hpbGQgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA1JTtcbiAgICByaWdodDogNSU7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLyogaW1hZ2UgcmVwbGFjZW1lbnQgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtaW5kZW50OiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW4ge1xuICAgIC8qIHRoZSBzcGFuIGVsZW1lbnQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIG1lbnUgaWNvbiAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUge1xuICAgIHRvcDogLTZweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogLTZweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMyLCA3NCwgMTAwLCAwKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG59XG5cbi5ub3ctdWktaWNvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAzMnB4LzEgJ051Y2xlbyBPdXRsaW5lJztcbiAgICBzcGVhazogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuIiwiLm51Y2xlby1pY29ucy1zdHlsZSxcbi5udWNsZW8taWNvbnMtc3R5bGUsXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XG5cbi8qIC5udWNsZW8taWNvbnMtc3R5bGU1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxOyB9XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lOyB9XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBjb250ZW50OiBub25lOyB9XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTnVjbGVvIE91dGxpbmUgV2ViIEZvbnQgLSBudWNsZW9hcHAuY29tL1xuTGljZW5zZSAtIG51Y2xlb2FwcC5jb20vbGljZW5zZS9cbkNyZWF0ZWQgdXNpbmcgSWNvTW9vbiAtIGljb21vb24uaW9cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblByaW1hcnkgc3R5bGVcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7IH1cblxuYSB7XG4gIGNvbG9yOiAjNzY2YWNmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTWFpbiBjb21wb25lbnRzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEyMHB4IDAgMDsgfVxuXG5oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDEuMnJlbTsgfVxuXG5oZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogLjlyZW07XG4gIG1hcmdpbi10b3A6IC42ZW07IH1cblxuaGVhZGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuXG5zZWN0aW9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvOyB9XG5cbnNlY3Rpb24gaDIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTJlMjtcbiAgcGFkZGluZzogMCAwIDFlbSAuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxuXG51bDo6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7IH1cblxudWwgbGkge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTZweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG51bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkYmRiZGI7IH1cblxudWwgcCxcbnVsIGVtLFxudWwgaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcbiAgLW1vei11c2VyLXNlbGVjdDogYXV0bztcbiAgLW1zLXVzZXItc2VsZWN0OiBhdXRvO1xuICB1c2VyLXNlbGVjdDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxudWwgcCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cblxudWwgcDo6c2VsZWN0aW9uLFxudWwgZW06OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICM3NjZhY2Y7XG4gIGNvbG9yOiAjZWZlZmVmOyB9XG5cbnVsIGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG5cbnVsIGVtOjpiZWZvcmUge1xuICBjb250ZW50OiAnWyc7IH1cblxudWwgZW06OmFmdGVyIHtcbiAgY29udGVudDogJ10nOyB9XG5cbnVsIGlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lOyB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgdWwgbGkge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZmxvYXQ6IGxlZnQ7IH0gfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICB1bCBsaSB7XG4gICAgd2lkdGg6IDEyLjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDMycHggMDsgfSB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblNtYXJ0IGZpeGVkIG5hdmlnYXRpb25cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiNjZC1uYXYgdWwge1xuICAvKiBtb2JpbGUgZmlyc3QgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXgtaGVpZ2h0OiA5MCU7XG4gIHJpZ2h0OiA1JTtcbiAgYm90dG9tOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC8qIHJlbW92ZSBvdmVyZmxvdzpoaWRkZW4gaWYgeW91IHdhbnQgdG8gY3JlYXRlIGEgZHJvcC1kb3duIG1lbnUgLSBidXQgdGhlbiByZW1lbWJlciB0byBmaXgvZWxpbWluYXRlIHRoZSBsaXN0IGl0ZW1zIGFuaW1hdGlvbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB6LWluZGV4OiAxO1xuICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAtby10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzOyB9XG5cbiNjZC1uYXYgdWwgbGkge1xuICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4jY2QtbmF2IHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjsgfVxuXG4jY2QtbmF2IHVsLmlzLXZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwczsgfVxuXG4jY2QtbmF2IGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMWVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYyZjY7IH1cblxuI2NkLW5hdiBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICMzMzMzMzM7IH1cblxuI2NkLW5hdiBsaTpsYXN0LWNoaWxkIGEge1xuICBib3JkZXItYm90dG9tOiBub25lOyB9XG5cbi5jZC1uYXYtdHJpZ2dlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1JTtcbiAgcmlnaHQ6IDUlO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIGltYWdlIHJlcGxhY2VtZW50ICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtaW5kZW50OiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB6LWluZGV4OiAyOyB9XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuIHtcbiAgLyogdGhlIHNwYW4gZWxlbWVudCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgbWVudSBpY29uICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zczsgfVxuXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YmVmb3JlLFxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7IH1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmJlZm9yZSB7XG4gIHRvcDogLTZweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmFmdGVyIHtcbiAgYm90dG9tOiAtNnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHtcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMiwgNzQsIDEwMCwgMCk7IH1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzMzMzMzMzsgfVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpOyB9XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YWZ0ZXIge1xuICBib3R0b206IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTsgfVxuXG4ubm93LXVpLWljb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAzMnB4LzEgJ051Y2xlbyBPdXRsaW5lJztcbiAgc3BlYWs6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-transparent');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    };
    NucleoiconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nucleoicons',
            template: __webpack_require__(/*! ./nucleoicons.component.html */ "./src/app/components/nucleoicons/nucleoicons.component.html"),
            styles: [__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-details/profile-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/profile-details/profile-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" method=\"\" action=\"\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-2 col-4\">\n      <label>PS No.:</label>\n    </div>\n    <div class=\"col-md-4 col-8\">\n      <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">\n            <i class=\"now-ui-icons business_badge\"></i>\n          </span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"PS No...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-2 col-4\">\n      <label>Full Name:</label>\n    </div>\n    <div class=\"col-md-4 col-8\">\n      <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">\n            <i class=\"now-ui-icons users_circle-08\"></i>\n          </span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Full Name...\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-2 col-4\">\n      <label>Mobile:</label>\n    </div>\n    <div class=\"col-md-4 col-8\">\n      <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">\n            <i class=\"now-ui-icons tech_mobile\"></i>\n          </span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Mobile...\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-2 col-4\">\n      <label>Email:</label>\n    </div>\n    <div class=\"col-md-4 col-8\">\n      <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus3===true}\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">\n            <i class=\"now-ui-icons ui-1_email-85\"></i>\n          </span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Email...\" (focus)=\"focus3=true\" (blur)=\"focus3=false\">\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-2 col-4\">\n      <label>Password:</label>\n    </div>\n    <div class=\"col-md-4 col-8\">\n      <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus4===true}\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">\n            <i class=\"now-ui-icons text_caps-small\"></i>\n          </span>\n        </div>\n        <input type=\"text\" placeholder=\"Password...\" class=\"form-control\" (focus)=\"focus4=true\" (blur)=\"focus4=false\" />\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-2 col-4\">\n      <label>Confirm Password:</label>\n    </div>\n    <div class=\"col-md-4 col-8\">\n      <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus5===true}\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">\n            <i class=\"now-ui-icons text_caps-small\"></i>\n          </span>\n        </div>\n        <input type=\"text\" placeholder=\"Confirm Password...\" class=\"form-control\" (focus)=\"focus5=true\"\n          (blur)=\"focus5=false\" />\n      </div>\n\n    </div>\n  </div>\n\n\n</form>"

/***/ }),

/***/ "./src/app/components/profile-details/profile-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/profile-details/profile-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-pane {\n  color: #2c2c2c; }\n\n.form-control {\n  height: auto; }\n\n.section {\n  padding: 20px 0; }\n\n.section .row .col-4 {\n    text-align: right !important; }\n\n.section .form label {\n    margin-top: 10px;\n    font-weight: bold; }\n\n.section .form label,\n  .section .form input,\n  .section .form select {\n    font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLWRldGFpbHMvRTpcXExUSVxcU2VjcmV0IFNhbnRhIFByb2plY3RcXFdlYlVJUHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZmlsZS1kZXRhaWxzXFxwcm9maWxlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFJSSw0QkFBNEIsRUFBQTs7QUFKaEM7SUFRUSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7O0FBVHpCOzs7SUFnQlEsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLWRldGFpbHMvcHJvZmlsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC50YWItcGFuZXtcclxuICAgIGNvbG9yOiMyYzJjMmM7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuXHJcbi5yb3cgLmNvbC00e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuICAgIC5mb3JtIGxhYmVse1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZm9ybSBsYWJlbCwgXHJcbiAgICAuZm9ybSBpbnB1dCxcclxuICAgIC5mb3JtIHNlbGVjdFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/profile-details/profile-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/profile-details/profile-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsComponent", function() { return ProfileDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileDetailsComponent = /** @class */ (function () {
    function ProfileDetailsComponent() {
    }
    ProfileDetailsComponent.prototype.ngOnInit = function () {
    };
    ProfileDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-details',
            template: __webpack_require__(/*! ./profile-details.component.html */ "./src/app/components/profile-details/profile-details.component.html"),
            styles: [__webpack_require__(/*! ./profile-details.component.scss */ "./src/app/components/profile-details/profile-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileDetailsComponent);
    return ProfileDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"typography-line\">\n                        <h1>\n                            <span>Header 1</span>The Life of Now UI Kit </h1>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Header 2</span>The Life of Now UI Kit</h2>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h3>\n                            <span>Header 3</span>The Life of Now UI Kit</h3>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h4>\n                            <span>Header 4</span>The Life of Now UI Kit</h4>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h5>\n                            <span>Header 5</span>The Life of Now UI Kit</h5>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h6>\n                            <span>Header 6</span>The Life of Now UI Kit</h6>\n                    </div>\n                    <div class=\"typography-line\">\n                        <p>\n                            <span>Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Quote</span>\n                        <blockquote>\n                            <p class=\"blockquote blockquote-primary\">\n                                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                <br>\n                                <br>\n                                <small>\n                                    - Noaa\n                                </small>\n                            </p>\n                        </blockquote>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n            <h4>Images</h4>\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Image</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Rounded Image\" class=\"rounded\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Image</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Raised</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Raised Image\" class=\"rounded img-raised\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Raised</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-raised\">\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/components/wishlist-details/wishlist-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/wishlist-details/wishlist-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" method=\"\" action=\"\">\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6 col-12\">\n      <div class=\"table-responsive\">\n\n        <table class=\"table\">\n          <thead class=\"text-primary\">\n            <tr>\n              <th>Wish Sr. No.</th>\n              <th>Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>1</td>\n              <td>\n                <div class=\"input-group\">\n                  <textarea class=\"form-control\" placeholder=\"Wish 1...\"></textarea>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>\n                <div class=\"input-group\">\n                  <textarea class=\"form-control\" placeholder=\"Wish 1...\"></textarea>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>\n                <div class=\"input-group\">\n                  <textarea class=\"form-control\" placeholder=\"Wish 1...\"></textarea>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/wishlist-details/wishlist-details.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/wishlist-details/wishlist-details.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-pane {\n  color: #2c2c2c; }\n\n.form-control {\n  height: auto; }\n\n.section {\n  padding: 20px 0; }\n\n.section .row .col-4 {\n    text-align: right !important; }\n\n.section .form label {\n    margin-top: 10px;\n    font-weight: bold; }\n\n.section .form label,\n  .section .form input,\n  .section .form select {\n    font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aXNobGlzdC1kZXRhaWxzL0U6XFxMVElcXFNlY3JldCBTYW50YSBQcm9qZWN0XFxXZWJVSVByb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdpc2hsaXN0LWRldGFpbHNcXHdpc2hsaXN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFJSSw0QkFBNEIsRUFBQTs7QUFKaEM7SUFRUSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7O0FBVHpCOzs7SUFnQlEsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93aXNobGlzdC1kZXRhaWxzL3dpc2hsaXN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnRhYi1wYW5le1xyXG4gICAgY29sb3I6IzJjMmMyYztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG5cclxuLnJvdyAuY29sLTR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gICAgLmZvcm0gbGFiZWx7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5mb3JtIGxhYmVsLCBcclxuICAgIC5mb3JtIGlucHV0LFxyXG4gICAgLmZvcm0gc2VsZWN0XHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/wishlist-details/wishlist-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/wishlist-details/wishlist-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: WishlistDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistDetailsComponent", function() { return WishlistDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WishlistDetailsComponent = /** @class */ (function () {
    function WishlistDetailsComponent() {
    }
    WishlistDetailsComponent.prototype.ngOnInit = function () {
    };
    WishlistDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist-details',
            template: __webpack_require__(/*! ./wishlist-details.component.html */ "./src/app/components/wishlist-details/wishlist-details.component.html"),
            styles: [__webpack_require__(/*! ./wishlist-details.component.scss */ "./src/app/components/wishlist-details/wishlist-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WishlistDetailsComponent);
    return WishlistDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\n    <div class=\"nav-tabs-wrapper\">\n      <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\n        <ngb-tab title=\"Your Details\">\n          <ng-template ngbTabContent>\n\n            <div class=section>\n              <p class=\"category\"><u>Fill Your Wish List below</u></p>\n\n              <app-wishlist-details></app-wishlist-details>\n\n            </div>\n\n            <div class=\"section\">\n              <p class=\"category\"><u>Profile</u></p>\n\n              <app-profile-details></app-profile-details>\n\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Recipient Details\">\n          <ng-template ngbTabContent>\n\n            <div class=section>\n              <p class=\"category\"><u>Wish List of Your Recipient is below</u></p>\n\n              <app-wishlist-details></app-wishlist-details>\n\n            </div>\n\n            <div class=\"section\">\n              <p class=\"category\"><u>Profile Details of Your Recipient</u></p>\n\n              <p><b>The Profile Details of Your Recipient will be Revealed on the Last day</b></p>\n              <app-profile-details></app-profile-details>\n\n            </div>\n\n          </ng-template>\n        </ngb-tab>\n\n        <ngb-tab title=\"Your Secret Santa Details\">\n          <ng-template ngbTabContent>\n\n            <div class=\"section\">\n              <p class=\"category\"><u>Profile Details of Your Recipient</u></p>\n\n              <p><b>The Profile Details of Your Secret Santa will be Revealed on the Last day</b></p>\n              <app-profile-details></app-profile-details>\n\n            </div>\n\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-pane {\n  color: #2c2c2c; }\n\n.form-control {\n  height: auto; }\n\n.section {\n  padding: 20px 0; }\n\n.section .row .col-4 {\n    text-align: right !important; }\n\n.section .form label {\n    margin-top: 10px;\n    font-weight: bold; }\n\n.section .form label,\n  .section .form input,\n  .section .form select {\n    font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0U6XFxMVElcXFNlY3JldCBTYW50YSBQcm9qZWN0XFxXZWJVSVByb2plY3Qvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUlJLDRCQUE0QixFQUFBOztBQUpoQztJQVFRLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTs7QUFUekI7OztJQWdCUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC50YWItcGFuZXtcclxuICAgIGNvbG9yOiMyYzJjMmM7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuXHJcbi5yb3cgLmNvbC00e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuICAgIC5mb3JtIGxhYmVse1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZm9ybSBsYWJlbCwgXHJcbiAgICAuZm9ybSBpbnB1dCxcclxuICAgIC5mb3JtIHNlbGVjdFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 content-center\">\n    <div class=\"card card-login card-plain\">\n        <form class=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"header header-primary text-center\">\n                <div class=\"logo-container\">\n                    <img src=\"https://www.secretsantaorganizer.com/bundles/intractosecretsanta/img/logo.png\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"content\">\n                <div class=\"input-group form-group-no-border input-lg\"\n                    [ngClass]=\"{'input-group-focus':focus3===true}\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-building\"></i></span>\n                    </div>\n                    <input formControlName=\"CompanyCode\" type=\"text\" class=\"form-control\" placeholder=\"Company Code...\" (focus)=\"focus3=true\"\n                        (blur)=\"focus3=false\">\n                </div>\n                <div class=\"input-group form-group-no-border input-lg\"\n                    [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"now-ui-icons users_circle-08\"></i></span>\n                    </div>\n                    <input formControlName=\"PSNo\" type=\"text\" class=\"form-control\" placeholder=\"PS No...\" (focus)=\"focus=true\"\n                        (blur)=\"focus=false\">\n                </div>\n                <div class=\"input-group form-group-no-border input-lg\"\n                    [ngClass]=\"{'input-group-focus':focus1===true}\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                    </div>\n                    <input formControlName=\"Password\" type=\"text\" placeholder=\"Password...\" class=\"form-control\" (focus)=\"focus1=true\"\n                        (blur)=\"focus1=false\" />\n                </div>\n            </div>\n            <div class=\"footer text-center\">\n                <button type=\"submit\" class=\"btn btn-primary btn-round btn-lg btn-block\">Login</button>\n            </div>\n            <div class=\"pull-left\">\n                <h6>\n                    <a href=\"javascript:void(0);\" [routerLink]=\"['/Registration']\" class=\"link\">Register</a>\n                </h6>\n            </div>\n            <!-- <div class=\"pull-right\">\n                <h6>\n                    <a href=\"#pablo\" class=\"link\">Need Help?</a>\n                </h6>\n            </div> -->\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  height: auto; }\n\n::ng-deep .page-header {\n  height: 100vh !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXExUSVxcU2VjcmV0IFNhbnRhIFByb2plY3RcXFdlYlVJUHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFFSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wYWdlLWhlYWRlclxyXG57XHJcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(gs, router) {
        this.gs = gs;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            PSNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            CompanyCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        // var navbar = document.getElementsByTagName('nav')[0];
        // navbar.classList.add('navbar-transparent');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        // var navbar = document.getElementsByTagName('nav')[0];
        // navbar.classList.remove('navbar-transparent');
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        // TODO: Use EventEmitter with form value
        this.gs.httpCall('post', 'login', this.loginForm.value).subscribe(function (res) {
            debugger;
            if (res.Success) {
                _this.gs.ShowHideNotification({
                    id: 1,
                    type: 'success',
                    strong: '!!Success!!',
                    message: 'You have successfully Login.',
                    icon: 'ui-2_like'
                });
                _this.router.navigateByUrl('Dashboard');
            }
            else {
                _this.gs.ShowHideNotification({
                    id: 1,
                    type: 'warning',
                    strong: '!!Warning!!',
                    message: res.Message,
                    icon: 'ui-1_bell-53'
                });
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div style=\"clear: both; height: 90px;\"></div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var PagesComponent = /** @class */ (function () {
    function PagesComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    PagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            var _location = _this.location.path();
            _location = _location.split('/')[2];
            if (number > 150 || window.pageYOffset > 150) {
                navbar.classList.remove('navbar-transparent');
            }
            else if (_location !== 'login' && _this.location.path() !== '/nucleoicons') {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
    };
    PagesComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(app_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", app_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"])
    ], PagesComponent.prototype, "navbar", void 0);
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var app_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var app_components_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/components/profile-details/profile-details.component */ "./src/app/components/profile-details/profile-details.component.ts");
/* harmony import */ var app_components_wishlist_details_wishlist_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/components/wishlist-details/wishlist-details.component */ "./src/app/components/wishlist-details/wishlist-details.component.ts");














var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__["JwBootstrapSwitchNg2Module"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                // PagesRoutingModule,
                // AgmCoreModule.forRoot({
                //     apiKey: 'YOUR_KEY_HERE'
                // })
            ],
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_8__["PagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                app_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                app_components_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_12__["ProfileDetailsComponent"],
                app_components_wishlist_details_wishlist_details_component__WEBPACK_IMPORTED_MODULE_13__["WishlistDetailsComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/registration/registration.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 content-center\">\n  <div class=\"card card-login card-plain\">\n      <form class=\"form\" [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\n        <div style=\"clear:both; height:50px;\"></div>\n          <div class=\"header header-primary text-center\">\n              <div class=\"logo-container\">\n                  <img src=\"assets/img/secretsanta.png\" alt=\"\">\n              </div>\n          </div>\n          <div class=\"content\">\n            <div class=\"input-group form-group-no-border input-lg\"\n                  [ngClass]=\"{'input-group-focus':focus7===true}\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"> <i class=\"fa fa-building\"></i></span>\n                  </div>\n                  <input formControlName=\"PSNo\" type=\"text\" class=\"form-control\" placeholder=\"Company Code...\" (focus)=\"focus7=true\"\n                      (blur)=\"focus7=false\">\n              </div> \n            <div class=\"input-group form-group-no-border input-lg\"\n                  [ngClass]=\"{'input-group-focus':focus===true}\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"> <i class=\"now-ui-icons business_badge\"></i></span>\n                  </div>\n                  <input formControlName=\"PSNo\" type=\"text\" class=\"form-control\" placeholder=\"PS No...\" (focus)=\"focus=true\"\n                      (blur)=\"focus=false\">\n              </div>\n\n              <div class=\"input-group form-group-no-border input-lg\"\n                  [ngClass]=\"{'input-group-focus':focus1===true}\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"> <i class=\"now-ui-icons users_circle-08\"></i></span>\n                  </div>\n                  <input formControlName=\"FullName\" type=\"text\" class=\"form-control\" placeholder=\"Full Name...\" (focus)=\"focus1=true\"\n                      (blur)=\"focus1=false\">\n              </div>\n\n              <div class=\"input-group form-group-no-border input-lg\"\n                  [ngClass]=\"{'input-group-focus':focus2===true}\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"> <i class=\"now-ui-icons tech_mobile\"></i></span>\n                  </div>\n                  <input formControlName=\"Mobile\" type=\"text\" class=\"form-control\" placeholder=\"Mobile...\" (focus)=\"focus2=true\"\n                      (blur)=\"focus2=false\">\n              </div>\n\n              <div class=\"input-group form-group-no-border input-lg\"\n                  [ngClass]=\"{'input-group-focus':focus3===true}\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"> <i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                  </div>\n                  <input formControlName=\"Email\" type=\"text\" class=\"form-control\" placeholder=\"Email...\" (focus)=\"focus3=true\"\n                      (blur)=\"focus3=false\">\n              </div>\n\n              <div class=\"input-group form-group-no-border input-lg\"\n                  [ngClass]=\"{'input-group-focus':focus6===true}\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                  </div>\n                  <select formControlName=\"Department\"  type=\"text\" placeholder=\"Department...\" class=\"form-control\" (focus)=\"focus6=true\"\n                      (blur)=\"focus6=false\">\n                    <option>Dep 1</option>\n                    <option>Dep 2</option>\n                    <option>Dep 3</option>\n                    </select>\n              </div>\n\n              <div class=\"input-group form-group-no-border input-lg\"\n                  [ngClass]=\"{'input-group-focus':focus4===true}\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                  </div>\n                  <input formControlName=\"Password\"  type=\"text\" placeholder=\"Password...\" class=\"form-control\" (focus)=\"focus4=true\"\n                      (blur)=\"focus4=false\" />\n              </div>\n\n              <div class=\"input-group form-group-no-border input-lg\"\n                  [ngClass]=\"{'input-group-focus':focus5===true}\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                  </div>\n                  <input formControlName=\"ConfirmPassword\"  type=\"text\" placeholder=\"Confirm Password...\" class=\"form-control\" (focus)=\"focus5=true\"\n                      (blur)=\"focus5=false\" />\n              </div>\n          </div>\n          <div class=\"footer text-center\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</button>\n              <!-- <a href=\"javascript:void(0);\" [routerLink]=\"['/Dashboard']\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a> -->\n          </div>\n          <div class=\"pull-left\">\n              <h6>\n                  <a href=\"javascript:void(0);\" [routerLink]=\"['/Login']\" class=\"link\">Back to Login</a>\n              </h6>\n          </div>\n          <!-- <div class=\"pull-right\">\n              <h6>\n                  <a href=\"#pablo\" class=\"link\">Need Help?</a>\n              </h6>\n          </div> -->\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/registration/registration.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  height: auto; }\n\n.form-control option {\n  color: #2c2c2c; }\n\n::ng-deep .page-header {\n  height: 118vh !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL0U6XFxMVElcXFNlY3JldCBTYW50YSBQcm9qZWN0XFxXZWJVSVByb2plY3Qvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RyYXRpb25cXHJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSyxjQUFhLEVBQUE7O0FBR2xCO0VBRUksd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uZm9ybS1jb250cm9sIG9wdGlvbntcclxuICAgICBjb2xvcjojMmMyYzJjO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnBhZ2UtaGVhZGVyXHJcbntcclxuICAgIGhlaWdodDogMTE4dmggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/registration/registration.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(gs, router) {
        this.gs = gs;
        this.router = router;
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            PSNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            FullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Department: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            ConfirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
    };
    RegistrationComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        // TODO: Use EventEmitter with form value
        console.warn(this.registrationForm.value);
        var data = {
            deptId: this.registrationForm.value.Department,
            email: this.registrationForm.value.Email,
            id: this.registrationForm.value.PSNo,
            name: this.registrationForm.value.FullName,
            mobile: this.registrationForm.value.Mobile,
            password: this.registrationForm.value.Password
        };
        this.registerUser(data).subscribe(function (res) {
            console.log(res);
            _this.router.navigateByUrl('Dashboard');
        });
    };
    RegistrationComponent.prototype.registerUser = function (data) {
        return this.gs.httpCall('Post', 'create', data);
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/pages/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/pages/registration/registration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var GlobalService = /** @class */ (function () {
    function GlobalService(http) {
        this.http = http;
        this.apiUrl = 'https://us-central1-secretsanta-397f9.cloudfunctions.net/app/api/v1/';
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    GlobalService.prototype.httpCall = function (method, url, data, httpOptions) {
        if (!httpOptions) {
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
        }
        return this.http.request(method, "" + this.apiUrl + url, {
            body: data,
            headers: httpOptions.headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(url, data)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    GlobalService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            _this.ShowHideNotification({
                id: 1,
                type: 'danger',
                strong: '!!Oh snap!!!',
                message: error.message,
                icon: 'objects_support-17'
            });
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    GlobalService.prototype.log = function (message) {
        console.log(message);
        //this.messageService.add(`HeroService: ${message}`);
    };
    GlobalService.prototype.ShowHideNotification = function (data) {
        this.subject.next(data);
    };
    GlobalService.prototype.GetNotificationData = function () {
        return this.subject.asObservable();
    };
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n      <!-- <nav>\n          <ul>\n              <li>\n                  <a href=\"https://www.creative-tim.com\">\n                      Creative Tim\n                  </a>\n              </li>\n              <li>\n                  <a href=\"https://www.creative-tim.com/about-us\">\n                      About Us\n                  </a>\n              </li>\n              <li>\n                  <a href=\"http://blog.creative-tim.com\">\n                      Blog\n                  </a>\n              </li>\n              <li>\n                  <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                      MIT License\n                  </a>\n              </li>\n          </ul>\n      </nav> -->\n      <div class=\"copyright\">\n          &copy;\n        {{data | date: 'yyyy'}}, Developed by\n          <a href=\"https://www.linkedin.com/in/karanhinduja/\" target=\"_blank\">Santa</a>. &\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\">Banta</a>.\n      </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.data = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/layout.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/layout.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar> -->\n<app-notification [alerts]=alert></app-notification>\n<div class=\"page-header\" filter-color=\"orange\">\n    \n    <div class=\"page-header-image animation\" style=\"background-image:url(assets/img/bg7.jpg)\">\n    <div class=snowBg></div>\n    </div>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>\n</div>\n<!-- <div style=\"clear:both; height:400px;\" *ngIf=\"showOutterFooter\"></div>\n<app-footer *ngIf=\"showOutterFooter\"></app-footer> -->"

/***/ }),

/***/ "./src/app/shared/layout/layout.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/layout.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".animation {\n  opacity: 0;\n  -webkit-animation: fadeIn .35s ease 1.7s forwards;\n          animation: fadeIn .35s ease 1.7s forwards;\n  position: fixed; }\n\n.snowBg {\n  background-image: url(https://www.secretsantaorganizer.com/build/images/s1.4adb61ee.png), url(https://www.secretsantaorganizer.com/build/images/s2.5582bf49.png), url(https://www.secretsantaorganizer.com/build/images/s3.91271c34.png);\n  -webkit-animation: snow 10s linear infinite;\n          animation: snow 10s linear infinite;\n  height: 100%;\n  width: 100%; }\n\n@-webkit-keyframes snow {\n  0% {\n    background-position: 0 0,0 0,0 0; }\n  50% {\n    background-position: 500px 500px,100px 200px,-100px 150px; }\n  to {\n    background-position: 500px 1000px,200px 400px,-100px 300px; } }\n\n@keyframes snow {\n  0% {\n    background-position: 0 0,0 0,0 0; }\n  50% {\n    background-position: 500px 500px,100px 200px,-100px 150px; }\n  to {\n    background-position: 500px 1000px,200px 400px,-100px 300px; } }\n\n.page-header .container {\n  min-height: 100vh;\n  height: 100%; }\n\n.page-header {\n  min-height: 100vh;\n  height: 100%;\n  max-height: 100%; }\n\n::ng-deep ngb-alert.alert {\n  position: fixed;\n  width: 100%;\n  z-index: 9999;\n  top: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9FOlxcTFRJXFxTZWNyZXQgU2FudGEgUHJvamVjdFxcV2ViVUlQcm9qZWN0L3NyY1xcYXBwXFxzaGFyZWRcXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGlEQUF5QztVQUF6Qyx5Q0FBeUM7RUFDekMsZUFBYyxFQUFBOztBQUdsQjtFQUVJLHdPQUFzTztFQUN0TywyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFFSTtJQUFHLGdDQUErQixFQUFBO0VBQ2xDO0lBQUkseURBQXdELEVBQUE7RUFDNUQ7SUFBRywwREFBeUQsRUFBQSxFQUFBOztBQUpoRTtFQUVJO0lBQUcsZ0NBQStCLEVBQUE7RUFDbEM7SUFBSSx5REFBd0QsRUFBQTtFQUM1RDtJQUFHLDBEQUF5RCxFQUFBLEVBQUE7O0FBR2hFO0VBRUksaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFJaEI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFlLEVBQUE7O0FBSW5CO0VBRUksZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsTUFBSztFQUNMLE9BQU0sRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuaW1hdGlvbntcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAuMzVzIGVhc2UgMS43cyBmb3J3YXJkcztcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG59XHJcblxyXG4uc25vd0Jne1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy5zZWNyZXRzYW50YW9yZ2FuaXplci5jb20vYnVpbGQvaW1hZ2VzL3MxLjRhZGI2MWVlLnBuZyksdXJsKGh0dHBzOi8vd3d3LnNlY3JldHNhbnRhb3JnYW5pemVyLmNvbS9idWlsZC9pbWFnZXMvczIuNTU4MmJmNDkucG5nKSx1cmwoaHR0cHM6Ly93d3cuc2VjcmV0c2FudGFvcmdhbml6ZXIuY29tL2J1aWxkL2ltYWdlcy9zMy45MTI3MWMzNC5wbmcpO1xyXG4gICAgYW5pbWF0aW9uOiBzbm93IDEwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5Aa2V5ZnJhbWVzIHNub3dcclxue1xyXG4gICAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowIDAsMCAwLDAgMH1cclxuICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwMHB4IDUwMHB4LDEwMHB4IDIwMHB4LC0xMDBweCAxNTBweH1cclxuICAgIHRve2JhY2tncm91bmQtcG9zaXRpb246NTAwcHggMTAwMHB4LDIwMHB4IDQwMHB4LC0xMDBweCAzMDBweH1cclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyIHtcclxuLmNvbnRhaW5lcntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlcntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDoxMDAlO1xyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwIG5nYi1hbGVydC5hbGVydFxyXG57XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/layout/layout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/global.service */ "./src/app/services/global.service.ts");





var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router, element, location, gs) {
        var _this = this;
        this.router = router;
        this.element = element;
        this.location = location;
        this.gs = gs;
        this.showOutterFooter = false;
        this.subscription = this.gs.GetNotificationData().subscribe(function (res) {
            _this.alert = res;
        });
    }
    LayoutComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; })
            .subscribe(function (event) {
            var _location = event.url.split('/')[1];
            if (_location === 'Login' || _location === 'Registration') {
                _this.showOutterFooter = false;
            }
            else {
                _this.showOutterFooter = true;
            }
        });
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/shared/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/shared/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n      <div class=\"dropdown button-dropdown\">\n        <div ngbDropdown>\n          <a class=\"dropdown-toggle\" ngbDropdownToggle>\n              <span class=\"button-bar\"></span>\n              <span class=\"button-bar\"></span>\n              <span class=\"button-bar\"></span>\n          </a>\n           <div ngbDropdownMenu>\n             <a class=\"dropdown-header\">Master</a>\n             <a class=\"dropdown-item\" href=\"#\">Department Master</a>\n             <!-- <a class=\"dropdown-item\" href=\"#\">Another action</a>\n             <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n             <div class=\"dropdown-divider\"></div>\n             <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n             <div class=\"dropdown-divider\"></div>\n             <a class=\"dropdown-item\" href=\"#\">One more separated link</a> -->\n           </div>\n         </div>\n      </div>\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/index']\" placement=\"bottom\" ngbTooltip=\"Developed By Santa. & Banta.\">\n              <img src=\"assets/img/secretsanta.png\" alt=\"\">\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\n            <ul class=\"navbar-nav ml-auto\">\n              <!-- <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" target=\"_blank\">\n                      <i class=\"now-ui-icons design_vector\"></i>\n                      <p>Download</p>\n                  </a>\n              </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"https://creativetimofficial.github.io/now-ui-kit-angular/documentation/tutorial\" target=\"_blank\">\n                      <i class=\"now-ui-icons files_paper\"></i>\n                      <p>Documentation</p>\n                    </a>\n                </li> -->\n                <li class=\"nav-item\">\n                    <a class=\"nav-link btn btn-neutral\" href=\"https://www.creative-tim.com/product/now-ui-kit-pro-angular\" target=\"_blank\">\n                        <i class=\"now-ui-icons design_vector\"></i>\n                        <p>&nbsp; Start Matching</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" rel=\"tooltip\" title=\"Logout\" data-placement=\"bottom\" href=\"javascript:void();\" [routerLink]=\"['/Login']\">\n                    <i class=\"fas fa-sign-out-alt\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Logout</p>\n                  </a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                  <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\">\n                    <i class=\"fab fa-facebook-square\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\">\n                    <i class=\"fab fa-instagram\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                  </a>\n                </li> -->\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand img {\n  width: 100px; }\n\n::ng-deep .fas.fa-sign-out-alt {\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9FOlxcTFRJXFxTZWNyZXQgU2FudGEgUHJvamVjdFxcV2ViVUlQcm9qZWN0L3NyY1xcYXBwXFxzaGFyZWRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIGltZ3tcclxuICAgIHdpZHRoOjEwMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmZhcy5mYS1zaWduLW91dC1hbHQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*!

=========================================================
* Now UI Kit Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\LTI\Secret Santa Project\WebUIProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map