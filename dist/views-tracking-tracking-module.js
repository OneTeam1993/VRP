(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-tracking-tracking-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/index.js ***!
  \**************************************************************************/
/*! exports provided: Observable, ConnectableObservable, GroupedObservable, observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, asapScheduler, asyncScheduler, queueScheduler, animationFrameScheduler, VirtualTimeScheduler, VirtualAction, Scheduler, Subscription, Subscriber, Notification, pipe, noop, identity, isObservable, ArgumentOutOfRangeError, EmptyError, ObjectUnsubscribedError, UnsubscriptionError, TimeoutError, bindCallback, bindNodeCallback, combineLatest, concat, defer, empty, forkJoin, from, fromEvent, fromEventPattern, generate, iif, interval, merge, never, of, onErrorResumeNext, pairs, race, range, throwError, timer, using, zip, EMPTY, NEVER, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _internal_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony import */ var _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__["ConnectableObservable"]; });

/* harmony import */ var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/groupBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__["GroupedObservable"]; });

/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__["observable"]; });

/* harmony import */ var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/Subject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]; });

/* harmony import */ var _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/BehaviorSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]; });

/* harmony import */ var _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/ReplaySubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"]; });

/* harmony import */ var _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__["AsyncSubject"]; });

/* harmony import */ var _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/asap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asap"]; });

/* harmony import */ var _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["async"]; });

/* harmony import */ var _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queue"]; });

/* harmony import */ var _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrame"]; });

/* harmony import */ var _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualTimeScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualAction"]; });

/* harmony import */ var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Scheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__["Scheduler"]; });

/* harmony import */ var _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__["Subscription"]; });

/* harmony import */ var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__["Subscriber"]; });

/* harmony import */ var _internal_Notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./internal/Notification */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["Notification"]; });

/* harmony import */ var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__["pipe"]; });

/* harmony import */ var _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__["noop"]; });

/* harmony import */ var _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__["identity"]; });

/* harmony import */ var _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__["isObservable"]; });

/* harmony import */ var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__["ArgumentOutOfRangeError"]; });

/* harmony import */ var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/EmptyError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__["EmptyError"]; });

/* harmony import */ var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__["ObjectUnsubscribedError"]; });

/* harmony import */ var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__["UnsubscriptionError"]; });

/* harmony import */ var _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/TimeoutError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__["TimeoutError"]; });

/* harmony import */ var _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/bindCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__["bindCallback"]; });

/* harmony import */ var _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__["bindNodeCallback"]; });

/* harmony import */ var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/combineLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__["combineLatest"]; });

/* harmony import */ var _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__["concat"]; });

/* harmony import */ var _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/defer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__["defer"]; });

/* harmony import */ var _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["empty"]; });

/* harmony import */ var _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/forkJoin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__["forkJoin"]; });

/* harmony import */ var _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__["from"]; });

/* harmony import */ var _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__["fromEvent"]; });

/* harmony import */ var _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__["fromEventPattern"]; });

/* harmony import */ var _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/generate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__["generate"]; });

/* harmony import */ var _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/iif.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__["iif"]; });

/* harmony import */ var _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__["interval"]; });

/* harmony import */ var _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__["merge"]; });

/* harmony import */ var _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/never.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "never", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["never"]; });

/* harmony import */ var _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__["of"]; });

/* harmony import */ var _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__["onErrorResumeNext"]; });

/* harmony import */ var _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__["pairs"]; });

/* harmony import */ var _internal_observable_race__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/race.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_observable_race__WEBPACK_IMPORTED_MODULE_44__["race"]; });

/* harmony import */ var _internal_observable_range__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _internal_observable_range__WEBPACK_IMPORTED_MODULE_45__["range"]; });

/* harmony import */ var _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/throwError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_46__["throwError"]; });

/* harmony import */ var _internal_observable_timer__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _internal_observable_timer__WEBPACK_IMPORTED_MODULE_47__["timer"]; });

/* harmony import */ var _internal_observable_using__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/using.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "using", function() { return _internal_observable_using__WEBPACK_IMPORTED_MODULE_48__["using"]; });

/* harmony import */ var _internal_observable_zip__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _internal_observable_zip__WEBPACK_IMPORTED_MODULE_49__["zip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["NEVER"]; });

/* harmony import */ var _internal_config__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./internal/config */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _internal_config__WEBPACK_IMPORTED_MODULE_50__["config"]; });

/** PURE_IMPORTS_START  PURE_IMPORTS_END */





















































//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/AsyncSubject.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/AsyncSubject.js ***!
  \******************************************************************************************/
/*! exports provided: AsyncSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return AsyncSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */



var AsyncSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

//# sourceMappingURL=AsyncSubject.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/BehaviorSubject.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/BehaviorSubject.js ***!
  \*********************************************************************************************/
/*! exports provided: BehaviorSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return BehaviorSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */



var BehaviorSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_2__["ObjectUnsubscribedError"]();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

//# sourceMappingURL=BehaviorSubject.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/InnerSubscriber.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/InnerSubscriber.js ***!
  \*********************************************************************************************/
/*! exports provided: InnerSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function() { return InnerSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var InnerSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

//# sourceMappingURL=InnerSubscriber.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Notification.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Notification.js ***!
  \******************************************************************************************/
/*! exports provided: NotificationKind, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return NotificationKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/empty */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/of */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/throwError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/throwError.js");
/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */



var NotificationKind;
/*@__PURE__*/ (function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = /*@__PURE__*/ (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case "N":
                return observer.next && observer.next(this.value);
            case "E":
                return observer.error && observer.error(this.error);
            case "C":
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case "N":
                return next && next(this.value);
            case "E":
                return error && error(this.error);
            case "C":
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case "N":
                return Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);
            case "E":
                return Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.error);
            case "C":
                return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification("N", value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification("E", undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification("C");
    Notification.undefinedValueNotification = new Notification("N", undefined);
    return Notification;
}());

//# sourceMappingURL=Notification.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js ***!
  \****************************************************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/canReportError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/toSubscriber.js");
/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/symbol/observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/config.js");
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_internal_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */





var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = Object(_util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__["toSubscriber"])(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_0__["canReportError"])(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[_internal_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = _config__WEBPACK_IMPORTED_MODULE_4__["config"].Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observer.js ***!
  \**************************************************************************************/
/*! exports provided: empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__["config"].useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__["hostReportError"])(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/OuterSubscriber.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/OuterSubscriber.js ***!
  \*********************************************************************************************/
/*! exports provided: OuterSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function() { return OuterSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var OuterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

//# sourceMappingURL=OuterSubscriber.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/ReplaySubject.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/ReplaySubject.js ***!
  \*******************************************************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return ReplaySubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduler/queue */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/queue.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/observeOn */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/observeOn.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/SubjectSubscription.js");
/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */







var ReplaySubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
            bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
            windowTime = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        var _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
            _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_5__["ObjectUnsubscribedError"]();
        }
        else if (this.isStopped || this.hasError) {
            subscription = _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_6__["SubjectSubscription"](this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__["ObserveOnSubscriber"](subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_2__["queue"]).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

var ReplayEvent = /*@__PURE__*/ (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Scheduler.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Scheduler.js ***!
  \***************************************************************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subject.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subject.js ***!
  \*************************************************************************************/
/*! exports provided: SubjectSubscriber, Subject, AnonymousSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscriber", function() { return SubjectSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function() { return AnonymousSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/SubjectSubscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */







var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]));

var Subject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_6__["rxSubscriber"]] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"](this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]));

var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/SubjectSubscription.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/SubjectSubscription.js ***!
  \*************************************************************************************************/
/*! exports provided: SubjectSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]));

//# sourceMappingURL=SubjectSubscription.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js ***!
  \****************************************************************************************/
/*! exports provided: Subscriber, SafeSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return Subscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeSubscriber", function() { return SafeSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observer */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observer.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"];
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"];
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__["rxSubscriber"]] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]));

var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
                context = Object.create(observerOrNext);
                if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

//# sourceMappingURL=Subscriber.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js ***!
  \******************************************************************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isObject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */




var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                hasErrors = true;
                errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        hasErrors = true;
                        errors = errors || [];
                        if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"](errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                if (!teardown) {
                    return Subscription.EMPTY;
                }
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        if (subscription._addParent(this)) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                subscriptions.push(subscription);
            }
            else {
                this._subscriptions = [subscription];
            }
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (_parent === parent) {
            return false;
        }
        else if (!_parent) {
            this._parent = parent;
            return true;
        }
        else if (!_parents) {
            this._parents = [parent];
            return true;
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
            return true;
        }
        return false;
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/config.js":
/*!************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/config.js ***!
  \************************************************************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js ***!
  \**************************************************************************************************************/
/*! exports provided: ConnectableObservable, connectableObservableDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return ConnectableObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectableObservableDescriptor", function() { return connectableObservableDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _operators_refCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operators/refCount */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/refCount.js");
/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */






var ConnectableObservable = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = _Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_5__["refCount"])()(this);
    };
    return ConnectableObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]));

var connectableProto = ConnectableObservable.prototype;
var connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null, writable: true },
    _connection: { value: null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
};
var ConnectableSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["SubjectSubscriber"]));
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]));
//# sourceMappingURL=ConnectableObservable.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/bindCallback.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/bindCallback.js ***!
  \*****************************************************************************************************/
/*! exports provided: bindCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return bindCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */






function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_5__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_4__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js ***!
  \*********************************************************************************************************/
/*! exports provided: bindNodeCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return bindNodeCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js");
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */






function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_5__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/combineLatest.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/combineLatest.js ***!
  \******************************************************************************************************/
/*! exports provided: combineLatest, CombineLatestOperator, CombineLatestSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return combineLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function() { return CombineLatestOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestSubscriber", function() { return CombineLatestSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fromArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */






var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = null;
    var scheduler = null;
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(observables[0])) {
        observables = observables[0];
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_5__["fromArray"])(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var CombineLatestOperator = /*@__PURE__*/ (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());

var CombineLatestSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]));

//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/concat.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/concat.js ***!
  \***********************************************************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./of */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/concatAll */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/concatAll.js");
/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */


function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_1__["concatAll"])()(_of__WEBPACK_IMPORTED_MODULE_0__["of"].apply(void 0, observables));
}
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/defer.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/defer.js ***!
  \**********************************************************************************************/
/*! exports provided: defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function defer(observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(input) : Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        return source.subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/empty.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/empty.js ***!
  \**********************************************************************************************/
/*! exports provided: EMPTY, empty, emptyScheduled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyScheduled", function() { return emptyScheduled; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

var EMPTY = /*@__PURE__*/ new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/forkJoin.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/forkJoin.js ***!
  \*************************************************************************************************/
/*! exports provided: forkJoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return forkJoin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../operators/map */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START tslib,_Observable,_util_isArray,_empty,_util_subscribeToResult,_OuterSubscriber,_operators_map PURE_IMPORTS_END */







function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var resultSelector;
    if (typeof sources[sources.length - 1] === 'function') {
        resultSelector = sources.pop();
    }
    if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(sources[0])) {
        sources = sources[0];
    }
    if (sources.length === 0) {
        return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
    if (resultSelector) {
        return forkJoin(sources).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_6__["map"])(function (args) { return resultSelector.apply(void 0, args); }));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
        return new ForkJoinSubscriber(subscriber, sources);
    });
}
var ForkJoinSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources) {
        var _this = _super.call(this, destination) || this;
        _this.sources = sources;
        _this.completed = 0;
        _this.haveValues = 0;
        var len = sources.length;
        _this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            var source = sources[i];
            var innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(_this, source, null, i);
            if (innerSubscription) {
                _this.add(innerSubscription);
            }
        }
        return _this;
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
        var _a = this, destination = _a.destination, haveValues = _a.haveValues, values = _a.values;
        var len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            destination.next(values);
        }
        destination.complete();
    };
    return ForkJoinSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_5__["OuterSubscriber"]));
//# sourceMappingURL=forkJoin.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/from.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/from.js ***!
  \*********************************************************************************************/
/*! exports provided: from */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isPromise */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isPromise.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isIterable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isIterable.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fromArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _fromPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fromPromise */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromPromise.js");
/* harmony import */ var _fromIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fromIterable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromIterable.js");
/* harmony import */ var _fromObservable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fromObservable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromObservable.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/** PURE_IMPORTS_START _Observable,_util_isPromise,_util_isArrayLike,_util_isInteropObservable,_util_isIterable,_fromArray,_fromPromise,_fromIterable,_fromObservable,_util_subscribeTo PURE_IMPORTS_END */










function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
            return input;
        }
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_9__["subscribeTo"])(input));
    }
    if (input != null) {
        if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_3__["isInteropObservable"])(input)) {
            return Object(_fromObservable__WEBPACK_IMPORTED_MODULE_8__["fromObservable"])(input, scheduler);
        }
        else if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_1__["isPromise"])(input)) {
            return Object(_fromPromise__WEBPACK_IMPORTED_MODULE_6__["fromPromise"])(input, scheduler);
        }
        else if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__["isArrayLike"])(input)) {
            return Object(_fromArray__WEBPACK_IMPORTED_MODULE_5__["fromArray"])(input, scheduler);
        }
        else if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_4__["isIterable"])(input) || typeof input === 'string') {
            return Object(_fromIterable__WEBPACK_IMPORTED_MODULE_7__["fromIterable"])(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=from.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromArray.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromArray.js ***!
  \**************************************************************************************************/
/*! exports provided: fromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToArray PURE_IMPORTS_END */



function fromArray(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_2__["subscribeToArray"])(input));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            var i = 0;
            sub.add(scheduler.schedule(function () {
                if (i === input.length) {
                    subscriber.complete();
                    return;
                }
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    sub.add(this.schedule());
                }
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromArray.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromEvent.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromEvent.js ***!
  \**************************************************************************************************/
/*! exports provided: fromEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return fromEvent; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




var toString = Object.prototype.toString;
function fromEvent(target, eventName, options, resultSelector) {
    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js ***!
  \*********************************************************************************************************/
/*! exports provided: fromEventPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return fromEventPattern; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}
//# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromIterable.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromIterable.js ***!
  \*****************************************************************************************************/
/*! exports provided: fromIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromIterable", function() { return fromIterable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/* harmony import */ var _util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToIterable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator,_util_subscribeToIterable PURE_IMPORTS_END */




function fromIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__["subscribeToIterable"])(input));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            var iterator;
            sub.add(function () {
                if (iterator && typeof iterator.return === 'function') {
                    iterator.return();
                }
            });
            sub.add(scheduler.schedule(function () {
                iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__["iterator"]]();
                sub.add(scheduler.schedule(function () {
                    if (subscriber.closed) {
                        return;
                    }
                    var value;
                    var done;
                    try {
                        var result = iterator.next();
                        value = result.value;
                        done = result.done;
                    }
                    catch (err) {
                        subscriber.error(err);
                        return;
                    }
                    if (done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(value);
                        this.schedule();
                    }
                }));
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromIterable.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromObservable.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromObservable.js ***!
  \*******************************************************************************************************/
/*! exports provided: fromObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromObservable", function() { return fromObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony import */ var _util_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToObservable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable,_util_subscribeToObservable PURE_IMPORTS_END */




function fromObservable(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__["subscribeToObservable"])(input));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            sub.add(scheduler.schedule(function () {
                var observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]();
                sub.add(observable.subscribe({
                    next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                    error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                    complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
                }));
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromObservable.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromPromise.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromPromise.js ***!
  \****************************************************************************************************/
/*! exports provided: fromPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToPromise */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToPromise PURE_IMPORTS_END */



function fromPromise(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__["subscribeToPromise"])(input));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            sub.add(scheduler.schedule(function () {
                return input.then(function (value) {
                    sub.add(scheduler.schedule(function () {
                        subscriber.next(value);
                        sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                    }));
                }, function (err) {
                    sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
                });
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromPromise.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/generate.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/generate.js ***!
  \*************************************************************************************************/
/*! exports provided: generate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/identity.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */



function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/iif.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/iif.js ***!
  \********************************************************************************************/
/*! exports provided: iif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return iif; });
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defer */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/defer.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */


function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) {
        trueResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
    }
    if (falseResult === void 0) {
        falseResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
    }
    return Object(_defer__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () { return condition() ? trueResult : falseResult; });
}
//# sourceMappingURL=iif.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/interval.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/interval.js ***!
  \*************************************************************************************************/
/*! exports provided: interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return interval; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isNumeric.js");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */



function interval(period, scheduler) {
    if (period === void 0) {
        period = 0;
    }
    if (scheduler === void 0) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/merge.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/merge.js ***!
  \**********************************************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/mergeAll */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/mergeAll.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fromArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */




function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
        return observables[0];
    }
    return Object(_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(concurrent)(Object(_fromArray__WEBPACK_IMPORTED_MODULE_3__["fromArray"])(observables, scheduler));
}
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/never.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/never.js ***!
  \**********************************************************************************************/
/*! exports provided: NEVER, never */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return NEVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "never", function() { return never; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/noop.js");
/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */


var NEVER = /*@__PURE__*/ new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](_util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"]);
function never() {
    return NEVER;
}
//# sourceMappingURL=never.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/of.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/of.js ***!
  \*******************************************************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of", function() { return of; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony import */ var _scalar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scalar */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/scalar.js");
/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_empty,_scalar PURE_IMPORTS_END */




function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(scheduler)) {
        args.pop();
    }
    else {
        scheduler = undefined;
    }
    switch (args.length) {
        case 0:
            return Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])(scheduler);
        case 1:
            return scheduler ? Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args, scheduler) : Object(_scalar__WEBPACK_IMPORTED_MODULE_3__["scalar"])(args[0]);
        default:
            return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args, scheduler);
    }
}
//# sourceMappingURL=of.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js ***!
  \**********************************************************************************************************/
/*! exports provided: onErrorResumeNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return onErrorResumeNext; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */




function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
        return Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/pairs.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/pairs.js ***!
  \**********************************************************************************************/
/*! exports provided: pairs, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function pairs(obj, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
//# sourceMappingURL=pairs.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/race.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/race.js ***!
  \*********************************************************************************************/
/*! exports provided: race, RaceOperator, RaceSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceOperator", function() { return RaceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceSubscriber", function() { return RaceSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */





function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1) {
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_2__["fromArray"])(observables, undefined).lift(new RaceOperator());
}
var RaceOperator = /*@__PURE__*/ (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());

var RaceSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]));

//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/range.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/range.js ***!
  \**********************************************************************************************/
/*! exports provided: range, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function range(start, count, scheduler) {
    if (start === void 0) {
        start = 0;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        if (count === undefined) {
            count = start;
            start = 0;
        }
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
//# sourceMappingURL=range.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/scalar.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/scalar.js ***!
  \***********************************************************************************************/
/*! exports provided: scalar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalar", function() { return scalar; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function scalar(value) {
    var result = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        subscriber.next(value);
        subscriber.complete();
    });
    result._isScalar = true;
    result.value = value;
    return result;
}
//# sourceMappingURL=scalar.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/throwError.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/throwError.js ***!
  \***************************************************************************************************/
/*! exports provided: throwError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/timer.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/timer.js ***!
  \**********************************************************************************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isNumeric.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */




function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    var period = -1;
    if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var due = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/using.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/using.js ***!
  \**********************************************************************************************/
/*! exports provided: using */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "using", function() { return using; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function using(resourceFactory, observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(result) : _empty__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
//# sourceMappingURL=using.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/zip.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/zip.js ***!
  \********************************************************************************************/
/*! exports provided: zip, ZipOperator, ZipSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipOperator", function() { return ZipOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipSubscriber", function() { return ZipSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal/symbol/iterator */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */







function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(observables, undefined).lift(new ZipOperator(resultSelector));
}
var ZipOperator = /*@__PURE__*/ (function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}());

var ZipSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        if (values === void 0) {
            values = Object.create(null);
        }
        var _this = _super.call(this, destination) || this;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
        _this.values = values;
        return _this;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] === 'function') {
            iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--;
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryresultSelector = function (args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]));

var StaticIterator = /*@__PURE__*/ (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = /*@__PURE__*/ (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
var ZipBufferIterator = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] = function () {
        return this;
    };
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_5__["subscribeToResult"])(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_4__["OuterSubscriber"]));
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/concatAll.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/concatAll.js ***!
  \*************************************************************************************************/
/*! exports provided: concatAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return concatAll; });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeAll */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/mergeAll.js");
/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */

function concatAll() {
    return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])(1);
}
//# sourceMappingURL=concatAll.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/groupBy.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/groupBy.js ***!
  \***********************************************************************************************/
/*! exports provided: groupBy, GroupedObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return GroupedObservable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subject.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */





function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
var GroupByOperator = /*@__PURE__*/ (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
var GroupBySubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]());
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
var GroupDurationSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
var GroupedObservable = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]));

var InnerRefCountSubscription = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]));
//# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/map.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/map.js ***!
  \*******************************************************************************************/
/*! exports provided: map, MapOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOperator", function() { return MapOperator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());

var MapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=map.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/mergeAll.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/mergeAll.js ***!
  \************************************************************************************************/
/*! exports provided: mergeAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return mergeAll; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/mergeMap.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/identity.js");
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */


function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"], concurrent);
}
//# sourceMappingURL=mergeAll.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/mergeMap.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/mergeMap.js ***!
  \************************************************************************************************/
/*! exports provided: mergeMap, MergeMapOperator, MergeMapSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapOperator", function() { return MergeMapOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapSubscriber", function() { return MergeMapSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/InnerSubscriber.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observable/from */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/observable/from.js");
/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */






function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return Object(_observable_from__WEBPACK_IMPORTED_MODULE_5__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
var MergeMapOperator = /*@__PURE__*/ (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());

var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
        var innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__["InnerSubscriber"](this, undefined, undefined);
        var destination = this.destination;
        destination.add(innerSubscriber);
        Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, ish, value, index, innerSubscriber);
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]));

//# sourceMappingURL=mergeMap.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/observeOn.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/observeOn.js ***!
  \*************************************************************************************************/
/*! exports provided: observeOn, ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeOn", function() { return observeOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnOperator", function() { return ObserveOnOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnSubscriber", function() { return ObserveOnSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnMessage", function() { return ObserveOnMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notification */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Notification.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */



function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
var ObserveOnOperator = /*@__PURE__*/ (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());

var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

var ObserveOnMessage = /*@__PURE__*/ (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());

//# sourceMappingURL=observeOn.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/refCount.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/operators/refCount.js ***!
  \************************************************************************************************/
/*! exports provided: refCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refCount", function() { return refCount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=refCount.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/Action.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/Action.js ***!
  \**********************************************************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var Action = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]));

//# sourceMappingURL=Action.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js ***!
  \************************************************************************************************************/
/*! exports provided: AnimationFrameAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameAction", function() { return AnimationFrameAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var AnimationFrameAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=AnimationFrameAction.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js ***!
  \***************************************************************************************************************/
/*! exports provided: AnimationFrameScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameScheduler", function() { return AnimationFrameScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AnimationFrameScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=AnimationFrameScheduler.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js ***!
  \**************************************************************************************************/
/*! exports provided: AsapAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapAction", function() { return AsapAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Immediate */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/Immediate.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */



var AsapAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__["Immediate"].setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_1__["Immediate"].clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_2__["AsyncAction"]));

//# sourceMappingURL=AsapAction.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js ***!
  \*****************************************************************************************************/
/*! exports provided: AsapScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapScheduler", function() { return AsapScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AsapScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=AsapScheduler.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js ***!
  \***************************************************************************************************/
/*! exports provided: AsyncAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncAction", function() { return AsyncAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/Action.js");
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */


var AsyncAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(_Action__WEBPACK_IMPORTED_MODULE_1__["Action"]));

//# sourceMappingURL=AsyncAction.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js ***!
  \******************************************************************************************************/
/*! exports provided: AsyncScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncScheduler", function() { return AsyncScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Scheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Scheduler.js");
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */


var AsyncScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = _Scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"].now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(_Scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"]));

//# sourceMappingURL=AsyncScheduler.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js ***!
  \***************************************************************************************************/
/*! exports provided: QueueAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueAction", function() { return QueueAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var QueueAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=QueueAction.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js ***!
  \******************************************************************************************************/
/*! exports provided: QueueScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueScheduler", function() { return QueueScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var QueueScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=QueueScheduler.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js ***!
  \************************************************************************************************************/
/*! exports provided: VirtualTimeScheduler, VirtualAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return VirtualTimeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return VirtualAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */



var VirtualTimeScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) {
            SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_2__["AsyncScheduler"]));

var VirtualAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=VirtualTimeScheduler.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js ***!
  \******************************************************************************************************/
/*! exports provided: animationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return animationFrame; });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js");
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js");
/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */


var animationFrame = /*@__PURE__*/ new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__["AnimationFrameScheduler"](_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__["AnimationFrameAction"]);
//# sourceMappingURL=animationFrame.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/asap.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/asap.js ***!
  \********************************************************************************************/
/*! exports provided: asap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return asap; });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapAction */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js");
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js");
/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */


var asap = /*@__PURE__*/ new _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__["AsapScheduler"](_AsapAction__WEBPACK_IMPORTED_MODULE_0__["AsapAction"]);
//# sourceMappingURL=asap.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/async.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/async.js ***!
  \*********************************************************************************************/
/*! exports provided: async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */


var async = /*@__PURE__*/ new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]);
//# sourceMappingURL=async.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/queue.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/queue.js ***!
  \*********************************************************************************************/
/*! exports provided: queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueAction */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js");
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueScheduler */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js");
/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */


var queue = /*@__PURE__*/ new _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__["QueueScheduler"](_QueueAction__WEBPACK_IMPORTED_MODULE_0__["QueueAction"]);
//# sourceMappingURL=queue.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/iterator.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/iterator.js ***!
  \*********************************************************************************************/
/*! exports provided: getSymbolIterator, iterator, $$iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolIterator", function() { return getSymbolIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$iterator", function() { return $$iterator; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = iterator;
//# sourceMappingURL=iterator.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/observable.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/observable.js ***!
  \***********************************************************************************************/
/*! exports provided: observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js ***!
  \*************************************************************************************************/
/*! exports provided: rxSubscriber, $$rxSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rxSubscriber", function() { return rxSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$rxSubscriber", function() { return $$rxSubscriber; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = typeof Symbol === 'function'
    ? /*@__PURE__*/ Symbol('rxSubscriber')
    : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
var $$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js ***!
  \**********************************************************************************************************/
/*! exports provided: ArgumentOutOfRangeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return ArgumentOutOfRangeError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
}
ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/EmptyError.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/EmptyError.js ***!
  \*********************************************************************************************/
/*! exports provided: EmptyError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return EmptyError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function EmptyErrorImpl() {
    Error.call(this);
    this.message = 'no elements in sequence';
    this.name = 'EmptyError';
    return this;
}
EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/Immediate.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/Immediate.js ***!
  \********************************************************************************************/
/*! exports provided: Immediate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immediate", function() { return Immediate; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var tasksByHandle = {};
function runIfPresent(handle) {
    var cb = tasksByHandle[handle];
    if (cb) {
        cb();
    }
}
var Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        tasksByHandle[handle] = cb;
        Promise.resolve().then(function () { return runIfPresent(handle); });
        return handle;
    },
    clearImmediate: function (handle) {
        delete tasksByHandle[handle];
    },
};
//# sourceMappingURL=Immediate.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js ***!
  \**********************************************************************************************************/
/*! exports provided: ObjectUnsubscribedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return ObjectUnsubscribedError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
}
ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/TimeoutError.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/TimeoutError.js ***!
  \***********************************************************************************************/
/*! exports provided: TimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function TimeoutErrorImpl() {
    Error.call(this);
    this.message = 'Timeout has occurred';
    this.name = 'TimeoutError';
    return this;
}
TimeoutErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js ***!
  \******************************************************************************************************/
/*! exports provided: UnsubscriptionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return UnsubscriptionError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/canReportError.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/canReportError.js ***!
  \*************************************************************************************************/
/*! exports provided: canReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canReportError", function() { return canReportError; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/hostReportError.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/hostReportError.js ***!
  \**************************************************************************************************/
/*! exports provided: hostReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostReportError", function() { return hostReportError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
//# sourceMappingURL=hostReportError.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/identity.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/identity.js ***!
  \*******************************************************************************************/
/*! exports provided: identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js ***!
  \******************************************************************************************/
/*! exports provided: isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArrayLike.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArrayLike.js ***!
  \**********************************************************************************************/
/*! exports provided: isArrayLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isFunction.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isFunction.js ***!
  \*********************************************************************************************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isInteropObservable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isInteropObservable.js ***!
  \******************************************************************************************************/
/*! exports provided: isInteropObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteropObservable", function() { return isInteropObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

function isInteropObservable(input) {
    return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isIterable.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isIterable.js ***!
  \*********************************************************************************************/
/*! exports provided: isIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

function isIterable(input) {
    return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]] === 'function';
}
//# sourceMappingURL=isIterable.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isNumeric.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isNumeric.js ***!
  \********************************************************************************************/
/*! exports provided: isNumeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArray.js");
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */

function isNumeric(val) {
    return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isObject.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isObject.js ***!
  \*******************************************************************************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isObservable.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isObservable.js ***!
  \***********************************************************************************************/
/*! exports provided: isObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function isObservable(obj) {
    return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
//# sourceMappingURL=isObservable.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isPromise.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isPromise.js ***!
  \********************************************************************************************/
/*! exports provided: isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isScheduler.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isScheduler.js ***!
  \**********************************************************************************************/
/*! exports provided: isScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScheduler", function() { return isScheduler; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/noop.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/noop.js ***!
  \***************************************************************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() { }
//# sourceMappingURL=noop.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/pipe.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/pipe.js ***!
  \***************************************************************************************/
/*! exports provided: pipe, pipeFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeFromArray", function() { return pipeFromArray; });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/noop.js");
/** PURE_IMPORTS_START _noop PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (!fns) {
        return _noop__WEBPACK_IMPORTED_MODULE_0__["noop"];
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeTo.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeTo.js ***!
  \**********************************************************************************************/
/*! exports provided: subscribeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/* harmony import */ var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js");
/* harmony import */ var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js");
/* harmony import */ var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArrayLike */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isArrayLike.js");
/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isPromise */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isPromise.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isObject */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _Observable,_subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */










var subscribeTo = function (result) {
    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
        return function (subscriber) {
            if (result._isScalar) {
                subscriber.next(result.value);
                subscriber.complete();
                return undefined;
            }
            else {
                return result.subscribe(subscriber);
            }
        };
    }
    else if (!!result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_9__["observable"]] === 'function') {
        return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_4__["subscribeToObservable"])(result);
    }
    else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_5__["isArrayLike"])(result)) {
        return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__["subscribeToArray"])(result);
    }
    else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_6__["isPromise"])(result)) {
        return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__["subscribeToPromise"])(result);
    }
    else if (!!result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_8__["iterator"]] === 'function') {
        return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__["subscribeToIterable"])(result);
    }
    else {
        var value = Object(_isObject__WEBPACK_IMPORTED_MODULE_7__["isObject"])(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToArray.js ***!
  \***************************************************************************************************/
/*! exports provided: subscribeToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToArray", function() { return subscribeToArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        if (!subscriber.closed) {
            subscriber.complete();
        }
    };
};
//# sourceMappingURL=subscribeToArray.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js ***!
  \******************************************************************************************************/
/*! exports provided: subscribeToIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function() { return subscribeToIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

var subscribeToIterable = function (iterable) {
    return function (subscriber) {
        var iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]]();
        do {
            var item = iterator.next();
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator.return === 'function') {
            subscriber.add(function () {
                if (iterator.return) {
                    iterator.return();
                }
            });
        }
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToIterable.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js ***!
  \********************************************************************************************************/
/*! exports provided: subscribeToObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function() { return subscribeToObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

var subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js ***!
  \*****************************************************************************************************/
/*! exports provided: subscribeToPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function() { return subscribeToPromise; });
/* harmony import */ var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostReportError */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */

var subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__["hostReportError"]);
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToPromise.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToResult.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeToResult.js ***!
  \****************************************************************************************************/
/*! exports provided: subscribeToResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToResult", function() { return subscribeToResult; });
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/InnerSubscriber.js");
/* harmony import */ var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeTo */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo PURE_IMPORTS_END */


function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
    if (destination === void 0) {
        destination = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__["InnerSubscriber"](outerSubscriber, outerValue, outerIndex);
    }
    if (destination.closed) {
        return;
    }
    return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(result)(destination);
}
//# sourceMappingURL=subscribeToResult.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/toSubscriber.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/util/toSubscriber.js ***!
  \***********************************************************************************************/
/*! exports provided: toSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSubscriber", function() { return toSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/internal/Observer.js");
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            return nextOrObserver;
        }
        if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]) {
            return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](_Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]);
    }
    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map


/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/angular-datatables/node_modules/rxjs/_esm5/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(_this.dt);
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableDirective.prototype, "dtOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], DataTableDirective.prototype, "dtTrigger", void 0);
    DataTableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[datatable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DataTableDirective);
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule_1 = DataTablesModule;
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule_1
        };
    };
    var DataTablesModule_1;
    DataTablesModule = DataTablesModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
            exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
        })
    ], DataTablesModule);
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./node_modules/moment/locale/en-Gb.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/en-Gb.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var enGb = moment.defineLocale('en-gb', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enGb;

})));


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tracking/tracking.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tracking/tracking.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"card-body pb-3 bg-success\">\r\n          <div class=\"btn-group float-right\">\r\n            <i class=\"fa fa-car fa-2x\"></i>\r\n          </div>\r\n          <div class=\"text-value\" id=\"getMove\"></div>\r\n          <div>MOVE</div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-uppercase text-muted small\">Status when vehicle is MOVING</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"card-body pb-3 bg-warning\">\r\n          <div class=\"btn-group float-right\">\r\n            <i class=\"fa fa-car fa-2x\"></i>\r\n          </div>\r\n          <div class=\"text-value\" id=\"getIdle\"></div>\r\n          <div>IDLE</div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-uppercase text-muted small\">Status when vehicle is IDLE</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"card-body pb-3 bg-danger\">\r\n          <div class=\"btn-group float-right\">\r\n            <i class=\"fa fa-car fa-2x\"></i>\r\n          </div>\r\n          <div class=\"text-value\" id=\"getStop\"></div>\r\n          <div>STOP</div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-uppercase text-muted small\">Status when vehicle is OFF</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"card-body pb-3 bg-dark\">\r\n          <div class=\"btn-group float-right\">\r\n            <i class=\"fa fa-car fa-2x\"></i>\r\n          </div>\r\n          <div class=\"text-value\" id=\"getDown\"></div>\r\n          <div>DOWN</div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-uppercase text-muted small\">Down for more than 24 hours</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <span class=\"font-weight-bold\">Vehicles:&nbsp;</span><span id=\"total-vehicles\"></span><span class=\"float-right\" id=\"coordinates-panel\"></span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div style=\"height:600px;\" id=\"map-canvas\"></div>\r\n          <div id=\"panel\">\r\n            <div id=\"color-palette\"></div>\r\n          </div>\r\n        </div><!--/.col-->\r\n      </div><!--/.row-->\r\n      <br>\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\r\n            <thead class=\"thead-dark\">\r\n              <tr>\r\n                <!--<th class=\"text-center\"><i class=\"fa fa-car\"></i></th>-->\r\n                <th>Name</th>\r\n                <th class=\"text-center\">Address</th>\r\n                <th>Date</th>\r\n                <th>Last Updated</th>\r\n                <th class=\"text-center\">Speed</th>\r\n                <th>Driver</th>\r\n                <th class=\"text-center\">Fix</th>\r\n                <th class=\"text-center\">Engine</th>\r\n                <th class=\"text-center\">GPS</th>\r\n                <th class=\"text-center\">Network</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody id=\"assetStatus\">\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <div class=\"row text-center\">\r\n        <h6>Traffic Legend</h6>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Smooth Traffic</div>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"100\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Slow Moving Traffic</div>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"100\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Heavy Traffic</div>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"100\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">No Data Available</div>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-gray-dark\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"100\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n  <!--/.card-->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tracking/traffic.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tracking/traffic.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Traffic Alerts\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <carousel [interval]=\"1000\" [(activeSlide)]=\"activeSlideIndex\">\r\n            <slide *ngFor=\"let slide of slides; let index=index\">\r\n              <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\r\n              <div class=\"carousel-caption\">\r\n                <h4>Slide {{index}}</h4>\r\n                <p>{{slide.text}}</p>\r\n              </div>\r\n            </slide>\r\n          </carousel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <span class=\"font-weight-bold\">Active Cameras:&nbsp;</span><span id=\"total-cameras\"></span><span class=\"float-right\" id=\"coordinates-panel\"></span>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div style=\"height:600px;\" id=\"traffic-map\"></div>\r\n            </div><!--/.col-->\r\n          </div><!--/.row-->\r\n          <br>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <table class=\"table table-responsive-sm table-hover table-outline mb-0\" width=\"100%\">\r\n                <thead class=\"thead-dark\">\r\n                  <tr>\r\n                    <!--<th class=\"text-center\"><i class=\"fa fa-camera\"></i></th>-->\r\n                    <th>Camera #</th>\r\n                    <th>Latitude</th>\r\n                    <th>Longtitude</th>\r\n                    <th>Date</th>\r\n                    <th>Last Updated</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody id=\"trafficStatus\">\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <h6>Traffic Speed Legend</h6>\r\n          <div class=\"row text-center\">\r\n            <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n              <div class=\"text-muted\">≥ 60 km/h</div>\r\n              <div class=\"progress progress-xs mt-2\">\r\n                <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"100\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n              <div class=\"text-muted\">40-59 km/h</div>\r\n              <div class=\"progress progress-xs mt-2\">\r\n                <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"100\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n              <div class=\"text-muted\">20-39 km/h</div>\r\n              <div class=\"progress progress-xs mt-2\">\r\n                <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"100\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n              <div class=\"text-muted\">0-19 km/h</div>\r\n              <div class=\"progress progress-xs mt-2\">\r\n                <div class=\"progress-bar bg-gray-dark\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"100\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/views/tracking/tracking-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/tracking/tracking-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TrackingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingRoutingModule", function() { return TrackingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tracking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracking.component */ "./src/app/views/tracking/tracking.component.ts");
/* harmony import */ var _traffic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./traffic.component */ "./src/app/views/tracking/traffic.component.ts");





var routes = [
    {
        path: '',
        component: _tracking_component__WEBPACK_IMPORTED_MODULE_3__["TrackingComponent"],
        data: {
            title: 'Tracking'
        }
    },
    {
        path: 'traffic',
        component: _traffic_component__WEBPACK_IMPORTED_MODULE_4__["TrafficComponent"],
        data: {
            title: 'Traffic'
        }
    }
];
var TrackingRoutingModule = /** @class */ (function () {
    function TrackingRoutingModule() {
    }
    TrackingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TrackingRoutingModule);
    return TrackingRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/tracking/tracking.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/tracking/tracking.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map-canvas {\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  margin: 0 auto 0;\r\n  padding: 0px 0px 0;\r\n  overflow: hidden;\r\n  max-width: none !important;\r\n  box-shadow: none !important;\r\n}\r\n/*==========================================================================*/\r\n/*Traffic Button Start*/\r\n.gmap-control-container {\r\n  margin: 5.3px;\r\n  margin-left: -6px;\r\n  margin-top: 10px;\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n}\r\n.gmap-control {\r\n  cursor: pointer;\r\n  background-color: -moz-linear-gradient(center top, #FEFEFE, #F3F3F3);\r\n  background-color: #FEFEFE !important;\r\n  border: 1px solid #A9BBDF;\r\n  border-radius: 2px;\r\n  padding: 0 6px;\r\n  line-height: 160%;\r\n  font-size: 11px;\r\n  font-family: Arial,sans-serif;\r\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.35);\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -o-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n}\r\n.gmap-control:hover {\r\n  border: 1px solid #678AC7;\r\n}\r\n.gmap-control-active {\r\n  background-color: -moz-linear-gradient(center top, #6D8ACC, #7B98D9) !important;\r\n  background-color: #6D8ACC !important;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  border: 1px solid #678AC7;\r\n}\r\n.gmap-control-legend {\r\n  position: absolute;\r\n  text-align: left;\r\n  z-index: -1;\r\n  top: 20px;\r\n  left: 0;\r\n  width: 150px;\r\n  height: 86px;\r\n  font-size: 10px;\r\n  background: #FEFEFE;\r\n  border: 1px solid #A9BBDF;\r\n  padding: 10px;\r\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.35);\r\n}\r\n.gmap-control-legend ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n.gmap-control-legend li {\r\n  line-height: 160%;\r\n}\r\n/*Traffic Button End*/\r\n/*Form Control Start*/\r\n/*==========================================================================*/\r\n.controls {\r\n  margin-top: 7px;\r\n  border: 1px solid transparent;\r\n  border-radius: 2px 0 0 2px;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  height: 32px;\r\n  outline: none;\r\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\r\n}\r\n#pac-input-from, #pac-input-to {\r\n  background-color: #fff;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  padding: 0 11px 0 13px;\r\n  text-overflow: ellipsis;\r\n  width: 300px;\r\n}\r\n#pac-input {\r\n  background-color: #fff;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  margin-left: 12px;\r\n  padding: 0 11px 0 13px;\r\n  text-overflow: ellipsis;\r\n  width: 300px;\r\n}\r\n#pac-inputEN {\r\n  background-color: #fff;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  margin-left: 12px;\r\n  padding: 0 11px 0 13px;\r\n  text-overflow: ellipsis;\r\n  width: 300px;\r\n}\r\n#pac-input:focus {\r\n  border-color: #4d90fe;\r\n}\r\n#pac-inputEN:focus {\r\n  border-color: #4d90fe;\r\n}\r\n.pac-container {\r\n  font-family: Roboto;\r\n}\r\n#type-selector {\r\n  color: #fff;\r\n  background-color: #4d90fe;\r\n  padding: 5px 11px 0px 11px;\r\n}\r\n#type-selector label {\r\n  font-family: Roboto;\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n}\r\n#pac-input:focus {\r\n  border-color: #4d90fe;\r\n}\r\n#target {\r\n  width: 345px;\r\n}\r\n#showDetails {\r\n  cursor: pointer;\r\n}\r\n#hideDetails {\r\n  cursor: pointer;\r\n}\r\n/*Form Control End*/\r\n/*==========================================================================*/\r\n/*Custom Style Start*/\r\n/*==========================================================================*/\r\n.gm-style .gm-style-iw {\r\n  background-color: #1e1e24 !important;\r\n  top: 0 !important;\r\n  left: 0 !important;\r\n  /*width: 100% !important;*/\r\n  max-width: 450px !important;\r\n  padding-top: 10px;\r\n  display: block !important;\r\n  overflow: visible !important;\r\n}\r\n.gm-style .gm-style-pbc {\r\n  background-color: #1e1e24 !important;\r\n}\r\n/*style the p tag*/\r\n.gm-style .gm-style-iw #google-popup p {\r\n  padding: 10px;\r\n}\r\n/*style the arrow*/\r\n.gm-style div div div div div div div div {\r\n  background-color: #1e1e24 !important;\r\n  margin: 0;\r\n  padding: 0;\r\n  top: 0;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  overflow: hidden !important;\r\n}\r\n.poi-info-window a:link {\r\n  text-decoration: none;\r\n  color: #97d8ff !important;\r\n  background: none !important;\r\n}\r\n/*style the link*/\r\n.gm-style div div div div div div div div a {\r\n  color: #f1f1f1;\r\n  font-weight: bold;\r\n}\r\n.gm-style .gm-style-iw-t::after {\r\n  background: linear-gradient(45deg,rgb(59, 63, 72) 50%,rgba(255,255,255,0) 51%, rgba(255,255,255,0) 100%) !important;\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n.gm-style img.vehicle-img {\r\n  width: 100px;\r\n  /*height: 100px;*/\r\n  text-align: center;\r\n  padding-bottom: 10px;\r\n}\r\n.gm-style .gm-style-iw-d {\r\n  overflow: visible;\r\n}\r\n.align-center {\r\n  /*text-align: center*/\r\n}\r\n.gm-ui-hover-effect {\r\n  /* display: none !important; */\r\n  background-color: #fff !important;\r\n  /* content: url(\"/img/closebtn.png\") !important; */\r\n  opacity: .9;\r\n  /* margin-top: 5.9px !important;\r\n    margin-right: 5px !important; */\r\n  top: 0px !important;\r\n  right: 0px !important;\r\n  width: 15px !important;\r\n  height: 15px !important;\r\n  margin-top: 0px !important;\r\n  margin-right: 0px !important;\r\n}\r\n.gm-ui-hover-effect img {\r\n  margin: 1px !important;\r\n}\r\n.input-map {\r\n  padding: .285rem .75rem !important;\r\n  background-color: #eaeaea !important;\r\n  color: #495057 !important;\r\n  font-size: 12px !important;\r\n}\r\n#assetDetails {\r\n  font-size: 13px;\r\n  line-height: 1.57;\r\n  color: #ffffff;\r\n}\r\n#assetInfo i {\r\n  color: #FFF;\r\n  border-radius: 4px;\r\n  padding: 5px 8px;\r\n  font-size: 13px;\r\n}\r\n.move {\r\n  background-color: #2B7C21;\r\n}\r\n.stop {\r\n  background-color: #B60003;\r\n}\r\n.idle {\r\n  background-color: #fea82c;\r\n}\r\n.down {\r\n  background-color: #696969;\r\n}\r\n.form-inline .form-control {\r\n  width: 100%;\r\n}\r\n.form-control {\r\n  background-color: #fff;\r\n}\r\n.form-control:focus {\r\n  background-color: #fff;\r\n  border-color: #46b1ff;\r\n}\r\n/*Custom Style End*/\r\n/*==========================================================================*/\r\n.table {\r\n  color: white;\r\n  /*table-layout: fixed;*/\r\n}\r\nbutton.gm-ui-hover-effect {\r\n  margin-top: 10px !important;\r\n  margin-right: 10px !important;\r\n}\r\n.labels {\r\n  color: white;\r\n  background-color: black;\r\n  font-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n  font-size: 10px;\r\n  text-align: center;\r\n  width: 100px;\r\n  white-space: nowrap;\r\n}\r\n#panel {\r\n  width: 200px;\r\n  font-family: Arial, sans-serif;\r\n  font-size: 13px;\r\n  float: right;\r\n  margin: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 8px;\r\n  padding-top: 8px;\r\n  padding-bottom: 10px;\r\n  background-color: #404040;\r\n  width: auto;\r\n}\r\n#color-palette {\r\n  clear: both;\r\n}\r\n.color-button {\r\n  width: 14px;\r\n  height: 14px;\r\n  font-size: 0;\r\n  margin: 2px;\r\n  float: left;\r\n  cursor: pointer;\r\n}\r\n/*-----------------------------------------------------------------------------*/\r\nnav#map-toggle button {\r\n  position: absolute;\r\n  left: -120px;\r\n  top: 70px;\r\n}\r\nnav#map-toggle button i {\r\n  margin-top: -2px;\r\n}\r\n.open-close-container label,\r\n.open-close-container p {\r\n  font-size: 12px !important;\r\n}\r\n.open-close-container {\r\n  position: absolute;\r\n  z-index: 999999;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  padding: 5px;\r\n  color: #eaeaea;\r\n  font-size: 14px !important;\r\n}\r\n/*------------------------------------ Asset Status Table -----------------------------------------*/\r\n#assetStatus {\r\n  font-size: 12px;\r\n  color: #000 !important;\r\n}\r\n#assetStatus i.fa {\n    width: 20px;\n    height: 20px;\n    padding-top: 5px;\n    text-align: center;\n    border-radius: 2px;\n    color: #fff !important;\r\n}\r\n#assetStatus .vehicle-img {\n    width: 30px;\r\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdHJhY2tpbmcvdHJhY2tpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7QUFDQSw2RUFBNkU7QUFDN0UsdUJBQXVCO0FBQ3ZCO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLG9FQUFvRTtFQUNwRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsMkNBQTJDO0VBQzNDLHlCQUF5QjtFQUV6QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHFCQUFpQjtNQUFqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsK0VBQStFO0VBQy9FLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiwyQ0FBMkM7QUFDN0M7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQSxxQkFBcUI7QUFFckIscUJBQXFCO0FBQ3JCLDZFQUE2RTtBQUU3RTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYix3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUlBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBR0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBR0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBLG1CQUFtQjtBQUNuQiw2RUFBNkU7QUFFN0UscUJBQXFCO0FBQ3JCLDZFQUE2RTtBQUM3RTtFQUNFLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7QUFDZjtBQUdBLGtCQUFrQjtBQUNsQjtFQUNFLG9DQUFvQztFQUNwQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLE1BQU07RUFDTixXQUFXO0VBQ1gsZUFBZTtFQUNmLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7QUFDQSxpQkFBaUI7QUFFakI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxtSEFBbUg7RUFDbkgsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLGtEQUFrRDtFQUNsRCxXQUFXO0VBQ1g7bUNBQ2lDO0VBQ2pDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFHQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBQ0EsbUJBQW1CO0FBQ25CLDZFQUE2RTtBQUU3RTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaURBQWlEO0VBQ2pELGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQSxnRkFBZ0Y7QUFFaEY7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7QUFDWDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7O0VBRUUsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFFBQVE7RUFDUixNQUFNO0VBQ04sWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCO0FBR0Esb0dBQW9HO0FBQ3BHO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RyYWNraW5nL3RyYWNraW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwLWNhbnZhcyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCBhdXRvIDA7XHJcbiAgcGFkZGluZzogMHB4IDBweCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4vKlRyYWZmaWMgQnV0dG9uIFN0YXJ0Ki9cclxuLmdtYXAtY29udHJvbC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogNS4zcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5nbWFwLWNvbnRyb2wge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAtbW96LWxpbmVhci1ncmFkaWVudChjZW50ZXIgdG9wLCAjRkVGRUZFLCAjRjNGM0YzKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGRUZFICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0E5QkJERjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogMCA2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmdtYXAtY29udHJvbDpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY3OEFDNztcclxufVxyXG5cclxuLmdtYXAtY29udHJvbC1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KGNlbnRlciB0b3AsICM2RDhBQ0MsICM3Qjk4RDkpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZEOEFDQyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NzhBQzc7XHJcbn1cclxuXHJcbi5nbWFwLWNvbnRyb2wtbGVnZW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB6LWluZGV4OiAtMTtcclxuICB0b3A6IDIwcHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiA4NnB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjRkVGRUZFO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNBOUJCREY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG59XHJcblxyXG4uZ21hcC1jb250cm9sLWxlZ2VuZCB1bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uZ21hcC1jb250cm9sLWxlZ2VuZCBsaSB7XHJcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XHJcbn1cclxuLypUcmFmZmljIEJ1dHRvbiBFbmQqL1xyXG5cclxuLypGb3JtIENvbnRyb2wgU3RhcnQqL1xyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbi5jb250cm9scyB7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbiNwYWMtaW5wdXQtZnJvbSwgI3BhYy1pbnB1dC10byB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHBhZGRpbmc6IDAgMTFweCAwIDEzcHg7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4jcGFjLWlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgcGFkZGluZzogMCAxMXB4IDAgMTNweDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbiNwYWMtaW5wdXRFTiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIHBhZGRpbmc6IDAgMTFweCAwIDEzcHg7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiNwYWMtaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzRkOTBmZTtcclxufVxyXG5cclxuXHJcbiNwYWMtaW5wdXRFTjpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGQ5MGZlO1xyXG59XHJcblxyXG4ucGFjLWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxufVxyXG5cclxuI3R5cGUtc2VsZWN0b3Ige1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDkwZmU7XHJcbiAgcGFkZGluZzogNXB4IDExcHggMHB4IDExcHg7XHJcbn1cclxuXHJcbiN0eXBlLXNlbGVjdG9yIGxhYmVsIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5cclxuI3BhYy1pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGQ5MGZlO1xyXG59XHJcblxyXG4jdGFyZ2V0IHtcclxuICB3aWR0aDogMzQ1cHg7XHJcbn1cclxuXHJcbiNzaG93RGV0YWlscyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jaGlkZURldGFpbHMge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLypGb3JtIENvbnRyb2wgRW5kKi9cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4vKkN1c3RvbSBTdHlsZSBTdGFydCovXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4uZ20tc3R5bGUgLmdtLXN0eWxlLWl3IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTI0ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIC8qd2lkdGg6IDEwMCUgIWltcG9ydGFudDsqL1xyXG4gIG1heC13aWR0aDogNDUwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5nbS1zdHlsZSAuZ20tc3R5bGUtcGJjIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTI0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLypzdHlsZSB0aGUgcCB0YWcqL1xyXG4uZ20tc3R5bGUgLmdtLXN0eWxlLWl3ICNnb29nbGUtcG9wdXAgcCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuXHJcbi8qc3R5bGUgdGhlIGFycm93Ki9cclxuLmdtLXN0eWxlIGRpdiBkaXYgZGl2IGRpdiBkaXYgZGl2IGRpdiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMjQgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0b3A6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvaS1pbmZvLXdpbmRvdyBhOmxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzk3ZDhmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4vKnN0eWxlIHRoZSBsaW5rKi9cclxuXHJcbi5nbS1zdHlsZSBkaXYgZGl2IGRpdiBkaXYgZGl2IGRpdiBkaXYgZGl2IGEge1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZ20tc3R5bGUgLmdtLXN0eWxlLWl3LXQ6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcscmdiKDU5LCA2MywgNzIpIDUwJSxyZ2JhKDI1NSwyNTUsMjU1LDApIDUxJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5nbS1zdHlsZSBpbWcudmVoaWNsZS1pbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAvKmhlaWdodDogMTAwcHg7Ki9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5nbS1zdHlsZSAuZ20tc3R5bGUtaXctZCB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi5hbGlnbi1jZW50ZXIge1xyXG4gIC8qdGV4dC1hbGlnbjogY2VudGVyKi9cclxufVxyXG5cclxuLmdtLXVpLWhvdmVyLWVmZmVjdCB7XHJcbiAgLyogZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAvKiBjb250ZW50OiB1cmwoXCIvaW1nL2Nsb3NlYnRuLnBuZ1wiKSAhaW1wb3J0YW50OyAqL1xyXG4gIG9wYWNpdHk6IC45O1xyXG4gIC8qIG1hcmdpbi10b3A6IDUuOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50OyAqL1xyXG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdtLXVpLWhvdmVyLWVmZmVjdCBpbWcge1xyXG4gIG1hcmdpbjogMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1tYXAge1xyXG4gIHBhZGRpbmc6IC4yODVyZW0gLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNhc3NldERldGFpbHMge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMS41NztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuI2Fzc2V0SW5mbyBpIHtcclxuICBjb2xvcjogI0ZGRjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4IDhweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5tb3ZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI3QzIxO1xyXG59XHJcblxyXG4uc3RvcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I2MDAwMztcclxufVxyXG5cclxuLmlkbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWE4MmM7XHJcbn1cclxuXHJcbi5kb3duIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2OTY5O1xyXG59XHJcblxyXG5cclxuLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ2YjFmZjtcclxufVxyXG4vKkN1c3RvbSBTdHlsZSBFbmQqL1xyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbi50YWJsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qdGFibGUtbGF5b3V0OiBmaXhlZDsqL1xyXG59XHJcblxyXG5idXR0b24uZ20tdWktaG92ZXItZWZmZWN0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbHMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4jcGFuZWwge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbiNjb2xvci1wYWxldHRlIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNvbG9yLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICBtYXJnaW46IDJweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxubmF2I21hcC10b2dnbGUgYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEyMHB4O1xyXG4gIHRvcDogNzBweDtcclxufVxyXG5cclxubmF2I21hcC10b2dnbGUgYnV0dG9uIGkge1xyXG4gIG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuXHJcbi5vcGVuLWNsb3NlLWNvbnRhaW5lciBsYWJlbCxcclxuLm9wZW4tY2xvc2UtY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3Blbi1jbG9zZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY29sb3I6ICNlYWVhZWE7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQXNzZXQgU3RhdHVzIFRhYmxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuI2Fzc2V0U3RhdHVzIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxuXG4jYXNzZXRTdGF0dXMgaS5mYSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jYXNzZXRTdGF0dXMgLnZlaGljbGUtaW1nIHtcbiAgICB3aWR0aDogMzBweDtcclxufVxuIl19 */");

/***/ }),

/***/ "./src/app/views/tracking/tracking.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/tracking/tracking.component.ts ***!
  \******************************************************/
/*! exports provided: TrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingComponent", function() { return TrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_locale_en_Gb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/locale/en-Gb */ "./node_modules/moment/locale/en-Gb.js");
/* harmony import */ var moment_locale_en_Gb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_locale_en_Gb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_services_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/constants.service */ "./src/app/common/services/constants.service.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var TrackingComponent = /** @class */ (function () {
    function TrackingComponent(_constant, location, router) {
        var _this = this;
        this._constant = _constant;
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (location.path() != "") {
                _this.route = location.path();
            }
        });
    }
    TrackingComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Call StyledMarker Library
        var sm = document.createElement("script");
        sm.type = "text/javascript";
        sm.src = "https://track-asia.com/sg/Dashboard/plugins/StyledMarker/StyledMarker.js";
        $("head").append(sm);
        //Call Marker with Library
        var ml = document.createElement("script");
        ml.type = "text/javascript";
        ml.src = "https://track-asia.com/sg/Dashboard/plugins/marker-with-label/markerwithlabel.js";
        $("head").append(ml);
        $('#panel').hide();
        $('#infobubbleDrawing').hide();
        var base = this._constant.baseAppUrl;
        var uri = this._constant.uri_track;
        var user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
        var reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
        var company_id = Number(sessionStorage.getItem('setSessionstorageValueCompanyID'));
        var role_id = this._constant.getSessionstorageValueRoleID;
        var api_zonetype = this._constant.zonetypeApi;
        var api_post_zones = this._constant.zoneApi;
        var api_assets = base + uri + 'assetinfo' + '?UserID=' + user_id + '&ResellerID=' + reseller_id + '&CompanyID=' + company_id;
        var api_zones = base + uri + 'zoneinfo' + '?ResellerID=' + reseller_id + '&CompanyID=' + company_id;
        //Filter Dropdown
        $('#_reports').hide();
        if (role_id >= 3) {
            $('#_reseller').hide();
        }
        if (this.route == '/reports')
            $('#_reports').show();
        else
            $('#_reports').hide();
        //var openmarker= [];
        var openmarker = new Array();
        var map;
        var markers = new Array();
        var marker;
        var infoBubble;
        var styleMaker;
        var styleMakers = new Array();
        var infoWindow;
        var infoBoxList = [];
        var k;
        var polygon;
        var pathCoordinates = new google.maps.MVCArray();
        var polygonCoordinates = new Array();
        var circleCoordinates = new Array();
        var circleCoordinates1 = new Array();
        var paramtitle;
        var firstData = true;
        //=====================================//
        var drawingManager;
        var all_overlays = [];
        var selectedShape;
        var colors = ['#1E90FF', '#FF1493', '#32CD32', '#FF8C00', '#4B0082', '#8560a8', '#005e20', '#CBCC29', '#495f75', '#a00000', '#1B1B1B'];
        var selectedColor;
        var colorButtons = {};
        var polygon;
        var polygons = [];
        var circle = {};
        var circle1 = {};
        var polygon1 = {};
        var circles = [];
        var poi;
        var pois = new Array();
        var poiContent;
        var markerLabel;
        var markerLabels = new Array();
        var all_overlays = [];
        var selectedShape;
        var infoWindowList = [];
        var infoWindowListLabel = [];
        var contentString;
        var finalString;
        var poiContent;
        var rectangle;
        var arrRectangle = [];
        var marker1;
        var marker2;
        var recmarkers = new Array();
        //=====================================//
        //search destination
        var URLDest;
        var destfrom;
        var destto;
        var assets = [];
        var shape = {
            coord: [16, 0, 18, 1, 21, 2, 24, 3, 26, 4, 27, 5, 28, 6, 29, 7, 29, 8, 29, 9, 29, 10, 29, 11, 29, 12, 29, 13, 29, 14, 29, 15, 29, 16, 29, 17, 29, 18, 29, 19, 29, 20, 29, 21, 29, 22, 29, 23, 29, 24, 29, 25, 29, 26, 29, 27, 29, 28, 28, 29, 3, 29, 2, 28, 2, 27, 1, 26, 1, 25, 1, 24, 0, 23, 0, 22, 0, 21, 0, 20, 0, 19, 0, 18, 0, 17, 0, 16, 0, 15, 0, 14, 0, 13, 0, 12, 0, 11, 0, 10, 0, 9, 0, 8, 0, 7, 1, 6, 2, 5, 2, 4, 3, 3, 5, 2, 6, 1, 8, 0, 16, 0],
            type: 'poly'
        };
        //===================Timer=================================================//
        var assetMarkerInterval;
        //===================================STYLED MARKER========================//
        var StyledIconTypes = {};
        var bu_ = 'https://chart.googleapis.com/chart?chst=';
        var gm_ = google.maps;
        var gp_ = gm_.Point;
        var ge_ = gm_.event;
        var gmi_ = gm_.MarkerImage;
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
                return new google.maps.Point(0, 42);
            },
            getShadowAnchor: function (props, width, height) {
                return new google.maps.Point(0, 44);
            },
            getShape: function (props, width, height) {
                var _iconmap = {};
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
        //================================INIT==================================//
        var latlng = new google.maps.LatLng(1.3521, 103.8198);
        for (var type in google.maps.MapTypeId) {
            this._constant.mapTypeIds.push(google.maps.MapTypeId[type]);
        }
        var mapOptions = {
            zoom: 12,
            center: latlng,
            panControl: false,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },
            mapTypeControl: true,
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
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
            },
            scaleControl: true,
            overviewMapControl: true
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(document.getElementById('panel'));
        Layers();
        setZones(handleZones, api_zones);
        setMarkers(updateAssets, api_assets, this.route);
        google.maps.event.addListener(map, 'mousemove', function (event) {
            document.getElementById('coordinates-panel').innerHTML =
                event.latLng.lat() + ', ' + event.latLng.lng();
        });
        //==================================DRAWING==========================================//
        var polyOptions = {
            strokeWeight: 0,
            fillOpacity: 0.45,
            editable: false
        };
        // Creates a drawing manager attached to the map that allows the user to draw
        // markers, lines, and shapes.
        drawingManager = new google.maps.drawing.DrawingManager({
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_CENTER,
                drawingModes: [
                    google.maps.drawing.OverlayType.CIRCLE,
                    google.maps.drawing.OverlayType.POLYGON,
                    google.maps.drawing.OverlayType.MARKER,
                    google.maps.drawing.OverlayType.RECTANGLE
                ]
            },
            markerOptions: {
                draggable: true
            },
            polylineOptions: {
                editable: true
            },
            rectangleOptions: polyOptions,
            circleOptions: polyOptions,
            polygonOptions: polyOptions,
            map: map
        });
        drawingManager.setMap(map);
        buildColorPalette();
        google.maps.event.addListener(drawingManager, 'overlaycomplete', function (e) {
            deleteAllShape();
            all_overlays.push(e);
            if (e.type == google.maps.drawing.OverlayType.CIRCLE) {
                var radius = e.overlay.getRadius();
            }
            if (e.type != google.maps.drawing.OverlayType.MARKER) {
                // Switch back to non-drawing mode after drawing a shape.
                drawingManager.setDrawingMode(null);
                // To hide:
                drawingManager.setOptions({
                    drawingControl: false
                });
                // Add an event listener that selects the newly-drawn shape when the user
                // mouses down on it.
                var newShape = e.overlay;
                newShape.type = e.type;
                google.maps.event.addListener(newShape, 'click', function () {
                    setSelection(newShape);
                });
                setSelection(newShape);
            }
            if (e.type == google.maps.drawing.OverlayType.MARKER) {
                var latlng = e.overlay.getPosition();
                console.log(latlng);
            }
        });
        google.maps.event.addListener(drawingManager, 'drawingmode_changed', clearSelection);
        google.maps.event.addListener(map, 'click', clearSelection);
        google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
            polygons.push(polygon);
            getCoordinates();
            function getCoordinates() {
                console.log(polygon.getPath().getArray());
                var vertices = polygon.getPath().getArray();
                var arrayToString = vertices.toString();
                var removeSpace = arrayToString.replace(/\ /g, "");
                var removeOpen = removeSpace.replace(/\(/g, "");
                var removeClose = removeOpen.replace(/\),/g, " ");
                finalString = removeClose.replace(/\)/g, "");
                var coords = finalString.split(" ");
                var recoords;
                for (var k = 0; k < coords.length; k++) {
                    recoords = coords[0].split(",");
                }
                ;
                var position = new google.maps.LatLng(parseFloat(recoords[0]), parseFloat(recoords[1]));
                // Replace the info infoBubble's content and position.
                var infoBubble = new google.maps.InfoWindow({
                    content: document.getElementById("infobubbleDrawing"),
                });
                infoWindowList.push(infoBubble);
                infoBubble.setPosition(position);
                infoBubble.open(map);
                document.getElementById("infobubbleDrawing").style.display = 'block';
                $('#panel').show();
                google.maps.event.addListener(infoBubble, 'closeclick', function () {
                    deleteAllShape();
                    $('#panel').hide();
                });
                //var coordsPolygon = polygon.getPath().getArray();
                //document.getElementById("Perimeter").value += coordsPolygon;
                //sessionStorage.setItem("setSessionstorageValuePerimeterLength", coordsPolygon.length);
            }
            google.maps.event.addDomListener(document.getElementById('savebutton'), 'click', saveZone);
        });
        google.maps.event.addListener(drawingManager, 'circlecomplete', function (circle) {
            circles.push(circle);
            var circleCenter;
            var circleRadius;
            var pointA;
            var pointB;
            for (var i = 0; i < circles.length; i++) {
                circleCenter = circles[i].getCenter();
                circleRadius = circles[i].getRadius();
                google.maps.LatLng.prototype.destinationPoint = function (brng, dist) {
                    dist = dist / 6371;
                    brng = toRadians(brng);
                    var lat1 = toRadians(this.lat()), lon1 = toRadians(this.lng());
                    var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) +
                        Math.cos(lat1) * Math.sin(dist) * Math.cos(brng));
                    var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist) *
                        Math.cos(lat1), Math.cos(dist) - Math.sin(lat1) *
                        Math.sin(lat2));
                    if (isNaN(lat2) || isNaN(lon2))
                        return null;
                    return new google.maps.LatLng(toRadians(lat2), toDegrees(lon2));
                };
                var getKm = circleRadius / 1000;
                pointA = new google.maps.LatLng(circleCenter.lat(), circleCenter.lng());
                pointB = pointA.destinationPoint(90, getKm);
                var arrayToString = pointB.toString();
                var removeSpace = arrayToString.replace(/\ /g, "");
                var removeOpen = removeSpace.replace(/\(/g, "");
                var removeClose = removeOpen.replace(/\),/g, " ");
                var removeEnd = removeClose.replace(/\)/g, "");
                //5.977254,116.079409 5.980241,116.080362
                finalString = circleCenter.lat() + "," + circleCenter.lng() + " " + removeEnd;
                //alert(circleCenter.lat() + "," + circleCenter.lng() + "," + circleRadius);
                //sessionStorage.setItem("setSessionstorageValuePerimeterLength", circles.length);
            }
            //var position = new google.maps.LatLng(parseFloat(circleCenter.lat()), parseFloat(circleCenter.lng()));
            var content = '<div class="form-group row">' +
                '<div style="padding-top: 10px;">' +
                '<h6 style="color:#4286CF; padding-bottom:10px;"><i class="fa fa-map-marker fa-lg" style="color: cornflowerblue; font-size: 1.5em;"></i> Save Zone </h6 >' +
                '</div>' +
                '<table style="width:100%">' +
                '<tbody>' +
                '<tr>' +
                '<th><div class="col-sm-12 form-group"><div class=".text-normal"> Zone Name </div><input class="form-control" id="zname" name="zname" placeholder="Enter Zone Name" type="text" style="color:black !important;"></div></th>' +
                '</tr>' +
                '<tr>' +
                '<th>' +
                '<div style="padding: 10px 0 10px 0;"></div>' +
                '</th>' +
                '</tr>' +
                '<tr>' +
                '<th><div class="col-sm-12 form-group"><div class=".text-normal"> Zone Type </div><select class="form-control" data-live-search="true" data-width="100%" id="getZoneTypes" name="getZoneTypes" style="background-color:#2F343B; color:azure;"></select > </div></th >' +
                '</tr>' +
                '<tr>' +
                '<th>' +
                '<div style="padding: 10px 0 10px 0;"></div>' +
                '</th>' +
                '</tr>' +
                '<tr>' +
                '<th><button id="savebutton" class="btn-dark btn btn-md pull-right"> Submit </button></th>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '</div>';
            $.getJSON(api_zonetype, function (data) {
                $.each(data, function (index, item) {
                    $('#getZoneTypes').append($('<option></option>').val(item.ZoneTypeID).html(item.Name));
                });
            });
            // Replace the info infoBubble's content and position.
            infoBubble = new google.maps.InfoWindow({
                content: content
            });
            infoWindowList.push(infoBubble);
            infoBubble.setPosition(pointA);
            infoBubble.open(map);
            $('#panel').show();
            google.maps.event.addListener(infoBubble, 'closeclick', function () {
                deleteAllShape();
                $('#panel').hide();
            });
            //google.maps.event.addDomListener($('#savebutton'), 'click', saveZone);
            google.maps.event.addListener(infoBubble, 'domready', function () {
                $("#savebutton").click(function () { return saveZone(); });
            });
        });
        google.maps.event.addListener(drawingManager, 'markercomplete', function (poi) {
            pois.push(poi);
            var coords;
            for (var i = 0; i < pois.length; i++) {
                coords = pois[i].getPosition();
                var arrayToString = coords.toString();
                var removeSpace = arrayToString.replace(/\ /g, "");
                var removeOpen = removeSpace.replace(/\(/g, "");
                var removeClose = removeOpen.replace(/\),/g, " ");
                finalString = removeClose.replace(/\)/g, "");
            }
            // Replace the info infoBubble's content and position.
            var infoBubble = new google.maps.InfoWindow({
                content: document.getElementById("infobubbleDrawing")
            });
            infoWindowList.push(infoBubble);
            infoBubble.setPosition(coords);
            infoBubble.open(map);
            document.getElementById("infobubbleDrawing").style.display = 'block';
            $('#panel').hide();
            google.maps.event.addListener(infoBubble, 'closeclick', function () {
                deleteAllPoi();
                $('#panel').hide();
            });
            google.maps.event.addDomListener(document.getElementById('savebutton'), 'click', saveZone);
        });
        google.maps.event.addListener(drawingManager, 'rectanglecomplete', function (rectangle) {
            arrRectangle.push(rectangle);
            var bounds = rectangle.getBounds();
            var NE = bounds.getNorthEast();
            var SW = bounds.getSouthWest();
            var NW = new google.maps.LatLng(NE.lat(), SW.lng());
            var SE = new google.maps.LatLng(SW.lat(), NE.lng());
            // Plot two markers to represent the Rectangle's bounds.
            marker1 = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(NE.lat(), SW.lng()),
                draggable: false,
                title: 'Drag me!'
            });
            marker2 = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(SW.lat(), NE.lng()),
                draggable: false,
                title: 'Drag me!'
            });
            recmarkers.push(marker1, marker2);
            function getRectangleCoordinates() {
                return NW + "," + SW + "," + SE + "," + NE;
            }
            var arrayToString = getRectangleCoordinates();
            var removeSpace = arrayToString.replace(/\ /g, "");
            var removeOpen = removeSpace.replace(/\(/g, "");
            var removeClose = removeOpen.replace(/\),/g, " ");
            finalString = removeClose.replace(/\)/g, "");
            var coords = finalString.split(" ");
            var recoords;
            for (var k = 0; k < coords.length; k++) {
                recoords = coords[0].split(",");
            }
            ;
            var position = new google.maps.LatLng(NE.lat(), SW.lng());
            // Replace the info infoBubble's content and position.
            var infoBubble = new google.maps.InfoWindow({
                content: document.getElementById("infobubbleDrawing")
            });
            infoWindowList.push(infoBubble);
            infoBubble.setPosition(position);
            infoBubble.open(map);
            document.getElementById("infobubbleDrawing").style.display = 'block';
            $('#panel').show();
            google.maps.event.addListener(infoBubble, 'closeclick', function () {
                deleteAllShape();
                $('#panel').hide();
            });
            sessionStorage.setItem("setSessionstorageValuePerimeterLength", String(4));
            google.maps.event.addDomListener(document.getElementById('savebutton'), 'click', saveZone);
        });
        //================================AUTOREFRESH========================================//
        assetMarkerInterval = setInterval(function () {
            setMarkers(updateAssets, api_assets, _this.route);
        }, 10000);
        //=====================================CONVERSION========================================//
        function toDegrees(angle) {
            return angle * (180 / Math.PI);
        }
        function toRadians(angle) {
            return angle * (Math.PI / 180);
        }
        //=====================================ZONES==========================================//
        function setZones(callback, api_zones) {
            axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(api_zones)
                .then(function (response) {
                //console.log(response);
                callback(response.data);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        function handleZones(zones) {
            for (var i = 0; i < zones.length; i++) {
                var str_zone = zones[i];
                var zoneID = str_zone.ZoneID;
                var name = str_zone.Name;
                var type = str_zone.Type;
                var perimeter = str_zone.Perimeter;
                var company = str_zone.Company;
                var color = str_zone.Color;
                var location = str_zone.Location;
                var coords = perimeter.split(" ");
                var recoords;
                var Pos;
                var zoneCircle;
                var zoneCircle1;
                var imageUrl = 'https://chart.apis.google.com/chart?cht=mm&chs=24x32&' + 'chco=FFFFFF,' + (Math.random() * 0xFFFFFF << 0).toString(16) + '&ext=.png';
                if (/\s/.test(perimeter)) {
                    // It has any kind of whitespace
                    if (coords.length == 1) {
                        for (var k = 0; k < coords.length; k++) {
                            recoords = coords[k].split(",");
                            //var circle1 = {};
                            circle1['Zones'] = {
                                center: new google.maps.LatLng(parseFloat(recoords[0]), parseFloat(recoords[1])),
                                radius: recoords[2]
                                //radius: 100
                            };
                        }
                        // Construct the circle for each value in citymap.
                        // Note: We scale the area of the circle based on the population.
                        for (var zone in circle1) {
                            var radiusOptions = {
                                strokeColor: color,
                                strokeOpacity: 0.8,
                                strokeWeight: 2,
                                fillColor: color,
                                fillOpacity: 0.35,
                                map: map,
                                Company: company,
                                Name: name,
                                Pos: coords,
                                zoneID: zoneID,
                                center: circle1[zone].center,
                                radius: Math.sqrt(circle1[zone].radius)
                            };
                            // Add the circle for this city to the map.
                            zoneCircle1 = new google.maps.Circle(radiusOptions);
                        }
                        circleCoordinates1.push(zoneCircle1);
                        // Add a listener for the click event.
                        google.maps.event.addListener(zoneCircle1, 'click', showArrayCircle);
                        infoWindow = new google.maps.InfoWindow();
                        // Click Zones
                        google.maps.event.addListener(zoneCircle1, 'click', (function (zoneCircle1) {
                            return function () {
                                map.panTo(this.position);
                            };
                        })(zoneCircle1));
                    }
                    //Circle - 1.042346,99.939392 1.038056,99.937031
                    else if (coords.length <= 2) {
                        var latlng1 = coords[0];
                        var latlng2 = coords[1];
                        var getlatlng1 = latlng1.split(",");
                        var lat1 = getlatlng1[0];
                        var lon1 = getlatlng1[1];
                        var getlatlng2 = latlng2.split(",");
                        var lat2 = getlatlng2[0];
                        var lon2 = getlatlng2[1];
                        var R = 6371; // Radius of the earth in km
                        var dLat = deg2rad(lat2 - lat1); // deg2rad below
                        var dLon = deg2rad(lon2 - lon1);
                        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                                Math.sin(dLon / 2) * Math.sin(dLon / 2);
                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                        var d = R * c; // Distance in km
                        var Radius = d * 100;
                        recoords = coords[0].split(",");
                        circle['Zones'] = {
                            center: new google.maps.LatLng(parseFloat(recoords[0]), parseFloat(recoords[1])),
                            radius: Radius
                        };
                        for (var z in circle) {
                            var radiusOptions2 = {
                                strokeColor: color,
                                strokeOpacity: 0.8,
                                strokeWeight: 2,
                                fillColor: color,
                                fillOpacity: 0.35,
                                map: map,
                                Company: company,
                                Name: name,
                                Pos: coords,
                                zoneID: zoneID,
                                center: circle[z].center,
                                radius: Math.sqrt(circle[z].radius) * 100
                            };
                            // Add the circle for this city to the map.
                            zoneCircle = new google.maps.Circle(radiusOptions2);
                        }
                        circleCoordinates.push(zoneCircle);
                        // Add a listener for the click event.
                        google.maps.event.addListener(zoneCircle, 'click', showArrayCircle);
                        infoWindow = new google.maps.InfoWindow();
                        // Click Zones
                        google.maps.event.addListener(zoneCircle, 'click', (function (zoneCircle) {
                            return function () {
                                map.panTo(this.position);
                            };
                        })(zoneCircle));
                    }
                    else if (coords.length >= 3) {
                        for (var k = 0; k < coords.length; k++) {
                            recoords = coords[k].split(",");
                            pathCoordinates.push(new google.maps.LatLng(parseFloat(recoords[0]), parseFloat(recoords[1])));
                        }
                        // Construct the polygon.
                        polygon = new google.maps.Polygon({
                            path: pathCoordinates,
                            strokeColor: color,
                            strokeOpacity: 0.8,
                            strokeWeight: 3,
                            fillColor: color,
                            fillOpacity: 0.35,
                            Company: company,
                            Name: name,
                            Pos: coords,
                            zoneID: zoneID,
                            map: map
                        });
                        pathCoordinates = [];
                        polygonCoordinates.push(polygon);
                        polygon.setMap(map);
                        // Add a listener for the click event.
                        google.maps.event.addListener(polygon, 'click', showArrays);
                        infoWindow = new google.maps.InfoWindow();
                        // Click Zones
                        google.maps.event.addListener(polygon, 'click', (function (polygon, i) {
                            return function () {
                                map.panTo(this.position);
                            };
                        })(polygon, i));
                    } //end of if
                }
                else {
                    var perimeterPOI = zones[i].Perimeter.split(",");
                    var latLngPOI = new google.maps.LatLng(parseFloat(perimeterPOI[0]), parseFloat(perimeterPOI[1]));
                    //poi = new google.maps.Marker({
                    //  map: map,
                    //  position: latLngPOI,
                    //  draggable: false,
                    //  zoneID: zoneID,
                    //  icon: imageUrl,
                    //  title: name
                    //});
                    //pois.push(poi);
                    markerLabel = new MarkerWithLabel({
                        position: latLngPOI,
                        draggable: false,
                        raiseOnDrag: false,
                        map: map,
                        icon: imageUrl,
                        labelContent: name,
                        labelAnchor: new google.maps.Point(40, 0),
                        labelClass: "labels",
                        labelStyle: { opacity: 0.75 },
                        labelInBackground: false
                    });
                    markerLabels.push(markerLabel);
                    poiContent = "<div class='form-group' style='color:#4C4C4C;>" +
                        "<div class='col-md-8'><h6 class='map-heading'>" + name + "</h6></div>" +
                        "<table id='assetDetails' class='table table-vcenter'>" +
                        "<tbody>" +
                        "<tr>" + "<td>" +
                        "<span data-l11n class='text-bold'>Location:&nbsp;</span>" + location +
                        "<br />" +
                        "<span data-l11n class='text-bold'>Type:&nbsp;</span>" + type +
                        "<br />" +
                        "<span class='text-bold'>Coordinates:&nbsp;</span>" + perimeter +
                        "</td>" + "</tr>";
                    "</tbody>" + "</table>" +
                        "</div>";
                    setPOILabel(markerLabel);
                }
                //$(function () {
                //  $('.SelectZonesFilter').on('change', function () {
                //    var selected = $(this).find("option:selected").val();
                //    for (var p = 0; p < pois.length; p++) {
                //      poi = pois[p];
                //      if (poi.zoneID == selected || selected.length === 0) {
                //        poi.setVisible(true);
                //        var position = poi.getPosition();
                //        map.setCenter(position);
                //        map.setZoom(18);
                //      }
                //    }
                //    for (var b = 0; b < circleCoordinates1.length; b++) {
                //      circle1 = circleCoordinates1[b];
                //      if (circle1.zoneID == selected || selected.length === 0) {
                //        map.fitBounds(circle1.getBounds());
                //      }
                //    }
                //    for (var j = 0; j < circleCoordinates.length; j++) {
                //      circle = circleCoordinates[j];
                //      if (circle.zoneID == selected || selected.length === 0) {
                //        map.fitBounds(circle.getBounds());
                //      }
                //    }
                //    for (var a = 0; a < polygonCoordinates.length; a++) {
                //      polygon = polygonCoordinates[a];
                //      if (polygon.zoneID == selected || selected.length === 0) {
                //        var bounds = new google.maps.LatLngBounds();
                //        var point = [];
                //        var getPolygon = polygon.Pos;
                //        for (var i = 0; i < polygon.getPath().length; i++) {
                //          getPolygonEx = getPolygon[i].split(",");
                //          point = new google.maps.LatLng(parseFloat(getPolygonEx[0]), parseFloat(getPolygonEx[1]));
                //          bounds.extend(point);
                //        }
                //        map.fitBounds(bounds);
                //      }//end if
                //    }//end for
                //  }); // end of on change
                //}); //end of function
            }
            return zones;
        }
        function deg2rad(deg) {
            return deg * (Math.PI / 180);
        }
        function showArrays(event) {
            // Since this polygon has only one path, we can call getPath()
            // to return the MVCArray of LatLngs.
            var vertices = this.getPath();
            var contentString = "<div class='form-group' style='color:#4C4C4C;>" +
                "<div class='col-md-8'><h6 class='map-heading'>" + this.Name + "</h6></div>" +
                "<table id='assetDetails' class='table table-vcenter'>" +
                "<tbody>" +
                "<tr>" + "<td>" +
                "<span data-l11n class='text-bold'>Company:&nbsp;</span>" + this.Company +
                "<br />" +
                "<span class='text-bold'>Clicked location:&nbsp;</span>" + event.latLng.lat() + ',' + event.latLng.lng() +
                "</td>" + "</tr>";
            "</tbody>" + "</table>" +
                "</div>";
            // Iterate over the vertices.
            //for (var i = 0; i < vertices.getLength() ; i++) {
            //    var xy = vertices.getAt(i);
            //    contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
            //        xy.lng();
            //}
            // Replace the info window's content and position.
            infoWindow.setContent(contentString);
            infoWindow.setPosition(event.latLng);
            infoWindow.open(map);
        }
        function showArrayCircle(event) {
            var contentString = "<div class='form-group' style='color:#4C4C4C;>" +
                "<div class='col-md-8'><h6 class='map-heading'>" + this.Name + "</h6></div>" +
                "<table id='assetDetails' class='table table-vcenter'>" +
                "<tbody>" +
                "<tr>" + "<td>" +
                "<span data-l11n class='text-bold'>Company:&nbsp;</span>" + this.Company +
                "<br />" +
                "<span class='text-bold'>Clicked location:&nbsp;</span>" + event.latLng.lat() + ',' + event.latLng.lng() +
                "</td>" + "</tr>";
            "</tbody>" + "</table>" +
                "</div>";
            // Replace the info window's content and position.
            infoWindow.setContent(contentString);
            infoWindow.setPosition(event.latLng);
            infoWindow.open(map);
        }
        function setPOILabel(markerLabel) {
            var infoBubble = new google.maps.InfoWindow({
                content: poiContent
            });
            infoWindowListLabel.push(infoBubble);
            markerLabel.addListener('click', function () {
                infoBubble.open(markerLabel.get('map'), markerLabel);
            });
        }
        //=====================================DRAWING============================================//
        function clearSelection() {
            if (selectedShape) {
                selectedShape.setEditable(false);
                selectedShape = null;
            }
        }
        function setSelection(shape) {
            clearSelection();
            selectedShape = shape;
            if (shape.type == "rectangle") {
                shape.setEditable(false);
            }
            else {
                shape.setEditable(true);
            }
        }
        function deleteAllShape() {
            for (var i = 0; i < all_overlays.length; i++) {
                all_overlays[i].overlay.setMap(null);
            }
            all_overlays = [];
            for (var i = 0; i < infoWindowList.length; i++) {
                infoWindowList[i].close();
            }
            // Reset the markers array
            infoWindowList = [];
            for (var i = 0; i < recmarkers.length; i++) {
                recmarkers[i].setMap(null);
            }
            recmarkers = [];
            // To show:
            drawingManager.setOptions({
                drawingControl: true
            });
        }
        function saveZone() {
            var checkName = $('#zname').val();
            if (checkName == "") {
                alert('Zone name must not be empty');
            }
            else {
                if (/\s/.test(finalString)) {
                    savePoi("Default");
                }
                else {
                    var form = new FormData();
                    form.append("email", "anthony_agustin@acecom.com.sg");
                    form.append("password", "acecom2015");
                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://developers.onemap.sg/privateapi/auth/post/getToken",
                        "method": "POST",
                        "processData": false,
                        "contentType": false,
                        "mimeType": "multipart/form-data",
                        "data": form
                    };
                    $.ajax(settings).done(function (response) {
                        var obj = JSON.parse(response);
                        var onemap_api = 'https://developers.onemap.sg/privateapi/commonsvc/revgeocode?location=' + finalString + '&token=' + obj.access_token;
                        console.log(onemap_api);
                        $.ajax({
                            url: onemap_api,
                            type: 'GET',
                            success: function (data) {
                                if (data.GeocodeInfo.length > 0) {
                                    //console.log(data);
                                    var address_block = '';
                                    var address_road = '';
                                    var address_building = '';
                                    var full_address = '';
                                    if (data.GeocodeInfo[0].BLOCK != null || data.GeocodeInfo[0].BLOCK != undefined) {
                                        address_block = data.GeocodeInfo[0].BLOCK;
                                        full_address = address_block + " ";
                                    }
                                    if (data.GeocodeInfo[0].ROAD != null || data.GeocodeInfo[0].ROAD != undefined) {
                                        address_road = data.GeocodeInfo[0].ROAD;
                                        full_address += address_road + " ";
                                    }
                                    if (data.GeocodeInfo[0].BUILDINGNAME != null || data.GeocodeInfo[0].BUILDINGNAME != undefined) {
                                        if (data.GeocodeInfo[0].BUILDINGNAME != "null") {
                                            address_building = data.GeocodeInfo[0].BUILDINGNAME;
                                            full_address += address_building;
                                        }
                                    }
                                    savePoi(full_address);
                                }
                                else {
                                    var onemap_api = 'https://developers.onemap.sg/privateapi/commonsvc/revgeocode?location=' + finalString + '&token=' + obj.access_token;
                                    console.log(onemap_api);
                                    $.ajax({
                                        url: onemap_api,
                                        type: 'GET',
                                        success: function (data) {
                                            if (data.GeocodeInfo.length == 0) {
                                                console.log('No Address');
                                                savePoi('No Address');
                                            }
                                            else {
                                                var address_block = '';
                                                var address_road = '';
                                                var address_building = '';
                                                var full_address = '';
                                                if (data.GeocodeInfo[0].BLOCK != null || data.GeocodeInfo[0].BLOCK != undefined) {
                                                    address_block = data.GeocodeInfo[0].BLOCK;
                                                    full_address = address_block + " ";
                                                }
                                                if (data.GeocodeInfo[0].ROAD != null || data.GeocodeInfo[0].ROAD != undefined) {
                                                    address_road = data.GeocodeInfo[0].ROAD;
                                                    full_address += address_road + " ";
                                                }
                                                if (data.GeocodeInfo[0].BUILDINGNAME != null || data.GeocodeInfo[0].BUILDINGNAME != undefined) {
                                                    if (data.GeocodeInfo[0].BUILDINGNAME != "null") {
                                                        address_building = data.GeocodeInfo[0].BUILDINGNAME;
                                                        full_address += address_building;
                                                    }
                                                }
                                                savePoi(full_address);
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    });
                }
            }
        }
        function savePoi(address) {
            var d = new Date();
            var timestamp = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](d).local().format("DD MMM YYYY, hh:mm:ss A");
            var obj_zones;
            if (Number(sessionStorage.getItem('setSessionstorageValueRoleID')) > 2) {
                obj_zones = {
                    ZoneID: 0,
                    Name: $('#zname').val(),
                    TypeID: $('#getZoneTypes').val(),
                    CompanyID: Number(sessionStorage.getItem('setSessionstorageValueCompanyID')),
                    CreatedDate: timestamp,
                    Perimeter: finalString,
                    CellIds: '',
                    Location: address,
                    Created_User: sessionStorage.getItem('setSessionstorageValueUser'),
                    Modified_User: sessionStorage.getItem('setSessionstorageValueUser'),
                    Color: sessionStorage.getItem('setSessionstorageValueZoneColor')
                };
            }
            else {
                obj_zones = {
                    ZoneID: 0,
                    Name: $('#zname').val(),
                    TypeID: $('#getZoneTypes').val(),
                    CompanyID: sessionStorage.getItem('setSessionstorageValueAssetCompany'),
                    CreatedDate: timestamp,
                    Perimeter: finalString,
                    CellIds: '',
                    Location: address,
                    Created_UserID: Number(sessionStorage.getItem('setSessionstorageValueUserID')),
                    Modified_UserID: Number(sessionStorage.getItem('setSessionstorageValueUserID')),
                    Color: sessionStorage.getItem('setSessionstorageValueZoneColor')
                };
            }
            //if (zones.ZoneID == 'undefined' || zones.ZoneID == null || zones.ZoneID == 0) {
            //  $.ajax({
            //    url: 'https://app.track-asia.com/tracksgwebapi/api/zoneinfo',
            //    type: "POST",
            //    data: JSON.stringify(zones),
            //    crossDomain: true,
            //    contentType: 'application/json; charset=utf-8',
            //    xhrFields: {
            //      withCredentials: false
            //    },
            //    permissions: ["https://*.track-asia.com"],
            //    success: function (zones) {
            //      console.log(zones);
            //      //return false;
            //      //window.location.reload(true);
            //      window.location.reload(true);
            //    },
            //  });
            //}
            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(api_post_zones, obj_zones)
                .then(function (response) {
                console.log(response.data);
                window.location.reload(true);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        function deleteAllPoi() {
            for (var i = 0; i < pois.length; i++) {
                pois[i].setMap(null);
            }
            pois = [];
            //for (var i = 0; i < markerLabels.length; i++) {
            //    markerLabels[i].setMap(null);
            //}
            //markerLabels = [];
            for (var i = 0; i < all_overlays.length; i++) {
                all_overlays[i].overlay.setMap(null);
            }
            all_overlays = [];
            for (var i = 0; i < infoWindowList.length; i++) {
                infoWindowList[i].close();
            }
            // Reset the markers array
            infoWindowList = [];
            // To show:
            drawingManager.setOptions({
                drawingControl: true
            });
        }
        function selectColor(color) {
            selectedColor = color;
            for (var i = 0; i < colors.length; ++i) {
                var currColor = colors[i];
                colorButtons[currColor].style.border = currColor == color ? '2px solid #789' : '2px solid #fff';
            }
            // Retrieves the current options from the drawing manager and replaces the
            // stroke or fill color as appropriate.
            var polylineOptions = drawingManager.get('polylineOptions');
            polylineOptions.strokeColor = color;
            drawingManager.set('polylineOptions', polylineOptions);
            var rectangleOptions = drawingManager.get('rectangleOptions');
            rectangleOptions.fillColor = color;
            drawingManager.set('rectangleOptions', rectangleOptions);
            var circleOptions = drawingManager.get('circleOptions');
            circleOptions.fillColor = color;
            drawingManager.set('circleOptions', circleOptions);
            var polygonOptions = drawingManager.get('polygonOptions');
            polygonOptions.fillColor = color;
            drawingManager.set('polygonOptions', polygonOptions);
            //Set
            sessionStorage.setItem("setSessionstorageValueZoneColor", selectedColor);
        }
        function setSelectedShapeColor(color) {
            if (selectedShape) {
                if (selectedShape.type == google.maps.drawing.OverlayType.POLYLINE) {
                    selectedShape.set('strokeColor', color);
                }
                else {
                    selectedShape.set('fillColor', color);
                }
            }
        }
        function makeColorButton(color) {
            var button = document.createElement('span');
            button.className = 'color-button';
            button.style.backgroundColor = color;
            google.maps.event.addDomListener(button, 'click', function () {
                selectColor(color);
                setSelectedShapeColor(color);
            });
            return button;
        }
        function buildColorPalette() {
            var colorPalette = document.getElementById('color-palette');
            for (var i = 0; i < colors.length; ++i) {
                var currColor = colors[i];
                var colorButton = makeColorButton(currColor);
                colorPalette.appendChild(colorButton);
                colorButtons[currColor] = colorButton;
            }
            selectColor(colors[0]);
        }
        //=====================================MARKERS=============================================//
        function setMarkers(callback, api_assets, route) {
            axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(api_assets)
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
                        var timestamp1 = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](assetTimestamp).local().format("DD MMM YYYY");
                        var d = new Date();
                        var timestamp2 = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](d).local().format("DD MMM YYYY");
                        timestamp2 = Date.parse(timestamp2);
                        timestamp1 = Date.parse(timestamp1);
                        var timestamp = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](assetTimestamp).local().format("D-MMM-YYYY, hh:mm:ss A");
                        var elapsedTimestamp = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](assetTimestamp).local().format();
                        var el = getElapsedTime(elapsedTimestamp);
                        var vehicleImg = void 0;
                        var markerCategory = void 0;
                        // Category image
                        switch (category) {
                            case "Car":
                                markerCategory = "car";
                                vehicleImg = "../assets/img/car.jpg";
                                break;
                            case "Truck":
                                markerCategory = "truck";
                                vehicleImg = "../assets/img/truck.jpg";
                                break;
                            case "Van":
                                markerCategory = "van";
                                vehicleImg = "../assets/img/van.jpg";
                                break;
                            case "Bus":
                                markerCategory = "bus";
                                vehicleImg = "../assets/img/bus.jpg";
                                break;
                            case "Motorcycle":
                                markerCategory = "motorcycle";
                                vehicleImg = "../assets/img/motorcycle.jpg";
                                break;
                            case "Recovery Veh":
                                markerCategory = "truck";
                                vehicleImg = "../assets/img/truck.jpg";
                                break;
                            case "Lorry":
                                markerCategory = "truck";
                                vehicleImg = "../assets/img/truck.jpg";
                                break;
                            case "10 Footer Lorry":
                                markerCategory = "truck";
                                vehicleImg = "../assets/img/truck.jpg";
                                break;
                            case "14 Footer Lorry":
                                markerCategory = "truck";
                                vehicleImg = "../assets/img/truck.jpg";
                                break;
                            case "Ambulance":
                                markerCategory = "ambulance";
                                vehicleImg = "../assets/img/ambulance.jpg";
                                break;
                        }
                        var color = void 0;
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
                        var icon = void 0;
                        if (timestamp2 > timestamp1) {
                            //down
                            icon = {
                                path: 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z',
                                scale: 0.6,
                                strokeColor: color,
                                strokeWeight: 1,
                                strokeOpacity: 1,
                                fillOpacity: 1,
                                fillColor: 'white',
                                offset: '5%',
                                rotation: course,
                                anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
                            };
                        }
                        else {
                            icon = {
                                path: 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z',
                                scale: 0.6,
                                strokeColor: color,
                                strokeWeight: 1,
                                strokeOpacity: 1,
                                fillOpacity: 1,
                                fillColor: 'white',
                                offset: '5%',
                                rotation: course,
                                anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
                            };
                        }
                        var driverName = void 0;
                        if (assets.Driver.Name == null) {
                            driverName = "No Driver Assigned";
                        }
                        else {
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
                        var assetContent = "<div id='assetInfo' class='form-group row' style='padding:0px !important;'>";
                        if (plate_no !== "Unknown")
                            assetContent += "<div class='col-md-8'><h6 class='map-heading'>" + finaldata + " - (" + plate_no + ")</h6></div>";
                        else
                            assetContent += "<div class='col-md-8'><h6 class='map-heading'>" + finaldata + "</h6></div>";
                        assetContent += "<div class='col-md-4'><p style='text-align:right; padding-right:20px; padding-bottom:0px !important'>"
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
                        if (make !== "Unknown")
                            assetContent += "<span class='font-weight-bold'>Brand:&nbsp;</span>" + make +
                                "<br />";
                        if (model !== "Unknown")
                            assetContent += "<span class='font-weight-bold'>Model:&nbsp;</span>" + model +
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
                                    document.getElementById('assetInfo').innerHTML = assetContent;
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
                        }
                        else {
                            bounds.extend(latLng);
                            markers[i] = marker;
                            styleMakers[i] = styleMaker;
                        } //end of else
                    } //end of else continue     
                }
            } //end of for
            if (firstData) {
                map.setZoom(7);
                map.fitBounds(bounds);
                firstData = false;
            }
            if (route == "/tracking") {
                var outputDiv = document.getElementById('assetStatus');
                if (outputDiv) {
                    for (k = 0; k < markers.length; k++) {
                        if (markers[k] != undefined || markers[k]) {
                            outputDiv.innerHTML += "<tr>"
                                //+ "<td>"
                                //+ "<img class='vehicle-img' src='" + markers[k].cat_img + "'/>"
                                //+ "</td>"
                                + "<td>"
                                //+ "<strong><a href='javascript:google.maps.event.trigger(openmarker[" + k + "],\"click\");' style='color:#458FD2;'>" + markers[k].title + '</a></strong><br>' + markers[k].address + "<br>"
                                + "<strong><a style='color:#458FD2;'>" + markers[k].title + '</a></strong>'
                                + "</td>"
                                + "<td>"
                                + markers[k].address
                                + "</td>"
                                + "<td>"
                                + markers[k].timestamp
                                + "</td>"
                                + "<td>"
                                + markers[k].elapsed_timestamp
                                + "</td>"
                                + "<td>"
                                + speedFormatter(markers[k].speed)
                                + "</td>"
                                + "<td>"
                                + markers[k].driver
                                + "</td>"
                                + "<td>"
                                + markers[k].fix
                                + "</td>"
                                + "<td>"
                                + statusFormatter(markers[k].engine, markers[k].timestamp)
                                + "</td>"
                                + "<td>"
                                + gpsStatus(markers[k].gps, markers[k].timestamp)
                                + "</td>"
                                + "<td>"
                                + gprsStatus(markers[k].gprs, markers[k].timestamp)
                                + "</td>"
                                + "</tr>"
                                + "<hr style='border: 1px solid #FFFFFF !important'>";
                        }
                    }
                    document.getElementById('total-vehicles').innerHTML = data.length;
                    document.getElementById('getMove').innerHTML = move.toString();
                    document.getElementById('getIdle').innerHTML = idle.toString();
                    document.getElementById('getStop').innerHTML = stop.toString();
                    document.getElementById('getDown').innerHTML = down.toString();
                    //document.getElementById('getGPS').innerHTML = nogps.toString();
                    //document.getElementById('getGPRS').innerHTML = nogprs.toString();
                }
            }
        }
        function findMarker(pt) {
            openmarker = [];
            for (var i = 0; i < markers.length; i++) {
                openmarker.push(markers[i]);
            }
            return openmarker.splice(0);
        }
        function setInfoBubble(param) {
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
                icon: {
                    path: 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z',
                    scale: 0.6,
                    strokeColor: param.color,
                    strokeWeight: 1,
                    strokeOpacity: 1,
                    fillOpacity: 1,
                    fillColor: 'white',
                    offset: '5%',
                    rotation: param.course,
                    anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
                },
                shape: shape,
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
                        google.maps.event.addListener(infoBubble, 'domready', function () {
                            $("#submitdest").click(function () { return searchdestination(param.address); });
                        });
                    }
                    var content = this.content;
                    content += "<div class='form-group row col-md-12 form-inline' id='assetRoutes'>" +
                        "<div class='col-md-2'>" +
                        "<span class='text-bold'>Route Info:&nbsp;</span>" +
                        "</div>" +
                        "<div class='col-md-6' style='background-color:black !important;'>" +
                        '<input id="destination" type="text" class="form-control form-control-sm" placeholder="Enter Destination">' +
                        "</div>" +
                        "<div class='col-md-3' style='margin-left:10px;'>" +
                        '<button id="submitdest" class="btn btn-block btn-primary">Search</button>' +
                        "</div>" +
                        "</div>";
                    this.getMap().newMarker.setContent(content);
                    this.getMap().newMarker.open(this.getMap(), this);
                    this.getMap().setCenter(this.position);
                    paramtitle = param.title;
                });
            }
            return newMarker;
        }
        function searchdestination(address) {
            destto = $('#destination').val();
            URLDest = "https://www.google.com/maps/dir/" + address + "/" + destto;
            var str = new String($('#destination').val());
            var destination = str.length;
            if (destination == 0) {
                alert("Your Destination is empty!");
            }
            else {
                window.open(URLDest, 'newwindow');
            }
        }
        function Layers() {
            TrafficLayer();
            //TransitLayer();
            //BicycleLayer();
            map.mapTypes.set("Mapbox", new google.maps.ImageMapType({
                getTileUrl: function (coord, zoom) {
                    var normalizedCoord = getNormalizedCoord(coord, zoom);
                    if (!normalizedCoord) {
                        return null;
                    }
                    var bound = Math.pow(2, zoom);
                    //https://{s}-tiles.locationiq.com/v2/obk-en/r/{z}/{x}/{y}.png?key={Your_Access_Token}
                    return "https://tiles.locationiq.com/v2/obk/r/" + zoom + "/" + normalizedCoord.x + "/" + normalizedCoord.y + ".png?key=ece7de2808b2c0";
                },
                tileSize: new google.maps.Size(256, 256),
                name: "Mapbox",
                alt: "Mapbox GL",
                maxZoom: 20
            }));
            map.mapTypes.set("OSM", new google.maps.ImageMapType({
                getTileUrl: function (coord, zoom) {
                    var normalizedCoord = getNormalizedCoord(coord, zoom);
                    if (!normalizedCoord) {
                        return null;
                    }
                    var bound = Math.pow(2, zoom);
                    return "https://tile.openstreetmap.org/" + zoom + "/" + normalizedCoord.x + "/" + normalizedCoord.y + ".png";
                },
                tileSize: new google.maps.Size(256, 256),
                name: "OSM",
                alt: "Open Street Map",
                maxZoom: 20
            }));
            //End
            /*=================================================*/
            //OSM Public Transport Layer - On
            /*=================================================*/
            //Start
            map.mapTypes.set("PublicTransport", new google.maps.ImageMapType({
                getTileUrl: function (coord, zoom) {
                    var normalizedCoord = getNormalizedCoord(coord, zoom);
                    if (!normalizedCoord) {
                        return null;
                    }
                    var bound = Math.pow(2, zoom);
                    return "https://tile.memomaps.de/tilegen/" + zoom + "/" + normalizedCoord.x + "/" + normalizedCoord.y + ".png";
                },
                tileSize: new google.maps.Size(256, 256),
                name: "Public",
                alt: "Show Public Transport",
                maxZoom: 20
            }));
            //End
            /*=================================================*/
            //Open Cycle Map Outdoor Layer - On
            /*=================================================*/
            //Start
            map.mapTypes.set("OneMap", new google.maps.ImageMapType({
                getTileUrl: function (coord, zoom) {
                    var normalizedCoord = getNormalizedCoord(coord, zoom);
                    if (!normalizedCoord) {
                        return null;
                    }
                    var bound = Math.pow(2, zoom);
                    return "https://maps-a.onemap.sg/v3/Night/" + zoom + "/" + normalizedCoord.x + "/" + normalizedCoord.y + ".png";
                    //return "https://maps-a.onemap.sg/v3/Default/" + zoom + "/" + normalizedCoord.x + "/" + normalizedCoord.y + ".png";
                },
                tileSize: new google.maps.Size(256, 256),
                name: "One Map",
                alt: "One Map",
                maxZoom: 20
            }));
            // Normalizes the coords that tiles repeat across the x axis (horizontally)
            // like the standard Google map tiles.
            function getNormalizedCoord(coord, zoom) {
                var y = coord.y;
                var x = coord.x;
                // tile range in one direction range is dependent on zoom level
                // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
                var tileRange = 1 << zoom;
                // don't repeat across y-axis (vertically)
                if (y < 0 || y >= tileRange) {
                    return null;
                }
                // repeat across x-axis
                if (x < 0 || x >= tileRange) {
                    x = (x % tileRange + tileRange) % tileRange;
                }
                return {
                    x: x,
                    y: y
                };
            }
            //End
            /*=================================================*/
        }
        function TrafficLayer() {
            //Traffic Layer - On
            //Start
            /*=================================================*/
            var controlDiv = document.createElement('DIV');
            $(controlDiv).addClass('gmap-control-container')
                .addClass('gmnoprint');
            var controlUI = document.createElement('DIV');
            $(controlUI).addClass('gmap-control');
            $(controlUI).text('Traffic'); //Traffic
            $(controlDiv).append(controlUI);
            var legend = '<ul>'
                + '<li><span style="background-color: #30ac3e">&nbsp;&nbsp;</span><span style="color: #30ac3e"> &gt; Smooth Traffic</span></li>'
                + '<li><span style="background-color: #ffcf00">&nbsp;&nbsp;</span><span style="color: #ffcf00"> Slow Moving Traffic</span></li>'
                + '<li><span style="background-color: #ff0000">&nbsp;&nbsp;</span><span style="color: #ff0000"> &lt; Heavy Traffic</span></li>'
                + '<li><span style="background-color: #c0c0c0">&nbsp;&nbsp;</span><span style="color: #c0c0c0"> No data available</span></li>'
                + '</ul>';
            var controlLegend = document.createElement('DIV');
            $(controlLegend).addClass('gmap-control-legend');
            $(controlLegend).html(legend);
            $(controlLegend).hide();
            $(controlDiv).append(controlLegend);
            // Set hover toggle event
            $(controlUI)
                .mouseenter(function () {
                $(controlLegend).show();
            })
                .mouseleave(function () {
                $(controlLegend).hide();
            });
            var trafficLayer = new google.maps.TrafficLayer();
            google.maps.event.addDomListener(controlUI, 'click', function () {
                if (typeof trafficLayer.getMap() == 'undefined' || trafficLayer.getMap() === null) {
                    $(controlUI).addClass('gmap-control-active');
                    trafficLayer.setMap(map);
                }
                else {
                    trafficLayer.setMap(null);
                    $(controlUI).removeClass('gmap-control-active');
                }
            });
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlDiv);
            //Traffic Layer - On
            //End
            /*=================================================*/
        }
        function gpsStatus(gps, timestamp) {
            var d = new Date();
            var timestamp2 = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](d).local().format("D-MMM-YYYY");
            var dateEntered = moment__WEBPACK_IMPORTED_MODULE_2__(timestamp, 'D-MMM-YYYY').format('D-MMM-YYYY');
            var labelColor;
            if (timestamp2 > dateEntered) {
                labelColor = "down";
            }
            else if (gps >= 2) {
                labelColor = "move";
            }
            else if (gps < 2 && timestamp2 == dateEntered) {
                labelColor = "stop";
            }
            else {
                labelColor = "down";
            }
            return "<i class='fa fa-map-marker " + labelColor + "' title='GPS'></i>";
        }
        function gprsStatus(gprs, timestamp) {
            var d = new Date();
            var timestamp2 = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](d).local().format("D-MMM-YYYY");
            var dateEntered = moment__WEBPACK_IMPORTED_MODULE_2__(timestamp, 'D-MMM-YYYY').format('D-MMM-YYYY');
            var labelColor;
            if (timestamp2 > dateEntered) {
                labelColor = "down";
            }
            else if (gprs == 0) {
                labelColor = "move";
            }
            else if (gprs == 1) {
                labelColor = "idle";
            }
            else if (gprs == 2 && timestamp2 == dateEntered) {
                labelColor = "stop";
            }
            else {
                labelColor = "down";
            }
            return "<i class='fa fa-signal " + labelColor + "' title='3G'></i>";
        }
        function convertKmPerHour(value) {
            //Speed Formula
            if (value < 20) {
                var convertKmPerHour = value * 3.6;
            }
            else {
                var convertKmPerHour = value * 3.6 / 2;
            }
            var roundoff = Math.round(convertKmPerHour * 100) / 100;
            return roundoff + ' Km/h';
        }
        function speedFormatter(value) {
            var roundoff = Math.round(value * 100) / 100;
            return roundoff + ' km/h';
        }
        function getElapsedTime(timestamp) {
            var now = moment__WEBPACK_IMPORTED_MODULE_2__().format();
            var diff = moment__WEBPACK_IMPORTED_MODULE_2__["duration"](moment__WEBPACK_IMPORTED_MODULE_2__(now).diff(moment__WEBPACK_IMPORTED_MODULE_2__(timestamp)));
            var days = parseInt(diff.asDays()); //84
            var hours = parseInt(diff.asHours()); //2039 hours, but it gives total hours in given miliseconds which is not expacted.
            hours = hours - days * 24; // 23 hours
            var minutes = parseInt(diff.asMinutes()); //122360 minutes,but it gives total minutes in given miliseconds which is not expacted.
            minutes = minutes - (days * 24 * 60 + hours * 60); //20 minutes.
            var ms = "";
            if (days == 0 && hours == 0 && minutes == 0) {
                ms = "a moment ago";
            }
            else if (days == 0) {
                ms = hours + " hours " + minutes + " minutes ago";
            }
            else {
                if (days == 1) {
                    ms = days + " day " + hours + " hours " + minutes + " minutes ago";
                }
                else {
                    ms = days + " days " + hours + " hours " + minutes + " minutes ago";
                }
            }
            return ms;
        }
        function statusFormatter(val, timestamp) {
            var text;
            var d = new Date();
            var timestamp2 = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](d).local().format("D-MMM-YYYY");
            var dateEntered = moment__WEBPACK_IMPORTED_MODULE_2__(timestamp, 'D-MMM-YYYY').format('D-MMM-YYYY');
            var labelColor;
            if (timestamp2 > dateEntered) {
                labelColor = "down";
                text = "DOWN";
            }
            else if (val == "MOVE") {
                labelColor = "move";
                text = "MOVE";
            }
            else if (val == "IDLE") {
                labelColor = "idle";
                text = "IDLE";
            }
            else if (val == "STOP" && timestamp2 == dateEntered) {
                labelColor = "stop";
                text = "STOP";
            }
            else {
                labelColor = "down";
                text = "DOWN";
            }
            return "<span style='padding: 4px; color:white;' class='" + labelColor + "'>" + text + "</span>";
        }
        function ClearResellerFilter() {
            // Loop through markers and set map to null for each
            for (var i = 0; i < markers.length; i++) {
                if (markers[i])
                    markers[i].setMap(null);
            }
            // Reset the markers array
            markers = [];
            for (var i = 0; i < styleMakers.length; i++) {
                if (styleMakers[i])
                    styleMakers[i].setMap(null);
            }
            styleMakers = [];
            for (var i = 0; i < infoBoxList.length; i++) {
                if (infoBoxList[i])
                    infoBoxList[i].close();
            }
            // Reset the markers array
            infoBoxList = [];
        }
        function ClearZoneFilter() {
            for (var i = 0; i < polygonCoordinates.length; i++) {
                polygonCoordinates[i].setMap(null);
            }
            for (var i = 0; i < circleCoordinates.length; i++) {
                circleCoordinates[i].setMap(null);
            }
            for (var i = 0; i < pois.length; i++) {
                pois[i].setMap(null);
            }
            pois = [];
            for (var i = 0; i < infoWindowList.length; i++) {
                infoWindowList[i].close();
            }
            infoWindowList = [];
            for (var i = 0; i < markerLabels.length; i++) {
                markerLabels[i].setMap(null);
            }
            markerLabels = [];
            for (var i = 0; i < all_overlays.length; i++) {
                all_overlays[i].overlay.setMap(null);
            }
            all_overlays = [];
            for (var i = 0; i < recmarkers.length; i++) {
                recmarkers[i].setMap(null);
            }
            recmarkers = [];
            // To show:
            drawingManager.setOptions({
                drawingControl: true
            });
        }
        //=====================================OnChange==========================================//
        $('.SelectResellerFilter').on('change', function () {
            clearInterval(assetMarkerInterval);
            ClearResellerFilter();
            ClearZoneFilter();
        });
        $('.SelectCompanyFilter').change({ route: this.route }, function (event) {
            clearInterval(assetMarkerInterval);
            ClearResellerFilter();
            ClearZoneFilter();
            //get new api
            var api_zones_filter = getZonesFilter(role_id, base, uri, reseller_id);
            var api_assets_filter = getAssetsFilter(role_id, base, uri, user_id, reseller_id);
            //recreate
            setZones(handleZones, api_zones_filter);
            //resume
            setMarkers(updateAssets, api_assets_filter, event.data.route);
            assetMarkerInterval = setInterval(function () {
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
        function getZonesFilter(role_id, base, uri, reseller_id) {
            var url;
            if (role_id == 1) {
                url = base + uri + 'zoneinfo' + '?ResellerID=' + $('#load-reseller').val() + '&CompanyID=' + $('#load-company').val();
            }
            else if (role_id == 2) {
                url = base + uri + 'zoneinfo' + '?ResellerID=' + reseller_id + '&CompanyID=' + $('#load-company').val();
            }
            else if (role_id >= 3) {
                url = base + uri + 'zoneinfo' + '?ResellerID=' + reseller_id + '&CompanyID=' + $('#load-company').val();
            }
            return url;
        }
        function getAssetsFilter(role_id, base, uri, user_id, reseller_id) {
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
        //====================================END===============================================//
    }; //end of ngOnInit
    TrackingComponent.ctorParameters = function () { return [
        { type: _common_services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    TrackingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tracking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tracking/tracking.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tracking.component.css */ "./src/app/views/tracking/tracking.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], TrackingComponent);
    return TrackingComponent;
}());



/***/ }),

/***/ "./src/app/views/tracking/tracking.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/tracking/tracking.module.ts ***!
  \***************************************************/
/*! exports provided: TrackingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingModule", function() { return TrackingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _tracking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tracking.component */ "./src/app/views/tracking/tracking.component.ts");
/* harmony import */ var _tracking_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tracking-routing.module */ "./src/app/views/tracking/tracking-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _traffic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./traffic.component */ "./src/app/views/tracking/traffic.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");












var TrackingModule = /** @class */ (function () {
    function TrackingModule() {
    }
    TrackingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"].forRoot(),
                _tracking_routing_module__WEBPACK_IMPORTED_MODULE_8__["TrackingRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"].forRoot(),
            ],
            declarations: [_tracking_component__WEBPACK_IMPORTED_MODULE_7__["TrackingComponent"], _traffic_component__WEBPACK_IMPORTED_MODULE_10__["TrafficComponent"]]
        })
    ], TrackingModule);
    return TrackingModule;
}());



/***/ }),

/***/ "./src/app/views/tracking/traffic.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/tracking/traffic.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#traffic-map {\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  margin: 0 auto 0;\r\n  padding: 0px 0px 0;\r\n  overflow: hidden;\r\n  max-width: none !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n/*Custom Style Start*/\r\n\r\n/*==========================================================================*/\r\n\r\n.gm-style .gm-style-iw {\r\n  background-color: #1e1e24 !important;\r\n  top: 0 !important;\r\n  left: 0 !important;\r\n  /*width: 100% !important;*/\r\n  max-width: 450px !important;\r\n  padding-top: 10px;\r\n  display: block !important;\r\n  overflow: visible !important;\r\n}\r\n\r\n.gm-style .gm-style-pbc {\r\n  background-color: #1e1e24 !important;\r\n}\r\n\r\n/*style the p tag*/\r\n\r\n.gm-style .gm-style-iw #google-popup p {\r\n  padding: 10px;\r\n}\r\n\r\n/*style the arrow*/\r\n\r\n.gm-style div div div div div div div div {\r\n  background-color: #1e1e24 !important;\r\n  margin: 0;\r\n  padding: 0;\r\n  top: 0;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  overflow: hidden !important;\r\n}\r\n\r\n.poi-info-window a:link {\r\n  text-decoration: none;\r\n  color: #97d8ff !important;\r\n  background: none !important;\r\n}\r\n\r\n/*style the link*/\r\n\r\n.gm-style div div div div div div div div a {\r\n  color: #f1f1f1;\r\n  font-weight: bold;\r\n}\r\n\r\n.gm-style .gm-style-iw-t::after {\r\n  background: linear-gradient(45deg,rgb(59, 63, 72) 50%,rgba(255,255,255,0) 51%, rgba(255,255,255,0) 100%) !important;\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.gm-style img.traffic-img {\r\n  width: 180px;\r\n  height: 180px;\r\n  text-align: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.gm-style .gm-style-iw-d {\r\n  overflow: visible;\r\n}\r\n\r\n.align-center {\r\n  /*text-align: center*/\r\n}\r\n\r\n.gm-ui-hover-effect {\r\n  /* display: none !important; */\r\n  background-color: #fff !important;\r\n  /* content: url(\"/img/closebtn.png\") !important; */\r\n  opacity: .9;\r\n  /* margin-top: 5.9px !important;\r\n    margin-right: 5px !important; */\r\n  top: 0px !important;\r\n  right: 0px !important;\r\n  width: 15px !important;\r\n  height: 15px !important;\r\n  margin-top: 0px !important;\r\n  margin-right: 0px !important;\r\n}\r\n\r\n.gm-ui-hover-effect img {\r\n    margin: 1px !important;\r\n  }\r\n\r\n.input-map {\r\n  padding: .285rem .75rem !important;\r\n  background-color: #eaeaea !important;\r\n  color: #495057 !important;\r\n  font-size: 12px !important;\r\n}\r\n\r\n#assetDetails {\r\n  font-size: 13px;\r\n  line-height: 1.57;\r\n  color: #ffffff;\r\n}\r\n\r\n#assetInfo i {\r\n  color: #FFF;\r\n  border-radius: 4px;\r\n  padding: 5px 8px;\r\n  font-size: 13px;\r\n}\r\n\r\n.move {\r\n  background-color: #2B7C21;\r\n}\r\n\r\n.stop {\r\n  background-color: #B60003;\r\n}\r\n\r\n.idle {\r\n  background-color: #fea82c;\r\n}\r\n\r\n.down {\r\n  background-color: #696969;\r\n}\r\n\r\n.form-inline .form-control {\r\n  width: 100%;\r\n}\r\n\r\n.form-control {\r\n  background-color: #fff;\r\n}\r\n\r\n.form-control:focus {\r\n    background-color: #fff;\r\n    border-color: #46b1ff;\r\n  }\r\n\r\n/*Custom Style End*/\r\n\r\n/*==========================================================================*/\r\n\r\n.table {\r\n  color: white;\r\n  /*table-layout: fixed;*/\r\n}\r\n\r\nbutton.gm-ui-hover-effect {\r\n  margin-top: 10px !important;\r\n  margin-right: 10px !important;\r\n}\r\n\r\n.labels {\r\n  color: white;\r\n  background-color: black;\r\n  font-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n  font-size: 10px;\r\n  text-align: center;\r\n  width: 100px;\r\n  white-space: nowrap;\r\n}\r\n\r\n#panel {\r\n  width: 200px;\r\n  font-family: Arial, sans-serif;\r\n  font-size: 13px;\r\n  float: right;\r\n  margin: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 8px;\r\n  padding-top: 8px;\r\n  padding-bottom: 10px;\r\n  background-color: #404040;\r\n  width: auto;\r\n}\r\n\r\n#color-palette {\r\n  clear: both;\r\n}\r\n\r\n.color-button {\r\n  width: 14px;\r\n  height: 14px;\r\n  font-size: 0;\r\n  margin: 2px;\r\n  float: left;\r\n  cursor: pointer;\r\n}\r\n\r\n/*-----------------------------------------------------------------------------*/\r\n\r\nnav#map-toggle button {\r\n  position: absolute;\r\n  left: -120px;\r\n  top: 70px;\r\n}\r\n\r\nnav#map-toggle button i {\r\n    margin-top: -2px;\r\n  }\r\n\r\n.open-close-container label,\r\n.open-close-container p {\r\n  font-size: 12px !important;\r\n}\r\n\r\n.open-close-container {\r\n  position: absolute;\r\n  z-index: 999999;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  padding: 5px;\r\n  color: #eaeaea;\r\n  font-size: 14px !important;\r\n}\r\n\r\n/*------------------------------------ Asset Status Table -----------------------------------------*/\r\n\r\n#trafficStatus {\r\n  font-size: 12px;\r\n  color: #000 !important;\r\n}\r\n\r\n#trafficStatus i.fa {\r\n    width: 20px;\r\n    height: 20px;\r\n    padding-top: 5px;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    color: #fff !important;\r\n  }\r\n\r\n#trafficStatus .traffic-img {\r\n    width: 30px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdHJhY2tpbmcvdHJhZmZpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3Qjs7QUFFQSxxQkFBcUI7O0FBQ3JCLDZFQUE2RTs7QUFDN0U7RUFDRSxvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUNBLGtCQUFrQjs7QUFDbEI7RUFDRSxhQUFhO0FBQ2Y7O0FBR0Esa0JBQWtCOztBQUNsQjtFQUNFLG9DQUFvQztFQUNwQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLE1BQU07RUFDTixXQUFXO0VBQ1gsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUNBLGlCQUFpQjs7QUFFakI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUhBQW1IO0VBQ25ILGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsa0RBQWtEO0VBQ2xELFdBQVc7RUFDWDttQ0FDaUM7RUFDakMsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUU7SUFDRSxzQkFBc0I7RUFDeEI7O0FBRUY7RUFDRSxrQ0FBa0M7RUFDbEMsb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUdBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVFO0lBQ0Usc0JBQXNCO0lBQ3RCLHFCQUFxQjtFQUN2Qjs7QUFDRixtQkFBbUI7O0FBQ25CLDZFQUE2RTs7QUFFN0U7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaURBQWlEO0VBQ2pELGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUEsZ0ZBQWdGOztBQUVoRjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVGOztFQUVFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBR0Esb0dBQW9HOztBQUNwRztFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RyYWNraW5nL3RyYWZmaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0cmFmZmljLW1hcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCBhdXRvIDA7XHJcbiAgcGFkZGluZzogMHB4IDBweCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKkN1c3RvbSBTdHlsZSBTdGFydCovXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4uZ20tc3R5bGUgLmdtLXN0eWxlLWl3IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTI0ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIC8qd2lkdGg6IDEwMCUgIWltcG9ydGFudDsqL1xyXG4gIG1heC13aWR0aDogNDUwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5nbS1zdHlsZSAuZ20tc3R5bGUtcGJjIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTI0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLypzdHlsZSB0aGUgcCB0YWcqL1xyXG4uZ20tc3R5bGUgLmdtLXN0eWxlLWl3ICNnb29nbGUtcG9wdXAgcCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuXHJcbi8qc3R5bGUgdGhlIGFycm93Ki9cclxuLmdtLXN0eWxlIGRpdiBkaXYgZGl2IGRpdiBkaXYgZGl2IGRpdiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMjQgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0b3A6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvaS1pbmZvLXdpbmRvdyBhOmxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzk3ZDhmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4vKnN0eWxlIHRoZSBsaW5rKi9cclxuXHJcbi5nbS1zdHlsZSBkaXYgZGl2IGRpdiBkaXYgZGl2IGRpdiBkaXYgZGl2IGEge1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZ20tc3R5bGUgLmdtLXN0eWxlLWl3LXQ6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcscmdiKDU5LCA2MywgNzIpIDUwJSxyZ2JhKDI1NSwyNTUsMjU1LDApIDUxJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5nbS1zdHlsZSBpbWcudHJhZmZpYy1pbWcge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmdtLXN0eWxlIC5nbS1zdHlsZS1pdy1kIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLmFsaWduLWNlbnRlciB7XHJcbiAgLyp0ZXh0LWFsaWduOiBjZW50ZXIqL1xyXG59XHJcblxyXG4uZ20tdWktaG92ZXItZWZmZWN0IHtcclxuICAvKiBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIC8qIGNvbnRlbnQ6IHVybChcIi9pbWcvY2xvc2VidG4ucG5nXCIpICFpbXBvcnRhbnQ7ICovXHJcbiAgb3BhY2l0eTogLjk7XHJcbiAgLyogbWFyZ2luLXRvcDogNS45cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcclxuICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gIC5nbS11aS1ob3Zlci1lZmZlY3QgaW1nIHtcclxuICAgIG1hcmdpbjogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLmlucHV0LW1hcCB7XHJcbiAgcGFkZGluZzogLjI4NXJlbSAuNzVyZW0gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2Fzc2V0RGV0YWlscyB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU3O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4jYXNzZXRJbmZvIGkge1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLm1vdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQjdDMjE7XHJcbn1cclxuXHJcbi5zdG9wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjYwMDAzO1xyXG59XHJcblxyXG4uaWRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYTgyYztcclxufVxyXG5cclxuLmRvd24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTY5Njk7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1pbmxpbmUgLmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDZiMWZmO1xyXG4gIH1cclxuLypDdXN0b20gU3R5bGUgRW5kKi9cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4udGFibGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvKnRhYmxlLWxheW91dDogZml4ZWQ7Ki9cclxufVxyXG5cclxuYnV0dG9uLmdtLXVpLWhvdmVyLWVmZmVjdCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWxzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuI3BhbmVsIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4jY29sb3ItcGFsZXR0ZSB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jb2xvci1idXR0b24ge1xyXG4gIHdpZHRoOiAxNHB4O1xyXG4gIGhlaWdodDogMTRweDtcclxuICBmb250LXNpemU6IDA7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbm5hdiNtYXAtdG9nZ2xlIGJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMjBweDtcclxuICB0b3A6IDcwcHg7XHJcbn1cclxuXHJcbiAgbmF2I21hcC10b2dnbGUgYnV0dG9uIGkge1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxuICB9XHJcblxyXG4ub3Blbi1jbG9zZS1jb250YWluZXIgbGFiZWwsXHJcbi5vcGVuLWNsb3NlLWNvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm9wZW4tY2xvc2UtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGNvbG9yOiAjZWFlYWVhO1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQXNzZXQgU3RhdHVzIFRhYmxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuI3RyYWZmaWNTdGF0dXMge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gICN0cmFmZmljU3RhdHVzIGkuZmEge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICN0cmFmZmljU3RhdHVzIC50cmFmZmljLWltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/tracking/traffic.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/tracking/traffic.component.ts ***!
  \*****************************************************/
/*! exports provided: TrafficComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficComponent", function() { return TrafficComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_services_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/constants.service */ "./src/app/common/services/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);




//import 'moment/locale/en-gb';




var TrafficComponent = /** @class */ (function () {
    function TrafficComponent(_constant, location, router) {
        var _this = this;
        this._constant = _constant;
        this.router = router;
        this.slides = [];
        this.router.events.subscribe(function (event) {
            if (location.path() != "") {
                _this.route = location.path();
            }
        });
    }
    TrafficComponent.prototype.ngOnInit = function () {
        var _this = this;
        var base = this._constant.baseAppUrl;
        var uri = this._constant.uri_track;
        var user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
        var reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
        var company_id = Number(sessionStorage.getItem('setSessionstorageValueCompanyID'));
        var role_id = this._constant.getSessionstorageValueRoleID;
        var traffic_api = this._constant.trafficApi;
        var traffic_alert_api = this._constant.traffic_incidentApi;
        //Filter Dropdown
        $('#_reports').hide();
        if (role_id >= 3) {
            $('#_reseller').hide();
        }
        if (this.route == '/reports')
            $('#_reports').show();
        else
            $('#_reports').hide();
        var map, marker, paramtitle, infoBubble;
        var infoBoxList = [];
        var markers = new Array();
        var firstData = true;
        var shape = {
            coord: [16, 0, 18, 1, 21, 2, 24, 3, 26, 4, 27, 5, 28, 6, 29, 7, 29, 8, 29, 9, 29, 10, 29, 11, 29, 12, 29, 13, 29, 14, 29, 15, 29, 16, 29, 17, 29, 18, 29, 19, 29, 20, 29, 21, 29, 22, 29, 23, 29, 24, 29, 25, 29, 26, 29, 27, 29, 28, 28, 29, 3, 29, 2, 28, 2, 27, 1, 26, 1, 25, 1, 24, 0, 23, 0, 22, 0, 21, 0, 20, 0, 19, 0, 18, 0, 17, 0, 16, 0, 15, 0, 14, 0, 13, 0, 12, 0, 11, 0, 10, 0, 9, 0, 8, 0, 7, 1, 6, 2, 5, 2, 4, 3, 3, 5, 2, 6, 1, 8, 0, 16, 0],
            type: 'poly'
        };
        //================================INIT==================================//
        var latlng = new google.maps.LatLng(1.3521, 103.8198);
        var trafficmapOptions = {
            zoom: 12,
            center: latlng,
            panControl: false,
            zoomControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },
            mapTypeControl: false,
            //mapTypeId: google.maps.MapTypeId.SATELLITE,
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
        map = new google.maps.Map(document.getElementById("traffic-map"), trafficmapOptions);
        setTrafficMarkers(updateTraffic, traffic_api, this.route);
        setTrafficAlerts(updateTrafficAlert, traffic_alert_api, this.route);
        google.maps.event.addListener(map, 'mousemove', function (event) {
            document.getElementById('coordinates-panel').innerHTML =
                event.latLng.lat() + ', ' + event.latLng.lng();
        });
        //================================AUTOREFRESH========================================//
        setInterval(function () {
            setTrafficMarkers(updateTraffic, traffic_api, _this.route);
        }, 10000);
        //=====================================Traffic Map=============================================//
        function setTrafficMarkers(callback, traffic_api, route) {
            axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(traffic_api)
                .then(function (response) {
                //console.log(response);
                callback(response.data, route);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        function updateTraffic(data, route) {
            var traffic = data.items[0];
            var _timestamp = traffic.timestamp;
            var bounds = new google.maps.LatLngBounds();
            if (data.api_info.status == "healthy") {
                var _cameras = traffic.cameras;
                for (var k = 0, length = _cameras.length; k < length; k++) {
                    var camera_id = _cameras[k].camera_id;
                    var image = _cameras[k].image;
                    var trafficTimestamp = _cameras[k].timestamp;
                    var timestamp = moment__WEBPACK_IMPORTED_MODULE_3__["utc"](trafficTimestamp).local().format("D-MMM-YYYY, hh:mm:ss A");
                    var latitude = _cameras[k].location.latitude;
                    var longitude = _cameras[k].location.longitude;
                    var latLng = new google.maps.LatLng(latitude, longitude);
                    var elapsedTimestamp = moment__WEBPACK_IMPORTED_MODULE_3__["utc"](trafficTimestamp).local().format();
                    var el = getElapsedTime(elapsedTimestamp);
                    var content = "<div id='trafficInfo' class='form-group row' style='padding:0px !important;'>";
                    content += "<div class='col-md-8'><h6>" + camera_id + "</h6></div>";
                    content += "<table class='table table-vcenter'>" +
                        "<tbody>" +
                        "<tr>" + "<td colspan='2'>";
                    content +=
                        "<span class='font-weight-bold'>Latitude:&nbsp;</span>" + latitude +
                            "<br />" +
                            "<span class='font-weight-bold'>Longtitude:&nbsp;</span>" + longitude +
                            "<br />" + "<span class='font-weight-bold'>Date:&nbsp;</span>" + timestamp +
                            "<br />" +
                            "<span class='font-weight-bold'>Last Updated:&nbsp;</span>" + el +
                            "<br />" +
                            "</td>" +
                            "<td colspan='2' class='pl-4'>" +
                            "<img class='traffic-img' src='" + image + "'/>" + "<br />";
                    content += "</td>" +
                        "</tr>" +
                        "</tbody>" + "</table>" +
                        "</div></div>";
                    marker = setInfoBubble({
                        map: map,
                        position: latLng,
                        //icon: icon,
                        title: camera_id,
                        shape: shape,
                        camera_id: camera_id,
                        image: image,
                        timestamp: timestamp,
                        elapsed_timestamp: el,
                        latitude: latitude,
                        longitude: longitude,
                        content: content
                    });
                    marker.setMap(map);
                    if (markers[k] && markers[k].setPosition) {
                        $("#trafficStatus").empty();
                        // To remove the marker from the map
                        marker.setMap(null);
                        markers[k].setPosition(latLng);
                        //markers[k].setIcon(icon);
                        if (paramtitle == camera_id) {
                            markers[k].id = camera_id;
                            markers[k].content = content;
                            markers[k].timestamp = timestamp;
                            markers[k].image = image;
                            markers[k].elapsed_timestamp = el;
                            markers[k].latitude = latitude;
                            markers[k].longitude = longitude;
                            if ($('#assetInfo').val() != null || $('#trafficInfo').val() != undefined) {
                                document.getElementById('trafficInfo').innerHTML = content;
                            }
                            //map.panTo(marker.getPosition());
                        }
                        else {
                            markers[k].id = camera_id;
                            markers[k].content = content;
                            markers[k].timestamp = timestamp;
                            markers[k].image = image;
                            markers[k].elapsed_timestamp = el;
                            markers[k].latitude = latitude;
                            markers[k].longitude = longitude;
                        }
                    }
                    else {
                        markers[k] = marker;
                    } //end of else
                } //end of for
                //if (firstData) {
                //  map.setZoom(7);
                //  map.fitBounds(bounds);
                //  firstData = false;
                //}
                if (route == "/tracking/traffic") {
                    var outputDiv = document.getElementById('trafficStatus');
                    if (outputDiv) {
                        for (k = 0; k < markers.length; k++) {
                            if (markers[k] != undefined || markers[k]) {
                                outputDiv.innerHTML += "<tr>"
                                    //+ "<td>"
                                    //+ "<img class='traffic-img' src='" + markers[k].image + "'/>"
                                    //+ "</td>"
                                    + "<td>"
                                    + "<strong><a style='color:#458FD2;'>" + markers[k].title + '</a></strong>'
                                    + "</td>"
                                    + "<td>"
                                    + markers[k].latitude
                                    + "</td>"
                                    + "<td>"
                                    + markers[k].longitude
                                    + "</td>"
                                    + "<td>"
                                    + markers[k].timestamp
                                    + "</td>"
                                    + "<td>"
                                    + markers[k].elapsed_timestamp
                                    + "</td>"
                                    + "</tr>"
                                    + "<hr style='border: 1px solid #FFFFFF !important'>";
                            }
                        }
                        document.getElementById('total-cameras').innerHTML = _cameras.length;
                    }
                }
            }
        }
        function setInfoBubble(param) {
            var newMarker = new google.maps.Marker({
                map: param.map,
                position: param.position,
                title: param.title,
                content: param.content,
                image: param.image,
                latitude: param.latitude,
                longitude: param.longitude,
                timestamp: param.timestamp,
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
        function getElapsedTime(timestamp) {
            var now = moment__WEBPACK_IMPORTED_MODULE_3__().format();
            var diff = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](moment__WEBPACK_IMPORTED_MODULE_3__(now).diff(moment__WEBPACK_IMPORTED_MODULE_3__(timestamp)));
            var days = parseInt(diff.asDays()); //84
            var hours = parseInt(diff.asHours()); //2039 hours, but it gives total hours in given miliseconds which is not expacted.
            hours = hours - days * 24; // 23 hours
            var minutes = parseInt(diff.asMinutes()); //122360 minutes,but it gives total minutes in given miliseconds which is not expacted.
            minutes = minutes - (days * 24 * 60 + hours * 60); //20 minutes.
            var ms = "";
            if (days == 0 && hours == 0 && minutes == 0) {
                ms = "a moment ago";
            }
            else if (days == 0) {
                ms = hours + " hours " + minutes + " minutes ago";
            }
            else {
                if (days == 1) {
                    ms = days + " day " + hours + " hours " + minutes + " minutes ago";
                }
                else {
                    ms = days + " days " + hours + " hours " + minutes + " minutes ago";
                }
            }
            return ms;
        }
        //=====================================Traffic Alerts=============================================//
        function setTrafficAlerts(callback, traffic_api, route) {
            var headers = {
                'AccountKey': "81mllMnBSuaCHobzZ61TXQ==",
                'accept': 'application/json'
            };
            axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(traffic_api, { headers: headers })
                .then(function (response) {
                //console.log(response);
                callback(response.data, route);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        function updateTrafficAlert(data, route) {
            var traffic = data.value;
            console.log(JSON.stringify(traffic));
            alert(JSON.stringify(traffic));
            for (var k = 0, length = traffic.length; k < length; k++) {
            } //end of for
        }
    };
    TrafficComponent.ctorParameters = function () { return [
        { type: _common_services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    TrafficComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./traffic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tracking/traffic.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./traffic.component.css */ "./src/app/views/tracking/traffic.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TrafficComponent);
    return TrafficComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-tracking-tracking-module.js.map