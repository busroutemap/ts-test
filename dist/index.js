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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/Job.ts":
/*!*******************!*\
  !*** ./ts/Job.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Job = /** @class */ (function () {\r\n    function Job(jobType) {\r\n        var salarys = [];\r\n        for (var _i = 1; _i < arguments.length; _i++) {\r\n            salarys[_i - 1] = arguments[_i];\r\n        }\r\n        this.jobType = jobType;\r\n        if (salarys.length === 0) {\r\n            this.avgSalary = 0;\r\n        }\r\n        else {\r\n            var sum_1 = 0;\r\n            salarys.forEach(function (salary) {\r\n                sum_1 += salary;\r\n            });\r\n            this.avgSalary = sum_1 / salarys.length;\r\n        }\r\n    }\r\n    Job.prototype.getType = function () {\r\n        return this.jobType.toString();\r\n    };\r\n    return Job;\r\n}());\r\nexports.Job = Job;\r\n\n\n//# sourceURL=webpack:///./ts/Job.ts?");

/***/ }),

/***/ "./ts/User.ts":
/*!********************!*\
  !*** ./ts/User.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar User = /** @class */ (function () {\r\n    function User(familyName, givenName, age, job) {\r\n        this.familyName = familyName;\r\n        this.givenName = givenName;\r\n        this.age = age;\r\n        this.job = job;\r\n    }\r\n    /**\r\n     * getFullName\r\n     */\r\n    User.prototype.getFullName = function () {\r\n        return this.familyName + this.givenName;\r\n    };\r\n    User.prototype.getAge = function () {\r\n        return this.age;\r\n    };\r\n    return User;\r\n}());\r\nexports.User = User;\r\n\n\n//# sourceURL=webpack:///./ts/User.ts?");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar User_1 = __webpack_require__(/*! ./User */ \"./ts/User.ts\");\r\nvar Job_1 = __webpack_require__(/*! ./Job */ \"./ts/Job.ts\");\r\nvar user = new User_1.User(\"山田\", \"太郎\", 22, (new Job_1.Job(\"学生\")));\r\nvar contentsElement = document.getElementById(\"contents\");\r\nif (!!contentsElement) {\r\n    contentsElement.innerText = \"私は\" + user.getFullName() + \"で年齢は\" + user.getAge() + \"歳、職業は\" + user.job.getType() + \"、月収は\" + user.job.avgSalary + \"です\";\r\n}\r\n\n\n//# sourceURL=webpack:///./ts/index.ts?");

/***/ })

/******/ });