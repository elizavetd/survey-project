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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_style_scss__);





/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oswald:300,400,500);", ""]);

// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\n.auth-form {\n  width: 90%;\n  color: #535558;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start; }\n\n.auth-form > * {\n  width: 100%; }\n\n.auth-form__heading {\n  font-family: \"Oswald\", sans-serif;\n  font-weight: 400;\n  font-size: 40px;\n  margin: 50px 0 30px 0;\n  border-bottom: 3px solid #EB1C23; }\n\n.auth-form__group {\n  display: flex; }\n  .auth-form__group div {\n    width: 100%; }\n    .auth-form__group div .auth-form__label,\n    .auth-form__group div .auth-form__input {\n      display: block; }\n  .auth-form__group div:first-child {\n    margin-right: 10%; }\n\n.auth-form__label {\n  color: #BDBDBD;\n  font-size: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  line-height: 2;\n  margin: 15px 0; }\n\n.auth-form__input {\n  height: 40px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  color: #535558;\n  letter-spacing: 1.5px;\n  line-height: 2;\n  border: none;\n  border-bottom: 1px #BDBDBD solid; }\n\n.auth-form__help-buttons {\n  height: 50px;\n  font-size: 15.5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .auth-form__help-buttons p {\n    color: #BDBDBD; }\n  .auth-form__help-buttons .auth-form__link {\n    text-decoration: underline; }\n  .auth-form__help-buttons .auth-form__link:only-child {\n    text-decoration: none;\n    color: #7485c5;\n    font-weight: 600; }\n  .auth-form__help-buttons .auth-form__link:hover {\n    text-decoration: underline;\n    color: #535558; }\n  .auth-form__help-buttons .auth-form__link:only-child:hover {\n    text-decoration: underline;\n    color: #7485c5; }\n\n.auth-form__submit-button {\n  width: 230px;\n  height: 50px;\n  cursor: pointer;\n  background-color: #EB1C23;\n  opacity: 1;\n  border-radius: 25px;\n  border: none;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  color: white;\n  margin: 45px 0 50px 0;\n  align-self: center; }\n\n.auth-form__submit-button:hover {\n  opacity: 0.85; }\n\n.auth-form__submit-button_signup {\n  margin-top: 10px; }\n\n@media all and (max-width: 1010px) {\n  .auth-form {\n    min-height: 80vh;\n    padding-bottom: 10vmax; }\n    .auth-form .auth-form__heading {\n      font-size: 4.5vmax;\n      margin: 0 0 3vh 0;\n      padding-top: 5vmax;\n      border-width: 5px; }\n    .auth-form .auth-form__label {\n      font-size: 2vmax;\n      margin: 2vh 0; }\n    .auth-form .auth-form__input {\n      font-size: 3vmax;\n      height: 5vmax;\n      margin-bottom: 2vh; }\n    .auth-form .auth-form__group {\n      display: block; }\n    .auth-form .auth-form__help-buttons {\n      font-size: 2vmax;\n      margin: 3vh 0 5vh 0; }\n      .auth-form .auth-form__help-buttons p {\n        width: 100%; }\n      .auth-form .auth-form__help-buttons .auth-form__link {\n        font-size: 2.1vmax;\n        width: 100%;\n        text-align: right; }\n    .auth-form .auth-form__submit-button {\n      height: 6vmax;\n      width: 50vmin;\n      border-radius: 1.5vmin;\n      font-size: 1.8vmax; } }\n\n.welcome-section {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 20px;\n  color: white;\n  position: relative; }\n  .welcome-section img {\n    width: 100%; }\n  .welcome-section .welcome-section__content {\n    position: absolute;\n    top: 15%;\n    left: 10%;\n    display: flex;\n    width: 80%;\n    justify-content: center;\n    align-items: center; }\n  .welcome-section .welcome-section__text {\n    padding: 20px 70px 20px 0;\n    border-right: 2px solid white;\n    width: 50%; }\n    .welcome-section .welcome-section__text .welcome-section__heading {\n      font-family: \"Oswald\", sans-serif;\n      font-size: 75px;\n      font-weight: 300;\n      line-height: 1;\n      margin-bottom: 45px; }\n    .welcome-section .welcome-section__text ul {\n      margin-left: 25px; }\n    .welcome-section .welcome-section__text .welcome-section__list-item {\n      letter-spacing: 0.6px; }\n    .welcome-section .welcome-section__text .welcome-section__description {\n      width: 500px;\n      max-width: 100%;\n      font-size: 14px;\n      color: #BDBDBD;\n      line-height: 1.5;\n      margin: 5px 0 20px 10px; }\n  .welcome-section .welcome-section__create-survey {\n    padding: 20px 0px 20px 70px;\n    width: 50%; }\n    .welcome-section .welcome-section__create-survey fieldset {\n      display: flex;\n      position: relative;\n      padding: 50px 30px;\n      margin: 0 50px; }\n      .welcome-section .welcome-section__create-survey fieldset legend {\n        font-weight: 700;\n        font-size: 22px;\n        padding: 0 5px; }\n      .welcome-section .welcome-section__create-survey fieldset input {\n        width: 100%;\n        height: 40px;\n        font-family: \"Open Sans\", sans-serif;\n        font-size: 18px;\n        color: white;\n        background-color: transparent;\n        border: none;\n        margin: 20px 0 40px 0; }\n      .welcome-section .welcome-section__create-survey fieldset .welcome-section__form-input {\n        font-weight: 600;\n        border-bottom: 1px solid #BDBDBD; }\n      .welcome-section .welcome-section__create-survey fieldset .welcome-section__form-button {\n        width: 250px;\n        background-color: rgba(116, 133, 197, 0.3);\n        border: 1px solid white;\n        border-radius: 20px;\n        margin: 20px auto; }\n      .welcome-section .welcome-section__create-survey fieldset .welcome-section__form-button:hover {\n        cursor: pointer;\n        background-color: rgba(116, 133, 197, 0.5); }\n      .welcome-section .welcome-section__create-survey fieldset p {\n        color: #BDBDBD;\n        text-align: center;\n        margin: 20px 0; }\n      .welcome-section .welcome-section__create-survey fieldset a {\n        text-decoration: none;\n        color: white;\n        font-weight: 600;\n        text-align: center; }\n\n.about-us {\n  background-color: #F7F7F7;\n  color: #535558; }\n  .about-us .about-us__article {\n    padding: 4%; }\n    .about-us .about-us__article .about-us__heading {\n      color: #535558;\n      font-family: \"Oswald\", sans-serif;\n      font-weight: 300;\n      font-size: 45px;\n      padding: 5px 0 5px 15px;\n      margin-bottom: 30px;\n      text-align: center; }\n    .about-us .about-us__article .about-us__article-background {\n      width: 100%; }\n    .about-us .about-us__article .about-us__text {\n      margin: 20px 7%; }\n    .about-us .about-us__article .about-us__text_large {\n      font-weight: 600;\n      font-size: 20px;\n      text-align: center;\n      margin: 50px 15%; }\n  .about-us .about-us__article:first-of-type {\n    padding-top: 0; }\n  .about-us .about-us__article_img-background {\n    padding: 0;\n    height: 100vh;\n    width: 100%;\n    position: relative;\n    background-image: url(/img/building.png); }\n  .about-us .about-us__article_students {\n    padding: 0;\n    height: 80vmax;\n    width: 100%;\n    position: relative;\n    background-image: url(/img/student-background.jpg); }\n    .about-us .about-us__article_students .opacify {\n      height: 80vmax;\n      width: 100%;\n      background-color: white;\n      opacity: 0.9; }\n  .about-us .about-us__article_white {\n    background-color: white; }\n  .about-us .about-us__article_full-width {\n    width: 100%;\n    padding: 4% 0; }\n\n.infographic {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif; }\n  .infographic .infographic__image-container {\n    width: 100%;\n    display: flex;\n    justify-content: center; }\n    .infographic .infographic__image-container .logo_white {\n      margin-bottom: 5%; }\n  .infographic .infographic__items-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: flex-start;\n    margin-top: 2%; }\n  .infographic .infographic__item {\n    margin: 0 50px;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .infographic .infographic__item .infographic__number {\n      font-size: 100px;\n      font-weight: 700;\n      line-height: 1; }\n    .infographic .infographic__item .infographic__icon {\n      font-size: 100px;\n      color: #EB1C23;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 20px 0; }\n    .infographic .infographic__item .infographic__caption {\n      font-size: 30px;\n      color: #BDBDBD;\n      text-align: center; }\n    .infographic .infographic__item .infographic__caption_black {\n      color: black; }\n    .infographic .infographic__item .infographic__small-text {\n      font-size: 15px;\n      color: #787b7f;\n      margin: 20px 25%;\n      font-weight: 600;\n      text-align: center; }\n  .infographic .infographic__item_width50 {\n    width: 50%;\n    margin: 0 0 20px 0; }\n  .infographic .inphographic__description {\n    width: 70%;\n    text-align: center;\n    color: #BDBDBD;\n    line-height: 1.7;\n    letter-spacing: 0.8px;\n    margin-top: 7%; }\n\n.infographic_absolute {\n  position: absolute;\n  top: 25%; }\n\n.jobs-list {\n  color: #535558;\n  margin-bottom: 50px; }\n  .jobs-list .jobs-list__job {\n    display: flex;\n    justify-content: space-between;\n    color: #535558;\n    margin: 10px 0;\n    padding: 10px;\n    border-bottom: 1px solid #BDBDBD; }\n    .jobs-list .jobs-list__job .jobs-list__job-name {\n      font-weight: 400;\n      font-size: 20px; }\n    .jobs-list .jobs-list__job .fa {\n      color: #BDBDBD; }\n  .jobs-list .jobs-list__requirements {\n    display: none; }\n    .jobs-list .jobs-list__requirements p {\n      margin: 20px;\n      text-transform: uppercase;\n      font-weight: 600; }\n\n.regular-list {\n  margin: 20px; }\n  .regular-list li {\n    margin: 20px;\n    list-style: none; }\n    .regular-list li:before {\n      content: ' ';\n      display: inline-block;\n      width: 6px;\n      height: 6px;\n      background: #eb1c23;\n      position: relative;\n      left: -15px;\n      top: -2px;\n      margin-right: -7px; }\n\n.gallery-grid__container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 5% 0 10% 0; }\n\n.gallery-grid {\n  float: left;\n  width: 20%;\n  margin: 10px; }\n\n.gallery-grid__item {\n  position: relative;\n  overflow: hidden;\n  margin: 5px;\n  background: #333; }\n  .gallery-grid__item .gallery-grid__image {\n    position: relative;\n    display: block;\n    width: 100%;\n    opacity: 0.8; }\n  .gallery-grid__item svg {\n    position: absolute;\n    top: -1px;\n    z-index: 10;\n    width: 100%;\n    height: 100%;\n    fill: white; }\n  .gallery-grid__item .gallery-grid__caption {\n    position: absolute;\n    top: 0;\n    z-index: 11;\n    padding: 10px;\n    width: 100%;\n    height: 100%;\n    text-align: center; }\n    .gallery-grid__item .gallery-grid__caption .gallery-grid__heading {\n      min-height: 75px;\n      font-family: \"Oswald\", sans-serif;\n      text-transform: uppercase;\n      font-weight: 300;\n      color: #EB1C23;\n      font-size: 25px;\n      letter-spacing: 1px;\n      margin: 7%; }\n    .gallery-grid__item .gallery-grid__caption .gallery-grid__description {\n      font-size: 15px;\n      color: #BDBDBD;\n      margin: 7%; }\n\n.benefits {\n  display: flex;\n  justify-content: space-between;\n  margin: 5% 8% 10% 8%;\n  padding: 2%;\n  border: 2px dashed #EB1C23;\n  border-radius: 5vmax; }\n  .benefits li {\n    margin: 40px 0; }\n\n.advantages {\n  margin: 5% 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n  .advantages .advantages__item {\n    padding: 5%;\n    background-color: white;\n    display: flex;\n    margin-bottom: 2%; }\n    .advantages .advantages__item .advantages__icon {\n      width: 100px;\n      font-size: 65px;\n      text-align: center;\n      margin-right: 50px; }\n    .advantages .advantages__item .advantages__text {\n      font-size: 20px;\n      font-weight: 600;\n      text-align: center;\n      color: #979797;\n      display: flex;\n      align-items: center; }\n\n.student-content {\n  position: absolute;\n  width: 100%;\n  top: 0; }\n  .student-content div {\n    padding: 5%;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .student-content img {\n    margin: 2% 0; }\n\n.contact {\n  padding: 1% 0 1% 0; }\n  .contact .contact__button-set {\n    background-color: rgba(0, 0, 0, 0.75);\n    height: 70px;\n    display: flex;\n    justify-content: center; }\n    .contact .contact__button-set .contact__button {\n      width: 250px;\n      border: none;\n      background-color: transparent;\n      color: white;\n      text-align: left;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      font-family: \"Open Sans\", sans-serif; }\n      .contact .contact__button-set .contact__button:hover {\n        background-color: #EB1C23; }\n      .contact .contact__button-set .contact__button .contact__country {\n        width: 150px;\n        font-size: 12px; }\n      .contact .contact__button-set .contact__button .contact__place {\n        width: 150px;\n        font-weight: 700;\n        font-size: 20px; }\n  .contact .contact__container {\n    padding: 4%;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    flex-wrap: wrap; }\n    .contact .contact__container .contact__address {\n      background-color: white;\n      padding: 30px;\n      width: 400px;\n      display: flex;\n      flex-direction: column;\n      text-align: center;\n      color: #535558;\n      padding-bottom: 50px; }\n      .contact .contact__container .contact__address .contact__city {\n        font-size: 30px;\n        line-height: 3;\n        font-weight: 600; }\n      .contact .contact__container .contact__address p {\n        margin: 5px 0; }\n    .contact .contact__container .contact__form {\n      width: 400px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center; }\n      .contact .contact__container .contact__form input {\n        margin-bottom: 20px;\n        height: 40px;\n        font-size: 13px;\n        font-family: \"Open Sans\", sans-serif;\n        padding: 0 10px;\n        border: none;\n        background-color: white; }\n      .contact .contact__container .contact__form textarea {\n        margin-bottom: 20px;\n        height: 90px;\n        font-size: 13px;\n        font-family: \"Open Sans\", sans-serif;\n        padding: 0 10px;\n        border: none;\n        background-color: white; }\n      .contact .contact__container .contact__form .contact__form-button {\n        background-color: #EB1C23;\n        color: white;\n        font-weight: 600;\n        margin-bottom: 0; }\n\n@media all and (max-width: 1010px) {\n  .about-us .about-us__article .about-us__heading {\n    font-size: 4vmax; }\n  .about-us .about-us__article .about-us__text {\n    margin: 5vmax 0; }\n  .infographic .infographic__item .infographic__number {\n    font-size: 7vmax; }\n  .infographic .infographic__item .infographic__caption {\n    font-size: 2.5vmax; }\n  .infographic .infographic__item .infographic__icon {\n    font-size: 10vmax; }\n  .infographic .infographic__item .infographic__small-text {\n    font-size: 1.5vmax;\n    margin: 3vmax; }\n  .infographic .inphographic__description {\n    font-size: 2vmax;\n    line-height: normal; }\n  .gallery-grid {\n    float: left;\n    width: 40%;\n    margin: 10px; }\n  .gallery-grid__item .gallery-grid__caption .gallery-grid__heading {\n    font-size: 1.8vmax; }\n  .gallery-grid__item .gallery-grid__caption .gallery-grid__description {\n    font-size: 1.5vmax; }\n  .benefits {\n    margin-left: 0;\n    margin-right: 0;\n    font-size: 1vmax;\n    flex-direction: column;\n    padding: 3vmax;\n    justify-content: flex-start; }\n  .advantages .advantages__item .advantages__icon {\n    font-size: 7vmax; }\n  .advantages .advantages__item .advantages__text {\n    font-size: 2vmax; }\n  .jobs-list .jobs-list__job .jobs-list__job-name {\n    font-size: 3vmax; }\n  .jobs-list .jobs-list__job .fa {\n    font-size: 3vmax; }\n  .regular-list li {\n    font-size: 0.8vmax; }\n  .student-content .about-us__text {\n    font-size: 2.2vmax;\n    text-align: center; }\n  .contact .contact__container {\n    margin-bottom: 5vmax; }\n    .contact .contact__container .contact__address .contact__city {\n      font-size: 3vmax; }\n    .contact .contact__container .contact__address p {\n      font-size: 2vmax;\n      margin: 1vmax 0; }\n    .contact .contact__container .contact__form input {\n      height: 4vmax;\n      font-size: 2vmax; }\n    .contact .contact__container .contact__form textarea {\n      height: 12vmax;\n      font-size: 2vmax; }\n  .contact .contact__button-set {\n    height: 10vmax; }\n    .contact .contact__button-set .contact__button {\n      width: 30%; }\n      .contact .contact__button-set .contact__button .contact__country {\n        width: 100%;\n        font-size: 1.5vmax; }\n      .contact .contact__button-set .contact__button .contact__place {\n        width: 100%;\n        font-size: 2.3vmax; } }\n\n.templates {\n  color: #535558; }\n  .templates .templates__header {\n    font-family: \"Oswald\", sans-serif;\n    font-size: 50px;\n    font-weight: 400;\n    text-align: center;\n    background-color: white;\n    margin: 50px 4% 0 4%;\n    padding-bottom: 50px; }\n\n.list {\n  margin: 4% 4% 0 4%;\n  padding-bottom: 200px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .list .template-preview {\n    width: 380px;\n    height: 550px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: white;\n    padding: 15px;\n    margin: 0 0.5% 8% 0; }\n    .list .template-preview .template-preview__icon {\n      width: 80px;\n      height: 80px;\n      background-color: #EB1C23;\n      font-size: 32px;\n      color: white;\n      text-align: center;\n      position: absolute;\n      top: -60px;\n      border-radius: 90px;\n      border: 20px solid #F7F7F7; }\n      .list .template-preview .template-preview__icon i {\n        position: relative;\n        top: 16px; }\n    .list .template-preview .template-preview__edit-buttons {\n      align-self: flex-end;\n      position: absolute;\n      bottom: 100%; }\n      .list .template-preview .template-preview__edit-buttons .template-preview__button-edit,\n      .list .template-preview .template-preview__edit-buttons .template-preview__button-delete {\n        width: 30px;\n        height: 30px;\n        color: #BDBDBD;\n        font-size: 20px;\n        border: none;\n        background-color: transparent; }\n      .list .template-preview .template-preview__edit-buttons .template-preview__button-edit:hover,\n      .list .template-preview .template-preview__edit-buttons .template-preview__button-delete:hover {\n        cursor: pointer;\n        color: #535558; }\n    .list .template-preview .template-preview__header {\n      margin: 60px 0 20px 0;\n      font-family: \"Oswald\", sans-serif;\n      font-size: 30px;\n      font-weight: 600; }\n    .list .template-preview .template-preview__description {\n      max-height: 280px;\n      overflow-y: hidden;\n      margin: 0 20px;\n      font-size: 17px;\n      color: #8a8a8a;\n      line-height: 1.2;\n      letter-spacing: 1px; }\n    .list .template-preview .template-preview__info {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      margin: 30px 0;\n      position: absolute;\n      bottom: 80px; }\n      .list .template-preview .template-preview__info p {\n        font-weight: 700;\n        padding: 0 40px; }\n    .list .template-preview .template-preview__button-create {\n      width: 180px;\n      height: 50px;\n      font-family: \"Open Sans\", sans-serif;\n      font-size: 18px;\n      color: white;\n      font-weight: 600;\n      border: none;\n      border-radius: 3px;\n      background-color: #535558;\n      position: absolute;\n      bottom: 30px; }\n    .list .template-preview .template-preview__button-create:hover {\n      cursor: pointer;\n      background-color: rgba(83, 85, 88, 0.9); }\n  .list .template-preview:hover {\n    box-shadow: 0px 3px 25.52px 3.48px rgba(112, 112, 112, 0.39); }\n\n@media all and (max-width: 980px) and (orientation: portrait) {\n  .list {\n    margin-top: 7vh; }\n    .list .template-preview {\n      width: 100%;\n      height: 70vh;\n      padding: 2.5vh;\n      margin-bottom: 20%; }\n      .list .template-preview .template-preview__icon {\n        width: 160px;\n        height: 160px;\n        font-size: 64px;\n        top: -120px;\n        border-radius: 180px;\n        border: 40px solid #F7F7F7; }\n        .list .template-preview .template-preview__icon i {\n          top: 32px; }\n      .list .template-preview .template-preview__edit-buttons {\n        align-self: center;\n        width: 90%;\n        bottom: 65vh;\n        display: flex;\n        justify-content: space-between; }\n        .list .template-preview .template-preview__edit-buttons .template-preview__button-edit,\n        .list .template-preview .template-preview__edit-buttons .template-preview__button-delete {\n          width: 120px;\n          height: 120px;\n          font-size: 80px; }\n      .list .template-preview .template-preview__header {\n        margin: 120px 0 40px 0;\n        font-size: 3.5vh; }\n      .list .template-preview .template-preview__description {\n        max-height: 40vh;\n        margin: 40px;\n        font-size: 2.3vh;\n        line-height: 1.2; }\n      .list .template-preview .template-preview__info {\n        bottom: 10vh;\n        font-size: 2.3vh; }\n      .list .template-preview .template-preview__button-create {\n        width: 50%;\n        height: 5.5vh;\n        font-size: 2vh;\n        position: absolute;\n        bottom: 3vh; } }\n\n.table {\n  width: 100%;\n  margin: 30px 0;\n  border: none;\n  color: #535558;\n  border-collapse: collapse; }\n  .table button {\n    cursor: pointer;\n    border: none;\n    background-color: transparent;\n    font-size: 20px;\n    color: #535558;\n    margin: 0 5px; }\n  .table button:hover {\n    color: #85888c; }\n  .table .table__header th {\n    height: 80px;\n    text-align: center;\n    background-color: #F7F7F7; }\n  .table .table__header th:first-child {\n    text-align: left;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    .table .table__header th:first-child .triangle-down,\n    .table .table__header th:first-child .triangle-up {\n      margin-left: 5px; }\n    .table .table__header th:first-child .search-bar-container {\n      flex-grow: 2;\n      position: relative;\n      margin-left: 10%; }\n      .table .table__header th:first-child .search-bar-container .users__search {\n        font-size: 18px;\n        background-color: transparent;\n        border-radius: 0px; }\n      .table .table__header th:first-child .search-bar-container .fa-search {\n        position: absolute;\n        left: 22px;\n        top: 25%;\n        font-size: 25px;\n        color: #a4a4a4; }\n  .table .user-operations button:hover {\n    color: #85888c; }\n  .table tr {\n    height: 50px;\n    text-align: center; }\n  .table tr:nth-child(odd) {\n    background-color: white; }\n  .table tr:nth-child(even) {\n    background-color: #fcf2f1; }\n  .table th:first-child,\n  .table td:first-child {\n    padding: 0 80px; }\n  .table td:first-child {\n    width: 30%;\n    text-align: left; }\n  .table .table__footer {\n    height: 80px;\n    text-align: left; }\n\n.users .operations-bar {\n  display: none; }\n\n.table_blue .table__header th {\n  background-color: #eef0f8; }\n\n.table_blue tr:nth-child(even) {\n  background-color: #eef0f8; }\n\n@media all and (max-width: 1100px) {\n  .users .operations-bar {\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    margin-top: 5vh; }\n    .users .operations-bar input {\n      margin: 0;\n      width: 90vw; }\n  .table {\n    margin: 0;\n    margin: 1vmax 0 10vmax 0;\n    font-size: 2vmax; }\n    .table thead {\n      display: none; }\n    .table th:first-child {\n      padding: 0; }\n    .table td,\n    .table th {\n      display: block;\n      text-align: left;\n      padding: 0 0 0 20px; }\n      .table td:before,\n      .table th:before {\n        content: attr(data-th) \": \";\n        font-weight: bold;\n        width: 50%;\n        display: inline-block; }\n      .table td:first-child,\n      .table th:first-child {\n        display: block;\n        width: auto;\n        padding: 0 0 0 20px;\n        margin-top: 3vh; }\n      .table td:last-child:before,\n      .table th:last-child:before {\n        content: '';\n        width: 0; }\n    .table td:last-child {\n      text-align: right;\n      margin: 3vmax 1vmax; }\n      .table td:last-child button {\n        font-size: 3vmax; }\n    .table th {\n      text-align: center; }\n      .table th:before {\n        content: \"\";\n        display: none; }\n  .table__footer {\n    font-size: 2.5vmax; }\n  .table .table__footer-buttons {\n    text-align: center;\n    display: flex;\n    justify-content: space-around;\n    padding: 0; }\n    .table .table__footer-buttons button {\n      margin: 3vmax 0; }\n      .table .table__footer-buttons button .fa {\n        font-size: 5vmax; } }\n\n.my-surveys {\n  margin: 4% 4% 0 4%; }\n\n.pagination {\n  color: #535558;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0; }\n  .pagination .pagination__details {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-end;\n    margin: 0 20px; }\n    .pagination .pagination__details .pagination__item-count,\n    .pagination .pagination__details .pagination__page-count {\n      margin-left: 7px;\n      font-weight: 700;\n      font-size: 22px;\n      line-height: 1.3; }\n  .pagination .pagination__nav-buttons .pagination__button {\n    width: 50px;\n    background-color: transparent;\n    color: #BDBDBD;\n    font-size: 30px;\n    text-align: center;\n    border: none;\n    margin: 0 5px; }\n  .pagination .pagination__nav-buttons .pagination__button:hover {\n    cursor: pointer;\n    color: #EB1C23; }\n\n.pagination:last-child {\n  justify-content: center;\n  padding-top: 0;\n  padding-bottom: 100px; }\n\n.surveys-list {\n  margin-top: 50px; }\n  .surveys-list .survey-item {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    font-size: 18px;\n    color: #535558;\n    background-color: white;\n    box-shadow: 0px 3px 25.52px 3.48px rgba(112, 112, 112, 0.1);\n    margin-bottom: 80px; }\n    .surveys-list .survey-item .survey-item__caption {\n      color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative; }\n      .surveys-list .survey-item .survey-item__caption .survey-item__image-container {\n        background-color: grey;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n        .surveys-list .survey-item .survey-item__caption .survey-item__image-container .survey-item__image {\n          width: 100%; }\n        .surveys-list .survey-item .survey-item__caption .survey-item__image-container .survey-item__icon {\n          width: 80px;\n          height: 80px;\n          font-size: 32px;\n          background-color: #EB1C23;\n          position: absolute;\n          top: -40px;\n          border-radius: 40px; }\n          .surveys-list .survey-item .survey-item__caption .survey-item__image-container .survey-item__icon i {\n            position: relative;\n            top: 16px; }\n      .surveys-list .survey-item .survey-item__caption .survey-item__title-container {\n        width: 70%;\n        max-height: 70%;\n        text-align: center;\n        padding: 50px 25px;\n        background-color: rgba(0, 0, 0, 0.65);\n        border-radius: 5px;\n        position: absolute;\n        overflow: hidden; }\n        .surveys-list .survey-item .survey-item__caption .survey-item__title-container .survey-item__name {\n          font-family: \"Oswald\", sans-serif;\n          font-size: 30px;\n          font-weight: 400;\n          margin-bottom: 20px; }\n        .surveys-list .survey-item .survey-item__caption .survey-item__title-container .survey-item__description {\n          font-size: 15px;\n          color: rgba(255, 255, 255, 0.75);\n          line-height: 1.5;\n          letter-spacing: 0.4px;\n          margin: 0 10px; }\n    .surveys-list .survey-item .survey-item__details {\n      flex-grow: 1;\n      margin-left: 20px;\n      padding: 0 50px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: stretch; }\n      .surveys-list .survey-item .survey-item__details .survey-item__info {\n        display: flex;\n        flex-grow: 1;\n        justify-content: space-around;\n        align-items: center;\n        text-align: center;\n        border-bottom: 1px dashed #BDBDBD; }\n        .surveys-list .survey-item .survey-item__details .survey-item__info .survey-item__info-name {\n          font-size: 20px;\n          margin-bottom: 10px; }\n        .surveys-list .survey-item .survey-item__details .survey-item__info .survey-item__info-value {\n          font-size: 35px;\n          font-weight: 700;\n          color: #EB1C23; }\n      .surveys-list .survey-item .survey-item__details .survey-item__options {\n        flex-grow: 1;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n        .surveys-list .survey-item .survey-item__details .survey-item__options .survey-item__button {\n          border: none;\n          background-color: transparent;\n          font-size: 35px;\n          color: #BDBDBD;\n          margin: 0 10px; }\n        .surveys-list .survey-item .survey-item__details .survey-item__options .survey-item__button:hover {\n          cursor: pointer;\n          color: #535558; }\n  .surveys-list .survey-item:nth-child(even) {\n    flex-direction: row-reverse; }\n\n@media all and (max-width: 980px) {\n  .pagination {\n    justify-content: center;\n    padding: 20px 0; }\n    .pagination .pagination__details {\n      display: none; }\n    .pagination .pagination__nav-buttons .pagination__button {\n      width: 8vmax;\n      background-color: transparent;\n      color: #BDBDBD;\n      font-size: 4vmax;\n      margin: 0 30px; }\n    .pagination .pagination__nav-buttons .pagination__button:hover {\n      cursor: pointer;\n      color: #EB1C23; }\n    .pagination:last-child {\n      padding-bottom: 10vmax; }\n  .pagination:last-child {\n    padding-bottom: 15vmax; } }\n\n@media all and (max-width: 980px) and (orientation: portrait) {\n  .surveys-list {\n    margin-top: 5vh; }\n    .surveys-list .survey-item {\n      width: 100%;\n      flex-direction: column;\n      margin-bottom: 10vmax; }\n      .surveys-list .survey-item:nth-child(even) {\n        flex-direction: column; }\n      .surveys-list .survey-item .survey-item__caption {\n        width: 100%; }\n        .surveys-list .survey-item .survey-item__caption .survey-item__image-container {\n          width: 100%; }\n          .surveys-list .survey-item .survey-item__caption .survey-item__image-container .survey-item__icon {\n            width: 160px;\n            height: 160px;\n            font-size: 64px;\n            background-color: #EB1C23;\n            position: absolute;\n            top: -80px;\n            border-radius: 80px; }\n            .surveys-list .survey-item .survey-item__caption .survey-item__image-container .survey-item__icon i {\n              position: relative;\n              top: 32px; }\n        .surveys-list .survey-item .survey-item__caption .survey-item__title-container {\n          width: 65vmin;\n          height: 50vmin;\n          border-radius: 2vh; }\n          .surveys-list .survey-item .survey-item__caption .survey-item__title-container .survey-item__name {\n            font-size: 3.5vh;\n            margin: 2vh; }\n          .surveys-list .survey-item .survey-item__caption .survey-item__title-container .survey-item__description {\n            font-size: 2vh;\n            margin: 0 1.5vh; }\n      .surveys-list .survey-item .survey-item__details {\n        height: 40vh; }\n        .surveys-list .survey-item .survey-item__details .survey-item__info {\n          border-bottom: 5px dashed #BDBDBD; }\n          .surveys-list .survey-item .survey-item__details .survey-item__info .survey-item__info-name {\n            font-size: 2.5vh;\n            margin-bottom: 1vh; }\n          .surveys-list .survey-item .survey-item__details .survey-item__info .survey-item__info-value {\n            font-size: 3.5vh; }\n        .surveys-list .survey-item .survey-item__details .survey-item__options .survey-item__button {\n          font-size: 5vh;\n          margin: 0 1vh; } }\n\n.survey-editing {\n  margin: 70px 0 0 0;\n  padding-bottom: 70px;\n  display: flex;\n  justify-content: space-between; }\n  .survey-editing .survey-setup {\n    height: 74vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: fixed; }\n  .survey-editing .survey-setup_left {\n    justify-content: flex-start;\n    margin-right: 50px;\n    left: 0; }\n  .survey-editing .survey-setup_right {\n    justify-content: space-between;\n    margin-left: 50px;\n    right: 0; }\n    .survey-editing .survey-setup_right .survey-setup__options,\n    .survey-editing .survey-setup_right .survey-setup__steps {\n      display: flex;\n      flex-direction: column; }\n    .survey-editing .survey-setup_right .survey-setup__open-fullscreen {\n      position: absolute;\n      top: -9999px;\n      left: -9999px; }\n    .survey-editing .survey-setup_right .survey-setup__cog {\n      display: none;\n      cursor: pointer;\n      user-select: none; }\n  .survey-editing .survey-body {\n    width: 100%;\n    flex-grow: 1;\n    text-align: center;\n    color: #535558;\n    padding-bottom: 70px; }\n    .survey-editing .survey-body .survey-body__add-button {\n      background-color: transparent;\n      border: none;\n      color: #BDBDBD;\n      font-size: 30px;\n      margin: 5px; }\n    .survey-editing .survey-body .survey-body__add-button:hover {\n      cursor: pointer;\n      color: #535558; }\n    .survey-editing .survey-body .survey-body__new-question {\n      height: 130px;\n      padding: 50px;\n      margin: 0 150px;\n      border: 1px dashed #BDBDBD;\n      border-radius: 25px;\n      margin-bottom: 50px; }\n    .survey-editing .survey-body .survey-body__new-question_add-button .survey-body__text {\n      font-size: 25px;\n      margin-bottom: 10px; }\n    .survey-editing .survey-body .survey-body__new-question_list {\n      display: flex;\n      justify-content: center; }\n      .survey-editing .survey-body .survey-body__new-question_list .survey-body__question-type {\n        width: 128px;\n        height: 128px;\n        font-family: \"Open Sans\", sans-serif;\n        color: #535558;\n        background-color: transparent;\n        border: none;\n        line-height: 1.2;\n        padding: 5px;\n        margin: 0 2.5px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: flex-start; }\n        .survey-editing .survey-body .survey-body__new-question_list .survey-body__question-type .fa {\n          font-size: 64px; }\n        .survey-editing .survey-body .survey-body__new-question_list .survey-body__question-type p {\n          margin-top: 20px;\n          font-weight: 600; }\n      .survey-editing .survey-body .survey-body__new-question_list .survey-body__question-type:hover {\n        cursor: pointer;\n        background-color: rgba(189, 189, 189, 0.1); }\n    .survey-editing .survey-body .survey-body__question {\n      position: relative;\n      display: flex;\n      flex-direction: row-reverse;\n      justify-content: space-between;\n      padding: 50px;\n      margin: 0 150px;\n      border-bottom: 1px dashed #BDBDBD; }\n      .survey-editing .survey-body .survey-body__question .survey-body__edit-question button {\n        color: #BDBDBD;\n        font-size: 20px;\n        background-color: transparent;\n        border: none;\n        margin: 0 2.5px; }\n      .survey-editing .survey-body .survey-body__question .survey-body__edit-question button:hover {\n        cursor: pointer;\n        color: #535558; }\n      .survey-editing .survey-body .survey-body__question .survey-body__question-view {\n        flex-grow: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start; }\n        .survey-editing .survey-body .survey-body__question .survey-body__question-view h4 {\n          font-size: 20px;\n          margin-bottom: 20px; }\n      .survey-editing .survey-body .survey-body__question .survey-body__add-button_above-question {\n        background-color: #F7F7F7;\n        position: absolute;\n        top: -32px;\n        right: 45%;\n        border: 10px solid #F7F7F7;\n        border-radius: 25px; }\n    .survey-editing .survey-body .survey-body__question:hover {\n      cursor: move; }\n    .survey-editing .survey-body .survey-body__question_one-answer .survey-body__question-view p,\n    .survey-editing .survey-body .survey-body__question_several-answers .survey-body__question-view p {\n      margin-bottom: 15px; }\n    .survey-editing .survey-body .survey-body__question_text-answer .survey-body__question-view textarea {\n      width: 80%;\n      height: 100px;\n      padding: 10px;\n      font-family: \"Open Sans\", sans-serif;\n      font-size: 18px;\n      margin-bottom: 15px; }\n    .survey-editing .survey-body .survey-body__question_file .survey-body__question-view button {\n      padding: 10px 30px;\n      border: 3px solid white;\n      border-radius: 5px;\n      background-color: #EB1C23;\n      color: white;\n      font-size: 18px;\n      font-family: \"Open Sans\", sans-serif;\n      margin-bottom: 15px;\n      display: inline-block; }\n    .survey-editing .survey-body .survey-body__question_rating .rating-stars {\n      font-size: 40px; }\n    .survey-editing .survey-body .survey-body__question_first {\n      border-top: 1px dashed #BDBDBD; }\n  .survey-editing .survey-start-editor,\n  .survey-editing .survey-finish-editor {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .survey-editing .survey-start-editor .survey-body__add-logo,\n    .survey-editing .survey-finish-editor .survey-body__add-logo {\n      color: #535558;\n      padding: 30px 100px;\n      border: 1px dashed #535558;\n      border-radius: 25px;\n      background-color: transparent;\n      margin-bottom: 20px; }\n      .survey-editing .survey-start-editor .survey-body__add-logo .fa,\n      .survey-editing .survey-finish-editor .survey-body__add-logo .fa {\n        font-size: 100px; }\n      .survey-editing .survey-start-editor .survey-body__add-logo p,\n      .survey-editing .survey-finish-editor .survey-body__add-logo p {\n        font-size: 20px;\n        font-weight: 600;\n        font-family: \"Open Sans\", sans-serif;\n        margin-top: 20px; }\n    .survey-editing .survey-start-editor .survey-body__survey-name,\n    .survey-editing .survey-start-editor .survey-body__survey-description,\n    .survey-editing .survey-finish-editor .survey-body__survey-name,\n    .survey-editing .survey-finish-editor .survey-body__survey-description {\n      background-color: transparent;\n      color: #535558;\n      border: none;\n      margin-bottom: 20px; }\n    .survey-editing .survey-start-editor .survey-body__survey-name,\n    .survey-editing .survey-finish-editor .survey-body__survey-name {\n      font-family: \"Oswald\", sans-serif;\n      font-size: 50px;\n      font-weight: 500;\n      text-align: center;\n      padding: 15px; }\n    .survey-editing .survey-start-editor .survey-body__survey-description,\n    .survey-editing .survey-finish-editor .survey-body__survey-description {\n      width: 50%;\n      height: 200px;\n      font-family: \"Open Sans\", sans-serif;\n      font-size: 18px;\n      overflow: auto;\n      padding: 10px; }\n    .survey-editing .survey-start-editor .survey-body__survey-category,\n    .survey-editing .survey-finish-editor .survey-body__survey-category {\n      outline: none;\n      background-color: transparent;\n      border: 1px dashed #535558;\n      border-radius: 5px;\n      font-family: \"Open Sans\", sans-serif;\n      font-size: 18px;\n      color: #535558;\n      padding: 10px 30px; }\n      .survey-editing .survey-start-editor .survey-body__survey-category:hover,\n      .survey-editing .survey-finish-editor .survey-body__survey-category:hover {\n        cursor: pointer; }\n  .survey-editing .survey-finish-editor {\n    padding: 100px 0; }\n  .survey-editing .survey-settings {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #535558;\n    font-size: 18px; }\n    .survey-editing .survey-settings h2 {\n      text-align: center;\n      width: 100%;\n      font-family: \"Oswald\", sans-serif;\n      font-size: 35px;\n      font-weight: 500;\n      margin-bottom: 50px; }\n    .survey-editing .survey-settings .survey-settings__settings-list p {\n      margin-bottom: 20px; }\n      .survey-editing .survey-settings .survey-settings__settings-list p label {\n        margin-left: 10px; }\n  .survey-editing .survey-answers-collection {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #535558;\n    font-size: 18px; }\n    .survey-editing .survey-answers-collection h2 {\n      text-align: center;\n      width: 100%;\n      font-family: \"Oswald\", sans-serif;\n      font-size: 35px;\n      font-weight: 500;\n      margin-bottom: 50px; }\n    .survey-editing .survey-answers-collection .survey-answers-collection__option {\n      width: 50%;\n      text-align: center;\n      padding: 40px;\n      margin-bottom: 40px;\n      border-radius: 35px;\n      background-color: white;\n      box-shadow: 0px 3px 25.52px 3.48px rgba(112, 112, 112, 0.1); }\n      .survey-editing .survey-answers-collection .survey-answers-collection__option h3 {\n        margin-bottom: 20px; }\n      .survey-editing .survey-answers-collection .survey-answers-collection__option .survey-answers-collection__button {\n        color: white;\n        font-family: \"Open Sans\", sans-serif;\n        font-size: 15px;\n        font-weight: 600;\n        background-color: #EB1C23;\n        border: none;\n        border-radius: 5px;\n        padding: 15px 30px;\n        margin-top: 25px; }\n    .survey-editing .survey-answers-collection .survey-answers-collection__link {\n      color: #7485c5;\n      font-size: 25px;\n      text-decoration: underline;\n      margin: 15px; }\n  .survey-editing .survey-results {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #535558;\n    font-size: 18px;\n    margin: 0 150px; }\n    .survey-editing .survey-results h2 {\n      width: 100%;\n      text-align: center;\n      font-family: \"Oswald\", sans-serif;\n      font-size: 35px;\n      font-weight: 500; }\n    .survey-editing .survey-results .survey-results__info {\n      width: 100%;\n      align-self: flex-start;\n      font-size: 15px;\n      font-weight: 600;\n      color: #85888c;\n      margin: 30px 0; }\n    .survey-editing .survey-results .survey-results__nav-buttons {\n      width: 100%; }\n      .survey-editing .survey-results .survey-results__nav-buttons button {\n        width: 49%;\n        font-family: \"Open Sans\", sans-serif;\n        font-size: 18px;\n        font-weight: 600;\n        color: white;\n        background-color: #BDBDBD;\n        padding: 15px;\n        border: none; }\n        .survey-editing .survey-results .survey-results__nav-buttons button:hover {\n          cursor: pointer;\n          opacity: 1; }\n      .survey-editing .survey-results .survey-results__nav-buttons .survey-results__nav-buttons_current {\n        background-color: #7485c5; }\n    .survey-editing .survey-results .survey-results__view-option {\n      align-self: flex-start;\n      margin: 20px 0;\n      width: 100%; }\n      .survey-editing .survey-results .survey-results__view-option select {\n        width: 49%;\n        font-family: \"Open Sans\", sans-serif;\n        font-size: 15px;\n        font-weight: 600;\n        color: #535558;\n        padding: 12px 5px; }\n    .survey-editing .survey-results .pagination {\n      width: 100%;\n      margin: 30px 0 50px 0; }\n    .survey-editing .survey-results .survey-results__question-result {\n      width: 100%;\n      background-color: white;\n      margin-bottom: 50px;\n      box-shadow: 0px 3px 25.52px 3.48px rgba(112, 112, 112, 0.1);\n      border-radius: 5px;\n      box-sizing: border-box;\n      padding: 50px; }\n      .survey-editing .survey-results .survey-results__question-result .survey-results__question-title {\n        font-size: 22px;\n        margin-bottom: 20px; }\n      .survey-editing .survey-results .survey-results__question-result .survey-results__question-info {\n        font-size: 18px;\n        font-weight: 600;\n        line-height: 1.1;\n        color: #a4a4a4;\n        margin-bottom: 20px; }\n    .survey-editing .survey-results .survey-results__answer-percentage p {\n      margin-top: 10px; }\n    .survey-editing .survey-results .survey-results__graph {\n      padding: 30px 0;\n      border: 2px solid #F7F7F7; }\n    .survey-editing .survey-results .table {\n      width: 100%;\n      border: 2px solid #BDBDBD; }\n      .survey-editing .survey-results .table tbody {\n        display: block;\n        width: 100%;\n        height: 300px;\n        overflow: hidden;\n        overflow-y: auto; }\n      .survey-editing .survey-results .table thead {\n        width: 100%; }\n        .survey-editing .survey-results .table thead tr {\n          background-color: #F7F7F7; }\n      .survey-editing .survey-results .table tr {\n        display: table;\n        width: 100%;\n        table-layout: fixed; }\n      .survey-editing .survey-results .table td,\n      .survey-editing .survey-results .table th {\n        width: 50%; }\n\n.socials {\n  margin-top: 20px; }\n  .socials button {\n    width: 50px;\n    height: 50px;\n    color: white;\n    background-color: #EB1C23;\n    font-size: 20px;\n    border: none;\n    border-radius: 25px; }\n\n.aside-button {\n  width: 50px;\n  height: 50px;\n  font-size: 25px;\n  text-align: center;\n  color: #535558;\n  border: none;\n  border-radius: 5px;\n  margin: 0 10px 20px 10px; }\n\n.aside-button:hover {\n  cursor: pointer;\n  color: black; }\n\n@media all and (max-width: 1010px) and (orientation: portrait) {\n  .survey-editing .survey-settings {\n    font-size: 36px; }\n    .survey-editing .survey-settings h2 {\n      font-size: 70px; }\n    .survey-editing .survey-settings .survey-settings__settings-list input {\n      width: 30px;\n      height: 30px; }\n  .survey-editing .survey-answers-collection {\n    font-size: 36px; }\n    .survey-editing .survey-answers-collection h2 {\n      font-size: 5vmin; }\n    .survey-editing .survey-answers-collection .survey-answers-collection__option {\n      width: 60vw;\n      margin-bottom: 4vh;\n      border-radius: 0px;\n      background-color: transparent;\n      border-bottom: 3px dashed #BDBDBD;\n      box-shadow: none; }\n      .survey-editing .survey-answers-collection .survey-answers-collection__option h3 {\n        margin: 2vh 0; }\n      .survey-editing .survey-answers-collection .survey-answers-collection__option .survey-answers-collection__button {\n        font-size: 2vmax;\n        padding: 15px 30px;\n        margin-top: 2vmax; }\n    .survey-editing .survey-answers-collection .survey-answers-collection__link {\n      font-size: 2vh;\n      margin: 2vh 15px; }\n  .survey-editing .survey-results {\n    font-size: 1.8vmax; }\n    .survey-editing .survey-results h2 {\n      font-size: 3.5vmax; }\n    .survey-editing .survey-results .survey-results__info {\n      font-size: 1.8vmax;\n      font-weight: 400; }\n    .survey-editing .survey-results .survey-results__nav-buttons button {\n      font-size: 2vmax;\n      height: 7vmax; }\n    .survey-editing .survey-results .survey-results__view-option select {\n      width: 100%;\n      height: 5vmax;\n      font-size: 2vmax; }\n    .survey-editing .survey-results .survey-results__question-result .survey-results__question-title {\n      font-size: 2.1vmax; }\n    .survey-editing .survey-results .survey-results__question-result .survey-results__question-info {\n      font-size: 2vmax;\n      font-weight: 400; }\n    .survey-editing .survey-results .bar-chart .bar-chart__inner .bar-chart__text {\n      font-size: 1.3vmax;\n      top: 0; }\n    .survey-editing .survey-results .pagination .pagination__button {\n      width: 6vmax;\n      margin: 0.5vh; }\n    .survey-editing .survey-results .table thead {\n      display: table-header-group; }\n    .survey-editing .survey-results .table th,\n    .survey-editing .survey-results .table td {\n      display: table-cell;\n      text-align: center;\n      line-height: 2; }\n      .survey-editing .survey-results .table th:before,\n      .survey-editing .survey-results .table td:before {\n        content: \"\";\n        display: none; } }\n\n.survey-setup__fullscreen {\n  display: none; }\n\n@media all and (max-width: 1010px) {\n  .survey-editing {\n    font-size: 2vmax; }\n    .survey-editing .survey-body .survey-body__new-question,\n    .survey-editing .survey-body .survey-body__question {\n      margin-left: 3.5%;\n      margin-top: 5%;\n      margin-bottom: 5%;\n      border-width: 7px;\n      padding: 5vmax;\n      height: 40vmax; }\n    .survey-editing .survey-body .survey-body__new-question {\n      border-radius: 7vmax; }\n    .survey-editing .survey-body .survey-body__new-question_add-button .survey-body__text {\n      font-size: 4vmax; }\n    .survey-editing .survey-body .survey-body__new-question_list {\n      flex-wrap: wrap; }\n      .survey-editing .survey-body .survey-body__new-question_list .survey-body__question-type {\n        font-size: 2vmax;\n        margin: 3vmax 5vmax; }\n    .survey-editing .survey-body .survey-body__question {\n      margin-top: 10vmax; }\n      .survey-editing .survey-body .survey-body__question .survey-body__question-view h4 {\n        font-size: 2.6vmax; }\n      .survey-editing .survey-body .survey-body__question .survey-body__question-view p {\n        font-size: 2.4vmax; }\n        .survey-editing .survey-body .survey-body__question .survey-body__question-view p input {\n          width: 1.5vmax;\n          height: 1.5vmax; }\n      .survey-editing .survey-body .survey-body__question .survey-body__question-view textarea {\n        margin: 2vmax 0;\n        padding: 1vmax;\n        font-size: 2vmax;\n        height: 20vmax;\n        width: 100%;\n        border: none; }\n      .survey-editing .survey-body .survey-body__question .survey-body__add-button_above-question {\n        top: -15vmax; }\n      .survey-editing .survey-body .survey-body__question .survey-body__edit-question {\n        position: absolute;\n        right: 0;\n        bottom: 0; }\n        .survey-editing .survey-body .survey-body__question .survey-body__edit-question button {\n          font-size: 5vmax;\n          margin-bottom: 3vmax;\n          margin-left: 3vmax; }\n    .survey-editing .survey-body .survey-body__question_first .survey-body__add-button_above-question {\n      top: -5vmax; }\n    .survey-editing .survey-body .survey-body__question_file .survey-body__question-view button {\n      font-size: 2.5vmax; }\n    .survey-editing .survey-body .survey-body__question_file label {\n      font-size: 2.5vmax; }\n    .survey-editing .survey-body .survey-body__question_rating .rating-stars {\n      font-size: 5vmax; }\n    .survey-editing .survey-body .survey-body__add-button {\n      font-size: 7vmax; }\n    .survey-editing .survey-body .range-slider__range {\n      width: 100%;\n      height: 1.5vmax; }\n    .survey-editing .survey-body .range-slider__value {\n      width: 5vmax;\n      height: 2vmax;\n      font-size: 2.3vmax;\n      padding-top: 7px;\n      padding-bottom: 0; }\n    .survey-editing .survey-start-editor,\n    .survey-editing .survey-finish-editor {\n      margin-top: 2vmax;\n      font-size: 2vmax; }\n      .survey-editing .survey-start-editor .survey-body__add-logo,\n      .survey-editing .survey-finish-editor .survey-body__add-logo {\n        border-width: 7px;\n        padding: 5vmax;\n        border-radius: 5vmax; }\n        .survey-editing .survey-start-editor .survey-body__add-logo p,\n        .survey-editing .survey-finish-editor .survey-body__add-logo p {\n          font-size: 2.5vmax; }\n      .survey-editing .survey-start-editor .survey-body__survey-name,\n      .survey-editing .survey-finish-editor .survey-body__survey-name {\n        font-size: 4vmax; }\n      .survey-editing .survey-start-editor .survey-body__survey-description,\n      .survey-editing .survey-finish-editor .survey-body__survey-description {\n        font-size: 2.2vmax;\n        width: 70%;\n        height: 27vmax; }\n      .survey-editing .survey-start-editor .survey-body__survey-category,\n      .survey-editing .survey-finish-editor .survey-body__survey-category {\n        font-size: 2vmax; }\n    .survey-editing .survey-setup_left {\n      display: none; }\n    .survey-editing .survey-setup_right {\n      margin: 0;\n      justify-content: center; }\n      .survey-editing .survey-setup_right .survey-setup__options,\n      .survey-editing .survey-setup_right .survey-setup__steps {\n        display: none; }\n      .survey-editing .survey-setup_right .survey-setup__cog {\n        display: block;\n        margin-right: 30%;\n        font-size: 7vmax;\n        color: #BDBDBD; }\n    .survey-editing .survey-setup__open-fullscreen:checked ~ .survey-setup__fullscreen {\n      display: flex; }\n  .survey-setup__fullscreen {\n    position: absolute;\n    width: 100vw;\n    height: 110vh;\n    right: 0;\n    background-color: rgba(83, 85, 88, 0.9);\n    color: white;\n    font-size: 7vh;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    z-index: 1000; }\n    .survey-setup__fullscreen button {\n      width: 10vmax;\n      height: 10vmax;\n      margin: 5vh 0;\n      font-size: 5vmax;\n      border-radius: 1vmax;\n      border: 5px dashed white;\n      color: white;\n      background-color: transparent; }\n    .survey-setup__fullscreen label {\n      align-self: flex-end; }\n    .survey-setup__fullscreen .fa-times {\n      margin: 0 5vh 5vh 5vh; } }\n\n@media all and (max-width: 1010px) and (orientation: portrait) {\n  .survey-setup__fullscreen {\n    top: -20vh; } }\n\n@media all and (max-width: 1010px) and (orientation: landscape) {\n  .survey-setup__fullscreen {\n    top: -36vh; } }\n\n@media all and (max-width: 1010px) {\n  .socials {\n    margin: 2vmax 0; }\n    .socials button {\n      width: 5vmax;\n      height: 5vmax;\n      font-size: 2.5vmax;\n      border-radius: 2.5vmax; }\n  .rating-stars {\n    font-size: 5vmax; } }\n\n.range-slider {\n  width: 100%;\n  margin: 20px 0 10px 0; }\n\n.range-slider__range {\n  -webkit-appearance: none;\n  width: 65%;\n  height: 10px;\n  border-radius: 5px;\n  background: #e3e3e3;\n  outline: none;\n  margin-right: 5px; }\n\n.range-slider__value {\n  display: inline-block;\n  position: relative;\n  width: 60px;\n  color: white;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: #EB1C23;\n  padding: 5px 10px;\n  margin-left: 8px; }\n  .range-slider__value:after {\n    position: absolute;\n    top: 8px;\n    left: -7px;\n    width: 0;\n    height: 0;\n    border-top: 7px solid transparent;\n    border-right: 7px solid #EB1C23;\n    border-bottom: 7px solid transparent;\n    content: ''; }\n\n.bar-chart {\n  background: #fff;\n  height: 2rem;\n  margin-bottom: 2rem; }\n  .bar-chart:last-child {\n    margin-bottom: 0; }\n  .bar-chart .bar-chart__inner {\n    background: #333;\n    height: 100%;\n    display: block;\n    margin-bottom: .3rem;\n    position: relative;\n    will-change: width; }\n    .bar-chart .bar-chart__inner:after {\n      position: absolute;\n      top: 0;\n      right: 0;\n      content: \" \";\n      width: 1rem;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.1); }\n    .bar-chart .bar-chart__inner .bar-chart__text {\n      position: absolute;\n      font-size: 15px;\n      font-weight: 700;\n      top: 20%;\n      left: 102%; }\n  .bar-chart.primary .bar-chart__inner {\n    background: #e86951; }\n  .bar-chart.secondary .bar-chart__inner {\n    background: #168de6; }\n  .bar-chart.tertiary .bar-chart__inner {\n    background: #1dbdab; }\n\nhtml {\n  height: 100%; }\n\nbody {\n  min-height: 100%;\n  height: auto;\n  background-color: #F7F7F7;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 18px;\n  position: relative; }\n\n.header {\n  background-color: white;\n  font-size: 20px;\n  font-family: \"Oswald\", sans-serif;\n  letter-spacing: 0.4px;\n  box-shadow: 0px 3px 25.52px 3.48px rgba(112, 112, 112, 0.1); }\n\n.head {\n  height: 50px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n  .head .head__logo {\n    margin: 40px 35px 15px 4.5%;\n    width: 100%;\n    flex-grow: 2; }\n  .head .head__auth {\n    flex-grow: 1;\n    display: flex;\n    margin: 40px 3.5% 0 35px;\n    list-style-type: none;\n    font-size: 20px; }\n    .head .head__auth .head__auth_signin,\n    .head .head__auth .head__auth_signup {\n      text-decoration: none;\n      color: #85888c;\n      padding: 0 20px; }\n    .head .head__auth .head__auth_signin:hover,\n    .head .head__auth .head__auth_signup:hover {\n      color: #BDBDBD; }\n    .head .head__auth .head__auth_signin {\n      border-right: 1px solid #BDBDBD; }\n\n.menu-container {\n  height: 56px;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  border-bottom: 3px solid #EB1C23; }\n  .menu-container input {\n    position: absolute;\n    top: -9999px;\n    left: -9999px; }\n  .menu-container .menu__hamburger {\n    display: none;\n    cursor: pointer;\n    user-select: none; }\n\n.menu {\n  height: 56px;\n  background-color: #EB1C23;\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  margin: 0 3.5%;\n  position: relative;\n  top: 50%;\n  z-index: 10;\n  box-shadow: 0px 3px 25.52px 3.48px rgba(112, 112, 112, 0.2); }\n  .menu .menu__item {\n    text-decoration: none;\n    color: white;\n    padding: 13px 60px 7px 60px;\n    flex-grow: 1;\n    line-height: 2; }\n\n.menu_left {\n  justify-content: flex-start;\n  flex-grow: 3; }\n  .menu_left .menu__item:hover, .menu_left .menu__item:active {\n    border-bottom: 6px solid #b81c21; }\n\n.content {\n  width: 100%; }\n\n.content_flex {\n  display: flex;\n  justify-content: center; }\n\n.content_white {\n  background-color: white; }\n\n.content_centered {\n  margin: 70px 15px 100px 15px;\n  background-color: white;\n  width: 1100px;\n  box-shadow: 0px 3px 25.52px 3.48px rgba(112, 112, 112, 0.29); }\n\n.search-bar {\n  height: 50px;\n  color: #8a8a8a;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 18px;\n  border: 2px solid #BDBDBD;\n  border-radius: 25px;\n  padding-left: 60px; }\n\n.triangle-down {\n  width: 0;\n  height: 0;\n  display: inline-block;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-top: 10px solid #535558; }\n\n.triangle-up {\n  width: 0;\n  height: 0;\n  display: inline-block;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 10px solid #535558; }\n\n.triangle-right {\n  width: 0;\n  height: 0;\n  display: inline-block;\n  border-top: 7px solid transparent;\n  border-left: 10px solid #535558;\n  border-bottom: 7px solid transparent; }\n\n.triangle-left {\n  width: 0;\n  height: 0;\n  display: inline-block;\n  border-top: 7px solid transparent;\n  border-right: 10px solid;\n  border-bottom: 7px solid transparent; }\n\n.operations-bar {\n  margin: 70px 4% 5% 4%;\n  padding-bottom: 30px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: relative; }\n  .operations-bar a {\n    text-decoration: none; }\n  .operations-bar .fa-search {\n    font-size: 25px;\n    color: #a4a4a4;\n    position: absolute;\n    left: 20px; }\n  .operations-bar .operations-bar__search {\n    width: 90%;\n    margin-right: 10%;\n    background-color: transparent;\n    color: #BDBDBD;\n    flex-flow: 2; }\n  .operations-bar .operations-bar__new-template {\n    height: 50px;\n    width: 240px;\n    flex-flow: 1;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 17px;\n    color: white;\n    border: none;\n    border-radius: 3px;\n    background-color: #7485c5;\n    margin-right: 50px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .operations-bar .operations-bar__new-template i {\n      font-size: 25px;\n      padding: 5px;\n      margin-right: 5px;\n      position: relative;\n      top: 2px; }\n  .operations-bar .operations-bar__new-template:hover {\n    cursor: pointer;\n    background-color: #5065b6; }\n\n.operations-bar_survey-list {\n  margin: 70px 0 0 0; }\n  .operations-bar_survey-list .operations-bar__new-template_right {\n    margin-right: 0; }\n\n.users {\n  margin: 30px 0 0 0;\n  padding-bottom: 23px; }\n\n.footer {\n  height: 50px;\n  width: 100%;\n  background-color: #535558;\n  color: white;\n  font-size: 14px;\n  letter-spacing: 0.8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 0;\n  box-shadow: 0px 3px 25.52px 3.48px rgba(112, 112, 112, 0.2); }\n\n.content-filler {\n  height: 300px;\n  background-color: #F7F7F7;\n  padding-bottom: 50px; }\n\n@media all and (max-width: 1010px) {\n  .head .head__logo {\n    padding-top: 2vmax; }\n    .head .head__logo img {\n      height: 3.7vmax; }\n  .head .head__auth {\n    font-size: 3.3vmax; }\n    .head .head__auth .head__auth_signin {\n      border-right: none; }\n    .head .head__auth .head__auth_signup {\n      display: none; }\n  .menu-container {\n    height: 7vmax;\n    border-bottom: 10px solid #EB1C23; }\n  .menu {\n    flex-direction: column;\n    height: 7vmax; }\n    .menu li {\n      width: 100%;\n      text-align: center;\n      background-color: #EB1C23;\n      display: none; }\n      .menu li:hover, .menu li:active {\n        background-color: #c31117; }\n    .menu .menu__item:hover, .menu .menu__item:active {\n      border-bottom: none; }\n    .menu .menu__hamburger {\n      display: block;\n      color: white;\n      font-size: 4vmax; }\n    .menu input:checked ~ li {\n      display: block;\n      font-size: 4vmax;\n      height: 10vmax;\n      padding: 2vh 0; }\n  .search-bar {\n    height: 7vmax;\n    font-size: 2.3vmax;\n    border-radius: 3px;\n    padding-left: 7vmax; }\n  .operations-bar {\n    width: 90%;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 7vmax;\n    padding-bottom: 2vmax; }\n    .operations-bar .fa-search {\n      font-size: 3vmax;\n      left: 2.2vmax;\n      top: 1.6vmax; }\n    .operations-bar .operations-bar__search {\n      width: 80%;\n      margin: 0; }\n    .operations-bar .operations-bar__new-template {\n      align-self: center;\n      height: 7vmax;\n      width: 10%;\n      margin: 0;\n      padding: 0;\n      background-color: transparent;\n      color: #7485c5; }\n      .operations-bar .operations-bar__new-template i {\n        font-size: 7vmax;\n        padding: 0; }\n      .operations-bar .operations-bar__new-template p {\n        display: none; }\n      .operations-bar .operations-bar__new-template:hover {\n        background-color: transparent;\n        outline: none; }\n  .users .operations-bar, .operations-bar_survey-list {\n    width: 100%; }\n  .content_centered {\n    margin: 0 0 0 0;\n    width: 100%;\n    box-shadow: none; }\n  .footer {\n    height: 7vmax;\n    font-size: 2.2vmax;\n    letter-spacing: normal; } }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);