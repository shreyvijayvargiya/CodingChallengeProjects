webpackHotUpdate("static\\development\\pages\\index.js",{

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

  var handleCitySelect = function handleCitySelect() {
    var cityUrl = "https://indian-cities-api-nocbegfhqg.now.sh/cities?State=".concat(stateName);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(cityUrl).then(function (res) {
      res.data.map(function (item) {
        setCities(function (oldArray) {
          return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(oldArray), [item.City]);
        });
      });
    });
  };

  var handleStateSelect = function handleStateSelect(event) {
    console.log(event);
    setStateName(event.target.value);
    console.log(stateName);
  };

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, " Select State "), __jsx("select", {
    id: "state",
    onClick: function onClick(event) {
      return handleStateSelect(event);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, state && state.map(function (item, i) {
    return __jsx("option", {
      key: i,
      value: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }, item);
  }))), stateName && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 18
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, " Select City "), __jsx("select", {
    id: "city",
    onChange: function onChange() {
      return handleCitySelect();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, cities && cities.map(function (item, i) {
    return __jsx("option", {
      key: i,
      value: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    }, item);
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
      columnNumber: 5
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/assets/profile_logo.png",
    width: 50,
    height: 50,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Searchbar);

/***/ })

})
//# sourceMappingURL=index.js.88f64cd727c4e573ba0a.hot-update.js.map