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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Nav.js




var Nav_Nav = function Nav() {
  return external_react_default.a.createElement("div", {
    id: "nav",
    className: "jsx-2944791484"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2944791484" + " " + "nav-item-container"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "jsx-2944791484"
  }, "Hem")), external_react_default.a.createElement(link_default.a, {
    href: "/barbers"
  }, external_react_default.a.createElement("a", {
    className: "jsx-2944791484"
  }, "Barberare")), external_react_default.a.createElement(link_default.a, {
    href: "/services"
  }, external_react_default.a.createElement("a", {
    className: "jsx-2944791484"
  }, "Tj\xE4nster")), external_react_default.a.createElement(link_default.a, {
    href: "/booking"
  }, external_react_default.a.createElement("a", {
    className: "jsx-2944791484"
  }, "Bokning"))), external_react_default.a.createElement(style_default.a, {
    styleId: "2944791484",
    css: ["#nav.jsx-2944791484{position:absolute;z-index:3;width:100%;height:60px;}", ".nav-item-container.jsx-2944791484{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:20px;}", "a.jsx-2944791484{-webkit-text-decoration:none;text-decoration:none;color:#fff;font-size:20px;margin:0 20px;}", "@media screen and (max-width:400px){a.jsx-2944791484{font-size:18px;margin:0 10px;}}", "@media screen and (max-width:320px){a.jsx-2944791484{font-size:15px;margin:0 10px;}}"]
  }));
};

/* harmony default export */ var components_Nav = (Nav_Nav);
// CONCATENATED MODULE: ./components/Layout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout_Layout; });



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Layout_Layout =
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
      return external_react_default.a.createElement("div", {
        className: "jsx-2085888330"
      }, external_react_default.a.createElement(components_Nav, null), this.props.children, external_react_default.a.createElement(style_default.a, {
        styleId: "2085888330",
        css: []
      }));
    }
  }]);

  return Layout;
}(external_react_["Component"]);



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "index",
    className: "jsx-1281352904"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    id: "index-header",
    className: "jsx-1281352904"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/logo-white.png",
    alt: "",
    className: "jsx-1281352904"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-about",
    className: "jsx-1281352904"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/knife.png",
    alt: "",
    className: "jsx-1281352904"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1281352904"
  }, "Stockholm Barber Co."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "text"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904"
  }, "F\xF6r oss \xE4r en frisyr n\xE5got som k\xE4nnetecknar dig, en signatur. V\xE5ra barberare \xE4r erfarna och ser till att du l\xE4mnar oss med ditt k\xE4nnetecken och en l\xE4ngtan tillbaka."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1281352904"
  }, "Kom f\xF6rbi och f\xE5 din signatur i hj\xE4rtat av s\xF6der."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "booking"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      fontFamily: "Bernard MT"
    },
    className: "jsx-1281352904"
  }, "Boka nu")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-gallery",
    className: "jsx-1281352904"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1281352904"
  }, "Gallery"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "tiles"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "index-contact",
    className: "jsx-1281352904"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1281352904"
  }, "kontakta oss"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "phone"
  }, "(08)-428 611 32"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "text"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904"
  }, "Tveka inte att h\xF6ra av er till oss ang\xE5ende fr\xE5gor."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904"
  }, "Stockholm Barber company \xE4r en plats f\xF6r dig att koppla av och ta de lungt, ett andra hem."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1281352904"
  }, "Kom f\xF6rbi:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1281352904"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      fontSize: "25px"
    },
    className: "jsx-1281352904"
  }, "Hornsgatan 97, 117 26 Stockholm"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1281352904"
  }, "\xD6ppet tider:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1281352904"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1281352904"
  }, "Mon-Fre : 11-18")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1281352904"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1281352904"
  }, "Sat-Sun : 11-16"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281352904" + " " + "social"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.instagram.com/stockholmbarber/",
    className: "jsx-1281352904"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/ig.png",
    alt: "",
    className: "jsx-1281352904"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.facebook.com/stockholmbarber/",
    className: "jsx-1281352904"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/imgs/fb.png",
    alt: "",
    className: "jsx-1281352904"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1281352904",
    css: ["#index-header.jsx-1281352904{position:relative;width:100%;height:100vh;background-image:url(/static/imgs/10.jpeg);background-position:top right;background-repeat:no-repeat;background-size:cover;}", "#index-header.jsx-1281352904 img.jsx-1281352904{position:absolute;width:300px;left:50%;top:calc(50% + 20px);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", "@media screen and (max-width:850px){#index-header.jsx-1281352904 img.jsx-1281352904{width:200px;}@media screen and (max-width:450px){#index-header.jsx-1281352904 img.jsx-1281352904{width:150px;}}}", "section.jsx-1281352904{padding:100px 0;}", "button.jsx-1281352904{border:none;padding:20px 40px;font-size:20px;background:#000;color:#fff;cursor:pointer;margin-top:50px;}", ".container.jsx-1281352904{width:80%;margin:0 auto;position:relative;}", ".banner.jsx-1281352904{font-size:65px;font-family:Anton,sans-serif;color:#fff;position:absolute;z-index:0;left:50%;top:calc(50% + 30px);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".logo.jsx-1281352904{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:130px;}", ".logo.jsx-1281352904 img.jsx-1281352904{width:800px;height:auto;}", ".text.jsx-1281352904{max-width:550px;margin:0 auto;}", ".img.jsx-1281352904{width:200px;height:200px;background:red;}", ".phone.jsx-1281352904{font-size:45px;}", "#index-about.jsx-1281352904 img.jsx-1281352904{position:absolute;left:-150px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);width:800px;}", "@media screen and (max-width:1250px){#index-about.jsx-1281352904 img.jsx-1281352904{display:none;}}", "#index-gallery.jsx-1281352904{position:relative;background-image:url(/static/imgs/1.jpeg);background-position:bottom left;background-repeat:no-repeat;background-size:cover;}", "#index-gallery.jsx-1281352904:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}", "#index-gallery.jsx-1281352904 h1.jsx-1281352904{color:#fff;position:relative;z-index:3;}", ".tiles.jsx-1281352904{height:1200px;display:grid;grid-template-columns:auto auto;grid-template-row:auto auto auto auto;grid-gap:15px;padding:10px;position:relative;z-index:3;}", ".tiles.jsx-1281352904 div.jsx-1281352904{background-size:cover;background-repeat:no-repeat;}", ".tiles.jsx-1281352904 div.jsx-1281352904:nth-child(1){background-image:url(\"/static/imgs/5.jpeg\");grid-column-start:1;grid-column-end:1;grid-row-start:1;grid-row-end:3;}", ".tiles.jsx-1281352904 div.jsx-1281352904:nth-child(2){background-image:url(\"/static/imgs/9.jpeg\");grid-column-start:2;grid-column-end:2;grid-row-start:1;grid-row-end:2;}", ".tiles.jsx-1281352904 div.jsx-1281352904:nth-child(3){background-image:url(\"/static/imgs/2.jpeg\");grid-column-start:2;grid-column-end:2;grid-row-start:2;grid-row-end:2;}", ".tiles.jsx-1281352904 div.jsx-1281352904:nth-child(4){background-image:url(\"/static/imgs/4.jpeg\");background-position:bottom;grid-column-start:1;grid-column-end:3;grid-row-start:3;grid-row-end:3;}", "@media screen and (max-width:768px){#index-gallery.jsx-1281352904 .container.jsx-1281352904{width:98%;}.tiles.jsx-1281352904 div.jsx-1281352904:nth-child(1){grid-column-start:1;grid-column-end:4;grid-row-start:1;grid-row-end:1;}.tiles.jsx-1281352904 div.jsx-1281352904:nth-child(2){grid-column-start:1;grid-column-end:4;grid-row-start:2;grid-row-end:2;}.tiles.jsx-1281352904 div.jsx-1281352904:nth-child(3){background-image:url(\"/static/imgs/2.jpeg\");grid-column-start:1;grid-column-end:4;grid-row-start:3;grid-row-end:3;}.tiles.jsx-1281352904 div.jsx-1281352904:nth-child(4){grid-column-start:1;grid-column-end:4;grid-row-start:4;grid-row-end:4;}}", "#index-contact.jsx-1281352904{position:relative;}", ".social.jsx-1281352904{margin-top:40px;}", ".social.jsx-1281352904 img.jsx-1281352904{width:40px;margin:0 10px;}"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })
/******/ ]);