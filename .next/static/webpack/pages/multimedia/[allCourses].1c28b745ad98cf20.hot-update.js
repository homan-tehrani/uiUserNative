"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/multimedia/[allCourses]",{

/***/ "./src/components/PointOfViewMultiMedia.js":
/*!*************************************************!*\
  !*** ./src/components/PointOfViewMultiMedia.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PointOfViewMultiMedia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction PointOfViewMultiMedia() {\n    _s();\n    const initialState = {\n        isShowNameActive: false,\n        isShowEmailActive: false,\n        isShowTextArea: false\n    };\n    const isActiveInputReducer = (state, action)=>{\n        switch(action.type){\n            case \"ACTIV_INPUTNAME\":\n                {\n                    const newState = initialState;\n                    newState.isShowNameActive = true;\n                    return newState;\n                }\n            case \"ACTIVE_INPUTEMAIL\":\n                {\n                    const newState = initialState;\n                    newState.isShowEmailActive = true;\n                    return newState;\n                }\n            case \"ACTIVE_TEXTAREA\":\n                {\n                    const newState = initialState;\n                    newState.isShowTextArea = true;\n                    return newState;\n                }\n            default:\n                return state;\n        }\n    };\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(isActiveInputReducer, initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-max bg-neutral-100 py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto h-max \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-4/6 h-max  mx-auto flex flex-col items-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"w-10 fill-cyan-700\",\n                                viewBox: \"0 0 24 24\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M5 11V13H19V11H5Z\"\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 109\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl\",\n                                children: \"دیدگاه شما\"\n                            }, void 0, false, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-max flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full h-max gap-y-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"دیدگاهتان را بنویسید\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"opacity-70\",\n                                        children: \"نشانی ایمیل شما منتشر نخواهد شد\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"w-full h-max   flex flex-col  \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full  h-max flex flex-col gap-y-4 sm:flex-row items-center justify-center sm:gap-x-6 py-5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                                className: \"\".concat(state.isShowNameActive ? \"border-cyan-700\" : \"border-black \", \" border-2 opacity-70 flex items-center justify-center h-16  pr-3 rounded-xl w-full sm:w-1/2\"),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                                        className: \"px-2\",\n                                                        children: \"نام و نام خانوادگی\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 29\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        onFocus: ()=>dispatch({\n                                                                type: \"ACTIV_INPUTNAME\"\n                                                            }),\n                                                        className: \"w-full outline-0 h-full rounded-xl bg-inherit\",\n                                                        type: \"text\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 25\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                                className: \"\".concat(state.isShowEmailActive ? \"border-cyan-700\" : \"border-black\", \" border-2  opacity-70 flex items-center justify-center h-16  pr-3 rounded-xl w-full sm:w-1/2\"),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                                        className: \"px-2\",\n                                                        children: \"ایمیل\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 29\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        onFocus: ()=>dispatch({\n                                                                type: \"ACTIVE_INPUTEMAIL\"\n                                                            }),\n                                                        className: \"w-full outline-0 h-full rounded-xl bg-inherit\",\n                                                        type: \"email\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-max mt-4 flex flex-col gap-y-3 items-end\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                onFocus: ()=>dispatch({\n                                                        type: \"ACTIVE_TEXTAREA\"\n                                                    }),\n                                                className: \" \".concat(state.isShowTextArea ? \"border-cyan-700\" : \"border-black\", \" border h-52 w-full pr-4 pt-2 rounded-xl resize-none outline-none \")\n                                            }, void 0, false, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"border border-stone-300 w-40 h-10 rounded-lg\",\n                                                children: \"ثبت و ارسال\"\n                                            }, void 0, false, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-max bg-red-400 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full flex items-center gap-x-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"دیدگاه\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"w-10 h-8 bg-cyan-700 rounded-md flex items-center justify-center text-white\",\n                                        children: \"32\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full bg-stone-300 h-[1px] \"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-14 h-14 rounded-full bg-red-200\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex flex-col\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"عادل\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 33\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 33\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(PointOfViewMultiMedia, \"qjUz4CWOwcMFnldD0NcOO6c5OA0=\");\n_c = PointOfViewMultiMedia;\nvar _c;\n$RefreshReg$(_c, \"PointOfViewMultiMedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2ludE9mVmlld011bHRpTWVkaWEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUVsQyxTQUFTRyx3QkFBd0I7O0lBQzVDLE1BQU1DLGVBQWM7UUFDaEJDLGtCQUFpQixLQUFLO1FBQ3RCQyxtQkFBa0IsS0FBSztRQUN2QkMsZ0JBQWUsS0FBSztJQUN4QjtJQUlBLE1BQU1DLHVCQUFxQixDQUFDQyxPQUFRQyxTQUFTO1FBRXpDLE9BQU9BLE9BQU9DLElBQUk7WUFFZCxLQUFLO2dCQUFtQjtvQkFDcEIsTUFBTUMsV0FBVVI7b0JBQ2hCUSxTQUFTUCxnQkFBZ0IsR0FBQyxJQUFJO29CQUU5QixPQUFPTztnQkFDWDtZQUVBLEtBQUs7Z0JBQW9CO29CQUNyQixNQUFNQSxXQUFVUjtvQkFDaEJRLFNBQVNOLGlCQUFpQixHQUFDLElBQUk7b0JBRS9CLE9BQU9NO2dCQUNYO1lBRUEsS0FBSztnQkFBa0I7b0JBQ25CLE1BQU1BLFdBQVVSO29CQUNoQlEsU0FBU0wsY0FBYyxHQUFDLElBQUk7b0JBRTVCLE9BQU9LO2dCQUNYO1lBRUE7Z0JBQVUsT0FBT0g7UUFDckI7SUFFSjtJQUVBLE1BQU0sQ0FBQ0EsT0FBUUksU0FBUyxHQUFDWCxpREFBVUEsQ0FBQ00sc0JBQXVCSjtJQUk3RCxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUNDO2dDQUFJQyxPQUFNO2dDQUE2QkYsV0FBVTtnQ0FBcUJHLFNBQVE7MENBQWEsNEVBQUNDO29DQUFLQyxHQUFFOzs7Ozs7Ozs7OzswQ0FDaEcsOERBQUNDO2dDQUFHTixXQUFVOzBDQUFVOzs7Ozs7Ozs7Ozs7a0NBRTVCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDZiw4REFBQ087a0RBQUU7Ozs7OztrREFDSCw4REFBQ0E7d0NBQUVQLFdBQVU7a0RBQWE7Ozs7Ozs7Ozs7OzswQ0FHMUIsOERBQUNRO2dDQUFLUixXQUFVOztrREFDWiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNmLDhEQUFDUztnREFBVVQsV0FBVyxHQUFnRSxPQUE3RE4sTUFBTUosZ0JBQWdCLEdBQUcsb0JBQW9CLGVBQWUsRUFBQzs7a0VBQ2xGLDhEQUFDb0I7d0RBQU9WLFdBQVU7a0VBQU87Ozs7OztrRUFDekIsOERBQUNXO3dEQUFPQyxTQUFTLElBQUlkLFNBQVM7Z0VBQUNGLE1BQUs7NERBQWlCO3dEQUFJSSxXQUFVO3dEQUFnREosTUFBSzs7Ozs7Ozs7Ozs7OzBEQUc1SCw4REFBQ2E7Z0RBQVNULFdBQVcsR0FBZ0UsT0FBN0ROLE1BQU1ILGlCQUFpQixHQUFHLG9CQUFvQixjQUFjLEVBQUM7O2tFQUNqRiw4REFBQ21CO3dEQUFPVixXQUFVO2tFQUFPOzs7Ozs7a0VBQ3pCLDhEQUFDVzt3REFBTUMsU0FBUyxJQUFJZCxTQUFTO2dFQUFDRixNQUFLOzREQUFtQjt3REFBSUksV0FBVTt3REFBZ0RKLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFJN0gsOERBQUNHO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ2E7Z0RBQVNELFNBQVMsSUFBSWQsU0FBUzt3REFBQ0YsTUFBTTtvREFBaUI7Z0RBQUlJLFdBQVcsSUFBOEQsT0FBMUROLE1BQU1GLGNBQWMsR0FBRyxvQkFBb0IsY0FBYyxFQUFDOzs7Ozs7MERBQ3JJLDhEQUFDc0I7Z0RBQU9kLFdBQVU7MERBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTzdFLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDZiw4REFBQ087a0RBQUU7Ozs7OztrREFDSCw4REFBQ1E7d0NBQUtmLFdBQVU7a0RBQThFOzs7Ozs7a0RBQzlGLDhEQUFDRDt3Q0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7OzBDQUdmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVOzs7Ozs7a0RBQ2YsOERBQUNEOzswREFDRyw4REFBQ0E7Z0RBQUlDLFdBQVU7O2tFQUNYLDhEQUFDTztrRUFBRTs7Ozs7O2tFQUNILDhEQUFDQTs7Ozs7Ozs7Ozs7MERBRUwsOERBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXN0IsQ0FBQztHQXhHdUJYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BvaW50T2ZWaWV3TXVsdGlNZWRpYS5qcz8xMjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUgLCB1c2VSZWR1Y2VyfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2ludE9mVmlld011bHRpTWVkaWEoKSB7XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID17XG4gICAgICAgIGlzU2hvd05hbWVBY3RpdmU6ZmFsc2UsXG4gICAgICAgIGlzU2hvd0VtYWlsQWN0aXZlOmZhbHNlLFxuICAgICAgICBpc1Nob3dUZXh0QXJlYTpmYWxzZVxuICAgIH1cbiAgICAgICBcbiAgICBcblxuICAgIGNvbnN0IGlzQWN0aXZlSW5wdXRSZWR1Y2VyPShzdGF0ZSAsIGFjdGlvbik9PntcblxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuXG4gICAgICAgICAgICBjYXNlIFwiQUNUSVZfSU5QVVROQU1FXCI6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZT0gaW5pdGlhbFN0YXRlXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuaXNTaG93TmFtZUFjdGl2ZT10cnVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgXCJBQ1RJVkVfSU5QVVRFTUFJTFwiOntcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZT0gaW5pdGlhbFN0YXRlXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuaXNTaG93RW1haWxBY3RpdmU9dHJ1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIFwiQUNUSVZFX1RFWFRBUkVBXCI6e1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlPSBpbml0aWFsU3RhdGVcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5pc1Nob3dUZXh0QXJlYT10cnVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQgOiByZXR1cm4gc3RhdGVcbiAgICAgICAgfVxuXG4gICAgfVxuICAgXG4gICAgY29uc3QgW3N0YXRlICwgZGlzcGF0Y2hdPXVzZVJlZHVjZXIoaXNBY3RpdmVJbnB1dFJlZHVjZXIgLCBpbml0aWFsU3RhdGUpXG5cbiAgICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1tYXggYmctbmV1dHJhbC0xMDAgcHktMjAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG14LWF1dG8gaC1tYXggJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQvNiBoLW1heCAgbXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciAnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPSd3LTEwIGZpbGwtY3lhbi03MDAnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiA+PHBhdGggZD1cIk01IDExVjEzSDE5VjExSDVaXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhsJz7Yr9uM2K/ar9in2Ycg2LTZhdinPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtbWF4IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy1mdWxsIGgtbWF4IGdhcC15LTMnPlxuICAgICAgICAgICAgICAgICAgICA8cD7Yr9uM2K/ar9in2YfYqtin2YYg2LHYpyDYqNmG2YjbjNiz24zYrzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvcGFjaXR5LTcwJz7Zhti02KfZhtuMINin24zZhduM2YQg2LTZhdinINmF2YbYqti02LEg2YbYrtmI2KfZh9ivINi02K88L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSd3LWZ1bGwgaC1tYXggICBmbGV4IGZsZXgtY29sICAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCAgaC1tYXggZmxleCBmbGV4LWNvbCBnYXAteS00IHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzbTpnYXAteC02IHB5LTUnID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCAgY2xhc3NOYW1lPXtgJHtzdGF0ZS5pc1Nob3dOYW1lQWN0aXZlID8gJ2JvcmRlci1jeWFuLTcwMCcgOiAnYm9yZGVyLWJsYWNrICd9IGJvcmRlci0yIG9wYWNpdHktNzAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xNiAgcHItMyByb3VuZGVkLXhsIHctZnVsbCBzbTp3LTEvMmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPSdweC0yJz7Zhtin2YUg2Ygg2YbYp9mFINiu2KfZhtmI2KfYr9qv24w8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIG9uRm9jdXM9eygpPT5kaXNwYXRjaCh7dHlwZTpcIkFDVElWX0lOUFVUTkFNRVwifSl9IGNsYXNzTmFtZT0ndy1mdWxsIG91dGxpbmUtMCBoLWZ1bGwgcm91bmRlZC14bCBiZy1pbmhlcml0JyB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPXtgJHtzdGF0ZS5pc1Nob3dFbWFpbEFjdGl2ZSA/ICdib3JkZXItY3lhbi03MDAnIDogJ2JvcmRlci1ibGFjayd9IGJvcmRlci0yICBvcGFjaXR5LTcwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTYgIHByLTMgcm91bmRlZC14bCB3LWZ1bGwgc206dy0xLzJgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT0ncHgtMic+2KfbjNmF24zZhDwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXsoKT0+ZGlzcGF0Y2goe3R5cGU6XCJBQ1RJVkVfSU5QVVRFTUFJTFwifSl9IGNsYXNzTmFtZT0ndy1mdWxsIG91dGxpbmUtMCBoLWZ1bGwgcm91bmRlZC14bCBiZy1pbmhlcml0JyB0eXBlPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtbWF4IG10LTQgZmxleCBmbGV4LWNvbCBnYXAteS0zIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG9uRm9jdXM9eygpPT5kaXNwYXRjaCh7dHlwZTogXCJBQ1RJVkVfVEVYVEFSRUFcIn0pfSBjbGFzc05hbWU9e2AgJHtzdGF0ZS5pc1Nob3dUZXh0QXJlYSA/ICdib3JkZXItY3lhbi03MDAnIDogJ2JvcmRlci1ibGFjayd9IGJvcmRlciBoLTUyIHctZnVsbCBwci00IHB0LTIgcm91bmRlZC14bCByZXNpemUtbm9uZSBvdXRsaW5lLW5vbmUgYH0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1zdG9uZS0zMDAgdy00MCBoLTEwIHJvdW5kZWQtbGcnPtir2KjYqiDZiCDYp9ix2LPYp9mEPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtbWF4IGJnLXJlZC00MDAgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPtiv24zYr9qv2KfZhzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xMCBoLTggYmctY3lhbi03MDAgcm91bmRlZC1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlXCI+MzI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXN0b25lLTMwMCBoLVsxcHhdIFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTQgaC0xNCByb3VuZGVkLWZ1bGwgYmctcmVkLTIwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+2LnYp9iv2YQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZHVjZXIiLCJQb2ludE9mVmlld011bHRpTWVkaWEiLCJpbml0aWFsU3RhdGUiLCJpc1Nob3dOYW1lQWN0aXZlIiwiaXNTaG93RW1haWxBY3RpdmUiLCJpc1Nob3dUZXh0QXJlYSIsImlzQWN0aXZlSW5wdXRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3U3RhdGUiLCJkaXNwYXRjaCIsImRpdiIsImNsYXNzTmFtZSIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsInBhdGgiLCJkIiwiaDIiLCJwIiwiZm9ybSIsImZpZWxkc2V0IiwibGVnZW5kIiwiaW5wdXQiLCJvbkZvY3VzIiwidGV4dGFyZWEiLCJidXR0b24iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PointOfViewMultiMedia.js\n"));

/***/ })

});