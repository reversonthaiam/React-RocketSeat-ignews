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
exports.id = "pages/api/webhooks";
exports.ids = ["pages/api/webhooks"];
exports.modules = {

/***/ "./src/pages/api/_lib/manageSubscription.ts":
/*!**************************************************!*\
  !*** ./src/pages/api/_lib/manageSubscription.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveSubscription\": function() { return /* binding */ saveSubscription; }\n/* harmony export */ });\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/stripe */ \"./src/services/stripe.ts\");\n\n\n\nasync function saveSubscription(subscriptionId, customerId, createdAction = false) {\n  // buscar o usuario no banco do fauna com o id customer id\n  // salvar os dados da subscription no faunadb\n  const userRef = await _services_fauna__WEBPACK_IMPORTED_MODULE_0__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Index(\"user_by_stripe_customer_id\"), customerId))));\n  const subscription = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.subscriptions.retrieve(subscriptionId);\n  const subscriptionData = {\n    id: subscription.id,\n    userId: userRef,\n    status: subscription.status,\n    price_id: subscription.items.data[0].price.id\n  };\n\n  if (createdAction) {\n    await _services_fauna__WEBPACK_IMPORTED_MODULE_0__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Collection(\"subscriptions\"), {\n      data: subscriptionData\n    }));\n  } else {\n    await _services_fauna__WEBPACK_IMPORTED_MODULE_0__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Replace(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Select(\"Ref\", faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Index(\"subscription_by_id\"), subscriptionId))), {\n      data: subscriptionData\n    }));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL19saWIvbWFuYWdlU3Vic2NyaXB0aW9uLnRzP2YzMDgiXSwibmFtZXMiOlsic2F2ZVN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbklkIiwiY3VzdG9tZXJJZCIsImNyZWF0ZWRBY3Rpb24iLCJ1c2VyUmVmIiwiZmF1bmEiLCJxIiwic3Vic2NyaXB0aW9uIiwic3RyaXBlIiwic3Vic2NyaXB0aW9uRGF0YSIsImlkIiwidXNlcklkIiwic3RhdHVzIiwicHJpY2VfaWQiLCJpdGVtcyIsImRhdGEiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxlQUFlQSxnQkFBZixDQUNMQyxjQURLLEVBRUxDLFVBRkssRUFHTEMsYUFBYSxHQUFHLEtBSFgsRUFJTDtBQUNBO0FBQ0E7QUFFQSxRQUFNQyxPQUFPLEdBQUcsTUFBTUMsd0RBQUEsQ0FDcEJDLGlEQUFBLENBQ0UsS0FERixFQUVFQSw4Q0FBQSxDQUFNQSxnREFBQSxDQUFRQSxnREFBQSxDQUFRLDRCQUFSLENBQVIsRUFBK0NKLFVBQS9DLENBQU4sQ0FGRixDQURvQixDQUF0QjtBQU9BLFFBQU1LLFlBQVksR0FBRyxNQUFNQywyRUFBQSxDQUE4QlAsY0FBOUIsQ0FBM0I7QUFFQSxRQUFNUSxnQkFBZ0IsR0FBRztBQUN2QkMsTUFBRSxFQUFFSCxZQUFZLENBQUNHLEVBRE07QUFFdkJDLFVBQU0sRUFBRVAsT0FGZTtBQUd2QlEsVUFBTSxFQUFFTCxZQUFZLENBQUNLLE1BSEU7QUFJdkJDLFlBQVEsRUFBRU4sWUFBWSxDQUFDTyxLQUFiLENBQW1CQyxJQUFuQixDQUF3QixDQUF4QixFQUEyQkMsS0FBM0IsQ0FBaUNOO0FBSnBCLEdBQXpCOztBQU9BLE1BQUlQLGFBQUosRUFBbUI7QUFDakIsVUFBTUUsd0RBQUEsQ0FDSkMsaURBQUEsQ0FBU0EscURBQUEsQ0FBYSxlQUFiLENBQVQsRUFBd0M7QUFBRVMsVUFBSSxFQUFFTjtBQUFSLEtBQXhDLENBREksQ0FBTjtBQUdELEdBSkQsTUFJTztBQUNMLFVBQU1KLHdEQUFBLENBQ0pDLGtEQUFBLENBQ0VBLGlEQUFBLENBQ0UsS0FERixFQUVFQSw4Q0FBQSxDQUFNQSxnREFBQSxDQUFRQSxnREFBQSxDQUFRLG9CQUFSLENBQVIsRUFBdUNMLGNBQXZDLENBQU4sQ0FGRixDQURGLEVBTUU7QUFBRWMsVUFBSSxFQUFFTjtBQUFSLEtBTkYsQ0FESSxDQUFOO0FBVUQ7QUFDRiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvX2xpYi9tYW5hZ2VTdWJzY3JpcHRpb24udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYVwiO1xuaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gXCJmYXVuYWRiXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvc3RyaXBlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlU3Vic2NyaXB0aW9uKFxuICBzdWJzY3JpcHRpb25JZDogc3RyaW5nLFxuICBjdXN0b21lcklkOiBzdHJpbmcsXG4gIGNyZWF0ZWRBY3Rpb24gPSBmYWxzZVxuKSB7XG4gIC8vIGJ1c2NhciBvIHVzdWFyaW8gbm8gYmFuY28gZG8gZmF1bmEgY29tIG8gaWQgY3VzdG9tZXIgaWRcbiAgLy8gc2FsdmFyIG9zIGRhZG9zIGRhIHN1YnNjcmlwdGlvbiBubyBmYXVuYWRiXG5cbiAgY29uc3QgdXNlclJlZiA9IGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgIHEuU2VsZWN0KFxuICAgICAgXCJyZWZcIixcbiAgICAgIHEuR2V0KHEuTWF0Y2gocS5JbmRleChcInVzZXJfYnlfc3RyaXBlX2N1c3RvbWVyX2lkXCIpLCBjdXN0b21lcklkKSlcbiAgICApXG4gICk7XG5cbiAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYXdhaXQgc3RyaXBlLnN1YnNjcmlwdGlvbnMucmV0cmlldmUoc3Vic2NyaXB0aW9uSWQpO1xuXG4gIGNvbnN0IHN1YnNjcmlwdGlvbkRhdGEgPSB7XG4gICAgaWQ6IHN1YnNjcmlwdGlvbi5pZCxcbiAgICB1c2VySWQ6IHVzZXJSZWYsXG4gICAgc3RhdHVzOiBzdWJzY3JpcHRpb24uc3RhdHVzLFxuICAgIHByaWNlX2lkOiBzdWJzY3JpcHRpb24uaXRlbXMuZGF0YVswXS5wcmljZS5pZCxcbiAgfTtcblxuICBpZiAoY3JlYXRlZEFjdGlvbikge1xuICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgcS5DcmVhdGUocS5Db2xsZWN0aW9uKFwic3Vic2NyaXB0aW9uc1wiKSwgeyBkYXRhOiBzdWJzY3JpcHRpb25EYXRhIH0pXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgcS5SZXBsYWNlKFxuICAgICAgICBxLlNlbGVjdChcbiAgICAgICAgICBcIlJlZlwiLFxuICAgICAgICAgIHEuR2V0KHEuTWF0Y2gocS5JbmRleChcInN1YnNjcmlwdGlvbl9ieV9pZFwiKSwgc3Vic2NyaXB0aW9uSWQsKSlcbiAgICAgICAgKSxcblxuICAgICAgICB7IGRhdGE6IHN1YnNjcmlwdGlvbkRhdGEgfVxuICAgICAgKVxuICAgIClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/_lib/manageSubscription.ts\n");

/***/ }),

/***/ "./src/pages/api/webhooks.ts":
/*!***********************************!*\
  !*** ./src/pages/api/webhooks.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/manageSubscription */ \"./src/pages/api/_lib/manageSubscription.ts\");\n\n\n\nasync function buffer(Readable) {\n  const chunks = [];\n\n  for await (const chunk of Readable) {\n    chunks.push(typeof chunk === \"string\" ? Buffer.from(chunk) : chunk);\n  }\n\n  return Buffer.concat(chunks);\n}\n\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\nconst relevantEvents = new Set([\"checkout.session.completed\", \"customer.subscription.created\", \"customer.subscription.updated\", \"customer.subscription.deleted\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === \"POST\") {\n    const buf = await buffer(req);\n    const secret = req.headers[\"stripe-signature\"];\n    let event;\n\n    try {\n      event = _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);\n    } catch (err) {\n      return res.status(400).send(`webhook error: ${err.message}`);\n    }\n\n    const {\n      type\n    } = event;\n\n    if (relevantEvents.has(type)) {\n      try {\n        switch (type) {\n          case \"customer.subscription.created\":\n          case \"customer.subscription.updated\":\n          case \"customer.subscription.deleted\":\n            const subscription = event.data.object;\n            await (0,_lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__.saveSubscription)(subscription.id, subscription.customer.toString(), type === 'customer.subscription.created');\n            break;\n\n          case \"checkout.session.completed\":\n            const checkoutSession = event.data.object;\n            await (0,_lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__.saveSubscription)(checkoutSession.subscription.toString(), checkoutSession.customer.toString(), true);\n            break;\n\n          default:\n            throw new Error(\"Unhandled event.\");\n        }\n      } catch {\n        return res.json({\n          error: \"Webhook handler failed.\"\n        });\n      }\n    }\n\n    res.json({\n      received: true\n    });\n  } else {\n    res.setHeader(\"Allow\", \"POST\");\n    res.status(405).end(\"Method not allowed\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2tzLnRzPzUyOWYiXSwibmFtZXMiOlsiYnVmZmVyIiwiUmVhZGFibGUiLCJjaHVua3MiLCJjaHVuayIsInB1c2giLCJCdWZmZXIiLCJmcm9tIiwiY29uY2F0IiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlbGV2YW50RXZlbnRzIiwiU2V0IiwicmVxIiwicmVzIiwibWV0aG9kIiwiYnVmIiwic2VjcmV0IiwiaGVhZGVycyIsImV2ZW50Iiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9XRUJIT09LX1NFQ1JFVCIsImVyciIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwidHlwZSIsImhhcyIsInN1YnNjcmlwdGlvbiIsImRhdGEiLCJvYmplY3QiLCJzYXZlU3Vic2NyaXB0aW9uIiwiaWQiLCJjdXN0b21lciIsInRvU3RyaW5nIiwiY2hlY2tvdXRTZXNzaW9uIiwiRXJyb3IiLCJqc29uIiwiZXJyb3IiLCJyZWNlaXZlZCIsInNldEhlYWRlciIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7QUFDQTs7QUFFQSxlQUFlQSxNQUFmLENBQXNCQyxRQUF0QixFQUEwQztBQUN4QyxRQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFFQSxhQUFXLE1BQU1DLEtBQWpCLElBQTBCRixRQUExQixFQUFvQztBQUNsQ0MsVUFBTSxDQUFDRSxJQUFQLENBQVksT0FBT0QsS0FBUCxLQUFpQixRQUFqQixHQUE0QkUsTUFBTSxDQUFDQyxJQUFQLENBQVlILEtBQVosQ0FBNUIsR0FBaURBLEtBQTdEO0FBQ0Q7O0FBRUQsU0FBT0UsTUFBTSxDQUFDRSxNQUFQLENBQWNMLE1BQWQsQ0FBUDtBQUNEOztBQUVNLE1BQU1NLE1BQU0sR0FBRztBQUNwQkMsS0FBRyxFQUFFO0FBQ0hDLGNBQVUsRUFBRTtBQURUO0FBRGUsQ0FBZjtBQU1QLE1BQU1DLGNBQWMsR0FBRyxJQUFJQyxHQUFKLENBQVEsQ0FDN0IsNEJBRDZCLEVBRTdCLCtCQUY2QixFQUc3QiwrQkFINkIsRUFJN0IsK0JBSjZCLENBQVIsQ0FBdkI7QUFPQSwrREFBZSxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNsRSxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNQyxHQUFHLEdBQUcsTUFBTWhCLE1BQU0sQ0FBQ2EsR0FBRCxDQUF4QjtBQUNBLFVBQU1JLE1BQU0sR0FBR0osR0FBRyxDQUFDSyxPQUFKLENBQVksa0JBQVosQ0FBZjtBQUVBLFFBQUlDLEtBQUo7O0FBRUEsUUFBSTtBQUNGQSxXQUFLLEdBQUdDLDRFQUFBLENBQ05KLEdBRE0sRUFFTkMsTUFGTSxFQUdOSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMscUJBSE4sQ0FBUjtBQUtELEtBTkQsQ0FNRSxPQUFPQyxHQUFQLEVBQVk7QUFDWixhQUFPVixHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFzQixrQkFBaUJGLEdBQUcsQ0FBQ0csT0FBUSxFQUFuRCxDQUFQO0FBQ0Q7O0FBRUQsVUFBTTtBQUFFQztBQUFGLFFBQVdULEtBQWpCOztBQUVBLFFBQUlSLGNBQWMsQ0FBQ2tCLEdBQWYsQ0FBbUJELElBQW5CLENBQUosRUFBOEI7QUFDNUIsVUFBSTtBQUNGLGdCQUFRQSxJQUFSO0FBQ0UsZUFBSywrQkFBTDtBQUNBLGVBQUssK0JBQUw7QUFDQSxlQUFLLCtCQUFMO0FBQ0Usa0JBQU1FLFlBQVksR0FBR1gsS0FBSyxDQUFDWSxJQUFOLENBQVdDLE1BQWhDO0FBQ0Esa0JBQU1DLHlFQUFnQixDQUNwQkgsWUFBWSxDQUFDSSxFQURPLEVBRXBCSixZQUFZLENBQUNLLFFBQWIsQ0FBc0JDLFFBQXRCLEVBRm9CLEVBR3BCUixJQUFJLEtBQUssK0JBSFcsQ0FBdEI7QUFNQTs7QUFFRixlQUFLLDRCQUFMO0FBQ0Usa0JBQU1TLGVBQWUsR0FBR2xCLEtBQUssQ0FBQ1ksSUFBTixDQUNyQkMsTUFESDtBQUdBLGtCQUFNQyx5RUFBZ0IsQ0FDcEJJLGVBQWUsQ0FBQ1AsWUFBaEIsQ0FBNkJNLFFBQTdCLEVBRG9CLEVBRXBCQyxlQUFlLENBQUNGLFFBQWhCLENBQXlCQyxRQUF6QixFQUZvQixFQUdwQixJQUhvQixDQUF0QjtBQUtBOztBQUVGO0FBQ0Usa0JBQU0sSUFBSUUsS0FBSixDQUFVLGtCQUFWLENBQU47QUF6Qko7QUEyQkQsT0E1QkQsQ0E0QkUsTUFBTTtBQUNOLGVBQU94QixHQUFHLENBQUN5QixJQUFKLENBQVM7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FBVCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRDFCLE9BQUcsQ0FBQ3lCLElBQUosQ0FBUztBQUFFRSxjQUFRLEVBQUU7QUFBWixLQUFUO0FBQ0QsR0FyREQsTUFxRE87QUFDTDNCLE9BQUcsQ0FBQzRCLFNBQUosQ0FBYyxPQUFkLEVBQXVCLE1BQXZCO0FBQ0E1QixPQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCa0IsR0FBaEIsQ0FBb0Isb0JBQXBCO0FBQ0Q7QUFDRixDQTFERCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvd2ViaG9va3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSBcInN0cmVhbVwiO1xuaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyaXBlXCI7XG5pbXBvcnQgeyBzYXZlU3Vic2NyaXB0aW9uIH0gZnJvbSBcIi4vX2xpYi9tYW5hZ2VTdWJzY3JpcHRpb25cIjtcblxuYXN5bmMgZnVuY3Rpb24gYnVmZmVyKFJlYWRhYmxlOiBSZWFkYWJsZSkge1xuICBjb25zdCBjaHVua3MgPSBbXTtcblxuICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIFJlYWRhYmxlKSB7XG4gICAgY2h1bmtzLnB1c2godHlwZW9mIGNodW5rID09PSBcInN0cmluZ1wiID8gQnVmZmVyLmZyb20oY2h1bmspIDogY2h1bmspO1xuICB9XG5cbiAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoY2h1bmtzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59O1xuXG5jb25zdCByZWxldmFudEV2ZW50cyA9IG5ldyBTZXQoW1xuICBcImNoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkXCIsXG4gIFwiY3VzdG9tZXIuc3Vic2NyaXB0aW9uLmNyZWF0ZWRcIixcbiAgXCJjdXN0b21lci5zdWJzY3JpcHRpb24udXBkYXRlZFwiLFxuICBcImN1c3RvbWVyLnN1YnNjcmlwdGlvbi5kZWxldGVkXCIsXG5dKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IGJ1ZiA9IGF3YWl0IGJ1ZmZlcihyZXEpO1xuICAgIGNvbnN0IHNlY3JldCA9IHJlcS5oZWFkZXJzW1wic3RyaXBlLXNpZ25hdHVyZVwiXTtcblxuICAgIGxldCBldmVudDogU3RyaXBlLkV2ZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGV2ZW50ID0gc3RyaXBlLndlYmhvb2tzLmNvbnN0cnVjdEV2ZW50KFxuICAgICAgICBidWYsXG4gICAgICAgIHNlY3JldCxcbiAgICAgICAgcHJvY2Vzcy5lbnYuU1RSSVBFX1dFQkhPT0tfU0VDUkVUXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGB3ZWJob29rIGVycm9yOiAke2Vyci5tZXNzYWdlfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHsgdHlwZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAocmVsZXZhbnRFdmVudHMuaGFzKHR5cGUpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwiY3VzdG9tZXIuc3Vic2NyaXB0aW9uLmNyZWF0ZWRcIjpcbiAgICAgICAgICBjYXNlIFwiY3VzdG9tZXIuc3Vic2NyaXB0aW9uLnVwZGF0ZWRcIjpcbiAgICAgICAgICBjYXNlIFwiY3VzdG9tZXIuc3Vic2NyaXB0aW9uLmRlbGV0ZWRcIjpcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGV2ZW50LmRhdGEub2JqZWN0IGFzIFN0cmlwZS5TdWJzY3JpcHRpb247XG4gICAgICAgICAgICBhd2FpdCBzYXZlU3Vic2NyaXB0aW9uKFxuICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uaWQsXG4gICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5jdXN0b21lci50b1N0cmluZygpLFxuICAgICAgICAgICAgICB0eXBlID09PSAnY3VzdG9tZXIuc3Vic2NyaXB0aW9uLmNyZWF0ZWQnXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZFwiOlxuICAgICAgICAgICAgY29uc3QgY2hlY2tvdXRTZXNzaW9uID0gZXZlbnQuZGF0YVxuICAgICAgICAgICAgICAub2JqZWN0IGFzIFN0cmlwZS5DaGVja291dC5TZXNzaW9uO1xuXG4gICAgICAgICAgICBhd2FpdCBzYXZlU3Vic2NyaXB0aW9uKFxuICAgICAgICAgICAgICBjaGVja291dFNlc3Npb24uc3Vic2NyaXB0aW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIGNoZWNrb3V0U2Vzc2lvbi5jdXN0b21lci50b1N0cmluZygpLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5oYW5kbGVkIGV2ZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiByZXMuanNvbih7IGVycm9yOiBcIldlYmhvb2sgaGFuZGxlciBmYWlsZWQuXCIgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzLmpzb24oeyByZWNlaXZlZDogdHJ1ZSB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgXCJQT1NUXCIpO1xuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoXCJNZXRob2Qgbm90IGFsbG93ZWRcIik7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/webhooks.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/webhooks.ts"));
module.exports = __webpack_exports__;

})();