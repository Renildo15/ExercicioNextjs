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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TheForm\": function() { return /* binding */ TheForm; },\n/* harmony export */   \"TheMovies\": function() { return /* binding */ TheMovies; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies33; }\n/* harmony export */ });\n/* harmony import */ var _home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nfunction TheForm(param) {\n    var filtro = param.filtro, url = param.url, acao = param.acao;\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, watch = ref.watch, errors = ref.formState.errors;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            className: \"form-search-movie\",\n            onSubmit: handleSubmit(acao),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    htmlFor: \"titleSearchString\",\n                    children: filtro\n                }, void 0, false, {\n                    fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n                    id: \"titleSearchString\"\n                }, register(\"titleSearchString\", {\n                    required: true,\n                    minLength: 3\n                }), {\n                    type: \"text\",\n                    autoComplete: \"true\"\n                }), void 0, false, {\n                    fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: url === '' ? 'Mostrar' : 'Ocultar'\n                }, void 0, false, {\n                    fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this),\n                errors.titleSearchString && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    children: \"Insira no m\\xednimo tr\\xeas caracteres   \"\n                }, void 0, false, {\n                    fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                    lineNumber: 16,\n                    columnNumber: 46\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this));\n}\n_s(TheForm, \"77WzwRY2adCYNFA0cLnNubMUW6o=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = TheForm;\nfunction TheMovies(param) {\n    var data = param.data, show = param.show;\n    var _this = this;\n    if (!show) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 24,\n        columnNumber: 24\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 26,\n        columnNumber: 24\n    }, this));\n    if (data.error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"falha na pesquisa\"\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 28,\n        columnNumber: 29\n    }, this));\n    if (data.Search === '') return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 30,\n        columnNumber: 38\n    }, this));\n    if (data.Response == 'False') return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"N\\xe3o foi encontrado nenhum filme com esse t\\xedtulo\"\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 32,\n        columnNumber: 43\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: data.Search.map(function(m) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, m.imdbID, true, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                lineNumber: 37,\n                columnNumber: 39\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this));\n}\n_c1 = TheMovies;\nfunction Movies33() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        url: '',\n        titleSearchString: ''\n    }), state = ref[0], setState = ref[1];\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state.url, _asyncToGenerator(_home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, json;\n        return _home_runner_ExercicioNextjs_Receita4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(!state.url || !state.titleSearchString)) {\n                        _ctx.next = 2;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", {\n                        Search: ''\n                    });\n                case 2:\n                    if (!(state.url === '' || state.titleSearchString === '')) {\n                        _ctx.next = 4;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", {\n                        Search: ''\n                    });\n                case 4:\n                    _ctx.next = 6;\n                    return fetch(\"\".concat(state.url, \"/?apikey=8ba47b1d&s=\").concat(state.titleSearchString));\n                case 6:\n                    res = _ctx.sent;\n                    _ctx.next = 9;\n                    return res.json();\n                case 9:\n                    json = _ctx.sent;\n                    return _ctx.abrupt(\"return\", json);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }))), data = ref1.data, error = ref1.error;\n    var onClickHandler = function() {\n        var s = document.querySelector('#titleSearchString').value;\n        if (state.url === '') {\n            setState({\n                url: 'https://www.omdbapi.com',\n                titleSearchString: s\n            });\n        } else {\n            setState({\n                url: '',\n                titleSearchString: state.titleSearchString\n            });\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TheForm, {\n                filtro: 'Filtro de t\\xedtulo',\n                url: state.url,\n                acao: onClickHandler\n            }, void 0, false, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TheMovies, {\n                data: error ? {\n                    error: 'Erro na pesquisa'\n                } : data ? data : {\n                    Search: ''\n                },\n                show: state.url !== ''\n            }, void 0, false, {\n                fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/ExercicioNextjs-Receita4/pages/receita6/exe2/movies.js\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, this));\n};\n_s1(Movies33, \"GiOCawOFP9JDIrNyEAuhR/ILLBY=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c2 = Movies33;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"TheForm\");\n$RefreshReg$(_c1, \"TheMovies\");\n$RefreshReg$(_c2, \"Movies33\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNHLENBQUM7WUFDREwsUUFBUSxDQUFDLENBQUNuQztnQkFBQUEsR0FBRyxFQUFDLENBQUU7Z0JBQUNvQixpQkFBaUIsRUFBRWMsS0FBSyxDQUFDZCxpQkFBaUI7WUFBQSxDQUFDO1FBQ2hFLENBQUM7SUFDTCxDQUFDO0lBSUQsTUFBTSw2RUFDRGIsQ0FBRzs7d0ZBQ0NULE9BQU87Z0JBQUNDLE1BQU0sRUFBRSxDQUFrQjtnQkFBRUMsR0FBRyxFQUFFa0MsS0FBSyxDQUFDbEMsR0FBRztnQkFBRUMsSUFBSSxFQUFFc0MsY0FBYzs7Ozs7O3dGQUN4RWpCLFNBQVM7Z0JBQUNDLElBQUksRUFBRUUsS0FBSyxHQUFDLENBQUNBO29CQUFBQSxLQUFLLEVBQUMsQ0FBa0I7Z0JBQUEsQ0FBQyxHQUFFRixJQUFJLEdBQUdBLElBQUksR0FBRSxDQUFDRztvQkFBQUEsTUFBTSxFQUFDLENBQUU7Z0JBQUEsQ0FBQztnQkFBR0YsSUFBSSxFQUFFVSxLQUFLLENBQUNsQyxHQUFHLEtBQUssQ0FBRTs7Ozs7Ozs7Ozs7O0FBR2hILENBQUM7SUFwQ3VCaUMsUUFBUTs7UUFJTnRDLDJDQUFNOzs7TUFKUnNDLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjZWl0YTYvZXhlMi9tb3ZpZXMuanM/NDY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcblxuZXhwb3J0IGZ1bmN0aW9uIFRoZUZvcm0oe2ZpbHRybywgdXJsLCBhY2FvfSl7XG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybS1zZWFyY2gtbW92aWUnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoYWNhbyl9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVTZWFyY2hTdHJpbmdcIj57ZmlsdHJvfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGl0bGVTZWFyY2hTdHJpbmdcIiB7Li4ucmVnaXN0ZXIoXCJ0aXRsZVNlYXJjaFN0cmluZ1wiLCB7IHJlcXVpcmVkOiB0cnVlLCBtaW5MZW5ndGg6IDN9KX0gdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz57dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnRpdGxlU2VhcmNoU3RyaW5nICYmIDxzcGFuPkluc2lyYSBubyBtw61uaW1vIHRyw6pzIGNhcmFjdGVyZXMgICA8L3NwYW4+fVxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVNb3ZpZXMoe2RhdGEsc2hvd30pe1xuXG4gICAgaWYgKCFzaG93KSByZXR1cm4gKDxkaXY+PC9kaXY+KVxuXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gKDxkaXY+PC9kaXY+KVxuXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiAoPGRpdj5mYWxoYSBuYSBwZXNxdWlzYTwvZGl2PilcblxuICAgIGlmIChkYXRhLlNlYXJjaCA9PT0gJycgKSByZXR1cm4gKDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PilcblxuICAgIGlmIChkYXRhLlJlc3BvbnNlID09ICdGYWxzZScpIHJldHVybiAoPGRpdj5Ow6NvIGZvaSBlbmNvbnRyYWRvIG5lbmh1bSBmaWxtZSBjb20gZXNzZSB0w610dWxvPC9kaXY+KVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyBkYXRhLlNlYXJjaC5tYXAoIChtKSA9PiA8ZGl2IGtleT17bS5pbWRiSUR9PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4gICkgfSAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczMzKCl7XG5cbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHt1cmw6JycsIHRpdGxlU2VhcmNoU3RyaW5nOicnfSk7XG5cbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKHN0YXRlLnVybCwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgaWYgKCFzdGF0ZS51cmwgfHwgIXN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nKSByZXR1cm4ge1NlYXJjaDonJ31cbiAgICAgICAgaWYgKHN0YXRlLnVybCA9PT0gJycgfHwgc3RhdGUudGl0bGVTZWFyY2hTdHJpbmcgPT09JycpIHJldHVybiB7U2VhcmNoOicnfVxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3N0YXRlLnVybH0vP2FwaWtleT04YmE0N2IxZCZzPSR7c3RhdGUudGl0bGVTZWFyY2hTdHJpbmd9YClcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ganNvblxuXG4gICAgfSlcblxuXG4gICAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlU2VhcmNoU3RyaW5nJykudmFsdWVcbiAgICAgICAgaWYgKHN0YXRlLnVybCA9PT0gJycpIHtcbiAgICAgICAgICAgIHNldFN0YXRlKHt1cmw6J2h0dHBzOi8vd3d3Lm9tZGJhcGkuY29tJyx0aXRsZVNlYXJjaFN0cmluZzpzfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc2V0U3RhdGUoe3VybDonJyx0aXRsZVNlYXJjaFN0cmluZzogc3RhdGUudGl0bGVTZWFyY2hTdHJpbmd9KVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGhlRm9ybSBmaWx0cm89eydGaWx0cm8gZGUgdMOtdHVsbyd9IHVybD17c3RhdGUudXJsfSBhY2FvPXtvbkNsaWNrSGFuZGxlcn0vPlxuICAgICAgICAgICAgPFRoZU1vdmllcyBkYXRhPXtlcnJvcj97ZXJyb3I6J0Vycm8gbmEgcGVzcXVpc2EnfTogZGF0YSA/IGRhdGE6IHtTZWFyY2g6Jyd9IH0gc2hvdz17c3RhdGUudXJsICE9PSAnJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJUaGVGb3JtIiwiZmlsdHJvIiwidXJsIiwiYWNhbyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJkaXYiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJ0eXBlIiwiYXV0b0NvbXBsZXRlIiwiYnV0dG9uIiwidGl0bGVTZWFyY2hTdHJpbmciLCJzcGFuIiwiVGhlTW92aWVzIiwiZGF0YSIsInNob3ciLCJlcnJvciIsIlNlYXJjaCIsIlJlc3BvbnNlIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciIsImltZGJJRCIsIk1vdmllczMzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJlcyIsImpzb24iLCJmZXRjaCIsIm9uQ2xpY2tIYW5kbGVyIiwicyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/receita6/exe2/movies.js\n");

/***/ })

});