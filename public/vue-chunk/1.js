webpackJsonp([1],{

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(81),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\LaravelVue\\resources\\assets\\js\\admin\\views\\posts\\Tag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tag.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f7df6b6", Component.options)
  } else {
    hotAPI.reload("data-v-2f7df6b6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'tag'
});

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("here is tag")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f7df6b6", module.exports)
  }
}

/***/ })

});