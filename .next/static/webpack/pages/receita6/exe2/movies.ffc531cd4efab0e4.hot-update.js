"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/receita6/exe2/movies",{

/***/ "./pages/receita6/exe2/movies.js":
/*!***************************************!*\
  !*** ./pages/receita6/exe2/movies.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TheForm\": function() { return /* binding */ TheForm; },\n/* harmony export */   \"TheMovies\": function() { return /* binding */ TheMovies; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies33; }\n/* harmony export */ });\n/* harmony import */ var _home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction TheForm(param) {\n    var filtro = param.filtro, url = param.url, acao = param.acao;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-75955e649ebb918d\",\n        children: [\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"75955e649ebb918d\",\n                children: \".form-search-movie.jsx-75955e649ebb918d{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column;\\nmax-width:200px;\\ngap:10px}\\n.form-search-movie.jsx-75955e649ebb918d input.jsx-75955e649ebb918d{padding:5px;\\nborder-radius:5px;\\nborder:1px solid #000;\\noutline:none}\\n.form-search-movie.jsx-75955e649ebb918d button.jsx-75955e649ebb918d{background-color:#0080FF;\\ncolor:#fff;\\npadding:5px;\\nborder:none;\\nborder-radius:5px;\\nmargin-bottom:10px;\\ncursor:pointer}\"\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(acao),\n                className: \"jsx-75955e649ebb918d\" + \" \" + 'form-search-movie',\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"titleSearchString\",\n                        className: \"jsx-75955e649ebb918d\",\n                        /*#__PURE__*/ children: filtro\n                    }, void 0, false, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n                        id: \"titleSearchString\"\n                    }, register(\"titleSearchString\", {\n                        required: true,\n                        minLength: 3\n                    }), {\n                        type: \"text\",\n                        autoComplete: \"true\",\n                        className: \"jsx-75955e649ebb918d\"\n                    }), void 0, false, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"jsx-75955e649ebb918d\",\n                        children: url === '' ? 'Mostrar' : 'Ocultar'\n                    }, void 0, false, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    errors.titleSearchString && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"jsx-75955e649ebb918d\",\n                        children: \"Insira no m\\xednimo tr\\xeas caracteres   \"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                        lineNumber: 38,\n                        columnNumber: 46\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this));\n}\n_c = TheForm;\nfunction TheMovies(param) {\n    var data = param.data, show = param.show;\n    var _this = this;\n    if (!show) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 46,\n        columnNumber: 24\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 48,\n        columnNumber: 24\n    }, this));\n    if (data.error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"falha na pesquisa\"\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 50,\n        columnNumber: 29\n    }, this));\n    if (data.Search === '') return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 52,\n        columnNumber: 38\n    }, this));\n    if (data.Response == 'False') return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"N\\xe3o foi encontrado nenhum filme com esse t\\xedtulo\"\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 54,\n        columnNumber: 43\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: data.Search.map(function(m) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, m.imdbID, true, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                lineNumber: 59,\n                columnNumber: 39\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this));\n}\n_c1 = TheMovies;\nfunction Movies33() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        url: '',\n        titleSearchString: ''\n    }), state = ref[0], setState = ref[1];\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state.url, _asyncToGenerator(_home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, json;\n        return _home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(!state.url || !state.titleSearchString)) {\n                        _ctx.next = 2;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", {\n                        Search: ''\n                    });\n                case 2:\n                    if (!(state.url === '' || state.titleSearchString === '')) {\n                        _ctx.next = 4;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", {\n                        Search: ''\n                    });\n                case 4:\n                    _ctx.next = 6;\n                    return fetch(\"\".concat(state.url, \"/?apikey=8ba47b1d&s=\").concat(state.titleSearchString));\n                case 6:\n                    res = _ctx.sent;\n                    _ctx.next = 9;\n                    return res.json();\n                case 9:\n                    json = _ctx.sent;\n                    return _ctx.abrupt(\"return\", json);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }))), data = ref1.data, error = ref1.error;\n    var onClickHandler = function() {\n        var s = document.querySelector('#titleSearchString').value;\n        if (state.url === '') {\n            setState({\n                url: 'https://www.omdbapi.com',\n                titleSearchString: s\n            });\n        } else {\n            setState({\n                url: '',\n                titleSearchString: state.titleSearchString\n            });\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TheForm, {\n                filtro: 'Filtro de t\\xedtulo',\n                url: state.url,\n                acao: onClickHandler\n            }, void 0, false, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TheMovies, {\n                data: error ? {\n                    error: 'Erro na pesquisa'\n                } : data ? data : {\n                    Search: ''\n                },\n                show: state.url !== ''\n            }, void 0, false, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, this));\n};\n_s(Movies33, \"GiOCawOFP9JDIrNyEAuhR/ILLBY=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c2 = Movies33;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"TheForm\");\n$RefreshReg$(_c1, \"TheMovies\");\n$RefreshReg$(_c2, \"Movies33\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhNi9leGUyL21vdmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3ZCLFNBQVNFLE9BQU8sQ0FBQyxLQUFtQixFQUFDLENBQUM7UUFBcEJDLE1BQU0sR0FBUCxLQUFtQixDQUFsQkEsTUFBTSxFQUFFQyxHQUFHLEdBQVosS0FBbUIsQ0FBVkEsR0FBRyxFQUFFQyxJQUFJLEdBQWxCLEtBQW1CLENBQUxBLElBQUk7SUFHdEMsTUFBTSw2RUFDREMsQ0FBRzs7Ozs7Ozt3RkF5QkNDLENBQUk7Z0JBQStCQyxRQUFRLEVBQUVDLFlBQVksQ0FBQ0osSUFBSTswREFBL0MsQ0FBbUI7O2dHQUM5QkssQ0FBSzt3QkFBQ0MsT0FBTyxFQUFDLENBQW1COztnREFBRVIsTUFBTTs7Ozs7O2dHQUN6Q1MsQ0FBSzt3QkFBQ0MsRUFBRSxFQUFDLENBQW1CO3VCQUFLQyxRQUFRLENBQUMsQ0FBbUIsb0JBQUUsQ0FBQzt3QkFBQ0MsUUFBUSxFQUFFLElBQUk7d0JBQUVDLFNBQVMsRUFBRSxDQUFDO29CQUFBLENBQUM7d0JBQUdDLElBQUksRUFBQyxDQUFNO3dCQUFDQyxZQUFZLEVBQUMsQ0FBTTs7Ozs7OztnR0FDaElDLENBQU07d0JBQUNGLElBQUksRUFBQyxDQUFROztrQ0FBRWIsR0FBRyxLQUFLLENBQUUsSUFBRyxDQUFTLFdBQUcsQ0FBUzs7Ozs7O29CQUN4RGdCLE1BQU0sQ0FBQ0MsaUJBQWlCLGdGQUFLQyxDQUFJOztrQ0FBQyxDQUFtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBGLENBQUQ7S0FyQ2VwQixPQUFPO0FBdUNoQixTQUFTcUIsU0FBUyxDQUFDLEtBQVcsRUFBQyxDQUFDO1FBQVpDLElBQUksR0FBTCxLQUFXLENBQVZBLElBQUksRUFBQ0MsSUFBSSxHQUFWLEtBQVcsQ0FBTEEsSUFBSTs7SUFF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LEdBQUc7Z0JBQUVDLElBQUksRUFBRW1DLGNBQWM7Ozs7Ozt3RkFDeEVqQixTQUFTO2dCQUFDQyxJQUFJLEVBQUVFLEtBQUssR0FBQyxDQUFDQTtvQkFBQUEsS0FBSyxFQUFDLENBQWtCO2dCQUFBLENBQUMsR0FBRUYsSUFBSSxHQUFHQSxJQUFJLEdBQUUsQ0FBQ0c7b0JBQUFBLE1BQU0sRUFBQyxDQUFFO2dCQUFBLENBQUM7Z0JBQUdGLElBQUksRUFBRVUsS0FBSyxDQUFDL0IsR0FBRyxLQUFLLENBQUU7Ozs7Ozs7Ozs7OztBQUdoSCxDQUFDO0dBcEN1QjhCLFFBQVE7O1FBSU5sQywyQ0FBTTs7O01BSlJrQyxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlY2VpdGE2L2V4ZTIvbW92aWVzLmpzPzQ2NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuXG5leHBvcnQgZnVuY3Rpb24gVGhlRm9ybSh7ZmlsdHJvLCB1cmwsIGFjYW99KXtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZm9ybS1zZWFyY2gtbW92aWUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mb3JtLXNlYXJjaC1tb3ZpZSBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZm9ybS1zZWFyY2gtbW92aWUgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODBGRjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0tc2VhcmNoLW1vdmllJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGFjYW8pfT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlU2VhcmNoU3RyaW5nXCI+e2ZpbHRyb308L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRpdGxlU2VhcmNoU3RyaW5nXCIgey4uLnJlZ2lzdGVyKFwidGl0bGVTZWFyY2hTdHJpbmdcIiwgeyByZXF1aXJlZDogdHJ1ZSwgbWluTGVuZ3RoOiAzfSl9IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwidHJ1ZVwiLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+e3VybCA9PT0gJycgPyAnTW9zdHJhcicgOiAnT2N1bHRhcid9PC9idXR0b24+XG4gICAgICAgICAgICAgICAge2Vycm9ycy50aXRsZVNlYXJjaFN0cmluZyAmJiA8c3Bhbj5JbnNpcmEgbm8gbcOtbmltbyB0csOqcyBjYXJhY3RlcmVzICAgPC9zcGFuPn1cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVGhlTW92aWVzKHtkYXRhLHNob3d9KXtcblxuICAgIGlmICghc2hvdykgcmV0dXJuICg8ZGl2PjwvZGl2PilcblxuICAgIGlmICghZGF0YSkgcmV0dXJuICg8ZGl2PjwvZGl2PilcblxuICAgIGlmIChkYXRhLmVycm9yKSByZXR1cm4gKDxkaXY+ZmFsaGEgbmEgcGVzcXVpc2E8L2Rpdj4pXG5cbiAgICBpZiAoZGF0YS5TZWFyY2ggPT09ICcnICkgcmV0dXJuICg8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj4pXG5cbiAgICBpZiAoZGF0YS5SZXNwb25zZSA9PSAnRmFsc2UnKSByZXR1cm4gKDxkaXY+TsOjbyBmb2kgZW5jb250cmFkbyBuZW5odW0gZmlsbWUgY29tIGVzc2UgdMOtdHVsbzwvZGl2PilcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgZGF0YS5TZWFyY2gubWFwKCAobSkgPT4gPGRpdiBrZXk9e20uaW1kYklEfT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+ICApIH0gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMzMygpe1xuXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7dXJsOicnLCB0aXRsZVNlYXJjaFN0cmluZzonJ30pO1xuXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihzdGF0ZS51cmwsIGFzeW5jICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlmICghc3RhdGUudXJsIHx8ICFzdGF0ZS50aXRsZVNlYXJjaFN0cmluZykgcmV0dXJuIHtTZWFyY2g6Jyd9XG4gICAgICAgIGlmIChzdGF0ZS51cmwgPT09ICcnIHx8IHN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nID09PScnKSByZXR1cm4ge1NlYXJjaDonJ31cblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtzdGF0ZS51cmx9Lz9hcGlrZXk9OGJhNDdiMWQmcz0ke3N0YXRlLnRpdGxlU2VhcmNoU3RyaW5nfWApXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGpzb25cblxuICAgIH0pXG5cblxuICAgIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZVNlYXJjaFN0cmluZycpLnZhbHVlXG4gICAgICAgIGlmIChzdGF0ZS51cmwgPT09ICcnKSB7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7dXJsOidodHRwczovL3d3dy5vbWRiYXBpLmNvbScsdGl0bGVTZWFyY2hTdHJpbmc6c30pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHNldFN0YXRlKHt1cmw6JycsdGl0bGVTZWFyY2hTdHJpbmc6IHN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRoZUZvcm0gZmlsdHJvPXsnRmlsdHJvIGRlIHTDrXR1bG8nfSB1cmw9e3N0YXRlLnVybH0gYWNhbz17b25DbGlja0hhbmRsZXJ9Lz5cbiAgICAgICAgICAgIDxUaGVNb3ZpZXMgZGF0YT17ZXJyb3I/e2Vycm9yOidFcnJvIG5hIHBlc3F1aXNhJ306IGRhdGEgPyBkYXRhOiB7U2VhcmNoOicnfSB9IHNob3c9e3N0YXRlLnVybCAhPT0gJyd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlU3RhdGUiLCJUaGVGb3JtIiwiZmlsdHJvIiwidXJsIiwiYWNhbyIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJyZWdpc3RlciIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwidHlwZSIsImF1dG9Db21wbGV0ZSIsImJ1dHRvbiIsImVycm9ycyIsInRpdGxlU2VhcmNoU3RyaW5nIiwic3BhbiIsIlRoZU1vdmllcyIsImRhdGEiLCJzaG93IiwiZXJyb3IiLCJTZWFyY2giLCJSZXNwb25zZSIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiLCJpbWRiSUQiLCJNb3ZpZXMzMyIsInN0YXRlIiwic2V0U3RhdGUiLCJyZXMiLCJqc29uIiwiZmV0Y2giLCJvbkNsaWNrSGFuZGxlciIsInMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/receita6/exe2/movies.js\n");

/***/ })

});