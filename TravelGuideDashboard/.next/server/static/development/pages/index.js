module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Home/index.jsx":
/*!***********************************!*\
  !*** ./components/Home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./components/index.jsx");
var _jsxFileName = "C:\\Users\\shreyvijayvargiya\\Desktop\\CodingChallengeProjects\\TravelGuideDashboard\\components\\Home\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Home = () => {
  const {
    0: cityName,
    1: setCityName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: stateName,
    1: setStateName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  return __jsx("div", {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }), __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["MapBody"], {
    cityName: cityName,
    __self: undefined,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/MapBody/styles.jsx");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ "react-map-gl");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-geocode */ "react-geocode");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\shreyvijayvargiya\\Desktop\\CodingChallengeProjects\\TravelGuideDashboard\\components\\MapBody\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const MapBody = ({
  cityName
}) => {
  const mapStyle = {
    width: '80%',
    height: '70vh',
    margin: 'auto',
    borderRadius: '16px'
  };
  const {
    0: viewport,
    1: setViewPort
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const Token = "pk.eyJ1Ijoic2hyZXl2aWpheXZhcmdpeWEiLCJhIjoiY2pzamxxbG5zMHppMTQ0cW91OTd0aHBwZCJ9.zT0Jji19YEj8pR5P495KrA";
  const {
    0: coords,
    1: setCoords
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const zoom = 9;
        const height = '70vh';
        const width = '80%';
        setViewPort({
          latitude,
          longitude,
          zoom,
          height,
          width
        });
      });
    }
  }, []);
  react_geocode__WEBPACK_IMPORTED_MODULE_3___default.a.setApiKey("AIzaSyAIc6Zs2s4htl-CnOuUt3aRRDoUNbIZ0jU");

  if (cityName) {
    react_geocode__WEBPACK_IMPORTED_MODULE_3___default.a.fromAddress(cityName).then(response => {
      const {
        lat,
        lng
      } = response.results[0].geometry.location;
      console.log(lat, lng);
    }, error => {
      console.error(error);
    });
  } // console.log(cityName, 'cityName inside Mapbody')


  return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, viewport, {
    style: mapStyle,
    mapStyle: "mapbox://styles/mapbox/dark-v10",
    mapboxApiAccessToken: Token,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MapBody);

/***/ }),

/***/ "./components/MapBody/styles.jsx":
/*!***************************************!*\
  !*** ./components/MapBody/styles.jsx ***!
  \***************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
	width: 80%;
	margin: 20px auto;
	background-color: whitesmoke;
	height: 60vh;
	box-shadow: 4px 4px 8px grey;
	border-radius: 20px;
`;

/***/ }),

/***/ "./components/Searchbar/index.jsx":
/*!****************************************!*\
  !*** ./components/Searchbar/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Searchbar/styles.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\shreyvijayvargiya\\Desktop\\CodingChallengeProjects\\TravelGuideDashboard\\components\\Searchbar\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Searchbar = ({
  cityName,
  stateName,
  setCityName,
  setStateName
}) => {
  const {
    0: cities,
    1: setCities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const statesUrl = 'https://indian-cities-api-nocbegfhqg.now.sh/cities';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const states = [];
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(statesUrl).then(res => {
      res.data.map(item => {
        if (states.indexOf(item.State) < 0) {
          states.push(item.State);
        }
      });
      setState(states);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const cityUrl = `https://indian-cities-api-nocbegfhqg.now.sh/cities?State=${stateName}`;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(cityUrl).then(res => {
      res.data.map(item => {
        setCities(oldArray => [...oldArray, item.City]);
      });
    });
  }, [stateName]);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, " Select State "), __jsx("select", {
    id: "state",
    onChange: event => setStateName(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, state && state.map((item, i) => __jsx("option", {
    key: i,
    value: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, item)))), stateName && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 18
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, " Select City "), __jsx("select", {
    id: "city",
    onChange: event => setCityName(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("option", {
    value: "Kota",
    key: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 6
    }
  }, "Kota"), __jsx("option", {
    value: "Jaipur",
    key: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, "Jaipur"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/assets/bars.png",
    alt: "Add Marker",
    width: 50,
    height: 50,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/assets/profile_logo.png",
    width: 50,
    height: 50,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Searchbar);

/***/ }),

/***/ "./components/Searchbar/styles.jsx":
/*!*****************************************!*\
  !*** ./components/Searchbar/styles.jsx ***!
  \*****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
	width: 80%;
	height: 20vh;
	text-align: center;
	margin: 10px auto;
	background-color: white;
	border-radius: 16px;
	box-shadow: 4px 4px 8px lightgray;
	display: flex;
	justify-content: space-around;
	& > * {
		margin: 20px auto;
	};
	select, option {
		background-color: #4C4B4B;
		z-index: 99;
		padding: 8px 0px;
		border-radius: 8px;
		outline: none;
	};

		::-webkit-scrollbar {
		  width: 10px;
		  height: 10%;
		}
		::-webkit-scrollbar-track {
		  background: #f1f1f1;
		}
		::-webkit-scrollbar-thumb {
			background: #888;
		}
		::-webkit-scrollbar-thumb:hover {
			background: indianred;
		}
	

`;

/***/ }),

/***/ "./components/index.jsx":
/*!******************************!*\
  !*** ./components/index.jsx ***!
  \******************************/
/*! exports provided: MapBody, Searchbar, Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapBody */ "./components/MapBody/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapBody", function() { return _MapBody__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Searchbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Searchbar */ "./components/Searchbar/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Searchbar", function() { return _Searchbar__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./components/Home/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _Home__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/index */ "./components/index.jsx");
var _jsxFileName = "C:\\Users\\shreyvijayvargiya\\Desktop\\CodingChallengeProjects\\TravelGuideDashboard\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const App = () => {
  return __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__["Home"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shreyvijayvargiya\Desktop\CodingChallengeProjects\TravelGuideDashboard\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-geocode":
/*!********************************!*\
  !*** external "react-geocode" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-geocode");

/***/ }),

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map