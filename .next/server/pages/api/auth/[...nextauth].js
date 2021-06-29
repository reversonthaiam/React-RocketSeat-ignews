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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_3__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n    clientId: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SECRET,\n    scope: \"read:user\"\n  })],\n\n  /*  jwt: {\n    signingKey: process.env.SIGNING_KEY,\n  }, */\n  callbacks: {\n    async session(session) {\n      try {\n        const userAtiveSubscription = await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Intersection([faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Index(\"subscription_by_user_ref\"), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Casefold(session.user.email))))), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Index(\"subscription_by_status\"), \"active\")])));\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: userAtiveSubscription\n        });\n      } catch {\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: null\n        });\n      }\n    },\n\n    async signIn(user, account, profile) {\n      const {\n        email\n      } = user;\n\n      try {\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Collection(\"users\"), {\n          data: {\n            email\n          }\n        }), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Casefold(user.email)))));\n        return true;\n      } catch {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz83MmNmIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidXNlckF0aXZlU3Vic2NyaXB0aW9uIiwiZmF1bmEiLCJxIiwidXNlciIsImVtYWlsIiwiYWN0aXZlU3Vic2NyaXB0aW9uIiwic2lnbkluIiwiYWNjb3VudCIsInByb2ZpbGUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsK0RBQWVBLGdEQUFRLENBQUM7QUFDdEJDLFdBQVMsRUFBRSxDQUNUQyxpRUFBQSxDQUFpQjtBQUNmQyxZQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFEUDtBQUVmQyxnQkFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsb0JBRlg7QUFHZkMsU0FBSyxFQUFFO0FBSFEsR0FBakIsQ0FEUyxDQURXOztBQVN0QjtBQUNGO0FBQ0E7QUFFRUMsV0FBUyxFQUFFO0FBQ1QsVUFBTUMsT0FBTixDQUFjQSxPQUFkLEVBQXVCO0FBQ3JCLFVBQUc7QUFDRCxjQUFNQyxxQkFBcUIsR0FBRyxNQUFNQyx3REFBQSxDQUNsQ0MsOENBQUEsQ0FDRUEsdURBQUEsQ0FBZSxDQUNiQSxnREFBQSxDQUNFQSxnREFBQSxDQUFRLDBCQUFSLENBREYsRUFFRUEsaURBQUEsQ0FDRSxLQURGLEVBRUVBLDhDQUFBLENBQ0VBLGdEQUFBLENBQ0VBLGdEQUFBLENBQVEsZUFBUixDQURGLEVBRUVBLG1EQUFBLENBQVdILE9BQU8sQ0FBQ0ksSUFBUixDQUFhQyxLQUF4QixDQUZGLENBREYsQ0FGRixDQUZGLENBRGEsRUFhYkYsZ0RBQUEsQ0FBUUEsZ0RBQUEsQ0FBUSx3QkFBUixDQUFSLEVBQTJDLFFBQTNDLENBYmEsQ0FBZixDQURGLENBRGtDLENBQXBDO0FBb0JBLCtDQUNLSCxPQURMO0FBRUVNLDRCQUFrQixFQUFFTDtBQUZ0QjtBQUlELE9BekJELENBeUJFLE1BQUs7QUFDTCwrQ0FDS0QsT0FETDtBQUVFTSw0QkFBa0IsRUFBRTtBQUZ0QjtBQUlEO0FBQ0YsS0FqQ1E7O0FBa0NULFVBQU1DLE1BQU4sQ0FBYUgsSUFBYixFQUFtQkksT0FBbkIsRUFBNEJDLE9BQTVCLEVBQXFDO0FBQ25DLFlBQU07QUFBRUo7QUFBRixVQUFZRCxJQUFsQjs7QUFFQSxVQUFJO0FBQ0YsY0FBTUYsd0RBQUEsQ0FDSkMsNkNBQUEsQ0FDRUEsOENBQUEsQ0FDRUEsaURBQUEsQ0FDRUEsZ0RBQUEsQ0FBUUEsZ0RBQUEsQ0FBUSxlQUFSLENBQVIsRUFBa0NBLG1EQUFBLENBQVdDLElBQUksQ0FBQ0MsS0FBaEIsQ0FBbEMsQ0FERixDQURGLENBREYsRUFNRUYsaURBQUEsQ0FBU0EscURBQUEsQ0FBYSxPQUFiLENBQVQsRUFBZ0M7QUFBRU8sY0FBSSxFQUFFO0FBQUVMO0FBQUY7QUFBUixTQUFoQyxDQU5GLEVBT0VGLDhDQUFBLENBQU1BLGdEQUFBLENBQVFBLGdEQUFBLENBQVEsZUFBUixDQUFSLEVBQWtDQSxtREFBQSxDQUFXQyxJQUFJLENBQUNDLEtBQWhCLENBQWxDLENBQU4sQ0FQRixDQURJLENBQU47QUFXQSxlQUFPLElBQVA7QUFDRCxPQWJELENBYUUsTUFBTTtBQUNOLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBckRRO0FBYlcsQ0FBRCxDQUF2QiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IHNlc3Npb24sIHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYVwiO1xuaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gXCJmYXVuYWRiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvdmlkZXJzLkdpdEh1Yih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICBzY29wZTogXCJyZWFkOnVzZXJcIixcbiAgICB9KSxcbiAgXSxcblxuICAvKiAgand0OiB7XG4gICAgc2lnbmluZ0tleTogcHJvY2Vzcy5lbnYuU0lHTklOR19LRVksXG4gIH0sICovXG5cbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2Vzc2lvbihzZXNzaW9uKSB7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IHVzZXJBdGl2ZVN1YnNjcmlwdGlvbiA9IGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICAgIHEuR2V0KFxuICAgICAgICAgICAgcS5JbnRlcnNlY3Rpb24oW1xuICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgIHEuSW5kZXgoXCJzdWJzY3JpcHRpb25fYnlfdXNlcl9yZWZcIiksXG4gICAgICAgICAgICAgICAgcS5TZWxlY3QoXG4gICAgICAgICAgICAgICAgICBcInJlZlwiLFxuICAgICAgICAgICAgICAgICAgcS5HZXQoXG4gICAgICAgICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgcS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgcS5DYXNlZm9sZChzZXNzaW9uLnVzZXIuZW1haWwpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHEuTWF0Y2gocS5JbmRleChcInN1YnNjcmlwdGlvbl9ieV9zdGF0dXNcIiksIFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnNlc3Npb24sIFxuICAgICAgICAgIGFjdGl2ZVN1YnNjcmlwdGlvbjogdXNlckF0aXZlU3Vic2NyaXB0aW9uXG4gICAgICAgIH07XG4gICAgICB9IGNhdGNoe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnNlc3Npb24sXG4gICAgICAgICAgYWN0aXZlU3Vic2NyaXB0aW9uOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHNpZ25Jbih1c2VyLCBhY2NvdW50LCBwcm9maWxlKSB7XG4gICAgICBjb25zdCB7IGVtYWlsIH0gPSB1c2VyO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICBxLklmKFxuICAgICAgICAgICAgcS5Ob3QoXG4gICAgICAgICAgICAgIHEuRXhpc3RzKFxuICAgICAgICAgICAgICAgIHEuTWF0Y2gocS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksIHEuQ2FzZWZvbGQodXNlci5lbWFpbCkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBxLkNyZWF0ZShxLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiKSwgeyBkYXRhOiB7IGVtYWlsIH0gfSksXG4gICAgICAgICAgICBxLkdldChxLk1hdGNoKHEuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLCBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

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