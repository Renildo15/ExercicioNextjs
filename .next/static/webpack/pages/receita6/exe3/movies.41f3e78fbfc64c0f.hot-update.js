"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/receita6/exe3/movies",{

/***/ "./pages/receita6/exe3/movies.js":
/*!***************************************!*\
  !*** ./pages/receita6/exe3/movies.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TheForm\": function() { return /* binding */ TheForm; },\n/* harmony export */   \"TheMovies\": function() { return /* binding */ TheMovies; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies33; }\n/* harmony export */ });\n/* harmony import */ var _home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nfunction TheForm(param) {\n    var filtro = param.filtro, url = param.url, acao = param.acao;\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, watch = ref.watch, errors = ref.formState.errors;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-75955e649ebb918d\",\n        children: [\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"75955e649ebb918d\",\n                children: \".form-search-movie.jsx-75955e649ebb918d{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column;\\nmax-width:200px;\\ngap:10px}\\n.form-search-movie.jsx-75955e649ebb918d input.jsx-75955e649ebb918d{padding:5px;\\nborder-radius:5px;\\nborder:1px solid #000;\\noutline:none}\\n.form-search-movie.jsx-75955e649ebb918d button.jsx-75955e649ebb918d{background-color:#0080FF;\\ncolor:#fff;\\npadding:5px;\\nborder:none;\\nborder-radius:5px;\\nmargin-bottom:10px;\\ncursor:pointer}\"\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(acao),\n                className: \"jsx-75955e649ebb918d\" + \" \" + 'form-search-movie',\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"titleSearchString\",\n                        className: \"jsx-75955e649ebb918d\",\n                        /*#__PURE__*/ children: filtro\n                    }, void 0, false, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n                        id: \"titleSearchString\"\n                    }, register(\"titleSearchString\", {\n                        required: true,\n                        minLength: 3\n                    }), {\n                        type: \"text\",\n                        autoComplete: \"true\",\n                        placeholder: \"T\\xedtulo\",\n                        className: \"jsx-75955e649ebb918d\"\n                    }), void 0, false, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    errors.titleSearchString && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"jsx-75955e649ebb918d\",\n                        children: \"Insira no m\\xednimo tr\\xeas caracteres   \"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n                        lineNumber: 46,\n                        columnNumber: 46\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n                        id: \"yearSearchNumber\"\n                    }, register(\"yearSearchNumber\", {\n                        required: true,\n                        minLength: 4,\n                        maxLength: 4\n                    }), {\n                        type: \"text\",\n                        autoComplete: \"true\",\n                        placeholder: \"Ano\",\n                        className: \"jsx-75955e649ebb918d\"\n                    }), void 0, false, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    errors.yearSearchNumber && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"jsx-75955e649ebb918d\",\n                        children: \" Insira um ano v\\xe1lido \"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n                        lineNumber: 56,\n                        columnNumber: 45\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"jsx-75955e649ebb918d\",\n                        children: url === '' ? 'Mostrar' : 'Ocultar'\n                    }, void 0, false, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this));\n}\n_s(TheForm, \"77WzwRY2adCYNFA0cLnNubMUW6o=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = TheForm;\nfunction TheMovies(param) {\n    var data = param.data, show = param.show;\n    if (!show) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n        lineNumber: 66,\n        columnNumber: 24\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n        lineNumber: 68,\n        columnNumber: 24\n    }, this));\n    if (data.error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"falha na pesquisa\"\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n        lineNumber: 70,\n        columnNumber: 29\n    }, this));\n    if (data.Response == 'False') return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"N\\xe3o foi encontrado nenhum filme com essas informa\\xe7\\xf5es \"\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n        lineNumber: 72,\n        columnNumber: 43\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                \" \",\n                data.Title,\n                \" --- \",\n                data.Year\n            ]\n        }, void 0, true, {\n            fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n            lineNumber: 77,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this));\n}\n_c1 = TheMovies;\nfunction Movies33() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        url: '',\n        titleSearchString: '',\n        yearSearchNumber: ''\n    }), state = ref[0], setState = ref[1];\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state.url, _asyncToGenerator(_home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, json;\n        return _home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(!state.url || !state.titleSearchString || !state.yearSearchNumber)) {\n                        _ctx.next = 2;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", {\n                        Search: ''\n                    });\n                case 2:\n                    if (!(state.url === '' || state.titleSearchString === '' || state.yearSearchNumber === '')) {\n                        _ctx.next = 4;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", {\n                        Search: ''\n                    });\n                case 4:\n                    _ctx.next = 6;\n                    return fetch(\"\".concat(state.url, \"/?apikey=8ba47b1d&s=\").concat(state.titleSearchString, \"&y=\").concat(state.yearSearchNumber));\n                case 6:\n                    res = _ctx.sent;\n                    _ctx.next = 9;\n                    return res.json();\n                case 9:\n                    json = _ctx.sent;\n                    return _ctx.abrupt(\"return\", json);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }))), data = ref1.data, error = ref1.error;\n    var onClickHandler = function() {\n        var t = document.querySelector('#titleSearchString').value;\n        var y = document.querySelector('#yearSearchNumber').value;\n        if (state.url === '') {\n            setState({\n                url: 'https://www.omdbapi.com',\n                titleSearchString: t,\n                yearSearchNumber: y\n            });\n        } else {\n            setState({\n                url: '',\n                titleSearchString: state.titleSearchString,\n                yearSearchNumber: state.yearSearchNumber\n            });\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TheForm, {\n                filtro: 'Filtro de t\\xedtulo',\n                url: state.url,\n                acao: onClickHandler\n            }, void 0, false, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TheMovies, {\n                data: error ? {\n                    error: 'Erro na pesquisa'\n                } : data ? data : {\n                    Search: ''\n                },\n                show: state.url !== ''\n            }, void 0, false, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe3/movies.js\",\n        lineNumber: 116,\n        columnNumber: 9\n    }, this));\n};\n_s1(Movies33, \"y43ATAKA8TYe06U1lCRXcRSme2k=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c2 = Movies33;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"TheForm\");\n$RefreshReg$(_c1, \"TheMovies\");\n$RefreshReg$(_c2, \"Movies33\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhNi9leGUzL21vdmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNNO0FBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLFNBQVNHLE9BQU8sQ0FBQyxLQUFtQixFQUFDLENBQUM7UUFBcEJDLE1BQU0sR0FBUCxLQUFtQixDQUFsQkEsTUFBTSxFQUFFQyxHQUFHLEdBQVosS0FBbUIsQ0FBVkEsR0FBRyxFQUFFQyxJQUFJLEdBQWxCLEtBQW1CLENBQUxBLElBQUk7O0lBRXRDLEdBQUssQ0FBNERKLEdBQVMsR0FBVEEsd0RBQU8sSUFBaEVLLFFBQVEsR0FBaURMLEdBQVMsQ0FBbEVLLFFBQVEsRUFBRUMsWUFBWSxHQUFtQ04sR0FBUyxDQUF4RE0sWUFBWSxFQUFFQyxLQUFLLEdBQTRCUCxHQUFTLENBQTFDTyxLQUFLLEVBQWVDLE1BQU0sR0FBT1IsR0FBUyxDQUFuQ1MsU0FBUyxDQUFJRCxNQUFNO0lBRTFELE1BQU0sNkVBQ0RFLENBQUc7Ozs7Ozs7d0ZBeUJDQyxDQUFJO2dCQUErQkMsUUFBUSxFQUFFTixZQUFZLENBQUNGLElBQUk7MERBQS9DLENBQW1COztnR0FDOUJTLENBQUs7d0JBQUNDLE9BQU8sRUFBQyxDQUFtQjs7Z0RBQUVaLE1BQU07Ozs7OztnR0FFekNhLENBQUs7d0JBQ0ZDLEVBQUUsRUFBQyxDQUFtQjt1QkFDbEJYLFFBQVEsQ0FBQyxDQUFtQixvQkFBRSxDQUFDO3dCQUFDWSxRQUFRLEVBQUUsSUFBSTt3QkFBRUMsU0FBUyxFQUFFLENBQUM7b0JBQUEsQ0FBQzt3QkFDakVDLElBQUksRUFBQyxDQUFNO3dCQUNYQyxZQUFZLEVBQUMsQ0FBTTt3QkFDbkJDLFdBQVcsRUFBQyxDQUFROzs7Ozs7O29CQUd0QmIsTUFBSyxDQUFDYyxpQkFBaUIsZ0ZBQUtDLENBQUk7O2tDQUFDLENBQW1DOzs7Ozs7Z0dBRW5FUixD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QyxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlY2VpdGE2L2V4ZTMvbW92aWVzLmpzPzY5NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVGb3JtKHtmaWx0cm8sIHVybCwgYWNhb30pe1xuXG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5mb3JtLXNlYXJjaC1tb3ZpZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZvcm0tc2VhcmNoLW1vdmllIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mb3JtLXNlYXJjaC1tb3ZpZSBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MEZGO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybS1zZWFyY2gtbW92aWUnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoYWNhbyl9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVTZWFyY2hTdHJpbmdcIj57ZmlsdHJvfTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVTZWFyY2hTdHJpbmdcIiBcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwidGl0bGVTZWFyY2hTdHJpbmdcIiwgeyByZXF1aXJlZDogdHJ1ZSwgbWluTGVuZ3RoOiAzfSl9IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1TDrXR1bG8nXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIHtlcnJvcnMudGl0bGVTZWFyY2hTdHJpbmcgJiYgPHNwYW4+SW5zaXJhIG5vIG3DrW5pbW8gdHLDqnMgY2FyYWN0ZXJlcyAgIDwvc3Bhbj59XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIGlkPVwieWVhclNlYXJjaE51bWJlclwiIFxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJ5ZWFyU2VhcmNoTnVtYmVyXCIsIHsgcmVxdWlyZWQ6IHRydWUsIG1pbkxlbmd0aDogNCwgbWF4TGVuZ3RoOiA0IH0pfSBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBbm8nXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIHtlcnJvcnMueWVhclNlYXJjaE51bWJlciAmJiA8c3Bhbj4gSW5zaXJhIHVtIGFubyB2w6FsaWRvIDwvc3Bhbj4gfVxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz57dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVGhlTW92aWVzKHtkYXRhLHNob3d9KXtcblxuICAgIGlmICghc2hvdykgcmV0dXJuICg8ZGl2PjwvZGl2PilcblxuICAgIGlmICghZGF0YSkgcmV0dXJuICg8ZGl2PjwvZGl2PilcblxuICAgIGlmIChkYXRhLmVycm9yKSByZXR1cm4gKDxkaXY+ZmFsaGEgbmEgcGVzcXVpc2E8L2Rpdj4pXG5cbiAgICBpZiAoZGF0YS5SZXNwb25zZSA9PSAnRmFsc2UnKSByZXR1cm4gKDxkaXY+TsOjbyBmb2kgZW5jb250cmFkbyBuZW5odW0gZmlsbWUgY29tIGVzc2FzIGluZm9ybWHDp8O1ZXMgPC9kaXY+KVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj4ge2RhdGEuVGl0bGV9IC0tLSB7ZGF0YS5ZZWFyfTwvZGl2PiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMzMoKXtcblxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe3VybDonJywgdGl0bGVTZWFyY2hTdHJpbmc6JycsIHllYXJTZWFyY2hOdW1iZXI6Jyd9KTtcblxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1Ioc3RhdGUudXJsLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXN0YXRlLnVybCB8fCAhc3RhdGUudGl0bGVTZWFyY2hTdHJpbmcgfHwgIXN0YXRlLnllYXJTZWFyY2hOdW1iZXIpIHJldHVybiB7U2VhcmNoOicnfVxuICAgICAgICBpZiAoc3RhdGUudXJsID09PSAnJyB8fCBzdGF0ZS50aXRsZVNlYXJjaFN0cmluZyA9PT0nJyB8fCBzdGF0ZS55ZWFyU2VhcmNoTnVtYmVyID09PSAnJykgcmV0dXJuIHtTZWFyY2g6Jyd9XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c3RhdGUudXJsfS8/YXBpa2V5PThiYTQ3YjFkJnM9JHtzdGF0ZS50aXRsZVNlYXJjaFN0cmluZ30meT0ke3N0YXRlLnllYXJTZWFyY2hOdW1iZXJ9YClcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgICAgcmV0dXJuIGpzb25cblxuICAgIH0pXG5cblxuICAgIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZVNlYXJjaFN0cmluZycpLnZhbHVlXG4gICAgICAgIGNvbnN0IHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjeWVhclNlYXJjaE51bWJlcicpLnZhbHVlXG5cbiAgICAgICAgaWYgKHN0YXRlLnVybCA9PT0gJycpIHtcbiAgICAgICAgICAgIHNldFN0YXRlKHt1cmw6J2h0dHBzOi8vd3d3Lm9tZGJhcGkuY29tJyx0aXRsZVNlYXJjaFN0cmluZzp0LHllYXJTZWFyY2hOdW1iZXI6eX0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHNldFN0YXRlKHt1cmw6JycsdGl0bGVTZWFyY2hTdHJpbmc6IHN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nLCB5ZWFyU2VhcmNoTnVtYmVyOiBzdGF0ZS55ZWFyU2VhcmNoTnVtYmVyfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRoZUZvcm0gZmlsdHJvPXsnRmlsdHJvIGRlIHTDrXR1bG8nfSB1cmw9e3N0YXRlLnVybH0gYWNhbz17b25DbGlja0hhbmRsZXJ9Lz5cbiAgICAgICAgICAgIDxUaGVNb3ZpZXMgZGF0YT17ZXJyb3I/e2Vycm9yOidFcnJvIG5hIHBlc3F1aXNhJ306IGRhdGEgPyBkYXRhOiB7U2VhcmNoOicnfSB9IHNob3c9e3N0YXRlLnVybCAhPT0gJyd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwiVGhlRm9ybSIsImZpbHRybyIsInVybCIsImFjYW8iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwidHlwZSIsImF1dG9Db21wbGV0ZSIsInBsYWNlaG9sZGVyIiwidGl0bGVTZWFyY2hTdHJpbmciLCJzcGFuIiwibWF4TGVuZ3RoIiwieWVhclNlYXJjaE51bWJlciIsImJ1dHRvbiIsIlRoZU1vdmllcyIsImRhdGEiLCJzaG93IiwiZXJyb3IiLCJSZXNwb25zZSIsIlRpdGxlIiwiWWVhciIsIk1vdmllczMzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJlcyIsImpzb24iLCJTZWFyY2giLCJmZXRjaCIsIm9uQ2xpY2tIYW5kbGVyIiwidCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwieSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/receita6/exe3/movies.js\n");

/***/ })

});