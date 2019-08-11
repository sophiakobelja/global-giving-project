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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/GlobalGivingMap.js":
/*!**********************************!*\
  !*** ./pages/GlobalGivingMap.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-simple-maps */ "react-simple-maps");
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ListView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListView */ "./pages/ListView.js");
/* harmony import */ var _MapView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapView */ "./pages/MapView.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
var _jsxFileName = "/app/pages/GlobalGivingMap.js";








class GlobalGivingMap extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCountryClick = this.handleCountryClick.bind(this);
    this.dispatchCountry = this.dispatchCountry.bind(this);
    this.handleClickProject = this.handleClickProject.bind(this);
    this.handleClickLoadMore = this.handleClickLoadMore.bind(this);
  } //When component mounts, get initial 50 countries
  //and initialize static list of countries from /static/countries.json


  componentDidMount() {
    this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["fetchProjects"])()); //dispatching initialize countries

    this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["initializeCountries"])());
  }

  handleZoomIn() {
    this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["zoomScale"])(1.5));
  }

  handleZoomOut() {
    this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["zoomScale"])(.75));
  }

  handleClickProject(project) {
    this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["setCurrentProject"])(project));
    this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["zoom"])(10));
    this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["center"])([project.longitude, project.latitude]));
  }

  handleCountryClick(country) {
    this.dispatchCountry(country.id);
  }

  dispatchCountry(threeLetterCountryCode) {
    this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["fetchProjectsByCountry"])(threeLetterCountryCode));
  }

  handleReset() {
    this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["zoom"])(.7));
    this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["center"])([0, 20]));
    this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["loadAllProjects"])());
  }

  handleClickLoadMore() {
    const {
      data,
      map
    } = this.props;

    if (data.currentCountry !== undefined) {
      this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["fetchProjectsByCountry"])(data.currentCountry.alpha3));
    } else {
      this.props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["fetchProjects"])());
    }
  }

  render() {
    const {
      data,
      map
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleZoomIn,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Zoom in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleZoomOut,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Zoom out"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleReset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Reset"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapView__WEBPACK_IMPORTED_MODULE_5__["default"], {
      width: this.props.width,
      data: data,
      map: map,
      handleCountryClick: this.handleCountryClick,
      handleClickProject: this.handleClickProject,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListView__WEBPACK_IMPORTED_MODULE_4__["default"], {
      width: this.props.width * .15,
      data: data,
      handleClickLoadMore: this.handleClickLoadMore,
      handleClickProject: this.handleClickProject,
      dispatchCountry: this.dispatchCountry,
      viewAllProjects: this.handleReset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }));
  }

} //ensures dispatch function is initialized upon instantiation 


GlobalGivingMap.propTypes = {
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired //Redux will dispatch current app state
  //so this will simply map the dispatched state
  //to the component's props 

};

function mapDispatchToProps(state) {
  const {
    data,
    map
  } = state;
  return state;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapDispatchToProps)(GlobalGivingMap));

/***/ }),

/***/ "./pages/ListView.js":
/*!***************************!*\
  !*** ./pages/ListView.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Projects */ "./pages/Projects.js");
var _jsxFileName = "/app/pages/ListView.js";











class ListView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data; //ListView utilizes the permanent draw component and List component from Material UI 

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "permanent",
      anchor: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, " Projects "), // If the user is looking at a country or a project, display button that
    // takes user back to view all projects
    (this.props.data.currentCountry || this.props.data.currentProject) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variant: "contained",
      onClick: this.props.viewAllProjects,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "View all Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
      width: this.props.width,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, data.currentCountry !== undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, data.currentCountry.country), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_9__["default"], {
      data: data,
      handleClickProject: this.props.handleClickProject,
      dispatchCountry: this.props.dispatchCountry,
      handleClickLoadMore: this.props.handleClickLoadMore,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ListView);

/***/ }),

/***/ "./pages/MapView.js":
/*!**************************!*\
  !*** ./pages/MapView.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-maps */ "react-simple-maps");
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-motion */ "react-motion");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/app/pages/MapView.js";


 //This utilizes the svg map view built into react-simple-maps library 

class MapView extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    let map = this.props.map;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: this.props.width
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_3__["Motion"], {
      defaultStyle: {
        zoom: 5,
        x: 0,
        y: 20
      },
      style: {
        zoom: Object(react_motion__WEBPACK_IMPORTED_MODULE_3__["spring"])(map.zoom, {
          stiffness: 210,
          damping: 20
        }),
        x: Object(react_motion__WEBPACK_IMPORTED_MODULE_3__["spring"])(map.center[0], {
          stiffness: 210,
          damping: 20
        }),
        y: Object(react_motion__WEBPACK_IMPORTED_MODULE_3__["spring"])(map.center[1], {
          stiffness: 210,
          damping: 20
        })
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, ({
      zoom,
      x,
      y
    }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__["ComposableMap"], {
      projectionConfig: {
        scale: 205
      },
      style: {
        width: this.props.width * .8,
        height: "auto"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__["ZoomableGroup"], {
      center: [x, y],
      zoom: zoom,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__["Geographies"], {
      geography: "/static/world-50m.json",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, (geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__["Geography"], {
      key: i,
      geography: geography,
      projection: projection,
      onClick: this.props.handleCountryClick,
      style: {
        default: {
          fill: "#ECEFF1",
          stroke: "#607D8B",
          strokeWidth: 0.75,
          outline: "none"
        },
        hover: {
          fill: "#607D8B",
          stroke: "#607D8B",
          strokeWidth: 0.75,
          outline: "none"
        },
        pressed: {
          fill: "#ECEFF1",
          stroke: "#607D8B",
          strokeWidth: 0.75,
          outline: "none"
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__["Markers"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, //now simply map all the projects to an svg marker on the map, passing the project's coordinates
    data && _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(data.projects).map((project, i) => {
      let p = {
        'key': project.id,
        'name': project.title,
        'coordinates': [project.longitude, project.latitude]
      };
      let style = {
        default: {
          stroke: "#455A64"
        },
        hover: {
          stroke: "#FF5722"
        },
        pressed: {
          stroke: "#FF5722"
        }
      };

      if (data.currentProject !== undefined && data.currentProject.id == project.id) {
        style = {
          default: {
            stroke: "#FF5722"
          },
          hover: {
            stroke: "#FF5722"
          },
          pressed: {
            stroke: "#FF5722"
          }
        };
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
        key: i,
        marker: p,
        style: style,
        onClick: () => {
          this.props.handleClickProject(project);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        transform: "translate(-12, -24)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "none",
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeMiterlimit: "10",
        strokeLinejoin: "miter",
        d: "M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
        fill: "none",
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeMiterlimit: "10",
        strokeLinejoin: "miter",
        cx: "12",
        cy: "9",
        r: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      })));
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MapView);

/***/ }),

/***/ "./pages/Project.js":
/*!**************************!*\
  !*** ./pages/Project.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/app/pages/Project.js";




class Project extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let project = this.props.project;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: project.imageLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_1___default.a, {
      primary: 'Country',
      secondary: project.country,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_1___default.a, {
      primary: 'Goal',
      secondary: '$' + project.goal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_1___default.a, {
      primary: 'Funding',
      secondary: '$' + project.funding,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./pages/Projects.js":
/*!***************************!*\
  !*** ./pages/Projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Project */ "./pages/Project.js");
var _jsxFileName = "/app/pages/Projects.js";








class Projects extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, data.currentProject !== undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, " Projects "), data.currentProjects.length > 0 && data.currentProjects.map((el, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onClick: () => this.props.handleClickProject(el),
      button: true,
      key: el.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Project__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: this.props.data,
      project: el,
      dispatchCountry: this.props.dispatchCountry,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }))), data.currentProject && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variant: "contained",
      onClick: () => {
        this.props.dispatchCountry(data.currentCountry.alpha3);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "View all Projects in ", this.props.data.currentProject.country), data.currentProjects.length <= 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
      primary: "No projects",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })), data.currentProject === undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variant: "contained",
      onClick: this.props.handleClickLoadMore,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Load More"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Root; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/configureStore */ "./redux/configureStore.js");
/* harmony import */ var _GlobalGivingMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalGivingMap */ "./pages/GlobalGivingMap.js");
/* harmony import */ var react_container_dimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-container-dimensions */ "react-container-dimensions");
/* harmony import */ var react_container_dimensions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_container_dimensions__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/app/pages/index.js";





const store = Object(_redux_configureStore__WEBPACK_IMPORTED_MODULE_2__["default"])();
class Root extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return (//configure Redux store
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_container_dimensions__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GlobalGivingMap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })))
    );
  }

}

/***/ }),

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: INITIALIZE_COUNTRIES, ADD_PROJECTS, LOAD_ALL_PROJECTS, SET_CURRENT_PROJECT, SET_CURRENT_PROJECTS, SET_CURRENT_COUNTRY, ZOOM, ZOOM_SCALE, CENTER, initializeCountries, fetchProjects, fetchProjectsByCountry, projectsFetched, setCountry, setCurrentProject, loadAllProjects, zoom, zoomScale, center, countriesInitialized */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIALIZE_COUNTRIES", function() { return INITIALIZE_COUNTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PROJECTS", function() { return ADD_PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_PROJECTS", function() { return LOAD_ALL_PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_PROJECT", function() { return SET_CURRENT_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_PROJECTS", function() { return SET_CURRENT_PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_COUNTRY", function() { return SET_CURRENT_COUNTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZOOM", function() { return ZOOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZOOM_SCALE", function() { return ZOOM_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENTER", function() { return CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeCountries", function() { return initializeCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProjects", function() { return fetchProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProjectsByCountry", function() { return fetchProjectsByCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsFetched", function() { return projectsFetched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCountry", function() { return setCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentProject", function() { return setCurrentProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllProjects", function() { return loadAllProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoom", function() { return zoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomScale", function() { return zoomScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "center", function() { return center; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countriesInitialized", function() { return countriesInitialized; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/API */ "./utils/API.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




const INITIALIZE_COUNTRIES = 'INITIALIZE_COUNTRIES';
const ADD_PROJECTS = 'ADD_PROJECTS';
const LOAD_ALL_PROJECTS = 'LOAD_ALL_PROJECTS';
const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT';
const SET_CURRENT_PROJECTS = 'SET_CURRENT_PROJECTS';
const SET_CURRENT_COUNTRY = 'SET_CURRENT_COUNTRY';
const ZOOM = 'ZOOM';
const ZOOM_SCALE = 'ZOOM_SCALE';
const CENTER = 'CENTER';
const initializeCountries = () => {
  let countries = [];
  return dispatch => {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/static/countries.json").then(res => {
      countries = res.data.ref_country_codes.map(country => {
        let countryTemp = country;
        countryTemp['latlng'] = [country.longitude, country.latitude];
        return countryTemp;
      });
      console.log(countries);
      dispatch(countriesInitialized(countries));
    });
  };
};

function transformResponse(data) {
  let d = data.projects;
  d["project"] = d.project.filter(el => {
    return el.latitude !== undefined && el.longitude !== undefined;
  });
  return d;
}

let fetchProjects = () => {
  console.log('fetching projects');
  return (dispatch, getState) => {
    const state = getState();
    let params = {
      api_key: _utils_API__WEBPACK_IMPORTED_MODULE_1__["API_KEY"]
    };

    if (state.data.nextProjectIds['default'] > 0) {
      params = {
        api_key: _utils_API__WEBPACK_IMPORTED_MODULE_1__["API_KEY"],
        nextProjectId: state.data.nextProjectIds['default']
      };
    }

    return _utils_API__WEBPACK_IMPORTED_MODULE_1__["default"].get("/public/projectservice/all/projects/active", {
      params: params,
      transformResponse: [transformResponse]
    }).then(response => {
      dispatch(projectsFetched(response.data));
    }, err => {
      console.log(err);
    }).then(() => {
      const state = getState();

      if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(state.data.projects).length <= 50 && state.data.nextProjectIds['default'] > 0) {
        dispatch(fetchProjects());
      }
    });
  };
};
const fetchProjectsByCountry = threeLetterCountryCode => {
  console.log('fetching projects by country');
  return (dispatch, getState) => {
    const state = getState();
    console.log(threeLetterCountryCode);
    let countryObj = state.data.countries.find(el => {
      return el.alpha3 === threeLetterCountryCode;
    });
    console.log(countryObj);
    dispatch(setCountry(countryObj));
    const countryCode = countryObj.alpha2;
    let params = {
      api_key: _utils_API__WEBPACK_IMPORTED_MODULE_1__["API_KEY"] //query state map storing next project id by country name
      //and add next project id to request if it exists

    };

    if (state.data.nextProjectIds[countryObj.country] > 0) {
      params = {
        api_key: _utils_API__WEBPACK_IMPORTED_MODULE_1__["API_KEY"],
        nextProjectId: state.data.nextProjectIds[countryObj.country]
      };
    }

    return _utils_API__WEBPACK_IMPORTED_MODULE_1__["default"].get('/public/projectservice/countries/' + countryCode + '/projects/active', {
      params: params,
      transformResponse: [transformResponse]
    }).then(response => {
      dispatch(projectsFetched(response.data));
    }, err => {
      console.log(err);
    });
  };
};
const projectsFetched = projects => {
  return {
    type: ADD_PROJECTS,
    projects: projects.project,
    nextProjectId: projects.nextProjectId
  };
};
const setCountry = country => {
  return {
    type: SET_CURRENT_COUNTRY,
    country: country
  };
};
const setCurrentProject = project => {
  return {
    type: SET_CURRENT_PROJECT,
    project: project
  };
};
let loadAllProjects = () => {
  return {
    type: LOAD_ALL_PROJECTS
  };
};
const zoom = zoom => {
  return {
    type: ZOOM,
    zoom: zoom
  };
};
const zoomScale = scale => {
  return {
    type: ZOOM_SCALE,
    scale: scale
  };
};
const center = center => {
  return {
    type: CENTER,
    center
  };
};
const countriesInitialized = countries => {
  return {
    type: INITIALIZE_COUNTRIES,
    countries
  };
};

/***/ }),

/***/ "./redux/configureStore.js":
/*!*********************************!*\
  !*** ./redux/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./redux/reducers.js");




const loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])();
function configureStore(preloadedState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, loggerMiddleware));
}

/***/ }),

/***/ "./redux/reducers.js":
/*!***************************!*\
  !*** ./redux/reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./redux/actions.js");






const initialState = {
  projects: {},
  //all currently loaded projects indexed by project id 
  currentProjects: [],
  //all currently viewed projects in list view
  currentProject: undefined,
  //currently viewed project object 
  countries: [],
  //all preloaded country information
  currentCountry: undefined,
  //currently viewed country
  nextProjectIds: {} //save next project id. indexed by country except for default 
  //case, where the index will be stored as 'default'

};

function data(state = initialState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_5__["INITIALIZE_COUNTRIES"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        countries: action.countries
      });

    case _actions__WEBPACK_IMPORTED_MODULE_5__["ADD_PROJECTS"]:
      //add projects
      var addProjects = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state.projects);

      action.projects.forEach(el => {
        addProjects[el.id] = el;
      }); // Set next project ids 

      var nextProjectId = action.nextProjectId ? action.nextProjectId : -1;

      var ids = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state.nextProjectIds);

      if (state.currentCountry !== undefined) {
        ids[state.currentCountry.country] = nextProjectId;
      } else {
        ids['default'] = nextProjectId;
      }

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        projects: addProjects,
        // If current country is currently defined, ensure 
        // current projects is filtered by country code 
        currentProjects: state.currentCountry !== undefined ? _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(addProjects).filter(el => {
          return el.iso3166CountryCode === state.currentCountry.alpha2;
        }) : _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(addProjects),
        nextProjectIds: ids //Set current country:
        // - Filter all previously loaded projects by country code and set to current projects
        // - Initialize nextProjectIds[country] if necessary 

      });

    case _actions__WEBPACK_IMPORTED_MODULE_5__["SET_CURRENT_COUNTRY"]:
      var ids = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state.nextProjectIds);

      if (ids[action.country.country] === undefined) {
        ids[action.country.country] = -1;
      }

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        currentProjects: _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(state.projects).filter(el => {
          return el.iso3166CountryCode === action.country.alpha2;
        }),
        currentProject: undefined,
        nextProjectIds: ids,
        currentCountry: action.country //Set current project

      });

    case _actions__WEBPACK_IMPORTED_MODULE_5__["SET_CURRENT_PROJECT"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        currentProjects: [action.project],
        currentProject: action.project,
        currentCountry: state.countries.find(el => {
          return el.alpha2 === action.project.iso3166CountryCode;
        }) //Set all previously loaded projects into currentProjects to be updated in list view

      });

    case _actions__WEBPACK_IMPORTED_MODULE_5__["LOAD_ALL_PROJECTS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        currentProjects: _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(state.projects),
        currentProject: undefined,
        currentCountry: undefined
      });

    default:
      return state;
  }
}

function map(state = {
  zoom: .7,
  center: [0, 20]
}, action) {
  switch (action.type) {
    //zoom into map on set current country (this means user clicked a country)
    case _actions__WEBPACK_IMPORTED_MODULE_5__["SET_CURRENT_COUNTRY"]:
      console.log(action);
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        zoom: 5,
        center: [action.country.latlng[0], action.country.latlng[1]]
      });

    case _actions__WEBPACK_IMPORTED_MODULE_5__["CENTER"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        center: action.center
      });

    case _actions__WEBPACK_IMPORTED_MODULE_5__["ZOOM_SCALE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        zoom: action.scale * state.zoom
      });

    case _actions__WEBPACK_IMPORTED_MODULE_5__["ZOOM"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        zoom: action.zoom
      });

    default:
      return state;
  }
}

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  data,
  map
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./utils/API.js":
/*!**********************!*\
  !*** ./utils/API.js ***!
  \**********************/
/*! exports provided: default, API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://api.globalgiving.org/api",
  responseType: "json"
}));
const API_KEY = '2556f972-549a-439c-928b-240a82a4dd1c';

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-container-dimensions":
/*!*********************************************!*\
  !*** external "react-container-dimensions" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-container-dimensions");

/***/ }),

/***/ "react-motion":
/*!*******************************!*\
  !*** external "react-motion" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-simple-maps":
/*!************************************!*\
  !*** external "react-simple-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-simple-maps");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map