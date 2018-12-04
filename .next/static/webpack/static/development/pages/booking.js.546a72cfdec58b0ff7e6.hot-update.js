webpackHotUpdate("static\\development\\pages\\booking.js",{

/***/ "./pages/booking/index.js":
/*!********************************!*\
  !*** ./pages/booking/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Booking; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\booking\\index.js";



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




var Booking =
/*#__PURE__*/
function (_Component) {
  _inherits(Booking, _Component);

  function Booking() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Booking);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Booking)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      info: {},
      currentState: 1
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextState", function () {
      var nextState = _this.state.currentState + 1;

      _this.setState({
        currentState: nextState
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prevState", function () {
      var prevState = _this.state.currentState - 1;

      _this.setState({
        currentState: prevState
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addBarber", function (barber) {
      _this.setState({
        info: {
          barber: barber
        }
      });

      _this.nextState();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addService", function (service) {
      console.log("swag");

      _this.setState({
        info: {
          service: service
        }
      });

      _this.nextState();
    });

    return _this;
  }

  _createClass(Booking, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "booking",
        className: "jsx-509872672",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-509872672" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.state.currentState === 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChooseBarber, {
        addBarber: this.addBarber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }) : null, this.state.currentState === 2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChooseService, {
        addService: this.addService,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }) : null, this.state.currentState === 3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChooseService, {
        info: this.state.info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }) : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "509872672",
        css: "#booking.jsx-509872672{min-height:100.1vh;position:relative;background-image:url(/static/imgs/1.jpg);background-position:bottom left;background-repeat:no-repeat;background-size:cover;}h1.jsx-509872672{color:#fff;}.container.jsx-509872672{padding:100px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGJvb2tpbmdcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEb0IsQUFHZ0MsQUFTUixBQUlLLFdBSGxCLEtBSUEsR0Fib0Isa0JBQ3VCLHlDQUNULGdDQUNKLDRCQUNOLHNCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXFRhcmlxXFxEZXNrdG9wXFxkZXZcXHN0b2NraG9sbV9iYXJiZXJfZnJvbnRcXHBhZ2VzXFxib29raW5nXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaW5mbzoge30sXHJcbiAgICBjdXJyZW50U3RhdGU6IDFcclxuICB9O1xyXG5cclxuICBuZXh0U3RhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV4dFN0YXRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgKyAxO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U3RhdGU6IG5leHRTdGF0ZSB9KTtcclxuICB9O1xyXG5cclxuICBwcmV2U3RhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJldlN0YXRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgLSAxO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGF0ZTogcHJldlN0YXRlIH0pO1xyXG4gIH07XHJcblxyXG4gIGFkZEJhcmJlciA9IGJhcmJlciA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5mbzogeyBiYXJiZXIgfSB9KTtcclxuICAgIHRoaXMubmV4dFN0YXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgYWRkU2VydmljZSA9IHNlcnZpY2UgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzd2FnXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluZm86IHsgc2VydmljZSB9IH0pO1xyXG4gICAgdGhpcy5uZXh0U3RhdGUoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJib29raW5nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgPENob29zZUJhcmJlciBhZGRCYXJiZXI9e3RoaXMuYWRkQmFyYmVyfSAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gMiA/IChcclxuICAgICAgICAgICAgICA8Q2hvb3NlU2VydmljZSBhZGRTZXJ2aWNlPXt0aGlzLmFkZFNlcnZpY2V9IC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAzID8gKFxyXG4gICAgICAgICAgICAgIDxDaG9vc2VTZXJ2aWNlIGluZm89e3RoaXMuc3RhdGUuaW5mb30gLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAjYm9va2luZyB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMC4xdmg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1ncy8xLmpwZyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgZHVtbXlCYXJiZXJzID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIjFcIixcclxuICAgIG5hbWU6IFwidGFyaXFcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhhcnVtIHBvc3NpbXVzIGVhcnVtIHF1aXNxdWFtPyBRdWFzaSBkZWJpdGlzIGRvbG9yZXMgcmVydW0gcXVpYnVzZGFtIGFsaXF1aWQgb21uaXMgYmxhbmRpdGlpcy5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiMlwiLFxyXG4gICAgbmFtZTogXCJTYWZhbmFcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhhcnVtIHBvc3NpbXVzIGVhcnVtIHF1aXNxdWFtPyBRdWFzaSBkZWJpdGlzIGRvbG9yZXMgcmVydW0gcXVpYnVzZGFtIGFsaXF1aWQgb21uaXMgYmxhbmRpdGlpcy5cIlxyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IENob29zZUJhcmJlciA9IHByb3BzID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGgxPlbDpGxqIEJhcmJlcmFyZTwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmJlci1jb250YWluZXJcIj5cclxuICAgICAge2R1bW15QmFyYmVycy5tYXAoKGJhcmJlciwga2V5KSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJiZXJcIiBrZXk9e2tleX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+e2JhcmJlci5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2JhcmJlci5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuYWRkQmFyYmVyKGJhcmJlci5pZCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFbDpGxqXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIGgxIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAgIC5iYXJiZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCA1MHB4O1xyXG4gICAgICAgIGZsZXgtYmFzaXMgODAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICAuYmFyYmVyIGJ1dHRvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDIwcHggMjBweCAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWdzL2JhcmJlcjEuanBnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxubGV0IGR1bW15U2VydmljZSA9IFtcclxuICB7XHJcbiAgICBpZDogXCIxXCIsXHJcbiAgICBuYW1lOiBcIkZ1bGwgQ3V0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjJcIixcclxuICAgIG5hbWU6IFwiSGFsZiBDdXRcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhhcnVtIHBvc3NpbXVzIGVhcnVtIHF1aXNxdWFtPyBRdWFzaSBkZWJpdGlzIGRvbG9yZXMgcmVydW0gcXVpYnVzZGFtIGFsaXF1aWQgb21uaXMgYmxhbmRpdGlpcy5cIlxyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IENob29zZVNlcnZpY2UgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoMT5Ww6RsaiBCYXJiZXJhcmU8L2gxPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNvbnRhaW5lclwiPlxyXG4gICAgICB7ZHVtbXlTZXJ2aWNlLm1hcCgoc2VydmljZSwga2V5KSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJiZXJcIiBrZXk9e2tleX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+e3NlcnZpY2UubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntzZXJ2aWNlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5hZGRTZXJ2aWNlKHNlcnZpY2UuaWQpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWw6RsalxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgaDEge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gICAgLmJhcmJlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nOiA1MHB4IDUwcHg7XHJcbiAgICAgIGZsZXgtYmFzaXMgODAlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuYmFyYmVyIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHggMjBweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW1nIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1ncy9iYXJiZXIxLmpwZyk7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgbWluLXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgQ29uZmlyYW10aW9uID0gcHJvcHMgPT4gKFxyXG4gIDxkaXYgaWQ9XCJjb25maXJtXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8aDE+Qm9va25pbmdzIEJla3LDpGZ0ZWxzZTwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZmlybS1jb250YWluZXJcIj5zd2FnZ3k8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29uZmlybS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nXHJcbiAgICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\booking\\index.js */",
        __self: this
      }));
    }
  }]);

  return Booking;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


var dummyBarbers = [{
  id: "1",
  name: "tariq",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus earum quisquam? Quasi debitis dolores rerum quibusdam aliquid omnis blanditiis."
}, {
  id: "2",
  name: "Safana",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus earum quisquam? Quasi debitis dolores rerum quibusdam aliquid omnis blanditiis."
}];

var ChooseBarber = function ChooseBarber(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-886286351",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-886286351",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "V\xE4lj Barberare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-886286351" + " " + "barber-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, dummyBarbers.map(function (barber, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: key,
      className: "jsx-886286351" + " " + "barber",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-886286351" + " " + "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-886286351" + " " + "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-886286351" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-886286351",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, barber.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-886286351" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, barber.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick(e) {
        props.addBarber(barber.id);
      },
      className: "jsx-886286351",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "V\xE4lj"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "886286351",
    css: "h1.jsx-886286351{color:#fff;}.barber.jsx-886286351{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:800px;margin:0 auto;background:#f6f6f6;margin-bottom:20px;padding:50px 50px;-webkit-flex-basis:80%;-ms-flex-preferred-size:80%;flex-basis:80%;position:relative;}.barber.jsx-886286351 button.jsx-886286351{position:absolute;right:0;bottom:0;border:none;padding:10px 30px;margin:0 20px 20px 0;font-size:20px;background:black;color:#fff;}.content.jsx-886286351{text-align:left;padding-left:30px;}.img.jsx-886286351{background-image:url(/static/imgs/barber1.jpg);background-position:top;background-repeat:no-repeat;background-size:cover;min-width:150px !important;width:150px;height:150px;border-radius:50%;margin:auto 0;margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGJvb2tpbmdcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHZ0IsQUFHb0IsQUFJRSxBQVVNLEFBV0QsQUFLNkIsV0E3Qm5ELEtBeUJ3QixFQVhWLFFBQ0MsUUFXYixDQVZnQixZQUNNLEFBYUksa0JBWkQsTUFhSyxHQTNCWixZQWVDLElBZEgsU0EyQlEsRUFaSCxHQWRBLGNBZU4sR0FZYyxFQTFCUixNQWVyQixhQWRvQixNQTBCTixZQXpCRSxBQTBCRCxhQUNLLGtCQUNKLGNBQ0ssbUJBQ3JCLEVBN0JvQixrQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcYm9va2luZ1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGluZm86IHt9LFxyXG4gICAgY3VycmVudFN0YXRlOiAxXHJcbiAgfTtcclxuXHJcbiAgbmV4dFN0YXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IG5leHRTdGF0ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXRlICsgMTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0YXRlOiBuZXh0U3RhdGUgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJldlN0YXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IHByZXZTdGF0ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXRlIC0gMTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U3RhdGU6IHByZXZTdGF0ZSB9KTtcclxuICB9O1xyXG5cclxuICBhZGRCYXJiZXIgPSBiYXJiZXIgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluZm86IHsgYmFyYmVyIH0gfSk7XHJcbiAgICB0aGlzLm5leHRTdGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIGFkZFNlcnZpY2UgPSBzZXJ2aWNlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic3dhZ1wiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmZvOiB7IHNlcnZpY2UgfSB9KTtcclxuICAgIHRoaXMubmV4dFN0YXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGlkPVwiYm9va2luZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAxID8gKFxyXG4gICAgICAgICAgICAgIDxDaG9vc2VCYXJiZXIgYWRkQmFyYmVyPXt0aGlzLmFkZEJhcmJlcn0gLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgPENob29zZVNlcnZpY2UgYWRkU2VydmljZT17dGhpcy5hZGRTZXJ2aWNlfSAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gMyA/IChcclxuICAgICAgICAgICAgICA8Q2hvb3NlU2VydmljZSBpbmZvPXt0aGlzLnN0YXRlLmluZm99IC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgI2Jvb2tpbmcge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAuMXZoO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvMS5qcGcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubGV0IGR1bW15QmFyYmVycyA9IFtcclxuICB7XHJcbiAgICBpZDogXCIxXCIsXHJcbiAgICBuYW1lOiBcInRhcmlxXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjJcIixcclxuICAgIG5hbWU6IFwiU2FmYW5hXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBDaG9vc2VCYXJiZXIgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoMT5Ww6RsaiBCYXJiZXJhcmU8L2gxPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYXJiZXItY29udGFpbmVyXCI+XHJcbiAgICAgIHtkdW1teUJhcmJlcnMubWFwKChiYXJiZXIsIGtleSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPntiYXJiZXIubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntiYXJiZXIuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmFkZEJhcmJlcihiYXJiZXIuaWQpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWw6RsalxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgICAuYmFyYmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggNTBweDtcclxuICAgICAgICBmbGV4LWJhc2lzIDgwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLmJhcmJlciBidXR0b24ge1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1ncy9iYXJiZXIxLmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmxldCBkdW1teVNlcnZpY2UgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgbmFtZTogXCJGdWxsIEN1dFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gcG9zc2ltdXMgZWFydW0gcXVpc3F1YW0/IFF1YXNpIGRlYml0aXMgZG9sb3JlcyByZXJ1bSBxdWlidXNkYW0gYWxpcXVpZCBvbW5pcyBibGFuZGl0aWlzLlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIyXCIsXHJcbiAgICBuYW1lOiBcIkhhbGYgQ3V0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBDaG9vc2VTZXJ2aWNlID0gcHJvcHMgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+VsOkbGogQmFyYmVyYXJlPC9oMT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1jb250YWluZXJcIj5cclxuICAgICAge2R1bW15U2VydmljZS5tYXAoKHNlcnZpY2UsIGtleSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPntzZXJ2aWNlLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57c2VydmljZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuYWRkU2VydmljZShzZXJ2aWNlLmlkKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVsOkbGpcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gIGgxIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAgIC5iYXJiZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgcGFkZGluZzogNTBweCA1MHB4O1xyXG4gICAgICBmbGV4LWJhc2lzIDgwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmJhcmJlciBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvYmFyYmVyMS5qcGcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIG1pbi13aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IENvbmZpcmFtdGlvbiA9IHByb3BzID0+IChcclxuICA8ZGl2IGlkPVwiY29uZmlybVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxPkJvb2tuaW5ncyBCZWtyw6RmdGVsc2U8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmZpcm0tY29udGFpbmVyXCI+c3dhZ2d5PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbmZpcm0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZ1xyXG4gICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\booking\\index.js */",
    __self: this
  }));
};

var dummyService = [{
  id: "1",
  name: "Full Cut",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus earum quisquam? Quasi debitis dolores rerum quibusdam aliquid omnis blanditiis."
}, {
  id: "2",
  name: "Half Cut",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus earum quisquam? Quasi debitis dolores rerum quibusdam aliquid omnis blanditiis."
}];

var ChooseService = function ChooseService(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1513868612",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1513868612",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "V\xE4lj Barberare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1513868612" + " " + "service-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, dummyService.map(function (service, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: key,
      className: "jsx-1513868612" + " " + "barber",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1513868612" + " " + "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1513868612" + " " + "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1513868612" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-1513868612",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, service.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1513868612" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, service.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick(e) {
        props.addService(service.id);
      },
      className: "jsx-1513868612",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "V\xE4lj"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1513868612",
    css: "h1.jsx-1513868612{color:#fff;}.barber.jsx-1513868612{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:800px;margin:0 auto;background:#f6f6f6;margin-bottom:20px;padding:50px 50px;-webkit-flex-basis:80%;-ms-flex-preferred-size:80%;flex-basis:80%;position:relative;}.barber.jsx-1513868612 button.jsx-1513868612{position:absolute;right:0;bottom:0;border:none;padding:10px 30px;margin:0 20px 20px 0;font-size:20px;background:black;color:#fff;}.content.jsx-1513868612{text-align:left;padding-left:30px;}.img.jsx-1513868612{background-image:url(/static/imgs/barber1.jpg);background-position:top;background-repeat:no-repeat;background-size:cover;min-width:150px !important;width:150px;height:150px;border-radius:50%;margin:auto 0;margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGJvb2tpbmdcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9NZ0IsQUFHa0IsQUFJRSxBQVVNLEFBV0QsQUFLNkIsV0E3Qm5ELEtBeUJ3QixFQVhWLFFBQ0MsUUFXYixDQVZnQixZQUNNLEFBYUksa0JBWkQsTUFhSyxHQTNCWixZQWVDLElBZEgsU0EyQlEsRUFaSCxHQWRBLGNBZU4sR0FZYyxFQTFCUixNQWVyQixhQWRvQixNQTBCTixZQXpCRSxBQTBCRCxhQUNLLGtCQUNKLGNBQ0ssbUJBQ3JCLEVBN0JvQixrQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcYm9va2luZ1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGluZm86IHt9LFxyXG4gICAgY3VycmVudFN0YXRlOiAxXHJcbiAgfTtcclxuXHJcbiAgbmV4dFN0YXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IG5leHRTdGF0ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXRlICsgMTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0YXRlOiBuZXh0U3RhdGUgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJldlN0YXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IHByZXZTdGF0ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXRlIC0gMTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U3RhdGU6IHByZXZTdGF0ZSB9KTtcclxuICB9O1xyXG5cclxuICBhZGRCYXJiZXIgPSBiYXJiZXIgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluZm86IHsgYmFyYmVyIH0gfSk7XHJcbiAgICB0aGlzLm5leHRTdGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIGFkZFNlcnZpY2UgPSBzZXJ2aWNlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic3dhZ1wiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmZvOiB7IHNlcnZpY2UgfSB9KTtcclxuICAgIHRoaXMubmV4dFN0YXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGlkPVwiYm9va2luZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAxID8gKFxyXG4gICAgICAgICAgICAgIDxDaG9vc2VCYXJiZXIgYWRkQmFyYmVyPXt0aGlzLmFkZEJhcmJlcn0gLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgPENob29zZVNlcnZpY2UgYWRkU2VydmljZT17dGhpcy5hZGRTZXJ2aWNlfSAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gMyA/IChcclxuICAgICAgICAgICAgICA8Q2hvb3NlU2VydmljZSBpbmZvPXt0aGlzLnN0YXRlLmluZm99IC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgI2Jvb2tpbmcge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAuMXZoO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvMS5qcGcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubGV0IGR1bW15QmFyYmVycyA9IFtcclxuICB7XHJcbiAgICBpZDogXCIxXCIsXHJcbiAgICBuYW1lOiBcInRhcmlxXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjJcIixcclxuICAgIG5hbWU6IFwiU2FmYW5hXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBDaG9vc2VCYXJiZXIgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoMT5Ww6RsaiBCYXJiZXJhcmU8L2gxPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYXJiZXItY29udGFpbmVyXCI+XHJcbiAgICAgIHtkdW1teUJhcmJlcnMubWFwKChiYXJiZXIsIGtleSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPntiYXJiZXIubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntiYXJiZXIuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmFkZEJhcmJlcihiYXJiZXIuaWQpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWw6RsalxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgICAuYmFyYmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggNTBweDtcclxuICAgICAgICBmbGV4LWJhc2lzIDgwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLmJhcmJlciBidXR0b24ge1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1ncy9iYXJiZXIxLmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmxldCBkdW1teVNlcnZpY2UgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgbmFtZTogXCJGdWxsIEN1dFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gcG9zc2ltdXMgZWFydW0gcXVpc3F1YW0/IFF1YXNpIGRlYml0aXMgZG9sb3JlcyByZXJ1bSBxdWlidXNkYW0gYWxpcXVpZCBvbW5pcyBibGFuZGl0aWlzLlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIyXCIsXHJcbiAgICBuYW1lOiBcIkhhbGYgQ3V0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBDaG9vc2VTZXJ2aWNlID0gcHJvcHMgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+VsOkbGogQmFyYmVyYXJlPC9oMT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1jb250YWluZXJcIj5cclxuICAgICAge2R1bW15U2VydmljZS5tYXAoKHNlcnZpY2UsIGtleSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPntzZXJ2aWNlLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57c2VydmljZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuYWRkU2VydmljZShzZXJ2aWNlLmlkKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVsOkbGpcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gIGgxIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAgIC5iYXJiZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgcGFkZGluZzogNTBweCA1MHB4O1xyXG4gICAgICBmbGV4LWJhc2lzIDgwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmJhcmJlciBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvYmFyYmVyMS5qcGcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIG1pbi13aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IENvbmZpcmFtdGlvbiA9IHByb3BzID0+IChcclxuICA8ZGl2IGlkPVwiY29uZmlybVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxPkJvb2tuaW5ncyBCZWtyw6RmdGVsc2U8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmZpcm0tY29udGFpbmVyXCI+c3dhZ2d5PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbmZpcm0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZ1xyXG4gICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\booking\\index.js */",
    __self: this
  }));
};

var Confiramtion = function Confiramtion(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "confirm",
    className: "jsx-2457055288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2457055288" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2457055288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "Booknings Bekr\xE4ftelse"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2457055288" + " " + "confirm-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, "swaggy")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2457055288",
    css: ".container.jsx-2457055288{padding:30px;background:#f7f7f7;}.confirm-container.jsx-2457055288{padding;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGJvb2tpbmdcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlQZ0IsQUFHMEIsQUFLbEIsUUFBQyxLQUp1QixtQkFDdkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcYm9va2luZ1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGluZm86IHt9LFxyXG4gICAgY3VycmVudFN0YXRlOiAxXHJcbiAgfTtcclxuXHJcbiAgbmV4dFN0YXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IG5leHRTdGF0ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXRlICsgMTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0YXRlOiBuZXh0U3RhdGUgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJldlN0YXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IHByZXZTdGF0ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXRlIC0gMTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U3RhdGU6IHByZXZTdGF0ZSB9KTtcclxuICB9O1xyXG5cclxuICBhZGRCYXJiZXIgPSBiYXJiZXIgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluZm86IHsgYmFyYmVyIH0gfSk7XHJcbiAgICB0aGlzLm5leHRTdGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIGFkZFNlcnZpY2UgPSBzZXJ2aWNlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic3dhZ1wiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmZvOiB7IHNlcnZpY2UgfSB9KTtcclxuICAgIHRoaXMubmV4dFN0YXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGlkPVwiYm9va2luZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAxID8gKFxyXG4gICAgICAgICAgICAgIDxDaG9vc2VCYXJiZXIgYWRkQmFyYmVyPXt0aGlzLmFkZEJhcmJlcn0gLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgPENob29zZVNlcnZpY2UgYWRkU2VydmljZT17dGhpcy5hZGRTZXJ2aWNlfSAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gMyA/IChcclxuICAgICAgICAgICAgICA8Q2hvb3NlU2VydmljZSBpbmZvPXt0aGlzLnN0YXRlLmluZm99IC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgI2Jvb2tpbmcge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAuMXZoO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvMS5qcGcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubGV0IGR1bW15QmFyYmVycyA9IFtcclxuICB7XHJcbiAgICBpZDogXCIxXCIsXHJcbiAgICBuYW1lOiBcInRhcmlxXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjJcIixcclxuICAgIG5hbWU6IFwiU2FmYW5hXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBDaG9vc2VCYXJiZXIgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoMT5Ww6RsaiBCYXJiZXJhcmU8L2gxPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYXJiZXItY29udGFpbmVyXCI+XHJcbiAgICAgIHtkdW1teUJhcmJlcnMubWFwKChiYXJiZXIsIGtleSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPntiYXJiZXIubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntiYXJiZXIuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmFkZEJhcmJlcihiYXJiZXIuaWQpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWw6RsalxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgICAuYmFyYmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggNTBweDtcclxuICAgICAgICBmbGV4LWJhc2lzIDgwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLmJhcmJlciBidXR0b24ge1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1ncy9iYXJiZXIxLmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmxldCBkdW1teVNlcnZpY2UgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgbmFtZTogXCJGdWxsIEN1dFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gcG9zc2ltdXMgZWFydW0gcXVpc3F1YW0/IFF1YXNpIGRlYml0aXMgZG9sb3JlcyByZXJ1bSBxdWlidXNkYW0gYWxpcXVpZCBvbW5pcyBibGFuZGl0aWlzLlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIyXCIsXHJcbiAgICBuYW1lOiBcIkhhbGYgQ3V0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBDaG9vc2VTZXJ2aWNlID0gcHJvcHMgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+VsOkbGogQmFyYmVyYXJlPC9oMT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1jb250YWluZXJcIj5cclxuICAgICAge2R1bW15U2VydmljZS5tYXAoKHNlcnZpY2UsIGtleSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPntzZXJ2aWNlLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57c2VydmljZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuYWRkU2VydmljZShzZXJ2aWNlLmlkKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVsOkbGpcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gIGgxIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAgIC5iYXJiZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgcGFkZGluZzogNTBweCA1MHB4O1xyXG4gICAgICBmbGV4LWJhc2lzIDgwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmJhcmJlciBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvYmFyYmVyMS5qcGcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIG1pbi13aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IENvbmZpcmFtdGlvbiA9IHByb3BzID0+IChcclxuICA8ZGl2IGlkPVwiY29uZmlybVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxPkJvb2tuaW5ncyBCZWtyw6RmdGVsc2U8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmZpcm0tY29udGFpbmVyXCI+c3dhZ2d5PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbmZpcm0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZ1xyXG4gICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\booking\\index.js */",
    __self: this
  }));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/booking\\index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=booking.js.546a72cfdec58b0ff7e6.hot-update.js.map