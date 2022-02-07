"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/receita5/exe5/movies";
exports.ids = ["pages/receita5/exe5/movies"];
exports.modules = {

/***/ "./pages/receita5/exe5/movies.js":
/*!***************************************!*\
  !*** ./pages/receita5/exe5/movies.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies3),\n/* harmony export */   \"TheMovies\": () => (/* binding */ TheMovies)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nfunction Movies3() {\n    const { 0: url , 1: setUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, theFetcher);\n    const onClickHandler = (e)=>{\n        e.preventDefault();\n        const keyword = document.getElementById('field-movie').value;\n        if (url === '') setUrl(`https://www.omdbapi.com/?apikey=8ba47b1d&s=${keyword}`);\n        else setUrl('');\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"field-movie\",\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita5/exe5/movies.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        onClick: onClickHandler,\n                        children: \"Procurar\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita5/exe5/movies.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita5/exe5/movies.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: error ? {\n                    error: 'Erro na pesquisa'\n                } : data ? data : {\n                    Search: ''\n                },\n                show: url !== ''\n            }, void 0, false, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita5/exe5/movies.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita5/exe5/movies.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this));\n};\nasync function theFetcher(url) {\n    if (url === null || url === '') return {\n        Search: ''\n    };\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction TheMovies({ data , show  }) {\n    if (!show) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita5/exe5/movies.js\",\n        lineNumber: 45,\n        columnNumber: 24\n    }, this));\n    if (data.error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o\"\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita5/exe5/movies.js\",\n        lineNumber: 47,\n        columnNumber: 29\n    }, this));\n    if (data.Search === '') return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita5/exe5/movies.js\",\n        lineNumber: 49,\n        columnNumber: 38\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita5/exe5/movies.js\",\n                lineNumber: 54,\n                columnNumber: 39\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita5/exe5/movies.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this));\n}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhNS9leGU1L21vdmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNNO0FBRWYsUUFBUSxDQUFDRSxPQUFPLEdBQUUsQ0FBQztJQUU5QixLQUFLLE1BQUVDLEdBQUcsTUFBRUMsTUFBTSxNQUFJSCwrQ0FBUSxDQUFDLENBQUU7SUFDakMsS0FBSyxDQUFDLENBQUNJLENBQUFBLElBQUksR0FBRUMsS0FBSyxHQUFDLEdBQUdOLCtDQUFNLENBQUNHLEdBQUcsRUFBRUksVUFBVTtJQUU1QyxLQUFLLENBQUNDLGNBQWMsSUFBSUMsQ0FBQyxHQUFLLENBQUM7UUFFM0JBLENBQUMsQ0FBQ0MsY0FBYztRQUVoQixLQUFLLENBQUNDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBYSxjQUFFQyxLQUFLO1FBQzVELEVBQUUsRUFBRVgsR0FBRyxLQUFLLENBQUUsR0FBRUMsTUFBTSxFQUFFLDJDQUEyQyxFQUFFTyxPQUFPO2FBRXZFUCxNQUFNLENBQUMsQ0FBRTtJQUVsQixDQUFDO0lBRUQsTUFBTSw2RUFFRFcsQ0FBRzs7d0ZBQ0NDLENBQUk7O2dHQUNBQyxDQUFLO3dCQUFDQyxFQUFFLEVBQUMsQ0FBYTt3QkFBQ0MsSUFBSSxFQUFDLENBQU07Ozs7OztnR0FDbENDLENBQU07d0JBQUNELElBQUksRUFBQyxDQUFRO3dCQUFDRSxPQUFPLEVBQUViLGNBQWM7a0NBQUUsQ0FBUTs7Ozs7Ozs7Ozs7O3dGQUUxRGMsU0FBUztnQkFBQ2pCLElBQUksRUFBR0MsS0FBSyxHQUFDLENBQUNBO29CQUFBQSxLQUFLLEVBQUMsQ0FBa0I7Z0JBQUEsQ0FBQyxHQUFFRCxJQUFJLEdBQUdBLElBQUksR0FBRSxDQUFDa0I7b0JBQUFBLE1BQU0sRUFBQyxDQUFFO2dCQUFBLENBQUM7Z0JBQUdDLElBQUksRUFBRXJCLEdBQUcsS0FBSyxDQUFFOzs7Ozs7Ozs7Ozs7QUFLM0csQ0FBQztlQUVjSSxVQUFVLENBQUNKLEdBQUcsRUFBRSxDQUFDO0lBRTVCLEVBQUUsRUFBRUEsR0FBRyxLQUFLLElBQUksSUFBSUEsR0FBRyxLQUFLLENBQUUsR0FBRSxNQUFNLENBQUMsQ0FBQ29CO1FBQUFBLE1BQU0sRUFBQyxDQUFFO0lBQUEsQ0FBQztJQUNsRCxLQUFLLENBQUNFLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQ3ZCLEdBQUc7SUFDM0IsS0FBSyxDQUFDd0IsSUFBSSxHQUFHLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRSxJQUFJO0lBQzNCLE1BQU0sQ0FBQ0EsSUFBSTtBQUVmLENBQUM7QUFFTSxTQUFTTCxTQUFTLENBQUMsQ0FBQ2pCLENBQUFBLElBQUksR0FBQ21CLElBQUksR0FBQyxFQUFDLENBQUM7SUFFbkMsRUFBRSxHQUFHQSxJQUFJLEVBQUUsTUFBTSw2RUFBR1QsQ0FBRzs7Ozs7SUFFdkIsRUFBRSxFQUFFVixJQUFJLENBQUNDLEtBQUssRUFBRSxNQUFNLDZFQUFHUyxDQUFHO2tCQUFDLENBQW1COzs7Ozs7SUFFaEQsRUFBRSxFQUFFVixJQUFJLENBQUNrQixNQUFNLEtBQUssQ0FBRSxHQUFHLE1BQU0sNkVBQUdSLENBQUc7a0JBQUMsQ0FBYTs7Ozs7O0lBRW5ELE1BQU0sNkVBRURBLENBQUc7a0JBQ0VWLElBQUksQ0FBQ2tCLE1BQU0sQ0FBQ0ssR0FBRyxFQUFHQyxDQUFDLCtFQUFNZCxDQUFHOztvQkFBRWMsQ0FBQyxDQUFDQyxLQUFLO29CQUFDLENBQUs7b0JBQUNELENBQUMsQ0FBQ0UsSUFBSTs7Ozs7Ozs7Ozs7OztBQU1oRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXhlcmNpY2lvTmV4dGpzLy4vcGFnZXMvcmVjZWl0YTUvZXhlNS9tb3ZpZXMuanM/YjEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMzKCl7XG5cbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUih1cmwsIHRoZUZldGNoZXIpXG5cbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3Qga2V5d29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1tb3ZpZScpLnZhbHVlIFxuICAgICAgICBpZiAodXJsID09PSAnJykgc2V0VXJsKGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PThiYTQ3YjFkJnM9JHtrZXl3b3JkfWApXG5cbiAgICAgICAgZWxzZSBzZXRVcmwoJycpXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2ZpZWxkLW1vdmllJyB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0+UHJvY3VyYXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxUaGVNb3ZpZXMgZGF0YT17IGVycm9yP3tlcnJvcjonRXJybyBuYSBwZXNxdWlzYSd9OiBkYXRhID8gZGF0YToge1NlYXJjaDonJ30gfSBzaG93PXt1cmwgIT09ICcnfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHRoZUZldGNoZXIodXJsKSB7XG5cbiAgICBpZiAodXJsID09PSBudWxsIHx8IHVybCA9PT0gJycpIHJldHVybiB7U2VhcmNoOicnfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGpzb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRoZU1vdmllcyh7ZGF0YSxzaG93fSl7XG5cbiAgICBpZiAoIXNob3cpIHJldHVybiAoPGRpdj48L2Rpdj4pICAgIFxuXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiAoPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo288L2Rpdj4pXG5cbiAgICBpZiAoZGF0YS5TZWFyY2ggPT09ICcnICkgcmV0dXJuICg8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj4pXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7IGRhdGEuU2VhcmNoLm1hcCggKG0pID0+IDxkaXY+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2PiAgKSB9ICAgICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG5cbn0iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlU3RhdGUiLCJNb3ZpZXMzIiwidXJsIiwic2V0VXJsIiwiZGF0YSIsImVycm9yIiwidGhlRmV0Y2hlciIsIm9uQ2xpY2tIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5d29yZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImRpdiIsImZvcm0iLCJpbnB1dCIsImlkIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJUaGVNb3ZpZXMiLCJTZWFyY2giLCJzaG93IiwicmVzIiwiZmV0Y2giLCJqc29uIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/receita5/exe5/movies.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/receita5/exe5/movies.js"));
module.exports = __webpack_exports__;

})();