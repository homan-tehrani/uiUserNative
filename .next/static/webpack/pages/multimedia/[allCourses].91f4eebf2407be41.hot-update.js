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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PointOfViewMultiMedia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction PointOfViewMultiMedia() {\n    _s();\n    const initialState = {\n        isShowNameActive: false,\n        isShowEmailActive: false,\n        isShowTextArea: false\n    };\n    const isActiveInputReducer = (state, action)=>{\n        switch(action.type){\n            case \"ACTIV_INPUTNAME\":\n                {\n                    const newState = initialState;\n                    newState.isShowNameActive = true;\n                    return newState;\n                }\n            case \"ACTIVE_INPUTEMAIL\":\n                {\n                    const newState = initialState;\n                    newState.isShowEmailActive = true;\n                    return newState;\n                }\n            case \"ACTIVE_TEXTAREA\":\n                {\n                    const newState = initialState;\n                    newState.isShowTextArea = true;\n                    return newState;\n                }\n            default:\n                return state;\n        }\n    };\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(isActiveInputReducer, initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-max bg-neutral-100 py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto h-max \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-4/6 h-max  mx-auto flex flex-col items-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"w-10 fill-cyan-700\",\n                                viewBox: \"0 0 24 24\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M5 11V13H19V11H5Z\"\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 109\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl\",\n                                children: \"دیدگاه شما\"\n                            }, void 0, false, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-max flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full h-max gap-y-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"دیدگاهتان را بنویسید\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"opacity-70\",\n                                        children: \"نشانی ایمیل شما منتشر نخواهد شد\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"w-full h-max   flex flex-col  \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full  h-max flex flex-col gap-y-4 sm:flex-row items-center justify-center sm:gap-x-6 py-5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                                className: \"\".concat(state.isShowNameActive ? \"border-cyan-700\" : \"border-black \", \" border-2 opacity-70 flex items-center justify-center h-16  pr-3 rounded-xl w-full sm:w-1/2\"),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                                        className: \"px-2\",\n                                                        children: \"نام و نام خانوادگی\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 29\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        onFocus: ()=>dispatch({\n                                                                type: \"ACTIV_INPUTNAME\"\n                                                            }),\n                                                        className: \"w-full outline-0 h-full rounded-xl bg-inherit\",\n                                                        type: \"text\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 25\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                                className: \"\".concat(state.isShowEmailActive ? \"border-cyan-700\" : \"border-black\", \" border-2  opacity-70 flex items-center justify-center h-16  pr-3 rounded-xl w-full sm:w-1/2\"),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                                        className: \"px-2\",\n                                                        children: \"ایمیل\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 29\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        onFocus: ()=>dispatch({\n                                                                type: \"ACTIVE_INPUTEMAIL\"\n                                                            }),\n                                                        className: \"w-full outline-0 h-full rounded-xl bg-inherit\",\n                                                        type: \"email\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-max mt-4 flex flex-col gap-y-3 items-end\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                onFocus: ()=>dispatch({\n                                                        type: \"ACTIVE_TEXTAREA\"\n                                                    }),\n                                                className: \" \".concat(state.isShowTextArea ? \"border-cyan-700\" : \"border-black\", \" border h-52 w-full pr-4 pt-2 rounded-xl resize-none outline-none \")\n                                            }, void 0, false, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"border border-stone-300 w-40 h-10 rounded-lg\",\n                                                children: \"ثبت و ارسال\"\n                                            }, void 0, false, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-max bg-red-200 mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex items-center \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"دیدگاه\"\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"w-10 h-10 bg-cyan-700 rounded-md\"\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(PointOfViewMultiMedia, \"qjUz4CWOwcMFnldD0NcOO6c5OA0=\");\n_c = PointOfViewMultiMedia;\nvar _c;\n$RefreshReg$(_c, \"PointOfViewMultiMedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2ludE9mVmlld011bHRpTWVkaWEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUVsQyxTQUFTRyx3QkFBd0I7O0lBQzVDLE1BQU1DLGVBQWM7UUFDaEJDLGtCQUFpQixLQUFLO1FBQ3RCQyxtQkFBa0IsS0FBSztRQUN2QkMsZ0JBQWUsS0FBSztJQUN4QjtJQUlBLE1BQU1DLHVCQUFxQixDQUFDQyxPQUFRQyxTQUFTO1FBRXpDLE9BQU9BLE9BQU9DLElBQUk7WUFFZCxLQUFLO2dCQUFtQjtvQkFDcEIsTUFBTUMsV0FBVVI7b0JBQ2hCUSxTQUFTUCxnQkFBZ0IsR0FBQyxJQUFJO29CQUU5QixPQUFPTztnQkFDWDtZQUVBLEtBQUs7Z0JBQW9CO29CQUNyQixNQUFNQSxXQUFVUjtvQkFDaEJRLFNBQVNOLGlCQUFpQixHQUFDLElBQUk7b0JBRS9CLE9BQU9NO2dCQUNYO1lBRUEsS0FBSztnQkFBa0I7b0JBQ25CLE1BQU1BLFdBQVVSO29CQUNoQlEsU0FBU0wsY0FBYyxHQUFDLElBQUk7b0JBRTVCLE9BQU9LO2dCQUNYO1lBRUE7Z0JBQVUsT0FBT0g7UUFDckI7SUFFSjtJQUVBLE1BQU0sQ0FBQ0EsT0FBUUksU0FBUyxHQUFDWCxpREFBVUEsQ0FBQ00sc0JBQXVCSjtJQUk3RCxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUNDO2dDQUFJQyxPQUFNO2dDQUE2QkYsV0FBVTtnQ0FBcUJHLFNBQVE7MENBQWEsNEVBQUNDO29DQUFLQyxHQUFFOzs7Ozs7Ozs7OzswQ0FDaEcsOERBQUNDO2dDQUFHTixXQUFVOzBDQUFVOzs7Ozs7Ozs7Ozs7a0NBRTVCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDZiw4REFBQ087a0RBQUU7Ozs7OztrREFDSCw4REFBQ0E7d0NBQUVQLFdBQVU7a0RBQWE7Ozs7Ozs7Ozs7OzswQ0FHMUIsOERBQUNRO2dDQUFLUixXQUFVOztrREFDWiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNmLDhEQUFDUztnREFBVVQsV0FBVyxHQUFnRSxPQUE3RE4sTUFBTUosZ0JBQWdCLEdBQUcsb0JBQW9CLGVBQWUsRUFBQzs7a0VBQ2xGLDhEQUFDb0I7d0RBQU9WLFdBQVU7a0VBQU87Ozs7OztrRUFDekIsOERBQUNXO3dEQUFPQyxTQUFTLElBQUlkLFNBQVM7Z0VBQUNGLE1BQUs7NERBQWlCO3dEQUFJSSxXQUFVO3dEQUFnREosTUFBSzs7Ozs7Ozs7Ozs7OzBEQUc1SCw4REFBQ2E7Z0RBQVNULFdBQVcsR0FBZ0UsT0FBN0ROLE1BQU1ILGlCQUFpQixHQUFHLG9CQUFvQixjQUFjLEVBQUM7O2tFQUNqRiw4REFBQ21CO3dEQUFPVixXQUFVO2tFQUFPOzs7Ozs7a0VBQ3pCLDhEQUFDVzt3REFBTUMsU0FBUyxJQUFJZCxTQUFTO2dFQUFDRixNQUFLOzREQUFtQjt3REFBSUksV0FBVTt3REFBZ0RKLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFJN0gsOERBQUNHO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ2E7Z0RBQVNELFNBQVMsSUFBSWQsU0FBUzt3REFBQ0YsTUFBTTtvREFBaUI7Z0RBQUlJLFdBQVcsSUFBOEQsT0FBMUROLE1BQU1GLGNBQWMsR0FBRyxvQkFBb0IsY0FBYyxFQUFDOzs7Ozs7MERBQ3JJLDhEQUFDc0I7Z0RBQU9kLFdBQVU7MERBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTzdFLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNmLDhEQUFDTzs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDUTtvQ0FBS2YsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXBDLENBQUM7R0E1RnVCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb2ludE9mVmlld011bHRpTWVkaWEuanM/MTIwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlICwgdXNlUmVkdWNlcn0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9pbnRPZlZpZXdNdWx0aU1lZGlhKCkge1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9e1xuICAgICAgICBpc1Nob3dOYW1lQWN0aXZlOmZhbHNlLFxuICAgICAgICBpc1Nob3dFbWFpbEFjdGl2ZTpmYWxzZSxcbiAgICAgICAgaXNTaG93VGV4dEFyZWE6ZmFsc2VcbiAgICB9XG4gICAgICAgXG4gICAgXG5cbiAgICBjb25zdCBpc0FjdGl2ZUlucHV0UmVkdWNlcj0oc3RhdGUgLCBhY3Rpb24pPT57XG5cbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcblxuICAgICAgICAgICAgY2FzZSBcIkFDVElWX0lOUFVUTkFNRVwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhdGU9IGluaXRpYWxTdGF0ZVxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLmlzU2hvd05hbWVBY3RpdmU9dHJ1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIFwiQUNUSVZFX0lOUFVURU1BSUxcIjp7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhdGU9IGluaXRpYWxTdGF0ZVxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLmlzU2hvd0VtYWlsQWN0aXZlPXRydWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBcIkFDVElWRV9URVhUQVJFQVwiOntcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZT0gaW5pdGlhbFN0YXRlXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuaXNTaG93VGV4dEFyZWE9dHJ1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWZhdWx0IDogcmV0dXJuIHN0YXRlXG4gICAgICAgIH1cblxuICAgIH1cbiAgIFxuICAgIGNvbnN0IFtzdGF0ZSAsIGRpc3BhdGNoXT11c2VSZWR1Y2VyKGlzQWN0aXZlSW5wdXRSZWR1Y2VyICwgaW5pdGlhbFN0YXRlKVxuXG4gICAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtbWF4IGJnLW5ldXRyYWwtMTAwIHB5LTIwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBteC1hdXRvIGgtbWF4ICc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy00LzYgaC1tYXggIG14LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT0ndy0xMCBmaWxsLWN5YW4tNzAwJyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgPjxwYXRoIGQ9XCJNNSAxMVYxM0gxOVYxMUg1WlwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14bCc+2K/bjNiv2q/Yp9mHINi02YXYpzwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLW1heCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctZnVsbCBoLW1heCBnYXAteS0zJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+2K/bjNiv2q/Yp9mH2KrYp9mGINix2Kcg2KjZhtmI24zYs9uM2K88L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3BhY2l0eS03MCc+2YbYtNin2YbbjCDYp9uM2YXbjNmEINi02YXYpyDZhdmG2KrYtNixINmG2K7ZiNin2YfYryDYtNivPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0ndy1mdWxsIGgtbWF4ICAgZmxleCBmbGV4LWNvbCAgJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgIGgtbWF4IGZsZXggZmxleC1jb2wgZ2FwLXktNCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc206Z2FwLXgtNiBweS01JyA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgIGNsYXNzTmFtZT17YCR7c3RhdGUuaXNTaG93TmFtZUFjdGl2ZSA/ICdib3JkZXItY3lhbi03MDAnIDogJ2JvcmRlci1ibGFjayAnfSBib3JkZXItMiBvcGFjaXR5LTcwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTYgIHByLTMgcm91bmRlZC14bCB3LWZ1bGwgc206dy0xLzJgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT0ncHgtMic+2YbYp9mFINmIINmG2KfZhSDYrtin2YbZiNin2K/ar9uMPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBvbkZvY3VzPXsoKT0+ZGlzcGF0Y2goe3R5cGU6XCJBQ1RJVl9JTlBVVE5BTUVcIn0pfSBjbGFzc05hbWU9J3ctZnVsbCBvdXRsaW5lLTAgaC1mdWxsIHJvdW5kZWQteGwgYmctaW5oZXJpdCcgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17YCR7c3RhdGUuaXNTaG93RW1haWxBY3RpdmUgPyAnYm9yZGVyLWN5YW4tNzAwJyA6ICdib3JkZXItYmxhY2snfSBib3JkZXItMiAgb3BhY2l0eS03MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTE2ICBwci0zIHJvdW5kZWQteGwgdy1mdWxsIHNtOnctMS8yYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J3B4LTInPtin24zZhduM2YQ8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17KCk9PmRpc3BhdGNoKHt0eXBlOlwiQUNUSVZFX0lOUFVURU1BSUxcIn0pfSBjbGFzc05hbWU9J3ctZnVsbCBvdXRsaW5lLTAgaC1mdWxsIHJvdW5kZWQteGwgYmctaW5oZXJpdCcgdHlwZT1cImVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLW1heCBtdC00IGZsZXggZmxleC1jb2wgZ2FwLXktMyBpdGVtcy1lbmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBvbkZvY3VzPXsoKT0+ZGlzcGF0Y2goe3R5cGU6IFwiQUNUSVZFX1RFWFRBUkVBXCJ9KX0gY2xhc3NOYW1lPXtgICR7c3RhdGUuaXNTaG93VGV4dEFyZWEgPyAnYm9yZGVyLWN5YW4tNzAwJyA6ICdib3JkZXItYmxhY2snfSBib3JkZXIgaC01MiB3LWZ1bGwgcHItNCBwdC0yIHJvdW5kZWQteGwgcmVzaXplLW5vbmUgb3V0bGluZS1ub25lIGB9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JvcmRlciBib3JkZXItc3RvbmUtMzAwIHctNDAgaC0xMCByb3VuZGVkLWxnJz7Yq9io2Kog2Ygg2KfYsdiz2KfZhDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLW1heCBiZy1yZWQtMjAwIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPtiv24zYr9qv2KfZhzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xMCBoLTEwIGJnLWN5YW4tNzAwIHJvdW5kZWQtbWRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZHVjZXIiLCJQb2ludE9mVmlld011bHRpTWVkaWEiLCJpbml0aWFsU3RhdGUiLCJpc1Nob3dOYW1lQWN0aXZlIiwiaXNTaG93RW1haWxBY3RpdmUiLCJpc1Nob3dUZXh0QXJlYSIsImlzQWN0aXZlSW5wdXRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3U3RhdGUiLCJkaXNwYXRjaCIsImRpdiIsImNsYXNzTmFtZSIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsInBhdGgiLCJkIiwiaDIiLCJwIiwiZm9ybSIsImZpZWxkc2V0IiwibGVnZW5kIiwiaW5wdXQiLCJvbkZvY3VzIiwidGV4dGFyZWEiLCJidXR0b24iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PointOfViewMultiMedia.js\n"));

/***/ })

});