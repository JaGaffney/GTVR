/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./gtvr/frontend/src/index.js","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./gtvr/frontend/src/actions/lessons.js":
/*!**********************************************!*\
  !*** ./gtvr/frontend/src/actions/lessons.js ***!
  \**********************************************/
/*! exports provided: getLessons, deleteLesson, addLesson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLessons\", function() { return getLessons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteLesson\", function() { return deleteLesson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addLesson\", function() { return addLesson; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./gtvr/frontend/src/actions/types.js\");\n // import { createMessage, returnError } from './messages'\n// import { tokenConfig } from './auth'\n\n // GET_LESSONS\n\nvar getLessons = function getLessons() {\n  return function (dispatch) {\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/lessons/\").then(function (res) {\n      dispatch({\n        type: _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_LESSONS\"],\n        payload: res.data\n      });\n    }).catch(function (err) {\n      return console.log(err);\n    });\n  };\n}; // DELETE_LESSON\n\nvar deleteLesson = function deleteLesson(id) {\n  return function (dispatch, getState) {\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(\"/api/lesson/\".concat(id, \"/\")).then(function (res) {\n      dispatch({\n        type: _types__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_LESSON\"],\n        payload: id\n      });\n    }).catch(function (err) {\n      return console.log(err);\n    });\n  };\n}; // ADD_LESSON\n\nvar addLesson = function addLesson(lesson) {\n  return function (dispatch, getState) {\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"/api/lessons\", lesson).then(function (res) {\n      dispatch({\n        type: _types__WEBPACK_IMPORTED_MODULE_1__[\"ADD_LESSON\"],\n        payload: res.data\n      });\n    }).catch(function (err) {\n      return dispatch(returnError(err.response.data, err.response.status));\n    });\n  };\n}; // // Update Job\n// export const updateLead = (id, lead) => (dispatch, getState) => {\n//     axios\n//         .put(`/api/leads/${id}/`, lead, tokenConfig(getState))\n//         .then(res => {\n//             dispatch(createMessage({ addLead: 'Lead Updated' }))\n//             dispatch({\n//             type: UPDATE_LEAD,\n//             payload: lead \n//             })\n//         })\n//         .catch(err => console.log(err));\n// }\n\n//# sourceURL=webpack:///./gtvr/frontend/src/actions/lessons.js?");

/***/ }),

/***/ "./gtvr/frontend/src/actions/types.js":
/*!********************************************!*\
  !*** ./gtvr/frontend/src/actions/types.js ***!
  \********************************************/
/*! exports provided: GET_LESSONS, DELETE_LESSON, ADD_LESSON, UPDATE_LESSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_LESSONS\", function() { return GET_LESSONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_LESSON\", function() { return DELETE_LESSON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_LESSON\", function() { return ADD_LESSON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_LESSON\", function() { return UPDATE_LESSON; });\n// Leads data\nvar GET_LESSONS = \"GET_LESSONS\";\nvar DELETE_LESSON = 'DELETE_LESSON';\nvar ADD_LESSON = \"ADD_LESSON\";\nvar UPDATE_LESSON = \"UPDATE_LESSON\";\n\n//# sourceURL=webpack:///./gtvr/frontend/src/actions/types.js?");

/***/ }),

/***/ "./gtvr/frontend/src/components/App.js":
/*!*********************************************!*\
  !*** ./gtvr/frontend/src/components/App.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/Header */ \"./gtvr/frontend/src/components/layout/Header.js\");\n/* harmony import */ var _layout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/Footer */ \"./gtvr/frontend/src/components/layout/Footer.js\");\n/* harmony import */ var _home_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/Home */ \"./gtvr/frontend/src/components/home/Home.js\");\n/* harmony import */ var _common_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/About */ \"./gtvr/frontend/src/components/common/About.js\");\n/* harmony import */ var _lessons_LessonDashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lessons/LessonDashboard */ \"./gtvr/frontend/src/components/lessons/LessonDashboard.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ \"./gtvr/frontend/src/store.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n // Created Imports\n//layout\n\n\n // pages\n\n\n\n // Redux store\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"Provider\"], {\n        store: _store__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"HashRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"App\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"area__header\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"area__main\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        exact: true,\n        path: \"/\",\n        component: _home_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        exact: true,\n        path: \"/about\",\n        component: _common_About__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        exact: true,\n        path: \"/lessons\",\n        component: _lessons_LessonDashboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"area__footer\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack:///./gtvr/frontend/src/components/App.js?");

/***/ }),

/***/ "./gtvr/frontend/src/components/common/About.js":
/*!******************************************************!*\
  !*** ./gtvr/frontend/src/components/common/About.js ***!
  \******************************************************/
/*! exports provided: About, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"About\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar About =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(About, _Component);\n\n  function About() {\n    _classCallCheck(this, About);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(About).apply(this, arguments));\n  }\n\n  _createClass(About, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"about__div-Area\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"about__div\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"About\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"info on what the product is as well has how to use, info about James due to his masters on the subject to it has a more professional feel to it\")));\n    }\n  }]);\n\n  return About;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./gtvr/frontend/src/components/common/About.js?");

/***/ }),

/***/ "./gtvr/frontend/src/components/home/Home.js":
/*!***************************************************!*\
  !*** ./gtvr/frontend/src/components/home/Home.js ***!
  \***************************************************/
/*! exports provided: Home, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/About */ \"./gtvr/frontend/src/components/common/About.js\");\n/* harmony import */ var _lessons_LessonDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lessons/LessonDashboard */ \"./gtvr/frontend/src/components/lessons/LessonDashboard.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"homepage__div-Area\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"homepage__div-info\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Homepage\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"give it a landing page type of feel and look\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_About__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lessons_LessonDashboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./gtvr/frontend/src/components/home/Home.js?");

/***/ }),

/***/ "./gtvr/frontend/src/components/layout/Footer.js":
/*!*******************************************************!*\
  !*** ./gtvr/frontend/src/components/layout/Footer.js ***!
  \*******************************************************/
/*! exports provided: Footer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Footer =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Footer, _Component);\n\n  function Footer() {\n    _classCallCheck(this, Footer);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));\n  }\n\n  _createClass(Footer, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n        className: \"footer-distributed\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"footer-left\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"logo here\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"footer-links\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\"\n      }, \"Home\"), \"\\xB7\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/lessons\"\n      }, \"Lessons\"), \"\\xB7\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/about\"\n      }, \"About\"), \"\\xB7\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"#\"\n      }, \"Contact (soon)\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"footer-company-name\"\n      }, \"Great Teacher VR \\xA9 2019\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"footer-center\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"fa fa-phone\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"phone number here\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"fa fa-envelope\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"\"\n      }, \"jon.adam.gaffney@gmail.com\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"footer-right\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"footer-company-about\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"About Great Teacher VR\"), \"Info here\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"footer-icons\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"#\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"fa fa-facebook\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"#\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"fa fa-twitter\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://trello.com/b/C18HgKfU/great-teacher-virtual-reality\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"fa fa-trello\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://github.com/JaGaffney/GTVR/\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"fa fa-github\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://jongaffney.tech/\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, '{ ', \"j\")))));\n    }\n  }]);\n\n  return Footer;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./gtvr/frontend/src/components/layout/Footer.js?");

/***/ }),

/***/ "./gtvr/frontend/src/components/layout/Header.js":
/*!*******************************************************!*\
  !*** ./gtvr/frontend/src/components/layout/Header.js ***!
  \*******************************************************/
/*! exports provided: Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Header =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n        className: \"header__nav\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"header__nav-ul\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"header__nav-li\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\"\n      }, \"Logo/Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"header__nav-li-right\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/about\"\n      }, \"About\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"header__nav-li-right\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/lessons\"\n      }, \"Lessons\"))));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./gtvr/frontend/src/components/layout/Header.js?");

/***/ }),

/***/ "./gtvr/frontend/src/components/lessons/LessonDashboard.js":
/*!*****************************************************************!*\
  !*** ./gtvr/frontend/src/components/lessons/LessonDashboard.js ***!
  \*****************************************************************/
/*! exports provided: LessonDashboard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LessonDashboard\", function() { return LessonDashboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Lessons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lessons */ \"./gtvr/frontend/src/components/lessons/Lessons.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar LessonDashboard =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(LessonDashboard, _Component);\n\n  function LessonDashboard() {\n    _classCallCheck(this, LessonDashboard);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(LessonDashboard).apply(this, arguments));\n  }\n\n  _createClass(LessonDashboard, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"lessonDashboard__div-Area\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"lessonDashboard__div\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lessons__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n    }\n  }]);\n\n  return LessonDashboard;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (LessonDashboard);\n\n//# sourceURL=webpack:///./gtvr/frontend/src/components/lessons/LessonDashboard.js?");

/***/ }),

/***/ "./gtvr/frontend/src/components/lessons/LessonSingle.js":
/*!**************************************************************!*\
  !*** ./gtvr/frontend/src/components/lessons/LessonSingle.js ***!
  \**************************************************************/
/*! exports provided: LessonSingle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LessonSingle\", function() { return LessonSingle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar LessonSingle =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(LessonSingle, _Component);\n\n  function LessonSingle() {\n    _classCallCheck(this, LessonSingle);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(LessonSingle).apply(this, arguments));\n  }\n\n  _createClass(LessonSingle, [{\n    key: \"lessonGeneration\",\n    value: function lessonGeneration(video) {\n      console.log(video);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"LessonSingle__video-card\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"ID number: \", video.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Video Title: \", video.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Video Link: \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"iframe\", {\n        width: \"170\",\n        height: \"95\",\n        src: \"https://www.youtube.com/embed/\".concat(video.link),\n        frameBorder: \"0\",\n        allow: \"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\",\n        allowFullScreen: true\n      })));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      console.log(this.props.lessonInfo);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, this.props.lessonInfo.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Teacher name:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, this.props.lessonInfo.subject), this.props.lessonInfo.videos.map(function (lesson) {\n        return _this.lessonGeneration(lesson);\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null));\n    }\n  }]);\n\n  return LessonSingle;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (LessonSingle);\n\n//# sourceURL=webpack:///./gtvr/frontend/src/components/lessons/LessonSingle.js?");

/***/ }),

/***/ "./gtvr/frontend/src/components/lessons/Lessons.js":
/*!*********************************************************!*\
  !*** ./gtvr/frontend/src/components/lessons/Lessons.js ***!
  \*********************************************************/
/*! exports provided: Lessons, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Lessons\", function() { return Lessons; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_lessons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/lessons */ \"./gtvr/frontend/src/actions/lessons.js\");\n/* harmony import */ var _LessonSingle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LessonSingle */ \"./gtvr/frontend/src/components/lessons/LessonSingle.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Lessons =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Lessons, _Component);\n\n  function Lessons() {\n    var _getPrototypeOf2;\n\n    var _temp, _this;\n\n    _classCallCheck(this, Lessons);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Lessons)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {\n      loadSingle: false,\n      lessonData: \"\"\n    }, _this.loadSingleLesson = function (lesson) {\n      _this.setState({\n        loadSingle: true,\n        lessonData: lesson\n      });\n    }, _this.onLessonPageHandler = function () {\n      _this.setState({\n        loadSingle: false\n      });\n    }, _temp));\n  }\n\n  _createClass(Lessons, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.getLessons();\n    } // Single page component handlering\n\n  }, {\n    key: \"tableGenerator\",\n    value: function tableGenerator() {\n      var _this2 = this;\n\n      if (this.props.lessons.length >= 1) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"ID\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Subject\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Video Title\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Video Link\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, this.props.lessons.map(function (lesson) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n            key: lesson[\"id\"],\n            onClick: _this2.loadSingleLesson.bind(_this2, lesson)\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, lesson[\"id\"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, lesson['name']), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, lesson['subject']), lesson[\"videos\"].map(function (video) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n              key: video.id + video.title\n            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, video.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"iframe\", {\n              width: \"170\",\n              height: \"95\",\n              src: \"https://www.youtube.com/embed/\".concat(video.link),\n              frameBorder: \"0\",\n              allow: \"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\",\n              allowFullScreen: true\n            })));\n          }));\n        })));\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Lessons\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), this.state.loadSingle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LessonSingle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        lessonInfo: this.state.lessonData\n      }), !this.state.loadSingle && this.tableGenerator());\n    }\n  }]);\n\n  return Lessons;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\nLessons.propTypes = {\n  lessons: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired // getJobs: PropTypes.func.isRequired,\n\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    lessons: state.lessons.lessons\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n  getLessons: _actions_lessons__WEBPACK_IMPORTED_MODULE_3__[\"getLessons\"]\n})(Lessons));\n\n//# sourceURL=webpack:///./gtvr/frontend/src/components/lessons/Lessons.js?");

/***/ }),

/***/ "./gtvr/frontend/src/index.js":
/*!************************************!*\
  !*** ./gtvr/frontend/src/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./gtvr/frontend/src/components/App.js\");\n\n\n//# sourceURL=webpack:///./gtvr/frontend/src/index.js?");

/***/ }),

/***/ "./gtvr/frontend/src/reducers/index.js":
/*!*********************************************!*\
  !*** ./gtvr/frontend/src/reducers/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _lessons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lessons */ \"./gtvr/frontend/src/reducers/lessons.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  lessons: _lessons__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./gtvr/frontend/src/reducers/index.js?");

/***/ }),

/***/ "./gtvr/frontend/src/reducers/lessons.js":
/*!***********************************************!*\
  !*** ./gtvr/frontend/src/reducers/lessons.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types.js */ \"./gtvr/frontend/src/actions/types.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  lessons: [] // set lesson\n  // let updateStateInfo = (stateArray, action) => {\n  //   let updatedLesson = []\n  //   stateArray.filter(lesson => {\n  //     if (lesson.id === action.payload.id) {\n  //         updatedLesson = [...updatedLesson, action.payload]\n  //     } else {\n  //         updatedLesson = [...updatedLesson, lesson]\n  //     }\n  //   })\n  //   return updatedLesson\n  // }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  // common convetion is to use a switch with cases\n  switch (action.type) {\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"GET_LESSONS\"]:\n      return _objectSpread({}, state, {\n        lessons: action.payload\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"DELETE_LESSON\"]:\n      return _objectSpread({}, state, {\n        lessons: state.lessons.filter(function (lesson) {\n          return lesson.id !== action.payload;\n        })\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"ADD_LESSON\"]:\n      return _objectSpread({}, state, {\n        lessons: [].concat(_toConsumableArray(state.lessons), [action.payload])\n      });\n\n    default:\n      return state;\n  }\n}); // case UPDATE_LEAD:\n// // probally not a good way of updating the state value but i couldnt work out a better way\n//   return {\n//     ...state,\n//     leads: updateStateInfo(state.leads, action),\n//     allLeads: updateStateInfo(state.allLeads, action)\n//   }\n\n//# sourceURL=webpack:///./gtvr/frontend/src/reducers/lessons.js?");

/***/ }),

/***/ "./gtvr/frontend/src/store.js":
/*!************************************!*\
  !*** ./gtvr/frontend/src/store.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./gtvr/frontend/src/reducers/index.js\");\n\n\n\n\nvar initialState = {};\nvar middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__[\"composeWithDevTools\"])(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"].apply(void 0, middleware)));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./gtvr/frontend/src/store.js?");

/***/ })

/******/ });