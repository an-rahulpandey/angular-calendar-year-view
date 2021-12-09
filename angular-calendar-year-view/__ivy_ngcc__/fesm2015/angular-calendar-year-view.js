import * as cloneDeep from 'lodash/cloneDeep';
import cloneDeep__default, {  } from 'lodash/cloneDeep';
import { DomSanitizer } from '@angular/platform-browser';
import { Injectable, NgModule, Component, Input, Output, EventEmitter, HostBinding, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap/popover';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ngx-bootstrap/popover';

function AngularCalendarYearViewComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "date");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const label_r8 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(2, 1, label_r8, "EEEEEE"), " ");
} }
function AngularCalendarYearViewComponent_div_1_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("onShown", function AngularCalendarYearViewComponent_div_1_div_7_div_1_Template_div_onShown_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r14); const i_r12 = restoredCtx.index; const day_r11 = restoredCtx.$implicit; const m_r5 = ɵngcc0.ɵɵnextContext(2).index; const ctx_r13 = ɵngcc0.ɵɵnextContext(); ctx_r13.dayindex = i_r12; return ctx_r13.getTodayEvents(day_r11, m_r5); })("click", function AngularCalendarYearViewComponent_div_1_div_7_div_1_Template_div_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r14); const day_r11 = restoredCtx.$implicit; const m_r5 = ɵngcc0.ɵɵnextContext(2).index; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.dayClickedFn(day_r11, m_r5); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r11 = ctx.$implicit;
    const ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    const _r2 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵstyleProp("background-image", day_r11 ? "linear-gradient(120deg, " + day_r11.colors + ",#fff)" : "");
    ɵngcc0.ɵɵproperty("ngClass", day_r11 ? day_r11.istoday ? "todayclass" : day_r11.nb > 0 ? "haveevents" : "" : "void_day")("outsideClick", true)("popover", ctx_r10.popoverEnabled ? ctx_r10.customTemplate ? ctx_r10.customTemplate : _r2 : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", day_r11 == null ? null : day_r11.day, " ");
} }
function AngularCalendarYearViewComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtemplate(1, AngularCalendarYearViewComponent_div_1_div_7_div_1_Template, 2, 6, "div", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const week_r9 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", week_r9);
} }
function AngularCalendarYearViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵelementStart(2, "p", 6);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵpipe(4, "date");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 7);
    ɵngcc0.ɵɵtemplate(6, AngularCalendarYearViewComponent_div_1_div_6_Template, 3, 4, "div", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, AngularCalendarYearViewComponent_div_1_div_7_Template, 2, 1, "div", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const Month_r4 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind2(4, 3, Month_r4.date, "MMMM"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.days);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", Month_r4.days);
} }
function AngularCalendarYearViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 14);
    ɵngcc0.ɵɵelement(2, "circle", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function AngularCalendarYearViewComponent_ng_template_3_div_6_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 26);
    ɵngcc0.ɵɵlistener("click", function AngularCalendarYearViewComponent_ng_template_3_div_6_div_1_a_1_Template_a_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r26); const action_r23 = restoredCtx.$implicit; const event_r21 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r24 = ɵngcc0.ɵɵnextContext(3); return ctx_r24.actionClickedFn(action_r23.name, event_r21); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r23 = ctx.$implicit;
    const event_r21 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵstyleProp("color", event_r21.color.primary + "!importants");
    ɵngcc0.ɵɵproperty("innerHTML", action_r23.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function AngularCalendarYearViewComponent_ng_template_3_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, AngularCalendarYearViewComponent_ng_template_3_div_6_div_1_a_1_Template, 1, 3, "a", 23);
    ɵngcc0.ɵɵelement(2, "div", 24);
    ɵngcc0.ɵɵelementStart(3, "p", 25);
    ɵngcc0.ɵɵlistener("click", function AngularCalendarYearViewComponent_ng_template_3_div_6_div_1_Template_p_click_3_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r29); const event_r21 = restoredCtx.$implicit; const ctx_r28 = ɵngcc0.ɵɵnextContext(3); return ctx_r28.eventClickedFn(event_r21); });
    ɵngcc0.ɵɵelementStart(4, "span");
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵpipe(6, "date");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r21 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", event_r21.actions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("background", event_r21.color.secondary)("border-color", event_r21.color.primary);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(6, 7, event_r21.start, "HH:mm"), " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", event_r21.title, " ");
} }
function AngularCalendarYearViewComponent_ng_template_3_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, AngularCalendarYearViewComponent_ng_template_3_div_6_div_1_Template, 8, 10, "div", 22);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r18.daydetails.events);
} }
function AngularCalendarYearViewComponent_ng_template_3_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 27);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r19.nothingToshowText, " ");
} }
function AngularCalendarYearViewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "p", 17);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "date");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "p", 18);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, AngularCalendarYearViewComponent_ng_template_3_div_6_Template, 2, 1, "div", 19);
    ɵngcc0.ɵɵtemplate(7, AngularCalendarYearViewComponent_ng_template_3_div_7_Template, 2, 1, "div", 20);
    ɵngcc0.ɵɵelement(8, "div", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r3.daydetails.istoday ? "todaytext" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("", ɵngcc0.ɵɵpipeBind2(3, 7, ctx_r3.days[ctx_r3.dayindex], "EEEEEE"), ".");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r3.daydetails.istoday ? "todaytext" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r3.daydetails == null ? null : ctx_r3.daydetails.day, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.loader);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.daydetails.events || ctx_r3.daydetails.events.length == 0 && !ctx_r3.loader);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("hidden", !ctx_r3.loader);
} }
class AngularCalendarYearViewService {
    constructor() { }
}
AngularCalendarYearViewService.ɵfac = function AngularCalendarYearViewService_Factory(t) { return new (t || AngularCalendarYearViewService)(); };
AngularCalendarYearViewService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: AngularCalendarYearViewService, factory: AngularCalendarYearViewService.ɵfac, providedIn: 'root' });
/** @nocollapse */
AngularCalendarYearViewService.ctorParameters = () => [];
/** @nocollapse */ AngularCalendarYearViewService.ngInjectableDef = defineInjectable({ factory: function AngularCalendarYearViewService_Factory() { return new AngularCalendarYearViewService(); }, token: AngularCalendarYearViewService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AngularCalendarYearViewService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const clone = cloneDeep__default || cloneDeep;
class AngularCalendarYearViewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
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
    /**
     * @return {?}
     */
    get style() {
        return this.sanitizer.bypassSecurityTrustStyle(`--themecolor: ${this.themecolor};`);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initCalendar(this.viewDate);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.initCalendar(this.viewDate);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    initCalendar(date) {
        this.year = date.getFullYear();
        this.calendar = [];
        this.spinner = true;
        for (let index = 0; index < 12; index++) {
            this.calendar.push({
                date: new Date(this.year, index + 1, 0),
                days: this.generateCalendar(index + 1, this.year)
            });
        }
        /** @type {?} */
        let self = this;
        setTimeout((/**
         * @return {?}
         */
        () => {
            self.spinner = false;
        }), 2000);
    }
    /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    generateCalendar(month, year) {
        /** @type {?} */
        let monthList = [];
        /** @type {?} */
        let nbweeks = this.getNbWeeks(month, year);
        /** @type {?} */
        let dayone = new Date(year, month - 1, 1).getDay();
        /** @type {?} */
        let nbdaysMonth = new Date(year, month, 0).getDate();
        /** @type {?} */
        let lastdayindex = new Date(year, month - 1, nbdaysMonth).getDay();
        /** @type {?} */
        let lastday = 7;
        /** @type {?} */
        let day = 1;
        /** @type {?} */
        let today = new Date().toDateString();
        for (let indexweek = 0; indexweek < nbweeks; indexweek++) {
            monthList[indexweek] = [];
            if (nbweeks == indexweek + 1) {
                lastday = lastdayindex + 1;
            }
            if (indexweek > 0) {
                dayone = 0;
            }
            for (let indexday = dayone; indexday < lastday; indexday++) {
                /** @type {?} */
                let d1 = new Date(year, month - 1, day).toDateString();
                /** @type {?} */
                let istoday = d1 == today;
                /** @type {?} */
                let colorsEvents = this.getnbevents(day, month - 1);
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
    }
    /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    getNbWeeks(month, year) {
        /** @type {?} */
        let dayone = new Date(year, month - 1, 1).getDay();
        /** @type {?} */
        let nbdaysMonth = new Date(year, month, 0).getDate();
        /** @type {?} */
        let lastday = new Date(year, month - 1, nbdaysMonth).getDay();
        return (nbdaysMonth + dayone + (6 - lastday)) / 7;
    }
    /**
     * @param {?} day
     * @param {?} month
     * @return {?}
     */
    dayClickedFn(day, month) {
        /** @type {?} */
        let date = new Date(this.year, month, day.day);
        this.daydetails = { events: [] };
        if (this.events.length > 0) {
            this.loader = true;
            this.daydetails = clone(day);
            /** @type {?} */
            let d1 = new Date(this.year, month, day.day).toDateString();
            for (let index = 0; index < this.events.length; index++) {
                /** @type {?} */
                const element = this.events[index];
                /** @type {?} */
                let d2 = element.start.toDateString();
                if (d2 == d1) {
                    this.daydetails.events.push(element);
                }
            }
        }
        this.dayClicked.emit({ date: date, events: this.daydetails.events });
    }
    /**
     * @param {?} day
     * @param {?} month
     * @return {?}
     */
    getTodayEvents(day, month) {
        this.daydetails = {};
        if (this.events.length > 0) {
            this.loader = true;
            this.daydetails = clone(day);
            /** @type {?} */
            let d1 = new Date(this.year, month, day.day).toDateString();
            for (let index = 0; index < this.events.length; index++) {
                /** @type {?} */
                const element = this.events[index];
                /** @type {?} */
                let d2 = element.start.toDateString();
                if (d2 == d1) {
                    this.daydetails.events.push(element);
                }
                if (index == this.events.length - 1) {
                    /** @type {?} */
                    let self = this;
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        self.loader = false;
                    }), 1000);
                }
            }
        }
    }
    /**
     * @param {?} day
     * @param {?} month
     * @return {?}
     */
    getnbevents(day, month) {
        /** @type {?} */
        let nb = 0;
        /** @type {?} */
        let colors = [];
        if (this.events.length > 0) {
            /** @type {?} */
            let d1 = new Date(this.year, month, day).toDateString();
            for (let index = 0; index < this.events.length; index++) {
                /** @type {?} */
                const element = this.events[index];
                /** @type {?} */
                let d2 = element.start.toDateString();
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    eventClickedFn(event) {
        this.eventClicked.emit(event);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    refresh(date) {
        this.initCalendar(date);
    }
    /**
     * @param {?} action
     * @param {?=} event
     * @return {?}
     */
    actionClickedFn(action, event) {
        this.actionClicked.emit({ action: action, event: event });
    }
}
AngularCalendarYearViewComponent.ɵfac = function AngularCalendarYearViewComponent_Factory(t) { return new (t || AngularCalendarYearViewComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer)); };
AngularCalendarYearViewComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: AngularCalendarYearViewComponent, selectors: [["angular-calendar-year-view"]], hostVars: 2, hostBindings: function AngularCalendarYearViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleMap(ctx.style);
    } }, inputs: { themecolor: "themecolor", events: "events", viewDate: "viewDate", nothingToshowText: "nothingToshowText", popoverEnabled: "popoverEnabled", customTemplate: "customTemplate" }, outputs: { eventClicked: "eventClicked", actionClicked: "actionClicked", dayClicked: "dayClicked" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 2, consts: [[1, "calendarcontainer", "flexmonths"], ["class", "responsivecontainer", 4, "ngFor", "ngForOf"], ["class", "calendar-loading", 4, "ngIf"], ["yearcalendarpoptemplate", ""], [1, "responsivecontainer"], [1, "monthcontainer"], [1, "monthname"], [1, "flexdays"], ["class", "day", 4, "ngFor", "ngForOf"], ["class", "flexdays", 4, "ngFor", "ngForOf"], [1, "day"], ["class", "day", "placement", "right", 3, "ngClass", "background-image", "outsideClick", "popover", "onShown", "click", 4, "ngFor", "ngForOf"], ["placement", "right", 1, "day", 3, "ngClass", "outsideClick", "popover", "onShown", "click"], [1, "calendar-loading"], ["viewBox", "25 25 50 50", 1, "spinner"], ["cx", "50", "cy", "50", "r", "20", "fill", "none", "stroke-width", "2", "stroke-miterlimit", "10", 1, "path"], [1, "col-md-12", "col-calendar"], [1, "pop_year_day", 3, "ngClass"], [1, "pop_year_day_number", 3, "ngClass"], [4, "ngIf"], ["class", "progressbar_popyear", 4, "ngIf"], [1, "loader_popover_calendar", 3, "hidden"], [4, "ngFor", "ngForOf"], ["class", "icon-action-calendar", 3, "color", "innerHTML", "click", 4, "ngFor", "ngForOf"], [1, "circle_day_color"], [1, "pop_year_event_title", 3, "click"], [1, "icon-action-calendar", 3, "innerHTML", "click"], [1, "progressbar_popyear"]], template: function AngularCalendarYearViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, AngularCalendarYearViewComponent_div_1_Template, 8, 6, "div", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, AngularCalendarYearViewComponent_div_2_Template, 3, 0, "div", 2);
        ɵngcc0.ɵɵtemplate(3, AngularCalendarYearViewComponent_ng_template_3_Template, 9, 10, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.calendar);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.spinner);
    } }, directives: [ɵngcc2.NgForOf, ɵngcc2.NgIf, ɵngcc2.NgClass, ɵngcc3.PopoverDirective], pipes: [ɵngcc2.DatePipe], styles: [".flexdays[_ngcontent-%COMP%]{display:flex}.flexmonths[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.calendarcontainer[_ngcontent-%COMP%]{margin:auto;padding:15px}.col-calendar[_ngcontent-%COMP%]{min-width:250px}.monthcontainer[_ngcontent-%COMP%]{width:245px;margin:auto auto 25px;background:#fff;padding:10px;min-height:293px}.haveevents[_ngcontent-%COMP%]{background:linear-gradient(120deg,var(--primary),#fff);color:var(--textcolor)}.flexdays[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{padding:2px;width:28px!important;height:28px!important;border-radius:50%;margin:2px;text-align:center}.flexdays[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:hover, .yeardayactive[_ngcontent-%COMP%]{background:#eee;cursor:pointer}.monthname[_ngcontent-%COMP%]{text-align:center;font-size:18px;color:var(--themecolor);text-transform:capitalize}.title-calendar-year[_ngcontent-%COMP%]{margin-bottom:25px}.todayclass[_ngcontent-%COMP%]{background:var(--themecolor)!important;color:#fff}.eventclass[_ngcontent-%COMP%]{background:#4ab3cc!important;color:#fff}.todaytext[_ngcontent-%COMP%]{color:var(--themecolor)!important}.eventtext[_ngcontent-%COMP%]{color:#4ab3cc!important}.void_day[_ngcontent-%COMP%]{pointer-events:none}.pop_year_day[_ngcontent-%COMP%]{color:#6c6c6c;font-size:16px}.pop_year_day_number[_ngcontent-%COMP%]{font-size:38px;color:#b3b3b3;margin-left:6px;margin-top:-15px}.circle_day_color[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;float:left;margin-right:6px;margin-top:5px;border:1px solid}.pop_year_event_title[_ngcontent-%COMP%]{width:200px;color:#b7b7b6;margin-top:-8px}.progressbar_popyear[_ngcontent-%COMP%]{width:200px;padding:13px 0}.pop_year_event_title[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer}.icon-action-calendar[_ngcontent-%COMP%]{float:right;color:#8a8989!important;cursor:pointer}.icon-action-calendar[_ngcontent-%COMP%]:hover{opacity:.4}.calendar-loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{height:200px;width:200px;-webkit-animation:2s linear infinite rotate;animation:2s linear infinite rotate;-webkit-transform-origin:center center;transform-origin:center center;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.calendar-loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%]{stroke-dasharray:1,200;stroke-dashoffset:0;-webkit-animation:1.5s ease-in-out infinite dash;animation:1.5s ease-in-out infinite dash;stroke-linecap:round;stroke:var(--themecolor)}@-webkit-keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.loader_popover_calendar[_ngcontent-%COMP%]{height:6px;width:90%;margin-bottom:10px;overflow:hidden;background-color:#ffdede00;position:absolute}.loader_popover_calendar[_ngcontent-%COMP%]:before{display:block;position:absolute;content:\"\";left:-20px;width:20px;height:4px;background-color:var(--themecolor);-webkit-animation:1s linear infinite loading;animation:1s linear infinite loading}@-webkit-keyframes loading{from{left:-20px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}@keyframes loading{from{left:-20px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}.titles_calendar[_ngcontent-%COMP%]{font-weight:700;text-transform:capitalize}.responsivecontainer[_ngcontent-%COMP%]{width:25%}@media screen and (max-width:499px){.responsivecontainer[_ngcontent-%COMP%]{width:100%!important}}@media screen and (min-width:500px) and (max-width:749px){.responsivecontainer[_ngcontent-%COMP%]{width:50%!important}}@media screen and (min-width:750px) and (max-width:999px){.responsivecontainer[_ngcontent-%COMP%]{width:33%!important}}@media screen and (min-width:1000px){.responsivecontainer[_ngcontent-%COMP%]{width:25%!important}}"] });
/** @nocollapse */
AngularCalendarYearViewComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AngularCalendarYearViewComponent, [{
        type: Component,
        args: [{
                selector: 'angular-calendar-year-view',
                template: `
  <div class="calendarcontainer flexmonths">
  <div class="responsivecontainer" *ngFor="let Month of calendar;let m =index">
      <div  class="monthcontainer ">
        <p class="monthname">{{Month.date | date:'MMMM'}}</p>
        <div class="flexdays">
          <div class="day" *ngFor="let label of days">
            {{label | date:'EEEEEE'}}
          </div>
        </div>
        <div *ngFor="let week of Month.days" class="flexdays">
          <div *ngFor="let day of week;let i=index" [ngClass]="day?( day.istoday?'todayclass':(day.nb>0?'haveevents':'')):   'void_day'"
            [style.background-image]="day? ('linear-gradient(120deg, '+day.colors+',#fff)'):''" class="day" 
            [outsideClick]="true"
            [popover]="popoverEnabled?(customTemplate?customTemplate:yearcalendarpoptemplate):''" 
            placement="right" 
            (onShown)="dayindex=i;getTodayEvents(day,m)"
            (click)="dayClickedFn(day,m)">
            {{day?.day}}
          </div>
        </div>
      </div>
  </div>
</div>
<div *ngIf="spinner" class="calendar-loading">
  <svg class="spinner" viewBox="25 25 50 50">
    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
  </svg>
</div>
<ng-template #yearcalendarpoptemplate>
  <div class="col-md-12 col-calendar">
    <p [ngClass]="daydetails.istoday?'todaytext':''" class="pop_year_day">{{days[dayindex]| date:'EEEEEE'}}.</p>
    <p [ngClass]="daydetails.istoday?'todaytext':''" class="pop_year_day_number">{{daydetails?.day}} </p>
    <div *ngIf="!loader">
      <div *ngFor="let event of daydetails.events">
          <a   [style.color]="event.color.primary+'!importants'" 
               class="icon-action-calendar" 
               *ngFor='let action of event.actions' 
                [innerHTML]='action.label' 
                (click)="actionClickedFn(action.name,event)"
                >
            
          </a>
        <div class="circle_day_color" [style.background]="event.color.secondary" [style.border-color]="event.color.primary"></div>
        <p class="pop_year_event_title" (click)="eventClickedFn(event)">
          <span>
            {{event.start| date:'HH:mm'}}
          </span>
          {{event.title}}
        </p>
        
      </div>
    </div>
    <div class="progressbar_popyear" *ngIf="!daydetails.events||(daydetails.events.length==0)&&!loader">
     {{nothingToshowText}} 
    </div>
    <div [hidden]="!loader" class="loader_popover_calendar"></div>
  </div>
</ng-template>
  `,
                styles: [".flexdays{display:flex}.flexmonths{display:flex;flex-wrap:wrap}.calendarcontainer{margin:auto;padding:15px}.col-calendar{min-width:250px}.monthcontainer{width:245px;margin:auto auto 25px;background:#fff;padding:10px;min-height:293px}.haveevents{background:linear-gradient(120deg,var(--primary),#fff);color:var(--textcolor)}.flexdays .day{padding:2px;width:28px!important;height:28px!important;border-radius:50%;margin:2px;text-align:center}.flexdays .day:hover,.yeardayactive{background:#eee;cursor:pointer}.monthname{text-align:center;font-size:18px;color:var(--themecolor);text-transform:capitalize}.title-calendar-year{margin-bottom:25px}.todayclass{background:var(--themecolor)!important;color:#fff}.eventclass{background:#4ab3cc!important;color:#fff}.todaytext{color:var(--themecolor)!important}.eventtext{color:#4ab3cc!important}.void_day{pointer-events:none}.pop_year_day{color:#6c6c6c;font-size:16px}.pop_year_day_number{font-size:38px;color:#b3b3b3;margin-left:6px;margin-top:-15px}.circle_day_color{width:10px;height:10px;border-radius:50%;float:left;margin-right:6px;margin-top:5px;border:1px solid}.pop_year_event_title{width:200px;color:#b7b7b6;margin-top:-8px}.progressbar_popyear{width:200px;padding:13px 0}.pop_year_event_title:hover{text-decoration:underline;cursor:pointer}.icon-action-calendar{float:right;color:#8a8989!important;cursor:pointer}.icon-action-calendar:hover{opacity:.4}.calendar-loading .spinner{height:200px;width:200px;-webkit-animation:2s linear infinite rotate;animation:2s linear infinite rotate;-webkit-transform-origin:center center;transform-origin:center center;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.calendar-loading .spinner .path{stroke-dasharray:1,200;stroke-dashoffset:0;-webkit-animation:1.5s ease-in-out infinite dash;animation:1.5s ease-in-out infinite dash;stroke-linecap:round;stroke:var(--themecolor)}@-webkit-keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.loader_popover_calendar{height:6px;width:90%;margin-bottom:10px;overflow:hidden;background-color:#ffdede00;position:absolute}.loader_popover_calendar:before{display:block;position:absolute;content:\"\";left:-20px;width:20px;height:4px;background-color:var(--themecolor);-webkit-animation:1s linear infinite loading;animation:1s linear infinite loading}@-webkit-keyframes loading{from{left:-20px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}@keyframes loading{from{left:-20px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}.titles_calendar{font-weight:700;text-transform:capitalize}.responsivecontainer{width:25%}@media screen and (max-width:499px){.responsivecontainer{width:100%!important}}@media screen and (min-width:500px) and (max-width:749px){.responsivecontainer{width:50%!important}}@media screen and (min-width:750px) and (max-width:999px){.responsivecontainer{width:33%!important}}@media screen and (min-width:1000px){.responsivecontainer{width:25%!important}}"]
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }]; }, { themecolor: [{
            type: Input
        }], events: [{
            type: Input
        }], viewDate: [{
            type: Input
        }], nothingToshowText: [{
            type: Input
        }], popoverEnabled: [{
            type: Input
        }], eventClicked: [{
            type: Output
        }], actionClicked: [{
            type: Output
        }], dayClicked: [{
            type: Output
        }], style: [{
            type: HostBinding,
            args: ['style']
        }], customTemplate: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularCalendarYearViewModule {
}
AngularCalendarYearViewModule.ɵfac = function AngularCalendarYearViewModule_Factory(t) { return new (t || AngularCalendarYearViewModule)(); };
AngularCalendarYearViewModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: AngularCalendarYearViewModule });
AngularCalendarYearViewModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            PopoverModule.forRoot()
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AngularCalendarYearViewModule, [{
        type: NgModule,
        args: [{
                declarations: [AngularCalendarYearViewComponent],
                imports: [
                    CommonModule,
                    PopoverModule.forRoot()
                ],
                schemas: [],
                exports: [AngularCalendarYearViewComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AngularCalendarYearViewModule, { declarations: function () { return [AngularCalendarYearViewComponent]; }, imports: function () { return [CommonModule, ɵngcc3.PopoverModule]; }, exports: function () { return [AngularCalendarYearViewComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularCalendarYearViewService, AngularCalendarYearViewComponent, AngularCalendarYearViewModule };

//# sourceMappingURL=angular-calendar-year-view.js.map