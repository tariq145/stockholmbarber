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
<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
>>>>>>> booking:.next/server/static/development/pages/services.js
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
var _jsxFileName = "/root/stockholmbarber/components/Layout.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }), this.props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2085888330",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3N0b2NraG9sbWJhcmJlci9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVMkIiLCJmaWxlIjoiL3Jvb3Qvc3RvY2tob2xtYmFyYmVyL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/root/stockholmbarber/components/Layout.js */",
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/root/stockholmbarber/components/Nav.js";




var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "nav",
    className: "jsx-3263710631",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3263710631" + " " + "nav-item-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3263710631",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Hem")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/barbers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3263710631",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Barberare")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3263710631",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Tj\xE4nster")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/booking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3263710631",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Bokning"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3263710631",
<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
    css: "#nav.jsx-3263710631{position:absolute;z-index:3;width:100%;height:60px;}.nav-item-container.jsx-3263710631{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:20px;}a.jsx-3263710631{-webkit-text-decoration:none;text-decoration:none;color:#fff;font-size:20;margin:0 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3N0b2NraG9sbWJhcmJlci9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmdCLEFBRzJCLEFBT0EsQUFPRyxrQkFiWCxBQU9ELFNBQ2tCLENBUGhCLFdBQ0MsV0FZRCxDQVhiLFVBWWUsYUFDQyxjQUNoQixnQ0FSVyxTQUNYIiwiZmlsZSI6Ii9yb290L3N0b2NraG9sbWJhcmJlci9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTmF2ID0gKCkgPT4gKFxuICA8ZGl2IGlkPVwibmF2XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1jb250YWluZXJcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhPkhlbTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYmFyYmVyc1wiPlxuICAgICAgICA8YT5CYXJiZXJhcmU8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCI+XG4gICAgICAgIDxhPlRqw6Ruc3RlcjwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIHsvKiA8TGluayBocmVmPVwiL2Jvb2tpbmdcIj5cbiAgICAgICAgPGE+Qm9rbmluZzwvYT5cbiAgICAgIDwvTGluaz4gKi99XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgI25hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIH1cblxuICAgICAgLm5hdi1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXX0= */\n/*@ sourceURL=/root/stockholmbarber/components/Nav.js */",
=======
    css: "#nav.jsx-3263710631{position:absolute;z-index:3;width:100%;height:60px;}.nav-item-container.jsx-3263710631{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:20px;}a.jsx-3263710631{-webkit-text-decoration:none;text-decoration:none;color:#fff;font-size:20;margin:0 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxcY29tcG9uZW50c1xcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHMkIsQUFPQSxBQU9HLGtCQWJYLEFBT0QsU0FDa0IsQ0FQaEIsV0FDQyxXQVlELENBWGIsVUFZZSxhQUNDLGNBQ2hCLGdDQVJXLFNBQ1giLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxjb21wb25lbnRzXFxOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiAoXHJcbiAgPGRpdiBpZD1cIm5hdlwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1jb250YWluZXJcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5IZW08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9iYXJiZXJzXCI+XHJcbiAgICAgICAgPGE+QmFyYmVyYXJlPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5cclxuICAgICAgICA8YT5UasOkbnN0ZXI8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9ib29raW5nXCI+XHJcbiAgICAgICAgPGE+Qm9rbmluZzwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICNuYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdi1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\components\\Nav.js */",
>>>>>>> booking:.next/server/static/development/pages/services.js
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
var _jsxFileName = "/root/stockholmbarber/pages/barbers.js";
=======
var _jsxFileName = "C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\services.js";
>>>>>>> booking:.next/server/static/development/pages/services.js




var services = function services() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "barbers",
    className: "jsx-2665673449",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2665673449",
=======
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "services",
    className: "jsx-1866300409",
>>>>>>> booking:.next/server/static/development/pages/services.js
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2665673449",
=======
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1866300409",
>>>>>>> booking:.next/server/static/development/pages/services.js
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
  }, "V\xE5ra barberare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2665673449" + " " + "container",
=======
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1866300409",
>>>>>>> booking:.next/server/static/development/pages/services.js
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2665673449" + " " + "barber-container",
=======
  }, "V\xE5ra Tj\xE4nster"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1866300409" + " " + "container",
>>>>>>> booking:.next/server/static/development/pages/services.js
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
    className: "jsx-2665673449" + " " + "barber",
=======
    className: "jsx-1866300409" + " " + "service-container",
>>>>>>> booking:.next/server/static/development/pages/services.js
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
    className: "jsx-2665673449" + " " + "img",
=======
    className: "jsx-1866300409" + " " + "service",
>>>>>>> booking:.next/server/static/development/pages/services.js
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2665673449" + " " + "name",
=======
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1866300409" + " " + "name",
>>>>>>> booking:.next/server/static/development/pages/services.js
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
  }, "Ghani A.C"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2665673449" + " " + "description",
=======
  }, "service #"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1866300409" + " " + "description",
>>>>>>> booking:.next/server/static/development/pages/services.js
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
  }, "Barberat i 28\xE5r. Kvalit\xE9 \xE4r min prioritet etc. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eaque?")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2665673449",
    css: "#barbers.jsx-2665673449{min-height:1000px;position:relative;background-image:url(/static/imgs/index-header.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-2665673449{padding:100px 0;}h1.jsx-2665673449{color:#fff;position:relative;z-index:3;}#barbers.jsx-2665673449:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}.container.jsx-2665673449{position:relative;z-index:3;color:#fff;width:80%;margin:0 auto;}.barber-container.jsx-2665673449{padding-top:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.barber.jsx-2665673449{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:450px;}.img.jsx-2665673449{background-image:url(/static/imgs/barber1.jpg);background-position:top;background-repeat:no-repeat;background-size:cover;width:150px;height:150px;border-radius:50%;margin:0 auto;margin-bottom:20px;}.name.jsx-2665673449{font-size:35px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3N0b2NraG9sbWJhcmJlci9wYWdlcy9iYXJiZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHNkIsQUFRRixBQUlMLEFBTUEsQUFXTyxBQVFELEFBTUQsQUFLK0IsQUFZaEMsV0EvQ0csQUFNQSxJQTBDQyxDQXBEckIsQ0E2QmUsQ0FyQ0ssQUE2QlIsVUFDQyxDQWpCRCxBQU1KLEtBMENSLENBekNXLENBbkIyQyxHQWF0RCxBQWlCWSxLQVZGLEdBMkJnQixFQWhCVixHQVZQLE9BQ3VCLElBVWhDLE1BVWtCLEVBTVksY0FMOUIsQ0FwQlksRUF0QmlCLEdBb0NFLEtBYi9CLEdBeUJ3QixnQkEvQ00sTUFnRGhCLFlBQ0MsVUFoRFMsR0FpREosa0JBQ0osQ0FqRGhCLGFBa0RxQixtQkFDckIsaUJBakJBIiwiZmlsZSI6Ii9yb290L3N0b2NraG9sbWJhcmJlci9wYWdlcy9iYXJiZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgYmFyYmVycyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBpZD1cImJhcmJlcnNcIj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGgxPlbDpXJhIGJhcmJlcmFyZTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmJlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5HaGFuaSBBLkM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICBCYXJiZXJhdCBpIDI4w6VyLiBLdmFsaXTDqSDDpHIgbWluIHByaW9yaXRldCBldGMuIExvcmVtIGlwc3VtXG4gICAgICAgICAgICAgICAgICBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEZWJpdGlzLCBlYXF1ZT9cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNiYXJiZXJzIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvaW5kZXgtaGVhZGVyLmpwZyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgI2JhcmJlcnM6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhcmJlci1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFyYmVyIHtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1nIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWdzL2JhcmJlcjEuanBnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgYmFyYmVycztcbiJdfQ== */\n/*@ sourceURL=/root/stockholmbarber/pages/barbers.js */",
=======
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam exercitationem quia aperiam necessitatibus, eligendi repudiandae, neque earum aliquam est ducimus itaque obcaecati! Unde aspernatur repudiandae, modi ut ex possimus aliquid.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1866300409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1866300409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Tid"), " 50min")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1866300409" + " " + "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "350 kr")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1866300409" + " " + "service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1866300409" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "service #"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1866300409" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam exercitationem quia aperiam necessitatibus, eligendi repudiandae, neque earum aliquam est ducimus itaque obcaecati! Unde aspernatur repudiandae, modi ut ex possimus aliquid."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1866300409" + " " + "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "350 kr")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1866300409" + " " + "service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1866300409" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "service #"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1866300409" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam exercitationem quia aperiam necessitatibus, eligendi repudiandae, neque earum aliquam est ducimus itaque obcaecati! Unde aspernatur repudiandae, modi ut ex possimus aliquid."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1866300409" + " " + "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "350 kr")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1866300409",
    css: "#services.jsx-1866300409{min-height:1000px;position:relative;background-image:url(/static/imgs/6.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-1866300409{padding:100px 0;}h1.jsx-1866300409{color:#fff;position:relative;z-index:3;}#services.jsx-1866300409:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}.container.jsx-1866300409{position:relative;z-index:3;color:#fff;width:80%;margin:0 auto;}.service-container.jsx-1866300409{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.service.jsx-1866300409{padding:20px 40px;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:800px;background:#f7f7f7;color:#000;text-align:left;margin:0 auto;margin-bottom:15px;}.name.jsx-1866300409{font-size:25px;font-weight:bold;}.price.jsx-1866300409{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXHNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEa0IsQUFHNkIsQUFRRixBQUlMLEFBTUEsQUFXTyxBQVFMLEFBTUssQUFXSCxBQUtFLFdBOUNDLEFBTUEsSUFvQ0QsQ0E5Q25CLENBbURBLENBM0RvQixBQTZCUixBQWNNLFVBYkwsQ0FqQkQsQUFNSixHQW9DUixHQW5DVyxDQW5CZ0MsR0FhM0MsQUFpQlksS0FWRixLQVdNLEdBVlAsT0FDdUIsSUFVaEMsV0FJd0IsR0FuQ0ssU0FzQmpCLENBb0JNLFNBbkJsQixPQW9CcUIsQ0ExQ1Msa0JBMkNqQixVQTFDVyxDQTJDTixnQkFDRixHQVZlLEVBakMvQixTQTRDcUIsbUJBQ3JCLDZGQVhBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXHNlcnZpY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgaWQ9XCJzZXJ2aWNlc1wiPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGgxPlbDpXJhIFRqw6Ruc3RlcjwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5zZXJ2aWNlICM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSXBzYW1cclxuICAgICAgICAgICAgICAgICAgZXhlcmNpdGF0aW9uZW0gcXVpYSBhcGVyaWFtIG5lY2Vzc2l0YXRpYnVzLCBlbGlnZW5kaVxyXG4gICAgICAgICAgICAgICAgICByZXB1ZGlhbmRhZSwgbmVxdWUgZWFydW0gYWxpcXVhbSBlc3QgZHVjaW11cyBpdGFxdWUgb2JjYWVjYXRpIVxyXG4gICAgICAgICAgICAgICAgICBVbmRlIGFzcGVybmF0dXIgcmVwdWRpYW5kYWUsIG1vZGkgdXQgZXggcG9zc2ltdXMgYWxpcXVpZC5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaWQ8L3N0cm9uZz4gNTBtaW5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+MzUwIGtyPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5zZXJ2aWNlICM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSXBzYW1cclxuICAgICAgICAgICAgICAgICAgZXhlcmNpdGF0aW9uZW0gcXVpYSBhcGVyaWFtIG5lY2Vzc2l0YXRpYnVzLCBlbGlnZW5kaVxyXG4gICAgICAgICAgICAgICAgICByZXB1ZGlhbmRhZSwgbmVxdWUgZWFydW0gYWxpcXVhbSBlc3QgZHVjaW11cyBpdGFxdWUgb2JjYWVjYXRpIVxyXG4gICAgICAgICAgICAgICAgICBVbmRlIGFzcGVybmF0dXIgcmVwdWRpYW5kYWUsIG1vZGkgdXQgZXggcG9zc2ltdXMgYWxpcXVpZC5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPjM1MCBrcjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+c2VydmljZSAjPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElwc2FtXHJcbiAgICAgICAgICAgICAgICAgIGV4ZXJjaXRhdGlvbmVtIHF1aWEgYXBlcmlhbSBuZWNlc3NpdGF0aWJ1cywgZWxpZ2VuZGlcclxuICAgICAgICAgICAgICAgICAgcmVwdWRpYW5kYWUsIG5lcXVlIGVhcnVtIGFsaXF1YW0gZXN0IGR1Y2ltdXMgaXRhcXVlIG9iY2FlY2F0aSFcclxuICAgICAgICAgICAgICAgICAgVW5kZSBhc3Blcm5hdHVyIHJlcHVkaWFuZGFlLCBtb2RpIHV0IGV4IHBvc3NpbXVzIGFsaXF1aWQuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj4zNTAga3I8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgI3NlcnZpY2VzIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvNi5qcGcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNzZXJ2aWNlczpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZXJ2aWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlcnZpY2Uge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VydmljZXM7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\services.js */",
>>>>>>> booking:.next/server/static/development/pages/services.js
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (services);

/***/ }),

<<<<<<< HEAD:.next/server/static/development/pages/barbers.js
/***/ 4:
/*!********************************!*\
  !*** multi ./pages/barbers.js ***!
  \********************************/
=======
/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/services.js ***!
  \*********************************/
>>>>>>> booking:.next/server/static/development/pages/services.js
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/services.js */"./pages/services.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=services.js.map