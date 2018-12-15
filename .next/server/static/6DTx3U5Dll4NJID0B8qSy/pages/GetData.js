module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GetData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
                      dataType: "json",
                      cache: false,
                      data: JSON.stringify(request),
                      headers: _objectSpread({}, instance.getParam("headers")),
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
      var loginClient = new JSONRpcClient({
        url: "//user-api.simplybook.me/login",
        onerror: function onerror(error) {
          alert(error);
        }
      });
      var name = "stockholmbarber";
      var api_key = "d7502608fde2546f82521763aee405e88d6b8035fa7367224022dfbf4308070c";
      var token = loginClient.getToken(name, api_key);
      var client = new JSONRpcClient({
        url: "//user-api.simplybook.me",
        headers: {
          "X-Company-Login": name,
          "X-Token": token
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "THis is the data getter");
    }
  }]);

  return GetData;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ })

/******/ });