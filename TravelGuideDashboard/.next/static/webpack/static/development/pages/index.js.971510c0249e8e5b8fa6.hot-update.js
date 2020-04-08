webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MapBody/index.jsx":
/*!**************************************!*\
  !*** ./components/MapBody/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/MapBody/styles.jsx");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-geocode */ "./node_modules/react-geocode/lib/index.js");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\shreyvijayvargiya\\Desktop\\CodingChallengeProjects\\TravelGuideDashboard\\components\\MapBody\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var MapBody = function MapBody(_ref) {
  var cityName = _ref.cityName;
  var mapStyle = {
    width: '80%',
    height: '70vh',
    margin: 'auto',
    borderRadius: '16px'
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      viewport = _useState[0],
      setViewPort = _useState[1];

  var Token = "pk.eyJ1Ijoic2hyZXl2aWpheXZhcmdpeWEiLCJhIjoiY2pzamxxbG5zMHppMTQ0cW91OTd0aHBwZCJ9.zT0Jji19YEj8pR5P495KrA";
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var zoom = 9;
        var height = '70vh';
        var width = '80%';
        setViewPort({
          latitude: latitude,
          longitude: longitude,
          zoom: zoom,
          height: height,
          width: width
        });
      });
    }
  }, []);
  console.log(cityName, 'cityName inside Mapbody');
  return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewport, {
    style: mapStyle,
    mapStyle: "mapbox://styles/mapbox/dark-v10",
    mapboxApiAccessToken: Token,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 3
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MapBody);

/***/ }),

/***/ "./node_modules/react-geocode/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-geocode/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var regeneratorRuntime = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");function asyncGeneratorStep(e,r,n,t,o,a,c){try{var s=e[a](c),u=s.value}catch(e){return void n(e)}s.done?r(u):Promise.resolve(u).then(t,o)}function _asyncToGenerator(e){return function(){var r=this,n=arguments;return new Promise(function(t,o){var a=e.apply(r,n);function c(e){asyncGeneratorStep(a,t,o,c,s,"next",e)}function s(e){asyncGeneratorStep(a,t,o,c,s,"throw",e)}c(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var DEBUG=!1,API_KEY=null,LANGUAGE="en",REGION=null,GOOGLE_API="https://maps.google.com/maps/api/geocode/json";function log(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];DEBUG&&(r?console.warn(e):console.log(e))}function handleUrl(e){return _handleUrl.apply(this,arguments)}function _handleUrl(){return(_handleUrl=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r).catch(function(){return Promise.reject(new Error("Error fetching data"))});case 2:return n=e.sent,e.next=5,n.json().catch(function(){return log("Error parsing server response"),Promise.reject(new Error("Error parsing server response"))});case 5:if("OK"!==(t=e.sent).status){e.next=9;break}return log(t),e.abrupt("return",t);case 9:return log("".concat(t.error_message,".\nServer returned status code ").concat(t.status),!0),e.abrupt("return",Promise.reject(new Error("".concat(t.error_message,".\nServer returned status code ").concat(t.status))));case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}var _default={setApiKey:function(apiKey){API_KEY=apiKey},setLanguage:function(language){LANGUAGE=language},setRegion:function(region){REGION=region},enableDebug:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];DEBUG=e},fromLatLng:function(lat,lng,apiKey,language,region){return _asyncToGenerator(regeneratorRuntime.mark(function a(){var c,s;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(lat&&lng){a.next=3;break}return log("Provided coordinates are invalid",!0),a.abrupt("return",Promise.reject(new Error("Provided coordinates are invalid")));case 3:return c="".concat(lat,",").concat(lng),s="".concat(GOOGLE_API,"?latlng=").concat(encodeURIComponent(c)),(apiKey||API_KEY)&&(s+="&key=".concat(API_KEY=apiKey||API_KEY)),(language||LANGUAGE)&&(s+="&language=".concat(LANGUAGE=language||LANGUAGE)),(region||REGION)&&(REGION=region||REGION,s+="&region=".concat(encodeURIComponent(REGION))),a.abrupt("return",handleUrl(s));case 9:case"end":return a.stop()}},a)}))()},fromAddress:function(address,apiKey,language,region){return _asyncToGenerator(regeneratorRuntime.mark(function o(){var a;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(address){o.next=3;break}return log("Provided address is invalid",!0),o.abrupt("return",Promise.reject(new Error("Provided address is invalid")));case 3:return a="".concat(GOOGLE_API,"?address=").concat(encodeURIComponent(address)),(apiKey||API_KEY)&&(a+="&key=".concat(API_KEY=apiKey||API_KEY)),(language||LANGUAGE)&&(a+="&language=".concat(LANGUAGE=language||LANGUAGE)),(region||REGION)&&(REGION=region||REGION,a+="&region=".concat(encodeURIComponent(REGION))),o.abrupt("return",handleUrl(a));case 8:case"end":return o.stop()}},o)}))()}};exports.default=_default;

/***/ })

})
//# sourceMappingURL=index.js.971510c0249e8e5b8fa6.hot-update.js.map