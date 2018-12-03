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
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVUyQiIsImZpbGUiOiJDOlxcVXNlcnNcXFRhcmlxXFxEZXNrdG9wXFxkZXZcXHN0b2NraG9sbV9iYXJiZXJfZnJvbnRcXGNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\components\\Layout.js */",
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
    className: "jsx-3439214419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3439214419" + " " + "nav-item-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/barbers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3439214419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Barberare")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3439214419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Tj\xE4nster")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/booking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3439214419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Bokning"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3439214419",
    css: "#nav.jsx-3439214419{position:absolute;z-index:1;width:100%;height:60px;}.nav-item-container.jsx-3439214419{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:20px;}a.jsx-3439214419{-webkit-text-decoration:none;text-decoration:none;color:#fff;font-size:20;margin:0 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxcY29tcG9uZW50c1xcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVnQixBQUcyQixBQU9BLEFBT0csa0JBYlgsQUFPRCxTQUNrQixDQVBoQixXQUNDLFdBWUQsQ0FYYixVQVllLGFBQ0MsY0FDaEIsZ0NBUlcsU0FDWCIsImZpbGUiOiJDOlxcVXNlcnNcXFRhcmlxXFxEZXNrdG9wXFxkZXZcXHN0b2NraG9sbV9iYXJiZXJfZnJvbnRcXGNvbXBvbmVudHNcXE5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IChcclxuICA8ZGl2IGlkPVwibmF2XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICA8TGluayBocmVmPVwiL2JhcmJlcnNcIj5cclxuICAgICAgICA8YT5CYXJiZXJhcmU8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPlxyXG4gICAgICAgIDxhPlRqw6Ruc3RlcjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL2Jvb2tpbmdcIj5cclxuICAgICAgICA8YT5Cb2tuaW5nPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgI25hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2LWl0ZW0tY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\components\\Nav.js */",
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
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-header",
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-about",
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1116950977" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Stockholm Barber Company"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1116950977" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab iusto repudiandae? Cupiditate reprehenderit consequuntur iure incidunt quis assumenda omnis repellat? Incidunt commodi velit maxime obcaecati ipsa inventore laboriosam nesciunt."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum error provident, sint nemo molestias dolorum doloremque nihil temporibus? Placeat, at!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "booking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Boka nu")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-gallery",
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1116950977" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Gallery"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1116950977" + " " + "tiles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-contact",
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "kontakta oss"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1116950977" + " " + "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "(08)-12345678"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1116950977" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nisi dolorum expedita asperiores alias sint, aspernatur harum maxime libero et."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Lorem ipsum dolor sit amet."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut cumque, consectetur temporibus molestiae provident ducimus."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\xD6ppet tider:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Mon-Fre : 11-18")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1116950977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Sat-Sun : 11-16")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1116950977",
    css: "#index-header.jsx-1116950977{position:relative;width:100%;height:calc(100vh - 160px);background-image:url(/static/imgs/10.jpg);background-position:top right;background-repeat:no-repeat;background-size:cover;}section.jsx-1116950977{min-height:500px;padding:80px 0;}button.jsx-1116950977{border:none;padding:20px 40px;font-size:20px;background:#000;color:#fff;cursor:pointer;margin-top:50px;}.container.jsx-1116950977{width:80%;margin:0 auto;padding:40px 0;position:relative;}.banner.jsx-1116950977{font-size:65px;font-family:Anton,sans-serif;color:#fff;position:absolute;z-index:0;left:50%;top:calc(50% + 30px);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.logo.jsx-1116950977{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:130px;}.logo.jsx-1116950977 img.jsx-1116950977{width:800px;height:auto;}.text.jsx-1116950977{max-width:550px;margin:0 auto;}.img.jsx-1116950977{width:200px;height:200px;background:red;}.phone.jsx-1116950977{font-size:45px;}#index-gallery.jsx-1116950977{position:relative;background-image:url(/static/imgs/index-header.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;}#index-gallery.jsx-1116950977:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}#index-gallery.jsx-1116950977 h1.jsx-1116950977{color:#fff;position:relative;z-index:3;}.tiles.jsx-1116950977{height:1200px;display:grid;grid-template-columns:auto auto;grid-template-row:auto auto auto auto;grid-gap:15px;padding:10px;position:relative;z-index:3;}.tiles.jsx-1116950977 div.jsx-1116950977{background-size:cover;background-repeat:no-repeat;}.tiles.jsx-1116950977 div.jsx-1116950977:nth-child(1){background-image:url(\"/static/imgs/5.jpg\");grid-column-start:1;grid-column-end:1;grid-row-start:1;grid-row-end:3;}.tiles.jsx-1116950977 div.jsx-1116950977:nth-child(2){background-image:url(\"/static/imgs/9.jpg\");grid-column-start:2;grid-column-end:2;grid-row-start:1;grid-row-end:2;}.tiles.jsx-1116950977 div.jsx-1116950977:nth-child(3){background-image:url(\"/static/imgs/7.jpg\");grid-column-start:2;grid-column-end:2;grid-row-start:2;grid-row-end:2;}.tiles.jsx-1116950977 div.jsx-1116950977:nth-child(4){background-image:url(\"/static/imgs/4.jpg\");background-position:bottom;grid-column-start:1;grid-column-end:3;grid-row-start:3;grid-row-end:3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGa0IsQUFNNkIsQUFVRCxBQUtMLEFBVUYsQUFPSyxBQVdHLEFBT04sQUFLSSxBQUtKLEFBTUcsQUFJRyxBQVFQLEFBV0EsQUFNRyxBQVdRLEFBS3FCLEFBUUEsQUFRQSxBQVFBLFVBN0c3QixDQXFESSxBQVdBLENBMUVBLEFBbUNOLEFBVUMsRUFtQ0EsQ0EvRGlCLEFBa0NoQyxDQVhnQixDQTdDQyxDQVZKLEFBMkNGLEFBMkIyQyxJQW9DeEIsRUFoRmIsQUF5QmpCLENBVWlCLEVBakJZLEFBb0RLLEVBL0ZMLEFBOEVyQixBQVdJLENBMUVLLEFBd0NqQixFQTdDQSxHQXFFVyxJQXJEUyxBQWdFcEIsQ0E3QkEsR0FpRHNCLEFBUUEsQUFRQSxBQVFPLENBdEdoQixBQWdESCxDQWhFUSxLQTBGbEIsRUF6QlMsR0FoRFcsQ0FoQ3dCLENBMEI1QyxFQXVEZ0MsQUFjUSxFQS9FM0IsRUE4Rk8sQUFRQSxBQVFBLE9BekRTLEFBaUVQLEVBckhMLENBZ0JMLFFBOEVPLEFBUUEsQUFRQSxFQTdGUixHQWdEQyxDQWhFTSxHQXFIRSxFQXBHRyxJQWdEdkIsQ0FiOEIsQUEwQmQsQ0EvRmdCLEFBK0dmLEFBUUEsQUFRQSxLQTdHakIsS0FxSG1CLEdBdkNKLEVBN0RtQixBQTZFbEMsQUFRQSxBQVFBLE9BdEZZLElBdURRLENBM0JJLEFBa0VQLEdBdklhLEVBMEM5QixVQThGQSxFQXZDWSxLQTNCWixLQTRCQSxJQWpHd0Isc0JBQ3hCLHdDQWlDQSIsImZpbGUiOiJDOlxcVXNlcnNcXFRhcmlxXFxEZXNrdG9wXFxkZXZcXHN0b2NraG9sbV9iYXJiZXJfZnJvbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiAoXHJcbiAgPExheW91dD5cclxuICAgIDxkaXYgaWQ9XCJpbmRleFwiPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImluZGV4LWhlYWRlclwiIC8+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaW5kZXgtYWJvdXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPlN0b2NraG9sbSBCYXJiZXIgQ29tcGFueTwvaDE+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgIFZlcml0YXRpcyBhYiBpdXN0byByZXB1ZGlhbmRhZT8gQ3VwaWRpdGF0ZSByZXByZWhlbmRlcml0XHJcbiAgICAgICAgICAgICAgY29uc2VxdXVudHVyIGl1cmUgaW5jaWR1bnQgcXVpcyBhc3N1bWVuZGEgb21uaXMgcmVwZWxsYXQ/IEluY2lkdW50XHJcbiAgICAgICAgICAgICAgY29tbW9kaSB2ZWxpdCBtYXhpbWUgb2JjYWVjYXRpIGlwc2EgaW52ZW50b3JlIGxhYm9yaW9zYW0gbmVzY2l1bnQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIE5vc3RydW1cclxuICAgICAgICAgICAgICBlcnJvciBwcm92aWRlbnQsIHNpbnQgbmVtbyBtb2xlc3RpYXMgZG9sb3J1bSBkb2xvcmVtcXVlIG5paGlsXHJcbiAgICAgICAgICAgICAgdGVtcG9yaWJ1cz8gUGxhY2VhdCwgYXQhXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJib29raW5nXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24+Qm9rYSBudTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIHsvKiA8c2VjdGlvbiBpZD1cImluZGV4LWJhcmJlcnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPkJhcmJlcmFyZTwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmJlcnNcIj5cclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+ICovfVxyXG4gICAgICA8c2VjdGlvbiBpZD1cImluZGV4LWdhbGxlcnlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPkdhbGxlcnk8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImluZGV4LWNvbnRhY3RcIj5cclxuICAgICAgICA8aDE+a29udGFrdGEgb3NzPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lXCI+KDA4KS0xMjM0NTY3ODwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBWZWxpdCxcclxuICAgICAgICAgICAgYWNjdXNhbXVzP1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOYXR1cyBuaXNpXHJcbiAgICAgICAgICAgIGRvbG9ydW0gZXhwZWRpdGEgYXNwZXJpb3JlcyBhbGlhcyBzaW50LCBhc3Blcm5hdHVyIGhhcnVtIG1heGltZVxyXG4gICAgICAgICAgICBsaWJlcm8gZXQuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC48L3A+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXV0XHJcbiAgICAgICAgICAgIGN1bXF1ZSwgY29uc2VjdGV0dXIgdGVtcG9yaWJ1cyBtb2xlc3RpYWUgcHJvdmlkZW50IGR1Y2ltdXMuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8c3Ryb25nPsOWcHBldCB0aWRlcjo8L3N0cm9uZz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aT5Nb24tRnJlIDogMTEtMTg8L2k+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGk+U2F0LVN1biA6IDExLTE2PC9pPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgI2luZGV4IHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1oZWFkZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWdzLzEwLmpwZyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogNDBweCAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhbm5lciB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogQW50b24sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0b3A6IGNhbGMoNTAlICsgMzBweCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgIHRvcDogMTMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nbyBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBob25lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1nYWxsZXJ5IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvaW5kZXgtaGVhZGVyLmpwZyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1nYWxsZXJ5OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRleC1nYWxsZXJ5IGgxIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aWxlcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEyMDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93OiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aWxlcyBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGlsZXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZ3MvNS5qcGdcIik7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcclxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbGVzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWdzLzkuanBnXCIpO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aWxlcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1ncy83LmpwZ1wiKTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGlsZXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZ3MvNC5qcGdcIik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\index.js */",
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