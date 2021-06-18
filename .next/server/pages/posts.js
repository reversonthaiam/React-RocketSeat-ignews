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
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./src/pages/posts/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/posts/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Posts; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.module.scss */ \"./src/pages/posts/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/develop/\\xC1rea de Trabalho/Reverson/react/React-RocketSeat-ignews/src/pages/posts/index.tsx\";\n\n\n\n\n\n\nfunction Posts({\n  posts\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \" Posts | igNews\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().posts),\n        children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n          href: `/posts/${post.slug} `,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n              children: post.updatedAt\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n              children: post.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: post.excerpt\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 17\n            }, this)]\n          }, post.slug, true, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async () => {\n  const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_2__.getPrismicClient)();\n  const response = await prismic.query([_prismicio_client__WEBPACK_IMPORTED_MODULE_3___default().predicates.at(\"document.type\", \"publication\")], {\n    fetch: [\"publication.title\", \"publication.content\"],\n    pageSize: 100\n  });\n  const posts = response.results.map(post => {\n    var _post$data$content$fi, _post$data$content$fi2;\n\n    return {\n      slug: post.uid,\n      title: prismic_dom__WEBPACK_IMPORTED_MODULE_4__.RichText.asText(post.data.title),\n      excerpt: (_post$data$content$fi = (_post$data$content$fi2 = post.data.content.find(content => content.type === \"paragraph\")) === null || _post$data$content$fi2 === void 0 ? void 0 : _post$data$content$fi2.text) !== null && _post$data$content$fi !== void 0 ? _post$data$content$fi : \"\",\n      updatedAt: new Date(post.last_publication_date).toLocaleDateString(\"pt-BR\", {\n        day: \"2-digit\",\n        month: \"long\",\n        year: \"numeric\"\n      })\n    };\n  });\n  return {\n    props: {\n      posts\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvaW5kZXgudHN4Pzc2OTUiXSwibmFtZXMiOlsiUG9zdHMiLCJwb3N0cyIsInN0eWxlcyIsIm1hcCIsInBvc3QiLCJzbHVnIiwidXBkYXRlZEF0IiwidGl0bGUiLCJleGNlcnB0IiwiZ2V0U3RhdGljUHJvcHMiLCJwcmlzbWljIiwiZ2V0UHJpc21pY0NsaWVudCIsInJlc3BvbnNlIiwicXVlcnkiLCJQcmlzbWljIiwiZmV0Y2giLCJwYWdlU2l6ZSIsInJlc3VsdHMiLCJ1aWQiLCJSaWNoVGV4dCIsImRhdGEiLCJjb250ZW50IiwiZmluZCIsInR5cGUiLCJ0ZXh0IiwiRGF0ZSIsImxhc3RfcHVibGljYXRpb25fZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFhZSxTQUFTQSxLQUFULENBQWU7QUFBRUM7QUFBRixDQUFmLEVBQXNDO0FBQ25ELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQU0sZUFBUyxFQUFFQyxxRUFBakI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVBLGlFQUFoQjtBQUFBLGtCQUNHRCxLQUFLLENBQUNFLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVCw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBRyxVQUFTQSxJQUFJLENBQUNDLElBQUssR0FBaEM7QUFBQSxpQ0FDRTtBQUFBLG9DQUNFO0FBQUEsd0JBQU9ELElBQUksQ0FBQ0U7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBQSx3QkFBU0YsSUFBSSxDQUFDRztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRTtBQUFBLHdCQUFJSCxJQUFJLENBQUNJO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRjtBQUFBLGFBQVFKLElBQUksQ0FBQ0MsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQSxrQkFERjtBQXFCRDtBQUVNLE1BQU1JLGNBQThCLEdBQUcsWUFBWTtBQUN4RCxRQUFNQyxPQUFPLEdBQUdDLG1FQUFnQixFQUFoQztBQUVBLFFBQU1DLFFBQVEsR0FBRyxNQUFNRixPQUFPLENBQUNHLEtBQVIsQ0FDckIsQ0FBQ0Msc0VBQUEsQ0FBc0IsZUFBdEIsRUFBdUMsYUFBdkMsQ0FBRCxDQURxQixFQUVyQjtBQUNFQyxTQUFLLEVBQUUsQ0FBQyxtQkFBRCxFQUFzQixxQkFBdEIsQ0FEVDtBQUVFQyxZQUFRLEVBQUU7QUFGWixHQUZxQixDQUF2QjtBQVFBLFFBQU1mLEtBQUssR0FBR1csUUFBUSxDQUFDSyxPQUFULENBQWlCZCxHQUFqQixDQUFzQkMsSUFBRCxJQUFVO0FBQUE7O0FBQzNDLFdBQU87QUFDTEMsVUFBSSxFQUFFRCxJQUFJLENBQUNjLEdBRE47QUFFTFgsV0FBSyxFQUFFWSx3REFBQSxDQUFnQmYsSUFBSSxDQUFDZ0IsSUFBTCxDQUFVYixLQUExQixDQUZGO0FBR0xDLGFBQU8scURBQ0xKLElBQUksQ0FBQ2dCLElBQUwsQ0FBVUMsT0FBVixDQUFrQkMsSUFBbEIsQ0FBd0JELE9BQUQsSUFBYUEsT0FBTyxDQUFDRSxJQUFSLEtBQWlCLFdBQXJELENBREssMkRBQ0wsdUJBQ0lDLElBRkMseUVBRU8sRUFMVDtBQU1MbEIsZUFBUyxFQUFFLElBQUltQixJQUFKLENBQVNyQixJQUFJLENBQUNzQixxQkFBZCxFQUFxQ0Msa0JBQXJDLENBQ1QsT0FEUyxFQUVUO0FBQ0VDLFdBQUcsRUFBRSxTQURQO0FBRUVDLGFBQUssRUFBRSxNQUZUO0FBR0VDLFlBQUksRUFBRTtBQUhSLE9BRlM7QUFOTixLQUFQO0FBZUQsR0FoQmEsQ0FBZDtBQWlCQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUFFOUI7QUFBRjtBQURGLEdBQVA7QUFHRCxDQS9CTSIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb3N0cy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRQcmlzbWljQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3ByaXNtaWNcIjtcbmltcG9ydCBQcmlzbWljIGZyb20gXCJAcHJpc21pY2lvL2NsaWVudFwiO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1kb21cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxudHlwZSBQb3N0ID0ge1xuICBzbHVnOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGV4Y2VycHQ6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59O1xuXG5pbnRlcmZhY2UgUG9zdHNQcm9wcyB7XG4gIHBvc3RzOiBQb3N0W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKHsgcG9zdHMgfTogUG9zdHNQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPiBQb3N0cyB8IGlnTmV3czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdHN9PlxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0LnNsdWd9IGB9PlxuICAgICAgICAgICAgICA8YSBrZXk9e3Bvc3Quc2x1Z30+XG4gICAgICAgICAgICAgICAgPHRpbWU+e3Bvc3QudXBkYXRlZEF0fTwvdGltZT5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPntwb3N0LnRpdGxlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxwPntwb3N0LmV4Y2VycHR9PC9wPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudCgpO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJpc21pYy5xdWVyeShcbiAgICBbUHJpc21pYy5wcmVkaWNhdGVzLmF0KFwiZG9jdW1lbnQudHlwZVwiLCBcInB1YmxpY2F0aW9uXCIpXSxcbiAgICB7XG4gICAgICBmZXRjaDogW1wicHVibGljYXRpb24udGl0bGVcIiwgXCJwdWJsaWNhdGlvbi5jb250ZW50XCJdLFxuICAgICAgcGFnZVNpemU6IDEwMCxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgcG9zdHMgPSByZXNwb25zZS5yZXN1bHRzLm1hcCgocG9zdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzbHVnOiBwb3N0LnVpZCxcbiAgICAgIHRpdGxlOiBSaWNoVGV4dC5hc1RleHQocG9zdC5kYXRhLnRpdGxlKSxcbiAgICAgIGV4Y2VycHQ6XG4gICAgICAgIHBvc3QuZGF0YS5jb250ZW50LmZpbmQoKGNvbnRlbnQpID0+IGNvbnRlbnQudHlwZSA9PT0gXCJwYXJhZ3JhcGhcIilcbiAgICAgICAgICA/LnRleHQgPz8gXCJcIixcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUocG9zdC5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcbiAgICAgICAgXCJwdC1CUlwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9zdHMgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/index.tsx\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": function() { return /* binding */ getPrismicClient; }\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {\n    req,\n    accessToken: process.env.PRISMIC_ACCESS_TOKEN\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvcHJpc21pYy50cz84YzUwIl0sIm5hbWVzIjpbImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiUHJpc21pYyIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0VORFBPSU5UIiwiYWNjZXNzVG9rZW4iLCJQUklTTUlDX0FDQ0VTU19UT0tFTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxnQkFBVCxDQUEwQkMsR0FBMUIsRUFBd0M7QUFDN0MsUUFBTUMsT0FBTyxHQUFHQywrREFBQSxDQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBREUsRUFFZDtBQUNFTCxPQURGO0FBRUVNLGVBQVcsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRjNCLEdBRmMsQ0FBaEI7QUFRQSxTQUFPTixPQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJpc21pYy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpc21pY0NsaWVudChyZXE/OiB1bmtub3duKXtcbiAgY29uc3QgcHJpc21pYyA9IFByaXNtaWMuY2xpZW50KFxuICAgIHByb2Nlc3MuZW52LlBSSVNNSUNfRU5EUE9JTlQsXG4gICAge1xuICAgICAgcmVxLFxuICAgICAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LlBSSVNNSUNfQUNDRVNTX1RPS0VOXG4gICAgfVxuICApXG5cbiAgcmV0dXJuIHByaXNtaWNcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "./src/pages/posts/style.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/posts/style.module.scss ***!
  \*******************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"style_container__2Lusf\",\n\t\"posts\": \"style_posts__2F_1H\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvc3R5bGUubW9kdWxlLnNjc3M/ZTY1NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Bvc3RzL3N0eWxlLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVfY29udGFpbmVyX18yTHVzZlwiLFxuXHRcInBvc3RzXCI6IFwic3R5bGVfcG9zdHNfXzJGXzFIXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/style.module.scss\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prismicio/client");;

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("prismic-dom");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./src/pages/posts/index.tsx"); });
module.exports = __webpack_exports__;

})();