/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n    clientId: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SECRET,\n    scope: \"read:user\"\n  })],\n\n  /*  jwt: {\n    signingKey: process.env.SIGNING_KEY,\n  }, */\n  callbacks: {\n    async signIn(user, account, profile) {\n      const {\n        email\n      } = user;\n\n      try {\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Collection(\"users\"), {\n          data: {\n            email\n          }\n        }), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Casefold(user.email)))));\n        return true;\n      } catch {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz83MmNmIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJlbWFpbCIsImZhdW5hIiwicSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSwrREFBZUEsZ0RBQVEsQ0FBQztBQUN0QkMsV0FBUyxFQUFFLENBQ1RDLGlFQUFBLENBQWlCO0FBQ2ZDLFlBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQURQO0FBRWZDLGdCQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxvQkFGWDtBQUdmQyxTQUFLLEVBQUU7QUFIUSxHQUFqQixDQURTLENBRFc7O0FBU3RCO0FBQ0Y7QUFDQTtBQUVFQyxXQUFTLEVBQUU7QUFDVCxVQUFNQyxNQUFOLENBQWFDLElBQWIsRUFBbUJDLE9BQW5CLEVBQTRCQyxPQUE1QixFQUFxQztBQUNuQyxZQUFNO0FBQUVDO0FBQUYsVUFBWUgsSUFBbEI7O0FBRUEsVUFBSTtBQUNGLGNBQU1JLHdEQUFBLENBQ0pDLDZDQUFBLENBQ0VBLDhDQUFBLENBQ0VBLGlEQUFBLENBQ0VBLGdEQUFBLENBQVFBLGdEQUFBLENBQVEsZUFBUixDQUFSLEVBQWtDQSxtREFBQSxDQUFXTCxJQUFJLENBQUNHLEtBQWhCLENBQWxDLENBREYsQ0FERixDQURGLEVBTUVFLGlEQUFBLENBQVNBLHFEQUFBLENBQWEsT0FBYixDQUFULEVBQWdDO0FBQUVDLGNBQUksRUFBRTtBQUFFSDtBQUFGO0FBQVIsU0FBaEMsQ0FORixFQU9FRSw4Q0FBQSxDQUFNQSxnREFBQSxDQUFRQSxnREFBQSxDQUFRLGVBQVIsQ0FBUixFQUFrQ0EsbURBQUEsQ0FBV0wsSUFBSSxDQUFDRyxLQUFoQixDQUFsQyxDQUFOLENBUEYsQ0FESSxDQUFOO0FBV0EsZUFBTyxJQUFQO0FBQ0QsT0FiRCxDQWFFLE1BQU07QUFDTixlQUFPLEtBQVA7QUFDRDtBQUNGOztBQXBCUTtBQWJXLENBQUQsQ0FBdkIiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZmF1bmFcIjtcbmltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tIFwiZmF1bmFkYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5HaXRIdWIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICAgICAgc2NvcGU6IFwicmVhZDp1c2VyXCIsXG4gICAgfSksXG4gIF0sXG5cbiAgLyogIGp3dDoge1xuICAgIHNpZ25pbmdLZXk6IHByb2Nlc3MuZW52LlNJR05JTkdfS0VZLFxuICB9LCAqL1xuXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih1c2VyLCBhY2NvdW50LCBwcm9maWxlKSB7XG4gICAgICBjb25zdCB7IGVtYWlsIH0gPSB1c2VyO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICBxLklmKFxuICAgICAgICAgICAgcS5Ob3QoXG4gICAgICAgICAgICAgIHEuRXhpc3RzKFxuICAgICAgICAgICAgICAgIHEuTWF0Y2gocS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksIHEuQ2FzZWZvbGQodXNlci5lbWFpbCkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBxLkNyZWF0ZShxLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiKSwgeyBkYXRhOiB7IGVtYWlsIH0gfSksXG4gICAgICAgICAgICBxLkdldChxLk1hdGNoKHEuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLCBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": function() { return /* binding */ fauna; }\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/OGY0ZCJdLCJuYW1lcyI6WyJmYXVuYSIsIkNsaWVudCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsMkNBQUosQ0FBVztBQUM5QkMsUUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEVSxDQUFYLENBQWQiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJ1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX0tFWVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("faunadb");;

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();