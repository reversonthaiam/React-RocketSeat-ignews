(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/ActiveLink/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/ActiveLink/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveLink": function() { return /* binding */ ActiveLink; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Desenvolvedor\\Desktop\\Projetos Trabalho\\React\\Estudos\\RocketSeat Curso\\React-RocketSeat-ignews\\src\\components\\ActiveLink\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function ActiveLink(_ref) {
  let {
    children,
    activeClassName
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "activeClassName"]);

  const {
    asPath
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const className = asPath === rest.href ? activeClassName : '';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, rest), {}, {
    children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(children, {
      className
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SignInButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SignInButton */ "./src/components/SignInButton/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ActiveLink */ "./src/components/ActiveLink/index.tsx");

var _jsxFileName = "C:\\Users\\Desenvolvedor\\Desktop\\Projetos Trabalho\\React\\Estudos\\RocketSeat Curso\\React-RocketSeat-ignews\\src\\components\\Header\\index.tsx";



function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/images/logo.svg",
        alt: "ig.news"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.ActiveLink, {
          activeClassName: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active),
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.ActiveLink, {
          activeClassName: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active),
          href: "/posts",
          prefetch: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Posts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignInButton__WEBPACK_IMPORTED_MODULE_1__.SignInButton, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/SignInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SignInButton/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInButton": function() { return /* binding */ SignInButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/SignInButton/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Desenvolvedor\\Desktop\\Projetos Trabalho\\React\\Estudos\\RocketSeat Curso\\React-RocketSeat-ignews\\src\\components\\SignInButton\\index.tsx";




function SignInButton() {
  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)();
  return session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().signInButton),
    onClick: () => (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signOut)(),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaGithub, {
      color: "#04d361"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), session.user.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiX, {
      color: "#737380",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().closeIcon),
      children: " "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().signInButton),
    onClick: () => (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signIn)("github"),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaGithub, {
      color: "#eba417"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), "Sign in with GitHub"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header/index.tsx");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Desenvolvedor\\Desktop\\Projetos Trabalho\\React\\Estudos\\RocketSeat Curso\\React-RocketSeat-ignews\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_client__WEBPACK_IMPORTED_MODULE_3__.Provider, {
      session: pageProps.session,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/components/Header/styles.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/styles.module.scss ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"headerContainer": "styles_headerContainer__3jyUX",
	"headerContent": "styles_headerContent__2P--I",
	"active": "styles_active__3zqNB"
};


/***/ }),

/***/ "./src/components/SignInButton/styles.module.scss":
/*!********************************************************!*\
  !*** ./src/components/SignInButton/styles.module.scss ***!
  \********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"signInButton": "styles_signInButton__2cB0N",
	"closeIcon": "styles_closeIcon__ZQtRZ"
};


/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_fa_index_esm_js-node_modules_react-6d7ff6"], function() { return __webpack_exec__("./src/pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9BY3RpdmVMaW5rL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL1NpZ25JbkJ1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU2lnbkluQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9pZ25ld3MvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vaWduZXdzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9pZ25ld3MvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaWduZXdzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9pZ25ld3MvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9pZ25ld3MvaWdub3JlZHxDOlxcVXNlcnNcXERlc2Vudm9sdmVkb3JcXERlc2t0b3BcXFByb2pldG9zIFRyYWJhbGhvXFxSZWFjdFxcRXN0dWRvc1xcUm9ja2V0U2VhdCBDdXJzb1xcUmVhY3QtUm9ja2V0U2VhdC1pZ25ld3NcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJBY3RpdmVMaW5rIiwiY2hpbGRyZW4iLCJhY3RpdmVDbGFzc05hbWUiLCJyZXN0IiwiYXNQYXRoIiwidXNlUm91dGVyIiwiY2xhc3NOYW1lIiwiaHJlZiIsImNsb25lRWxlbWVudCIsIkhlYWRlciIsInN0eWxlcyIsIlNpZ25JbkJ1dHRvbiIsInNlc3Npb24iLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsInVzZXIiLCJuYW1lIiwic2lnbkluIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBUU8sU0FBU0EsVUFBVCxPQUEwRTtBQUFBLE1BQXREO0FBQUNDLFlBQUQ7QUFBV0M7QUFBWCxHQUFzRDtBQUFBLE1BQXZCQyxJQUF1Qjs7QUFFL0UsUUFBTTtBQUFFQztBQUFGLE1BQWFDLHNEQUFTLEVBQTVCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRixNQUFNLEtBQUtELElBQUksQ0FBQ0ksSUFBaEIsR0FDaEJMLGVBRGdCLEdBRWhCLEVBRkY7QUFHQSxzQkFDRSw4REFBQyxrREFBRCxrQ0FBVUMsSUFBVjtBQUFBLDJCQUNHSyxtREFBWSxDQUFDUCxRQUFELEVBQVc7QUFDdEJLO0FBRHNCLEtBQVg7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCRDtBQUNBO0FBR0E7QUFHTyxTQUFTRyxNQUFULEdBQWlCO0FBSXRCLHNCQUNFO0FBQVEsYUFBUyxFQUFFQyw0RUFBbkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUEsMEVBQWhCO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUMsa0JBQVQ7QUFBNEIsV0FBRyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsZ0NBQ0UsOERBQUMsbURBQUQ7QUFBWSx5QkFBZSxFQUFFQSxtRUFBN0I7QUFBNEMsY0FBSSxFQUFDLEdBQWpEO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUsOERBQUMsbURBQUQ7QUFBWSx5QkFBZSxFQUFFQSxtRUFBN0I7QUFBNEMsY0FBSSxFQUFDLFFBQWpEO0FBQTBELGtCQUFRLE1BQWxFO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBVUUsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJEO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0MsWUFBVCxHQUF3QjtBQUM3QixRQUFNLENBQUNDLE9BQUQsSUFBWUMsNERBQVUsRUFBNUI7QUFFQSxTQUFPRCxPQUFPLGdCQUNaO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFFRix5RUFBakM7QUFBc0QsV0FBTyxFQUFHLE1BQU1JLHlEQUFPLEVBQTdFO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBVSxXQUFLLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdGLE9BQU8sQ0FBQ0csSUFBUixDQUFhQyxJQUZoQixlQUdFLDhEQUFDLCtDQUFEO0FBQUssV0FBSyxFQUFDLFNBQVg7QUFBcUIsZUFBUyxFQUFFTixzRUFBaEM7QUFBQSxnQkFDRztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEWSxnQkFTWjtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFFQSx5RUFGYjtBQUdFLFdBQU8sRUFBRSxNQUFNTyx3REFBTSxDQUFDLFFBQUQsQ0FIdkI7QUFBQSw0QkFLRSw4REFBQyxvREFBRDtBQUFVLFdBQUssRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBVEY7QUFrQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkQ7QUFDQTtBQUNBOztBQUVBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUFtRDtBQUNqRCxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHNEQUFEO0FBQWtCLGFBQU8sRUFBRUEsU0FBUyxDQUFDUixPQUFyQztBQUFBLDhCQUNFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLFNBQUQsb0JBQWVRLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBUUQ7O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmssIHsgTGlua1Byb3BzfSBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQsIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbiBcblxuaW50ZXJmYWNlIEFjdGl2ZUxpbmtQcm9wcyBleHRlbmRzIExpbmtQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnRcbiAgYWN0aXZlQ2xhc3NOYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFjdGl2ZUxpbmsoe2NoaWxkcmVuLCBhY3RpdmVDbGFzc05hbWUsIC4uLnJlc3R9OiBBY3RpdmVMaW5rUHJvcHMpe1xuXG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBjbGFzc05hbWUgPSBhc1BhdGggPT09IHJlc3QuaHJlZlxuICA/IGFjdGl2ZUNsYXNzTmFtZVxuICA6ICcnXG4gIHJldHVybihcbiAgICA8TGluayB7Li4ucmVzdH0+XG4gICAgICB7Y2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgXG4gICAgICB9KX1cblxuICAgIDwvTGluaz5cbiAgKVxufSIsImltcG9ydCB7IFNpZ25JbkJ1dHRvbiB9IGZyb20gJy4uL1NpZ25JbkJ1dHRvbidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEFjdGl2ZUxpbmsgfSBmcm9tICcuLi9BY3RpdmVMaW5rJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKXtcblxuIFxuXG4gIHJldHVybihcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRlbnR9PlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJpZy5uZXdzXCIgLz5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8QWN0aXZlTGluayBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5hY3RpdmV9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgICA8QWN0aXZlTGluayBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5hY3RpdmV9IGhyZWY9XCIvcG9zdHNcIiBwcmVmZXRjaD5cbiAgICAgICAgICAgIDxhPlBvc3RzPC9hPlxuICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxTaWduSW5CdXR0b24+PC9TaWduSW5CdXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvaGVhZGVyPlxuICApXG59IiwiaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBGaVggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWduSW5CdXR0b24oKSB7XG4gIGNvbnN0IFtzZXNzaW9uXSA9IHVzZVNlc3Npb24oKTtcblxuICByZXR1cm4gc2Vzc2lvbiA/IChcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5zaWduSW5CdXR0b259IG9uQ2xpY2s9eyAoKSA9PiBzaWduT3V0KCkgfT5cbiAgICAgIDxGYUdpdGh1YiBjb2xvcj1cIiMwNGQzNjFcIj48L0ZhR2l0aHViPlxuICAgICAge3Nlc3Npb24udXNlci5uYW1lfVxuICAgICAgPEZpWCBjb2xvcj1cIiM3MzczODBcIiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUljb259PlxuICAgICAgICB7XCIgXCJ9XG4gICAgICA8L0ZpWD5cbiAgICA8L2J1dHRvbj5cbiAgKSA6IChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25JbkJ1dHRvbn1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25JbihcImdpdGh1YlwiKX1cbiAgICA+XG4gICAgICA8RmFHaXRodWIgY29sb3I9XCIjZWJhNDE3XCI+PC9GYUdpdGh1Yj5cbiAgICAgIFNpZ24gaW4gd2l0aCBHaXRIdWJcbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuc2Nzc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgTmV4dEF1dGhQcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5leHRBdXRoUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxuICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L05leHRBdXRoUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyQ29udGFpbmVyXCI6IFwic3R5bGVzX2hlYWRlckNvbnRhaW5lcl9fM2p5VVhcIixcblx0XCJoZWFkZXJDb250ZW50XCI6IFwic3R5bGVzX2hlYWRlckNvbnRlbnRfXzJQLS1JXCIsXG5cdFwiYWN0aXZlXCI6IFwic3R5bGVzX2FjdGl2ZV9fM3pxTkJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNpZ25JbkJ1dHRvblwiOiBcInN0eWxlc19zaWduSW5CdXR0b25fXzJjQjBOXCIsXG5cdFwiY2xvc2VJY29uXCI6IFwic3R5bGVzX2Nsb3NlSWNvbl9fWlF0UlpcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==