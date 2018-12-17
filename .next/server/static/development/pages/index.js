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
    href: "/booking",
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
    css: "#nav.jsx-2944791484{position:absolute;z-index:3;width:100%;height:60px;}.nav-item-container.jsx-2944791484{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:20px;}a.jsx-2944791484{-webkit-text-decoration:none;text-decoration:none;color:#fff;font-size:20px;margin:0 20px;}@media screen and (max-width:400px){a.jsx-2944791484{font-size:18px;margin:0 10px;}}@media screen and (max-width:320px){a.jsx-2944791484{font-size:15px;margin:0 10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxcY29tcG9uZW50c1xcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHMkIsQUFPQSxBQU9HLEFBUUosQUFPQSxlQU5ELEFBT0EsR0E3Qk4sQUFPRCxTQUNrQixDQVBoQixDQXNCWCxBQU9BLFVBNUJZLFdBWUQsQ0FYYixVQVlpQixlQUNELGNBQ2hCLDhCQVJXLFNBQ1giLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxjb21wb25lbnRzXFxOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiAoXHJcbiAgPGRpdiBpZD1cIm5hdlwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1jb250YWluZXJcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5IZW08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9iYXJiZXJzXCI+XHJcbiAgICAgICAgPGE+QmFyYmVyYXJlPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5cclxuICAgICAgICA8YT5UasOkbnN0ZXI8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9ib29raW5nXCI+XHJcbiAgICAgICAgPGE+Qm9rbmluZzwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICNuYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdi1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\components\\Nav.js */",
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
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    id: "index-header",
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/logo-white.png",
    alt: "",
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-about",
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/knife.png",
    alt: "",
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Stockholm Barber Co."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "F\xF6r oss \xE4r en frisyr n\xE5got som k\xE4nnetecknar dig, en signatur. V\xE5ra barberare \xE4r erfarna och ser till att du l\xE4mnar oss med ditt k\xE4nnetecken och en l\xE4ngtan tillbaka."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Kom f\xF6rbi och f\xE5 din signatur i hj\xE4rtat av s\xF6der."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "booking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      fontFamily: "Bernard MT"
    },
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Boka nu")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-gallery",
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Gallery"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "tiles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-contact",
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "kontakta oss"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "(08)-428 611 32"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Tveka inte att h\xF6ra av er till oss ang\xE5ende fr\xE5gor."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Stockholm Barber company \xE4r en plats f\xF6r dig att koppla av och ta de lungt, ett andra hem."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Kom f\xF6rbi:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      fontSize: "25px"
    },
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Hornsgatan 97, 117 26 Stockholm"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\xD6ppet tider:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Mon-Fre : 11-18")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Sat-Sun : 11-16"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.instagram.com/stockholmbarber/",
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/ig.png",
    alt: "",
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.facebook.com/stockholmbarber/",
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/fb.png",
    alt: "",
    className: "jsx-1281352904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1281352904",
    css: "#index-header.jsx-1281352904{position:relative;width:100%;height:100vh;background-image:url(/static/imgs/10.jpeg);background-position:top right;background-repeat:no-repeat;background-size:cover;}#index-header.jsx-1281352904 img.jsx-1281352904{position:absolute;width:300px;left:50%;top:calc(50% + 20px);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@media screen and (max-width:850px){#index-header.jsx-1281352904 img.jsx-1281352904{width:200px;}@media screen and (max-width:450px){#index-header.jsx-1281352904 img.jsx-1281352904{width:150px;}}}section.jsx-1281352904{padding:100px 0;}button.jsx-1281352904{border:none;padding:20px 40px;font-size:20px;background:#000;color:#fff;cursor:pointer;margin-top:50px;}.container.jsx-1281352904{width:80%;margin:0 auto;position:relative;}.banner.jsx-1281352904{font-size:65px;font-family:Anton,sans-serif;color:#fff;position:absolute;z-index:0;left:50%;top:calc(50% + 30px);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.logo.jsx-1281352904{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:130px;}.logo.jsx-1281352904 img.jsx-1281352904{width:800px;height:auto;}.text.jsx-1281352904{max-width:550px;margin:0 auto;}.img.jsx-1281352904{width:200px;height:200px;background:red;}.phone.jsx-1281352904{font-size:45px;}#index-about.jsx-1281352904 img.jsx-1281352904{position:absolute;left:-150px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);width:800px;}@media screen and (max-width:1250px){#index-about.jsx-1281352904 img.jsx-1281352904{display:none;}}#index-gallery.jsx-1281352904{position:relative;background-image:url(/static/imgs/1.jpeg);background-position:bottom left;background-repeat:no-repeat;background-size:cover;}#index-gallery.jsx-1281352904:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}#index-gallery.jsx-1281352904 h1.jsx-1281352904{color:#fff;position:relative;z-index:3;}.tiles.jsx-1281352904{height:1200px;display:grid;grid-template-columns:auto auto;grid-template-row:auto auto auto auto;grid-gap:15px;padding:10px;position:relative;z-index:3;}.tiles.jsx-1281352904 div.jsx-1281352904{background-size:cover;background-repeat:no-repeat;}.tiles.jsx-1281352904 div.jsx-1281352904:nth-child(1){background-image:url(\"/static/imgs/5.jpeg\");grid-column-start:1;grid-column-end:1;grid-row-start:1;grid-row-end:3;}.tiles.jsx-1281352904 div.jsx-1281352904:nth-child(2){background-image:url(\"/static/imgs/9.jpeg\");grid-column-start:2;grid-column-end:2;grid-row-start:1;grid-row-end:2;}.tiles.jsx-1281352904 div.jsx-1281352904:nth-child(3){background-image:url(\"/static/imgs/2.jpeg\");grid-column-start:2;grid-column-end:2;grid-row-start:2;grid-row-end:2;}.tiles.jsx-1281352904 div.jsx-1281352904:nth-child(4){background-image:url(\"/static/imgs/4.jpeg\");background-position:bottom;grid-column-start:1;grid-column-end:3;grid-row-start:3;grid-row-end:3;}@media screen and (max-width:768px){#index-gallery.jsx-1281352904 .container.jsx-1281352904{width:98%;}.tiles.jsx-1281352904 div.jsx-1281352904:nth-child(1){grid-column-start:1;grid-column-end:4;grid-row-start:1;grid-row-end:1;}.tiles.jsx-1281352904 div.jsx-1281352904:nth-child(2){grid-column-start:1;grid-column-end:4;grid-row-start:2;grid-row-end:2;}.tiles.jsx-1281352904 div.jsx-1281352904:nth-child(3){background-image:url(\"/static/imgs/2.jpeg\");grid-column-start:1;grid-column-end:4;grid-row-start:3;grid-row-end:3;}.tiles.jsx-1281352904 div.jsx-1281352904:nth-child(4){grid-column-start:1;grid-column-end:4;grid-row-start:4;grid-row-end:4;}}#index-contact.jsx-1281352904{position:relative;}.social.jsx-1281352904{margin-top:40px;}.social.jsx-1281352904 img.jsx-1281352904{width:40px;margin:0 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGa0IsQUFNNkIsQUFVQSxBQVNKLEFBS0UsQUFNQSxBQUlKLEFBVUYsQUFNSyxBQVdHLEFBT04sQUFLSSxBQUtKLEFBTUcsQUFHRyxBQVFILEFBS0csQUFRUCxBQVdBLEFBTUcsQUFXUSxBQUtzQixBQVFBLEFBUUEsQUFRQSxBQVVoQyxBQUdVLEFBT0EsQUFPd0IsQUFReEIsQUFRSixBQUlGLEFBSUwsVUEzS0csQUFtSWQsQ0FuRWtCLEFBV0EsQUFpR0osQ0FyTWQsQUFLRSxBQVVnQixBQWtDTixBQVVDLENBaUJiLENBOEJhLENBM0VpQixBQWtDaEMsQ0F0REEsQUEyQ2dCLEFBMkloQixFQXBOYSxBQVVDLEFBbURILEFBMEJHLEFBYThCLEFBNEc1QyxFQTlCc0IsQUFPQSxBQWVBLEVBaEVRLEVBM0ZWLEFBd0JwQixDQVVpQixBQTBJakIsRUEzSjZCLEFBZ0VLLEVBN0huQixBQTRHUCxBQVdJLENBN0dELEFBd0JNLEFBdUNqQixBQWMwQixLQXNCZixHQXFFVSxBQU9BLEFBZUEsQ0E3TEUsQUE2R3ZCLENBekNBLEVBOUU2QyxBQTRDN0MsRUFLYSxBQTRESCxBQThCWSxBQVFBLEFBUUEsQUFRTyxBQTJCTCxDQTVKTixLQXFHbEIsRUF6QlMsR0E1RFcsQUFnSUQsQUFPQSxBQWVBLElBekZhLEFBY1EsQ0FsSE4sQUF3RkEsQ0FoRXJCLEdBeUdPLEFBUUEsQUFRQSxBQW1DRSxNQVpwQixBQU9BLEFBZUEsQ0FyQ29CLENBaElMLENBZUwsU0EwRk8sQUFRQSxBQVFBLEFBbUNFLENBNUlWLEVBbkRxQixDQStHcEIsQ0EzRU0sSUFnSUUsQ0FoSEcsQUErQ08sSUFhOUIsQ0FhZ0IsRUFnQkMsQUFRQSxBQVFBLEFBbUNFLElBM0puQixNQWdJbUIsRUF2Q0osRUF6RW1CLENBaUNwQixBQXdEZCxBQVFBLEFBUUEsQUFtQ0UsQ0FoTTRCLEtBMkRsQixBQXdDWSxJQTJCSixFQXhDcEIsQUErRWlCLElBekdqQixXQTBHQSxDQWxFQSxBQTJCWSxDQTlIWSxTQStIeEIsYUE5SEEsQUFRQSxxREEyQ0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8ZGl2IGlkPVwiaW5kZXhcIj5cclxuICAgICAgPGhlYWRlciBpZD1cImluZGV4LWhlYWRlclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWdzL2xvZ28td2hpdGUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaW5kZXgtYWJvdXRcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1ncy9rbmlmZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+U3RvY2tob2xtIEJhcmJlciBDby48L2gxPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBGw7ZyIG9zcyDDpHIgZW4gZnJpc3lyIG7DpWdvdCBzb20ga8Okbm5ldGVja25hciBkaWcsIGVuIHNpZ25hdHVyLiBWw6VyYVxyXG4gICAgICAgICAgICAgIGJhcmJlcmFyZSDDpHIgZXJmYXJuYSBvY2ggc2VyIHRpbGwgYXR0IGR1IGzDpG1uYXIgb3NzIG1lZCBkaXR0XHJcbiAgICAgICAgICAgICAga8Okbm5ldGVja2VuIG9jaCBlbiBsw6RuZ3RhbiB0aWxsYmFrYS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c3Ryb25nPktvbSBmw7ZyYmkgb2NoIGbDpSBkaW4gc2lnbmF0dXIgaSBoasOkcnRhdCBhdiBzw7ZkZXIuPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJib29raW5nXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgZm9udEZhbWlseTogXCJCZXJuYXJkIE1UXCIgfX0+Qm9rYSBudTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIHsvKiA8c2VjdGlvbiBpZD1cImluZGV4LWJhcmJlcnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPkJhcmJlcmFyZTwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmJlcnNcIj5cclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+ICovfVxyXG4gICAgICA8c2VjdGlvbiBpZD1cImluZGV4LWdhbGxlcnlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPkdhbGxlcnk8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImluZGV4LWNvbnRhY3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPmtvbnRha3RhIG9zczwvaDE+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZVwiPigwOCktNDI4IDYxMSAzMjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxwPlR2ZWthIGludGUgYXR0IGjDtnJhIGF2IGVyIHRpbGwgb3NzIGFuZ8OlZW5kZSBmcsOlZ29yLjwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgU3RvY2tob2xtIEJhcmJlciBjb21wYW55IMOkciBlbiBwbGF0cyBmw7ZyIGRpZyBhdHQga29wcGxhIGF2IG9jaCB0YVxyXG4gICAgICAgICAgICAgIGRlIGx1bmd0LCBldHQgYW5kcmEgaGVtLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICBLb20gZsO2cmJpOlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIyNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEhvcm5zZ2F0YW4gOTcsIDExNyAyNiBTdG9ja2hvbG1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c3Ryb25nPsOWcHBldCB0aWRlcjo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8aT5Nb24tRnJlIDogMTEtMTg8L2k+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGk+U2F0LVN1biA6IDExLTE2PC9pPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zdG9ja2hvbG1iYXJiZXIvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZ3MvaWcucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3N0b2NraG9sbWJhcmJlci9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1ncy9mYi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICNpbmRleCB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjaW5kZXgtaGVhZGVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvMTAuanBlZyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1oZWFkZXIgaW1nIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRvcDogY2FsYyg1MCUgKyAyMHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICAgICAgICNpbmRleC1oZWFkZXIgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICNpbmRleC1oZWFkZXIgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFubmVyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBbnRvbiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRvcDogY2FsYyg1MCUgKyAzMHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgdG9wOiAxMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGhvbmUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjaW5kZXgtYWJvdXQgaW1nIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IC0xNTBweDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCkge1xyXG4gICAgICAgICAgI2luZGV4LWFib3V0IGltZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjaW5kZXgtZ2FsbGVyeSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWdzLzEuanBlZyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2luZGV4LWdhbGxlcnk6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2luZGV4LWdhbGxlcnkgaDEge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbGVzIHtcclxuICAgICAgICAgIGhlaWdodDogMTIwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3c6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbGVzIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aWxlcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1ncy81LmpwZWdcIik7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcclxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbGVzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWdzLzkuanBlZ1wiKTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGlsZXMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZ3MvMi5qcGVnXCIpO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcclxuICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aWxlcyBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1ncy80LmpwZWdcIik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICNpbmRleC1nYWxsZXJ5IC5jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbGVzIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xyXG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aWxlcyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcclxuICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGlsZXMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1ncy8yLmpwZWdcIik7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpbGVzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xyXG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogNDtcclxuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2luZGV4LWNvbnRhY3Qge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY2lhbCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY2lhbCBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\index.js */",
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 4:
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