/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/SignInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SignInButton/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignInButton\": function() { return /* binding */ SignInButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_develop_rea_de_Trabalho_Reverson_react_React_RocketSeat_ignews_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SignInButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/develop/\\xC1rea de Trabalho/Reverson/react/React-RocketSeat-ignews/src/components/SignInButton/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction SignInButton() {\n  _s();\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.useSession)(),\n      _useSession2 = (0,_home_develop_rea_de_Trabalho_Reverson_react_React_RocketSeat_ignews_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),\n      session = _useSession2[0];\n\n  return session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    type: \"button\",\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),\n    onClick: function onClick() {\n      return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGithub, {\n      color: \"#04d361\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), session.user.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiX, {\n      color: \"#737380\",\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().closeIcon),\n      children: \" \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    type: \"button\",\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),\n    onClick: function onClick() {\n      return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"github\");\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGithub, {\n      color: \"#eba417\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), \"Sign in with GitHub\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SignInButton, \"Vxy5gMemEU/s8dbgarDyE2/t+kg=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_2__.useSession];\n});\n\n_c = SignInButton;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignInButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lnbkluQnV0dG9uL2luZGV4LnRzeD9kNGM4Il0sIm5hbWVzIjpbIlNpZ25JbkJ1dHRvbiIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwic3R5bGVzIiwic2lnbk91dCIsInVzZXIiLCJuYW1lIiwic2lnbkluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUEsb0JBQ1hDLDREQUFVLEVBREM7QUFBQTtBQUFBLE1BQ3RCQyxPQURzQjs7QUFHN0IsU0FBT0EsT0FBTyxnQkFDWjtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBRUMseUVBQWpDO0FBQXNELFdBQU8sRUFBRztBQUFBLGFBQU1DLHlEQUFPLEVBQWI7QUFBQSxLQUFoRTtBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQVUsV0FBSyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHRixPQUFPLENBQUNHLElBQVIsQ0FBYUMsSUFGaEIsZUFHRSw4REFBQywrQ0FBRDtBQUFLLFdBQUssRUFBQyxTQUFYO0FBQXFCLGVBQVMsRUFBRUgsc0VBQWhDO0FBQUEsZ0JBQ0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFksZ0JBU1o7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBRUEseUVBRmI7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNSSx3REFBTSxDQUFDLFFBQUQsQ0FBWjtBQUFBLEtBSFg7QUFBQSw0QkFLRSw4REFBQyxvREFBRDtBQUFVLFdBQUssRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBVEY7QUFrQkQ7O0dBckJlUCxZO1VBQ0lDLHdEOzs7S0FESkQsWSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NpZ25JbkJ1dHRvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYUdpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IEZpWCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgc2lnbkluLCB1c2VTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZ25JbkJ1dHRvbigpIHtcbiAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xuXG4gIHJldHVybiBzZXNzaW9uID8gKFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25JbkJ1dHRvbn0gb25DbGljaz17ICgpID0+IHNpZ25PdXQoKSB9PlxuICAgICAgPEZhR2l0aHViIGNvbG9yPVwiIzA0ZDM2MVwiPjwvRmFHaXRodWI+XG4gICAgICB7c2Vzc2lvbi51c2VyLm5hbWV9XG4gICAgICA8RmlYIGNvbG9yPVwiIzczNzM4MFwiIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlSWNvbn0+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgIDwvRmlYPlxuICAgIDwvYnV0dG9uPlxuICApIDogKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbkluQnV0dG9ufVxuICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKFwiZ2l0aHViXCIpfVxuICAgID5cbiAgICAgIDxGYUdpdGh1YiBjb2xvcj1cIiNlYmE0MTdcIj48L0ZhR2l0aHViPlxuICAgICAgU2lnbiBpbiB3aXRoIEdpdEh1YlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SignInButton/index.tsx\n");

/***/ })

});