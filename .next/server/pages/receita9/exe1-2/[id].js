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
exports.id = "pages/receita9/exe1-2/[id]";
exports.ids = ["pages/receita9/exe1-2/[id]"];
exports.modules = {

/***/ "./pages/receita9/exe1-2/[id].js":
/*!***************************************!*\
  !*** ./pages/receita9/exe1-2/[id].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TheAnimes),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction TheAnimes({ data  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    if (router.isFallback) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            /*#__PURE__*/ children: \"Carregando...\"\n        }, void 0, false, {\n            fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita9/exe1-2/[id].js\",\n            lineNumber: 10,\n            columnNumber: 14\n        }, this));\n    }\n    const title = data.data.title;\n    const episodes = data.data.episodes;\n    const score = data.data.score;\n    const image = data.data.images.jpg.image_url;\n    const synopsis = data.data.synopsis;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-745faaa98b0f1276\" + \" \" + \"Principal\",\n        children: [\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"745faaa98b0f1276\",\n                children: \".Principal.jsx-745faaa98b0f1276{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column;\\nmargin:auto;\\npadding:10px;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\nmax-width:500px}\\nul.jsx-745faaa98b0f1276{list-style:none}\\nul.jsx-745faaa98b0f1276 li.jsx-745faaa98b0f1276{margin-bottom:5px}\"\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"jsx-745faaa98b0f1276\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"jsx-745faaa98b0f1276\",\n                        children: [\n                            \" T\\xedtulo: \",\n                            title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita9/exe1-2/[id].js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"jsx-745faaa98b0f1276\",\n                        children: [\n                            \" Epis\\xf3dios: \",\n                            episodes,\n                            \" epis\\xf3dio(s)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita9/exe1-2/[id].js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"jsx-745faaa98b0f1276\",\n                        children: [\n                            \" Score: \",\n                            score\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita9/exe1-2/[id].js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"jsx-745faaa98b0f1276\",\n                        children: [\n                            \"Sinopse: \",\n                            synopsis\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita9/exe1-2/[id].js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita9/exe1-2/[id].js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-745faaa98b0f1276\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: image,\n                    className: \"jsx-745faaa98b0f1276\"\n                }, void 0, false, {\n                    fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita9/exe1-2/[id].js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita9/exe1-2/[id].js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita9/exe1-2/[id].js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this));\n};\nasync function getStaticPaths() {\n    return {\n        paths: [\n            {\n                params: {\n                    id: \"40456\"\n                }\n            },\n            {\n                params: {\n                    id: \"34566\"\n                }\n            },\n            {\n                params: {\n                    id: \"40085\"\n                }\n            }, \n        ],\n        fallback: true\n    };\n}\nasync function getStaticProps({ params  }) {\n    console.log(params);\n    const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhOS9leGUxLTIvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QztBQUd4QixRQUFRLENBQUNDLFNBQVMsQ0FBQyxDQUFDQyxDQUFBQSxJQUFJLEdBQUMsRUFBQyxDQUFDO0lBR3RDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUV4QixFQUFFLEVBQUVHLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFLENBQUM7UUFDdEIsTUFBTSw2RUFBRUMsQ0FBRztvQ0FBQyxDQUFhOzs7Ozs7SUFDM0IsQ0FBQztJQUdELEtBQUssQ0FBQ0MsS0FBSyxHQUFHSixJQUFJLENBQUNBLElBQUksQ0FBQ0ksS0FBSztJQUM3QixLQUFLLENBQUNDLFFBQVEsR0FBR0wsSUFBSSxDQUFDQSxJQUFJLENBQUNLLFFBQVE7SUFDbkMsS0FBSyxDQUFDQyxLQUFLLEdBQUdOLElBQUksQ0FBQ0EsSUFBSSxDQUFDTSxLQUFLO0lBQzdCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHUCxJQUFJLENBQUNBLElBQUksQ0FBQ1EsTUFBTSxDQUFDQyxHQUFHLENBQUNDLFNBQVM7SUFDNUMsS0FBSyxDQUFDQyxRQUFRLEdBQUdYLElBQUksQ0FBQ0EsSUFBSSxDQUFDVyxRQUFRO0lBRW5DLE1BQU0sNkVBRURSLENBQUc7a0RBQVcsQ0FBVzs7Ozs7O3dGQW9CckJTLENBQUU7OztnR0FDRUMsQ0FBRTs7OzRCQUFDLENBQVM7NEJBQUVULEtBQUs7Ozs7Ozs7Z0dBQ2xCUyxDQUFDOzs7NEJBQUMsQ0FBWTs0QkFBRVIsUUFBUTs0QkFBQyxDQUFZOzs7Ozs7O2dHQUNyQ1EsQ0FBRTs7OzRCQUFDLENBQVE7NEJBQUNQLEtBQUs7Ozs7Ozs7Z0dBQ2pCTyxDQUFFOzs7NEJBQUMsQ0FBUzs0QkFBQ0YsUUFBUTs7Ozs7Ozs7Ozs7Ozt3RkFHekJSLENBQUc7O3NHQUNDVyxDQUFHO29CQUFDQyxHQUFHLEVBQUVSLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEvQixDQUFDO0FBRUssZUFBZ0JTLGNBQWMsR0FBRSxDQUFDO0lBRW5DLE1BQU0sQ0FBQyxDQUFDO1FBRUpDLEtBQUssRUFBQyxDQUFDO1lBRUgsQ0FBQ0M7Z0JBQUFBLE1BQU0sRUFBRSxDQUFDQztvQkFBQUEsRUFBRSxFQUFFLENBQU87Z0JBQUEsQ0FBQztZQUFBLENBQUM7WUFFdkIsQ0FBQ0Q7Z0JBQUFBLE1BQU0sRUFBRSxDQUFDQztvQkFBQUEsRUFBRSxFQUFFLENBQU87Z0JBQUEsQ0FBQztZQUFBLENBQUM7WUFFdkIsQ0FBQ0Q7Z0JBQUFBLE1BQU0sRUFBRSxDQUFDQztvQkFBQUEsRUFBRSxFQUFFLENBQU87Z0JBQUEsQ0FBQztZQUFBLENBQUM7UUFFM0IsQ0FBQztRQUVEQyxRQUFRLEVBQUUsSUFBSTtJQUVsQixDQUFDO0FBRUwsQ0FBQztBQUVLLGVBQWdCQyxjQUFjLENBQUMsQ0FBQyxDQUFDSCxNQUFNLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFFOUNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxNQUFNO0lBQ2xCLEtBQUssQ0FBQ00sR0FBRyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLCtCQUErQixFQUFFUCxNQUFNLENBQUNDLEVBQUU7SUFFbkUsS0FBSyxDQUFDbkIsSUFBSSxHQUFHLEtBQUssQ0FBQ3dCLEdBQUcsQ0FBQ0UsSUFBSTtJQUUzQixNQUFNLENBQUMsQ0FBQztRQUVOQyxLQUFLLEVBQUUsQ0FBQztZQUVOM0IsSUFBSTtRQUVOLENBQUM7SUFFSCxDQUFDO0FBRUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FeGVyY2ljaW9OZXh0anMvLi9wYWdlcy9yZWNlaXRhOS9leGUxLTIvW2lkXS5qcz8wZjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZUFuaW1lcyh7ZGF0YX0pe1xuXG4gICBcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gPGRpdj5DYXJyZWdhbmRvLi4uPC9kaXY+XG4gICAgfVxuXG5cbiAgICBjb25zdCB0aXRsZSA9IGRhdGEuZGF0YS50aXRsZVxuICAgIGNvbnN0IGVwaXNvZGVzID0gZGF0YS5kYXRhLmVwaXNvZGVzXG4gICAgY29uc3Qgc2NvcmUgPSBkYXRhLmRhdGEuc2NvcmVcbiAgICBjb25zdCBpbWFnZSA9IGRhdGEuZGF0YS5pbWFnZXMuanBnLmltYWdlX3VybFxuICAgIGNvbnN0IHN5bm9wc2lzID0gZGF0YS5kYXRhLnN5bm9wc2lzXG4gICAgXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByaW5jaXBhbFwiPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLlByaW5jaXBhbHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPiBUw610dWxvOiB7dGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+IEVwaXPDs2Rpb3M6IHtlcGlzb2Rlc30gZXBpc8OzZGlvKHMpPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+IFNjb3JlOiB7c2NvcmV9PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+U2lub3BzZToge3N5bm9wc2lzfTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+ICAgICBcblxuICAgIClcblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgcGF0aHM6W1xuXG4gICAgICAgICAgICB7cGFyYW1zOiB7aWQ6IFwiNDA0NTZcIn19LFxuXG4gICAgICAgICAgICB7cGFyYW1zOiB7aWQ6IFwiMzQ1NjZcIn19LFxuXG4gICAgICAgICAgICB7cGFyYW1zOiB7aWQ6IFwiNDAwODVcIn19LFxuXG4gICAgICAgIF0sXG5cbiAgICAgICAgZmFsbGJhY2s6IHRydWUgXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcblxuICAgIGNvbnNvbGUubG9nKHBhcmFtcylcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3Y0L2FuaW1lLyR7cGFyYW1zLmlkfWApXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG5cbiAgICAgIHByb3BzOiB7XG5cbiAgICAgICAgZGF0YVxuXG4gICAgICB9XG5cbiAgICB9XG5cbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiVGhlQW5pbWVzIiwiZGF0YSIsInJvdXRlciIsImlzRmFsbGJhY2siLCJkaXYiLCJ0aXRsZSIsImVwaXNvZGVzIiwic2NvcmUiLCJpbWFnZSIsImltYWdlcyIsImpwZyIsImltYWdlX3VybCIsInN5bm9wc2lzIiwidWwiLCJsaSIsImltZyIsInNyYyIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJwYXJhbXMiLCJpZCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/receita9/exe1-2/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/receita9/exe1-2/[id].js"));
module.exports = __webpack_exports__;

})();