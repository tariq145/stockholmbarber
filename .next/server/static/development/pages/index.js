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
var _jsxFileName = "C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\components\\Layout.js";



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
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVUyQiIsImZpbGUiOiJDOlxcVXNlcnNcXFRhcmlxXFxEZXNrdG9wXFxkZXZcXHN0b2NraG9sbV9iYXJiZXJfZnJvbnRcXGNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\components\\Layout.js */",
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
var _jsxFileName = "C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\components\\Nav.js";




var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "nav",
    className: "jsx-2944791484",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2944791484" + " " + "nav-item-container",
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
    className: "jsx-2944791484",
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
    className: "jsx-2944791484",
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
    className: "jsx-2944791484",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Tj\xE4nster")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://stockholmbarber.simplybook.it/v2/#book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2944791484",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Bokning"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2944791484",
    css: "#nav.jsx-2944791484{position:absolute;z-index:3;width:100%;height:60px;}.nav-item-container.jsx-2944791484{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:20px;}a.jsx-2944791484{-webkit-text-decoration:none;text-decoration:none;color:#fff;font-size:20px;margin:0 20px;}@media screen and (max-width:400px){a.jsx-2944791484{font-size:18px;margin:0 10px;}}@media screen and (max-width:320px){a.jsx-2944791484{font-size:15px;margin:0 10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxcY29tcG9uZW50c1xcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHMkIsQUFPQSxBQU9HLEFBUUosQUFPQSxlQU5ELEFBT0EsR0E3Qk4sQUFPRCxTQUNrQixDQVBoQixDQXNCWCxBQU9BLFVBNUJZLFdBWUQsQ0FYYixVQVlpQixlQUNELGNBQ2hCLDhCQVJXLFNBQ1giLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxjb21wb25lbnRzXFxOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiAoXHJcbiAgPGRpdiBpZD1cIm5hdlwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1jb250YWluZXJcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5IZW08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9iYXJiZXJzXCI+XHJcbiAgICAgICAgPGE+QmFyYmVyYXJlPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5cclxuICAgICAgICA8YT5UasOkbnN0ZXI8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vc3RvY2tob2xtYmFyYmVyLnNpbXBseWJvb2suaXQvdjIvI2Jvb2tcIj5cclxuICAgICAgICA8YT5Cb2tuaW5nPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgI25hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2LWl0ZW0tY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\components\\Nav.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\index.js";





var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "index",
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    id: "index-header",
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/logo-white.png",
    alt: "",
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-about",
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/knife.png",
    alt: "",
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2864068749" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Stockholm Barber Co."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2864068749" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "F\xF6r oss \xE4r en frisyr n\xE5got som k\xE4nnetecknar dig, en signatur. V\xE5ra barberare \xE4r erfarna och ser till att du l\xE4mnar oss med ditt k\xE4nnetecken och en l\xE4ngtan tillbaka."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Kom f\xF6rbi och f\xE5 din signatur i hj\xE4rtat av s\xF6der."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://stockholmbarber.simplybook.it/v2/#book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Boka Nu")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-gallery",
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2864068749" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Gallery"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2864068749" + " " + "tiles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-contact",
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2864068749" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "kontakta oss"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2864068749" + " " + "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "(08)-428 611 32"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2864068749" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Tveka inte att h\xF6ra av er till oss ang\xE5ende fr\xE5gor."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Stockholm Barber company \xE4r en plats f\xF6r dig att koppla av och ta de lungt, ett andra hem."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Kom f\xF6rbi:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      fontSize: "25px"
    },
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Hornsgatan 87, 117 26 Stockholm"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\xD6ppet tider:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Mon-L\xF6r : 11-20")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "S\xF6n : St\xE4ngt")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "L\xF6nings Helg (Fre&L\xF6rdag): 11 - Till sista kund droppar in.", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "(Event)")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2864068749" + " " + "social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.instagram.com/stockholmbarber/",
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/ig.png",
    alt: "",
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.facebook.com/stockholmbarber/",
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/fb.png",
    alt: "",
    className: "jsx-2864068749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2864068749",
    css: "#index-header.jsx-2864068749{position:relative;width:100%;height:100vh;background-image:url(/static/imgs/10.jpeg);background-position:top right;background-repeat:no-repeat;background-size:cover;}#index-header.jsx-2864068749 img.jsx-2864068749{position:absolute;width:300px;left:50%;top:calc(50% + 20px);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@media screen and (max-width:850px){#index-header.jsx-2864068749 img.jsx-2864068749{width:200px;}@media screen and (max-width:450px){#index-header.jsx-2864068749 img.jsx-2864068749{width:150px;}}}section.jsx-2864068749{padding:100px 0;}button.jsx-2864068749{border:none;padding:20px 40px;font-size:20px;background:#000;color:#fff;cursor:pointer;margin-top:50px;}.container.jsx-2864068749{width:80%;margin:0 auto;position:relative;}.banner.jsx-2864068749{font-size:65px;font-family:Anton,sans-serif;color:#fff;position:absolute;z-index:0;left:50%;top:calc(50% + 30px);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.logo.jsx-2864068749{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:130px;}.logo.jsx-2864068749 img.jsx-2864068749{width:800px;height:auto;}.text.jsx-2864068749{max-width:550px;margin:0 auto;margin-bottom:60px;}.img.jsx-2864068749{width:200px;height:200px;background:red;}.phone.jsx-2864068749{font-size:45px;}#index-about.jsx-2864068749 a.jsx-2864068749{padding:20px 40px;-webkit-text-decoration:none;text-decoration:none;color:white;background:black;}#index-about.jsx-2864068749 img.jsx-2864068749{position:absolute;left:-100px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);width:600px;}@media screen and (max-width:1250px){#index-about.jsx-2864068749 img.jsx-2864068749{display:none;}}#index-gallery.jsx-2864068749{position:relative;background-image:url(/static/imgs/1.jpeg);background-position:bottom left;background-repeat:no-repeat;background-size:cover;}#index-gallery.jsx-2864068749:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}#index-gallery.jsx-2864068749 h1.jsx-2864068749{color:#fff;position:relative;z-index:3;}.tiles.jsx-2864068749{height:1200px;display:grid;grid-template-columns:auto auto;grid-template-row:auto auto auto auto;grid-gap:15px;padding:10px;position:relative;z-index:3;}.tiles.jsx-2864068749 div.jsx-2864068749{background-size:cover;background-repeat:no-repeat;}.tiles.jsx-2864068749 div.jsx-2864068749:nth-child(1){background-image:url(\"/static/imgs/5.jpeg\");grid-column-start:1;grid-column-end:1;grid-row-start:1;grid-row-end:3;}.tiles.jsx-2864068749 div.jsx-2864068749:nth-child(2){background-image:url(\"/static/imgs/9.jpeg\");grid-column-start:2;grid-column-end:2;grid-row-start:1;grid-row-end:2;}.tiles.jsx-2864068749 div.jsx-2864068749:nth-child(3){background-image:url(\"/static/imgs/2.jpeg\");grid-column-start:2;grid-column-end:2;grid-row-start:2;grid-row-end:2;}.tiles.jsx-2864068749 div.jsx-2864068749:nth-child(4){background-image:url(\"/static/imgs/4.jpeg\");background-position:bottom;grid-column-start:1;grid-column-end:3;grid-row-start:3;grid-row-end:3;}@media screen and (max-width:768px){#index-gallery.jsx-2864068749 .container.jsx-2864068749{width:98%;}.tiles.jsx-2864068749 div.jsx-2864068749:nth-child(1){grid-column-start:1;grid-column-end:4;grid-row-start:1;grid-row-end:1;}.tiles.jsx-2864068749 div.jsx-2864068749:nth-child(2){grid-column-start:1;grid-column-end:4;grid-row-start:2;grid-row-end:2;}.tiles.jsx-2864068749 div.jsx-2864068749:nth-child(3){background-image:url(\"/static/imgs/2.jpeg\");grid-column-start:1;grid-column-end:4;grid-row-start:3;grid-row-end:3;}.tiles.jsx-2864068749 div.jsx-2864068749:nth-child(4){grid-column-start:1;grid-column-end:4;grid-row-start:4;grid-row-end:4;}}#index-contact.jsx-2864068749{position:relative;}.social.jsx-2864068749{margin-top:40px;}.social.jsx-2864068749 img.jsx-2864068749{width:40px;margin:0 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ha0IsQUFNNkIsQUFVQSxBQVNKLEFBS0UsQUFNQSxBQUlKLEFBVUYsQUFNSyxBQVdHLEFBT04sQUFLSSxBQU1KLEFBTUcsQUFJRyxBQU9BLEFBUUgsQUFLRyxBQVFQLEFBV0EsQUFNRyxBQVdRLEFBS3NCLEFBUUEsQUFRQSxBQVFBLEFBVWhDLEFBR1UsQUFPQSxBQU93QixBQVF4QixBQVFKLEFBSUYsQUFJTCxVQXBMRyxBQTRJZCxDQW5Fa0IsQUFXQSxBQWlHSixDQTlNZCxBQUtFLEFBVWdCLEFBa0NOLEFBV0MsQ0F5QmIsQ0E4QmEsQ0FwRmlCLEFBbUNoQyxDQXZEQSxBQTJDZ0IsQUFvSmhCLEVBN05hLEFBVUMsQUFtREgsQUE0QlksQUFPVCxBQWE4QixBQTRHNUMsRUE5QnNCLEFBT0EsQUFlQSxFQWhFUSxFQXBHVixBQXdCcEIsQ0FXaUIsQUFrSmpCLEVBcEs2QixBQXlFSyxFQXRJbkIsQUFxSFAsQUFXSSxDQXRIRCxBQXdCTSxBQXVDSSxBQXVCSyxLQXNCZixHQXFFVSxBQU9BLEFBZUEsQ0F0TUUsQUFzSHZCLENBakRBLEVBL0U2QyxBQTRDN0MsRUFLYSxBQXFFSCxBQThCWSxBQVFBLEFBUUEsQUFRTyxBQTJCTCxDQXJLTixJQXVDbEIsQ0F1RUEsRUF6QlMsR0FyRVcsQUF5SUQsQUFPQSxBQWVBLElBekZhLEFBY1EsQ0EzSE4sQUFpR0EsQ0F6RXJCLEdBa0hPLEFBUUEsQUFRQSxBQW1DRSxJQWhIUixFQW9HWixBQU9BLEFBZUEsQ0FyQ29CLENBeklMLENBZUwsT0FzQ08sRUE2REEsQUFRQSxBQVFBLEFBbUNFLENBckpWLEVBbkRxQixDQXdIcEIsQ0FwRk0sSUF5SUUsQ0F6SEcsQUF3RE8sSUFhOUIsQ0FoQ0EsQUE2Q2dCLEVBZ0JDLEFBUUEsQUFRQSxBQW1DRSxJQXBLbkIsTUF5SW1CLEVBdkNKLEVBbEZtQixDQTBDcEIsQUF3RGQsQUFRQSxBQVFBLEFBbUNFLENBek00QixLQTJEbEIsQUFpRFksSUEyQkosRUF4Q3BCLEFBK0VpQixJQWxIakIsV0FtSEEsQ0FsRUEsQUEyQlksQ0F2SVksU0F3SXhCLGFBdklBLEFBUUEscURBMkNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IChcclxuICA8TGF5b3V0PlxyXG4gICAgPGRpdiBpZD1cImluZGV4XCI+XHJcbiAgICAgIDxoZWFkZXIgaWQ9XCJpbmRleC1oZWFkZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1ncy9sb2dvLXdoaXRlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImluZGV4LWFib3V0XCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZ3Mva25pZmUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPlN0b2NraG9sbSBCYXJiZXIgQ28uPC9oMT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgRsO2ciBvc3Mgw6RyIGVuIGZyaXN5ciBuw6Vnb3Qgc29tIGvDpG5uZXRlY2tuYXIgZGlnLCBlbiBzaWduYXR1ci4gVsOlcmFcclxuICAgICAgICAgICAgICBiYXJiZXJhcmUgw6RyIGVyZmFybmEgb2NoIHNlciB0aWxsIGF0dCBkdSBsw6RtbmFyIG9zcyBtZWQgZGl0dFxyXG4gICAgICAgICAgICAgIGvDpG5uZXRlY2tlbiBvY2ggZW4gbMOkbmd0YW4gdGlsbGJha2EuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5Lb20gZsO2cmJpIG9jaCBmw6UgZGluIHNpZ25hdHVyIGkgaGrDpHJ0YXQgYXYgc8O2ZGVyLjwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9zdG9ja2hvbG1iYXJiZXIuc2ltcGx5Ym9vay5pdC92Mi8jYm9va1wiPlxyXG4gICAgICAgICAgICA8YT5Cb2thIE51PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIHsvKiA8c2VjdGlvbiBpZD1cImluZGV4LWJhcmJlcnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPkJhcmJlcmFyZTwvaDE+ICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj4gKi99XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaW5kZXgtZ2FsbGVyeVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+R2FsbGVyeTwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaW5kZXgtY29udGFjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+a29udGFrdGEgb3NzPC9oMT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lXCI+KDA4KS00MjggNjExIDMyPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPHA+VHZla2EgaW50ZSBhdHQgaMO2cmEgYXYgZXIgdGlsbCBvc3MgYW5nw6VlbmRlIGZyw6Vnb3IuPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBTdG9ja2hvbG0gQmFyYmVyIGNvbXBhbnkgw6RyIGVuIHBsYXRzIGbDtnIgZGlnIGF0dCBrb3BwbGEgYXYgb2NoIHRhXHJcbiAgICAgICAgICAgICAgZGUgbHVuZ3QsIGV0dCBhbmRyYSBoZW0uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgIEtvbSBmw7ZyYmk6XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgSG9ybnNnYXRhbiA4NywgMTE3IDI2IFN0b2NraG9sbVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+w5ZwcGV0IHRpZGVyOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxpPk1vbi1Mw7ZyIDogMTEtMjA8L2k+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGk+U8O2biA6IFN0w6RuZ3Q8L2k+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgTMO2bmluZ3MgSGVsZyAoRnJlJkzDtnJkYWcpOiAxMSAtIFRpbGwgc2lzdGEga3VuZCBkcm9wcGFyIGluLntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxiPihFdmVudCk8L2I+XHJcbiAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zdG9ja2hvbG1iYXJiZXIvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZ3MvaWcucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3N0b2NraG9sbWJhcmJlci9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1ncy9mYi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICNpbmRleCB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjaW5kZXgtaGVhZGVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvMTAuanBlZyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1oZWFkZXIgaW1nIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRvcDogY2FsYyg1MCUgKyAyMHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICAgICAgICNpbmRleC1oZWFkZXIgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICNpbmRleC1oZWFkZXIgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFubmVyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBbnRvbiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRvcDogY2FsYyg1MCUgKyAzMHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgdG9wOiAxMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBob25lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1hYm91dCBhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2luZGV4LWFib3V0IGltZyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAtMTAwcHg7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcclxuICAgICAgICAgICNpbmRleC1hYm91dCBpbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2luZGV4LWdhbGxlcnkge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1ncy8xLmpwZWcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1nYWxsZXJ5OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1nYWxsZXJ5IGgxIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aWxlcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEyMDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93OiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aWxlcyBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGlsZXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZ3MvNS5qcGVnXCIpO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aWxlcyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1ncy85LmpwZWdcIik7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcclxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbGVzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWdzLzIuanBlZ1wiKTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGlsZXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZ3MvNC5qcGVnXCIpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcclxuICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAjaW5kZXgtZ2FsbGVyeSAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aWxlcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcclxuICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGlsZXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xyXG4gICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpbGVzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZ3MvMi5qcGVnXCIpO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xyXG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcclxuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aWxlcyBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcclxuICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XHJcbiAgICAgICAgICAgIGdyaWQtcm93LWVuZDogNDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1jb250YWN0IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2NpYWwgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L0xheW91dD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\index.js */",
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map