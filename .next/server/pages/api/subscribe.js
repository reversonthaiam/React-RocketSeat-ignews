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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fauna */ \"./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === \"POST\") {\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n      req\n    });\n    const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(session.user.email))));\n    let customerId = user.data.stripe_customer_id;\n\n    if (!customerId) {\n      const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.customers.create({\n        email: session.user.email //metadata\n\n      });\n      await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Collection(\"users\"), user.ref.id), {\n        data: {\n          stripe_customer_id: stripeCustomer.id\n        }\n      }));\n      customerId = stripeCustomer.id;\n    }\n\n    const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.checkout.sessions.create({\n      customer: customerId,\n      payment_method_types: [\"card\"],\n      billing_address_collection: \"required\",\n      line_items: [{\n        price: \"price_1IxzP6HEFLOC4o2Iu9USYSBj\",\n        quantity: 1\n      }],\n      mode: \"subscription\",\n      allow_promotion_codes: true,\n      success_url: process.env.STRIPE_SUCCESS_URL,\n      cancel_url: process.env.STRIPE_CANCEL_URL\n    });\n    return res.status(200).json({\n      sessionId: stripeCheckoutSession.id\n    });\n  } else {\n    res.setHeader(\"Allow\", \"POST\");\n    res.status(405).end(\"Method not allowed\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cz81NWE1Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwidXNlciIsImZhdW5hIiwicSIsImVtYWlsIiwiY3VzdG9tZXJJZCIsImRhdGEiLCJzdHJpcGVfY3VzdG9tZXJfaWQiLCJzdHJpcGVDdXN0b21lciIsInN0cmlwZSIsInJlZiIsImlkIiwic3RyaXBlQ2hlY2tvdXRTZXNzaW9uIiwiY3VzdG9tZXIiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwibGluZV9pdGVtcyIsInByaWNlIiwicXVhbnRpdHkiLCJtb2RlIiwiYWxsb3dfcHJvbW90aW9uX2NvZGVzIiwic3VjY2Vzc191cmwiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NVQ0NFU1NfVVJMIiwiY2FuY2VsX3VybCIsIlNUUklQRV9DQU5DRUxfVVJMIiwic3RhdHVzIiwianNvbiIsInNlc3Npb25JZCIsInNldEhlYWRlciIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYUEsK0RBQWUsT0FBT0EsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFHbEUsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLDREQUFVLENBQUM7QUFBRUo7QUFBRixLQUFELENBQWhDO0FBRUEsVUFBTUssSUFBSSxHQUFHLE1BQU1DLHdEQUFBLENBQ2pCQyw4Q0FBQSxDQUFNQSxnREFBQSxDQUFRQSxnREFBQSxDQUFRLGVBQVIsQ0FBUixFQUFrQ0EsbURBQUEsQ0FBV0osT0FBTyxDQUFDRSxJQUFSLENBQWFHLEtBQXhCLENBQWxDLENBQU4sQ0FEaUIsQ0FBbkI7QUFJQSxRQUFJQyxVQUFVLEdBQUdKLElBQUksQ0FBQ0ssSUFBTCxDQUFVQyxrQkFBM0I7O0FBRUEsUUFBSSxDQUFDRixVQUFMLEVBQWlCO0FBQ2YsWUFBTUcsY0FBYyxHQUFHLE1BQU1DLHFFQUFBLENBQXdCO0FBQ25ETCxhQUFLLEVBQUVMLE9BQU8sQ0FBQ0UsSUFBUixDQUFhRyxLQUQrQixDQUVuRDs7QUFGbUQsT0FBeEIsQ0FBN0I7QUFLQSxZQUFNRix3REFBQSxDQUNKQyxpREFBQSxDQUFTQSw4Q0FBQSxDQUFNQSxxREFBQSxDQUFhLE9BQWIsQ0FBTixFQUE2QkYsSUFBSSxDQUFDUyxHQUFMLENBQVNDLEVBQXRDLENBQVQsRUFBb0Q7QUFDbERMLFlBQUksRUFBRTtBQUNKQyw0QkFBa0IsRUFBRUMsY0FBYyxDQUFDRztBQUQvQjtBQUQ0QyxPQUFwRCxDQURJLENBQU47QUFRQU4sZ0JBQVUsR0FBR0csY0FBYyxDQUFDRyxFQUE1QjtBQUNEOztBQUVELFVBQU1DLHFCQUFxQixHQUFHLE1BQU1ILDZFQUFBLENBQWdDO0FBQ2xFSSxjQUFRLEVBQUVSLFVBRHdEO0FBRWxFUywwQkFBb0IsRUFBRSxDQUFDLE1BQUQsQ0FGNEM7QUFHbEVDLGdDQUEwQixFQUFFLFVBSHNDO0FBSWxFQyxnQkFBVSxFQUFFLENBQUM7QUFBRUMsYUFBSyxFQUFFLGdDQUFUO0FBQTJDQyxnQkFBUSxFQUFFO0FBQXJELE9BQUQsQ0FKc0Q7QUFLbEVDLFVBQUksRUFBRSxjQUw0RDtBQU1sRUMsMkJBQXFCLEVBQUUsSUFOMkM7QUFPbEVDLGlCQUFXLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQkFQeUM7QUFRbEVDLGdCQUFVLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQVIwQyxLQUFoQyxDQUFwQztBQVdBLFdBQU83QixHQUFHLENBQUM4QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBUyxFQUFFakIscUJBQXFCLENBQUNEO0FBQW5DLEtBQXJCLENBQVA7QUFDRCxHQXRDRCxNQXNDTztBQUNMZCxPQUFHLENBQUNpQyxTQUFKLENBQWMsT0FBZCxFQUF1QixNQUF2QjtBQUNBakMsT0FBRyxDQUFDOEIsTUFBSixDQUFXLEdBQVgsRUFBZ0JJLEdBQWhCLENBQW9CLG9CQUFwQjtBQUNEO0FBQ0YsQ0E3Q0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyaXBlXCI7XG5pbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSBcImZhdW5hZGJcIjtcbmltcG9ydCB7IGZhdW5hIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZhdW5hXCI7XG5cbnR5cGUgVXNlciA9IHtcbiAgcmVmOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgfTtcbiAgZGF0YToge1xuICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaW5nO1xuICB9O1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBcbiAgXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGZhdW5hLnF1ZXJ5PFVzZXI+KFxuICAgICAgcS5HZXQocS5NYXRjaChxLkluZGV4KFwidXNlcl9ieV9lbWFpbFwiKSwgcS5DYXNlZm9sZChzZXNzaW9uLnVzZXIuZW1haWwpKSlcbiAgICApO1xuXG4gICAgbGV0IGN1c3RvbWVySWQgPSB1c2VyLmRhdGEuc3RyaXBlX2N1c3RvbWVyX2lkO1xuXG4gICAgaWYgKCFjdXN0b21lcklkKSB7XG4gICAgICBjb25zdCBzdHJpcGVDdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKHtcbiAgICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCxcbiAgICAgICAgLy9tZXRhZGF0YVxuICAgICAgfSk7XG5cbiAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICBxLlVwZGF0ZShxLlJlZihxLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiKSwgdXNlci5yZWYuaWQpLCB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgc3RyaXBlX2N1c3RvbWVyX2lkOiBzdHJpcGVDdXN0b21lci5pZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgY3VzdG9tZXJJZCA9IHN0cmlwZUN1c3RvbWVyLmlkO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmlwZUNoZWNrb3V0U2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgICAgY3VzdG9tZXI6IGN1c3RvbWVySWQsXG4gICAgICBwYXltZW50X21ldGhvZF90eXBlczogW1wiY2FyZFwiXSxcbiAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiBcInJlcXVpcmVkXCIsXG4gICAgICBsaW5lX2l0ZW1zOiBbeyBwcmljZTogXCJwcmljZV8xSXh6UDZIRUZMT0M0bzJJdTlVU1lTQmpcIiwgcXVhbnRpdHk6IDEgfV0sXG4gICAgICBtb2RlOiBcInN1YnNjcmlwdGlvblwiLFxuICAgICAgYWxsb3dfcHJvbW90aW9uX2NvZGVzOiB0cnVlLFxuICAgICAgc3VjY2Vzc191cmw6IHByb2Nlc3MuZW52LlNUUklQRV9TVUNDRVNTX1VSTCxcbiAgICAgIGNhbmNlbF91cmw6IHByb2Nlc3MuZW52LlNUUklQRV9DQU5DRUxfVVJMLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2Vzc2lvbklkOiBzdHJpcGVDaGVja291dFNlc3Npb24uaWQgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFwiUE9TVFwiKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIpO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": function() { return /* binding */ fauna; }\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/OGY0ZCJdLCJuYW1lcyI6WyJmYXVuYSIsIkNsaWVudCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsMkNBQUosQ0FBVztBQUM5QkMsUUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEVSxDQUFYLENBQWQiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJ1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX0tFWVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": function() { return /* binding */ stripe; }\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n  apiVersion: '2020-08-27',\n  appInfo: {\n    name: 'Ignews',\n    version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2Q5NjgiXSwibmFtZXMiOlsic3RyaXBlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsK0NBQUosQ0FDcEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQURRLEVBRXBCO0FBQ0VDLFlBQVUsRUFBRSxZQURkO0FBRUVDLFNBQU8sRUFBRTtBQUNQQyxRQUFJLEVBQUUsUUFEQztBQUVQQyxXQUFPQTtBQUZBO0FBRlgsQ0FGb0IsQ0FBZiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSdcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5cbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKFxuICBwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSxcbiAge1xuICAgIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3JyxcbiAgICBhcHBJbmZvOiB7XG4gICAgICBuYW1lOiAnSWduZXdzJyxcbiAgICAgIHZlcnNpb25cblxuICAgIH0sXG4gIH1cbikiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start"},"dependencies":{"@stripe/stripe-js":"^1.15.0","axios":"^0.21.1","faunadb":"^4.3.0","next":"10.2.3","next-auth":"^3.25.0","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.2.0","sass":"^1.34.0","stripe":"^8.150.0"},"devDependencies":{"@types/next-auth":"^3.15.0","@types/node":"^15.6.2","@types/react":"^17.0.9","typescript":"^4.3.2"}}');

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("faunadb");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();