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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/link.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/link.service.ts ***!
  \******************************************/
/*! exports provided: LinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkService", function() { return LinkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var LinkService = /** @class */ (function () {
    function LinkService(http) {
        this.http = http;
        this.linksUrl = '/api/links';
    }
    LinkService.prototype.getLinks = function () {
        return this.http.get(this.linksUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getLinks', [])));
    };
    LinkService.prototype.getLink = function (id) {
        var url = this.linksUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getLinks id=" + id)));
    };
    LinkService.prototype.successFetch = function (link) {
        if (link) {
            this.showMessage("Fetched Link: " + link.displayedName, 'success');
        }
    };
    LinkService.prototype.addLink = function (link) {
        var _this = this;
        return this.http.post(this.linksUrl, link, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (link) { return _this.showMessage("added Link " + link.displayedName, 'success'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addLink')));
    };
    LinkService.prototype.updateLink = function (link) {
        var _this = this;
        return this.http.put(this.linksUrl, link, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.showMessage("updated link " + link.displayedName, 'success'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateLink')));
    };
    LinkService.prototype.deleteLink = function (link) {
        var _this = this;
        var url = this.linksUrl + "/" + link.id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.showMessage("deleted link " + link.displayedName, 'warning'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteLink')));
    };
    LinkService.prototype.showMessage = function (message, type) {
        //toastr.options.timeOut = 0; // How long the toast will display without user interaction
        //toastr.options.extendedTimeOut = 0; // How long the toast will display after a user hovers over it
        toastr.options.positionClass = 'toast-top-center';
        toastr.clear();
        switch (type) {
            case 'success':
                toastr.success(message, 'Success');
                break;
            case 'warning':
                toastr.warning(message, 'Warning');
                break;
            case 'error':
                toastr.error(message, 'Error');
                break;
        }
    };
    LinkService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.showMessage(error, 'error');
            console.log(error);
            //this.log('${operation} failed: ${error.message}');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    LinkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LinkService);
    return LinkService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.banner-image{\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n.well{\r\n  margin:0;\r\n  padding: 0;\r\n}\r\n\r\n.navbar{\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.navbar-nav{\r\n  padding-left: 50px;\r\n}\r\n\r\n.navbar-brand{\r\n  font-size: 20px;\r\n}\r\n\r\n.main-container{\r\n  padding-top: 5px;\r\n}\r\n\r\nfooter{\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n  <img src=\"./assets/treebanner.png\" class=\"banner-image\">\n</div>\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/dashboard\">\n        <i class=\"fa fa-gears\"></i>\n        Sandbox\n      </a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a routerLink=\"/dashboard\">Home</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <div class=\"main-container\">\n    <div class=\"col-sm-2\">\n      <app-links></app-links>\n    </div>\n    <div class=\"col-sm-10 \">\n      <router-outlet></router-outlet>\n    </div>\n\n  </div>\n</div>\n\n  <footer class=\"text-center\">\n      Sandbox &copy; {{year}}\n  </footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_link_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/link.service */ "./src/app/Services/link.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.title = 'Sanbox';
        this.year = this.getYear();
    }
    AppComponent.prototype.getYear = function () {
        var d = new Date();
        var result = d.getFullYear().toString();
        return result;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_link_service__WEBPACK_IMPORTED_MODULE_1__["LinkService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/links/links.component */ "./src/app/components/links/links.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/app-routing.module */ "./src/app/modules/app-routing.module.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/todo/todo.component */ "./src/app/components/todo/todo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _components_links_links_component__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"],
                _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_8__["TodoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well text-center\">\n  Welcome to the Sandbox\n</div>\n<div>\n    here are some things todo:\n    <app-todo></app-todo>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/links/links.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/links/links.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnAdd{\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.link-name{\r\n    cursor: pointer;\r\n}\r\n\r\n.glyphicon-edit{\r\n    float: right;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.glyphicon-trash{\r\n    float: right;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n#tbUrl{\r\n    margin-left: 36px;\r\n}\r\n\r\n#tbCreateTimestamp{\r\n    margin-right: 50px;\r\n}\r\n\r\n#lblError{\r\n    margin-left: 10px;\r\n}\r\n\r\n.panel-body{\r\n    padding: 3px;\r\n}\r\n\r\n.panel-heading{\r\n    cursor: pointer;\r\n}\r\n\r\n#tbUrl {\r\n    margin-left: 0px;\r\n}"

/***/ }),

/***/ "./src/app/components/links/links.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/links/links.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div *ngIf=\"!links\">\n    <i class=\"fa fa-gear fa-spin\" style=\"font-size:24px\"></i>\n    loading Links...\n  </div>\n  <div *ngIf=\"links\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\"#links-list\">\n        Links\n        <span class=\"badge\">{{links.length}}</span>\n      </div>\n      <div class=\"panel-body collapse in\" id=\"links-list\">\n        <div class=\"list-group\">\n          <a *ngFor=\"let link of links\" class=\"list-group-item\">\n            <span class=\"link-name\" (click)='openLink(link.url)'>{{link.displayedName}}</span>\n            <i class=\"glyphicon glyphicon-trash\" (click)='delete(link.id)' data-toggle=\"modal\" data-target=\"#deleteModal\"></i>\n            <i class=\"glyphicon glyphicon-edit\" (click)='edit(link.id)' data-toggle=\"modal\" data-target=\"#editModal\"></i>\n          </a>\n        </div>\n        <a class=\"btn btn-primary btnAdd\" data-toggle=\"modal\" data-target=\"#addModal\">\n          <i class=\"glyphicon glyphicon-plus\"></i>\n          Add\n        </a>\n      </div>\n    </div>\n    \n  </div>\n</div>\n\n<!--AddModal-->\n<div id=\"addModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <form #addForm=\"ngForm\" novalidate>\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Add Link</h4>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"addMain form-group \">\n            <div class=\"form-inline\" [class.has-error]=\"Name.invalid && Name.dirty\">\n              <label for=\"tbAddName\" class=\"col-md-3 control-label\">Name: </label>\n              <input type=\"text\" [(ngModel)]=\"name\" #Name=\"ngModel\" name=\"name\" class=\"form-control\" id=\"tbAddName\" required>\n            </div>\n            <div *ngIf=\"Name.invalid && Name.dirty\" class=\"text-danger col-md-offset-3\">\n              * A Name value is required.\n            </div>\n            <div class=\"form-inline\" [class.has-error]=\"URL.invalid && URL.dirty\">\n              <label for=\"tbAddUrl\" class=\"col-md-3 control-label\">Url: </label>\n              <input type=\"text\" [(ngModel)]=\"url\" #URL=\"ngModel\" name=\"url\" class=\"form-control\" id=\"tbAddUrl\" required>\n            </div>\n            <div *ngIf=\"URL.invalid && URL.dirty\" class=\"text-danger col-md-offset-3\">\n              * A URL value is required.\n            </div>\n            <div class=\"form-inline\" [class.has-error]=\"Sort.invalid && Sort.dirty\">\n              <label for=\"addSort\" class=\"col-md-3 control-label\">Sort:</label>\n              <input type=\"number\" [(ngModel)]=\"sort\" #Sort=\"ngModel\" name=\"sort\" class=\"form-control\" id=\"tbAddSort\" required>\n            </div>\n            <div *ngIf=\"Sort.invalid && Sort.dirty\" class=\"text-danger col-md-offset-3\">\n              * A Sort value is required.\n            </div>\n          </div>\n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-primary add col-md-offset-8\" [disabled]=\"addForm.invalid\" (click)=\"add()\" data-dismiss=\"modal\">\n            <i class=\"glyphicon glyphicon-plus\"></i>\n            Add\n          </button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"cancel()\">\n            <i class=\"fa fa-close\"></i>\n            Cancel\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!--Edit Modal-->\n<div id=\"editModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <form #editForm=\"ngForm\" novalidate>\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Update Link</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"EditMain\" *ngIf=\"selectedLink\">\n            <div class=\"form-group\">\n              <div class=\"form-inline\">\n                <label for=\"tbId\" class=\"col-md-4\">Id: </label>\n                <input type=\"text\" name=\"id\" [(ngModel)]=\"selectedLink.id\" class=\"form-control disabled\" id=\"tbId\" disabled>\n              </div>\n              <div class=\"form-inline left\" [class.has-error]=\"EditName.invalid && EditName.dirty\">\n                <label for=\"tbName\" class=\"col-md-4\">Name: </label>\n                <input type=\"text\" #EditName=\"ngModel\" name=\"name\" [(ngModel)]=\"selectedLink.displayedName\" class=\"form-control\" id=\"tbName\"\n                  required>\n              </div>\n              <div *ngIf=\"EditName.invalid && EditName.dirty\" class=\"text-danger col-md-offset-3\">\n                * A Name value is required.\n              </div>\n              <div class=\"form-inline\" [class.has-error]=\"EditUrl.invalid && EditUrl.dirty\">\n                <label for=\"tbUrl\" class=\"col-md-4\">Url: </label>\n                <input type=\"text\" #EditUrl=\"ngModel\" name=\"url\" [(ngModel)]=\"selectedLink.url\" class=\"form-control\" id=\"tbUrl\" required>\n                <input type=\"button\" data-toggle=\"tooltip\" [disabled]=\"EditUrl.invalid\" title=\"View...\" class=\"btn btn-default\" (click)=\"openLink(selectedLink.url)\"\n                  value=\"...\">\n              </div>\n              <div *ngIf=\"EditUrl.invalid && EditUrl.dirty\" class=\"text-danger col-md-offset-3\">\n                * A Url value is required.\n              </div>\n              <div class=\"form-inline\">\n                <label for=\"tbCreateTimestamp\" class=\"col-md-4\">Create Timestamp: </label>\n                <input type=\"text\" name=\"createTimestamp\" [(ngModel)]=\"selectedLink.createTimestamp\" class=\"form-control\" id=\"tbCreateTimestamp\"\n                  disabled>\n              </div>\n              <div class=\"form-inline\" [class.has-error]=\"EditSort.invalid && EditSort.dirty\">\n                <label for=\"tbSort\" class=\"col-md-4 control-label\">Sort:</label>\n                <input type=\"number\" #EditSort=\"ngModel\" name=\"editSort\" [(ngModel)]=\"selectedLink.sort\" class=\"form-control\" id=\"tbEditSort\"\n                  required>\n              </div>\n              <div *ngIf=\"EditSort.invalid && EditSort.dirty\" class=\"text-danger col-md-offset-3\">\n                * A sort order is required.\n              </div>\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\" name=\"visible\" disabled [(ngModel)]=\"selectedLink.visible\"> Visible\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\" *ngIf=\"selectedLink\">\n          <button class=\"btn btn-primary\" [disabled]=\"editForm.invalid\" data-dismiss=\"modal\" (click)=\"update()\">\n              <i class=\"glyphicon glyphicon-save\"></i>\n            Update\n          </button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n            <i class=\"fa fa-close\"></i>\n            Cancel\n          </button>\n        </div>\n      </div>\n    </form>\n\n  </div>\n</div>\n\n<!--Delete Modal-->\n<div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Delete Link</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"deleteMain\">\n          <label>Are you sure that you want to delete this link?</label>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"confirmDelete()\">\n          <i class=\"fa fa-trash\"></i>\n          Yes\n        </button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n          <i class=\"fa fa-close\"></i>\n          No\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/links/links.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/links/links.component.ts ***!
  \*****************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_link_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/link.service */ "./src/app/Services/link.service.ts");
/* harmony import */ var _models_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/links */ "./src/app/models/links.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinksComponent = /** @class */ (function () {
    function LinksComponent(service) {
        this.service = service;
    }
    LinksComponent.prototype.ngOnInit = function () {
        this.getLinks();
    };
    LinksComponent.prototype.getLinks = function () {
        var _this = this;
        this.service.getLinks()
            .subscribe(function (links) { return _this.links = links; });
    };
    LinksComponent.prototype.openLink = function (url) {
        window.open(url, '_blank');
    };
    LinksComponent.prototype.edit = function (id) {
        var _this = this;
        //alert('Edit LinkId: ' + id);
        this.service.getLink(id).subscribe(function (link) { return _this.selectedLink = link; });
    };
    LinksComponent.prototype.update = function () {
        var _this = this;
        this.service.updateLink(this.selectedLink).subscribe(function (link) { return _this.getLinks(); });
    };
    LinksComponent.prototype.delete = function (id) {
        var _this = this;
        //alert('Delete LinkId: ' + id);
        this.service.getLink(id).subscribe(function (link) { return _this.selectedLink = link; });
    };
    LinksComponent.prototype.confirmDelete = function () {
        var _this = this;
        this.service.deleteLink(this.selectedLink).subscribe(function () { return _this.getLinks(); });
    };
    LinksComponent.prototype.add = function () {
        var _this = this;
        this.name = this.name.trim();
        this.url = this.url.trim();
        if (!this.name || !this.url || !this.sort) {
            alert("Add fail: Name, Url or Sort are empty.");
            return;
        }
        var link = new _models_links__WEBPACK_IMPORTED_MODULE_2__["Links"]();
        link.displayedName = this.name;
        link.url = this.url;
        link.sort = this.sort;
        this.service.addLink(link).subscribe(function () { return _this.getLinks(); });
    };
    LinksComponent.prototype.cancel = function () {
        this.name = "";
        this.url = "";
    };
    LinksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-links',
            template: __webpack_require__(/*! ./links.component.html */ "./src/app/components/links/links.component.html"),
            styles: [__webpack_require__(/*! ./links.component.css */ "./src/app/components/links/links.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_link_service__WEBPACK_IMPORTED_MODULE_1__["LinkService"]])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./src/app/components/todo/todo.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/todo/todo.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/todo/todo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/todo/todo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <i class=\"fa fa-gear fa-spin\" style=\"font-size:24px\"></i>\n    loading Todo...\n  </div>\n  <div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading text-left\">\n        Todo\n      </div>\n      <div class=\"panel-body\">\n        Todo\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/todo/todo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/todo/todo.component.ts ***!
  \***************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/components/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/components/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/models/links.ts":
/*!*********************************!*\
  !*** ./src/app/models/links.ts ***!
  \*********************************/
/*! exports provided: Links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
var Links = /** @class */ (function () {
    function Links() {
    }
    return Links;
}());



/***/ }),

/***/ "./src/app/modules/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lacric\Documents\ProjectsLocal\Sandbox\Sandbox\web\sandbox\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map