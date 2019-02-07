webpackHotUpdate("static\\development\\pages\\barbers.js",{

/***/ "./pages/barbers.js":
/*!**************************!*\
  !*** ./pages/barbers.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return barbers; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\barbers.js";


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



var barberInfo = [{
  name: "José Rojas 'J. Sax'",
  description: "Han fann sin passion i historien om barberare genom tiderna, han kände då att han hittat sitt kall. Han har nu arbetat de senaste 12 åren som barberare och är lika inspirerad som sin första dag i yrket.",
  url: "/static/imgs/barber21.jpg"
}, {
  name: "Ghani Amor Chaoui",
  description: "Blev kär i barberandet sedan ung ålder, det är som en konst för mig. Jag har varit barberare i 28år.",
  url: "/static/imgs/barber1.jpg"
}];


var barbers =
/*#__PURE__*/
function (_Component) {
  _inherits(barbers, _Component);

  function barbers() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, barbers);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(barbers)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      users: {}
    });

    return _this;
  }

  _createClass(barbers, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var tokenRequest, _ref, token, userRequest, _ref2, users;

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
                return jquery__WEBPACK_IMPORTED_MODULE_3___default.a.ajax({
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
                  method: "getUnitList",
                  params: [],
                  id: 2
                };
                _context.next = 8;
                return jquery__WEBPACK_IMPORTED_MODULE_3___default.a.ajax({
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
                users = _ref2.result;
                this.setState({
                  users: users
                });

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

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        id: "barbers",
        className: "jsx-2225463300",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
        className: "jsx-2225463300",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
        className: "jsx-2225463300",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "V\xE5ra barberare"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "jsx-2225463300" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "jsx-2225463300" + " " + "barber-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, Object.keys(this.state.users).map(function (key) {
        return console.log(_this2.state.users[key]);
      }), Object.keys(this.state.users).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "jsx-2225463300" + " " + "barber",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          style: {
            backgroundImage: "url(https://stockholmbarber.simplybook.it/uploads/stockholmbarber/image_files/preview/7e7da5cbb81688b56ea1f612cb172340.jpg%22?fbclid=IwAR1W3JVjw3ThcCnKIFnI9CrhtFWHoWpjZmWsKmrFJEMaaaM8KzwSGenA2Sc"
          },
          className: "jsx-2225463300" + " " + "img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "jsx-2225463300" + " " + "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, _this2.state.users[key].name), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "jsx-2225463300" + " " + "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, _this2.state.users[key].description));
      }))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2225463300",
        css: "#barbers.jsx-2225463300{min-height:1000px;position:relative;background-image:url(/static/imgs/index-header.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-2225463300{padding:140px 0;}h1.jsx-2225463300{color:#fff;position:relative;z-index:3;}#barbers.jsx-2225463300:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}.container.jsx-2225463300{position:relative;z-index:3;color:#fff;width:80%;margin:0 auto;}.barber-container.jsx-2225463300{padding-top:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.barber.jsx-2225463300{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:450px;}@media screen and (max-width:1050px){.barber-container.jsx-2225463300{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.barber.jsx-2225463300{margin:0 auto;margin-top:70px;}.barber.jsx-2225463300:first-of-type{margin-top:0;}}.img.jsx-2225463300{background-position:top;background-repeat:no-repeat;background-size:cover;width:220px;height:220px;border-radius:50%;margin:0 auto;margin-bottom:20px;}.name.jsx-2225463300{font-size:40px;font-weight:bold;margin-bottom:10px;}.description.jsx-2225463300{max-width:400px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGJhcmJlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0dvQixBQUcrQixBQVFGLEFBSUwsQUFNQSxBQVdPLEFBUUQsQUFNRCxBQU1RLEFBR1IsQUFLRCxBQUtTLEFBV1QsQUFNQyxXQWxFRSxBQU1BLEVBdUNsQixDQUxrQixDQXFCRCxDQWpFbkIsQUF1RWdCLENBMUNELENBckNLLEFBNkJSLE1BaUNrQixJQWhDakIsQ0FqQkQsQUFNSixDQWtDTixBQTJCRixFQU5xQixHQXREVixDQW5CMkMsR0FhdEQsQUFpQlksS0FWRixLQVdNLEVBMkNoQixDQXJEUyxBQXlDZSxPQXhDUSxJQVVoQyxNQVVrQixLQXFCSixJQWZaLE9BTEYsQ0FwQlksQUF5Q0csRUEvRGMsR0FvQ0UsS0FiL0IsR0F5Q29CLGdCQS9EVSxFQWdFZCxjQUNLLFlBaEVHLE9BaUV4QixlQWhFQSxpREFrQ0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcYmFyYmVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmNvbnN0IGJhcmJlckluZm8gPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJKb3PDqSBSb2phcyAnSi4gU2F4J1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSGFuIGZhbm4gc2luIHBhc3Npb24gaSBoaXN0b3JpZW4gb20gYmFyYmVyYXJlIGdlbm9tIHRpZGVybmEsIGhhbiBrw6RuZGUgZMOlIGF0dCBoYW4gaGl0dGF0IHNpdHQga2FsbC4gSGFuIGhhciBudSBhcmJldGF0IGRlIHNlbmFzdGUgMTIgw6VyZW4gc29tIGJhcmJlcmFyZSBvY2ggw6RyIGxpa2EgaW5zcGlyZXJhZCBzb20gc2luIGbDtnJzdGEgZGFnIGkgeXJrZXQuXCIsXHJcbiAgICB1cmw6IFwiL3N0YXRpYy9pbWdzL2JhcmJlcjIxLmpwZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkdoYW5pIEFtb3IgQ2hhb3VpXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJCbGV2IGvDpHIgaSBiYXJiZXJhbmRldCBzZWRhbiB1bmcgw6VsZGVyLCBkZXQgw6RyIHNvbSBlbiBrb25zdCBmw7ZyIG1pZy4gSmFnIGhhciB2YXJpdCBiYXJiZXJhcmUgaSAyOMOlci5cIixcclxuICAgIHVybDogXCIvc3RhdGljL2ltZ3MvYmFyYmVyMS5qcGdcIlxyXG4gIH1cclxuXTtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhcmJlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgdXNlcnM6IHt9XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBsZXQgdG9rZW5SZXF1ZXN0ID0ge1xyXG4gICAgICBqc29ucnBjOiBcIjIuMFwiLFxyXG4gICAgICBtZXRob2Q6IFwiZ2V0VG9rZW5cIixcclxuICAgICAgcGFyYW1zOiBbXHJcbiAgICAgICAgXCJzdG9ja2hvbG1iYXJiZXJcIixcclxuICAgICAgICBcImQ3NTAyNjA4ZmRlMjU0NmY4MjUyMTc2M2FlZTQwNWU4OGQ2YjgwMzVmYTczNjcyMjQwMjJkZmJmNDMwODA3MGNcIlxyXG4gICAgICBdLFxyXG4gICAgICBpZDogMlxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgeyByZXN1bHQ6IHRva2VuIH0gPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly91c2VyLWFwaS5zaW1wbHlib29rLm1lL2xvZ2luXCIsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRva2VuUmVxdWVzdCksXHJcbiAgICAgIGhlYWRlcnM6IHt9LFxyXG4gICAgICBhc3luYzogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHVzZXJSZXF1ZXN0ID0ge1xyXG4gICAgICBqc29ucnBjOiBcIjIuMFwiLFxyXG4gICAgICBtZXRob2Q6IFwiZ2V0VW5pdExpc3RcIixcclxuICAgICAgcGFyYW1zOiBbXSxcclxuICAgICAgaWQ6IDJcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHsgcmVzdWx0OiB1c2VycyB9ID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgdXJsOiBcImh0dHBzOi8vdXNlci1hcGkuc2ltcGx5Ym9vay5tZS9cIixcclxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodXNlclJlcXVlc3QpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJYLUNvbXBhbnktTG9naW5cIjogXCJzdG9ja2hvbG1iYXJiZXJcIixcclxuICAgICAgICBcIlgtVG9rZW5cIjogdG9rZW5cclxuICAgICAgfSxcclxuICAgICAgYXN5bmM6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VycyB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBpZD1cImJhcmJlcnNcIj5cclxuICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICA8aDE+VsOlcmEgYmFyYmVyYXJlPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmJlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnVzZXJzKS5tYXAoa2V5ID0+XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXNlcnNba2V5XSlcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS51c2VycykubWFwKGtleSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3N0b2NraG9sbWJhcmJlci5zaW1wbHlib29rLml0L3VwbG9hZHMvc3RvY2tob2xtYmFyYmVyL2ltYWdlX2ZpbGVzL3ByZXZpZXcvN2U3ZGE1Y2JiODE2ODhiNTZlYTFmNjEyY2IxNzIzNDAuanBnJTIyP2ZiY2xpZD1Jd0FSMVczSlZqdzNUaGNDbktJRm5JOUNyaHRGV0hvV3BqWm1Xc0ttckZKRU1hYWFNOEt6d1NHZW5BMlNjYFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPnt0aGlzLnN0YXRlLnVzZXJzW2tleV0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS51c2Vyc1trZXldLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAjYmFyYmVycyB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWdzL2luZGV4LWhlYWRlci5qcGcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTQwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2JhcmJlcnM6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJhcmJlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJhcmJlciB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICAgICAgICAgIC5iYXJiZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYXJiZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5iYXJiZXI6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\barbers.js */",
        __self: this
      }));
    }
  }]);

  return barbers;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/barbers")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=barbers.js.8d23fc4e298804dafd23.hot-update.js.map