import { Component, HostBinding, Input, Output, EventEmitter, NgModule } from '@angular/core';
import * as cloneDeep from 'lodash/cloneDeep';
import cloneDeep__default, {  } from 'lodash/cloneDeep';
import { DomSanitizer } from '@angular/platform-browser';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var clone = cloneDeep__default || cloneDeep;
var AngularCalendarYearViewComponent = /** @class */ (function () {
    function AngularCalendarYearViewComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.themecolor = '#ff0000';
        this.events = [];
        this.viewDate = new Date();
        this.eventClicked = new EventEmitter();
        this.actionClicked = new EventEmitter();
        this.loader = false;
        this.days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        this.daydetails = {};
        this.year = new Date().getFullYear();
        this.calendar = [];
        this.spinner = true;
    }
    Object.defineProperty(AngularCalendarYearViewComponent.prototype, "style", {
        get: /**
         * @return {?}
         */
        function () {
            return this.sanitizer.bypassSecurityTrustStyle("--themecolor: " + this.themecolor + ";");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AngularCalendarYearViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initCalendar(this.viewDate);
    };
    /**
     * @return {?}
     */
    AngularCalendarYearViewComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.initCalendar(this.viewDate);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    AngularCalendarYearViewComponent.prototype.initCalendar = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.year = date.getFullYear();
        this.calendar = [];
        this.spinner = true;
        for (var index = 0; index < 12; index++) {
            this.calendar.push({
                date: new Date(this.year, index + 1, 0),
                days: this.generateCalendar(index + 1, this.year)
            });
        }
        /** @type {?} */
        var self = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            self.spinner = false;
        }), 2000);
    };
    /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    AngularCalendarYearViewComponent.prototype.generateCalendar = /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    function (month, year) {
        /** @type {?} */
        var monthList = [];
        /** @type {?} */
        var nbweeks = this.getNbWeeks(month, year);
        /** @type {?} */
        var dayone = new Date(year, month - 1, 1).getDay();
        /** @type {?} */
        var nbdaysMonth = new Date(year, month, 0).getDate();
        /** @type {?} */
        var lastdayindex = new Date(year, month - 1, nbdaysMonth).getDay();
        /** @type {?} */
        var lastday = 7;
        /** @type {?} */
        var day = 1;
        /** @type {?} */
        var today = new Date().toDateString();
        for (var indexweek = 0; indexweek < nbweeks; indexweek++) {
            monthList[indexweek] = [];
            if (nbweeks == indexweek + 1) {
                lastday = lastdayindex + 1;
            }
            if (indexweek > 0) {
                dayone = 0;
            }
            for (var indexday = dayone; indexday < lastday; indexday++) {
                /** @type {?} */
                var d1 = new Date(year, month - 1, day).toDateString();
                /** @type {?} */
                var istoday = d1 == today;
                /** @type {?} */
                var colorsEvents = this.getnbevents(day, month - 1);
                monthList[indexweek][indexday] = {
                    day: day,
                    istoday: istoday,
                    colors: colorsEvents.color,
                    events: [],
                    nb: colorsEvents.nb
                };
                day++;
            }
        }
        return monthList;
    };
    /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    AngularCalendarYearViewComponent.prototype.getNbWeeks = /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    function (month, year) {
        /** @type {?} */
        var dayone = new Date(year, month - 1, 1).getDay();
        /** @type {?} */
        var nbdaysMonth = new Date(year, month, 0).getDate();
        /** @type {?} */
        var lastday = new Date(year, month - 1, nbdaysMonth).getDay();
        return (nbdaysMonth + dayone + (6 - lastday)) / 7;
    };
    /**
     * @param {?} day
     * @param {?} month
     * @return {?}
     */
    AngularCalendarYearViewComponent.prototype.getTodayEvents = /**
     * @param {?} day
     * @param {?} month
     * @return {?}
     */
    function (day, month) {
        this.daydetails = {};
        if (this.events.length > 0) {
            this.loader = true;
            this.daydetails = clone(day);
            /** @type {?} */
            var d1 = new Date(this.year, month, day.day).toDateString();
            var _loop_1 = function (index) {
                /** @type {?} */
                var element = this_1.events[index];
                /** @type {?} */
                var d2 = element.start.toDateString();
                if (d2 == d1) {
                    this_1.daydetails.events.push(element);
                }
                if (index == this_1.events.length - 1) {
                    /** @type {?} */
                    var self_1 = this_1;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        self_1.loader = false;
                    }), 1000);
                }
            };
            var this_1 = this;
            for (var index = 0; index < this.events.length; index++) {
                _loop_1(index);
            }
        }
    };
    /**
     * @param {?} day
     * @param {?} month
     * @return {?}
     */
    AngularCalendarYearViewComponent.prototype.getnbevents = /**
     * @param {?} day
     * @param {?} month
     * @return {?}
     */
    function (day, month) {
        /** @type {?} */
        var nb = 0;
        /** @type {?} */
        var colors = [];
        if (this.events.length > 0) {
            /** @type {?} */
            var d1 = new Date(this.year, month, day).toDateString();
            for (var index = 0; index < this.events.length; index++) {
                /** @type {?} */
                var element = this.events[index];
                /** @type {?} */
                var d2 = element.start.toDateString();
                if (d2 == d1) {
                    nb++;
                    colors.push(element.color.secondary);
                }
            }
            return ({ nb: nb, color: colors.toString() });
        }
        else {
            return { color: "", nb: 0 };
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AngularCalendarYearViewComponent.prototype.eventClickedFn = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.eventClicked.emit(event);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    AngularCalendarYearViewComponent.prototype.refresh = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.initCalendar(date);
    };
    /**
     * @param {?} action
     * @param {?=} event
     * @return {?}
     */
    AngularCalendarYearViewComponent.prototype.actionClickedFn = /**
     * @param {?} action
     * @param {?=} event
     * @return {?}
     */
    function (action, event) {
        this.actionClicked.emit({ action: action, event: event });
    };
    AngularCalendarYearViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'angular-calendar-year-view',
                    template: "<div class=\"calendarcontainer container\">\n  <div class=\"row\">\n    <div *ngFor=\"let Month of calendar;let m =index\" class=\"col-md-3  col-sm-6 col-xs-12 \">\n      <div class=\"monthcontainer \">\n        <p class=\"monthname\">{{Month.date | date:'MMMM'}}</p>\n        <div class=\"flexdays\">\n          <div class=\"day\" *ngFor=\"let label of days\">\n            {{label}}\n          </div>\n        </div>\n        <div *ngFor=\"let week of Month.days\" class=\"flexdays\">\n          <div *ngFor=\"let day of week;let i=index\" [ngClass]=\"day?( day.istoday?'todayclass':(day.nb>0?'haveevents':'')):   'void_day'\"\n            [style.background-image]=\"day? ('linear-gradient(120deg, '+day.colors+',#fff)'):''\" class=\"day\" [outsideClick]=\"true\"\n            [popover]=\"yearcalendarpoptemplate\" placement=\"right\" (onShown)=\"dayindex=i;getTodayEvents(day,m)\">\n            {{day?.day}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"spinner\" class=\"calendar-loading\">\n  <svg class=\"spinner\" viewBox=\"25 25 50 50\">\n    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n  </svg>\n</div>\n<ng-template #yearcalendarpoptemplate>\n  <div class=\"col-md-12 col-calendar\">\n    <p [ngClass]=\"daydetails.istoday?'todaytext':''\" class=\"pop_year_day\">{{days[dayindex]}}.</p>\n    <p [ngClass]=\"daydetails.istoday?'todaytext':''\" class=\"pop_year_day_number\">{{daydetails?.day}} </p>\n    <div *ngIf=\"!loader\">\n      <div *ngFor=\"let event of daydetails.events\">\n          <a   [style.color]=\"event.color.primary+'!importants'\" \n               class=\"icon-action-calendar\" \n               *ngFor='let action of event.actions' \n                [innerHTML]='action.label' \n                (click)=\"actionClickedFn(action.name,event)\"\n                >\n            \n          </a>\n        <div class=\"circle_day_color\" [style.background]=\"event.color.secondary\" [style.border-color]=\"event.color.primary\"></div>\n        <p class=\"pop_year_event_title\" (click)=\"eventClickedFn(event)\">\n          <span>\n            {{event.start| date:'HH:mm'}}\n          </span>\n          {{event.title}}\n        </p>\n        \n      </div>\n    </div>\n    <div class=\"progressbar_popyear\" *ngIf=\"!daydetails.events||(daydetails.events.length==0)&&!loader\">\n      There are no events scheduled that day.\n    </div>\n    <div [hidden]=\"!loader\" class=\"loader_popover_calendar\"></div>\n  </div>\n</ng-template>",
                    styles: [".flexdays{display:-webkit-box;display:flex}.calendarcontainer{margin:auto;padding:15px}.col-calendar{min-width:250px}.monthcontainer{width:245px;margin:auto auto 25px;background:#fff;padding:10px;min-height:293px}.haveevents{background:linear-gradient(120deg,var(--primary),#fff);color:var(--textcolor)}.flexdays .day{padding:2px;width:28px!important;height:28px!important;border-radius:50%;margin:2px;text-align:center}.flexdays .day:hover,.yeardayactive{background:#eee;cursor:pointer}.monthname{text-align:center;font-size:18px;color:var(--themecolor);text-transform:capitalize}.title-calendar-year{margin-bottom:25px}.todayclass{background:var(--themecolor)!important;color:#fff}.eventclass{background:#4ab3cc!important;color:#fff}.todaytext{color:var(--themecolor)!important}.eventtext{color:#4ab3cc!important}.void_day{pointer-events:none}.pop_year_day{color:#6c6c6c;font-size:16px}.pop_year_day_number{font-size:38px;color:#b3b3b3;margin-left:6px;margin-top:-15px}.circle_day_color{width:10px;height:10px;border-radius:50%;float:left;margin-right:6px;margin-top:5px;border:1px solid}.pop_year_event_title{width:200px;color:#b7b7b6;margin-top:-8px}.progressbar_popyear{width:200px;padding:13px 0}.pop_year_event_title:hover{text-decoration:underline;cursor:pointer}.icon-action-calendar{float:right;color:#8a8989!important;cursor:pointer}.icon-action-calendar:hover{opacity:.4}.calendar-loading .spinner{height:200px;width:200px;-webkit-animation:2s linear infinite rotate;animation:2s linear infinite rotate;-webkit-transform-origin:center center;transform-origin:center center;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.calendar-loading .spinner .path{stroke-dasharray:1,200;stroke-dashoffset:0;-webkit-animation:1.5s ease-in-out infinite dash;animation:1.5s ease-in-out infinite dash;stroke-linecap:round;stroke:var(--themecolor)}@-webkit-keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.loader_popover_calendar{height:6px;width:90%;margin-bottom:10px;overflow:hidden;background-color:#ffdede00;position:absolute}.loader_popover_calendar:before{display:block;position:absolute;content:\"\";left:-20px;width:20px;height:4px;background-color:var(--themecolor);-webkit-animation:1s linear infinite loading;animation:1s linear infinite loading}@-webkit-keyframes loading{from{left:-20px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}@keyframes loading{from{left:-20px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}"]
                }] }
    ];
    /** @nocollapse */
    AngularCalendarYearViewComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    AngularCalendarYearViewComponent.propDecorators = {
        style: [{ type: HostBinding, args: ['style',] }],
        themecolor: [{ type: Input }],
        events: [{ type: Input }],
        viewDate: [{ type: Input }],
        eventClicked: [{ type: Output }],
        actionClicked: [{ type: Output }]
    };
    return AngularCalendarYearViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularCalendarYearViewModule = /** @class */ (function () {
    function AngularCalendarYearViewModule() {
    }
    /**
     * @return {?}
     */
    AngularCalendarYearViewModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AngularCalendarYearViewModule,
            providers: [
                PopoverModule.forRoot().providers
            ]
        };
    };
    AngularCalendarYearViewModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AngularCalendarYearViewComponent
                    ],
                    imports: [
                        CommonModule,
                        PopoverModule
                    ],
                    exports: [
                        AngularCalendarYearViewComponent
                    ]
                },] }
    ];
    return AngularCalendarYearViewModule;
}());

export { AngularCalendarYearViewComponent, AngularCalendarYearViewModule };
//# sourceMappingURL=angular-calendar-year-view.js.map
