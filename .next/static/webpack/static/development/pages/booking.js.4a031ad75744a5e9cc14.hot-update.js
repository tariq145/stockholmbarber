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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
      console.log(_this.state.currentState);

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
      _this.setState(function (prevState) {
        var newState = prevState;
        newState.info = _objectSpread({}, prevState.info, {
          barber: barber
        });
        return newState;
      });

      _this.nextState();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addService", function (service) {
      _this.setState(function (prevState) {
        var newState = prevState;
        newState.info = _objectSpread({}, prevState.info, {
          service: service
        });
        return newState;
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
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "booking",
        className: "jsx-509872672",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-509872672" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChooseDate, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "509872672",
        css: "#booking.jsx-509872672{min-height:100.1vh;position:relative;background-image:url(/static/imgs/1.jpg);background-position:bottom left;background-repeat:no-repeat;background-size:cover;}h1.jsx-509872672{color:#fff;}.container.jsx-509872672{padding:100px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGJvb2tpbmdcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEb0IsQUFHZ0MsQUFTUixBQUlLLFdBSGxCLEtBSUEsR0Fib0Isa0JBQ3VCLHlDQUNULGdDQUNKLDRCQUNOLHNCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXFRhcmlxXFxEZXNrdG9wXFxkZXZcXHN0b2NraG9sbV9iYXJiZXJfZnJvbnRcXHBhZ2VzXFxib29raW5nXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaW5mbzoge30sXHJcbiAgICBjdXJyZW50U3RhdGU6IDFcclxuICB9O1xyXG5cclxuICBuZXh0U3RhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV4dFN0YXRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgKyAxO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGF0ZTogbmV4dFN0YXRlIH0pO1xyXG4gIH07XHJcblxyXG4gIHByZXZTdGF0ZSA9ICgpID0+IHtcclxuICAgIGxldCBwcmV2U3RhdGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSAtIDE7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0YXRlOiBwcmV2U3RhdGUgfSk7XHJcbiAgfTtcclxuXHJcbiAgYWRkQmFyYmVyID0gYmFyYmVyID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgbGV0IG5ld1N0YXRlID0gcHJldlN0YXRlO1xyXG4gICAgICBuZXdTdGF0ZS5pbmZvID0geyAuLi5wcmV2U3RhdGUuaW5mbywgYmFyYmVyIH07XHJcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uZXh0U3RhdGUoKTtcclxuICB9O1xyXG5cclxuICBhZGRTZXJ2aWNlID0gc2VydmljZSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHByZXZTdGF0ZTtcclxuICAgICAgbmV3U3RhdGUuaW5mbyA9IHsgLi4ucHJldlN0YXRlLmluZm8sIHNlcnZpY2UgfTtcclxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm5leHRTdGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBpZD1cImJvb2tpbmdcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgPENob29zZUJhcmJlciBhZGRCYXJiZXI9e3RoaXMuYWRkQmFyYmVyfSAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gMiA/IChcclxuICAgICAgICAgICAgICA8Q2hvb3NlU2VydmljZSBhZGRTZXJ2aWNlPXt0aGlzLmFkZFNlcnZpY2V9IC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAzID8gKFxyXG4gICAgICAgICAgICAgIDxDb25maXJhbXRpb24gaW5mbz17dGhpcy5zdGF0ZS5pbmZvfSAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH0gKi99XHJcblxyXG4gICAgICAgICAgICA8Q2hvb3NlRGF0ZSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgI2Jvb2tpbmcge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAuMXZoO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvMS5qcGcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubGV0IGR1bW15QmFyYmVycyA9IFtcclxuICB7XHJcbiAgICBpZDogXCIxXCIsXHJcbiAgICBuYW1lOiBcInRhcmlxXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjJcIixcclxuICAgIG5hbWU6IFwiU2FmYW5hXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBDaG9vc2VCYXJiZXIgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoMT5Ww6RsaiBCYXJiZXJhcmU8L2gxPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYXJiZXItY29udGFpbmVyXCI+XHJcbiAgICAgIHtkdW1teUJhcmJlcnMubWFwKChiYXJiZXIsIGtleSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPntiYXJiZXIubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntiYXJiZXIuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmFkZEJhcmJlcihiYXJiZXIuaWQpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWw6RsalxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgICAuYmFyYmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggNTBweDtcclxuICAgICAgICBmbGV4LWJhc2lzIDgwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLmJhcmJlciBidXR0b24ge1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1ncy9iYXJiZXIxLmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmxldCBkdW1teVNlcnZpY2UgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgbmFtZTogXCJGdWxsIEN1dFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gcG9zc2ltdXMgZWFydW0gcXVpc3F1YW0/IFF1YXNpIGRlYml0aXMgZG9sb3JlcyByZXJ1bSBxdWlidXNkYW0gYWxpcXVpZCBvbW5pcyBibGFuZGl0aWlzLlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIyXCIsXHJcbiAgICBuYW1lOiBcIkhhbGYgQ3V0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBDaG9vc2VTZXJ2aWNlID0gcHJvcHMgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+VsOkbGogQmFyYmVyYXJlPC9oMT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1jb250YWluZXJcIj5cclxuICAgICAge2R1bW15U2VydmljZS5tYXAoKHNlcnZpY2UsIGtleSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPntzZXJ2aWNlLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57c2VydmljZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuYWRkU2VydmljZShzZXJ2aWNlLmlkKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVsOkbGpcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gIGgxIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAgIC5iYXJiZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgcGFkZGluZzogNTBweCA1MHB4O1xyXG4gICAgICBmbGV4LWJhc2lzIDgwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmJhcmJlciBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvYmFyYmVyMS5qcGcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIG1pbi13aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IENvbmZpcmFtdGlvbiA9IHByb3BzID0+IChcclxuICA8ZGl2IGlkPVwiY29uZmlybVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxPkJvb2tuaW5ncyBCZWtyw6RmdGVsc2U8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmZpcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAge2NvbnNvbGUubG9nKHByb3BzKX1cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+QmFyYmVyYXJlPC9zdHJvbmc+IHtwcm9wcy5pbmZvLmJhcmJlcn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPnRpZDwvc3Ryb25nPiBSYW5kb20gdGlkXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5QbGF0czwvc3Ryb25nPiBIb3Juc2dhdGFuIDk3XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5QcmlzPC9zdHJvbmc+IDM1NWtyXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbmZpcm0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZ1xyXG4gICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IENob29zZURhdGUgPSAoKSA9PiA8ZGl2IGlkPVwiZGF0ZVwiPnRoaXMgaXMgdGhlIGNob29zZSBkYXRlIGNvbXBvbmVudDwvZGl2PjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\booking\\index.js */",
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
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-886286351",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "V\xE4lj Barberare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-886286351" + " " + "barber-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, dummyBarbers.map(function (barber, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: key,
      className: "jsx-886286351" + " " + "barber",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-886286351" + " " + "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-886286351" + " " + "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-886286351" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-886286351",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, barber.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-886286351" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, barber.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick(e) {
        props.addBarber(barber.id);
      },
      className: "jsx-886286351",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "V\xE4lj"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "886286351",
    css: "h1.jsx-886286351{color:#fff;}.barber.jsx-886286351{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:800px;margin:0 auto;background:#f6f6f6;margin-bottom:20px;padding:50px 50px;-webkit-flex-basis:80%;-ms-flex-preferred-size:80%;flex-basis:80%;position:relative;}.barber.jsx-886286351 button.jsx-886286351{position:absolute;right:0;bottom:0;border:none;padding:10px 30px;margin:0 20px 20px 0;font-size:20px;background:black;color:#fff;}.content.jsx-886286351{text-align:left;padding-left:30px;}.img.jsx-886286351{background-image:url(/static/imgs/barber1.jpg);background-position:top;background-repeat:no-repeat;background-size:cover;min-width:150px !important;width:150px;height:150px;border-radius:50%;margin:auto 0;margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGJvb2tpbmdcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIZ0IsQUFHb0IsQUFJRSxBQVVNLEFBV0QsQUFLNkIsV0E3Qm5ELEtBeUJ3QixFQVhWLFFBQ0MsUUFXYixDQVZnQixZQUNNLEFBYUksa0JBWkQsTUFhSyxHQTNCWixZQWVDLElBZEgsU0EyQlEsRUFaSCxHQWRBLGNBZU4sR0FZYyxFQTFCUixNQWVyQixhQWRvQixNQTBCTixZQXpCRSxBQTBCRCxhQUNLLGtCQUNKLGNBQ0ssbUJBQ3JCLEVBN0JvQixrQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcYm9va2luZ1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGluZm86IHt9LFxyXG4gICAgY3VycmVudFN0YXRlOiAxXHJcbiAgfTtcclxuXHJcbiAgbmV4dFN0YXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IG5leHRTdGF0ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXRlICsgMTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U3RhdGU6IG5leHRTdGF0ZSB9KTtcclxuICB9O1xyXG5cclxuICBwcmV2U3RhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJldlN0YXRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgLSAxO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGF0ZTogcHJldlN0YXRlIH0pO1xyXG4gIH07XHJcblxyXG4gIGFkZEJhcmJlciA9IGJhcmJlciA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHByZXZTdGF0ZTtcclxuICAgICAgbmV3U3RhdGUuaW5mbyA9IHsgLi4ucHJldlN0YXRlLmluZm8sIGJhcmJlciB9O1xyXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubmV4dFN0YXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgYWRkU2VydmljZSA9IHNlcnZpY2UgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICBsZXQgbmV3U3RhdGUgPSBwcmV2U3RhdGU7XHJcbiAgICAgIG5ld1N0YXRlLmluZm8gPSB7IC4uLnByZXZTdGF0ZS5pbmZvLCBzZXJ2aWNlIH07XHJcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uZXh0U3RhdGUoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJib29raW5nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7Lyoge3RoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAxID8gKFxyXG4gICAgICAgICAgICAgIDxDaG9vc2VCYXJiZXIgYWRkQmFyYmVyPXt0aGlzLmFkZEJhcmJlcn0gLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgPENob29zZVNlcnZpY2UgYWRkU2VydmljZT17dGhpcy5hZGRTZXJ2aWNlfSAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gMyA/IChcclxuICAgICAgICAgICAgICA8Q29uZmlyYW10aW9uIGluZm89e3RoaXMuc3RhdGUuaW5mb30gLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9ICovfVxyXG5cclxuICAgICAgICAgICAgPENob29zZURhdGUgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICNib29raW5nIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwLjF2aDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWdzLzEuanBnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBkdW1teUJhcmJlcnMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgbmFtZTogXCJ0YXJpcVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gcG9zc2ltdXMgZWFydW0gcXVpc3F1YW0/IFF1YXNpIGRlYml0aXMgZG9sb3JlcyByZXJ1bSBxdWlidXNkYW0gYWxpcXVpZCBvbW5pcyBibGFuZGl0aWlzLlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIyXCIsXHJcbiAgICBuYW1lOiBcIlNhZmFuYVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gcG9zc2ltdXMgZWFydW0gcXVpc3F1YW0/IFF1YXNpIGRlYml0aXMgZG9sb3JlcyByZXJ1bSBxdWlidXNkYW0gYWxpcXVpZCBvbW5pcyBibGFuZGl0aWlzLlwiXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgQ2hvb3NlQmFyYmVyID0gcHJvcHMgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+VsOkbGogQmFyYmVyYXJlPC9oMT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICB7ZHVtbXlCYXJiZXJzLm1hcCgoYmFyYmVyLCBrZXkpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmJlclwiIGtleT17a2V5fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz57YmFyYmVyLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57YmFyYmVyLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5hZGRCYXJiZXIoYmFyYmVyLmlkKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVsOkbGpcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgICAgLmJhcmJlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDUwcHg7XHJcbiAgICAgICAgZmxleC1iYXNpcyA4MCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIC5iYXJiZXIgYnV0dG9uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWcge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvYmFyYmVyMS5qcGcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5sZXQgZHVtbXlTZXJ2aWNlID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIjFcIixcclxuICAgIG5hbWU6IFwiRnVsbCBDdXRcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhhcnVtIHBvc3NpbXVzIGVhcnVtIHF1aXNxdWFtPyBRdWFzaSBkZWJpdGlzIGRvbG9yZXMgcmVydW0gcXVpYnVzZGFtIGFsaXF1aWQgb21uaXMgYmxhbmRpdGlpcy5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiMlwiLFxyXG4gICAgbmFtZTogXCJIYWxmIEN1dFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gcG9zc2ltdXMgZWFydW0gcXVpc3F1YW0/IFF1YXNpIGRlYml0aXMgZG9sb3JlcyByZXJ1bSBxdWlidXNkYW0gYWxpcXVpZCBvbW5pcyBibGFuZGl0aWlzLlwiXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgQ2hvb3NlU2VydmljZSA9IHByb3BzID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGgxPlbDpGxqIEJhcmJlcmFyZTwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtY29udGFpbmVyXCI+XHJcbiAgICAgIHtkdW1teVNlcnZpY2UubWFwKChzZXJ2aWNlLCBrZXkpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmJlclwiIGtleT17a2V5fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz57c2VydmljZS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmFkZFNlcnZpY2Uoc2VydmljZS5pZCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFbDpGxqXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICBoMSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgICAuYmFyYmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDUwcHggNTBweDtcclxuICAgICAgZmxleC1iYXNpcyA4MCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5iYXJiZXIgYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWdzL2JhcmJlcjEuanBnKTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBtaW4td2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBDb25maXJhbXRpb24gPSBwcm9wcyA9PiAoXHJcbiAgPGRpdiBpZD1cImNvbmZpcm1cIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMT5Cb29rbmluZ3MgQmVrcsOkZnRlbHNlPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25maXJtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcyl9XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPkJhcmJlcmFyZTwvc3Ryb25nPiB7cHJvcHMuaW5mby5iYXJiZXJ9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz50aWQ8L3N0cm9uZz4gUmFuZG9tIHRpZFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+UGxhdHM8L3N0cm9uZz4gSG9ybnNnYXRhbiA5N1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+UHJpczwvc3Ryb25nPiAzNTVrclxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb25maXJtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmdcclxuICAgICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBDaG9vc2VEYXRlID0gKCkgPT4gPGRpdiBpZD1cImRhdGVcIj50aGlzIGlzIHRoZSBjaG9vc2UgZGF0ZSBjb21wb25lbnQ8L2Rpdj47XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\booking\\index.js */",
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
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1513868612",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "V\xE4lj Barberare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1513868612" + " " + "service-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, dummyService.map(function (service, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: key,
      className: "jsx-1513868612" + " " + "barber",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1513868612" + " " + "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1513868612" + " " + "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1513868612" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-1513868612",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, service.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1513868612" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, service.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick(e) {
        props.addService(service.id);
      },
      className: "jsx-1513868612",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, "V\xE4lj"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1513868612",
    css: "h1.jsx-1513868612{color:#fff;}.barber.jsx-1513868612{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:800px;margin:0 auto;background:#f6f6f6;margin-bottom:20px;padding:50px 50px;-webkit-flex-basis:80%;-ms-flex-preferred-size:80%;flex-basis:80%;position:relative;}.barber.jsx-1513868612 button.jsx-1513868612{position:absolute;right:0;bottom:0;border:none;padding:10px 30px;margin:0 20px 20px 0;font-size:20px;background:black;color:#fff;}.content.jsx-1513868612{text-align:left;padding-left:30px;}.img.jsx-1513868612{background-image:url(/static/imgs/barber1.jpg);background-position:top;background-repeat:no-repeat;background-size:cover;min-width:150px !important;width:150px;height:150px;border-radius:50%;margin:auto 0;margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGJvb2tpbmdcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZNZ0IsQUFHa0IsQUFJRSxBQVVNLEFBV0QsQUFLNkIsV0E3Qm5ELEtBeUJ3QixFQVhWLFFBQ0MsUUFXYixDQVZnQixZQUNNLEFBYUksa0JBWkQsTUFhSyxHQTNCWixZQWVDLElBZEgsU0EyQlEsRUFaSCxHQWRBLGNBZU4sR0FZYyxFQTFCUixNQWVyQixhQWRvQixNQTBCTixZQXpCRSxBQTBCRCxhQUNLLGtCQUNKLGNBQ0ssbUJBQ3JCLEVBN0JvQixrQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcZGV2XFxzdG9ja2hvbG1fYmFyYmVyX2Zyb250XFxwYWdlc1xcYm9va2luZ1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGluZm86IHt9LFxyXG4gICAgY3VycmVudFN0YXRlOiAxXHJcbiAgfTtcclxuXHJcbiAgbmV4dFN0YXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IG5leHRTdGF0ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXRlICsgMTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U3RhdGU6IG5leHRTdGF0ZSB9KTtcclxuICB9O1xyXG5cclxuICBwcmV2U3RhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJldlN0YXRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgLSAxO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGF0ZTogcHJldlN0YXRlIH0pO1xyXG4gIH07XHJcblxyXG4gIGFkZEJhcmJlciA9IGJhcmJlciA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHByZXZTdGF0ZTtcclxuICAgICAgbmV3U3RhdGUuaW5mbyA9IHsgLi4ucHJldlN0YXRlLmluZm8sIGJhcmJlciB9O1xyXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubmV4dFN0YXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgYWRkU2VydmljZSA9IHNlcnZpY2UgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICBsZXQgbmV3U3RhdGUgPSBwcmV2U3RhdGU7XHJcbiAgICAgIG5ld1N0YXRlLmluZm8gPSB7IC4uLnByZXZTdGF0ZS5pbmZvLCBzZXJ2aWNlIH07XHJcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uZXh0U3RhdGUoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJib29raW5nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7Lyoge3RoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAxID8gKFxyXG4gICAgICAgICAgICAgIDxDaG9vc2VCYXJiZXIgYWRkQmFyYmVyPXt0aGlzLmFkZEJhcmJlcn0gLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgPENob29zZVNlcnZpY2UgYWRkU2VydmljZT17dGhpcy5hZGRTZXJ2aWNlfSAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gMyA/IChcclxuICAgICAgICAgICAgICA8Q29uZmlyYW10aW9uIGluZm89e3RoaXMuc3RhdGUuaW5mb30gLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9ICovfVxyXG5cclxuICAgICAgICAgICAgPENob29zZURhdGUgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICNib29raW5nIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwLjF2aDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWdzLzEuanBnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBkdW1teUJhcmJlcnMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgbmFtZTogXCJ0YXJpcVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gcG9zc2ltdXMgZWFydW0gcXVpc3F1YW0/IFF1YXNpIGRlYml0aXMgZG9sb3JlcyByZXJ1bSBxdWlidXNkYW0gYWxpcXVpZCBvbW5pcyBibGFuZGl0aWlzLlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIyXCIsXHJcbiAgICBuYW1lOiBcIlNhZmFuYVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gcG9zc2ltdXMgZWFydW0gcXVpc3F1YW0/IFF1YXNpIGRlYml0aXMgZG9sb3JlcyByZXJ1bSBxdWlidXNkYW0gYWxpcXVpZCBvbW5pcyBibGFuZGl0aWlzLlwiXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgQ2hvb3NlQmFyYmVyID0gcHJvcHMgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+VsOkbGogQmFyYmVyYXJlPC9oMT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICB7ZHVtbXlCYXJiZXJzLm1hcCgoYmFyYmVyLCBrZXkpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmJlclwiIGtleT17a2V5fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz57YmFyYmVyLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57YmFyYmVyLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5hZGRCYXJiZXIoYmFyYmVyLmlkKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVsOkbGpcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgICAgLmJhcmJlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDUwcHg7XHJcbiAgICAgICAgZmxleC1iYXNpcyA4MCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIC5iYXJiZXIgYnV0dG9uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWcge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvYmFyYmVyMS5qcGcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5sZXQgZHVtbXlTZXJ2aWNlID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIjFcIixcclxuICAgIG5hbWU6IFwiRnVsbCBDdXRcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhhcnVtIHBvc3NpbXVzIGVhcnVtIHF1aXNxdWFtPyBRdWFzaSBkZWJpdGlzIGRvbG9yZXMgcmVydW0gcXVpYnVzZGFtIGFsaXF1aWQgb21uaXMgYmxhbmRpdGlpcy5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiMlwiLFxyXG4gICAgbmFtZTogXCJIYWxmIEN1dFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gcG9zc2ltdXMgZWFydW0gcXVpc3F1YW0/IFF1YXNpIGRlYml0aXMgZG9sb3JlcyByZXJ1bSBxdWlidXNkYW0gYWxpcXVpZCBvbW5pcyBibGFuZGl0aWlzLlwiXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgQ2hvb3NlU2VydmljZSA9IHByb3BzID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGgxPlbDpGxqIEJhcmJlcmFyZTwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtY29udGFpbmVyXCI+XHJcbiAgICAgIHtkdW1teVNlcnZpY2UubWFwKChzZXJ2aWNlLCBrZXkpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcmJlclwiIGtleT17a2V5fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz57c2VydmljZS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmFkZFNlcnZpY2Uoc2VydmljZS5pZCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFbDpGxqXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICBoMSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgICAuYmFyYmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDUwcHggNTBweDtcclxuICAgICAgZmxleC1iYXNpcyA4MCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5iYXJiZXIgYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWdzL2JhcmJlcjEuanBnKTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBtaW4td2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBDb25maXJhbXRpb24gPSBwcm9wcyA9PiAoXHJcbiAgPGRpdiBpZD1cImNvbmZpcm1cIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMT5Cb29rbmluZ3MgQmVrcsOkZnRlbHNlPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25maXJtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcyl9XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPkJhcmJlcmFyZTwvc3Ryb25nPiB7cHJvcHMuaW5mby5iYXJiZXJ9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz50aWQ8L3N0cm9uZz4gUmFuZG9tIHRpZFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+UGxhdHM8L3N0cm9uZz4gSG9ybnNnYXRhbiA5N1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+UHJpczwvc3Ryb25nPiAzNTVrclxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb25maXJtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmdcclxuICAgICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBDaG9vc2VEYXRlID0gKCkgPT4gPGRpdiBpZD1cImRhdGVcIj50aGlzIGlzIHRoZSBjaG9vc2UgZGF0ZSBjb21wb25lbnQ8L2Rpdj47XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\booking\\index.js */",
    __self: this
  }));
};

var Confiramtion = function Confiramtion(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "confirm",
    className: "jsx-3385554574",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3385554574" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3385554574",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, "Booknings Bekr\xE4ftelse"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3385554574" + " " + "confirm-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, console.log(props), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3385554574",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-3385554574",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, "Barberare"), " ", props.info.barber), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3385554574",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-3385554574",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, "tid"), " Random tid"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3385554574",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-3385554574",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "Plats"), " Hornsgatan 97"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3385554574",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-3385554574",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, "Pris"), " 355kr"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3385554574",
    css: ".container.jsx-3385554574{max-width:800px;width:80%;margin:0 auto;padding:30px;background:#f7f7f7;}.confirm-container.jsx-3385554574{padding;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXGJvb2tpbmdcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdSZ0IsQUFHNkIsQUFRckIsUUFBQyxRQVBjLFVBQ0ksY0FDRCxhQUNNLG1CQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXFRhcmlxXFxEZXNrdG9wXFxkZXZcXHN0b2NraG9sbV9iYXJiZXJfZnJvbnRcXHBhZ2VzXFxib29raW5nXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaW5mbzoge30sXHJcbiAgICBjdXJyZW50U3RhdGU6IDFcclxuICB9O1xyXG5cclxuICBuZXh0U3RhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV4dFN0YXRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgKyAxO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGF0ZTogbmV4dFN0YXRlIH0pO1xyXG4gIH07XHJcblxyXG4gIHByZXZTdGF0ZSA9ICgpID0+IHtcclxuICAgIGxldCBwcmV2U3RhdGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSAtIDE7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0YXRlOiBwcmV2U3RhdGUgfSk7XHJcbiAgfTtcclxuXHJcbiAgYWRkQmFyYmVyID0gYmFyYmVyID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgbGV0IG5ld1N0YXRlID0gcHJldlN0YXRlO1xyXG4gICAgICBuZXdTdGF0ZS5pbmZvID0geyAuLi5wcmV2U3RhdGUuaW5mbywgYmFyYmVyIH07XHJcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uZXh0U3RhdGUoKTtcclxuICB9O1xyXG5cclxuICBhZGRTZXJ2aWNlID0gc2VydmljZSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHByZXZTdGF0ZTtcclxuICAgICAgbmV3U3RhdGUuaW5mbyA9IHsgLi4ucHJldlN0YXRlLmluZm8sIHNlcnZpY2UgfTtcclxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm5leHRTdGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBpZD1cImJvb2tpbmdcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgPENob29zZUJhcmJlciBhZGRCYXJiZXI9e3RoaXMuYWRkQmFyYmVyfSAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gMiA/IChcclxuICAgICAgICAgICAgICA8Q2hvb3NlU2VydmljZSBhZGRTZXJ2aWNlPXt0aGlzLmFkZFNlcnZpY2V9IC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAzID8gKFxyXG4gICAgICAgICAgICAgIDxDb25maXJhbXRpb24gaW5mbz17dGhpcy5zdGF0ZS5pbmZvfSAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH0gKi99XHJcblxyXG4gICAgICAgICAgICA8Q2hvb3NlRGF0ZSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgI2Jvb2tpbmcge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAuMXZoO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvMS5qcGcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubGV0IGR1bW15QmFyYmVycyA9IFtcclxuICB7XHJcbiAgICBpZDogXCIxXCIsXHJcbiAgICBuYW1lOiBcInRhcmlxXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjJcIixcclxuICAgIG5hbWU6IFwiU2FmYW5hXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBDaG9vc2VCYXJiZXIgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoMT5Ww6RsaiBCYXJiZXJhcmU8L2gxPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYXJiZXItY29udGFpbmVyXCI+XHJcbiAgICAgIHtkdW1teUJhcmJlcnMubWFwKChiYXJiZXIsIGtleSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPntiYXJiZXIubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntiYXJiZXIuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmFkZEJhcmJlcihiYXJiZXIuaWQpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWw6RsalxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgICAuYmFyYmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggNTBweDtcclxuICAgICAgICBmbGV4LWJhc2lzIDgwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLmJhcmJlciBidXR0b24ge1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1ncy9iYXJiZXIxLmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmxldCBkdW1teVNlcnZpY2UgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgbmFtZTogXCJGdWxsIEN1dFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gcG9zc2ltdXMgZWFydW0gcXVpc3F1YW0/IFF1YXNpIGRlYml0aXMgZG9sb3JlcyByZXJ1bSBxdWlidXNkYW0gYWxpcXVpZCBvbW5pcyBibGFuZGl0aWlzLlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIyXCIsXHJcbiAgICBuYW1lOiBcIkhhbGYgQ3V0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBwb3NzaW11cyBlYXJ1bSBxdWlzcXVhbT8gUXVhc2kgZGViaXRpcyBkb2xvcmVzIHJlcnVtIHF1aWJ1c2RhbSBhbGlxdWlkIG9tbmlzIGJsYW5kaXRpaXMuXCJcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBDaG9vc2VTZXJ2aWNlID0gcHJvcHMgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+VsOkbGogQmFyYmVyYXJlPC9oMT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1jb250YWluZXJcIj5cclxuICAgICAge2R1bW15U2VydmljZS5tYXAoKHNlcnZpY2UsIGtleSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyYmVyXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPntzZXJ2aWNlLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57c2VydmljZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuYWRkU2VydmljZShzZXJ2aWNlLmlkKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVsOkbGpcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gIGgxIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAgIC5iYXJiZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgcGFkZGluZzogNTBweCA1MHB4O1xyXG4gICAgICBmbGV4LWJhc2lzIDgwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmJhcmJlciBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZ3MvYmFyYmVyMS5qcGcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIG1pbi13aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IENvbmZpcmFtdGlvbiA9IHByb3BzID0+IChcclxuICA8ZGl2IGlkPVwiY29uZmlybVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxPkJvb2tuaW5ncyBCZWtyw6RmdGVsc2U8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmZpcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAge2NvbnNvbGUubG9nKHByb3BzKX1cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+QmFyYmVyYXJlPC9zdHJvbmc+IHtwcm9wcy5pbmZvLmJhcmJlcn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPnRpZDwvc3Ryb25nPiBSYW5kb20gdGlkXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5QbGF0czwvc3Ryb25nPiBIb3Juc2dhdGFuIDk3XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5QcmlzPC9zdHJvbmc+IDM1NWtyXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbmZpcm0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZ1xyXG4gICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IENob29zZURhdGUgPSAoKSA9PiA8ZGl2IGlkPVwiZGF0ZVwiPnRoaXMgaXMgdGhlIGNob29zZSBkYXRlIGNvbXBvbmVudDwvZGl2PjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\booking\\index.js */",
    __self: this
  }));
};

var ChooseDate = function ChooseDate() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, "this is the choose date component");
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
//# sourceMappingURL=booking.js.4a031ad75744a5e9cc14.hot-update.js.map