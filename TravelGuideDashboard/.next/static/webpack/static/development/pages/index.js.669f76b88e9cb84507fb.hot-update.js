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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      coords = _useState2[0],
      setCoords = _useState2[1];

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

    react_geocode__WEBPACK_IMPORTED_MODULE_4___default.a.fromAddress(cityName).then(function (response) {
      var _response$results$0$g = response.results[0].geometry.location,
          lat = _response$results$0$g.lat,
          lng = _response$results$0$g.lng;
    });
  }, []);
  console.log(cityName, 'cityName inside Mapbody');
  return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewport, {
    style: mapStyle,
    mapStyle: "mapbox://styles/mapbox/dark-v10",
    mapboxApiAccessToken: Token,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MapBody);

/***/ })

})
//# sourceMappingURL=index.js.669f76b88e9cb84507fb.hot-update.js.map