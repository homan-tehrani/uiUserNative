"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Suggestion.js":
/*!**************************************!*\
  !*** ./src/components/Suggestion.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Suggestion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading */ \"./src/components/loading.js\");\n/* harmony import */ var _src_db_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/db.json */ \"./src/db.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Suggestion() {\n    _s();\n    const [suggestionPhoto, setSuggestionPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSuggestionPhoto(_src_db_json__WEBPACK_IMPORTED_MODULE_3__.lecturePhoto);\n    }, []);\n    if (!suggestionPhoto) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n            lineNumber: 14,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center w-10/12  mx-auto h-max gap-y-14 my-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-bold\",\n                children: \"مطالب مناسب شما\"\n            }, void 0, false, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-max  flex justify-between  items-center flex-wrap gap-y-6\",\n                children: suggestionPhoto.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-400px  h-full \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-80\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.src,\n                                    alt: item.alt,\n                                    className: \"w-full h-full \"\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 14\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                lineNumber: 23,\n                                columnNumber: 14\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-40 bg-neutral-100 flex flex-col justify-between p-2 border\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center gap-x-2 \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                viewBox: \"0 0 24 24\",\n                                                width: \"24\",\n                                                height: \"24\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        fill: \"none\",\n                                                        d: \"M0 0h24v24H0z\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                        lineNumber: 29,\n                                                        columnNumber: 101\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                        lineNumber: 29,\n                                                        columnNumber: 138\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                lineNumber: 29,\n                                                columnNumber: 18\n                                            }, this),\n                                            \"ویدیو استاد\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 14\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-center\",\n                                        children: \"مطالب این وب گاه با هدف روشنگری برای شما تهیه و تدوین شده\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 18\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-between items-center opacity-70 text-sm\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center justify-center gap-x-1\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                                        viewBox: \"0 0 24 24\",\n                                                        width: \"20\",\n                                                        height: \"20\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                fill: \"none\",\n                                                                d: \"M0 0h24v24H0z\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                                lineNumber: 38,\n                                                                columnNumber: 105\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                d: \"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                                lineNumber: 38,\n                                                                columnNumber: 142\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                        lineNumber: 38,\n                                                        columnNumber: 22\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"29/04/1401\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                        lineNumber: 39,\n                                                        columnNumber: 22\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 22\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center justify-center gap-x-1\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                                        viewBox: \"0 0 24 24\",\n                                                        width: \"20\",\n                                                        height: \"20\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                fill: \"none\",\n                                                                d: \"M0 0h24v24H0z\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                                lineNumber: 44,\n                                                                columnNumber: 105\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                d: \"M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                                lineNumber: 44,\n                                                                columnNumber: 142\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                        lineNumber: 44,\n                                                        columnNumber: 22\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"مهدویت\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 22\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 22\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center justify-center gap-x-1\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                                        viewBox: \"0 0 24 24\",\n                                                        width: \"20\",\n                                                        height: \"20\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                fill: \"none\",\n                                                                d: \"M0 0h24v24H0z\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                                lineNumber: 49,\n                                                                columnNumber: 105\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                d: \"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                                lineNumber: 49,\n                                                                columnNumber: 142\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 22\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"۱ ساعت و ۱۰ دقیقه\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 22\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 22\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 20\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                                lineNumber: 26,\n                                columnNumber: 14\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                        lineNumber: 22,\n                        columnNumber: 14\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Suggestion.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Suggestion, \"KLZsgNTbB4D7R39GlPrQlitM/Ws=\");\n_c = Suggestion;\nvar _c;\n$RefreshReg$(_c, \"Suggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWdnZXN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNqQjtBQUNlO0FBRS9CLFNBQVNLLGFBQWE7O0lBR2pDLE1BQU0sQ0FBQ0MsaUJBQWtCQyxtQkFBbUIsR0FBR04sK0NBQVFBLENBQUMsSUFBSTtJQUM1REMsZ0RBQVNBLENBQUMsSUFBSTtRQUNWSyxtQkFBbUJILHNEQUFZQTtJQUNuQyxHQUFFLEVBQUU7SUFFSixJQUFHLENBQUNFLGlCQUFnQjtRQUNoQixxQkFBTyw4REFBQ0gsZ0RBQU9BOzs7OztJQUNuQixDQUFDO0lBRUgscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBb0I7Ozs7OzswQkFDbEMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYSCxnQkFBZ0JLLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ25CLDhEQUFDSjt3QkFBa0JDLFdBQVU7OzBDQUM3Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2YsNEVBQUNJO29DQUFJQyxLQUFLRixLQUFLRSxHQUFHO29DQUFFQyxLQUFLSCxLQUFLRyxHQUFHO29DQUFFTixXQUFVOzs7Ozs7Ozs7OzswQ0FFN0MsOERBQUNEO2dDQUFJQyxXQUFVOztrREFFZiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNYLDhEQUFDTztnREFBSUMsT0FBTTtnREFBNkJDLFNBQVE7Z0RBQVlDLE9BQU07Z0RBQUtDLFFBQU87O2tFQUFLLDhEQUFDQzt3REFBS0MsTUFBSzt3REFBT0MsR0FBRTs7Ozs7O2tFQUFpQiw4REFBQ0Y7d0RBQUtFLEdBQUU7Ozs7Ozs7Ozs7Ozs0Q0FBK1A7Ozs7Ozs7a0RBSS9YLDhEQUFDQzt3Q0FBRWYsV0FBVTtrREFBc0I7Ozs7OztrREFFakMsOERBQUNEO3dDQUFJQyxXQUFVOzswREFFYiw4REFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQUNmLDhEQUFDTzt3REFBSUMsT0FBTTt3REFBNkJDLFNBQVE7d0RBQVlDLE9BQU07d0RBQUtDLFFBQU87OzBFQUFLLDhEQUFDQztnRUFBS0MsTUFBSztnRUFBT0MsR0FBRTs7Ozs7OzBFQUFpQiw4REFBQ0Y7Z0VBQUtFLEdBQUU7Ozs7Ozs7Ozs7OztrRUFDaEksOERBQUNDO2tFQUFFOzs7Ozs7Ozs7Ozs7MERBSUgsOERBQUNoQjtnREFBSUMsV0FBVTs7a0VBQ2YsOERBQUNPO3dEQUFJQyxPQUFNO3dEQUE2QkMsU0FBUTt3REFBWUMsT0FBTTt3REFBS0MsUUFBTzs7MEVBQUssOERBQUNDO2dFQUFLQyxNQUFLO2dFQUFPQyxHQUFFOzs7Ozs7MEVBQWlCLDhEQUFDRjtnRUFBS0UsR0FBRTs7Ozs7Ozs7Ozs7O2tFQUNoSSw4REFBQ0M7a0VBQUU7Ozs7Ozs7Ozs7OzswREFHSCw4REFBQ2hCO2dEQUFJQyxXQUFVOztrRUFDZiw4REFBQ087d0RBQUlDLE9BQU07d0RBQTZCQyxTQUFRO3dEQUFZQyxPQUFNO3dEQUFLQyxRQUFPOzswRUFBSyw4REFBQ0M7Z0VBQUtDLE1BQUs7Z0VBQU9DLEdBQUU7Ozs7OzswRUFBaUIsOERBQUNGO2dFQUFLRSxHQUFFOzs7Ozs7Ozs7Ozs7a0VBQ2hJLDhEQUFDQztrRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkE1QkRaLEtBQUthLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRDlCLENBQUM7R0FqRXVCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3VnZ2VzdGlvbi5qcz9jNGVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUgLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9sb2FkaW5nJ1xuaW1wb3J0IHtsZWN0dXJlUGhvdG99IGZyb20gXCIuLi8uLi9zcmMvZGIuanNvblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Z2dlc3Rpb24oKSB7XG4gICAgXG5cbiAgICBjb25zdCBbc3VnZ2VzdGlvblBob3RvICwgc2V0U3VnZ2VzdGlvblBob3RvXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHNldFN1Z2dlc3Rpb25QaG90byhsZWN0dXJlUGhvdG8pXG4gICAgfSxbXSlcblxuICAgIGlmKCFzdWdnZXN0aW9uUGhvdG8pe1xuICAgICAgICByZXR1cm4gPExvYWRpbmcvPlxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTEwLzEyICBteC1hdXRvIGgtbWF4IGdhcC15LTE0IG15LTI0Jz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LWJvbGQnPtmF2LfYp9mE2Kgg2YXZhtin2LPYqCDYtNmF2Kc8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtbWF4ICBmbGV4IGp1c3RpZnktYmV0d2VlbiAgaXRlbXMtY2VudGVyIGZsZXgtd3JhcCBnYXAteS02Jz5cbiAgICAgICAgICAge3N1Z2dlc3Rpb25QaG90by5tYXAoaXRlbT0+XG4gICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT0ndy00MDBweCAgaC1mdWxsICc+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLTgwJz5cbiAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zcmN9IGFsdD17aXRlbS5hbHR9IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCAnLz5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtNDAgYmctbmV1dHJhbC0xMDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gcC0yIGJvcmRlcic+XG5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTIgXCI+XG4gICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIvPjxwYXRoIGQ9XCJNMTIgMjBoOHYyaC04QzYuNDc3IDIyIDIgMTcuNTIzIDIgMTJTNi40NzcgMiAxMiAyczEwIDQuNDc3IDEwIDEwYTkuOTU2IDkuOTU2IDAgMCAxLTIgNmgtMi43MDhBOCA4IDAgMSAwIDEyIDIwem0wLTEwYTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptLTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTggMGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bS00IDRhMiAyIDAgMSAxIDAtNCAyIDIgMCAwIDEgMCA0elwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgINmI24zYr9uM2Ygg2KfYs9iq2KfYr1xuICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1jZW50ZXInPtmF2LfYp9mE2Kgg2KfbjNmGINmI2Kgg2q/Yp9mHINio2Kcg2YfYr9mBINix2YjYtNmG2q/YsduMINio2LHYp9uMINi02YXYpyDYqtmH24zZhyDZiCDYqtiv2YjbjNmGINi02K/ZhzwvcD5cblxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG9wYWNpdHktNzAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC14LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIj48cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIvPjxwYXRoIGQ9XCJNMTcgM2g0YTEgMSAwIDAgMSAxIDF2MTZhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xaDRWMWgydjJoNlYxaDJ2MnptMyA4SDR2OGgxNnYtOHptLTUtNkg5djJIN1Y1SDR2NGgxNlY1aC0zdjJoLTJWNXptLTkgOGgydjJINnYtMnptNSAwaDJ2MmgtMnYtMnptNSAwaDJ2MmgtMnYtMnpcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICA8cD4yOS8wNC8xNDAxPC9wPlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICBcbiBcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPjxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIi8+PHBhdGggZD1cIk0zIDE4LjVWNWEzIDMgMCAwIDEgMy0zaDE0YTEgMSAwIDAgMSAxIDF2MThhMSAxIDAgMCAxLTEgMUg2LjVBMy41IDMuNSAwIDAgMSAzIDE4LjV6TTE5IDIwdi0zSDYuNWExLjUgMS41IDAgMCAwIDAgM0gxOXpNNSAxNS4zMzdBMy40ODYgMy40ODYgMCAwIDEgNi41IDE1SDE5VjRINmExIDEgMCAwIDAtMSAxdjEwLjMzN3pcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICA8cD7ZhdmH2K/ZiNuM2Ko8L3A+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiBcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPjxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIi8+PHBhdGggZD1cIk0xMiAyMkM2LjQ3NyAyMiAyIDE3LjUyMyAyIDEyUzYuNDc3IDIgMTIgMnMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHptMC0yYTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2em0xLThoNHYyaC02VjdoMnY1elwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgIDxwPtuxINiz2KfYudiqINmIINux27Ag2K/ZgtuM2YLZhzwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuIFxuICAgICAgICAgICAgICAgICAgICAgXG4gXG4gXG4gXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKX0gXG4gICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxvYWRpbmciLCJsZWN0dXJlUGhvdG8iLCJTdWdnZXN0aW9uIiwic3VnZ2VzdGlvblBob3RvIiwic2V0U3VnZ2VzdGlvblBob3RvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJtYXAiLCJpdGVtIiwiaW1nIiwic3JjIiwiYWx0Iiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94Iiwid2lkdGgiLCJoZWlnaHQiLCJwYXRoIiwiZmlsbCIsImQiLCJwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Suggestion.js\n"));

/***/ })

});