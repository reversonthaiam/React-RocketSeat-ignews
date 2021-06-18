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
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/develop/\\xC1rea de Trabalho/Reverson/react/React-RocketSeat-ignews/src/pages/posts/[slug].tsx\";\n\n\n\n\n\nfunction Post({\n  post\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [post.title, \" | Ignews\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().post),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n          children: post.updatedAt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().postContent),\n          dangerouslySetInnerHTML: {\n            __html: post.content\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getServerSideProps = async ({\n  req,\n  params\n}) => {\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n    req\n  });\n  const {\n    slug\n  } = params;\n  const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_4__.getPrismicClient)(req);\n  const response = await prismic.getByUID(\"publication\", String(slug), {});\n  const post = {\n    slug,\n    title: prismic_dom__WEBPACK_IMPORTED_MODULE_3__.RichText.asText(response.data.title),\n    content: prismic_dom__WEBPACK_IMPORTED_MODULE_3__.RichText.asHtml(response.data.content),\n    updatedAt: new Date(response.last_publication_date).toLocaleDateString(\"pt-BR\", {\n      day: \"2-digit\",\n      month: \"long\",\n      year: \"numeric\"\n    })\n  };\n  return {\n    props: {\n      post\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeD9kMDUzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJzdHlsZXMiLCJ1cGRhdGVkQXQiLCJfX2h0bWwiLCJjb250ZW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicGFyYW1zIiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJzbHVnIiwicHJpc21pYyIsImdldFByaXNtaWNDbGllbnQiLCJyZXNwb25zZSIsImdldEJ5VUlEIiwiU3RyaW5nIiwiUmljaFRleHQiLCJkYXRhIiwiRGF0ZSIsImxhc3RfcHVibGljYXRpb25fZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBbUM7QUFDaEQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywrQ0FBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQVFBLElBQUksQ0FBQ0MsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFNLGVBQVMsRUFBRUMsb0VBQWpCO0FBQUEsNkJBQ0U7QUFBUyxpQkFBUyxFQUFFQSwrREFBcEI7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLRixJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsb0JBQU9ELElBQUksQ0FBQ0c7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBSyxtQkFBUyxFQUFFRCxzRUFBaEI7QUFBb0MsaUNBQXVCLEVBQUk7QUFBQ0Usa0JBQU0sRUFBRUosSUFBSSxDQUFDSztBQUFkO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUFrQkQ7QUFFTSxNQUFNQyxrQkFBc0MsR0FBRyxPQUFPO0FBQzNEQyxLQUQyRDtBQUUzREM7QUFGMkQsQ0FBUCxLQUdoRDtBQUNKLFFBQU1DLE9BQU8sR0FBRyxNQUFNQyw0REFBVSxDQUFDO0FBQUVIO0FBQUYsR0FBRCxDQUFoQztBQUNBLFFBQU07QUFBRUk7QUFBRixNQUFXSCxNQUFqQjtBQUVBLFFBQU1JLE9BQU8sR0FBR0MsbUVBQWdCLENBQUNOLEdBQUQsQ0FBaEM7QUFFQSxRQUFNTyxRQUFRLEdBQUcsTUFBTUYsT0FBTyxDQUFDRyxRQUFSLENBQWlCLGFBQWpCLEVBQWdDQyxNQUFNLENBQUNMLElBQUQsQ0FBdEMsRUFBOEMsRUFBOUMsQ0FBdkI7QUFDQSxRQUFNWCxJQUFJLEdBQUc7QUFDWFcsUUFEVztBQUVYVixTQUFLLEVBQUVnQix3REFBQSxDQUFnQkgsUUFBUSxDQUFDSSxJQUFULENBQWNqQixLQUE5QixDQUZJO0FBR1hJLFdBQU8sRUFBRVksd0RBQUEsQ0FBZ0JILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjYixPQUE5QixDQUhFO0FBSVhGLGFBQVMsRUFBRSxJQUFJZ0IsSUFBSixDQUFTTCxRQUFRLENBQUNNLHFCQUFsQixFQUF5Q0Msa0JBQXpDLENBQ1QsT0FEUyxFQUVUO0FBQ0VDLFNBQUcsRUFBRSxTQURQO0FBRUVDLFdBQUssRUFBRSxNQUZUO0FBR0VDLFVBQUksRUFBRTtBQUhSLEtBRlM7QUFKQSxHQUFiO0FBY0EsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTHpCO0FBREs7QUFERixHQUFQO0FBS0QsQ0E3Qk0iLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IEhlYWQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1kb21cIjtcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJpc21pY1wiO1xuaW1wb3J0IHN0eWxlcyAgZnJvbSAnLi9wb3N0Lm1vZHVsZS5zY3NzJ1xuXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgcG9zdDoge1xuICAgIHNsdWc6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3QgfTogUG9zdFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGV9IHwgSWduZXdzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XG4gICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHRpbWU+e3Bvc3QudXBkYXRlZEF0fTwvdGltZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RDb250ZW50fSBkYW5nZXJvdXNseVNldElubmVySFRNTCA9IHt7X19odG1sOiBwb3N0LmNvbnRlbnR9fT5cblxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoe1xuICByZXEsXG4gIHBhcmFtcyxcbn0pID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zO1xuXG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KHJlcSk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLmdldEJ5VUlEKFwicHVibGljYXRpb25cIiwgU3RyaW5nKHNsdWcpLCB7fSk7XG4gIGNvbnN0IHBvc3QgPSB7XG4gICAgc2x1ZyxcbiAgICB0aXRsZTogUmljaFRleHQuYXNUZXh0KHJlc3BvbnNlLmRhdGEudGl0bGUpLFxuICAgIGNvbnRlbnQ6IFJpY2hUZXh0LmFzSHRtbChyZXNwb25zZS5kYXRhLmNvbnRlbnQpLFxuICAgIHVwZGF0ZWRBdDogbmV3IERhdGUocmVzcG9uc2UubGFzdF9wdWJsaWNhdGlvbl9kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXG4gICAgICBcInB0LUJSXCIsXG4gICAgICB7XG4gICAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICB9XG4gICAgKSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": function() { return /* binding */ getPrismicClient; }\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {\n    req,\n    accessToken: process.env.PRISMIC_ACCESS_TOKEN\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvcHJpc21pYy50cz84YzUwIl0sIm5hbWVzIjpbImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiUHJpc21pYyIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0VORFBPSU5UIiwiYWNjZXNzVG9rZW4iLCJQUklTTUlDX0FDQ0VTU19UT0tFTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxnQkFBVCxDQUEwQkMsR0FBMUIsRUFBd0M7QUFDN0MsUUFBTUMsT0FBTyxHQUFHQywrREFBQSxDQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBREUsRUFFZDtBQUNFTCxPQURGO0FBRUVNLGVBQVcsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRjNCLEdBRmMsQ0FBaEI7QUFRQSxTQUFPTixPQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJpc21pYy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpc21pY0NsaWVudChyZXE/OiB1bmtub3duKXtcbiAgY29uc3QgcHJpc21pYyA9IFByaXNtaWMuY2xpZW50KFxuICAgIHByb2Nlc3MuZW52LlBSSVNNSUNfRU5EUE9JTlQsXG4gICAge1xuICAgICAgcmVxLFxuICAgICAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LlBSSVNNSUNfQUNDRVNTX1RPS0VOXG4gICAgfVxuICApXG5cbiAgcmV0dXJuIHByaXNtaWNcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__2m5md\",\n\t\"post\": \"post_post__3quL2\",\n\t\"postContent\": \"post_postContent__B7qN9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcz9mODg3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb3N0cy9wb3N0Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwicG9zdF9jb250YWluZXJfXzJtNW1kXCIsXG5cdFwicG9zdFwiOiBcInBvc3RfcG9zdF9fM3F1TDJcIixcblx0XCJwb3N0Q29udGVudFwiOiBcInBvc3RfcG9zdENvbnRlbnRfX0I3cU45XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/post.module.scss\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prismicio/client");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("prismic-dom");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_document_js"], function() { return __webpack_exec__("./src/pages/posts/[slug].tsx"); });
module.exports = __webpack_exports__;

})();