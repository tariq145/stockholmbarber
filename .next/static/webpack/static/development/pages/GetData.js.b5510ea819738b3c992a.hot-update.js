webpackHotUpdate("static\\development\\pages\\GetData.js",{

/***/ "./pages/GetData.js":
/*!**************************!*\
  !*** ./pages/GetData.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GetData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Tariq\\Desktop\\dev\\stockholm_barber_front\\pages\\GetData.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var GetData =
/*#__PURE__*/
function (_Component) {
  _inherits(GetData, _Component);

  function GetData() {
    _classCallCheck(this, GetData);

    return _possibleConstructorReturn(this, _getPrototypeOf(GetData).apply(this, arguments));
  }

  _createClass(GetData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(window);
      /**
       * JSON-RPC Client Exception class
       *
       * @param String code
       * @param String message
       */

      var JSONRpcClientException = function JSONRpcClientException(code, message) {
        this.code = code;
        this.message = message;
      };

      JSONRpcClientException.prototype = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.extend(JSONRpcClientException.prototype, {
        /**
         * Magic method. COnvert object to string.
         *
         * @return String
         */
        toString: function toString() {
          return "[" + this.code + "] " + this.message;
        }
      });
      /**
       * JSON-RPC Client
       *
       * @param Object options
       */

      var JSONRpcClient = function JSONRpcClient(options) {
        this.setOptions(options);
        this.init();
      };

      JSONRpcClient.prototype = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.extend(JSONRpcClient.prototype, {
        /**
         * Default options
         */
        options: {
          onerror: function onerror() {},
          onsuccess: function onsuccess() {},
          url: "",
          headers: {}
        },
        current: 1,
        onerror: null,
        onsuccess: null,
        onstart: null,

        /**
         * Init client
         */
        init: function init() {
          this.onerror = this.getParam("onerror");
          this.onsuccess = this.getParam("onsuccess");
          this.initMethods();
        },

        /**
         * Init API methiods by url
         */
        initMethods: function initMethods() {
          var instance = this; // get all methods

          jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax(this.getParam("url"), {
            async: false,
            success: function success(data) {
              if (data.methods) {
                // create method
                jquery__WEBPACK_IMPORTED_MODULE_1___default.a.each(data.methods, function (methodName, methodParams) {
                  var method = function method() {
                    var params = new Array();

                    for (var i = 0; i < arguments.length; i++) {
                      params.push(arguments[i]);
                    }

                    var id = instance.current++;
                    var callback = params[params.length - 1];
                    var request = {
                      jsonrpc: "2.0",
                      method: methodName,
                      params: params,
                      id: id
                    };
                    var async = false;

                    if (jquery__WEBPACK_IMPORTED_MODULE_1___default.a.type(callback) == "function") {
                      async = true;
                      params.pop();
                    }

                    var res = null; // API request

                    jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax(instance.getParam("url"), {
                      contentType: "application/json",
                      type: methodParams.transport,
                      processData: false,
                      dataType: "jsonp",
                      cache: false,
                      data: JSON.stringify(request),
                      headers: instance.getParam("headers"),
                      async: async,
                      success: function success(result) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_1___default.a.type(result.error) == "object") {
                          res = new JSONRpcClientException(result.error.code, result.error.message);
                          instance.onerror(res);
                        } else {
                          res = result.result;

                          if (jquery__WEBPACK_IMPORTED_MODULE_1___default.a.type(callback) == "function") {
                            callback(res);
                          }
                        }

                        instance.onsuccess(res, id, methodName);
                      }
                    });

                    if (!async) {
                      return res;
                    }
                  };

                  instance[methodName] = method;
                });
              } else {
                throw Exception("Methods could not be found");
              }
            }
          });
        },

        /**
         * Set client options
         *
         * @param Object options
         */
        setOptions: function setOptions(options) {
          this.options = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.extend({}, this.options, options);
        },

        /**
         * Get client param, if param is not available in this.options return defaultValue
         *
         * @param String key
         * @param mixed defaultValue
         * @return mixed
         */
        getParam: function getParam(key, defaultValue) {
          if (jquery__WEBPACK_IMPORTED_MODULE_1___default.a.type(this.options[key]) != "undefined") {
            return this.options[key];
          }

          return defaultValue;
        }
      });
      var client = new JSONRpcClient({
        url: "//user-api.simplybook.me",
        headers: {
          "X-Company-Login": "{companyLogin}",
          "X-Token": "{token}"
        },
        onerror: function onerror(error) {
          alert(error);
        }
      });
      var services = client.getEventList();
      console.log(services);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "THis is the data getter");
    }
  }]);

  return GetData;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/GetData")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=GetData.js.b5510ea819738b3c992a.hot-update.js.map