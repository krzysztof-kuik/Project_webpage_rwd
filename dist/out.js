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

/***/ "./src/images/ArrowDown.svg":
/*!**********************************!*\
  !*** ./src/images/ArrowDown.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/ArrowDown.svg\";\n\n//# sourceURL=webpack:///./src/images/ArrowDown.svg?");

/***/ }),

/***/ "./src/images/Catalog.svg":
/*!********************************!*\
  !*** ./src/images/Catalog.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/Catalog.svg\";\n\n//# sourceURL=webpack:///./src/images/Catalog.svg?");

/***/ }),

/***/ "./src/images/Eye.svg":
/*!****************************!*\
  !*** ./src/images/Eye.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/Eye.svg\";\n\n//# sourceURL=webpack:///./src/images/Eye.svg?");

/***/ }),

/***/ "./src/images/Macbook.png":
/*!********************************!*\
  !*** ./src/images/Macbook.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/Macbook.png\";\n\n//# sourceURL=webpack:///./src/images/Macbook.png?");

/***/ }),

/***/ "./src/images/Person.svg":
/*!*******************************!*\
  !*** ./src/images/Person.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/Person.svg\";\n\n//# sourceURL=webpack:///./src/images/Person.svg?");

/***/ }),

/***/ "./src/images/Trumpet.png":
/*!********************************!*\
  !*** ./src/images/Trumpet.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/Trumpet.png\";\n\n//# sourceURL=webpack:///./src/images/Trumpet.png?");

/***/ }),

/***/ "./src/images/iPhone.png":
/*!*******************************!*\
  !*** ./src/images/iPhone.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/iPhone.png\";\n\n//# sourceURL=webpack:///./src/images/iPhone.png?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<!doctype html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta name=\\\"viewport\\\"\\n    content=\\\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n  <title>Document</title>\\n  <script src=\\\"https://code.jquery.com/jquery-3.4.1.min.js\\\"\\n    integrity=\\\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\\\" crossorigin=\\\"anonymous\\\">\\n    </script>\\n</head>\\n\\n<body>\\n  <!-- ---------------------navigation-------------- -->\\n  <section class=\\\"header main-width\\\">\\n\\n    <h2 class=\\\"header__logo\\\">shopabc.pl</h2>\\n\\n    <div class=\\\"nav-icon\\\">\\n      <div class=\\\"nav-icon-open\\\">\\n        <div class=\\\"nav-icon-open__element\\\"></div>\\n        <div class=\\\"nav-icon-open__element\\\"></div>\\n        <div class=\\\"nav-icon-open__element\\\"></div>\\n      </div>\\n\\n      <div class=\\\"nav-icon-close\\\">\\n        <div class=\\\"nav-icon-close__element\\\"></div>\\n        <div class=\\\"nav-icon-close__element\\\"></div>\\n      </div>\\n\\n    </div>\\n\\n\\n    <ul class=\\\"nav-bar\\\">\\n      <li class='nav-bar__link'><a href=\\\"\\\">DLACZEGO MY</a></licla>\\n      <li class='nav-bar__link'><a href=\\\"\\\">KORZYŚCI</a></li>\\n      <li class='nav-bar__link'><a href=\\\"\\\">CENY</a></li>\\n      <li class='nav-bar__link'><a href=\\\"\\\">KONTAKT</a></li>\\n    </ul>\\n\\n  </section>\\n\\n  <!-- ---------------------info-------------- -->\\n\\n  <section class=\\\"info main-width\\\">\\n\\n    <div class=\\\"advert\\\">\\n      <h2 class=\\\"advert__header\\\">Sprzedawaj więcej!</h2>\\n      <span class=\\\"advert__description\\\">Otwarcie sklepu na naszej platformie, dramatycznie zwiększy twoją\\n        sprzedaż</span>\\n      <div class=\\\"advert__button\\\"><span>Otwórz swój sklep</span></div>\\n    </div>\\n\\n    <div class=\\\"info__image\\\"></div>\\n\\n    <div class=\\\"stats-section main-width\\\">\\n      <div class=\\\"stats\\\">\\n        <h2 class=\\\"stats__header\\\">Najpopularniejsza platforma sprzedażowa w kraju</h2>\\n        <div class=\\\"stats-container\\\">\\n          <span class=\\\"stats-container__null null-first\\\"></span>\\n          <img class=\\\"stats-container__image\\\" src=\\\"\" + __webpack_require__(/*! ./images/Person.svg */ \"./src/images/Person.svg\") + \"\\\" alt=\\\"person\\\">\\n          <span class=\\\"stats-container__quantity\\\">100000+</span>\\n          <span class=\\\"stats-container__of-what\\\">wizyt dziennie</span>\\n        </div>\\n        <div class=\\\"stats-container\\\">\\n          <span class=\\\"stats-container__null null-second\\\"></span>\\n          <img class=\\\"stats-container__image\\\" src=\\\"\" + __webpack_require__(/*! ./images/Eye.svg */ \"./src/images/Eye.svg\") + \"\\\" alt=\\\"person\\\">\\n          <span class=\\\"stats-container__quantity\\\">2000000+</span>\\n          <span class=\\\"stats-container__of-what\\\">obejrzanych każdego dnia produktów</span>\\n        </div>\\n        <div class=\\\"stats-container\\\">\\n          <span class=\\\"stats-container__null null-third\\\"></span>\\n          <img class=\\\"stats-container__image\\\" src=\\\"\" + __webpack_require__(/*! ./images/Catalog.svg */ \"./src/images/Catalog.svg\") + \"\\\" alt=\\\"person\\\">\\n          <span class=\\\"stats-container__quantity\\\">10000+</span>\\n          <span class=\\\"stats-container__of-what\\\">dodawanych wpisów dziennie</span>\\n        </div>\\n      </div>\\n    </div>\\n\\n\\n  </section>\\n\\n  <section class=\\\"description main-width\\\">\\n\\n    <div class=\\\"desc-container alt-width\\\">\\n      <img src=\\\"\" + __webpack_require__(/*! ./images/Macbook.png */ \"./src/images/Macbook.png\") + \"\\\" alt=\\\"laptop\\\" class=\\\"desc-container__icon\\\">\\n      <h2 class=\\\"desc-container__header\\\">Bądź zawsze pierwszy</h2>\\n      <p class=\\\"desc-container__description\\\">Twój sklep będzie umieszczony na głównej stronie naszego katalogu, gdzie\\n        setki tysięcy potencjalnych klientów ją\\n        zobaczy!</p>\\n    </div>\\n\\n    <div class=\\\"desc-container alt-width\\\">\\n      <img src=\\\"\" + __webpack_require__(/*! ./images/iPhone.png */ \"./src/images/iPhone.png\") + \"\\\" alt=\\\"phone\\\" class=\\\"desc-container__icon\\\">\\n      <h2 class=\\\"desc-container__header\\\">Twój sklep jest tam, gdzie Ty jesteś!</h2>\\n      <p class=\\\"desc-container__description\\\">Nieważne czy jesteś na telefonie, tablecie czy komputerze. Wszystkie\\n        potrzebne Ci operacje masz w zasięgu ręki.</p>\\n    </div>\\n\\n    <div class=\\\"desc-divided alt-width\\\">\\n      <div class=\\\"desc-container-first\\\">\\n        <h2 class=\\\"desc-container__header\\\">Zwiększ rozpoznawalność swojej marki</h2>\\n        <p class=\\\"desc-container__description\\\">Otwierając sklep na shopabc.pl, nie tylko zwiększysz sprzedaż, ale także\\n          powiększysz swoje grono odbiorców i\\n          rozpoznawalność marki w internecie.</p>\\n      </div>\\n      <div class='desc-container-second'>\\n        <img class=\\\"desc-container-second__img\\\" src=\\\"\" + __webpack_require__(/*! ./images/Trumpet.png */ \"./src/images/Trumpet.png\") + \"\\\" alt=\\\"trumpet\\\">\\n      </div>\\n    </div>\\n\\n\\n  </section>\\n\\n\\n  <section class=\\\"price-list main-width\\\">\\n\\n    <h2 class=\\\"price-list__header\\\">Cennik</h2>\\n    <div class=\\\"package-container\\\">\\n\\n\\n      <div class=\\\"package-option basic\\\">\\n        <h3 class=\\\"package-option__header\\\">Podstawowy</h3>\\n        <span class=\\\"package-option__price\\\">$0</span>\\n        <span class=\\\"package-option__limited\\\"></span>\\n        <ul class=\\\"perks-list\\\">\\n          <li class=\\\"perks-list__element check\\\">100 MB Przestrzeni dyskowej</li>\\n          <li class=\\\"perks-list__element check\\\">1 Subdomena</li>\\n          <li class=\\\"perks-list__element check\\\">1 konto E-Mail</li>\\n          <li class=\\\"perks-list__element uncheck\\\">2 Lata licencji</li>\\n          <li class=\\\"perks-list__element uncheck\\\">Pełne wsparcie</li>\\n        </ul>\\n        <div class=\\\"package-option__start\\\">Rozpocznij</div>\\n      </div>\\n\\n\\n      <div class=\\\"package-option professional\\\">\\n        <h3 class=\\\"package-option__header\\\">Profesjonalny</h3>\\n        <span class=\\\"package-option__price\\\">$25</span>\\n        <!-- <span class=\\\"package-option__limited\\\" >Oferta ograniczona</span> -->\\n        <ul class=\\\"perks-list\\\">\\n          <li class=\\\"perks-list__element check\\\">500 MB Przestrzeni dyskowej</li>\\n          <li class=\\\"perks-list__element check\\\">2 Subdomeny</li>\\n          <li class=\\\"perks-list__element check\\\">5 kont E-Mail</li>\\n          <li class=\\\"perks-list__element check\\\">Rok licencji</li>\\n          <li class=\\\"perks-list__element uncheck\\\">Pełne wsparcie</li>\\n        </ul>\\n        <div class=\\\"package-option__start\\\">Rozpocznij</div>\\n      </div>\\n\\n      <div class=\\\"package-option premium\\\">\\n        <h3 class=\\\"package-option__header\\\">Premium</h3>\\n        <span class=\\\"package-option__price\\\">$60</span>\\n        <!-- <span class=\\\"package-option__limited\\\" >Oferta ograniczona</span> -->\\n        <ul class=\\\"perks-list\\\">\\n          <li class=\\\"perks-list__element check\\\">2 GB Przestrzeni dyskowej</li>\\n          <li class=\\\"perks-list__element check\\\">4 Subdomeny</li>\\n          <li class=\\\"perks-list__element check\\\">20 kont E-Mail</li>\\n          <li class=\\\"perks-list__element check\\\">2 Lata licencji</li>\\n          <li class=\\\"perks-list__element check\\\">Pełne wsparcie</li>\\n        </ul>\\n        <div class=\\\"package-option__start\\\">Rozpocznij</div>\\n      </div>\\n\\n    </div>\\n\\n  </section>\\n\\n  <section class=\\\"main_width calculator\\\">\\n  \\n    <h2>Oblicz ile zapłacisz</h2>\\n    <div>\\n  \\n      <form>\\n  \\n        <label>\\n          <input id=\\\"numberOfProducts\\\" type=\\\"number\\\" placeholder=\\\"ilość produktów\\\" min=\\\"0\\\" max=\\\"100\\\">\\n        </label>\\n        <label>\\n          <input id=\\\"numberOfOrders\\\" type=\\\"number\\\" placeholder=\\\"Szacowana ilość zamówień w miesiącu\\\" min=\\\"0\\\" max=\\\"100\\\">\\n        </label>\\n  \\n  \\n        <!--      <label>\\n                  <div class=\\\"custom-select\\\">\\n                  <select>\\n                    <option>Wybierz Pakiet</option>\\n                    <option selected value=\\\"podstawowy\\\">Podstawowy</option>\\n                    <option value=\\\"profesjonalny\\\">Profesjonalny</option>\\n                    <option value=\\\"premium\\\">Premium</option>\\n                  </select>\\n                  </div>\\n                </label>-->\\n  \\n  \\n        <div class=\\\"dropDownContainer\\\">\\n          <span class=\\\"dropDownLabel\\\" tabindex=\\\"0\\\">Wybierz pakiet</span><img src=\\\"\" + __webpack_require__(/*! ./images/ArrowDown.svg */ \"./src/images/ArrowDown.svg\") + \"\\\">\\n          <ul class=\\\"dropdownList\\\">\\n            <li tabindex=\\\"1\\\">Podstawowy</li>\\n            <li tabindex=\\\"2\\\">Profesjonalny</li>\\n            <li tabindex=\\\"3\\\">Premium</li>\\n          </ul>\\n        </div>\\n  \\n  \\n  \\n        <label class=\\\"checkbox_container\\\">\\n          <input id=\\\"accountancyCheckboc\\\" type=\\\"checkbox\\\" value=\\\"accountancy\\\">\\n          <span id=\\\"firstCheckbox\\\"></span>\\n          Obsługa księgowa\\n        </label>\\n        <label class=\\\"checkbox_container\\\">\\n          <input id=\\\"terminalCheckbox\\\" type=\\\"checkbox\\\" value=\\\"terminal renting\\\">\\n          <span id=\\\"secondCheckbox\\\"></span>\\n          Wynajem terminala płatniczego\\n        </label>\\n  \\n      </form>\\n  \\n      <ul class=\\\"calculator_summary\\\">\\n        <li id=\\\"products\\\">\\n          <span>Produkty</span>\\n          <span class=\\\"description\\\"></span>\\n          <span class=\\\"price\\\"></span>\\n        </li>\\n  \\n        <li id=\\\"orders\\\">\\n          <span>Zamówienia</span>\\n          <span class=\\\"description\\\"></span>\\n          <span class=\\\"price\\\"></span>\\n        </li>\\n  \\n        <li id=\\\"package\\\">\\n          <span>Pakiet</span>\\n          <span class=\\\"description\\\"></span>\\n          <span class=\\\"price\\\"></span>\\n        </li>\\n  \\n        <li id=\\\"accountancy\\\" class=\\\"invisible\\\">\\n          <span>Księgowość</span>\\n          <span class=\\\"price\\\"></span>\\n        </li>\\n        <li id=\\\"terminal\\\" class=\\\"invisible\\\">\\n          <span>Terminal</span>\\n          <span class=\\\"price\\\"></span>\\n        </li>\\n        <li id=\\\"total\\\">\\n          <span>Suma</span>\\n          <span class=\\\"price\\\"></span>\\n        </li>\\n  \\n      </ul>`\\n    </div>\\n  </section>\\n\\n\\n\\n\\n</body>\\n\\n</html>\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n__webpack_require__(/*! ../index.html */ \"./src/index.html\"); // import calc from './calc';\n\n\n$(function () {\n  // console.log('App Loaded!!!');\n  var openMenu = $('.nav-icon-open');\n  var closeMenu = $('.nav-icon-close');\n  var navBar = $('.nav-bar');\n  console.log(openMenu, closeMenu, navBar);\n  openMenu.on('click', function () {\n    console.log('test');\n    $(this).css('visibility', 'hidden');\n    closeMenu.css('visibility', 'visible');\n    navBar.slideDown();\n  });\n  closeMenu.on('click', function () {\n    $(this).css('visibility', 'hidden');\n    openMenu.css('visibility', 'visible');\n    navBar.slideUp();\n  });\n  var accountancyCheckbox = document.getElementById('accountancyCheckboc');\n  var terminalCheckbox = document.getElementById('terminalCheckbox');\n  var numberOfProducts = document.getElementById('numberOfProducts');\n  var numberOfOrders = document.getElementById('numberOfOrders');\n  var packageChoose = document.querySelector('.dropDownContainer');\n\n  var options = _toConsumableArray(packageChoose.children);\n\n  var dropDownList = document.querySelector('.dropdownList');\n\n  var packages = _toConsumableArray(dropDownList.children);\n\n  var arrow = packageChoose.querySelector('img');\n  var accountancyPrice = 35;\n  var terminalPrice = 5;\n  var singleProductPrice = 0.5;\n  var singleOrderPrice = 0.25;\n  var basicPackagePrice = parseInt(document.querySelector('.basic_package>h3').innerText.slice(1));\n  var professionalPackagePrice = parseInt(document.querySelector('.professional_package>h3').innerText.slice(1));\n  var premiumPackagePrice = parseInt(document.querySelector('.premium_package>h3').innerText.slice(1));\n  var productsOption = document.getElementById('products');\n  var ordersOption = document.getElementById('orders');\n  var packageOption = document.getElementById('package');\n  var accountancyOption = document.getElementById('accountancy');\n  var terminalOption = document.getElementById('terminal');\n  var total = document.getElementById('total');\n  var totalPrice = total.querySelector('.price');\n  var dropDownLabel = document.querySelector('.dropDownLabel');\n  var arrowIcon = document.querySelector('.dropDownContainer img');\n  var dropDownListInitiators = [dropDownLabel, arrowIcon];\n  var productsCharge = 0;\n  var ordersCharge = 0;\n  var packageCharge = 0;\n  var chosenPackage = 'Podstawowy';\n\n  function totalChargeUpdate() {\n    var totalCharge = productsCharge + ordersCharge + packageCharge;\n\n    if (accountancyCheckbox.checked) {\n      totalCharge += accountancyPrice;\n    }\n\n    if (terminalCheckbox.checked) {\n      totalCharge += terminalPrice;\n    }\n\n    totalPrice.innerText = \"$\".concat(totalCharge);\n  }\n\n  productsOption.querySelector('.description').innerText = \"0 * $\".concat(singleProductPrice);\n  productsOption.querySelector('.price').innerText = \"$0\";\n  ordersOption.querySelector('.description').innerText = \"$0 * $\".concat(singleOrderPrice);\n  ordersOption.querySelector('.price').innerText = \"$0\";\n  totalPrice.innerText = \"$0\";\n  accountancyOption.querySelector('.price').innerText = \"$\".concat(accountancyPrice);\n  terminalOption.querySelector('.price').innerText = \"$\".concat(terminalPrice);\n  packageOption.querySelector('.description').innerText = chosenPackage;\n  packageOption.querySelector('.price').innerText = \"$\".concat(basicPackagePrice);\n  numberOfProducts.addEventListener('input', function () {\n    productsOption.querySelector('.description').innerText = \"\".concat(numberOfProducts.value, \" * $\").concat(singleProductPrice);\n    productsOption.querySelector('.price').innerText = \"$\".concat(numberOfProducts.value * singleProductPrice);\n    productsCharge = numberOfProducts.value * singleProductPrice;\n    totalChargeUpdate();\n  });\n  numberOfOrders.addEventListener('input', function () {\n    ordersOption.querySelector('.description').innerText = \"\".concat(numberOfOrders.value, \" * $\").concat(singleOrderPrice);\n    ordersOption.querySelector('.price').innerText = \"$\".concat(numberOfOrders.value * singleOrderPrice);\n    ordersCharge = numberOfOrders.value * singleOrderPrice;\n    totalChargeUpdate();\n  });\n  dropDownListInitiators.forEach(function (element) {\n    element.addEventListener('click', function () {\n      if (!arrow.classList.contains('dropped')) {\n        arrow.style.transform = 'rotate(0)';\n        arrow.classList.toggle('dropped');\n        dropDownList.style.opacity = '1';\n        dropDownList.style.zIndex = '1';\n      } else {\n        arrow.style.transform = 'rotate(-180deg)';\n        arrow.classList.toggle('dropped');\n        dropDownList.style.opacity = '0';\n        dropDownList.style.zIndex = '-1';\n      }\n    });\n  });\n  packages.forEach(function (element) {\n    element.addEventListener('click', function () {\n      chosenPackage = element.innerText;\n\n      if (chosenPackage.toLowerCase() === 'podstawowy') {\n        packageCharge = basicPackagePrice;\n      } else if (chosenPackage.toLowerCase() === 'profesjonalny') {\n        packageCharge = professionalPackagePrice;\n      } else {\n        packageCharge = premiumPackagePrice;\n      }\n\n      packageOption.querySelector('.description').innerText = element.innerText;\n      packageOption.querySelector('.price').innerText = \"$\".concat(packageCharge);\n      totalChargeUpdate();\n      arrow.style.transform = 'rotate(-180deg)';\n      arrow.classList.toggle('dropped');\n      dropDownList.style.opacity = '0';\n      dropDownList.style.zIndex = '-1';\n      dropDownLabel.innerText = \"Wybrany pakiet: \".concat(chosenPackage);\n    });\n  });\n  accountancyCheckbox.addEventListener('click', function () {\n    if (accountancyCheckbox.checked === true) {\n      accountancyOption.classList.toggle('invisible');\n    } else {\n      accountancyOption.classList.toggle('invisible');\n    }\n\n    totalChargeUpdate();\n  });\n  terminalCheckbox.addEventListener('click', function () {\n    if (accountancyCheckbox.checked === true) {\n      terminalOption.classList.toggle('invisible');\n    } else {\n      terminalOption.classList.toggle('invisible');\n    }\n\n    totalChargeUpdate();\n  });\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

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