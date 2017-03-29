webpackJsonp([3],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(128);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

function load(component) {
  return () => __webpack_require__(132)(`./${component}.vue`);
}

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [{ path: '/', component: load('Index') }, // Default
  { path: '*', component: load('Error404') } // Not found
  ]
}));

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(124)

var Component = __webpack_require__(121)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(127),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_quasar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(117);
// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE

/* eslint-disable */
__webpack_require__(118);
// ==============================





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_quasar___default.a); // Install Quasar Framework

__WEBPACK_IMPORTED_MODULE_1_quasar___default.a.start(() => {
  /* eslint-disable no-new */
  new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#q-app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    render: h => h(__webpack_require__(120))
  });
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/*
 * Root component
 */
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 2,
	"./af.js": 2,
	"./ar": 9,
	"./ar-dz": 3,
	"./ar-dz.js": 3,
	"./ar-kw": 4,
	"./ar-kw.js": 4,
	"./ar-ly": 5,
	"./ar-ly.js": 5,
	"./ar-ma": 6,
	"./ar-ma.js": 6,
	"./ar-sa": 7,
	"./ar-sa.js": 7,
	"./ar-tn": 8,
	"./ar-tn.js": 8,
	"./ar.js": 9,
	"./az": 10,
	"./az.js": 10,
	"./be": 11,
	"./be.js": 11,
	"./bg": 12,
	"./bg.js": 12,
	"./bn": 13,
	"./bn.js": 13,
	"./bo": 14,
	"./bo.js": 14,
	"./br": 15,
	"./br.js": 15,
	"./bs": 16,
	"./bs.js": 16,
	"./ca": 17,
	"./ca.js": 17,
	"./cs": 18,
	"./cs.js": 18,
	"./cv": 19,
	"./cv.js": 19,
	"./cy": 20,
	"./cy.js": 20,
	"./da": 21,
	"./da.js": 21,
	"./de": 24,
	"./de-at": 22,
	"./de-at.js": 22,
	"./de-ch": 23,
	"./de-ch.js": 23,
	"./de.js": 24,
	"./dv": 25,
	"./dv.js": 25,
	"./el": 26,
	"./el.js": 26,
	"./en-au": 27,
	"./en-au.js": 27,
	"./en-ca": 28,
	"./en-ca.js": 28,
	"./en-gb": 29,
	"./en-gb.js": 29,
	"./en-ie": 30,
	"./en-ie.js": 30,
	"./en-nz": 31,
	"./en-nz.js": 31,
	"./eo": 32,
	"./eo.js": 32,
	"./es": 34,
	"./es-do": 33,
	"./es-do.js": 33,
	"./es.js": 34,
	"./et": 35,
	"./et.js": 35,
	"./eu": 36,
	"./eu.js": 36,
	"./fa": 37,
	"./fa.js": 37,
	"./fi": 38,
	"./fi.js": 38,
	"./fo": 39,
	"./fo.js": 39,
	"./fr": 42,
	"./fr-ca": 40,
	"./fr-ca.js": 40,
	"./fr-ch": 41,
	"./fr-ch.js": 41,
	"./fr.js": 42,
	"./fy": 43,
	"./fy.js": 43,
	"./gd": 44,
	"./gd.js": 44,
	"./gl": 45,
	"./gl.js": 45,
	"./gom-latn": 46,
	"./gom-latn.js": 46,
	"./he": 47,
	"./he.js": 47,
	"./hi": 48,
	"./hi.js": 48,
	"./hr": 49,
	"./hr.js": 49,
	"./hu": 50,
	"./hu.js": 50,
	"./hy-am": 51,
	"./hy-am.js": 51,
	"./id": 52,
	"./id.js": 52,
	"./is": 53,
	"./is.js": 53,
	"./it": 54,
	"./it.js": 54,
	"./ja": 55,
	"./ja.js": 55,
	"./jv": 56,
	"./jv.js": 56,
	"./ka": 57,
	"./ka.js": 57,
	"./kk": 58,
	"./kk.js": 58,
	"./km": 59,
	"./km.js": 59,
	"./kn": 60,
	"./kn.js": 60,
	"./ko": 61,
	"./ko.js": 61,
	"./ky": 62,
	"./ky.js": 62,
	"./lb": 63,
	"./lb.js": 63,
	"./lo": 64,
	"./lo.js": 64,
	"./lt": 65,
	"./lt.js": 65,
	"./lv": 66,
	"./lv.js": 66,
	"./me": 67,
	"./me.js": 67,
	"./mi": 68,
	"./mi.js": 68,
	"./mk": 69,
	"./mk.js": 69,
	"./ml": 70,
	"./ml.js": 70,
	"./mr": 71,
	"./mr.js": 71,
	"./ms": 73,
	"./ms-my": 72,
	"./ms-my.js": 72,
	"./ms.js": 73,
	"./my": 74,
	"./my.js": 74,
	"./nb": 75,
	"./nb.js": 75,
	"./ne": 76,
	"./ne.js": 76,
	"./nl": 78,
	"./nl-be": 77,
	"./nl-be.js": 77,
	"./nl.js": 78,
	"./nn": 79,
	"./nn.js": 79,
	"./pa-in": 80,
	"./pa-in.js": 80,
	"./pl": 81,
	"./pl.js": 81,
	"./pt": 83,
	"./pt-br": 82,
	"./pt-br.js": 82,
	"./pt.js": 83,
	"./ro": 84,
	"./ro.js": 84,
	"./ru": 85,
	"./ru.js": 85,
	"./sd": 86,
	"./sd.js": 86,
	"./se": 87,
	"./se.js": 87,
	"./si": 88,
	"./si.js": 88,
	"./sk": 89,
	"./sk.js": 89,
	"./sl": 90,
	"./sl.js": 90,
	"./sq": 91,
	"./sq.js": 91,
	"./sr": 93,
	"./sr-cyrl": 92,
	"./sr-cyrl.js": 92,
	"./sr.js": 93,
	"./ss": 94,
	"./ss.js": 94,
	"./sv": 95,
	"./sv.js": 95,
	"./sw": 96,
	"./sw.js": 96,
	"./ta": 97,
	"./ta.js": 97,
	"./te": 98,
	"./te.js": 98,
	"./tet": 99,
	"./tet.js": 99,
	"./th": 100,
	"./th.js": 100,
	"./tl-ph": 101,
	"./tl-ph.js": 101,
	"./tlh": 102,
	"./tlh.js": 102,
	"./tr": 103,
	"./tr.js": 103,
	"./tzl": 104,
	"./tzl.js": 104,
	"./tzm": 106,
	"./tzm-latn": 105,
	"./tzm-latn.js": 105,
	"./tzm.js": 106,
	"./uk": 107,
	"./uk.js": 107,
	"./ur": 108,
	"./ur.js": 108,
	"./uz": 110,
	"./uz-latn": 109,
	"./uz-latn.js": 109,
	"./uz.js": 110,
	"./vi": 111,
	"./vi.js": 111,
	"./x-pseudo": 112,
	"./x-pseudo.js": 112,
	"./yo": 113,
	"./yo.js": 113,
	"./zh-cn": 114,
	"./zh-cn.js": 114,
	"./zh-hk": 115,
	"./zh-hk.js": 115,
	"./zh-tw": 116,
	"./zh-tw.js": 116
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 126;

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "q-app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Error404.vue": [
		134,
		1
	],
	"./Index.vue": [
		135,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 132;

/***/ })

},[122]);