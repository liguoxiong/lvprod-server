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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/configs/db.js":
/*!***************************!*\
  !*** ./src/configs/db.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();\n\nvar connectDB =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGOLAB_URI, {\n              useNewUrlParser: true,\n              useCreateIndex: true,\n              useFindAndModify: false,\n              useUnifiedTopology: true\n            });\n\n          case 3:\n            console.log('MongoDB Connected...');\n            _context.next = 10;\n            break;\n\n          case 6:\n            _context.prev = 6;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(_context.t0.message); // Exit process with failure\n\n            process.exit(1);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 6]]);\n  }));\n\n  return function connectDB() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectDB);\n\n//# sourceURL=webpack:///./src/configs/db.js?");

/***/ }),

/***/ "./src/server/controller/category.controller.js":
/*!******************************************************!*\
  !*** ./src/server/controller/category.controller.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/category.model */ \"./src/server/models/category.model.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar createCategory =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var _validateCategory, error, category;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            // validate the request body first\n            _validateCategory = Object(_models_category_model__WEBPACK_IMPORTED_MODULE_0__[\"validateCategory\"])(req.body), error = _validateCategory.error;\n\n            if (!error) {\n              _context.next = 4;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(400).send({\n              success: false,\n              message: error.details[0].message\n            }));\n\n          case 4:\n            _context.next = 6;\n            return _models_category_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n              title: req.body.title\n            });\n\n          case 6:\n            category = _context.sent;\n\n            if (!category) {\n              _context.next = 9;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(400).send({\n              success: false,\n              message: \"Category already existed.\"\n            }));\n\n          case 9:\n            category = new _models_category_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n              title: req.body.title,\n              description: req.body.description,\n              image: req.body.image\n            });\n            _context.next = 12;\n            return category.save();\n\n          case 12:\n            res.status(200).send({\n              success: true,\n              message: 'Add new category successfull'\n            });\n            _context.next = 18;\n            break;\n\n          case 15:\n            _context.prev = 15;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              success: false,\n              message: 'Server error!'\n            }));\n\n          case 18:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 15]]);\n  }));\n\n  return function createCategory(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getAllCategory =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var category;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return _models_category_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n\n          case 3:\n            category = _context2.sent;\n            res.status(200).send({\n              success: true,\n              data: category\n            });\n            _context2.next = 10;\n            break;\n\n          case 7:\n            _context2.prev = 7;\n            _context2.t0 = _context2[\"catch\"](0);\n            return _context2.abrupt(\"return\", res.status(500).send({\n              success: false,\n              message: 'Server error!'\n            }));\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 7]]);\n  }));\n\n  return function getAllCategory(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar getCategoryById =\n/*#__PURE__*/\nfunction () {\n  var _ref3 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3(req, res) {\n    var category;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return _models_category_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.id);\n\n          case 3:\n            category = _context3.sent;\n\n            if (category) {\n              _context3.next = 6;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", res.status(400).send({\n              success: false,\n              message: \"Category is not existed.\"\n            }));\n\n          case 6:\n            res.status(200).send({\n              success: true,\n              data: category\n            });\n            _context3.next = 12;\n            break;\n\n          case 9:\n            _context3.prev = 9;\n            _context3.t0 = _context3[\"catch\"](0);\n            return _context3.abrupt(\"return\", res.status(500).send({\n              success: false,\n              message: 'Server error!'\n            }));\n\n          case 12:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 9]]);\n  }));\n\n  return function getCategoryById(_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nvar updateCategoryById =\n/*#__PURE__*/\nfunction () {\n  var _ref4 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee4(req, res) {\n    var category;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            _context4.next = 3;\n            return _models_category_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.params.id, {\n              $set: req.body\n            });\n\n          case 3:\n            category = _context4.sent;\n\n            if (category) {\n              _context4.next = 6;\n              break;\n            }\n\n            return _context4.abrupt(\"return\", res.status(400).send({\n              success: false,\n              message: \"Category is not existed.\"\n            }));\n\n          case 6:\n            res.status(200).send({\n              success: true,\n              message: \"Update category successfull\"\n            });\n            _context4.next = 12;\n            break;\n\n          case 9:\n            _context4.prev = 9;\n            _context4.t0 = _context4[\"catch\"](0);\n            return _context4.abrupt(\"return\", res.status(500).send({\n              success: false,\n              message: 'Server error!'\n            }));\n\n          case 12:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 9]]);\n  }));\n\n  return function updateCategoryById(_x7, _x8) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nvar deleteCategoryById =\n/*#__PURE__*/\nfunction () {\n  var _ref5 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee5(req, res) {\n    var category;\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.prev = 0;\n            _context5.next = 3;\n            return _models_category_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndRemove(req.params.id);\n\n          case 3:\n            category = _context5.sent;\n\n            if (category) {\n              _context5.next = 6;\n              break;\n            }\n\n            return _context5.abrupt(\"return\", res.status(400).send({\n              success: false,\n              message: \"Category is not existed.\"\n            }));\n\n          case 6:\n            res.status(200).send({\n              success: true,\n              message: \"Delete category successfull\"\n            });\n            _context5.next = 12;\n            break;\n\n          case 9:\n            _context5.prev = 9;\n            _context5.t0 = _context5[\"catch\"](0);\n            return _context5.abrupt(\"return\", res.status(500).send({\n              success: false,\n              message: 'Server error!'\n            }));\n\n          case 12:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, null, [[0, 9]]);\n  }));\n\n  return function deleteCategoryById(_x9, _x10) {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  createCategory: createCategory,\n  getCategoryById: getCategoryById,\n  updateCategoryById: updateCategoryById,\n  deleteCategoryById: deleteCategoryById,\n  getAllCategory: getAllCategory\n});\n\n//# sourceURL=webpack:///./src/server/controller/category.controller.js?");

/***/ }),

/***/ "./src/server/controller/user.controller.js":
/*!**************************************************!*\
  !*** ./src/server/controller/user.controller.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/user.model */ \"./src/server/models/user.model.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar getCurrentUser =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var user;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(req.user._id).select(\"-password\");\n\n          case 2:\n            user = _context.sent;\n            res.send({\n              success: true,\n              data: user\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getCurrentUser(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar userRegister =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var _validateUser, error, user, token;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            // validate the request body first\n            _validateUser = Object(_models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"validateUser\"])(req.body), error = _validateUser.error;\n\n            if (!error) {\n              _context2.next = 3;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.status(400).send({\n              success: false,\n              message: error.details[0].message\n            }));\n\n          case 3:\n            _context2.next = 5;\n            return _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n              email: req.body.email\n            });\n\n          case 5:\n            user = _context2.sent;\n\n            if (!user) {\n              _context2.next = 8;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.status(400).send({\n              success: false,\n              message: \"User already registered.\"\n            }));\n\n          case 8:\n            user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n              name: req.body.name,\n              password: req.body.password,\n              email: req.body.email\n            });\n            _context2.next = 11;\n            return bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.hash(user.password, 10);\n\n          case 11:\n            user.password = _context2.sent;\n            _context2.next = 14;\n            return user.save();\n\n          case 14:\n            token = user.generateAuthToken();\n            res.header(\"x-auth-token\", token).send({\n              success: true,\n              data: {\n                _id: user._id,\n                name: user.name,\n                email: user.email\n              }\n            });\n\n          case 16:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function userRegister(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar userLogin =\n/*#__PURE__*/\nfunction () {\n  var _ref3 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3(req, res) {\n    var user, result, token;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n              email: req.body.email\n            });\n\n          case 3:\n            user = _context3.sent;\n\n            if (user) {\n              _context3.next = 6;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", res.status(404).send({\n              success: false,\n              message: 'User not found!'\n            }));\n\n          case 6:\n            result = bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.compareSync(req.body.password, user.password);\n\n            if (result) {\n              _context3.next = 9;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", res.status(401).send({\n              success: false,\n              message: 'Password not valid!'\n            }));\n\n          case 9:\n            token = user.generateAuthToken();\n            res.status(200).header(\"x-auth-token\", token).send({\n              success: true,\n              data: {\n                _id: user._id,\n                name: user.name,\n                email: user.email\n              }\n            });\n            _context3.next = 16;\n            break;\n\n          case 13:\n            _context3.prev = 13;\n            _context3.t0 = _context3[\"catch\"](0);\n            return _context3.abrupt(\"return\", res.status(500).send({\n              success: false,\n              message: 'Server error!'\n            }));\n\n          case 16:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 13]]);\n  }));\n\n  return function userLogin(_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getCurrentUser: getCurrentUser,\n  userRegister: userRegister,\n  userLogin: userLogin\n});\n\n//# sourceURL=webpack:///./src/server/controller/user.controller.js?");

/***/ }),

/***/ "./src/server/middleware/auth.js":
/*!***************************************!*\
  !*** ./src/server/middleware/auth.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();\n\nvar auth = function auth(req, res, next) {\n  //get the token from the header if present\n  var token = req.headers[\"x-access-token\"] || req.headers[\"authorization\"]; //if no token found, return response (without going to the next middelware)\n\n  if (!token) return res.status(401).send(\"Access denied. No token provided.\");\n\n  try {\n    //if can verify the token, set req.user and pass to next middleware\n    var decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, process.env.SECRET_KEY);\n    req.user = decoded;\n    next();\n  } catch (ex) {\n    //if invalid token\n    res.status(400).send(\"Invalid token.\");\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth);\n\n//# sourceURL=webpack:///./src/server/middleware/auth.js?");

/***/ }),

/***/ "./src/server/models/category.model.js":
/*!*********************************************!*\
  !*** ./src/server/models/category.model.js ***!
  \*********************************************/
/*! exports provided: validateCategory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateCategory\", function() { return validateCategory; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config(); //simple schema\n\nvar CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  title: {\n    type: String,\n    required: true,\n    minlength: 3,\n    maxlength: 50,\n    unique: true\n  },\n  description: {\n    type: String\n  },\n  image: {\n    type: String,\n    required: true,\n    minlength: 3,\n    maxlength: 255\n  },\n  created_at: {\n    type: Date,\n    \"default\": Date.now\n  }\n});\nvar Category = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Category', CategorySchema); //function to validate Category\n\nvar validateCategory = function validateCategory(category) {\n  var schema = {\n    title: joi__WEBPACK_IMPORTED_MODULE_2___default.a.string().min(3).max(50).required(),\n    description: joi__WEBPACK_IMPORTED_MODULE_2___default.a.string().allow('').optional(),\n    image: joi__WEBPACK_IMPORTED_MODULE_2___default.a.string().min(3).max(255).required()\n  };\n  return joi__WEBPACK_IMPORTED_MODULE_2___default.a.validate(category, schema);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\n\n//# sourceURL=webpack:///./src/server/models/category.model.js?");

/***/ }),

/***/ "./src/server/models/index.js":
/*!************************************!*\
  !*** ./src/server/models/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ \"./src/server/models/user.model.js\");\n/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.model */ \"./src/server/models/category.model.js\");\n\n\nvar models = {\n  User: _user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Category: _category_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (models);\n\n//# sourceURL=webpack:///./src/server/models/index.js?");

/***/ }),

/***/ "./src/server/models/user.model.js":
/*!*****************************************!*\
  !*** ./src/server/models/user.model.js ***!
  \*****************************************/
/*! exports provided: validateUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateUser\", function() { return validateUser; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config(); //simple schema\n\nvar UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true,\n    minlength: 3,\n    maxlength: 50\n  },\n  email: {\n    type: String,\n    required: true,\n    minlength: 5,\n    maxlength: 255,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true,\n    minlength: 3,\n    maxlength: 255\n  },\n  //give different access rights if admin or not \n  isAdmin: Boolean\n}); //custom method to generate authToken \n\nUserSchema.methods.generateAuthToken = function () {\n  var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n    _id: this._id,\n    isAdmin: this.isAdmin\n  }, process.env.SECRET_KEY); //get the private key from the config file -> environment variable\n\n  return token;\n};\n\nvar User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema); //function to validate user \n\nvar validateUser = function validateUser(user) {\n  var schema = {\n    name: joi__WEBPACK_IMPORTED_MODULE_3___default.a.string().min(3).max(50).required(),\n    email: joi__WEBPACK_IMPORTED_MODULE_3___default.a.string().min(5).max(255).required().email(),\n    password: joi__WEBPACK_IMPORTED_MODULE_3___default.a.string().min(3).max(255).required()\n  };\n  return joi__WEBPACK_IMPORTED_MODULE_3___default.a.validate(user, schema);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/server/models/user.model.js?");

/***/ }),

/***/ "./src/server/routes/category.route.js":
/*!*********************************************!*\
  !*** ./src/server/routes/category.route.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/auth */ \"./src/server/middleware/auth.js\");\n/* harmony import */ var _controller_category_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../controller/category.controller */ \"./src/server/controller/category.controller.js\");\n\n\n\nvar router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nrouter.get(\"/\", _controller_category_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAllCategory);\nrouter.post(\"/\", _middleware_auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controller_category_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createCategory);\nrouter.get(\"/:id\", _controller_category_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCategoryById);\nrouter.put(\"/update/:id\", _controller_category_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateCategoryById);\nrouter[\"delete\"](\"/delete/:id\", _controller_category_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteCategoryById);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/category.route.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.route */ \"./src/server/routes/user.route.js\");\n/* harmony import */ var _category_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.route */ \"./src/server/routes/category.route.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  user: _user_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  category: _category_route__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/routes/user.route.js":
/*!*****************************************!*\
  !*** ./src/server/routes/user.route.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../middleware/auth */ \"./src/server/middleware/auth.js\");\n/* harmony import */ var _controller_user_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../controller/user.controller */ \"./src/server/controller/user.controller.js\");\n\n\n\nvar router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nrouter.get(\"/current\", _middleware_auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controller_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCurrentUser);\nrouter.post(\"/register\", _controller_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userRegister);\nrouter.post('/login', _controller_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userLogin);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/user.route.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models */ \"./src/server/models/index.js\");\n/* harmony import */ var _configs_db__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../configs/db */ \"./src/configs/db.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// import path from \"path\";\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(),\n    // DIST_DIR = __dirname,\n// HTML_FILE = path.join(DIST_DIR, \"index.html\"),\ncompiler = webpack__WEBPACK_IMPORTED_MODULE_3___default()(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_6___default.a);\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler, {\n  publicPath: _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_6___default.a.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default()(compiler));\napp.use(\"/api/user\", _routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"].user);\napp.use('/api/categories', _routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"].category); // app.get(\"*\", (req, res, next) => {\n//   compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {\n//     if (err) {\n//       return next(err);\n//     }\n//     res.set(\"content-type\", \"text/html\");\n//     res.send(result);\n//     res.end();\n//   });\n// });\n// const eraseDatabaseOnSync = true;\n\nvar PORT = process.env.PORT || 8080;\nObject(_configs_db__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\nvar createUsersWithMessages =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee() {\n    var user1, message1;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            user1 = new _models__WEBPACK_IMPORTED_MODULE_8__[\"default\"].User({\n              username: \"rwieruch\"\n            });\n            message1 = new _models__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Message({\n              text: \"Published the Road to learn React\",\n              user: user1.id\n            });\n            _context.next = 4;\n            return message1.save();\n\n          case 4:\n            _context.next = 6;\n            return user1.save();\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function createUsersWithMessages() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\ncreateUsersWithMessages();\napp.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log(\"Press Ctrl+C to quit.\");\n});\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\n__webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n\nmodule.exports = {\n  entry: {\n    main: [\"@babel/polyfill\", \"webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000\", \"./src/index.js\"]\n  },\n  output: {\n    path: path.join(__dirname, \"dist\"),\n    publicPath: \"/\",\n    filename: \"[name].js\"\n  },\n  mode: \"development\",\n  target: \"web\",\n  devtool: \"source-map\",\n  module: {\n    rules: [{\n      enforce: \"pre\",\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: \"eslint-loader\",\n      options: {\n        emitWarning: true,\n        failOnError: false,\n        failOnWarning: false\n      }\n    }, {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: \"babel-loader\"\n    }, {\n      // Loads the javacript into html template provided.\n      // Entry point is set below in HtmlWebPackPlugin in Plugins\n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\" //options: { minimize: true }\n\n      }]\n    }, {\n      test: /\\.css$/,\n      use: [\"style-loader\", \"css-loader\"]\n    }, {\n      test: /\\.(png|svg|jpg|gif)$/,\n      use: [\"file-loader\"]\n    }]\n  },\n  plugins: [new HtmlWebPackPlugin({\n    template: \"./src/html/index.html\",\n    filename: \"./index.html\",\n    excludeChunks: [\"server\"]\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv/config\");\n\n//# sourceURL=webpack:///external_%22dotenv/config%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });