webpackHotUpdate("static\\development\\pages\\services.js",{

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\services.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Services =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Services, _React$Component);

  function Services() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Services);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Services)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      services: staticServices
    });

    return _this;
  }

  _createClass(Services, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "services",
        className: "jsx-726814157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-726814157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-726814157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "V\xE5ra Tj\xE4nster"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-726814157" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-726814157" + " " + "service-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, Object.keys(this.state.services).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: key,
          className: "jsx-726814157" + " " + "service-type",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "jsx-726814157",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, key), _this2.state.services[key].map(function (service, servKey) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: servKey,
            className: "jsx-726814157" + " " + "service",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-726814157" + " " + "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }, service.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-726814157" + " " + "description",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, service.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-726814157" + " " + "time",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: "/static/imgs/clock.png",
            alt: "",
            className: "jsx-726814157",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
            className: "jsx-726814157",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }, service.time)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-726814157" + " " + "price",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, service.pris));
        }));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "726814157",
        css: "#services.jsx-726814157{min-height:1000px;position:relative;background-image:url(/static/imgs/6.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-726814157{padding:140px 0;}h1.jsx-726814157{color:#fff;position:relative;z-index:3;}h2.jsx-726814157{margin-top:80px;text-transform:uppercase;font-size:30px;font-weight:bold;}#services.jsx-726814157:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}.container.jsx-726814157{position:relative;z-index:3;color:#fff;width:95%;margin:0 auto;}.service-container.jsx-726814157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.service-type.jsx-726814157{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;position:relative;}.service.jsx-726814157{padding:30px 40px;width:calc(100% - 80px);background:#f9f9f9;color:#000;text-align:left;margin:0 auto;margin-bottom:25px;}.service.jsx-726814157:last-of-type{margin-bottom:0;}@media screen and (min-width:950px){.service-type.jsx-726814157{-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;}}.name.jsx-726814157{font-size:28px;font-weight:bold;margin-bottom:15px;}.description.jsx-726814157{color:#373d3f;overflow:hidden;position:relative;}.description.jsx-726814157:after{content:\"\";position:absolute;bottom:25px;right:0;height:15px;background:linear-gradient( to bottom, rgba(249,249,249,0) 0%, rgba(249,249,249,1) 100% );}.price.jsx-726814157{font-weight:bold;position:absolute;right:40px;}.time.jsx-726814157{margin-top:20px;font-size:18px;position:relative;}.time.jsx-726814157 img.jsx-726814157{position:relative;top:3px;width:20px;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXHNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDb0IsQUFHK0IsQUFRRixBQUlMLEFBS0ssQUFPTCxBQVdPLEFBUUwsQUFNRyxBQUtFLEFBVUYsQUFLQyxBQUtGLEFBTUQsQUFNSCxBQWFNLEFBTUQsQUFNRSxXQWxHQSxBQVlBLEFBOERBLEdBTkYsQ0FOQyxDQWxFbkIsQUFTMkIsQUErQzNCLEFBeUNpQixDQU5HLENBbkdBLEFBbUNSLEFBbUJjLEFBeURoQixRQUNHLEVBNUVBLENBdkJELEFBWUosQUE4RE0sQ0FOTSxDQXlCQSxDQS9CQyxHQWpEVixBQTBFRSxDQW5HOEIsQ0FnSHZCLEVBbkdwQixBQXVCWSxFQW5CSyxBQXNFUCxDQWpDVyxFQTVCWCxFQTBFVixFQW5CQSxDQTVDZ0IsQUFtREYsQUFrQmQsRUEvQkEsQ0FoRFMsR0FzRlQsQ0EvRm1CLEdBVWEsRUEyQm5CLEFBc0NWLEVBdkRILEdBOEJFLEdBcEJrQixHQVFGLENBckNsQixDQXVCaUIsR0F6Q1ksU0E0QmpCLENBb0JaLENBUWdCLFFBM0JoQixNQTRCcUIsRUF4RFMsaUJBeUQ5QixVQWhCK0IsQ0F4Q1AsbUJBMkZ4QixHQTFGQSxvR0F3Q0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5jbGFzcyBTZXJ2aWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzZXJ2aWNlczogc3RhdGljU2VydmljZXNcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHt9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBpZD1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGgxPlbDpXJhIFRqw6Ruc3RlcjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuc2VydmljZXMpLm1hcChrZXkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtdHlwZVwiIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2tleX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlcnZpY2VzW2tleV0ubWFwKChzZXJ2aWNlLCBzZXJ2S2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VcIiBrZXk9e3NlcnZLZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57c2VydmljZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWdzL2Nsb2NrLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57c2VydmljZS50aW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPntzZXJ2aWNlLnByaXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgI3NlcnZpY2VzIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvNi5qcGcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTQwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI3NlcnZpY2VzOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZXJ2aWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2UtdHlwZSB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VydmljZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2U6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICAuc2VydmljZS10eXBlIHtcclxuICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzNzNkM2Y7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZGVzY3JpcHRpb246YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIHRvIGJvdHRvbSxcclxuICAgICAgICAgICAgICByZ2JhKDI0OSwgMjQ5LCAyNDksIDApIDAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjQ5LCAyNDksIDI0OSwgMSkgMTAwJVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpbWUgaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xyXG5cclxubGV0IHN0YXRpY1NlcnZpY2VzID0ge1xyXG4gIHZhbmxpZzogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIktsaXBwbmluZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkLDtnJqYSBtZWQgZXR0IG9yZGVudGxpZ3Qgc2FtcsOlZCwgb2NoIHNlZGFuIGFudsOkbmRhIHRyYWRpdGlvbmVsbGEgYmFyYmVyaW5nc21ldG9kZXIgc29tIGFudsOkbmRzIGbDtnIgYXR0IHNrcsOkZGRhcnN5IGt1bmRlcm5hcyDDtm5za2FkZSBibGljaywgcHJlcGFyZXJhZGUgbWVkIHByZW1pdW1ow6VycHJvZHVrdGVyLCBvY2ggc2x1dGFyIG1lZCBlbiBrbGFzc2lzayByYWtuaW5nIHDDpSBuYWNrZW4uXCIsXHJcbiAgICAgIHRpbWU6IFwiNDVtaW5cIixcclxuICAgICAgcHJpczogXCI0ODAga3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCdXp6IEN1dFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkLDtnJqYSBtZWQgZW4ga29uc3VsdGF0aW9uLCBzZWRhbiB0YXIgdmkgc2FtbWEgbMOkbmdkIMO2dmVyIGhlbGEgaHV2dWRldCBtZWQgZW4ga2xpcHBtYXNraW4sIGbDtmxqdCBhdiBhdHQgZGV0YWxqZXJhIGRlIHl0dHJlIGxpbmplcm5hIGkgaMOlcmtsaXBwbmluZ2VuIG9jaCBuYWNrZW4gbWVkIHJhayByYWtoeXZlbC5cIixcclxuICAgICAgdGltZTogXCIxNW1pblwiLFxyXG4gICAgICBwcmlzOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNrw6RnZ3RyaW1cIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJLb25zdWx0YXRpb24sIFRyaW1uaW5nIGF2IHNrw6RnZ2V0IHRpbGwgw7Zuc2thZCBsw6RuZ2QsIHZhcm0gaGFuZGR1ayBvY2ggZGVmaW5pZXJpbmcgYXYgc2vDpGdnbGluamVuIG1lZCBldHQgcmFrYmxhZC5cIixcclxuICAgICAgdGltZTogXCIzMG1pblwiLFxyXG4gICAgICBwcmlzOiBcIjMwMCBrclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNsw6R0cmFrbmluZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIktvbnN1bHRhdGlvbiwgYXZrb3BwbGFuZGUgaGFuZGR1a2jDpGZ0bmluZywgZsO2cnNrw6RybmluZ3NvbGphIG9jaCB2YXJtIHNrdW0gZnLDpW4gZW4gZXhmb2xpZXJhbmRlIGJhZGdlcmjDpXJib3JzdGUuIETDpHJlZnRlciBnw6VyIHJha2JsYWRlZCBtZWQga29ybmV0IG9jaCB0YXIgYm9ydCBldmVudHVlbGxhIHN0dWJiYXIuIEbDpHJkaWcgbWVkIGVuIHVwcGZyaXNrYW5kZSBreWxkIGhhbmRkdWtzbGluZG5pbmcgb2NoIGVuIFByZW1pdW0gQWZ0ZXItU2hhdmUgbG90aW9uLlwiLFxyXG4gICAgICB0aW1lOiBcIjMwbWluXCIsXHJcbiAgICAgIHByaXM6IFwiNDAwIGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiS2xpcHBuaW5nICsgU2vDpGdndHJpbVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkLDtnJqYSBtZWQgZW4gb3JkZW50bGlnIGtvbnN1bHRhdGlvbiBvY2ggc2VkYW4gYW52w6RuZGEgdHJhZGl0aW9uZWxsYSBiYXJiZXJpbmdzbWV0b2RlciBzb20gYW52w6RuZHMgZsO2ciBhdHQgc2tyw6RkZGFyc3kgZGV0IMO2bnNrYWRlIHV0c2VlbmRldCwgcHJlcGFyZXJhcyBtZWQgYWxsYSBwcmVtaXVtaMOlciBvY2ggc2vDpGdncHJvZHVrdGVyLCBvY2ggc2x1dGFyIG1lZCBlbiBrbGFzc2lzayByYWtoeXZlbCByYWthIHJ1bnQgaGFsc2VuIG9jaCBuYWNrZWhhbHNlbi5cIixcclxuICAgICAgdGltZTogXCIxaCAxNW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjcwMCBrclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIktsaXBwbmluZyArIFNsw6R0cmFrbmluZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkRldCBow6RyIMOkciB2w6VyIHRha2UgcMOlIGRlbiBrbGFzc2lza2EgZnJpc3lyZW4gb2NoIGFmZsOkcnNtYW5lbnMgbG9vay5cIixcclxuICAgICAgdGltZTogXCIxaCAzMG1pblwiLFxyXG4gICAgICBwcmlzOiBcIjgwMCBrclwiXHJcbiAgICB9XHJcbiAgXSxcclxuICBzcGVjaWFsOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVmF4bmluZyDDlnJvbi1LaW5kXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkVuIGJlaGFuZGxpbmcgc29tIHRvdWNoYXIgdXBwIG9jaCBmcmFtaMOkdmVyIGRpZ1wiLFxyXG4gICAgICB0aW1lOiBcIjE1bWluXCIsXHJcbiAgICAgIHByaXM6IFwiMTIwIGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVHLDpWRuaW5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRyw6VkbmluZy5cIixcclxuICAgICAgdGltZTogXCIxNW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjEyMCBrclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlN0eWxpbmdcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiVGFyIGZyYW0gZGV0IGLDpHN0YSB1ciBkaW4gZnJpc3lyXCIsXHJcbiAgICAgIHRpbWU6IFwiMTVtaW5cIixcclxuICAgICAgcHJpczogXCIxMjAga3JcIlxyXG4gICAgfVxyXG4gIF1cclxufTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\services.js */",
        __self: this
      }));
    }
  }]);

  return Services;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Services);
var staticServices = {
  vanlig: [{
    name: "Klippning",
    description: "Börja med ett ordentligt samråd, och sedan använda traditionella barberingsmetoder som används för att skräddarsy kundernas önskade blick, preparerade med premiumhårprodukter, och slutar med en klassisk rakning på nacken.",
    time: "45min",
    pris: "480 kr"
  }, {
    name: "Buzz Cut",
    description: "Börja med en konsultation, sedan tar vi samma längd över hela huvudet med en klippmaskin, följt av att detaljera de yttre linjerna i hårklippningen och nacken med rak rakhyvel.",
    time: "15min",
    pris: ""
  }, {
    name: "Skäggtrim",
    description: "Konsultation, Trimning av skägget till önskad längd, varm handduk och definiering av skägglinjen med ett rakblad.",
    time: "30min",
    pris: "300 kr"
  }, {
    name: "Slätrakning",
    description: "Konsultation, avkopplande handdukhäftning, förskärningsolja och varm skum från en exfolierande badgerhårborste. Därefter går rakbladed med kornet och tar bort eventuella stubbar. Färdig med en uppfriskande kyld handdukslindning och en Premium After-Shave lotion.",
    time: "30min",
    pris: "400 kr"
  }, {
    name: "Klippning + Skäggtrim",
    description: "Börja med en ordentlig konsultation och sedan använda traditionella barberingsmetoder som används för att skräddarsy det önskade utseendet, prepareras med alla premiumhår och skäggprodukter, och slutar med en klassisk rakhyvel raka runt halsen och nackehalsen.",
    time: "1h 15min",
    pris: "700 kr"
  }, {
    name: "Klippning + Slätrakning",
    description: "Det här är vår take på den klassiska frisyren och affärsmanens look.",
    time: "1h 30min",
    pris: "800 kr"
  }],
  special: [{
    name: "Vaxning Öron-Kind",
    description: "En behandling som touchar upp och framhäver dig",
    time: "15min",
    pris: "120 kr"
  }, {
    name: "Trådning",
    description: "Trådning.",
    time: "15min",
    pris: "120 kr"
  }, {
    name: "Styling",
    description: "Tar fram det bästa ur din frisyr",
    time: "15min",
    pris: "120 kr"
  }]
};
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/services")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=services.js.1aafd34cd8a1383b22b7.hot-update.js.map