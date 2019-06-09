/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/Person.svg":
/*!*******************************!*\
  !*** ./src/images/Person.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/Person.svg\";\n\n//# sourceURL=webpack:///./src/images/Person.svg?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<!doctype html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta name=\\\"viewport\\\"\\n    content=\\\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n  <title>Document</title>\\n  <script src=\\\"https://code.jquery.com/jquery-3.4.1.min.js\\\"\\n    integrity=\\\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\\\" crossorigin=\\\"anonymous\\\">\\n    </script>\\n</head>\\n\\n<body>\\n  <!-- ---------------------navigation-------------- -->\\n  <section class=\\\"header main-width\\\">\\n\\n    <h2 class=\\\"header__logo\\\">shopabc.pl</h2>\\n\\n    <div class=\\\"nav-icon\\\">\\n      <div class=\\\"nav-icon-open\\\">\\n        <div class=\\\"nav-icon-open__element\\\"></div>\\n        <div class=\\\"nav-icon-open__element\\\"></div>\\n        <div class=\\\"nav-icon-open__element\\\"></div>\\n      </div>\\n\\n      <div class=\\\"nav-icon-close\\\">\\n        <div class=\\\"nav-icon-close__element\\\"></div>\\n        <div class=\\\"nav-icon-close__element\\\"></div>\\n      </div>\\n\\n    </div>\\n\\n\\n    <ul class=\\\"nav-bar\\\">\\n      <li class='nav-bar__link'><a href=\\\"\\\">DLACZEGO MY</a></licla>\\n      <li class='nav-bar__link'><a href=\\\"\\\">KORZYŚCI</a></li>\\n      <li class='nav-bar__link'><a href=\\\"\\\">CENY</a></li>\\n      <li class='nav-bar__link'><a href=\\\"\\\">KONTAKT</a></li>\\n    </ul>\\n\\n  </section>\\n\\n  <!-- ---------------------info-------------- -->\\n\\n  <section class=\\\"info main-width\\\">\\n\\n    <div class=\\\"advert\\\">\\n      <h2 class=\\\"advert__header\\\">Sprzedawaj więcej!</h2>\\n      <span class=\\\"advert__description\\\">Otwarcie sklepu na naszej platformie, dramatycznie zwiększy twoją\\n        sprzedaż</span>\\n      <div class=\\\"advert__button\\\"><span>Otwórz swój sklep</span></div>\\n    </div>\\n    <div class=\\\"info__image\\\"></div>\\n    <div class=\\\"stats\\\">\\n      <h2 class=\\\"stats__header\\\"></h2>\\n      <div>\\n        <img src=\\\"\" + __webpack_require__(/*! ./images/Person.svg */ \"./src/images/Person.svg\") + \"\\\" alt=\\\"person\\\">\\n      </div>\\n    </div>\\n    <spa>trolololo</spa>\\n    <span>.........123123123................</span>\\n\\n  </section>\\n\\n\\n\\n</body>\\n\\n</html>\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../index.html */ \"./src/index.html\");\n\n$(function () {\n  // console.log('App Loaded!!!');\n  var openMenu = $('.nav-icon-open');\n  var closeMenu = $('.nav-icon-close');\n  var navBar = $('.nav-bar');\n  console.log(openMenu, closeMenu, navBar);\n  openMenu.on('click', function () {\n    console.log('test');\n    $(this).css('visibility', 'hidden');\n    closeMenu.css('visibility', 'visible');\n    navBar.slideDown();\n  });\n  closeMenu.on('click', function () {\n    $(this).css('visibility', 'hidden');\n    openMenu.css('visibility', 'visible');\n    navBar.slideUp();\n  });\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/main.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/app.js */\"./src/js/app.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/main.scss */\"./src/scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js_./src/scss/main.scss?");

/***/ })

/******/ });