(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _meevee_meevee_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meevee/meevee.module */ "./src/meevee/meevee.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_meevee_meevee_module__WEBPACK_IMPORTED_MODULE_2__["MeeveeModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/meevee/components/delete-confirmation/delete-confirmation.component.ts":
/*!************************************************************************************!*\
  !*** ./src/meevee/components/delete-confirmation/delete-confirmation.component.ts ***!
  \************************************************************************************/
/*! exports provided: DeleteConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConfirmationComponent", function() { return DeleteConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class DeleteConfirmationComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    onCancel() {
        this.dialogRef.close();
    }
    onDelete() {
        this.dialogRef.close("delete");
    }
}
DeleteConfirmationComponent.ɵfac = function DeleteConfirmationComponent_Factory(t) { return new (t || DeleteConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
DeleteConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteConfirmationComponent, selectors: [["app-delete-confirmation"]], decls: 10, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-raised-button", "", "mat-dialog-close", "", "cdkFocusInitial", "", 2, "background-color", "red", "color", "white", 3, "click"]], template: function DeleteConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure you want to delete this event?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This action cannot be undone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmationComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmationComponent_Template_button_click_8_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".mat-dialog-title[_ngcontent-%COMP%] {\n  padding-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tZWV2ZWUvY29tcG9uZW50cy9kZWxldGUtY29uZmlybWF0aW9uL2RlbGV0ZS1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9tZWV2ZWUvY29tcG9uZW50cy9kZWxldGUtY29uZmlybWF0aW9uL2RlbGV0ZS1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-confirmation',
                templateUrl: './delete-confirmation.component.html',
                styleUrls: ['./delete-confirmation.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/meevee/components/event-details/event-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/meevee/components/event-details/event-details.component.ts ***!
  \************************************************************************/
/*! exports provided: EventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return EventDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var src_meevee_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/meevee/services/event.service */ "./src/meevee/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");











const _c0 = ["deleteButton"];
class EventDetailsComponent {
    constructor(dialogRef, eventService, router, renderer, data) {
        this.dialogRef = dialogRef;
        this.eventService = eventService;
        this.router = router;
        this.renderer = renderer;
        this.data = data;
        this.event = this.eventService.getEvent(this.data);
    }
    get recurrence() {
        if (this.event.recurrence === 'none') {
            return 'None';
        }
        return 'Every ' + this.event.recurrence;
    }
    get minutesBeforeOpening() {
        const mbo = this.event.minutesBeforeOpening;
        return mbo + (mbo === 1 ? ' Minute' : ' Minutes');
    }
    get deactivated() {
        return this.event.deactivated === true ? 'Inactive' : 'Active';
    }
    get time() {
        const date = new Date(this.event.time);
        const month = date.toLocaleString('default', { month: 'short' });
        const day = date.getDay();
        const year = date.getFullYear();
        // @ts-ignore
        const time = date.toLocaleString('default', { timeStyle: 'short' });
        return `${month} ${day}, ${year} at ${time}`;
    }
    close() {
        this.dialogRef.close();
    }
    editEvent() {
        this.router.navigate([`/edit-event/${this.event.id}`]);
        this.close();
    }
    showDeleteConfirmation($event) {
        $event.stopPropagation();
        this.renderer.setStyle(this.delBtnRef.nativeElement, 'transform', 'rotateX(180deg)');
    }
    unshowDeleteConfirmation($event) {
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"].isEmpty($event)) {
            $event.stopPropagation();
        }
        this.renderer.setStyle(this.delBtnRef.nativeElement, 'transform', 'rotateX(0deg)');
    }
    duplicateEvent() {
        const newId = this.eventService.duplicateEvent(this.event);
        this.router.navigate([`/edit-event/${newId}`]);
        this.close();
    }
    deleteEvent($event) {
        $event.stopPropagation();
        this.dialogRef.close('delete');
    }
}
EventDetailsComponent.ɵfac = function EventDetailsComponent_Factory(t) { return new (t || EventDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_meevee_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
EventDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventDetailsComponent, selectors: [["app-event-details"]], viewQuery: function EventDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.delBtnRef = _t.first);
    } }, decls: 64, vars: 9, consts: [[1, "event-details-container"], ["mat-dialog-content", "", 1, "content"], [1, "menu-button"], ["mat-icon-button", "", "aria-label", "Event Menu", 3, "matMenuTriggerFor", "menuClosed"], ["xPosition", "before"], ["eventMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 1, "delete-button", 3, "click"], [1, "delete-card-container"], ["deleteButton", ""], [1, "delete-front"], [1, "delete-back"], [1, "delete-confirmation-buttons"], ["mat-mini-fab", "", "color", "primary", 1, "delete-confirmation-button", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "delete-confirmation-button", 3, "click"], [1, "name"], [1, "desc"], [1, "event-details-field"], ["target", "_blank", 1, "left-to-right-underline", "ellipsis", 3, "href"], ["mat-dialog-actions", "", 1, "actions"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function EventDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuClosed", function EventDetailsComponent_Template_button_menuClosed_3_listener($event) { return ctx.unshowDeleteConfirmation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_8_listener() { return ctx.editEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_12_listener() { return ctx.duplicateEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Duplicate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_16_listener($event) { return ctx.showDeleteConfirmation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_25_listener($event) { return ctx.unshowDeleteConfirmation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_28_listener($event) { return ctx.deleteEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Recurrence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Minutes before opening");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_62_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.event.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recurrence);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.minutesBeforeOpening);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.deactivated);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: [".fixed-floating-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 15px;\n  right: 20px;\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.3);\n  transition: box-shadow 0.5s;\n}\n.fixed-floating-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.7);\n}\n.left-to-right-underline[_ngcontent-%COMP%] {\n  position: relative;\n  background: none;\n  color: black;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  text-decoration: none;\n}\n.left-to-right-underline[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #020070;\n  visibility: hidden;\n  transition: all 0.3s ease-in-out;\n}\n.left-to-right-underline[_ngcontent-%COMP%]:hover {\n  color: #020070;\n}\n.left-to-right-underline[_ngcontent-%COMP%]:hover:before {\n  visibility: visible;\n  width: 100%;\n}\n.slide-in-out-container[_ngcontent-%COMP%]   .slide-in-out-element[_ngcontent-%COMP%] {\n  transform: translateX(100px);\n  transition: transform 0.3s;\n  transition-delay: 0.1s;\n}\n.slide-in-out-container[_ngcontent-%COMP%]:hover   .slide-in-out-element[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\nhtml[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nhtml.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: static;\n}\nhtml[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 300px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background: linear-gradient(0deg, #020070 0%, #8101fe 60%, #020070 100%);\n  margin: 10px;\n}\n.meevee-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  top: 0px;\n  left: 0px;\n  font-size: 3rem;\n  letter-spacing: 4.6px;\n  word-spacing: 2px;\n}\n.meevee-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n.meevee-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  color: white;\n}\n.meevee-header[_ngcontent-%COMP%]   .back-button-disabled[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.main-content[_ngcontent-%COMP%] {\n  padding-bottom: 55px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 200;\n  margin-bottom: 20px;\n  color: #d6d3d3;\n}\n.form-hint[_ngcontent-%COMP%] {\n  color: #a0a0a0;\n  font-size: 0.75rem;\n  font-weight: 100;\n}\n.ellipsis[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  white-space: nowrap !important;\n  text-overflow: ellipsis !important;\n  width: auto !important;\n}\n  .mat-dialog-container {\n  padding-top: 0;\n}\n.menu-title[_ngcontent-%COMP%] {\n  margin: 0 16px;\n  font-weight: 400;\n  font-size: 1rem;\n  text-align: start;\n  color: rgba(0, 0, 0, 0.87);\n  border-bottom: solid 1px rgba(0, 0, 0, 0.87);\n}\n.mat-dialog-content[_ngcontent-%COMP%] {\n  word-break: break-word;\n  max-height: 250px;\n  min-width: 220px;\n  position: relative;\n  padding-top: 24px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.actions[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n  width: 85%;\n}\n.desc[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.menu-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 14px;\n}\n.event-details-field[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.event-details-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .event-details-field[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n  font-size: 1rem;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.event-details-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #242424;\n  font-weight: 200;\n}\n.delete-button[_ngcontent-%COMP%] {\n  position: relative;\n}\n.delete-button[_ngcontent-%COMP%]   .delete-card-container[_ngcontent-%COMP%] {\n  transition: transform 0.5s;\n  transform-style: preserve-3d;\n  position: absolute;\n  top: 0;\n}\n.delete-button[_ngcontent-%COMP%]   .delete-card-container[_ngcontent-%COMP%]   .delete-front[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n}\n.delete-button[_ngcontent-%COMP%]   .delete-card-container[_ngcontent-%COMP%]   .delete-back[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform: rotateX(180deg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n}\n.delete-button[_ngcontent-%COMP%]   .delete-card-container[_ngcontent-%COMP%]   .delete-back[_ngcontent-%COMP%]   .delete-confirmation-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50%;\n}\n.delete-button[_ngcontent-%COMP%]   .delete-card-container[_ngcontent-%COMP%]   .delete-back[_ngcontent-%COMP%]   .delete-confirmation-buttons[_ngcontent-%COMP%]   .delete-confirmation-button[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-right: 10px;\n}\n.delete-button[_ngcontent-%COMP%]   .delete-card-container[_ngcontent-%COMP%]   .delete-back[_ngcontent-%COMP%]   .delete-confirmation-buttons[_ngcontent-%COMP%]   .delete-confirmation-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX2J1dHRvbnMuc2NzcyIsInNyYy9tZWV2ZWUvY29tcG9uZW50cy9ldmVudC1kZXRhaWxzL2V2ZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL19hbmltYXRpb25zLnNjc3MiLCJzcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtFQUFBO0VBQ0EsMkJBQUE7QUNGRjtBREdFO0VBQ0UsK0VBQUE7QUNESjtBQ05BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRFNGO0FDUEU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EseUJDU2dCO0VEUmhCLGtCQUFBO0VBQ0EsZ0NBQUE7QURTSjtBQ05FO0VBQ0UsY0NHZ0I7QUZLcEI7QUNMRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBRE9KO0FDQ0U7RUFDRSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QURFSjtBQ0dFO0VBQ0Usd0JBQUE7QURBSjtBRzdDQTtFQUNFLGVBQUE7QUhnREY7QUc5Q0U7RUFDRSxnQkFBQTtBSGdESjtBRzdDRTtFQUNFLFNBQUE7RUFDQSxZRFhZO0VDWVosaURBQUE7RUFDQSx3RUFBQTtFQUNBLFlBQUE7QUgrQ0o7QUczQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZURiWTtFQ2NaLHFCQUFBO0VBQ0EsaUJBQUE7QUg2Q0Y7QUczQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBSDZDSjtBRzFDRTtFQUNFLFlBQUE7QUg0Q0o7QUd6Q0U7RUFDRSxrQkFBQTtBSDJDSjtBR3ZDQTtFQUNFLG9CQUFBO0FIMENGO0FHdkNBO0VBQ0UsZUR0Q1U7RUN1Q1YsZ0JEakNhO0VDa0NiLG1CQUFBO0VBQ0EsY0Q1Qlc7QUZzRWI7QUd2Q0E7RUFDRSxjRDdCVztFQzhCWCxrQkRsRFM7RUNtRFQsZ0JEMUNRO0FGb0ZWO0FHdkNBO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7QUgwQ0Y7QUd2Q0E7RUFDRSxjQUFBO0FIMENGO0FHdkNBO0VBQ0UsY0FBQTtFQUNBLGdCRHZEYTtFQ3dEYixlRG5FVTtFQ29FVixpQkFBQTtFQUNBLDBCRG5EWTtFQ29EWiw0Q0FBQTtBSDBDRjtBQXZIQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUEwSEY7QUF2SEE7RUFDRSxlQUFBO0FBMEhGO0FBdkhBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQTBIRjtBQXZIQTtFQUNFLGlCRVRTO0VGVVQsZ0JBQUE7RUFDQSxVQUFBO0FBMEhGO0FBdkhBO0VBQ0UsZUVqQlU7QUYySVo7QUF2SEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBMEhGO0FBdkhBO0VBQ0UsZ0JBQUE7QUEwSEY7QUF6SEU7RUFDRSxTQUFBO0VBQ0EsZ0JFbEJNO0VGbUJOLGVFL0JRO0VGZ0NSLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUEySEo7QUF4SEU7RUFDRSxjRXBCUztFRnFCVCxnQkU3Qlc7QUZ1SmY7QUF0SEE7RUFDRSxrQkFBQTtBQXlIRjtBQXZIRTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUF5SEo7QUF2SEk7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7QUF5SE47QUF0SEk7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQXdITjtBQXRITTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQXdIUjtBQXJIVTtFQUNFLGtCQUFBO0FBdUhaO0FBcEhVO0VBQ0UsU0FBQTtBQXNIWiIsImZpbGUiOiJzcmMvbWVldmVlL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlscy9ldmVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICoqIEZpeGVkIGZsb2F0aW5nIGJ1dHRvbiAqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLmZpeGVkLWZsb2F0aW5nLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTVweDtcclxuICByaWdodDogMjBweDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjVzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC44KSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB9XHJcbn1cclxuIiwiLmZpeGVkLWZsb2F0aW5nLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxNXB4O1xuICByaWdodDogMjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40KSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xufVxuLmZpeGVkLWZsb2F0aW5nLWJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuOCksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5sZWZ0LXRvLXJpZ2h0LXVuZGVybGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmxlZnQtdG8tcmlnaHQtdW5kZXJsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjAwNzA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubGVmdC10by1yaWdodC11bmRlcmxpbmU6aG92ZXIge1xuICBjb2xvcjogIzAyMDA3MDtcbn1cbi5sZWZ0LXRvLXJpZ2h0LXVuZGVybGluZTpob3ZlcjpiZWZvcmUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNsaWRlLWluLW91dC1jb250YWluZXIgLnNsaWRlLWluLW91dC1lbGVtZW50IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbi5zbGlkZS1pbi1vdXQtY29udGFpbmVyOmhvdmVyIC5zbGlkZS1pbi1vdXQtZWxlbWVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmh0bWwuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5odG1sIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAyMDA3MCAwJSwgIzgxMDFmZSA2MCUsICMwMjAwNzAgMTAwJSk7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1lZXZlZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDQuNnB4O1xuICB3b3JkLXNwYWNpbmc6IDJweDtcbn1cbi5tZWV2ZWUtaGVhZGVyIGltZyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG4ubWVldmVlLWhlYWRlciAuYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWVldmVlLWhlYWRlciAuYmFjay1idXR0b24tZGlzYWJsZWQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcbn1cblxuLnBhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjZDZkM2QzO1xufVxuXG4uZm9ybS1oaW50IHtcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmVsbGlwc2lzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLm1lbnUtdGl0bGUge1xuICBtYXJnaW46IDAgMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG1pbi13aWR0aDogMjIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYWN0aW9ucyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogODUlO1xufVxuXG4uZGVzYyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAxNHB4O1xufVxuXG4uZXZlbnQtZGV0YWlscy1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZXZlbnQtZGV0YWlscy1maWVsZCBwLCAuZXZlbnQtZGV0YWlscy1maWVsZCBhIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uZXZlbnQtZGV0YWlscy1maWVsZCBsYWJlbCB7XG4gIGNvbG9yOiAjMjQyNDI0O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kZWxldGUtYnV0dG9uIC5kZWxldGUtY2FyZC1jb250YWluZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG4uZGVsZXRlLWJ1dHRvbiAuZGVsZXRlLWNhcmQtY29udGFpbmVyIC5kZWxldGUtZnJvbnQge1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5kZWxldGUtYnV0dG9uIC5kZWxldGUtY2FyZC1jb250YWluZXIgLmRlbGV0ZS1iYWNrIHtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNDhweDtcbn1cbi5kZWxldGUtYnV0dG9uIC5kZWxldGUtY2FyZC1jb250YWluZXIgLmRlbGV0ZS1iYWNrIC5kZWxldGUtY29uZmlybWF0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MCU7XG59XG4uZGVsZXRlLWJ1dHRvbiAuZGVsZXRlLWNhcmQtY29udGFpbmVyIC5kZWxldGUtYmFjayAuZGVsZXRlLWNvbmZpcm1hdGlvbi1idXR0b25zIC5kZWxldGUtY29uZmlybWF0aW9uLWJ1dHRvbjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZGVsZXRlLWJ1dHRvbiAuZGVsZXRlLWNhcmQtY29udGFpbmVyIC5kZWxldGUtYmFjayAuZGVsZXRlLWNvbmZpcm1hdGlvbi1idXR0b25zIC5kZWxldGUtY29uZmlybWF0aW9uLWJ1dHRvbiBtYXQtaWNvbiB7XG4gIG1hcmdpbjogMDtcbn0iLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqKiBsZWZ0LXRvLXJpZ2h0LXVuZGVybGluZSAqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4ubGVmdC10by1yaWdodC11bmRlcmxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1lZXZlZS10aGVtZS1ibHVlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkbWVldmVlLXRoZW1lLWJsdWU7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyOmJlZm9yZSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICoqIFNsaWRlIGluIGFuZCBvdXQgKipcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKlxyXG4uc2xpZGUtaW4tb3V0LWNvbnRhaW5lciB7XHJcbiAgLnNsaWRlLWluLW91dC1lbGVtZW50IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjFzO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlLWluLW91dC1jb250YWluZXI6aG92ZXIge1xyXG4gIC5zbGlkZS1pbi1vdXQtZWxlbWVudCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG4vLyBzaXplc1xyXG4kcG9wb3Zlci13aWR0aDogMzAwcHg7XHJcbiRwb3BvdmVyLWhlaWdodDogNTAwcHg7XHJcblxyXG4vLyBmb250IHNpemVzXHJcbiRmcy14eHNtYWxsOiAuMjVyZW07XHJcbiRmcy14c21hbGw6IC41cmVtO1xyXG4kZnMtc21hbGw6IC43NXJlbTtcclxuJGZzLW1lZGl1bTogMXJlbTtcclxuJGZzLW1lZGl1bS1sYXJnZTogMS4yNXJlbTtcclxuJGZzLWxhcmdlOiAxLjVyZW07XHJcbiRmcy14bGFyZ2U6IDJyZW07XHJcbiRmcy14eGxhcmdlOiAyLjVyZW07XHJcbiRmcy14eHhsYXJnZTogM3JlbTtcclxuXHJcbi8vIGZvbnQgd2VpZ2h0c1xyXG4kZnctdGhpbjogMTAwO1xyXG4kZnctc2VtaS10aGluOiAyMDA7XHJcbiRmdy1yZWd1bGFyOiAzMDA7XHJcbiRmdy1zZW1pLWJvbGQ6IDQwMDtcclxuJGZ3LWJvbGQ6IDUwMDtcclxuXHJcbi8vIGNvbG9yc1xyXG4kbGlnaHQtYmx1ZTogcmdiYSgxOTEsIDIwNSwgMjIwLCAwLjU2OCk7XHJcbiRzZW1pLXdoaXRlOiByZ2IoMjE0LCAyMTEsIDIxMSk7XHJcbiRsZXNzLWJsYWNrOiByZ2IoMzYsIDM2LCAzNik7XHJcbiRzb3J0YS1ibGFjazogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuJGxpZ2h0LWdyZXk6IHJnYigxNjAsIDE2MCwgMTYwKTtcclxuJGxpZ2h0ZXItZ3JleTogcmdiKDE5NSwgMTk1LCAxOTUpO1xyXG4kbWVldmVlLXRoZW1lLWJsdWU6IHJnYmEoMiwwLDExMiwxKTtcclxuJG1lZXZlZS10aGVtZS1wdXJwbGU6IHJnYmEoMTI5LDEsMjU0LDEpO1xyXG4iLCJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ3NyYy9zdHlsZXMvYnV0dG9ucyc7XHJcbkBpbXBvcnQgJ3NyYy9zdHlsZXMvYW5pbWF0aW9ucyc7XHJcblxyXG5odG1sIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICYuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogJHBvcG92ZXItd2lkdGg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywkbWVldmVlLXRoZW1lLWJsdWUgMCUsICRtZWV2ZWUtdGhlbWUtcHVycGxlIDYwJSwgJG1lZXZlZS10aGVtZS1ibHVlIDEwMCUpO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1lZXZlZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG5cclxuICBmb250LXNpemU6ICRmcy14eHhsYXJnZTtcclxuICBsZXR0ZXItc3BhY2luZzogNC42cHg7XHJcbiAgd29yZC1zcGFjaW5nOiAycHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcblxyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuYmFjay1idXR0b24tZGlzYWJsZWQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDU1cHg7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxlIHtcclxuICBmb250LXNpemU6ICRmcy14bGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6ICRmdy1zZW1pLXRoaW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogJHNlbWktd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWhpbnQge1xyXG4gIGNvbG9yOiAkbGlnaHQtZ3JleTtcclxuICBmb250LXNpemU6ICRmcy1zbWFsbDtcclxuICBmb250LXdlaWdodDogJGZ3LXRoaW47XHJcbn1cclxuXHJcbi5lbGxpcHNpcyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4ubWVudS10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmdy1zZW1pLWJvbGQ7XHJcbiAgZm9udC1zaXplOiAkZnMtbWVkaXVtO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGNvbG9yOiAkc29ydGEtYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRzb3J0YS1ibGFjaztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-details',
                templateUrl: './event-details.component.html',
                styleUrls: ['./event-details.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: src_meevee_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { delBtnRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['deleteButton', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/meevee/components/event-form/event-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/meevee/components/event-form/event-form.component.ts ***!
  \******************************************************************/
/*! exports provided: EventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormComponent", function() { return EventFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");












function EventFormComponent_mat_slide_toggle_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-slide-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deactivate event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventFormComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deactivating an event will stop it from opening");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const urlRegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
class EventFormComponent {
    constructor() {
        this.onSave = (event) => { };
        this.saveButtonText = 'Save Event';
        this.canDeactivate = false;
        this.formStyle = 'standard';
        this.eventFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(urlRegExp)]),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            recurrence: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            minutesBeforeOpening: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            deactivated: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    get canSave() {
        return this.eventFormGroup.valid;
    }
    ngOnInit() {
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"].isEmpty(this.originalEvent)) {
            this.patchEvent(this.originalEvent);
        }
    }
    patchEvent(event) {
        this.eventFormGroup.controls.name.patchValue(event.name);
        this.eventFormGroup.controls.desc.patchValue(event.desc);
        this.eventFormGroup.controls.link.patchValue(event.link);
        this.eventFormGroup.controls.time.patchValue(event.time);
        this.eventFormGroup.controls.recurrence.patchValue(event.recurrence);
        this.eventFormGroup.controls.minutesBeforeOpening.patchValue(event.minutesBeforeOpening);
        this.eventFormGroup.controls.deactivated.patchValue(event.deactivated);
    }
    nameError() {
        if (this.eventFormGroup.controls.name.hasError('minlength')) {
            return 'Name must be 3 or more characters.';
        }
        return 'Name is required.';
    }
    linkError() {
        if (this.eventFormGroup.controls.link.hasError('pattern')) {
            return 'Meeting link must be a valid URL.';
        }
        return 'Meeting link is required.';
    }
    timeError() {
        return 'Meeting time is required.';
    }
    recurrenceError() {
        return 'Recurrence must be specified.';
    }
    minBeforeOpeningError() {
        return 'Minutes before opening must be specified.';
    }
    save() {
        const event = this.eventFormGroup.value;
        if (!this.canDeactivate) {
            event.deactivated = false;
        }
        this.onSave(event);
    }
}
EventFormComponent.ɵfac = function EventFormComponent_Factory(t) { return new (t || EventFormComponent)(); };
EventFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventFormComponent, selectors: [["event-form"]], inputs: { originalEvent: "originalEvent", onSave: "onSave", saveButtonText: "saveButtonText", canDeactivate: "canDeactivate" }, decls: 48, vars: 14, consts: [[3, "formGroup"], [3, "appearance"], ["matInput", "", "formControlName", "name", "placeholder", "My Example Event"], ["matInput", "", "formControlName", "desc", "placeholder", "My event that I have."], ["matInput", "", "type", "url", "formControlName", "link", "placeholder", "https://zoom.us/j/meeting-number"], ["matInput", "", "type", "datetime-local", "formControlName", "time", "placeholder", "5/10/2020 11:00 A"], [1, "radio-label"], ["matInput", "", "formControlName", "recurrence"], ["value", "day"], ["value", "week"], ["value", "month"], ["value", "none"], ["matInput", "", "type", "number", "formControlName", "minutesBeforeOpening", "placeholder", "5"], ["formControlName", "deactivated", 4, "ngIf"], ["class", "form-hint", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "save-button", 3, "disabled", "click"], ["formControlName", "deactivated"], [1, "form-hint"]], template: function EventFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Event Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Meeting Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Meeting Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Recurrence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-radio-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-radio-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Repeats every day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Repeats every week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-radio-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Repeats every month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-radio-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Does not repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Minutes before opening meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, EventFormComponent_mat_slide_toggle_44_Template, 2, 0, "mat-slide-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, EventFormComponent_div_45_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventFormComponent_Template_button_click_46_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.eventFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("appearance", ctx.formStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nameError());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("appearance", ctx.formStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("appearance", ctx.formStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.linkError());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("appearance", ctx.formStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeError());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("appearance", ctx.formStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.minBeforeOpeningError());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canDeactivate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canDeactivate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("disabled", !ctx.canSave);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.saveButtonText);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.radio-label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\nmat-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 5px 0;\n}\n\nmat-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.save-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tZWV2ZWUvY29tcG9uZW50cy9ldmVudC1mb3JtL2V2ZW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9tZWV2ZWUvY29tcG9uZW50cy9ldmVudC1mb3JtL2V2ZW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5yYWRpby1sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxubWF0LXJhZGlvLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'event-form',
                templateUrl: './event-form.component.html',
                styleUrls: ['./event-form.component.scss']
            }]
    }], function () { return []; }, { originalEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['originalEvent']
        }], onSave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['onSave']
        }], saveButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['saveButtonText']
        }], canDeactivate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['canDeactivate']
        }] }); })();


/***/ }),

/***/ "./src/meevee/meevee-material.module.ts":
/*!**********************************************!*\
  !*** ./src/meevee/meevee-material.module.ts ***!
  \**********************************************/
/*! exports provided: MeeveeMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeeveeMaterialModule", function() { return MeeveeMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");















const MODS = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
];
class MeeveeMaterialModule {
}
MeeveeMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MeeveeMaterialModule });
MeeveeMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MeeveeMaterialModule_Factory(t) { return new (t || MeeveeMaterialModule)(); }, imports: [[...MODS], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MeeveeMaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeeveeMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [...MODS],
                exports: [...MODS],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/meevee/meevee-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/meevee/meevee-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ROUTES, MeeveeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeeveeRoutingModule", function() { return MeeveeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _views_events_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/events/events */ "./src/meevee/views/events/events.ts");
/* harmony import */ var _views_add_event_add_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/add-event/add-event */ "./src/meevee/views/add-event/add-event.ts");
/* harmony import */ var _views_edit_event_edit_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/edit-event/edit-event */ "./src/meevee/views/edit-event/edit-event.ts");







const ROUTES = [
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'events', component: _views_events_events__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { path: 'add-event', component: _views_add_event_add_event__WEBPACK_IMPORTED_MODULE_3__["AddEvent"] },
    { path: 'edit-event/:id', component: _views_edit_event_edit_event__WEBPACK_IMPORTED_MODULE_4__["EditEvent"] },
];
class MeeveeRoutingModule {
}
MeeveeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MeeveeRoutingModule });
MeeveeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MeeveeRoutingModule_Factory(t) { return new (t || MeeveeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MeeveeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeeveeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/meevee/meevee.module.ts":
/*!*************************************!*\
  !*** ./src/meevee/meevee.module.ts ***!
  \*************************************/
/*! exports provided: MeeveeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeeveeModule", function() { return MeeveeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _meevee_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meevee-routing.module */ "./src/meevee/meevee-routing.module.ts");
/* harmony import */ var _meevee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meevee */ "./src/meevee/meevee.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _meevee_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meevee-material.module */ "./src/meevee/meevee-material.module.ts");
/* harmony import */ var _views_events_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/events/events */ "./src/meevee/views/events/events.ts");
/* harmony import */ var _views_add_event_add_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/add-event/add-event */ "./src/meevee/views/add-event/add-event.ts");
/* harmony import */ var _views_edit_event_edit_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/edit-event/edit-event */ "./src/meevee/views/edit-event/edit-event.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/storage/storage.service */ "./src/meevee/services/storage/storage.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/event.service */ "./src/meevee/services/event.service.ts");
/* harmony import */ var _services_alarm_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/alarm.service */ "./src/meevee/services/alarm.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/delete-confirmation/delete-confirmation.component */ "./src/meevee/components/delete-confirmation/delete-confirmation.component.ts");
/* harmony import */ var _components_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/event-details/event-details.component */ "./src/meevee/components/event-details/event-details.component.ts");
/* harmony import */ var _components_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/event-form/event-form.component */ "./src/meevee/components/event-form/event-form.component.ts");


















class MeeveeModule {
}
MeeveeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MeeveeModule, bootstrap: [_meevee__WEBPACK_IMPORTED_MODULE_3__["Meevee"]] });
MeeveeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MeeveeModule_Factory(t) { return new (t || MeeveeModule)(); }, providers: [
        _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageServiceProvider"],
        _services_event_service__WEBPACK_IMPORTED_MODULE_11__["EventServiceProvider"],
        _services_alarm_service__WEBPACK_IMPORTED_MODULE_12__["AlarmServiceProvider"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _meevee_routing_module__WEBPACK_IMPORTED_MODULE_2__["MeeveeRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _meevee_material_module__WEBPACK_IMPORTED_MODULE_5__["MeeveeMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MeeveeModule, { declarations: [_meevee__WEBPACK_IMPORTED_MODULE_3__["Meevee"],
        _views_events_events__WEBPACK_IMPORTED_MODULE_6__["Events"],
        _views_add_event_add_event__WEBPACK_IMPORTED_MODULE_7__["AddEvent"],
        _views_edit_event_edit_event__WEBPACK_IMPORTED_MODULE_8__["EditEvent"],
        _components_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_14__["DeleteConfirmationComponent"],
        _components_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_15__["EventDetailsComponent"],
        _components_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_16__["EventFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _meevee_routing_module__WEBPACK_IMPORTED_MODULE_2__["MeeveeRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _meevee_material_module__WEBPACK_IMPORTED_MODULE_5__["MeeveeMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MeeveeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _meevee__WEBPACK_IMPORTED_MODULE_3__["Meevee"],
                    _views_events_events__WEBPACK_IMPORTED_MODULE_6__["Events"],
                    _views_add_event_add_event__WEBPACK_IMPORTED_MODULE_7__["AddEvent"],
                    _views_edit_event_edit_event__WEBPACK_IMPORTED_MODULE_8__["EditEvent"],
                    _components_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_14__["DeleteConfirmationComponent"],
                    _components_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_15__["EventDetailsComponent"],
                    _components_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_16__["EventFormComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _meevee_routing_module__WEBPACK_IMPORTED_MODULE_2__["MeeveeRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _meevee_material_module__WEBPACK_IMPORTED_MODULE_5__["MeeveeMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                ],
                providers: [
                    _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageServiceProvider"],
                    _services_event_service__WEBPACK_IMPORTED_MODULE_11__["EventServiceProvider"],
                    _services_alarm_service__WEBPACK_IMPORTED_MODULE_12__["AlarmServiceProvider"],
                ],
                bootstrap: [_meevee__WEBPACK_IMPORTED_MODULE_3__["Meevee"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/meevee/meevee.ts":
/*!******************************!*\
  !*** ./src/meevee/meevee.ts ***!
  \******************************/
/*! exports provided: Meevee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meevee", function() { return Meevee; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






const _c0 = function (a0, a1) { return { "back-button": a0, "back-button-disabled": a1 }; };
class Meevee {
    constructor(router) {
        this.router = router;
    }
    toHome() {
        this.router.navigate(['/events']);
    }
}
Meevee.ɵfac = function Meevee_Factory(t) { return new (t || Meevee)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Meevee.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Meevee, selectors: [["meevee"]], decls: 7, vars: 4, consts: [[1, "meevee-header"], ["mat-icon-button", "", "disableRipple", "true", 3, "ngClass", "click"], ["alt", "logo", "src", "./../favicon.ico"], [1, "main-content"]], template: function Meevee_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Meevee_Template_button_click_1_listener() { return ctx.toHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.router.url !== "/events", ctx.router.url === "/events"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWVldmVlL21lZXZlZS5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Meevee, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "meevee",
                styleUrls: ["meevee.scss"],
                templateUrl: "meevee.html",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/meevee/services/alarm.service.ts":
/*!**********************************************!*\
  !*** ./src/meevee/services/alarm.service.ts ***!
  \**********************************************/
/*! exports provided: AlarmService, AlarmServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmService", function() { return AlarmService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmServiceProvider", function() { return AlarmServiceProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AlarmService {
    constructor() { }
    getAlarmName(event) {
        return `${event.name}-#${event.id}`;
    }
    createAlarm(event) {
        let alertTime = new Date(event.time);
        alertTime.setMinutes(alertTime.getMinutes() - event.minutesBeforeOpening);
        chrome.alarms.create(this.getAlarmName(event), { when: Date.parse(alertTime.toString()) });
    }
    updateAlarm(event) {
        chrome.alarms.clear(this.getAlarmName(event), () => this.createAlarm(event));
    }
    deleteAlarm(event) {
        chrome.alarms.clear(this.getAlarmName(event));
    }
    deleteAllAlarms() {
        chrome.alarms.clearAll();
    }
}
AlarmService.ɵfac = function AlarmService_Factory(t) { return new (t || AlarmService)(); };
AlarmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlarmService, factory: AlarmService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlarmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
const AlarmServiceProvider = { provide: AlarmService, useClass: AlarmService };


/***/ }),

/***/ "./src/meevee/services/event.service.ts":
/*!**********************************************!*\
  !*** ./src/meevee/services/event.service.ts ***!
  \**********************************************/
/*! exports provided: EventService, EventServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventServiceProvider", function() { return EventServiceProvider; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage/storage.service */ "./src/meevee/services/storage/storage.service.ts");





class EventService {
    constructor(storage) {
        this.storage = storage;
    }
    addEvent(event) {
        event.id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        this.storage.addEvent(event);
    }
    updateEvent(event) {
        this.storage.updateEvent(event);
    }
    getAllEvents() {
        return this.storage.getAllEvents();
    }
    deleteEvent(event) {
        this.storage.deleteEvent(event);
    }
    getEvent(eventId) {
        return this.storage.getEvent(eventId);
    }
    duplicateEvent(event) {
        const newEvent = lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](event);
        newEvent.id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        newEvent.name = 'Copy of ' + newEvent.name;
        this.storage.addEvent(newEvent);
        return newEvent.id;
    }
    saveNewOrderOfEvents(events) {
        this.storage.saveNewOrderOfEvents(events);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }]; }, null); })();
const EventServiceProvider = { provide: EventService, useClass: EventService };


/***/ }),

/***/ "./src/meevee/services/storage/storage.service.ts":
/*!********************************************************!*\
  !*** ./src/meevee/services/storage/storage.service.ts ***!
  \********************************************************/
/*! exports provided: StorageService, StorageServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageServiceProvider", function() { return StorageServiceProvider; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _alarm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../alarm.service */ "./src/meevee/services/alarm.service.ts");




class StorageService {
    constructor(alarmService) {
        this.alarmService = alarmService;
    }
    addEvent(newEvent) {
        chrome.storage.sync.get({ events: [] }, (result) => {
            let events = result.events;
            events.push(newEvent);
            chrome.storage.sync.set({ events }, () => {
                this.alarmService.createAlarm(newEvent);
            });
        });
        let events = JSON.parse(localStorage.getItem('events'));
        events = lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](events) ? [] : events;
        events.push(newEvent);
        localStorage.setItem('events', JSON.stringify(events));
    }
    getAllEvents() {
        return JSON.parse(localStorage.getItem('events'));
    }
    getEvent(eventId) {
        let events = JSON.parse(localStorage.getItem('events'));
        const target = lodash_es__WEBPACK_IMPORTED_MODULE_0__["find"](events, ({ id }) => id === eventId);
        if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](target)) {
            throw new Error(`No event with ID ${eventId}`);
        }
        return target;
    }
    updateEvent(event) {
        chrome.storage.sync.get({ events: [] }, (result) => {
            let newEvents = result.events;
            let index = lodash_es__WEBPACK_IMPORTED_MODULE_0__["findIndex"](newEvents, { id: event.id });
            if (index == -1) {
                throw new Error(`No event with ID ${event.id}`);
            }
            lodash_es__WEBPACK_IMPORTED_MODULE_0__["remove"](newEvents, { id: event.id });
            newEvents.splice(index, 0, event);
            chrome.storage.sync.set({ events: newEvents }, () => {
                this.alarmService.updateAlarm(event);
            });
        });
        let events = JSON.parse(localStorage.getItem('events'));
        let index = lodash_es__WEBPACK_IMPORTED_MODULE_0__["findIndex"](events, { id: event.id });
        if (index == -1) {
            throw new Error(`No event with ID ${event.id}`);
        }
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["remove"](events, { id: event.id });
        events.splice(index, 0, event);
        localStorage.setItem('events', JSON.stringify(events));
    }
    deleteEvent(event) {
        chrome.storage.sync.get({ events: [] }, (result) => {
            let newEvents = result.events;
            lodash_es__WEBPACK_IMPORTED_MODULE_0__["remove"](newEvents, {
                id: event.id
            });
            chrome.storage.sync.set({ events: newEvents }, () => {
                this.alarmService.deleteAlarm(event);
            });
        });
        let events = JSON.parse(localStorage.getItem('events'));
        const target = lodash_es__WEBPACK_IMPORTED_MODULE_0__["remove"](events, ({ id }) => id === event.id);
        if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](target)) {
            throw new Error(`No event with ID ${event.id}`);
        }
        localStorage.setItem('events', JSON.stringify(events));
    }
    deleteAllEvents() {
        chrome.storage.sync.set({ events: [] });
        chrome.storage.local.set({ events: [] });
        localStorage.setItem('events', JSON.stringify([]));
    }
    saveNewOrderOfEvents(eventsToSave) {
        chrome.storage.sync.set({ events: eventsToSave });
        localStorage.setItem('events', JSON.stringify(eventsToSave));
    }
    isDuplicateEventId(events, eventId) {
        const result = lodash_es__WEBPACK_IMPORTED_MODULE_0__["find"](events, ({ id }) => id === eventId);
        return lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](result) ? false : true;
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_alarm_service__WEBPACK_IMPORTED_MODULE_2__["AlarmService"])); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _alarm_service__WEBPACK_IMPORTED_MODULE_2__["AlarmService"] }]; }, null); })();
const StorageServiceProvider = { provide: StorageService, useClass: StorageService };


/***/ }),

/***/ "./src/meevee/views/add-event/add-event.ts":
/*!*************************************************!*\
  !*** ./src/meevee/views/add-event/add-event.ts ***!
  \*************************************************/
/*! exports provided: AddEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEvent", function() { return AddEvent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./src/meevee/services/event.service.ts");
/* harmony import */ var _components_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/event-form/event-form.component */ "./src/meevee/components/event-form/event-form.component.ts");





class AddEvent {
    constructor(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.title = 'Add Event';
        this.saveEvent = (event) => {
            this.eventService.addEvent(event);
            this.router.navigate(['/events']);
        };
    }
}
AddEvent.ɵfac = function AddEvent_Factory(t) { return new (t || AddEvent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"])); };
AddEvent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEvent, selectors: [["add-event"]], decls: 3, vars: 2, consts: [[1, "page-title"], [3, "onSave"]], template: function AddEvent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "event-form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("onSave", ctx.saveEvent);
    } }, directives: [_components_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_3__["EventFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWVldmVlL3ZpZXdzL2FkZC1ldmVudC9hZGQtZXZlbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEvent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "add-event",
                styleUrls: ["add-event.scss"],
                templateUrl: "add-event.html",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }]; }, null); })();


/***/ }),

/***/ "./src/meevee/views/edit-event/edit-event.ts":
/*!***************************************************!*\
  !*** ./src/meevee/views/edit-event/edit-event.ts ***!
  \***************************************************/
/*! exports provided: EditEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEvent", function() { return EditEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/storage/storage.service */ "./src/meevee/services/storage/storage.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/event.service */ "./src/meevee/services/event.service.ts");
/* harmony import */ var _components_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/event-form/event-form.component */ "./src/meevee/components/event-form/event-form.component.ts");









const urlRegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
let EditEvent = class EditEvent {
    constructor(router, storage, route, eventService) {
        this.router = router;
        this.storage = storage;
        this.route = route;
        this.eventService = eventService;
        this.title = 'Edit Event';
        this.saveEvent = (event) => {
            event.id = this.eventId;
            this.eventService.updateEvent(event);
            this.router.navigate(['/events']);
        };
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(params => {
            this.eventId = params['id'];
            this.originalEvent = this.storage.getEvent(this.eventId);
        })).subscribe();
    }
};
EditEvent.ɵfac = function EditEvent_Factory(t) { return new (t || EditEvent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"])); };
EditEvent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditEvent, selectors: [["edit-event"]], decls: 3, vars: 3, consts: [[1, "page-title"], ["canDeactivate", "true", 3, "onSave", "originalEvent"]], template: function EditEvent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "event-form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("onSave", ctx.saveEvent)("originalEvent", ctx.originalEvent);
    } }, directives: [_components_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_7__["EventFormComponent"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.radio-label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\nmat-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 5px 0;\n}\n\nmat-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tZWV2ZWUvdmlld3MvZWRpdC1ldmVudC9lZGl0LWV2ZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL21lZXZlZS92aWV3cy9lZGl0LWV2ZW50L2VkaXQtZXZlbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJhZGlvLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5tYXQtcmFkaW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4iXX0= */"] });
EditEvent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], EditEvent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditEvent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "edit-event",
                styleUrls: ["edit-event.scss"],
                templateUrl: "edit-event.html",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"] }]; }, null); })();


/***/ }),

/***/ "./src/meevee/views/events/events.ts":
/*!*******************************************!*\
  !*** ./src/meevee/views/events/events.ts ***!
  \*******************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var src_meevee_components_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/meevee/components/delete-confirmation/delete-confirmation.component */ "./src/meevee/components/delete-confirmation/delete-confirmation.component.ts");
/* harmony import */ var src_meevee_components_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/meevee/components/event-details/event-details.component */ "./src/meevee/components/event-details/event-details.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/event.service */ "./src/meevee/services/event.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");



















function Events_mat_list_item_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 21);
} }
function Events_mat_list_item_17_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r2.desc);
} }
function Events_mat_list_item_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Events_mat_list_item_17_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Events_mat_list_item_17_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const event_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.eventDetails(event_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, Events_mat_list_item_17_p_7_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Events_mat_list_item_17_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const event_r2 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.goToEditEvent(event_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Events_mat_list_item_17_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const event_r2 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.deleteConfirmation(event_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.emptyDesc(event_r2.desc));
} }
let Events = class Events {
    constructor(router, eventService, dialog) {
        this.router = router;
        this.eventService = eventService;
        this.dialog = dialog;
        this.events = [];
    }
    ngOnInit() {
        this.events = this.eventService.getAllEvents();
    }
    goToAddEvent() {
        this.router.navigate(['/add-event']);
    }
    emptyDesc(desc) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](desc);
    }
    deleteEvent(event) {
        this.eventService.deleteEvent(event);
    }
    deleteConfirmation(event) {
        const dialogRef = this.dialog.open(src_meevee_components_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["DeleteConfirmationComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            if (result == "delete") {
                this.deleteEvent(event);
                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                this.router.onSameUrlNavigation = 'reload';
                this.router.navigate(['/events']);
            }
        });
    }
    eventDetails(event) {
        const dialogRef = this.dialog.open(src_meevee_components_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_5__["EventDetailsComponent"], { data: event.id, autoFocus: false });
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'delete') {
                this.deleteEvent(event);
                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                this.router.onSameUrlNavigation = 'reload';
                this.router.navigate(['/events']);
            }
        });
    }
    goToEditEvent(id) {
        this.router.navigate([`/edit-event/${id}`]);
    }
    eventDropped($event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.events, $event.previousIndex, $event.currentIndex);
        this.eventService.saveNewOrderOfEvents(this.events);
    }
    sortEventsAlphabetically() {
        this.events = lodash_es__WEBPACK_IMPORTED_MODULE_2__["sortBy"](this.events, (event) => lodash_es__WEBPACK_IMPORTED_MODULE_2__["toLower"](event.name));
        this.eventService.saveNewOrderOfEvents(this.events);
    }
};
Events.ɵfac = function Events_Factory(t) { return new (t || Events)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
Events.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Events, selectors: [["events"]], decls: 21, vars: 2, consts: [[1, "page-title"], [1, "event-list-actions"], [1, "sort-menu-button"], ["mat-icon-button", "", "aria-label", "Sort Menu", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["sortMenu", "matMenu"], [1, "menu-title"], ["mat-menu-item", "", 3, "click"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", "cdkDragLockAxis", "y", "class", "slide-in-out-container", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "mat-icon-button", "", "color", "primary", 1, "add-event-button", "fixed-floating-button", 3, "click"], ["cdkDrag", "", "cdkDragLockAxis", "y", 1, "slide-in-out-container"], ["class", "drag-custom-placeholder", 4, "cdkDragPlaceholder"], [1, "event-item"], [1, "event-name-desc"], [1, "event-name", "left-to-right-underline", 3, "click"], [1, "event-name-text"], ["class", "event-desc", 4, "ngIf"], [1, "event-action-buttons", "slide-in-out-element"], ["mat-icon-button", "", 1, "edit-event-button", 3, "click"], ["mat-icon-button", "", "mat-fab", "", "color", "warn", 1, "delete-event-button", 3, "click"], [1, "drag-custom-placeholder"], [1, "event-desc"]], template: function Events_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Events\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-menu", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sort Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Events_Template_button_click_12_listener() { return ctx.sortEventsAlphabetically(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "sort_by_alpha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Alphabetically ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function Events_Template_mat_list_cdkDropListDropped_16_listener($event) { return ctx.eventDropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, Events_mat_list_item_17_Template, 16, 2, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Events_Template_button_click_18_listener() { return ctx.goToAddEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.events);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListItem"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragPlaceholder"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"]], styles: [".fixed-floating-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 15px;\n  right: 20px;\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.3);\n  transition: box-shadow 0.5s;\n}\n.fixed-floating-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.7);\n}\n.left-to-right-underline[_ngcontent-%COMP%] {\n  position: relative;\n  background: none;\n  color: black;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  text-decoration: none;\n}\n.left-to-right-underline[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #020070;\n  visibility: hidden;\n  transition: all 0.3s ease-in-out;\n}\n.left-to-right-underline[_ngcontent-%COMP%]:hover {\n  color: #020070;\n}\n.left-to-right-underline[_ngcontent-%COMP%]:hover:before {\n  visibility: visible;\n  width: 100%;\n}\n.slide-in-out-container[_ngcontent-%COMP%]   .slide-in-out-element[_ngcontent-%COMP%] {\n  transform: translateX(100px);\n  transition: transform 0.3s;\n  transition-delay: 0.1s;\n}\n.slide-in-out-container[_ngcontent-%COMP%]:hover   .slide-in-out-element[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\nhtml[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nhtml.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: static;\n}\nhtml[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 300px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background: linear-gradient(0deg, #020070 0%, #8101fe 60%, #020070 100%);\n  margin: 10px;\n}\n.meevee-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  top: 0px;\n  left: 0px;\n  font-size: 3rem;\n  letter-spacing: 4.6px;\n  word-spacing: 2px;\n}\n.meevee-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n.meevee-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  color: white;\n}\n.meevee-header[_ngcontent-%COMP%]   .back-button-disabled[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.main-content[_ngcontent-%COMP%] {\n  padding-bottom: 55px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 200;\n  margin-bottom: 20px;\n  color: #d6d3d3;\n}\n.form-hint[_ngcontent-%COMP%] {\n  color: #a0a0a0;\n  font-size: 0.75rem;\n  font-weight: 100;\n}\n.ellipsis[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  white-space: nowrap !important;\n  text-overflow: ellipsis !important;\n  width: auto !important;\n}\n  .mat-dialog-container {\n  padding-top: 0;\n}\n.menu-title[_ngcontent-%COMP%] {\n  margin: 0 16px;\n  font-weight: 400;\n  font-size: 1rem;\n  text-align: start;\n  color: rgba(0, 0, 0, 0.87);\n  border-bottom: solid 1px rgba(0, 0, 0, 0.87);\n}\n.event-list-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  border-radius: 100px;\n  position: absolute;\n  right: 12px;\n  top: -20px;\n  background-color: white;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.3);\n}\n.event-item[_ngcontent-%COMP%] {\n  width: 236px;\n  height: 48px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  cursor: move;\n}\n.event-item[_ngcontent-%COMP%]   .event-name-desc[_ngcontent-%COMP%] {\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n}\n.event-item[_ngcontent-%COMP%]   .event-name-desc[_ngcontent-%COMP%]   .event-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 150px;\n  text-align: left;\n}\n.event-item[_ngcontent-%COMP%]   .event-name-desc[_ngcontent-%COMP%]   .event-desc[_ngcontent-%COMP%] {\n  color: #242424;\n  font-weight: 300;\n}\n.event-item[_ngcontent-%COMP%]   .event-name-desc[_ngcontent-%COMP%]   .event-name-text[_ngcontent-%COMP%], .event-item[_ngcontent-%COMP%]   .event-name-desc[_ngcontent-%COMP%]   .event-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.event-action-buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  display: flex;\n}\n.event-action-buttons[_ngcontent-%COMP%]   .delete-event-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 0 16px;\n  border-radius: 4px;\n  border: solid 2px transparent;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.24), 0 3px 14px 2px rgba(0, 0, 0, 0.22);\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]   .event-action-buttons[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.drag-custom-placeholder[_ngcontent-%COMP%] {\n  border: dotted 2px rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  background-color: #c3c3c3;\n  width: 236px;\n  height: 48px;\n  padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX2J1dHRvbnMuc2NzcyIsInNyYy9tZWV2ZWUvdmlld3MvZXZlbnRzL2V2ZW50cy5zY3NzIiwic3JjL3N0eWxlcy9fYW5pbWF0aW9ucy5zY3NzIiwic3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwrRUFBQTtFQUNBLDJCQUFBO0FDRkY7QURHRTtFQUNFLCtFQUFBO0FDREo7QUNOQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QURTRjtBQ1BFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQ1NnQjtFRFJoQixrQkFBQTtFQUNBLGdDQUFBO0FEU0o7QUNORTtFQUNFLGNDR2dCO0FGS3BCO0FDTEU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QURPSjtBQ0NFO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FERUo7QUNHRTtFQUNFLHdCQUFBO0FEQUo7QUc3Q0E7RUFDRSxlQUFBO0FIZ0RGO0FHOUNFO0VBQ0UsZ0JBQUE7QUhnREo7QUc3Q0U7RUFDRSxTQUFBO0VBQ0EsWURYWTtFQ1laLGlEQUFBO0VBQ0Esd0VBQUE7RUFDQSxZQUFBO0FIK0NKO0FHM0NBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGVEYlk7RUNjWixxQkFBQTtFQUNBLGlCQUFBO0FINkNGO0FHM0NFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUg2Q0o7QUcxQ0U7RUFDRSxZQUFBO0FINENKO0FHekNFO0VBQ0Usa0JBQUE7QUgyQ0o7QUd2Q0E7RUFDRSxvQkFBQTtBSDBDRjtBR3ZDQTtFQUNFLGVEdENVO0VDdUNWLGdCRGpDYTtFQ2tDYixtQkFBQTtFQUNBLGNENUJXO0FGc0ViO0FHdkNBO0VBQ0UsY0Q3Qlc7RUM4Qlgsa0JEbERTO0VDbURULGdCRDFDUTtBRm9GVjtBR3ZDQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0FIMENGO0FHdkNBO0VBQ0UsY0FBQTtBSDBDRjtBR3ZDQTtFQUNFLGNBQUE7RUFDQSxnQkR2RGE7RUN3RGIsZURuRVU7RUNvRVYsaUJBQUE7RUFDQSwwQkRuRFk7RUNvRFosNENBQUE7QUgwQ0Y7QUFwSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7QUF1SEY7QUFwSEE7RUFDRSxZQWhCaUI7RUFpQmpCLFlBaEJrQjtFQWlCbEIsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUF1SEY7QUFySEU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQXVISjtBQXJISTtFQUNFLGVFekJNO0VGMEJOLGdCRWRJO0VGZUosMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXVITjtBQXBISTtFQUNFLGNFaEJPO0VGaUJQLGdCRXhCTztBRjhJYjtBQW5ISTs7RUFFRSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBcUhOO0FBaEhBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQW1IRjtBQWpIRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBbUhKO0FBOUdFO0VBQ0UsVUFBQTtBQWlISjtBQS9HRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxSEFBQTtBQWlISjtBQTdHSTtFQUNFLFVBQUE7QUErR047QUExR0E7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJFN0RhO0VGOERiLFlBekZpQjtFQTBGakIsWUF6RmtCO0VBMEZsQixlQUFBO0FBNkdGIiwiZmlsZSI6InNyYy9tZWV2ZWUvdmlld3MvZXZlbnRzL2V2ZW50cy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICoqIEZpeGVkIGZsb2F0aW5nIGJ1dHRvbiAqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLmZpeGVkLWZsb2F0aW5nLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTVweDtcclxuICByaWdodDogMjBweDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjVzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC44KSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB9XHJcbn1cclxuIiwiLmZpeGVkLWZsb2F0aW5nLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxNXB4O1xuICByaWdodDogMjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40KSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xufVxuLmZpeGVkLWZsb2F0aW5nLWJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuOCksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5sZWZ0LXRvLXJpZ2h0LXVuZGVybGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmxlZnQtdG8tcmlnaHQtdW5kZXJsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjAwNzA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubGVmdC10by1yaWdodC11bmRlcmxpbmU6aG92ZXIge1xuICBjb2xvcjogIzAyMDA3MDtcbn1cbi5sZWZ0LXRvLXJpZ2h0LXVuZGVybGluZTpob3ZlcjpiZWZvcmUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNsaWRlLWluLW91dC1jb250YWluZXIgLnNsaWRlLWluLW91dC1lbGVtZW50IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbi5zbGlkZS1pbi1vdXQtY29udGFpbmVyOmhvdmVyIC5zbGlkZS1pbi1vdXQtZWxlbWVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmh0bWwuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5odG1sIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAyMDA3MCAwJSwgIzgxMDFmZSA2MCUsICMwMjAwNzAgMTAwJSk7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1lZXZlZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDQuNnB4O1xuICB3b3JkLXNwYWNpbmc6IDJweDtcbn1cbi5tZWV2ZWUtaGVhZGVyIGltZyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG4ubWVldmVlLWhlYWRlciAuYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWVldmVlLWhlYWRlciAuYmFjay1idXR0b24tZGlzYWJsZWQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcbn1cblxuLnBhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjZDZkM2QzO1xufVxuXG4uZm9ybS1oaW50IHtcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmVsbGlwc2lzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLm1lbnUtdGl0bGUge1xuICBtYXJnaW46IDAgMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4uZXZlbnQtbGlzdC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIHRvcDogLTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5ldmVudC1pdGVtIHtcbiAgd2lkdGg6IDIzNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLmV2ZW50LWl0ZW0gLmV2ZW50LW5hbWUtZGVzYyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZXZlbnQtaXRlbSAuZXZlbnQtbmFtZS1kZXNjIC5ldmVudC1uYW1lIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZXZlbnQtaXRlbSAuZXZlbnQtbmFtZS1kZXNjIC5ldmVudC1kZXNjIHtcbiAgY29sb3I6ICMyNDI0MjQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZXZlbnQtaXRlbSAuZXZlbnQtbmFtZS1kZXNjIC5ldmVudC1uYW1lLXRleHQsXG4uZXZlbnQtaXRlbSAuZXZlbnQtbmFtZS1kZXNjIC5ldmVudC1kZXNjIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmV2ZW50LWFjdGlvbi1idXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ldmVudC1hY3Rpb24tYnV0dG9ucyAuZGVsZXRlLWV2ZW50LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2RrLWRyYWctcHJldmlldyBtYXQtZGl2aWRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG4uY2RrLWRyYWctcHJldmlldyAuZXZlbnQtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IC5ldmVudC1pdGVtIC5ldmVudC1hY3Rpb24tYnV0dG9ucyB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5kcmFnLWN1c3RvbS1wbGFjZWhvbGRlciB7XG4gIGJvcmRlcjogZG90dGVkIDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzNjMztcbiAgd2lkdGg6IDIzNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn0iLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqKiBsZWZ0LXRvLXJpZ2h0LXVuZGVybGluZSAqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4ubGVmdC10by1yaWdodC11bmRlcmxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1lZXZlZS10aGVtZS1ibHVlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkbWVldmVlLXRoZW1lLWJsdWU7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyOmJlZm9yZSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICoqIFNsaWRlIGluIGFuZCBvdXQgKipcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKlxyXG4uc2xpZGUtaW4tb3V0LWNvbnRhaW5lciB7XHJcbiAgLnNsaWRlLWluLW91dC1lbGVtZW50IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjFzO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlLWluLW91dC1jb250YWluZXI6aG92ZXIge1xyXG4gIC5zbGlkZS1pbi1vdXQtZWxlbWVudCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG4vLyBzaXplc1xyXG4kcG9wb3Zlci13aWR0aDogMzAwcHg7XHJcbiRwb3BvdmVyLWhlaWdodDogNTAwcHg7XHJcblxyXG4vLyBmb250IHNpemVzXHJcbiRmcy14eHNtYWxsOiAuMjVyZW07XHJcbiRmcy14c21hbGw6IC41cmVtO1xyXG4kZnMtc21hbGw6IC43NXJlbTtcclxuJGZzLW1lZGl1bTogMXJlbTtcclxuJGZzLW1lZGl1bS1sYXJnZTogMS4yNXJlbTtcclxuJGZzLWxhcmdlOiAxLjVyZW07XHJcbiRmcy14bGFyZ2U6IDJyZW07XHJcbiRmcy14eGxhcmdlOiAyLjVyZW07XHJcbiRmcy14eHhsYXJnZTogM3JlbTtcclxuXHJcbi8vIGZvbnQgd2VpZ2h0c1xyXG4kZnctdGhpbjogMTAwO1xyXG4kZnctc2VtaS10aGluOiAyMDA7XHJcbiRmdy1yZWd1bGFyOiAzMDA7XHJcbiRmdy1zZW1pLWJvbGQ6IDQwMDtcclxuJGZ3LWJvbGQ6IDUwMDtcclxuXHJcbi8vIGNvbG9yc1xyXG4kbGlnaHQtYmx1ZTogcmdiYSgxOTEsIDIwNSwgMjIwLCAwLjU2OCk7XHJcbiRzZW1pLXdoaXRlOiByZ2IoMjE0LCAyMTEsIDIxMSk7XHJcbiRsZXNzLWJsYWNrOiByZ2IoMzYsIDM2LCAzNik7XHJcbiRzb3J0YS1ibGFjazogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuJGxpZ2h0LWdyZXk6IHJnYigxNjAsIDE2MCwgMTYwKTtcclxuJGxpZ2h0ZXItZ3JleTogcmdiKDE5NSwgMTk1LCAxOTUpO1xyXG4kbWVldmVlLXRoZW1lLWJsdWU6IHJnYmEoMiwwLDExMiwxKTtcclxuJG1lZXZlZS10aGVtZS1wdXJwbGU6IHJnYmEoMTI5LDEsMjU0LDEpO1xyXG4iLCJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ3NyYy9zdHlsZXMvYnV0dG9ucyc7XHJcbkBpbXBvcnQgJ3NyYy9zdHlsZXMvYW5pbWF0aW9ucyc7XHJcblxyXG5odG1sIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICYuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogJHBvcG92ZXItd2lkdGg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywkbWVldmVlLXRoZW1lLWJsdWUgMCUsICRtZWV2ZWUtdGhlbWUtcHVycGxlIDYwJSwgJG1lZXZlZS10aGVtZS1ibHVlIDEwMCUpO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1lZXZlZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG5cclxuICBmb250LXNpemU6ICRmcy14eHhsYXJnZTtcclxuICBsZXR0ZXItc3BhY2luZzogNC42cHg7XHJcbiAgd29yZC1zcGFjaW5nOiAycHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcblxyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuYmFjay1idXR0b24tZGlzYWJsZWQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDU1cHg7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxlIHtcclxuICBmb250LXNpemU6ICRmcy14bGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6ICRmdy1zZW1pLXRoaW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogJHNlbWktd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWhpbnQge1xyXG4gIGNvbG9yOiAkbGlnaHQtZ3JleTtcclxuICBmb250LXNpemU6ICRmcy1zbWFsbDtcclxuICBmb250LXdlaWdodDogJGZ3LXRoaW47XHJcbn1cclxuXHJcbi5lbGxpcHNpcyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4ubWVudS10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmdy1zZW1pLWJvbGQ7XHJcbiAgZm9udC1zaXplOiAkZnMtbWVkaXVtO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGNvbG9yOiAkc29ydGEtYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRzb3J0YS1ibGFjaztcclxufVxyXG4iXX0= */"] });
Events = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], Events);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Events, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "events",
                styleUrls: ["events.scss"],
                templateUrl: "events.html",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\maxrichmond\classes\471\CS471-F20-Team1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map