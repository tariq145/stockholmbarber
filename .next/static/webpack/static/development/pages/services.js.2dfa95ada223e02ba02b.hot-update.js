webpackHotUpdate("static\\development\\pages\\services.js",{

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\services.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sortServices", function (raw) {
      var ret = {
        1: [],
        2: []
      };
      Object.keys(raw).map(function (key) {});
    });

    return _this;
  }

  _createClass(Services, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var tokenRequest, _ref, token, userRequest, _ref2, services;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                tokenRequest = {
                  jsonrpc: "2.0",
                  method: "getToken",
                  params: ["stockholmbarber", "d7502608fde2546f82521763aee405e88d6b8035fa7367224022dfbf4308070c"],
                  id: 2
                };
                _context.next = 3;
                return jquery__WEBPACK_IMPORTED_MODULE_4___default.a.ajax({
                  url: "https://user-api.simplybook.me/login",
                  contentType: "application/json",
                  type: "POST",
                  processData: false,
                  dataType: "json",
                  cache: false,
                  data: JSON.stringify(tokenRequest),
                  headers: {},
                  async: true
                });

              case 3:
                _ref = _context.sent;
                token = _ref.result;
                userRequest = {
                  jsonrpc: "2.0",
                  method: "getEventList",
                  params: [],
                  id: 2
                };
                _context.next = 8;
                return jquery__WEBPACK_IMPORTED_MODULE_4___default.a.ajax({
                  url: "https://user-api.simplybook.me/",
                  contentType: "application/json",
                  type: "POST",
                  processData: false,
                  dataType: "json",
                  cache: false,
                  data: JSON.stringify(userRequest),
                  headers: {
                    "X-Company-Login": "stockholmbarber",
                    "X-Token": token
                  },
                  async: true
                });

              case 8:
                _ref2 = _context.sent;
                services = _ref2.result;
                console.log(services);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "services",
        className: "jsx-2194368517",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
        className: "jsx-2194368517",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-2194368517",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "V\xE5ra Tj\xE4nster"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2194368517" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2194368517" + " " + "service-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, Object.keys(this.state.services).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: key,
          className: "jsx-2194368517" + " " + "service-type",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
          className: "jsx-2194368517",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, key), _this2.state.services[key].map(function (service, servKey) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            key: servKey,
            className: "jsx-2194368517" + " " + "service",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "jsx-2194368517" + " " + "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          }, service.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "jsx-2194368517" + " " + "description",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, service.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "jsx-2194368517" + " " + "time",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
            src: "/static/imgs/clock.png",
            alt: "",
            className: "jsx-2194368517",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
            className: "jsx-2194368517",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, service.time)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "jsx-2194368517" + " " + "price",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, service.pris));
        }));
      }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2194368517",
        css: "#services.jsx-2194368517{min-height:1000px;position:relative;background-image:url(/static/imgs/6.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-2194368517{padding:140px 0;}h1.jsx-2194368517{color:#fff;position:relative;z-index:3;}h2.jsx-2194368517{margin-top:80px;text-transform:uppercase;font-size:30px;font-weight:bold;}#services.jsx-2194368517:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}.container.jsx-2194368517{position:relative;z-index:3;color:#fff;width:95%;margin:0 auto;}.service-container.jsx-2194368517{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.service-type.jsx-2194368517{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}.service.jsx-2194368517{padding:30px 40px;width:calc(100% - 80px);background:#f9f9f9;color:#000;text-align:left;margin:0 auto;margin-bottom:25px;position:relative;}.service.jsx-2194368517:last-of-type{margin-bottom:0;}@media screen and (min-width:950px){.service-type.jsx-2194368517{-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;}}.name.jsx-2194368517{font-size:28px;font-weight:bold;margin-bottom:15px;}.description.jsx-2194368517{color:#373d3f;overflow:hidden;position:relative;}.description.jsx-2194368517:after{content:\"\";position:absolute;bottom:25px;right:0;height:15px;background:linear-gradient( to bottom, rgba(249,249,249,0) 0%, rgba(249,249,249,1) 100% );}.price.jsx-2194368517{font-weight:bold;font-size:18px;position:absolute;right:40px;bottom:30px;}.time.jsx-2194368517{margin-top:20px;font-size:18px;position:relative;}.time.jsx-2194368517 img.jsx-2194368517{position:relative;top:3px;width:20px;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXHNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGb0IsQUFHK0IsQUFRRixBQUlMLEFBS0ssQUFPTCxBQVdPLEFBUUwsQUFNRyxBQUlFLEFBV0YsQUFLQyxBQUtGLEFBTUQsQUFNSCxBQWFNLEFBUUQsQUFNRSxXQXBHQSxBQVlBLEFBOERBLEdBTkYsQ0FOQyxDQWxFbkIsQUFTMkIsQUErQzNCLEFBMkNpQixDQVJBLENBbkdHLEFBbUNSLEFBa0JjLEFBNERoQixRQUNHLEVBOUVBLENBdkJELEFBWUosQUE4RE0sQ0FOTSxDQTJCQSxDQWpDQyxBQXlCRCxHQTFFVCxDQXpCZ0MsQ0FrSHZCLEVBckdwQixBQXVCWSxFQW5CSyxBQXNFUCxDQWxDVyxFQTNCWCxJQXVEVixDQTVDZ0IsQUFtREYsQUFvQmQsQ0FSYSxDQXpCYixDQWhEUyxHQXdGVCxDQWpHbUIsR0FVYSxFQTBCbkIsQUF1Q1YsQUFRVyxFQS9EZCxHQThCRSxHQXBCRixHQU9rQixDQXBDbEIsQUFtRkEsQ0E1RGlCLEdBekNZLFNBNEJqQixFQTJCSSxRQTFCaEIsTUEyQnFCLEVBdkRTLGlCQXdEVixVQWZXLENBeENQLE9Bd0R4QixZQW1DQSxHQTFGQSxvR0F3Q0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5jbGFzcyBTZXJ2aWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzZXJ2aWNlczogc3RhdGljU2VydmljZXNcclxuICB9O1xyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGxldCB0b2tlblJlcXVlc3QgPSB7XHJcbiAgICAgIGpzb25ycGM6IFwiMi4wXCIsXHJcbiAgICAgIG1ldGhvZDogXCJnZXRUb2tlblwiLFxyXG4gICAgICBwYXJhbXM6IFtcclxuICAgICAgICBcInN0b2NraG9sbWJhcmJlclwiLFxyXG4gICAgICAgIFwiZDc1MDI2MDhmZGUyNTQ2ZjgyNTIxNzYzYWVlNDA1ZTg4ZDZiODAzNWZhNzM2NzIyNDAyMmRmYmY0MzA4MDcwY1wiXHJcbiAgICAgIF0sXHJcbiAgICAgIGlkOiAyXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB7IHJlc3VsdDogdG9rZW4gfSA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgIHVybDogXCJodHRwczovL3VzZXItYXBpLnNpbXBseWJvb2subWUvbG9naW5cIixcclxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodG9rZW5SZXF1ZXN0KSxcclxuICAgICAgaGVhZGVyczoge30sXHJcbiAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgdXNlclJlcXVlc3QgPSB7XHJcbiAgICAgIGpzb25ycGM6IFwiMi4wXCIsXHJcbiAgICAgIG1ldGhvZDogXCJnZXRFdmVudExpc3RcIixcclxuICAgICAgcGFyYW1zOiBbXSxcclxuICAgICAgaWQ6IDJcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHsgcmVzdWx0OiBzZXJ2aWNlcyB9ID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgdXJsOiBcImh0dHBzOi8vdXNlci1hcGkuc2ltcGx5Ym9vay5tZS9cIixcclxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodXNlclJlcXVlc3QpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJYLUNvbXBhbnktTG9naW5cIjogXCJzdG9ja2hvbG1iYXJiZXJcIixcclxuICAgICAgICBcIlgtVG9rZW5cIjogdG9rZW5cclxuICAgICAgfSxcclxuICAgICAgYXN5bmM6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHNlcnZpY2VzKTtcclxuICB9XHJcblxyXG4gIHNvcnRTZXJ2aWNlcyA9IHJhdyA9PiB7XHJcbiAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAxOiBbXSxcclxuICAgICAgMjogW11cclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhyYXcpLm1hcChrZXkgPT4ge30pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBpZD1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGgxPlbDpXJhIFRqw6Ruc3RlcjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuc2VydmljZXMpLm1hcChrZXkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtdHlwZVwiIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2tleX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlcnZpY2VzW2tleV0ubWFwKChzZXJ2aWNlLCBzZXJ2S2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VcIiBrZXk9e3NlcnZLZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57c2VydmljZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWdzL2Nsb2NrLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57c2VydmljZS50aW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPntzZXJ2aWNlLnByaXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgI3NlcnZpY2VzIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvNi5qcGcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTQwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI3NlcnZpY2VzOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZXJ2aWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2UtdHlwZSB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2U6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICAuc2VydmljZS10eXBlIHtcclxuICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzNzNkM2Y7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZGVzY3JpcHRpb246YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIHRvIGJvdHRvbSxcclxuICAgICAgICAgICAgICByZ2JhKDI0OSwgMjQ5LCAyNDksIDApIDAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjQ5LCAyNDksIDI0OSwgMSkgMTAwJVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aW1lIGltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlcztcclxuXHJcbmxldCBzdGF0aWNTZXJ2aWNlcyA9IHtcclxuICB2YW5saWc6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJLbGlwcG5pbmdcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJCw7ZyamEgbWVkIGV0dCBvcmRlbnRsaWd0IHNhbXLDpWQsIG9jaCBzZWRhbiBhbnbDpG5kYSB0cmFkaXRpb25lbGxhIGJhcmJlcmluZ3NtZXRvZGVyIHNvbSBhbnbDpG5kcyBmw7ZyIGF0dCBza3LDpGRkYXJzeSBrdW5kZXJuYXMgw7Zuc2thZGUgYmxpY2ssIHByZXBhcmVyYWRlIG1lZCBwcmVtaXVtaMOlcnByb2R1a3Rlciwgb2NoIHNsdXRhciBtZWQgZW4ga2xhc3Npc2sgcmFrbmluZyBww6UgbmFja2VuLlwiLFxyXG4gICAgICB0aW1lOiBcIjQ1bWluXCIsXHJcbiAgICAgIHByaXM6IFwiNDgwIGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQnV6eiBDdXRcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJCw7ZyamEgbWVkIGVuIGtvbnN1bHRhdGlvbiwgc2VkYW4gdGFyIHZpIHNhbW1hIGzDpG5nZCDDtnZlciBoZWxhIGh1dnVkZXQgbWVkIGVuIGtsaXBwbWFza2luLCBmw7ZsanQgYXYgYXR0IGRldGFsamVyYSBkZSB5dHRyZSBsaW5qZXJuYSBpIGjDpXJrbGlwcG5pbmdlbiBvY2ggbmFja2VuIG1lZCByYWsgcmFraHl2ZWwuXCIsXHJcbiAgICAgIHRpbWU6IFwiMTVtaW5cIixcclxuICAgICAgcHJpczogXCIyMDAga3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTa8OkZ2d0cmltXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiS29uc3VsdGF0aW9uLCBUcmltbmluZyBhdiBza8OkZ2dldCB0aWxsIMO2bnNrYWQgbMOkbmdkLCB2YXJtIGhhbmRkdWsgb2NoIGRlZmluaWVyaW5nIGF2IHNrw6RnZ2xpbmplbiBtZWQgZXR0IHJha2JsYWQuXCIsXHJcbiAgICAgIHRpbWU6IFwiMzBtaW5cIixcclxuICAgICAgcHJpczogXCIzMDAga3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTbMOkdHJha25pbmdcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJLb25zdWx0YXRpb24sIGF2a29wcGxhbmRlIGhhbmRkdWtow6RmdG5pbmcsIGbDtnJza8Okcm5pbmdzb2xqYSBvY2ggdmFybSBza3VtIGZyw6VuIGVuIGV4Zm9saWVyYW5kZSBiYWRnZXJow6VyYm9yc3RlLiBEw6RyZWZ0ZXIgZ8OlciByYWtibGFkZWQgbWVkIGtvcm5ldCBvY2ggdGFyIGJvcnQgZXZlbnR1ZWxsYSBzdHViYmFyLiBGw6RyZGlnIG1lZCBlbiB1cHBmcmlza2FuZGUga3lsZCBoYW5kZHVrc2xpbmRuaW5nIG9jaCBlbiBQcmVtaXVtIEFmdGVyLVNoYXZlIGxvdGlvbi5cIixcclxuICAgICAgdGltZTogXCIzMG1pblwiLFxyXG4gICAgICBwcmlzOiBcIjQwMCBrclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIktsaXBwbmluZyArIFNrw6RnZ3RyaW1cIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJCw7ZyamEgbWVkIGVuIG9yZGVudGxpZyBrb25zdWx0YXRpb24gb2NoIHNlZGFuIGFudsOkbmRhIHRyYWRpdGlvbmVsbGEgYmFyYmVyaW5nc21ldG9kZXIgc29tIGFudsOkbmRzIGbDtnIgYXR0IHNrcsOkZGRhcnN5IGRldCDDtm5za2FkZSB1dHNlZW5kZXQsIHByZXBhcmVyYXMgbWVkIGFsbGEgcHJlbWl1bWjDpXIgb2NoIHNrw6RnZ3Byb2R1a3Rlciwgb2NoIHNsdXRhciBtZWQgZW4ga2xhc3Npc2sgcmFraHl2ZWwgcmFrYSBydW50IGhhbHNlbiBvY2ggbmFja2VoYWxzZW4uXCIsXHJcbiAgICAgIHRpbWU6IFwiMWggMTVtaW5cIixcclxuICAgICAgcHJpczogXCI3MDAga3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJLbGlwcG5pbmcgKyBTbMOkdHJha25pbmdcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJEZXQgaMOkciDDpHIgdsOlciB0YWtlIHDDpSBkZW4ga2xhc3Npc2thIGZyaXN5cmVuIG9jaCBhZmbDpHJzbWFuZW5zIGxvb2suXCIsXHJcbiAgICAgIHRpbWU6IFwiMWggMzBtaW5cIixcclxuICAgICAgcHJpczogXCI4MDAga3JcIlxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3BlY2lhbDogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlZheG5pbmcgw5Zyb24tS2luZFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJFbiBiZWhhbmRsaW5nIHNvbSB0b3VjaGFyIHVwcCBvY2ggZnJhbWjDpHZlciBkaWdcIixcclxuICAgICAgdGltZTogXCIxNW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjEyMCBrclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlRyw6VkbmluZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJUcsOlZG5pbmcuXCIsXHJcbiAgICAgIHRpbWU6IFwiMTVtaW5cIixcclxuICAgICAgcHJpczogXCIxMjAga3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTdHlsaW5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRhciBmcmFtIGRldCBiw6RzdGEgdXIgZGluIGZyaXN5clwiLFxyXG4gICAgICB0aW1lOiBcIjE1bWluXCIsXHJcbiAgICAgIHByaXM6IFwiMTIwIGtyXCJcclxuICAgIH1cclxuICBdXHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\services.js */",
        __self: this
      }));
    }
  }]);

  return Services;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

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
    pris: "200 kr"
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
//# sourceMappingURL=services.js.2dfa95ada223e02ba02b.hot-update.js.map