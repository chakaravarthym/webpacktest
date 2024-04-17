"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkwebpack"] = globalThis["webpackChunkwebpack"] || []).push([["App"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hello_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello.jpeg */ \"./src/hello.jpeg\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nfunction App() {\n  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    username: '',\n    password: '',\n    errors: {}\n  });\n  const handleChange = event => {\n    const {\n      name,\n      value\n    } = event.target;\n    setFormData(prevState => ({\n      ...prevState,\n      [name]: value\n    }));\n  };\n  const validateForm = () => {\n    const errors = {};\n\n    // Check if username is empty\n    if (!formData.username) {\n      errors.username = 'Username is required';\n    }\n\n    // Check if password is empty\n    if (!formData.password) {\n      errors.password = 'Password is required';\n    }\n    setFormData(prevState => ({\n      ...prevState,\n      errors\n    }));\n\n    // Return true if there are no errors\n    return Object.keys(errors).length === 0;\n  };\n  const handleSubmit = event => {\n    event.preventDefault();\n    if (validateForm()) {\n      // Form is valid, submit data\n      console.log(formData);\n    } else {\n      // Form is invalid, do nothing\n    }\n  };\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"div\", {\n      className: \"header_title\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"h1\", {\n        children: \"React App webpack - 3\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"img\", {\n          src: _hello_jpeg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        })\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"label\", {\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n          children: \"Username:\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"input\", {\n            type: \"text\",\n            name: \"username\",\n            value: formData.username,\n            onChange: handleChange\n          })\n        }), formData.errors.username && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"p\", {\n          style: {\n            color: 'red'\n          },\n          children: formData.errors.username\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"label\", {\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n          children: \"Password:\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"input\", {\n            type: \"password\",\n            name: \"password\",\n            value: formData.password,\n            onChange: handleChange\n          })\n        }), formData.errors.password && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"p\", {\n          style: {\n            color: 'red'\n          },\n          children: formData.errors.password\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"input\", {\n          type: \"submit\",\n          value: \"Submit\"\n        })\n      })]\n    })]\n  });\n}\n\n//# sourceURL=webpack://webpack/./src/App.js?");

/***/ })

}]);