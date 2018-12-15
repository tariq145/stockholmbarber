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
        className: "jsx-2430262814",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-2430262814",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2430262814",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "V\xE5ra Tj\xE4nster"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2430262814" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2430262814" + " " + "service-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, Object.keys(this.state.services).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: key,
          className: "jsx-2430262814" + " " + "service-type",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "jsx-2430262814",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, key), _this2.state.services[key].map(function (service, servKey) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: servKey,
            className: "jsx-2430262814" + " " + "service",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-2430262814" + " " + "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }, service.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-2430262814" + " " + "description",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, service.description, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-2430262814" + " " + "time",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: "/static/imgs/clock.png",
            alt: "",
            className: "jsx-2430262814",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
            className: "jsx-2430262814",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, service.time))));
        }));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2430262814",
        css: "#services.jsx-2430262814{min-height:1000px;position:relative;background-image:url(/static/imgs/6.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-2430262814{padding:100px 0;}h1.jsx-2430262814{color:#fff;position:relative;z-index:3;}h2.jsx-2430262814{margin-top:80px;text-transform:uppercase;font-size:30px;font-weight:bold;}#services.jsx-2430262814:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.6);z-index:2;}.container.jsx-2430262814{position:relative;z-index:3;color:#fff;width:95%;margin:0 auto;}.service-container.jsx-2430262814{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.service-type.jsx-2430262814{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}.service.jsx-2430262814{padding:20px 40px;width:100%;background:#f9f9f9;color:#000;text-align:left;margin:0 auto;margin-bottom:25px;}.service.jsx-2430262814:last-of-type{margin-bottom:0;}@media screen and (min-width:1050px){.service-type.jsx-2430262814{-webkit-flex-basis:40%;-ms-flex-preferred-size:40%;flex-basis:40%;}}.name.jsx-2430262814{font-size:28px;font-weight:bold;margin-bottom:15px;}.description.jsx-2430262814{color:#373d3f;}.price.jsx-2430262814{font-weight:bold;}.time.jsx-2430262814{margin-top:20px;font-size:18px;position:relative;}.time.jsx-2430262814 img.jsx-2430262814{position:relative;top:3px;width:20px;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXGRldlxcc3RvY2tob2xtX2JhcmJlcl9mcm9udFxccGFnZXNcXHNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDb0IsQUFHK0IsQUFRRixBQUlMLEFBS0ssQUFPTCxBQVdPLEFBUUwsQUFNRyxBQUlFLEFBVUYsQUFLQyxBQUtGLEFBTUQsQUFJRyxBQUdELEFBTUUsV0EvRUEsQUFZQSxHQXVEcEIsQ0FObUIsQ0FqRW5CLEFBUzJCLEFBOEMzQixBQXVCaUIsQ0FIakIsQ0FuRm9CLEFBbUNSLEFBa0JDLEFBdUNILFFBQ0csRUF6REEsQ0F2QkQsQUFZSixBQTZCYSxFQWlDRCxDQWJDLEdBaERWLENBekJnQyxDQTZGdkIsRUFoRnBCLEFBdUJZLEVBbkJLLEdBU1AsSUE0QkcsQ0FqQkcsQUFrRGhCLEVBYkEsQ0EvQ1MsR0FtRVQsQ0E1RW1CLEdBVWEsQUEyQmQsSUFqQmxCLEdBNkJFLEdBbkJGLElBN0JBLENBdUJpQixDQWNELEVBdkRhLFNBNEJqQixHQTRCUyxPQTNCckIsUUE1QjhCLElBd0Q5Qix1QkFmK0IsQ0F4Q1Asc0JBQ3hCLG9HQXdDQSIsImZpbGUiOiJDOlxcVXNlcnNcXFRhcmlxXFxEZXNrdG9wXFxkZXZcXHN0b2NraG9sbV9iYXJiZXJfZnJvbnRcXHBhZ2VzXFxzZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmNsYXNzIFNlcnZpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNlcnZpY2VzOiBzdGF0aWNTZXJ2aWNlc1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge31cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGlkPVwic2VydmljZXNcIj5cclxuICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICA8aDE+VsOlcmEgVGrDpG5zdGVyPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5zZXJ2aWNlcykubWFwKGtleSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS10eXBlXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57a2V5fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VydmljZXNba2V5XS5tYXAoKHNlcnZpY2UsIHNlcnZLZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZVwiIGtleT17c2VydktleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntzZXJ2aWNlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWdzL2Nsb2NrLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntzZXJ2aWNlLnRpbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICNzZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWdzLzYuanBnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNzZXJ2aWNlczpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VydmljZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZXJ2aWNlLXR5cGUge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZXJ2aWNlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZXJ2aWNlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA1MHB4KSB7XHJcbiAgICAgICAgICAgIC5zZXJ2aWNlLXR5cGUge1xyXG4gICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM3M2QzZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpbWUgaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xyXG5cclxubGV0IHN0YXRpY1NlcnZpY2VzID0ge1xyXG4gIHZhbmxpZzogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIktsaXBwbmluZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkLDtnJqYSBtZWQgZXR0IG9yZGVudGxpZ3Qgc2FtcsOlZCwgb2NoIHNlZGFuIGFudsOkbmRhIHRyYWRpdGlvbmVsbGEgYmFyYmVyaW5nc21ldG9kZXIgc29tIGFudsOkbmRzIGbDtnIgYXR0IHNrcsOkZGRhcnN5IGt1bmRlcm5hcyDDtm5za2FkZSBibGljaywgcHJlcGFyZXJhZGUgbWVkIHByZW1pdW1ow6VycHJvZHVrdGVyLCBvY2ggc2x1dGFyIG1lZCBlbiBrbGFzc2lzayByYWtuaW5nIHDDpSBuYWNrZW4uXCIsXHJcbiAgICAgIHRpbWU6IFwiNDVtaW5cIixcclxuICAgICAgcHJpczogXCI0ODBrclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJ1enogQ3V0XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQsO2cmphIG1lZCBlbiBrb25zdWx0YXRpb24sIHNlZGFuIHRhciB2aSBzYW1tYSBsw6RuZ2Qgw7Z2ZXIgaGVsYSBodXZ1ZGV0IG1lZCBlbiBrbGlwcG1hc2tpbiwgZsO2bGp0IGF2IGF0dCBkZXRhbGplcmEgZGUgeXR0cmUgbGluamVybmEgaSBow6Vya2xpcHBuaW5nZW4gb2NoIG5hY2tlbiBtZWQgcmFrIHJha2h5dmVsLlwiLFxyXG4gICAgICB0aW1lOiBcIjE1bWluXCIsXHJcbiAgICAgIHByaXM6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU2vDpGdndHJpbVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIktvbnN1bHRhdGlvbiwgVHJpbW5pbmcgYXYgc2vDpGdnZXQgdGlsbCDDtm5za2FkIGzDpG5nZCwgdmFybSBoYW5kZHVrIG9jaCBkZWZpbmllcmluZyBhdiBza8OkZ2dsaW5qZW4gbWVkIGV0dCByYWtibGFkLlwiLFxyXG4gICAgICB0aW1lOiBcIjMwbWluXCIsXHJcbiAgICAgIHByaXM6IFwiMzAwa3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTbMOkdHJha25pbmdcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJLb25zdWx0YXRpb24sIGF2a29wcGxhbmRlIGhhbmRkdWtow6RmdG5pbmcsIGbDtnJza8Okcm5pbmdzb2xqYSBvY2ggdmFybSBza3VtIGZyw6VuIGVuIGV4Zm9saWVyYW5kZSBiYWRnZXJow6VyYm9yc3RlLiBEw6RyZWZ0ZXIgZ8OlciByYWtibGFkZWQgbWVkIGtvcm5ldCBvY2ggdGFyIGJvcnQgZXZlbnR1ZWxsYSBzdHViYmFyLiBGw6RyZGlnIG1lZCBlbiB1cHBmcmlza2FuZGUga3lsZCBoYW5kZHVrc2xpbmRuaW5nIG9jaCBlbiBQcmVtaXVtIEFmdGVyLVNoYXZlIGxvdGlvbi5cIixcclxuICAgICAgdGltZTogXCIzMG1pblwiLFxyXG4gICAgICBwcmlzOiBcIjQwMGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiS2xpcHBuaW5nICsgU2vDpGdndHJpbVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkLDtnJqYSBtZWQgZW4gb3JkZW50bGlnIGtvbnN1bHRhdGlvbiBvY2ggc2VkYW4gYW52w6RuZGEgdHJhZGl0aW9uZWxsYSBiYXJiZXJpbmdzbWV0b2RlciBzb20gYW52w6RuZHMgZsO2ciBhdHQgc2tyw6RkZGFyc3kgZGV0IMO2bnNrYWRlIHV0c2VlbmRldCwgcHJlcGFyZXJhcyBtZWQgYWxsYSBwcmVtaXVtaMOlciBvY2ggc2vDpGdncHJvZHVrdGVyLCBvY2ggc2x1dGFyIG1lZCBlbiBrbGFzc2lzayByYWtoeXZlbCByYWthIHJ1bnQgaGFsc2VuIG9jaCBuYWNrZWhhbHNlbi5cIixcclxuICAgICAgdGltZTogXCIxaCAxNW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjcwMGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiS2xpcHBuaW5nICsgU2zDpHRyYWtuaW5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiRGV0IGjDpHIgw6RyIHbDpXIgdGFrZSBww6UgZGVuIGtsYXNzaXNrYSBmcmlzeXJlbiBvY2ggYWZmw6Ryc21hbmVucyBsb29rLlwiLFxyXG4gICAgICB0aW1lOiBcIjFoIDMwbWluXCIsXHJcbiAgICAgIHByaXM6IFwiODAwa3JcIlxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3BlY2lhbDogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlZheG5pbmcgw5Zyb24tS2luZFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJFbiBiZWhhbmRsaW5nIHNvbSB0b3VjaGFyIHVwcCBvY2ggZnJhbWjDpHZlciBkaWdcIixcclxuICAgICAgdGltZTogXCIxNW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjEyMGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVHLDpWRuaW5nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRyw6VkbmluZy5cIixcclxuICAgICAgdGltZTogXCIxNW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjEyMGtyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3R5bGluZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJUYXIgZnJhbSBkZXQgYsOkc3RhIHVyIGRpbiBmcmlzeXJcIixcclxuICAgICAgdGltZTogXCIxNW1pblwiLFxyXG4gICAgICBwcmlzOiBcIjEyMGtyXCJcclxuICAgIH1cclxuICBdXHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\services.js */",
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
//# sourceMappingURL=services.js.fb3e55fb02b447e4e24e.hot-update.js.map