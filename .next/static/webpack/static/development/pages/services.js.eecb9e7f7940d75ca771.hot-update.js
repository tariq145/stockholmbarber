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
      services: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sortServices", function (raw) {
      var ret = {
        vanlig: [],
        special: []
      };
      Object.keys(raw).map(function (key) {
        if (raw[key].categories[0] == "1") {
          ret["vanlig"].push(raw[key]);
        } else {
          ret["special"].push(raw[key]);
        }
      });
      return ret;
    });

    return _this;
  }

  _createClass(Services, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var tokenRequest, _ref, token, userRequest, _ref2, services, sortedServices;

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
                sortedServices = this.sortServices(services);
                this.setState({
                  services: sortedServices
                });

              case 12:
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
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "services",
        className: "jsx-2194368517",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
        className: "jsx-2194368517",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, console.log(this.state.services), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-2194368517",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "V\xE5ra Tj\xE4nster"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2194368517" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2194368517" + " " + "service-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, Object.keys(this.state.services).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: key,
          className: "jsx-2194368517" + " " + "service-type",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
          className: "jsx-2194368517",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, key), _this2.state.services[key].map(function (service, servKey) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            key: servKey,
            className: "jsx-2194368517" + " " + "service",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "jsx-2194368517" + " " + "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, service.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "jsx-2194368517" + " " + "description",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, service.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "jsx-2194368517" + " " + "time",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
            src: "/static/imgs/clock.png",
            alt: "",
            className: "jsx-2194368517",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
            className: "jsx-2194368517",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, service.duration, " min")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "jsx-2194368517" + " " + "price",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, parseInt(service.price), " kr"));
        }));
      }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2194368517",
        css: "#services.jsx-2194368517{min-height:1000px;position:relative;background-image:url(/static/imgs/6.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-2194368517{padding:140px 0;}h1.jsx-2194368517{color:#fff;position:relative;z-index:3;}h2.jsx-2194368517{margin-top:80px;text-transform:uppercase;font-size:30px;font-weight:bold;}#services.jsx-2194368517:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}.container.jsx-2194368517{position:relative;z-index:3;color:#fff;width:95%;margin:0 auto;}.service-container.jsx-2194368517{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.service-type.jsx-2194368517{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}.service.jsx-2194368517{padding:30px 40px;width:calc(100% - 80px);background:#f9f9f9;color:#000;text-align:left;margin:0 auto;margin-bottom:25px;position:relative;}.service.jsx-2194368517:last-of-type{margin-bottom:0;}@media screen and (min-width:950px){.service-type.jsx-2194368517{-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;}}.name.jsx-2194368517{font-size:28px;font-weight:bold;margin-bottom:15px;}.description.jsx-2194368517{color:#373d3f;overflow:hidden;position:relative;}.description.jsx-2194368517:after{content:\"\";position:absolute;bottom:25px;right:0;height:15px;background:linear-gradient( to bottom, rgba(249,249,249,0) 0%, rgba(249,249,249,1) 100% );}.price.jsx-2194368517{font-weight:bold;font-size:18px;position:absolute;right:40px;bottom:30px;}.time.jsx-2194368517{margin-top:20px;font-size:18px;position:relative;}.time.jsx-2194368517 img.jsx-2194368517{position:relative;top:3px;width:20px;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXHNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlHb0IsQUFHK0IsQUFRRixBQUlMLEFBS0ssQUFPTCxBQVdPLEFBUUwsQUFNRyxBQUlFLEFBV0YsQUFLQyxBQUtGLEFBTUQsQUFNSCxBQWFNLEFBUUQsQUFNRSxXQXBHQSxBQVlBLEFBOERBLEdBTkYsQ0FOQyxDQWxFbkIsQUFTMkIsQUErQzNCLEFBMkNpQixDQVJBLENBbkdHLEFBbUNSLEFBa0JjLEFBNERoQixRQUNHLEVBOUVBLENBdkJELEFBWUosQUE4RE0sQ0FOTSxDQTJCQSxDQWpDQyxBQXlCRCxHQTFFVCxDQXpCZ0MsQ0FrSHZCLEVBckdwQixBQXVCWSxFQW5CSyxBQXNFUCxDQWxDVyxFQTNCWCxJQXVEVixDQTVDZ0IsQUFtREYsQUFvQmQsQ0FSYSxDQXpCYixDQWhEUyxHQXdGVCxDQWpHbUIsR0FVYSxFQTBCbkIsQUF1Q1YsQUFRVyxFQS9EZCxHQThCRSxHQXBCRixHQU9rQixDQXBDbEIsQUFtRkEsQ0E1RGlCLEdBekNZLFNBNEJqQixFQTJCSSxRQTFCaEIsTUEyQnFCLEVBdkRTLGlCQXdEVixVQWZXLENBeENQLE9Bd0R4QixZQW1DQSxHQTFGQSxvR0F3Q0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5jbGFzcyBTZXJ2aWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzZXJ2aWNlczoge31cclxuICB9O1xyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGxldCB0b2tlblJlcXVlc3QgPSB7XHJcbiAgICAgIGpzb25ycGM6IFwiMi4wXCIsXHJcbiAgICAgIG1ldGhvZDogXCJnZXRUb2tlblwiLFxyXG4gICAgICBwYXJhbXM6IFtcclxuICAgICAgICBcInN0b2NraG9sbWJhcmJlclwiLFxyXG4gICAgICAgIFwiZDc1MDI2MDhmZGUyNTQ2ZjgyNTIxNzYzYWVlNDA1ZTg4ZDZiODAzNWZhNzM2NzIyNDAyMmRmYmY0MzA4MDcwY1wiXHJcbiAgICAgIF0sXHJcbiAgICAgIGlkOiAyXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB7IHJlc3VsdDogdG9rZW4gfSA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgIHVybDogXCJodHRwczovL3VzZXItYXBpLnNpbXBseWJvb2subWUvbG9naW5cIixcclxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodG9rZW5SZXF1ZXN0KSxcclxuICAgICAgaGVhZGVyczoge30sXHJcbiAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgdXNlclJlcXVlc3QgPSB7XHJcbiAgICAgIGpzb25ycGM6IFwiMi4wXCIsXHJcbiAgICAgIG1ldGhvZDogXCJnZXRFdmVudExpc3RcIixcclxuICAgICAgcGFyYW1zOiBbXSxcclxuICAgICAgaWQ6IDJcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHsgcmVzdWx0OiBzZXJ2aWNlcyB9ID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgdXJsOiBcImh0dHBzOi8vdXNlci1hcGkuc2ltcGx5Ym9vay5tZS9cIixcclxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodXNlclJlcXVlc3QpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJYLUNvbXBhbnktTG9naW5cIjogXCJzdG9ja2hvbG1iYXJiZXJcIixcclxuICAgICAgICBcIlgtVG9rZW5cIjogdG9rZW5cclxuICAgICAgfSxcclxuICAgICAgYXN5bmM6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBzb3J0ZWRTZXJ2aWNlcyA9IHRoaXMuc29ydFNlcnZpY2VzKHNlcnZpY2VzKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VydmljZXM6IHNvcnRlZFNlcnZpY2VzIH0pO1xyXG4gIH1cclxuXHJcbiAgc29ydFNlcnZpY2VzID0gcmF3ID0+IHtcclxuICAgIGxldCByZXQgPSB7XHJcbiAgICAgIHZhbmxpZzogW10sXHJcbiAgICAgIHNwZWNpYWw6IFtdXHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMocmF3KS5tYXAoa2V5ID0+IHtcclxuICAgICAgaWYgKHJhd1trZXldLmNhdGVnb3JpZXNbMF0gPT0gXCIxXCIpIHtcclxuICAgICAgICByZXRbXCJ2YW5saWdcIl0ucHVzaChyYXdba2V5XSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0W1wic3BlY2lhbFwiXS5wdXNoKHJhd1trZXldKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJzZXJ2aWNlc1wiPlxyXG4gICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlcnZpY2VzKX1cclxuICAgICAgICAgICAgPGgxPlbDpXJhIFRqw6Ruc3RlcjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuc2VydmljZXMpLm1hcChrZXkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtdHlwZVwiIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2tleX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlcnZpY2VzW2tleV0ubWFwKChzZXJ2aWNlLCBzZXJ2S2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VcIiBrZXk9e3NlcnZLZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57c2VydmljZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWdzL2Nsb2NrLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57c2VydmljZS5kdXJhdGlvbn0gbWluPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlSW50KHNlcnZpY2UucHJpY2UpfSBrclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAjc2VydmljZXMge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1ncy82LmpwZyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNDBweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjc2VydmljZXM6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VydmljZS10eXBlIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VydmljZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VydmljZTpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgIC5zZXJ2aWNlLXR5cGUge1xyXG4gICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM3M2QzZjtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgdG8gYm90dG9tLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjQ5LCAyNDksIDI0OSwgMCkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNDksIDI0OSwgMjQ5LCAxKSAxMDAlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpbWUgaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xyXG5cclxubGV0IHN0YXRpY1NlcnZpY2VzID0ge1xyXG4gIHZhbmxpZzogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIktsaXBwbmluZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkLDtnJqYSBtZWQgZXR0IG9yZGVudGxpZ3Qgc2FtcsOlZCwgb2NoIHNlZGFuIGFudsOkbmRhIHRyYWRpdGlvbmVsbGEgYmFyYmVyaW5nc21ldG9kZXIgc29tIGFudsOkbmRzIGbDtnIgYXR0IHNrcsOkZGRhcnN5IGt1bmRlcm5hcyDDtm5za2FkZSBibGljaywgcHJlcGFyZXJhZGUgbWVkIHByZW1pdW1ow6VycHJvZHVrdGVyLCBvY2ggc2x1dGFyIG1lZCBlbiBrbGFzc2lzayByYWtuaW5nIHDDpSBuYWNrZW4uXCIsXHJcbiAgICAgIHRpbWU6IFwiNDVtaW5cIixcclxuICAgICAgcHJpczogXCI0ODAga3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCdXp6IEN1dFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkLDtnJqYSBtZWQgZW4ga29uc3VsdGF0aW9uLCBzZWRhbiB0YXIgdmkgc2FtbWEgbMOkbmdkIMO2dmVyIGhlbGEgaHV2dWRldCBtZWQgZW4ga2xpcHBtYXNraW4sIGbDtmxqdCBhdiBhdHQgZGV0YWxqZXJhIGRlIHl0dHJlIGxpbmplcm5hIGkgaMOlcmtsaXBwbmluZ2VuIG9jaCBuYWNrZW4gbWVkIHJhayByYWtoeXZlbC5cIixcclxuICAgICAgdGltZTogXCIxNW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjIwMCBrclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNrw6RnZ3RyaW1cIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJLb25zdWx0YXRpb24sIFRyaW1uaW5nIGF2IHNrw6RnZ2V0IHRpbGwgw7Zuc2thZCBsw6RuZ2QsIHZhcm0gaGFuZGR1ayBvY2ggZGVmaW5pZXJpbmcgYXYgc2vDpGdnbGluamVuIG1lZCBldHQgcmFrYmxhZC5cIixcclxuICAgICAgdGltZTogXCIzMG1pblwiLFxyXG4gICAgICBwcmlzOiBcIjMwMCBrclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNsw6R0cmFrbmluZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIktvbnN1bHRhdGlvbiwgYXZrb3BwbGFuZGUgaGFuZGR1a2jDpGZ0bmluZywgZsO2cnNrw6RybmluZ3NvbGphIG9jaCB2YXJtIHNrdW0gZnLDpW4gZW4gZXhmb2xpZXJhbmRlIGJhZGdlcmjDpXJib3JzdGUuIETDpHJlZnRlciBnw6VyIHJha2JsYWRlZCBtZWQga29ybmV0IG9jaCB0YXIgYm9ydCBldmVudHVlbGxhIHN0dWJiYXIuIEbDpHJkaWcgbWVkIGVuIHVwcGZyaXNrYW5kZSBreWxkIGhhbmRkdWtzbGluZG5pbmcgb2NoIGVuIFByZW1pdW0gQWZ0ZXItU2hhdmUgbG90aW9uLlwiLFxyXG4gICAgICB0aW1lOiBcIjMwbWluXCIsXHJcbiAgICAgIHByaXM6IFwiNDAwIGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiS2xpcHBuaW5nICsgU2vDpGdndHJpbVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkLDtnJqYSBtZWQgZW4gb3JkZW50bGlnIGtvbnN1bHRhdGlvbiBvY2ggc2VkYW4gYW52w6RuZGEgdHJhZGl0aW9uZWxsYSBiYXJiZXJpbmdzbWV0b2RlciBzb20gYW52w6RuZHMgZsO2ciBhdHQgc2tyw6RkZGFyc3kgZGV0IMO2bnNrYWRlIHV0c2VlbmRldCwgcHJlcGFyZXJhcyBtZWQgYWxsYSBwcmVtaXVtaMOlciBvY2ggc2vDpGdncHJvZHVrdGVyLCBvY2ggc2x1dGFyIG1lZCBlbiBrbGFzc2lzayByYWtoeXZlbCByYWthIHJ1bnQgaGFsc2VuIG9jaCBuYWNrZWhhbHNlbi5cIixcclxuICAgICAgdGltZTogXCIxaCAxNW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjcwMCBrclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIktsaXBwbmluZyArIFNsw6R0cmFrbmluZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkRldCBow6RyIMOkciB2w6VyIHRha2UgcMOlIGRlbiBrbGFzc2lza2EgZnJpc3lyZW4gb2NoIGFmZsOkcnNtYW5lbnMgbG9vay5cIixcclxuICAgICAgdGltZTogXCIxaCAzMG1pblwiLFxyXG4gICAgICBwcmlzOiBcIjgwMCBrclwiXHJcbiAgICB9XHJcbiAgXSxcclxuICBzcGVjaWFsOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVmF4bmluZyDDlnJvbi1LaW5kXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkVuIGJlaGFuZGxpbmcgc29tIHRvdWNoYXIgdXBwIG9jaCBmcmFtaMOkdmVyIGRpZ1wiLFxyXG4gICAgICB0aW1lOiBcIjE1bWluXCIsXHJcbiAgICAgIHByaXM6IFwiMTIwIGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVHLDpWRuaW5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRyw6VkbmluZy5cIixcclxuICAgICAgdGltZTogXCIxNW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjEyMCBrclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlN0eWxpbmdcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiVGFyIGZyYW0gZGV0IGLDpHN0YSB1ciBkaW4gZnJpc3lyXCIsXHJcbiAgICAgIHRpbWU6IFwiMTVtaW5cIixcclxuICAgICAgcHJpczogXCIxMjAga3JcIlxyXG4gICAgfVxyXG4gIF1cclxufTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\services.js */",
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
//# sourceMappingURL=services.js.eecb9e7f7940d75ca771.hot-update.js.map