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
        className: "jsx-171467435",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-171467435",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-171467435",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "V\xE5ra Tj\xE4nster"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-171467435" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-171467435" + " " + "service-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, Object.keys(this.state.services).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: key,
          className: "jsx-171467435" + " " + "service-type",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "jsx-171467435",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, key), _this2.state.services[key].map(function (service, servKey) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: servKey,
            className: "jsx-171467435" + " " + "service",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-171467435" + " " + "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }, service.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-171467435" + " " + "description",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, service.description, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-171467435" + " " + "time",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: "/static/imgs/clock.png",
            alt: "",
            className: "jsx-171467435",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
            className: "jsx-171467435",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, service.time))));
        }));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "171467435",
        css: "#services.jsx-171467435{min-height:1000px;position:relative;background-image:url(/static/imgs/6.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-171467435{padding:100px 0;}h1.jsx-171467435{color:#fff;position:relative;z-index:3;}h2.jsx-171467435{margin-top:80px;text-transform:uppercase;font-size:30px;font-weight:bold;}#services.jsx-171467435:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}.container.jsx-171467435{position:relative;z-index:3;color:#fff;width:95%;margin:0 auto;}.service-container.jsx-171467435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.service-type.jsx-171467435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;max-width:600px;}.service.jsx-171467435{padding:20px 40px;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:600px;background:#f9f9f9;color:#000;text-align:left;margin:0 auto;margin-bottom:25px;}.service.jsx-171467435:last-of-type{margin-bottom:0;}@media screen and (min-width:1050px){.service.jsx-171467435{-webkit-flex-basis:40%;-ms-flex-preferred-size:40%;flex-basis:40%;}}.name.jsx-171467435{font-size:28px;font-weight:bold;margin-bottom:15px;}.description.jsx-171467435{color:#373d3f;}.price.jsx-171467435{font-weight:bold;}.time.jsx-171467435{margin-top:20px;font-size:18px;position:relative;}.time.jsx-171467435 img.jsx-171467435{position:relative;top:3px;width:20px;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXHNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDb0IsQUFHK0IsQUFRRixBQUlMLEFBS0ssQUFPTCxBQVdPLEFBUUwsQUFNQSxBQU9LLEFBV0YsQUFLQyxBQUtGLEFBTUQsQUFJRyxBQUdELEFBTUUsV0FuRkEsQUFZQSxHQTJEcEIsQ0FObUIsQ0FyRW5CLEFBUzJCLEFBa0QzQixBQXVCaUIsQ0FIakIsQ0F2Rm9CLEFBbUNSLEFBcUJNLEFBd0NSLFFBQ0csRUE3REEsQ0F2QkQsQUFZSixFQWtFWSxDQWJDLEdBcERWLENBekJnQyxDQWlHdkIsRUFwRnBCLEFBdUJZLEVBbkJLLEdBU1AsS0FXTSxBQXNEaEIsRUFiQSxDQW5EUyxHQXVFVCxDQWhGbUIsR0FVYSxJQVVoQyxHQWlDRSxPQXBERixDQXVCaUIsQUFNTyxHQS9DSyxTQTRCakIsQ0EyQk0sU0ExQmxCLE9BMkJxQixDQXZEUyxrQkF3RGpCLFNBZmtCLENBeENQLENBd0ROLGdCQUNGLEdBWGUsRUE3Qy9CLFNBeURxQixtQkFDckIsd0VBbEJBLHFCQU1rQixnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5jbGFzcyBTZXJ2aWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzZXJ2aWNlczogc3RhdGljU2VydmljZXNcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHt9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBpZD1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGgxPlbDpXJhIFRqw6Ruc3RlcjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuc2VydmljZXMpLm1hcChrZXkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtdHlwZVwiIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2tleX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlcnZpY2VzW2tleV0ubWFwKChzZXJ2aWNlLCBzZXJ2S2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VcIiBrZXk9e3NlcnZLZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57c2VydmljZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2UuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1ncy9jbG9jay5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57c2VydmljZS50aW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAjc2VydmljZXMge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1ncy82LmpwZyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjc2VydmljZXM6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VydmljZS10eXBlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VydmljZTpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNTBweCkge1xyXG4gICAgICAgICAgICAuc2VydmljZSB7XHJcbiAgICAgICAgICAgICAgZmxleC1iYXNpczogNDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzczZDNmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGltZSBpbWcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XHJcblxyXG5sZXQgc3RhdGljU2VydmljZXMgPSB7XHJcbiAgdmFubGlnOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiS2xpcHBuaW5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQsO2cmphIG1lZCBldHQgb3JkZW50bGlndCBzYW1yw6VkLCBvY2ggc2VkYW4gYW52w6RuZGEgdHJhZGl0aW9uZWxsYSBiYXJiZXJpbmdzbWV0b2RlciBzb20gYW52w6RuZHMgZsO2ciBhdHQgc2tyw6RkZGFyc3kga3VuZGVybmFzIMO2bnNrYWRlIGJsaWNrLCBwcmVwYXJlcmFkZSBtZWQgcHJlbWl1bWjDpXJwcm9kdWt0ZXIsIG9jaCBzbHV0YXIgbWVkIGVuIGtsYXNzaXNrIHJha25pbmcgcMOlIG5hY2tlbi5cIixcclxuICAgICAgdGltZTogXCI0NW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjQ4MGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQnV6eiBDdXRcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJCw7ZyamEgbWVkIGVuIGtvbnN1bHRhdGlvbiwgc2VkYW4gdGFyIHZpIHNhbW1hIGzDpG5nZCDDtnZlciBoZWxhIGh1dnVkZXQgbWVkIGVuIGtsaXBwbWFza2luLCBmw7ZsanQgYXYgYXR0IGRldGFsamVyYSBkZSB5dHRyZSBsaW5qZXJuYSBpIGjDpXJrbGlwcG5pbmdlbiBvY2ggbmFja2VuIG1lZCByYWsgcmFraHl2ZWwuXCIsXHJcbiAgICAgIHRpbWU6IFwiMTVtaW5cIixcclxuICAgICAgcHJpczogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTa8OkZ2d0cmltXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiS29uc3VsdGF0aW9uLCBUcmltbmluZyBhdiBza8OkZ2dldCB0aWxsIMO2bnNrYWQgbMOkbmdkLCB2YXJtIGhhbmRkdWsgb2NoIGRlZmluaWVyaW5nIGF2IHNrw6RnZ2xpbmplbiBtZWQgZXR0IHJha2JsYWQuXCIsXHJcbiAgICAgIHRpbWU6IFwiMzBtaW5cIixcclxuICAgICAgcHJpczogXCIzMDBrclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNsw6R0cmFrbmluZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIktvbnN1bHRhdGlvbiwgYXZrb3BwbGFuZGUgaGFuZGR1a2jDpGZ0bmluZywgZsO2cnNrw6RybmluZ3NvbGphIG9jaCB2YXJtIHNrdW0gZnLDpW4gZW4gZXhmb2xpZXJhbmRlIGJhZGdlcmjDpXJib3JzdGUuIETDpHJlZnRlciBnw6VyIHJha2JsYWRlZCBtZWQga29ybmV0IG9jaCB0YXIgYm9ydCBldmVudHVlbGxhIHN0dWJiYXIuIEbDpHJkaWcgbWVkIGVuIHVwcGZyaXNrYW5kZSBreWxkIGhhbmRkdWtzbGluZG5pbmcgb2NoIGVuIFByZW1pdW0gQWZ0ZXItU2hhdmUgbG90aW9uLlwiLFxyXG4gICAgICB0aW1lOiBcIjMwbWluXCIsXHJcbiAgICAgIHByaXM6IFwiNDAwa3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJLbGlwcG5pbmcgKyBTa8OkZ2d0cmltXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQsO2cmphIG1lZCBlbiBvcmRlbnRsaWcga29uc3VsdGF0aW9uIG9jaCBzZWRhbiBhbnbDpG5kYSB0cmFkaXRpb25lbGxhIGJhcmJlcmluZ3NtZXRvZGVyIHNvbSBhbnbDpG5kcyBmw7ZyIGF0dCBza3LDpGRkYXJzeSBkZXQgw7Zuc2thZGUgdXRzZWVuZGV0LCBwcmVwYXJlcmFzIG1lZCBhbGxhIHByZW1pdW1ow6VyIG9jaCBza8OkZ2dwcm9kdWt0ZXIsIG9jaCBzbHV0YXIgbWVkIGVuIGtsYXNzaXNrIHJha2h5dmVsIHJha2EgcnVudCBoYWxzZW4gb2NoIG5hY2tlaGFsc2VuLlwiLFxyXG4gICAgICB0aW1lOiBcIjFoIDE1bWluXCIsXHJcbiAgICAgIHByaXM6IFwiNzAwa3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJLbGlwcG5pbmcgKyBTbMOkdHJha25pbmdcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJEZXQgaMOkciDDpHIgdsOlciB0YWtlIHDDpSBkZW4ga2xhc3Npc2thIGZyaXN5cmVuIG9jaCBhZmbDpHJzbWFuZW5zIGxvb2suXCIsXHJcbiAgICAgIHRpbWU6IFwiMWggMzBtaW5cIixcclxuICAgICAgcHJpczogXCI4MDBrclwiXHJcbiAgICB9XHJcbiAgXSxcclxuICBzcGVjaWFsOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVmF4bmluZyDDlnJvbi1LaW5kXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkVuIGJlaGFuZGxpbmcgc29tIHRvdWNoYXIgdXBwIG9jaCBmcmFtaMOkdmVyIGRpZ1wiLFxyXG4gICAgICB0aW1lOiBcIjE1bWluXCIsXHJcbiAgICAgIHByaXM6IFwiMTIwa3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJUcsOlZG5pbmdcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiVHLDpWRuaW5nLlwiLFxyXG4gICAgICB0aW1lOiBcIjE1bWluXCIsXHJcbiAgICAgIHByaXM6IFwiMTIwa3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTdHlsaW5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRhciBmcmFtIGRldCBiw6RzdGEgdXIgZGluIGZyaXN5clwiLFxyXG4gICAgICB0aW1lOiBcIjE1bWluXCIsXHJcbiAgICAgIHByaXM6IFwiMTIwa3JcIlxyXG4gICAgfVxyXG4gIF1cclxufTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\services.js */",
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
    pris: "480kr"
  }, {
    name: "Buzz Cut",
    description: "Börja med en konsultation, sedan tar vi samma längd över hela huvudet med en klippmaskin, följt av att detaljera de yttre linjerna i hårklippningen och nacken med rak rakhyvel.",
    time: "15min",
    pris: ""
  }, {
    name: "Skäggtrim",
    description: "Konsultation, Trimning av skägget till önskad längd, varm handduk och definiering av skägglinjen med ett rakblad.",
    time: "30min",
    pris: "300kr"
  }, {
    name: "Slätrakning",
    description: "Konsultation, avkopplande handdukhäftning, förskärningsolja och varm skum från en exfolierande badgerhårborste. Därefter går rakbladed med kornet och tar bort eventuella stubbar. Färdig med en uppfriskande kyld handdukslindning och en Premium After-Shave lotion.",
    time: "30min",
    pris: "400kr"
  }, {
    name: "Klippning + Skäggtrim",
    description: "Börja med en ordentlig konsultation och sedan använda traditionella barberingsmetoder som används för att skräddarsy det önskade utseendet, prepareras med alla premiumhår och skäggprodukter, och slutar med en klassisk rakhyvel raka runt halsen och nackehalsen.",
    time: "1h 15min",
    pris: "700kr"
  }, {
    name: "Klippning + Slätrakning",
    description: "Det här är vår take på den klassiska frisyren och affärsmanens look.",
    time: "1h 30min",
    pris: "800kr"
  }],
  special: [{
    name: "Vaxning Öron-Kind",
    description: "En behandling som touchar upp och framhäver dig",
    time: "15min",
    pris: "120kr"
  }, {
    name: "Trådning",
    description: "Trådning.",
    time: "15min",
    pris: "120kr"
  }, {
    name: "Styling",
    description: "Tar fram det bästa ur din frisyr",
    time: "15min",
    pris: "120kr"
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
//# sourceMappingURL=services.js.32c39205fb703a9e7c3e.hot-update.js.map