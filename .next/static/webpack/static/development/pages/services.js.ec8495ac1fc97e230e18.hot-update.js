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
        className: "jsx-3216817676",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-3216817676",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3216817676",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "V\xE5ra Tj\xE4nster"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3216817676" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3216817676" + " " + "service-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, Object.keys(this.state.services).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: key,
          className: "jsx-3216817676" + " " + "service-type",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "jsx-3216817676",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, key), _this2.state.services[key].map(function (service, servKey) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: servKey,
            className: "jsx-3216817676" + " " + "service",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-3216817676" + " " + "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }, service.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-3216817676" + " " + "description",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, service.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-3216817676" + " " + "time",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: "/static/imgs/clock.png",
            alt: "",
            className: "jsx-3216817676",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
            className: "jsx-3216817676",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }, service.time)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-3216817676" + " " + "price",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, service.pris));
        }));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3216817676",
        css: "#services.jsx-3216817676{min-height:1000px;position:relative;background-image:url(/static/imgs/6.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-3216817676{padding:140px 0;}h1.jsx-3216817676{color:#fff;position:relative;z-index:3;}h2.jsx-3216817676{margin-top:80px;text-transform:uppercase;font-size:30px;font-weight:bold;}#services.jsx-3216817676:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}.container.jsx-3216817676{position:relative;z-index:3;color:#fff;width:95%;margin:0 auto;}.service-container.jsx-3216817676{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.service-type.jsx-3216817676{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}.service.jsx-3216817676{padding:30px 40px;width:calc(100% - 80px);background:#f9f9f9;color:#000;text-align:left;margin:0 auto;margin-bottom:25px;}.service.jsx-3216817676:last-of-type{margin-bottom:0;}@media screen and (min-width:950px){.service-type.jsx-3216817676{-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;}}.name.jsx-3216817676{font-size:28px;font-weight:bold;margin-bottom:15px;}.description.jsx-3216817676{color:#373d3f;overflow:hidden;position:relative;}.description.jsx-3216817676:after{content:\"\";position:absolute;bottom:25px;right:0;height:15px;background:linear-gradient( to bottom, rgba(249,249,249,0) 0%, rgba(249,249,249,1) 100% );}.price.jsx-3216817676{font-weight:bold;font-size:18px;position:absolute;right:40px;top:0;}.time.jsx-3216817676{margin-top:20px;font-size:18px;position:relative;}.time.jsx-3216817676 img.jsx-3216817676{position:relative;top:3px;width:20px;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXHNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDb0IsQUFHK0IsQUFRRixBQUlMLEFBS0ssQUFPTCxBQVdPLEFBUUwsQUFNRyxBQUlFLEFBVUYsQUFLQyxBQUtGLEFBTUQsQUFNSCxBQWFNLEFBUUQsQUFNRSxXQW5HQSxBQVlBLEFBNkRBLEdBTkYsQ0FOQyxDQWpFbkIsQUFTMkIsQUE4QzNCLEFBMkNpQixDQVJBLENBbEdHLEFBbUNSLEFBa0JjLEFBMkRoQixRQUNHLEVBN0VBLENBdkJELEFBWUosQUE2RE0sQ0FOTSxDQTJCQSxDQWpDQyxBQXlCRCxHQXpFVCxDQXpCZ0MsQ0FpSHZCLEVBcEdwQixBQXVCWSxFQW5CSyxBQXFFUCxDQWpDVyxFQTNCWCxJQXNEVixDQTNDZ0IsQUFrREYsQUFvQmQsQ0FSYSxDQXpCYixDQS9DUyxHQXVGVCxDQWhHbUIsR0FVYSxFQTBCbkIsQUFzQ1YsQUFRSyxFQTlEUixHQTZCRSxDQWtDRixFQXJEQSxHQU9rQixDQXBDbEIsQ0F1QmlCLEdBekNZLFNBNEJqQixFQTJCSSxRQTFCaEIsTUEyQnFCLEVBdkRTLGlCQXdEOUIsVUFmK0IsQ0F4Q1AsbUJBMEZ4QixHQXpGQSxvR0F3Q0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5jbGFzcyBTZXJ2aWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzZXJ2aWNlczogc3RhdGljU2VydmljZXNcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHt9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBpZD1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGgxPlbDpXJhIFRqw6Ruc3RlcjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuc2VydmljZXMpLm1hcChrZXkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtdHlwZVwiIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2tleX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlcnZpY2VzW2tleV0ubWFwKChzZXJ2aWNlLCBzZXJ2S2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VcIiBrZXk9e3NlcnZLZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57c2VydmljZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWdzL2Nsb2NrLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57c2VydmljZS50aW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPntzZXJ2aWNlLnByaXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgI3NlcnZpY2VzIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvNi5qcGcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTQwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI3NlcnZpY2VzOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZXJ2aWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2UtdHlwZSB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZXJ2aWNlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICAgICAgLnNlcnZpY2UtdHlwZSB7XHJcbiAgICAgICAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzczZDNmO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9uOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICB0byBib3R0b20sXHJcbiAgICAgICAgICAgICAgcmdiYSgyNDksIDI0OSwgMjQ5LCAwKSAwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI0OSwgMjQ5LCAyNDksIDEpIDEwMCVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGltZSBpbWcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XHJcblxyXG5sZXQgc3RhdGljU2VydmljZXMgPSB7XHJcbiAgdmFubGlnOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiS2xpcHBuaW5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQsO2cmphIG1lZCBldHQgb3JkZW50bGlndCBzYW1yw6VkLCBvY2ggc2VkYW4gYW52w6RuZGEgdHJhZGl0aW9uZWxsYSBiYXJiZXJpbmdzbWV0b2RlciBzb20gYW52w6RuZHMgZsO2ciBhdHQgc2tyw6RkZGFyc3kga3VuZGVybmFzIMO2bnNrYWRlIGJsaWNrLCBwcmVwYXJlcmFkZSBtZWQgcHJlbWl1bWjDpXJwcm9kdWt0ZXIsIG9jaCBzbHV0YXIgbWVkIGVuIGtsYXNzaXNrIHJha25pbmcgcMOlIG5hY2tlbi5cIixcclxuICAgICAgdGltZTogXCI0NW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjQ4MCBrclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJ1enogQ3V0XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQsO2cmphIG1lZCBlbiBrb25zdWx0YXRpb24sIHNlZGFuIHRhciB2aSBzYW1tYSBsw6RuZ2Qgw7Z2ZXIgaGVsYSBodXZ1ZGV0IG1lZCBlbiBrbGlwcG1hc2tpbiwgZsO2bGp0IGF2IGF0dCBkZXRhbGplcmEgZGUgeXR0cmUgbGluamVybmEgaSBow6Vya2xpcHBuaW5nZW4gb2NoIG5hY2tlbiBtZWQgcmFrIHJha2h5dmVsLlwiLFxyXG4gICAgICB0aW1lOiBcIjE1bWluXCIsXHJcbiAgICAgIHByaXM6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU2vDpGdndHJpbVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIktvbnN1bHRhdGlvbiwgVHJpbW5pbmcgYXYgc2vDpGdnZXQgdGlsbCDDtm5za2FkIGzDpG5nZCwgdmFybSBoYW5kZHVrIG9jaCBkZWZpbmllcmluZyBhdiBza8OkZ2dsaW5qZW4gbWVkIGV0dCByYWtibGFkLlwiLFxyXG4gICAgICB0aW1lOiBcIjMwbWluXCIsXHJcbiAgICAgIHByaXM6IFwiMzAwIGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU2zDpHRyYWtuaW5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiS29uc3VsdGF0aW9uLCBhdmtvcHBsYW5kZSBoYW5kZHVraMOkZnRuaW5nLCBmw7Zyc2vDpHJuaW5nc29samEgb2NoIHZhcm0gc2t1bSBmcsOlbiBlbiBleGZvbGllcmFuZGUgYmFkZ2VyaMOlcmJvcnN0ZS4gRMOkcmVmdGVyIGfDpXIgcmFrYmxhZGVkIG1lZCBrb3JuZXQgb2NoIHRhciBib3J0IGV2ZW50dWVsbGEgc3R1YmJhci4gRsOkcmRpZyBtZWQgZW4gdXBwZnJpc2thbmRlIGt5bGQgaGFuZGR1a3NsaW5kbmluZyBvY2ggZW4gUHJlbWl1bSBBZnRlci1TaGF2ZSBsb3Rpb24uXCIsXHJcbiAgICAgIHRpbWU6IFwiMzBtaW5cIixcclxuICAgICAgcHJpczogXCI0MDAga3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJLbGlwcG5pbmcgKyBTa8OkZ2d0cmltXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQsO2cmphIG1lZCBlbiBvcmRlbnRsaWcga29uc3VsdGF0aW9uIG9jaCBzZWRhbiBhbnbDpG5kYSB0cmFkaXRpb25lbGxhIGJhcmJlcmluZ3NtZXRvZGVyIHNvbSBhbnbDpG5kcyBmw7ZyIGF0dCBza3LDpGRkYXJzeSBkZXQgw7Zuc2thZGUgdXRzZWVuZGV0LCBwcmVwYXJlcmFzIG1lZCBhbGxhIHByZW1pdW1ow6VyIG9jaCBza8OkZ2dwcm9kdWt0ZXIsIG9jaCBzbHV0YXIgbWVkIGVuIGtsYXNzaXNrIHJha2h5dmVsIHJha2EgcnVudCBoYWxzZW4gb2NoIG5hY2tlaGFsc2VuLlwiLFxyXG4gICAgICB0aW1lOiBcIjFoIDE1bWluXCIsXHJcbiAgICAgIHByaXM6IFwiNzAwIGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiS2xpcHBuaW5nICsgU2zDpHRyYWtuaW5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiRGV0IGjDpHIgw6RyIHbDpXIgdGFrZSBww6UgZGVuIGtsYXNzaXNrYSBmcmlzeXJlbiBvY2ggYWZmw6Ryc21hbmVucyBsb29rLlwiLFxyXG4gICAgICB0aW1lOiBcIjFoIDMwbWluXCIsXHJcbiAgICAgIHByaXM6IFwiODAwIGtyXCJcclxuICAgIH1cclxuICBdLFxyXG4gIHNwZWNpYWw6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJWYXhuaW5nIMOWcm9uLUtpbmRcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRW4gYmVoYW5kbGluZyBzb20gdG91Y2hhciB1cHAgb2NoIGZyYW1ow6R2ZXIgZGlnXCIsXHJcbiAgICAgIHRpbWU6IFwiMTVtaW5cIixcclxuICAgICAgcHJpczogXCIxMjAga3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJUcsOlZG5pbmdcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiVHLDpWRuaW5nLlwiLFxyXG4gICAgICB0aW1lOiBcIjE1bWluXCIsXHJcbiAgICAgIHByaXM6IFwiMTIwIGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3R5bGluZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJUYXIgZnJhbSBkZXQgYsOkc3RhIHVyIGRpbiBmcmlzeXJcIixcclxuICAgICAgdGltZTogXCIxNW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjEyMCBrclwiXHJcbiAgICB9XHJcbiAgXVxyXG59O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\services.js */",
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
//# sourceMappingURL=services.js.ec8495ac1fc97e230e18.hot-update.js.map