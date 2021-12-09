/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding, TemplateRef } from "@angular/core";
import * as cloneDeep from "lodash/cloneDeep";
import { DomSanitizer } from '@angular/platform-browser';
/** @type {?} */
var clone = ((/** @type {?} */ (cloneDeep))).default || cloneDeep;
var AngularCalendarYearViewComponent = /** @class */ (function () {
    function AngularCalendarYearViewComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.themecolor = '#ff0000';
        this.events = [];
        this.viewDate = new Date();
        this.nothingToshowText = "There are no events scheduled that day.";
        this.popoverEnabled = true;
        this.eventClicked = new EventEmitter();
        this.actionClicked = new EventEmitter();
        this.dayClicked = new EventEmitter();
        this.loader = false;
        this.days = [new Date(2019, 1, 3), new Date(2019, 1, 4), new Date(2019, 1, 5), new Date(2019, 1, 6), new Date(2019, 1, 7), new Date(2019, 1, 8), new Date(2019, 1, 9)];
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
    AngularCalendarYearViewComponent.prototype.dayClickedFn = /**
     * @param {?} day
     * @param {?} month
     * @return {?}
     */
    function (day, month) {
        /** @type {?} */
        var date = new Date(this.year, month, day.day);
        this.daydetails = { events: [] };
        if (this.events.length > 0) {
            this.loader = true;
            this.daydetails = clone(day);
            /** @type {?} */
            var d1 = new Date(this.year, month, day.day).toDateString();
            for (var index = 0; index < this.events.length; index++) {
                /** @type {?} */
                var element = this.events[index];
                /** @type {?} */
                var d2 = element.start.toDateString();
                if (d2 == d1) {
                    this.daydetails.events.push(element);
                }
            }
        }
        this.dayClicked.emit({ date: date, events: this.daydetails.events });
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
                    template: "\n  <div class=\"calendarcontainer flexmonths\">\n  <div class=\"responsivecontainer\" *ngFor=\"let Month of calendar;let m =index\">\n      <div  class=\"monthcontainer \">\n        <p class=\"monthname\">{{Month.date | date:'MMMM'}}</p>\n        <div class=\"flexdays\">\n          <div class=\"day\" *ngFor=\"let label of days\">\n            {{label | date:'EEEEEE'}}\n          </div>\n        </div>\n        <div *ngFor=\"let week of Month.days\" class=\"flexdays\">\n          <div *ngFor=\"let day of week;let i=index\" [ngClass]=\"day?( day.istoday?'todayclass':(day.nb>0?'haveevents':'')):   'void_day'\"\n            [style.background-image]=\"day? ('linear-gradient(120deg, '+day.colors+',#fff)'):''\" class=\"day\" \n            [outsideClick]=\"true\"\n            [popover]=\"popoverEnabled?(customTemplate?customTemplate:yearcalendarpoptemplate):''\" \n            placement=\"right\" \n            (onShown)=\"dayindex=i;getTodayEvents(day,m)\"\n            (click)=\"dayClickedFn(day,m)\">\n            {{day?.day}}\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n<div *ngIf=\"spinner\" class=\"calendar-loading\">\n  <svg class=\"spinner\" viewBox=\"25 25 50 50\">\n    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n  </svg>\n</div>\n<ng-template #yearcalendarpoptemplate>\n  <div class=\"col-md-12 col-calendar\">\n    <p [ngClass]=\"daydetails.istoday?'todaytext':''\" class=\"pop_year_day\">{{days[dayindex]| date:'EEEEEE'}}.</p>\n    <p [ngClass]=\"daydetails.istoday?'todaytext':''\" class=\"pop_year_day_number\">{{daydetails?.day}} </p>\n    <div *ngIf=\"!loader\">\n      <div *ngFor=\"let event of daydetails.events\">\n          <a   [style.color]=\"event.color.primary+'!importants'\" \n               class=\"icon-action-calendar\" \n               *ngFor='let action of event.actions' \n                [innerHTML]='action.label' \n                (click)=\"actionClickedFn(action.name,event)\"\n                >\n            \n          </a>\n        <div class=\"circle_day_color\" [style.background]=\"event.color.secondary\" [style.border-color]=\"event.color.primary\"></div>\n        <p class=\"pop_year_event_title\" (click)=\"eventClickedFn(event)\">\n          <span>\n            {{event.start| date:'HH:mm'}}\n          </span>\n          {{event.title}}\n        </p>\n        \n      </div>\n    </div>\n    <div class=\"progressbar_popyear\" *ngIf=\"!daydetails.events||(daydetails.events.length==0)&&!loader\">\n     {{nothingToshowText}} \n    </div>\n    <div [hidden]=\"!loader\" class=\"loader_popover_calendar\"></div>\n  </div>\n</ng-template>\n  ",
                    styles: [".flexdays{display:flex}.flexmonths{display:flex;flex-wrap:wrap}.calendarcontainer{margin:auto;padding:15px}.col-calendar{min-width:250px}.monthcontainer{width:245px;margin:auto auto 25px;background:#fff;padding:10px;min-height:293px}.haveevents{background:linear-gradient(120deg,var(--primary),#fff);color:var(--textcolor)}.flexdays .day{padding:2px;width:28px!important;height:28px!important;border-radius:50%;margin:2px;text-align:center}.flexdays .day:hover,.yeardayactive{background:#eee;cursor:pointer}.monthname{text-align:center;font-size:18px;color:var(--themecolor);text-transform:capitalize}.title-calendar-year{margin-bottom:25px}.todayclass{background:var(--themecolor)!important;color:#fff}.eventclass{background:#4ab3cc!important;color:#fff}.todaytext{color:var(--themecolor)!important}.eventtext{color:#4ab3cc!important}.void_day{pointer-events:none}.pop_year_day{color:#6c6c6c;font-size:16px}.pop_year_day_number{font-size:38px;color:#b3b3b3;margin-left:6px;margin-top:-15px}.circle_day_color{width:10px;height:10px;border-radius:50%;float:left;margin-right:6px;margin-top:5px;border:1px solid}.pop_year_event_title{width:200px;color:#b7b7b6;margin-top:-8px}.progressbar_popyear{width:200px;padding:13px 0}.pop_year_event_title:hover{text-decoration:underline;cursor:pointer}.icon-action-calendar{float:right;color:#8a8989!important;cursor:pointer}.icon-action-calendar:hover{opacity:.4}.calendar-loading .spinner{height:200px;width:200px;-webkit-animation:2s linear infinite rotate;animation:2s linear infinite rotate;-webkit-transform-origin:center center;transform-origin:center center;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.calendar-loading .spinner .path{stroke-dasharray:1,200;stroke-dashoffset:0;-webkit-animation:1.5s ease-in-out infinite dash;animation:1.5s ease-in-out infinite dash;stroke-linecap:round;stroke:var(--themecolor)}@-webkit-keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.loader_popover_calendar{height:6px;width:90%;margin-bottom:10px;overflow:hidden;background-color:#ffdede00;position:absolute}.loader_popover_calendar:before{display:block;position:absolute;content:\"\";left:-20px;width:20px;height:4px;background-color:var(--themecolor);-webkit-animation:1s linear infinite loading;animation:1s linear infinite loading}@-webkit-keyframes loading{from{left:-20px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}@keyframes loading{from{left:-20px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}.titles_calendar{font-weight:700;text-transform:capitalize}.responsivecontainer{width:25%}@media screen and (max-width:499px){.responsivecontainer{width:100%!important}}@media screen and (min-width:500px) and (max-width:749px){.responsivecontainer{width:50%!important}}@media screen and (min-width:750px) and (max-width:999px){.responsivecontainer{width:33%!important}}@media screen and (min-width:1000px){.responsivecontainer{width:25%!important}}"]
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
        nothingToshowText: [{ type: Input }],
        popoverEnabled: [{ type: Input }],
        customTemplate: [{ type: Input }],
        eventClicked: [{ type: Output }],
        actionClicked: [{ type: Output }],
        dayClicked: [{ type: Output }]
    };
    return AngularCalendarYearViewComponent;
}());
export { AngularCalendarYearViewComponent };
if (false) {
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.themecolor;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.events;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.viewDate;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.nothingToshowText;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.popoverEnabled;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.customTemplate;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.eventClicked;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.actionClicked;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.dayClicked;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.loader;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.days;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.dayindex;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.daydetails;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.year;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.calendar;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.spinner;
    /** @type {?} */
    AngularCalendarYearViewComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jYWxlbmRhci15ZWFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jYWxlbmRhci15ZWFyLXZpZXcvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1jYWxlbmRhci15ZWFyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBQyxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxLQUFLLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBQ25ELEtBQUssR0FBYyxDQUFDLG1CQUFLLFNBQVMsRUFBQSxDQUFDLENBQUMsT0FBTyxJQUFJLFNBQVM7QUFFOUQ7SUF3R0UsMENBQW1CLFNBQXNCO1FBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFoQ3pDLGVBQVUsR0FBSyxTQUFTLENBQUE7UUFFeEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdaLGFBQVEsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRzVCLHNCQUFpQixHQUFXLHlDQUF5QyxDQUFDO1FBR3RFLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBTS9CLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUd2QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHeEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFckMsV0FBTSxHQUFRLEtBQUssQ0FBQztRQUNwQixTQUFJLEdBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxJQUFJLENBQUMsSUFB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SUFBZixVQUFnQixNQUFNLEVBQUMsS0FBTTtRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7SUFDekQsQ0FBQzs7Z0JBN09GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUUsbW9GQTJEVDs7aUJBRUY7Ozs7Z0JBbEVRLFlBQVk7Ozt3QkFvRWxCLFdBQVcsU0FBQyxPQUFPOzZCQU1uQixLQUFLO3lCQUVMLEtBQUs7MkJBR0wsS0FBSztvQ0FHTCxLQUFLO2lDQUdMLEtBQUs7aUNBR0wsS0FBSzsrQkFHTCxNQUFNO2dDQUdOLE1BQU07NkJBR04sTUFBTTs7SUFpSlQsdUNBQUM7Q0FBQSxBQS9PRCxJQStPQztTQS9LWSxnQ0FBZ0M7OztJQU8zQyxzREFDd0I7O0lBQ3hCLGtEQUNZOztJQUVaLG9EQUM0Qjs7SUFFNUIsNkRBQ3NFOztJQUV0RSwwREFDK0I7O0lBRS9CLDBEQUNnQzs7SUFFaEMsd0RBQ3VDOztJQUV2Qyx5REFDd0M7O0lBRXhDLHNEQUNxQzs7SUFFckMsa0RBQW9COztJQUNwQixnREFBdUo7O0lBQ3ZKLG9EQUFjOztJQUNkLHNEQUFxQjs7SUFDckIsZ0RBQXFDOztJQUNyQyxvREFBbUI7O0lBQ25CLG1EQUFvQjs7SUFDUixxREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyxUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC9jbG9uZURlZXBcIjtcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuY29uc3QgY2xvbmU6IGNsb25lRGVlcCA9ICg8YW55PmNsb25lRGVlcCkuZGVmYXVsdCB8fCBjbG9uZURlZXBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW5ndWxhci1jYWxlbmRhci15ZWFyLXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJjb250YWluZXIgZmxleG1vbnRoc1wiPlxuICA8ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZWNvbnRhaW5lclwiICpuZ0Zvcj1cImxldCBNb250aCBvZiBjYWxlbmRhcjtsZXQgbSA9aW5kZXhcIj5cbiAgICAgIDxkaXYgIGNsYXNzPVwibW9udGhjb250YWluZXIgXCI+XG4gICAgICAgIDxwIGNsYXNzPVwibW9udGhuYW1lXCI+e3tNb250aC5kYXRlIHwgZGF0ZTonTU1NTSd9fTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhkYXlzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRheVwiICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBkYXlzXCI+XG4gICAgICAgICAgICB7e2xhYmVsIHwgZGF0ZTonRUVFRUVFJ319XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCB3ZWVrIG9mIE1vbnRoLmRheXNcIiBjbGFzcz1cImZsZXhkYXlzXCI+XG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWs7bGV0IGk9aW5kZXhcIiBbbmdDbGFzc109XCJkYXk/KCBkYXkuaXN0b2RheT8ndG9kYXljbGFzcyc6KGRheS5uYj4wPydoYXZlZXZlbnRzJzonJykpOiAgICd2b2lkX2RheSdcIlxuICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiZGF5PyAoJ2xpbmVhci1ncmFkaWVudCgxMjBkZWcsICcrZGF5LmNvbG9ycysnLCNmZmYpJyk6JydcIiBjbGFzcz1cImRheVwiIFxuICAgICAgICAgICAgW291dHNpZGVDbGlja109XCJ0cnVlXCJcbiAgICAgICAgICAgIFtwb3BvdmVyXT1cInBvcG92ZXJFbmFibGVkPyhjdXN0b21UZW1wbGF0ZT9jdXN0b21UZW1wbGF0ZTp5ZWFyY2FsZW5kYXJwb3B0ZW1wbGF0ZSk6JydcIiBcbiAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCIgXG4gICAgICAgICAgICAob25TaG93bik9XCJkYXlpbmRleD1pO2dldFRvZGF5RXZlbnRzKGRheSxtKVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZGF5Q2xpY2tlZEZuKGRheSxtKVwiPlxuICAgICAgICAgICAge3tkYXk/LmRheX19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwic3Bpbm5lclwiIGNsYXNzPVwiY2FsZW5kYXItbG9hZGluZ1wiPlxuICA8c3ZnIGNsYXNzPVwic3Bpbm5lclwiIHZpZXdCb3g9XCIyNSAyNSA1MCA1MFwiPlxuICAgIDxjaXJjbGUgY2xhc3M9XCJwYXRoXCIgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMjBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgLz5cbiAgPC9zdmc+XG48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjeWVhcmNhbGVuZGFycG9wdGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY29sLWNhbGVuZGFyXCI+XG4gICAgPHAgW25nQ2xhc3NdPVwiZGF5ZGV0YWlscy5pc3RvZGF5Pyd0b2RheXRleHQnOicnXCIgY2xhc3M9XCJwb3BfeWVhcl9kYXlcIj57e2RheXNbZGF5aW5kZXhdfCBkYXRlOidFRUVFRUUnfX0uPC9wPlxuICAgIDxwIFtuZ0NsYXNzXT1cImRheWRldGFpbHMuaXN0b2RheT8ndG9kYXl0ZXh0JzonJ1wiIGNsYXNzPVwicG9wX3llYXJfZGF5X251bWJlclwiPnt7ZGF5ZGV0YWlscz8uZGF5fX0gPC9wPlxuICAgIDxkaXYgKm5nSWY9XCIhbG9hZGVyXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBldmVudCBvZiBkYXlkZXRhaWxzLmV2ZW50c1wiPlxuICAgICAgICAgIDxhICAgW3N0eWxlLmNvbG9yXT1cImV2ZW50LmNvbG9yLnByaW1hcnkrJyFpbXBvcnRhbnRzJ1wiIFxuICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWFjdGlvbi1jYWxlbmRhclwiIFxuICAgICAgICAgICAgICAgKm5nRm9yPSdsZXQgYWN0aW9uIG9mIGV2ZW50LmFjdGlvbnMnIFxuICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPSdhY3Rpb24ubGFiZWwnIFxuICAgICAgICAgICAgICAgIChjbGljayk9XCJhY3Rpb25DbGlja2VkRm4oYWN0aW9uLm5hbWUsZXZlbnQpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVfZGF5X2NvbG9yXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiZXZlbnQuY29sb3Iuc2Vjb25kYXJ5XCIgW3N0eWxlLmJvcmRlci1jb2xvcl09XCJldmVudC5jb2xvci5wcmltYXJ5XCI+PC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwicG9wX3llYXJfZXZlbnRfdGl0bGVcIiAoY2xpY2spPVwiZXZlbnRDbGlja2VkRm4oZXZlbnQpXCI+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7e2V2ZW50LnN0YXJ0fCBkYXRlOidISDptbSd9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7e2V2ZW50LnRpdGxlfX1cbiAgICAgICAgPC9wPlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc2Jhcl9wb3B5ZWFyXCIgKm5nSWY9XCIhZGF5ZGV0YWlscy5ldmVudHN8fChkYXlkZXRhaWxzLmV2ZW50cy5sZW5ndGg9PTApJiYhbG9hZGVyXCI+XG4gICAgIHt7bm90aGluZ1Rvc2hvd1RleHR9fSBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IFtoaWRkZW5dPVwiIWxvYWRlclwiIGNsYXNzPVwibG9hZGVyX3BvcG92ZXJfY2FsZW5kYXJcIj48L2Rpdj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9hbmd1bGFyLWNhbGVuZGFyLXllYXItdmlldy5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckNhbGVuZGFyWWVhclZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlJylcbiAgZ2V0IHN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoXG4gICAgICBgLS10aGVtZWNvbG9yOiAke3RoaXMudGhlbWVjb2xvcn07YFxuICAgICk7XG4gIH1cbiAgQElucHV0KClcbiAgdGhlbWVjb2xvcjphbnk9JyNmZjAwMDAnXG4gIEBJbnB1dCgpXG4gIGV2ZW50cyA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgXG4gIEBJbnB1dCgpXG4gIG5vdGhpbmdUb3Nob3dUZXh0OiBzdHJpbmcgPSBcIlRoZXJlIGFyZSBubyBldmVudHMgc2NoZWR1bGVkIHRoYXQgZGF5LlwiO1xuXG4gIEBJbnB1dCgpXG4gIHBvcG92ZXJFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiBcbiAgXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgXG4gIEBPdXRwdXQoKVxuICBhY3Rpb25DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGRheUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBsb2FkZXI6IGFueSA9IGZhbHNlO1xuICBkYXlzOiBhbnkgPSBbbmV3IERhdGUoMjAxOSwxLDMpLG5ldyBEYXRlKDIwMTksMSw0KSxuZXcgRGF0ZSgyMDE5LDEsNSksIG5ldyBEYXRlKDIwMTksMSw2KSwgbmV3IERhdGUoMjAxOSwxLDcpLCBuZXcgRGF0ZSgyMDE5LDEsOCksIG5ldyBEYXRlKDIwMTksMSw5KV07XG4gIGRheWluZGV4OiBhbnk7XG4gIGRheWRldGFpbHM6IGFueSA9IHt9O1xuICB5ZWFyOiBhbnkgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gIGNhbGVuZGFyOiBhbnkgPSBbXTtcbiAgc3Bpbm5lcjogYW55ID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjpEb21TYW5pdGl6ZXIsXG5cbiAgKSB7IH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0Q2FsZW5kYXIodGhpcy52aWV3RGF0ZSk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7ICAgIFxuICAgIHRoaXMuaW5pdENhbGVuZGFyKHRoaXMudmlld0RhdGUpO1xuICB9XG4gIGluaXRDYWxlbmRhcihkYXRlKSB7XG4gICAgdGhpcy55ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMuY2FsZW5kYXIgPSBbXTtcbiAgICB0aGlzLnNwaW5uZXIgPSB0cnVlO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMjsgaW5kZXgrKykge1xuICAgICAgdGhpcy5jYWxlbmRhci5wdXNoKHtcbiAgICAgICAgZGF0ZTogbmV3IERhdGUodGhpcy55ZWFyLCBpbmRleCArIDEsIDApLFxuICAgICAgICBkYXlzOiB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoaW5kZXggKyAxLCB0aGlzLnllYXIpXG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2VsZi5zcGlubmVyID0gZmFsc2U7XG4gICAgfSwgMjAwMCk7XG4gIH1cbiAgZ2VuZXJhdGVDYWxlbmRhcihtb250aCwgeWVhcikge1xuICAgIGxldCBtb250aExpc3QgPSBbXTtcbiAgICBsZXQgbmJ3ZWVrcyA9IHRoaXMuZ2V0TmJXZWVrcyhtb250aCwgeWVhcik7XG4gICAgbGV0IGRheW9uZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMSkuZ2V0RGF5KCk7XG4gICAgbGV0IG5iZGF5c01vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICBsZXQgbGFzdGRheWluZGV4ID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBuYmRheXNNb250aCkuZ2V0RGF5KCk7XG4gICAgbGV0IGxhc3RkYXkgPSA3O1xuICAgIGxldCBkYXkgPSAxO1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XG5cbiAgICBmb3IgKGxldCBpbmRleHdlZWsgPSAwOyBpbmRleHdlZWsgPCBuYndlZWtzOyBpbmRleHdlZWsrKykge1xuICAgICAgbW9udGhMaXN0W2luZGV4d2Vla10gPSBbXTtcbiAgICAgIGlmIChuYndlZWtzID09IGluZGV4d2VlayArIDEpIHtcbiAgICAgICAgbGFzdGRheSA9IGxhc3RkYXlpbmRleCArIDE7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXh3ZWVrID4gMCkge1xuICAgICAgICBkYXlvbmUgPSAwO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaW5kZXhkYXkgPSBkYXlvbmU7IGluZGV4ZGF5IDwgbGFzdGRheTsgaW5kZXhkYXkrKykge1xuICAgICAgICBsZXQgZDEgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSkudG9EYXRlU3RyaW5nKCk7XG4gICAgICAgIGxldCBpc3RvZGF5ID0gZDEgPT0gdG9kYXk7XG4gICAgICAgIGxldCBjb2xvcnNFdmVudHMgPSB0aGlzLmdldG5iZXZlbnRzKGRheSwgbW9udGggLSAxKVxuICAgICAgICBtb250aExpc3RbaW5kZXh3ZWVrXVtpbmRleGRheV0gPSB7XG4gICAgICAgICAgZGF5OiBkYXksXG4gICAgICAgICAgaXN0b2RheTogaXN0b2RheSxcbiAgICAgICAgICBjb2xvcnM6IGNvbG9yc0V2ZW50cy5jb2xvcixcbiAgICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICAgIG5iOiBjb2xvcnNFdmVudHMubmJcbiAgICAgICAgfTtcbiAgICAgICAgZGF5Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vbnRoTGlzdDtcbiAgfVxuICBnZXROYldlZWtzKG1vbnRoLCB5ZWFyKSB7XG4gICAgbGV0IGRheW9uZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMSkuZ2V0RGF5KCk7XG4gICAgbGV0IG5iZGF5c01vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICBsZXQgbGFzdGRheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgbmJkYXlzTW9udGgpLmdldERheSgpO1xuICAgIHJldHVybiAobmJkYXlzTW9udGggKyBkYXlvbmUgKyAoNiAtIGxhc3RkYXkpKSAvIDc7XG4gIH1cbiAgZGF5Q2xpY2tlZEZuKGRheSwgbW9udGgpe1xuICAgbGV0IGRhdGUgPSAgbmV3IERhdGUodGhpcy55ZWFyLCBtb250aCwgZGF5LmRheSlcbiAgIHRoaXMuZGF5ZGV0YWlscyA9IHtldmVudHM6W119XG5cbiAgIGlmICh0aGlzLmV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgIHRoaXMubG9hZGVyID0gdHJ1ZTtcbiAgICAgdGhpcy5kYXlkZXRhaWxzID0gY2xvbmUoZGF5KTtcbiAgICAgbGV0IGQxID0gbmV3IERhdGUodGhpcy55ZWFyLCBtb250aCwgZGF5LmRheSkudG9EYXRlU3RyaW5nKCk7XG4gICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ldmVudHNbaW5kZXhdO1xuICAgICAgIGxldCBkMiA9IGVsZW1lbnQuc3RhcnQudG9EYXRlU3RyaW5nKCk7XG4gICAgICAgaWYgKGQyID09IGQxKSB7XG4gICAgICAgICB0aGlzLmRheWRldGFpbHMuZXZlbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgfVxuICAgICB9XG4gICB9XG4gICB0aGlzLmRheUNsaWNrZWQuZW1pdCh7ZGF0ZTpkYXRlLGV2ZW50czp0aGlzLmRheWRldGFpbHMuZXZlbnRzfSlcbiAgfVxuICBnZXRUb2RheUV2ZW50cyhkYXksIG1vbnRoKSB7XG4gICAgdGhpcy5kYXlkZXRhaWxzID0ge31cblxuICAgIGlmICh0aGlzLmV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmxvYWRlciA9IHRydWU7XG4gICAgICB0aGlzLmRheWRldGFpbHMgPSBjbG9uZShkYXkpO1xuICAgICAgbGV0IGQxID0gbmV3IERhdGUodGhpcy55ZWFyLCBtb250aCwgZGF5LmRheSkudG9EYXRlU3RyaW5nKCk7XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZXZlbnRzW2luZGV4XTtcbiAgICAgICAgbGV0IGQyID0gZWxlbWVudC5zdGFydC50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgaWYgKGQyID09IGQxKSB7XG4gICAgICAgICAgdGhpcy5kYXlkZXRhaWxzLmV2ZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLmV2ZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5sb2FkZXIgPSBmYWxzZTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldG5iZXZlbnRzKGRheSwgbW9udGgpIHtcbiAgICBsZXQgbmIgPSAwO1xuICAgIGxldCBjb2xvcnMgPSBbXVxuICAgIGlmICh0aGlzLmV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgZDEgPSBuZXcgRGF0ZSh0aGlzLnllYXIsIG1vbnRoLCBkYXkpLnRvRGF0ZVN0cmluZygpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ldmVudHNbaW5kZXhdO1xuICAgICAgICBsZXQgZDIgPSBlbGVtZW50LnN0YXJ0LnRvRGF0ZVN0cmluZygpO1xuICAgICAgICBpZiAoZDIgPT0gZDEpIHtcbiAgICAgICAgICBuYisrO1xuICAgICAgICAgIGNvbG9ycy5wdXNoKGVsZW1lbnQuY29sb3Iuc2Vjb25kYXJ5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gKHsgbmI6IG5iLCBjb2xvcjogY29sb3JzLnRvU3RyaW5nKCkgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgY29sb3I6IFwiXCIsIG5iOiAwIH1cbiAgICB9XG4gIH1cbiAgZXZlbnRDbGlja2VkRm4oZXZlbnQpIHtcbiAgICB0aGlzLmV2ZW50Q2xpY2tlZC5lbWl0KGV2ZW50KTtcbiAgfVxuICByZWZyZXNoKGRhdGUpIHtcbiAgICB0aGlzLmluaXRDYWxlbmRhcihkYXRlKTtcbiAgfVxuICBhY3Rpb25DbGlja2VkRm4oYWN0aW9uLGV2ZW50Pyl7XG4gICAgICAgdGhpcy5hY3Rpb25DbGlja2VkLmVtaXQoe2FjdGlvbjphY3Rpb24sZXZlbnQ6ZXZlbnR9KVxuICB9XG5cbn1cbiJdfQ==