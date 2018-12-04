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
    css: "#nav.jsx-3263710631{position:absolute;z-index:3;width:100%;height:60px;}.nav-item-container.jsx-3263710631{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:20px;}a.jsx-3263710631{-webkit-text-decoration:none;text-decoration:none;color:#fff;font-size:20;margin:0 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxcY29tcG9uZW50c1xcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHMkIsQUFPQSxBQU9HLGtCQWJYLEFBT0QsU0FDa0IsQ0FQaEIsV0FDQyxXQVlELENBWGIsVUFZZSxhQUNDLGNBQ2hCLGdDQVJXLFNBQ1giLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxjb21wb25lbnRzXFxOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiAoXHJcbiAgPGRpdiBpZD1cIm5hdlwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1jb250YWluZXJcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5IZW08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9iYXJiZXJzXCI+XHJcbiAgICAgICAgPGE+QmFyYmVyYXJlPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5cclxuICAgICAgICA8YT5UasOkbnN0ZXI8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9ib29raW5nXCI+XHJcbiAgICAgICAgPGE+Qm9rbmluZzwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICNuYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdi1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\components\\Nav.js */",
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
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    id: "index-header",
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/logo-white.png",
    alt: "",
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-about",
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/knife.png",
    alt: "",
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3498078479" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Stockholm Barber Company"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3498078479" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab iusto repudiandae? Cupiditate reprehenderit consequuntur iure incidunt quis assumenda omnis repellat? Incidunt commodi velit maxime obcaecati ipsa inventore laboriosam nesciunt."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum error provident, sint nemo molestias dolorum doloremque nihil temporibus? Placeat, at!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "booking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Boka nu")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-gallery",
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3498078479" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Gallery"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3498078479" + " " + "tiles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-contact",
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "kontakta oss"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3498078479" + " " + "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "(08)-12345678"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3498078479" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nisi dolorum expedita asperiores alias sint, aspernatur harum maxime libero et."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Lorem ipsum dolor sit amet."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut cumque, consectetur temporibus molestiae provident ducimus."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "\xD6ppet tider:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Mon-Fre : 11-18")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3498078479",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Sat-Sun : 11-16")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3498078479",
    css: "#index-header.jsx-3498078479{position:relative;width:100%;height:100vh;background-image:url(/static/imgs/10.jpg);background-position:top right;background-repeat:no-repeat;background-size:cover;}#index-header.jsx-3498078479 img.jsx-3498078479{position:absolute;width:300px;left:50%;top:calc(50% + 20px);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}section.jsx-3498078479{min-height:500px;padding:100px 0;}button.jsx-3498078479{border:none;padding:20px 40px;font-size:20px;background:#000;color:#fff;cursor:pointer;margin-top:50px;}.container.jsx-3498078479{width:80%;margin:0 auto;padding:40px 0;position:relative;}.banner.jsx-3498078479{font-size:65px;font-family:Anton,sans-serif;color:#fff;position:absolute;z-index:0;left:50%;top:calc(50% + 30px);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.logo.jsx-3498078479{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:130px;}.logo.jsx-3498078479 img.jsx-3498078479{width:800px;height:auto;}.text.jsx-3498078479{max-width:550px;margin:0 auto;}.img.jsx-3498078479{width:200px;height:200px;background:red;}.phone.jsx-3498078479{font-size:45px;}#index-about.jsx-3498078479 img.jsx-3498078479{position:absolute;left:-150px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);width:800px;}#index-gallery.jsx-3498078479{position:relative;background-image:url(/static/imgs/1.jpg);background-position:bottom left;background-repeat:no-repeat;background-size:cover;}#index-gallery.jsx-3498078479:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}#index-gallery.jsx-3498078479 h1.jsx-3498078479{color:#fff;position:relative;z-index:3;}.tiles.jsx-3498078479{height:1200px;display:grid;grid-template-columns:auto auto;grid-template-row:auto auto auto auto;grid-gap:15px;padding:10px;position:relative;z-index:3;}.tiles.jsx-3498078479 div.jsx-3498078479{background-size:cover;background-repeat:no-repeat;}.tiles.jsx-3498078479 div.jsx-3498078479:nth-child(1){background-image:url(\"/static/imgs/5.jpg\");grid-column-start:1;grid-column-end:1;grid-row-start:1;grid-row-end:3;}.tiles.jsx-3498078479 div.jsx-3498078479:nth-child(2){background-image:url(\"/static/imgs/9.jpg\");grid-column-start:2;grid-column-end:2;grid-row-start:1;grid-row-end:2;}.tiles.jsx-3498078479 div.jsx-3498078479:nth-child(3){background-image:url(\"/static/imgs/2.jpg\");grid-column-start:2;grid-column-end:2;grid-row-start:2;grid-row-end:2;}.tiles.jsx-3498078479 div.jsx-3498078479:nth-child(4){background-image:url(\"/static/imgs/4.jpg\");background-position:bottom;grid-column-start:1;grid-column-end:3;grid-row-start:3;grid-row-end:3;}#index-contact.jsx-3498078479{position:relative;}#index-contact.jsx-3498078479 img.jsx-3498078479{width:800px;position:absolute;right:-150px;top:200px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ga0IsQUFNNkIsQUFVQSxBQVFELEFBS0wsQUFVRixBQU9LLEFBV0csQUFPTixBQUtJLEFBS0osQUFNRyxBQUdHLEFBTUEsQUFRUCxBQVdBLEFBTUcsQUFXUSxBQUtxQixBQVFBLEFBUUEsQUFRQSxBQVN6QixBQUlOLFVBL0hFLENBMERJLEFBV0EsQ0EvRUEsQUFtQ04sQUFVQyxBQTZGSyxFQXJETCxDQXBFaUIsQUFrQ2hDLENBWGdCLENBN0NFLENBbEJMLEFBVUMsQUF5Q0gsQUEwQkcsQUFNNkIsQUEwRTNDLElBdEM4QixFQXJGYixBQXlCakIsQ0FVaUIsRUFqQlksQUF5REssRUE1R25CLEFBMkZQLEFBV0ksQ0E1RkQsQUFhTSxBQXdDakIsQUFjMEIsQUFvRlgsR0EvSWYsRUEwRVcsSUFqRlksQUF1QkgsQUFxRXBCLENBbENBLEVBcEU0QyxDQTBIdEIsQUFRQSxBQVFBLEFBUU8sQUFlakIsQ0ExSEMsQUFxREgsQ0FyRVEsS0ErRmxCLEVBekJTLENBcUVpQixFQTFITixFQU5wQixFQWdEa0MsQUFZRixBQWNRLENBakdOLENBYXJCLEVBbUdPLEFBUUEsQUFRQSxPQVFFLEVBMUhMLENBZ0JMLFFBbUZPLEFBUUEsQUFRQSxFQWxHUixDQXpDcUIsRUE4RnBCLENBckVNLEdBMEhFLENBakVVLENBeENQLElBcUR2QixDQWFnQixDQWdCQyxBQVFBLEFBUUEsS0FsSGpCLEtBMEhtQixHQXZDSixFQWxFbUIsQUFrRmxDLEFBUUEsQUFRQSxDQTVJOEIsQUEyRWhCLEtBT1UsQ0FqQ1osSUE0RFEsQ0F1Q0gsQ0F4RWpCLElBMUJBLE9BK0dBLEdBWkEsQ0FsRUEsQ0FsRndCLEFBNkdaLFVBQ1osWUE3R0EsQ0FRQSxxREFpQ0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8ZGl2IGlkPVwiaW5kZXhcIj5cclxuICAgICAgPGhlYWRlciBpZD1cImluZGV4LWhlYWRlclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWdzL2xvZ28td2hpdGUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaW5kZXgtYWJvdXRcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1ncy9rbmlmZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+U3RvY2tob2xtIEJhcmJlciBDb21wYW55PC9oMT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgVmVyaXRhdGlzIGFiIGl1c3RvIHJlcHVkaWFuZGFlPyBDdXBpZGl0YXRlIHJlcHJlaGVuZGVyaXRcclxuICAgICAgICAgICAgICBjb25zZXF1dW50dXIgaXVyZSBpbmNpZHVudCBxdWlzIGFzc3VtZW5kYSBvbW5pcyByZXBlbGxhdD8gSW5jaWR1bnRcclxuICAgICAgICAgICAgICBjb21tb2RpIHZlbGl0IG1heGltZSBvYmNhZWNhdGkgaXBzYSBpbnZlbnRvcmUgbGFib3Jpb3NhbSBuZXNjaXVudC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gTm9zdHJ1bVxyXG4gICAgICAgICAgICAgIGVycm9yIHByb3ZpZGVudCwgc2ludCBuZW1vIG1vbGVzdGlhcyBkb2xvcnVtIGRvbG9yZW1xdWUgbmloaWxcclxuICAgICAgICAgICAgICB0ZW1wb3JpYnVzPyBQbGFjZWF0LCBhdCFcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImJvb2tpbmdcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbj5Cb2thIG51PC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgey8qIDxzZWN0aW9uIGlkPVwiaW5kZXgtYmFyYmVyc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+QmFyYmVyYXJlPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj4gKi99XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaW5kZXgtZ2FsbGVyeVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+R2FsbGVyeTwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaW5kZXgtY29udGFjdFwiPlxyXG4gICAgICAgIDxoMT5rb250YWt0YSBvc3M8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvbmVcIj4oMDgpLTEyMzQ1Njc4PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZlbGl0LFxyXG4gICAgICAgICAgICBhY2N1c2FtdXM/XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5hdHVzIG5pc2lcclxuICAgICAgICAgICAgZG9sb3J1bSBleHBlZGl0YSBhc3BlcmlvcmVzIGFsaWFzIHNpbnQsIGFzcGVybmF0dXIgaGFydW0gbWF4aW1lXHJcbiAgICAgICAgICAgIGxpYmVybyBldC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LjwvcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXRcclxuICAgICAgICAgICAgY3VtcXVlLCBjb25zZWN0ZXR1ciB0ZW1wb3JpYnVzIG1vbGVzdGlhZSBwcm92aWRlbnQgZHVjaW11cy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzdHJvbmc+w5ZwcGV0IHRpZGVyOjwvc3Ryb25nPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpPk1vbi1GcmUgOiAxMS0xODwvaT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aT5TYXQtU3VuIDogMTEtMTY8L2k+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAjaW5kZXgge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2luZGV4LWhlYWRlciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWdzLzEwLmpwZyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1oZWFkZXIgaW1nIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRvcDogY2FsYyg1MCUgKyAyMHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogNDBweCAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhbm5lciB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogQW50b24sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0b3A6IGNhbGMoNTAlICsgMzBweCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgIHRvcDogMTMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nbyBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBob25lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2luZGV4LWFib3V0IGltZyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAtMTUwcHg7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpbmRleC1nYWxsZXJ5IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvMS5qcGcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1nYWxsZXJ5OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1nYWxsZXJ5IGgxIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aWxlcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEyMDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93OiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aWxlcyBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGlsZXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZ3MvNS5qcGdcIik7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcclxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbGVzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWdzLzkuanBnXCIpO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aWxlcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1ncy8yLmpwZ1wiKTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGlsZXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZ3MvNC5qcGdcIik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2luZGV4LWNvbnRhY3Qge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2luZGV4LWNvbnRhY3QgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAtMTUwcHg7XHJcbiAgICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\index.js */",
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