webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Home/index.jsx":
/*!***********************************!*\
  !*** ./components/Home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./components/index.jsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\shreyvijayvargiya\\Desktop\\CodingChallengeProjects\\TravelGuideDashboard\\components\\Home\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      cityName = _useState[0],
      setCityName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      stateName = _useState2[0],
      setStateName = _useState2[1];

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["Searchbar"], {
    cityName: cityName,
    stateName: stateName,
    setCityName: setCityName,
    setStateName: setStateName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }), __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["MapBody"], {
    cityName: cityName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

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

    console.log(cityName, 'cityName inside Mapbody');
  }, []);
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

/***/ "./components/Searchbar/index.jsx":
/*!****************************************!*\
  !*** ./components/Searchbar/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/Searchbar/styles.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\shreyvijayvargiya\\Desktop\\CodingChallengeProjects\\TravelGuideDashboard\\components\\Searchbar\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Searchbar = function Searchbar(_ref) {
  var cityName = _ref.cityName,
      stateName = _ref.stateName,
      setCityName = _ref.setCityName,
      setStateName = _ref.setStateName;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      cities = _useState[0],
      setCities = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      state = _useState2[0],
      setState = _useState2[1];

  var statesUrl = 'https://indian-cities-api-nocbegfhqg.now.sh/cities';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var states = [];
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(statesUrl).then(function (res) {
      res.data.map(function (item) {
        if (states.indexOf(item.State) < 0) {
          states.push(item.State);
        }
      });
      setState(states);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var cityUrl = "https://indian-cities-api-nocbegfhqg.now.sh/cities?State=".concat(stateName);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(cityUrl).then(function (res) {
      res.data.map(function (item) {
        setCities(function (oldArray) {
          return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(oldArray), [item.City]);
        });
      });
    });
  }, [stateName]);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, " Select State "), __jsx("select", {
    id: "state",
    onChange: function onChange(event) {
      return setStateName(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, state && state.map(function (item, i) {
    return __jsx("option", {
      key: i,
      value: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, item);
  }))), stateName && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 18
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, " Select City "), __jsx("select", {
    id: "city",
    onChange: function onChange(event) {
      return setCityName(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, cities && cities.map(function (item, i) {
    return __jsx("option", {
      key: i,
      value: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }, item);
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/assets/bars.png",
    alt: "Add Marker",
    width: 50,
    height: 50,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/assets/profile_logo.png",
    width: 50,
    height: 50,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Searchbar);

/***/ })

})
//# sourceMappingURL=index.js.2d4263aaccc8eb33fd97.hot-update.js.map