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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PointOfViewMultiMedia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction PointOfViewMultiMedia() {\n    _s();\n    const initialState = {\n        isShowNameActive: false,\n        isShowEmailActive: false,\n        isShowTextArea: false\n    };\n    const isActiveInputReducer = (state, action)=>{\n        switch(action.type){\n            case \"ACTIV_INPUTNAME\":\n                {\n                    const newState = initialState;\n                    newState.isShowNameActive = true;\n                    return newState;\n                }\n            case \"ACTIVE_INPUTEMAIL\":\n                {\n                    const newState = initialState;\n                    newState.isShowEmailActive = true;\n                    return newState;\n                }\n            case \"ACTIVE_TEXTAREA\":\n                {\n                    const newState = initialState;\n                    newState.isShowTextArea = true;\n                    return newState;\n                }\n            default:\n                return state;\n        }\n    };\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(isActiveInputReducer, initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-max bg-neutral-100 py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto h-max \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-4/6 h-max  mx-auto flex flex-col items-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"w-10 fill-cyan-700\",\n                                viewBox: \"0 0 24 24\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M5 11V13H19V11H5Z\"\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 109\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl\",\n                                children: \"دیدگاه شما\"\n                            }, void 0, false, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-max flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full h-max gap-y-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"دیدگاهتان را بنویسید\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"opacity-70\",\n                                        children: \"نشانی ایمیل شما منتشر نخواهد شد\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"w-full h-max   flex flex-col  \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full  h-max flex flex-col gap-y-4 sm:flex-row items-center justify-center sm:gap-x-6 py-5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                                className: \"\".concat(state.isShowNameActive ? \"border-cyan-700\" : \"border-black \", \" border-2 opacity-70 flex items-center justify-center h-16  pr-3 rounded-xl w-full sm:w-1/2\"),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                                        className: \"px-2\",\n                                                        children: \"نام و نام خانوادگی\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 29\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        onFocus: ()=>dispatch({\n                                                                type: \"ACTIV_INPUTNAME\"\n                                                            }),\n                                                        className: \"w-full outline-0 h-full rounded-xl bg-inherit\",\n                                                        type: \"text\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 25\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                                className: \"\".concat(state.isShowEmailActive ? \"border-cyan-700\" : \"border-black\", \" border-2  opacity-70 flex items-center justify-center h-16  pr-3 rounded-xl w-full sm:w-1/2\"),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                                        className: \"px-2\",\n                                                        children: \"ایمیل\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 29\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        onFocus: ()=>dispatch({\n                                                                type: \"ACTIVE_INPUTEMAIL\"\n                                                            }),\n                                                        className: \"w-full outline-0 h-full rounded-xl bg-inherit\",\n                                                        type: \"email\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-max mt-4 flex flex-col gap-y-3 items-end\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                onFocus: ()=>dispatch({\n                                                        type: \"ACTIVE_TEXTAREA\"\n                                                    }),\n                                                className: \" \".concat(state.isShowTextArea ? \"border-cyan-700\" : \"border-black\", \" border h-52 w-full pr-4 pt-2 rounded-xl resize-none outline-none \")\n                                            }, void 0, false, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"border border-stone-300 w-40 h-10 rounded-lg\",\n                                                children: \"ثبت و ارسال\"\n                                            }, void 0, false, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-4 bg-red-200 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full \"\n                        }, void 0, false, {\n                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/PointOfViewMultiMedia.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(PointOfViewMultiMedia, \"qjUz4CWOwcMFnldD0NcOO6c5OA0=\");\n_c = PointOfViewMultiMedia;\nvar _c;\n$RefreshReg$(_c, \"PointOfViewMultiMedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2ludE9mVmlld011bHRpTWVkaWEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUVsQyxTQUFTRyx3QkFBd0I7O0lBQzVDLE1BQU1DLGVBQWM7UUFDaEJDLGtCQUFpQixLQUFLO1FBQ3RCQyxtQkFBa0IsS0FBSztRQUN2QkMsZ0JBQWUsS0FBSztJQUN4QjtJQUlBLE1BQU1DLHVCQUFxQixDQUFDQyxPQUFRQyxTQUFTO1FBRXpDLE9BQU9BLE9BQU9DLElBQUk7WUFFZCxLQUFLO2dCQUFtQjtvQkFDcEIsTUFBTUMsV0FBVVI7b0JBQ2hCUSxTQUFTUCxnQkFBZ0IsR0FBQyxJQUFJO29CQUU5QixPQUFPTztnQkFDWDtZQUVBLEtBQUs7Z0JBQW9CO29CQUNyQixNQUFNQSxXQUFVUjtvQkFDaEJRLFNBQVNOLGlCQUFpQixHQUFDLElBQUk7b0JBRS9CLE9BQU9NO2dCQUNYO1lBRUEsS0FBSztnQkFBa0I7b0JBQ25CLE1BQU1BLFdBQVVSO29CQUNoQlEsU0FBU0wsY0FBYyxHQUFDLElBQUk7b0JBRTVCLE9BQU9LO2dCQUNYO1lBRUE7Z0JBQVUsT0FBT0g7UUFDckI7SUFFSjtJQUVBLE1BQU0sQ0FBQ0EsT0FBUUksU0FBUyxHQUFDWCxpREFBVUEsQ0FBQ00sc0JBQXVCSjtJQUk3RCxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUNDO2dDQUFJQyxPQUFNO2dDQUE2QkYsV0FBVTtnQ0FBcUJHLFNBQVE7MENBQWEsNEVBQUNDO29DQUFLQyxHQUFFOzs7Ozs7Ozs7OzswQ0FDaEcsOERBQUNDO2dDQUFHTixXQUFVOzBDQUFVOzs7Ozs7Ozs7Ozs7a0NBRTVCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDZiw4REFBQ087a0RBQUU7Ozs7OztrREFDSCw4REFBQ0E7d0NBQUVQLFdBQVU7a0RBQWE7Ozs7Ozs7Ozs7OzswQ0FHMUIsOERBQUNRO2dDQUFLUixXQUFVOztrREFDWiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNmLDhEQUFDUztnREFBVVQsV0FBVyxHQUFnRSxPQUE3RE4sTUFBTUosZ0JBQWdCLEdBQUcsb0JBQW9CLGVBQWUsRUFBQzs7a0VBQ2xGLDhEQUFDb0I7d0RBQU9WLFdBQVU7a0VBQU87Ozs7OztrRUFDekIsOERBQUNXO3dEQUFPQyxTQUFTLElBQUlkLFNBQVM7Z0VBQUNGLE1BQUs7NERBQWlCO3dEQUFJSSxXQUFVO3dEQUFnREosTUFBSzs7Ozs7Ozs7Ozs7OzBEQUc1SCw4REFBQ2E7Z0RBQVNULFdBQVcsR0FBZ0UsT0FBN0ROLE1BQU1ILGlCQUFpQixHQUFHLG9CQUFvQixjQUFjLEVBQUM7O2tFQUNqRiw4REFBQ21CO3dEQUFPVixXQUFVO2tFQUFPOzs7Ozs7a0VBQ3pCLDhEQUFDVzt3REFBTUMsU0FBUyxJQUFJZCxTQUFTO2dFQUFDRixNQUFLOzREQUFtQjt3REFBSUksV0FBVTt3REFBZ0RKLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFJN0gsOERBQUNHO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ2E7Z0RBQVNELFNBQVMsSUFBSWQsU0FBUzt3REFBQ0YsTUFBTTtvREFBaUI7Z0RBQUlJLFdBQVcsSUFBOEQsT0FBMUROLE1BQU1GLGNBQWMsR0FBRyxvQkFBb0IsY0FBYyxFQUFDOzs7Ozs7MERBQ3JJLDhEQUFDc0I7Z0RBQU9kLFdBQVU7MERBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTzdFLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0Q7NEJBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVduQyxDQUFDO0dBM0Z1Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9pbnRPZlZpZXdNdWx0aU1lZGlhLmpzPzEyMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSAsIHVzZVJlZHVjZXJ9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvaW50T2ZWaWV3TXVsdGlNZWRpYSgpIHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPXtcbiAgICAgICAgaXNTaG93TmFtZUFjdGl2ZTpmYWxzZSxcbiAgICAgICAgaXNTaG93RW1haWxBY3RpdmU6ZmFsc2UsXG4gICAgICAgIGlzU2hvd1RleHRBcmVhOmZhbHNlXG4gICAgfVxuICAgICAgIFxuICAgIFxuXG4gICAgY29uc3QgaXNBY3RpdmVJbnB1dFJlZHVjZXI9KHN0YXRlICwgYWN0aW9uKT0+e1xuXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG5cbiAgICAgICAgICAgIGNhc2UgXCJBQ1RJVl9JTlBVVE5BTUVcIjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlPSBpbml0aWFsU3RhdGVcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5pc1Nob3dOYW1lQWN0aXZlPXRydWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBcIkFDVElWRV9JTlBVVEVNQUlMXCI6e1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlPSBpbml0aWFsU3RhdGVcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5pc1Nob3dFbWFpbEFjdGl2ZT10cnVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgXCJBQ1RJVkVfVEVYVEFSRUFcIjp7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhdGU9IGluaXRpYWxTdGF0ZVxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLmlzU2hvd1RleHRBcmVhPXRydWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdCA6IHJldHVybiBzdGF0ZVxuICAgICAgICB9XG5cbiAgICB9XG4gICBcbiAgICBjb25zdCBbc3RhdGUgLCBkaXNwYXRjaF09dXNlUmVkdWNlcihpc0FjdGl2ZUlucHV0UmVkdWNlciAsIGluaXRpYWxTdGF0ZSlcblxuICAgIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLW1heCBiZy1uZXV0cmFsLTEwMCBweS0yMCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbXgtYXV0byBoLW1heCAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNC82IGgtbWF4ICBteC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyICc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9J3ctMTAgZmlsbC1jeWFuLTcwMCcgdmlld0JveD1cIjAgMCAyNCAyNFwiID48cGF0aCBkPVwiTTUgMTFWMTNIMTlWMTFINVpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQteGwnPtiv24zYr9qv2KfZhyDYtNmF2Kc8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1tYXggZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1tYXggZ2FwLXktMyc+XG4gICAgICAgICAgICAgICAgICAgIDxwPtiv24zYr9qv2KfZh9iq2KfZhiDYsdinINio2YbZiNuM2LPbjNivPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J29wYWNpdHktNzAnPtmG2LTYp9mG24wg2KfbjNmF24zZhCDYtNmF2Kcg2YXZhtiq2LTYsSDZhtiu2YjYp9mH2K8g2LTYrzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J3ctZnVsbCBoLW1heCAgIGZsZXggZmxleC1jb2wgICc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsICBoLW1heCBmbGV4IGZsZXgtY29sIGdhcC15LTQgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNtOmdhcC14LTYgcHktNScgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0ICBjbGFzc05hbWU9e2Ake3N0YXRlLmlzU2hvd05hbWVBY3RpdmUgPyAnYm9yZGVyLWN5YW4tNzAwJyA6ICdib3JkZXItYmxhY2sgJ30gYm9yZGVyLTIgb3BhY2l0eS03MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTE2ICBwci0zIHJvdW5kZWQteGwgdy1mdWxsIHNtOnctMS8yYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J3B4LTInPtmG2KfZhSDZiCDZhtin2YUg2K7Yp9mG2YjYp9iv2q/bjDwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgb25Gb2N1cz17KCk9PmRpc3BhdGNoKHt0eXBlOlwiQUNUSVZfSU5QVVROQU1FXCJ9KX0gY2xhc3NOYW1lPSd3LWZ1bGwgb3V0bGluZS0wIGgtZnVsbCByb3VuZGVkLXhsIGJnLWluaGVyaXQnIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9e2Ake3N0YXRlLmlzU2hvd0VtYWlsQWN0aXZlID8gJ2JvcmRlci1jeWFuLTcwMCcgOiAnYm9yZGVyLWJsYWNrJ30gYm9yZGVyLTIgIG9wYWNpdHktNzAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xNiAgcHItMyByb3VuZGVkLXhsIHctZnVsbCBzbTp3LTEvMmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPSdweC0yJz7Yp9uM2YXbjNmEPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uRm9jdXM9eygpPT5kaXNwYXRjaCh7dHlwZTpcIkFDVElWRV9JTlBVVEVNQUlMXCJ9KX0gY2xhc3NOYW1lPSd3LWZ1bGwgb3V0bGluZS0wIGgtZnVsbCByb3VuZGVkLXhsIGJnLWluaGVyaXQnIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1tYXggbXQtNCBmbGV4IGZsZXgtY29sIGdhcC15LTMgaXRlbXMtZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgb25Gb2N1cz17KCk9PmRpc3BhdGNoKHt0eXBlOiBcIkFDVElWRV9URVhUQVJFQVwifSl9IGNsYXNzTmFtZT17YCAke3N0YXRlLmlzU2hvd1RleHRBcmVhID8gJ2JvcmRlci1jeWFuLTcwMCcgOiAnYm9yZGVyLWJsYWNrJ30gYm9yZGVyIGgtNTIgdy1mdWxsIHByLTQgcHQtMiByb3VuZGVkLXhsIHJlc2l6ZS1ub25lIG91dGxpbmUtbm9uZSBgfT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLXN0b25lLTMwMCB3LTQwIGgtMTAgcm91bmRlZC1sZyc+2KvYqNiqINmIINin2LHYs9in2YQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00IGJnLXJlZC0yMDAgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIFwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVkdWNlciIsIlBvaW50T2ZWaWV3TXVsdGlNZWRpYSIsImluaXRpYWxTdGF0ZSIsImlzU2hvd05hbWVBY3RpdmUiLCJpc1Nob3dFbWFpbEFjdGl2ZSIsImlzU2hvd1RleHRBcmVhIiwiaXNBY3RpdmVJbnB1dFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdTdGF0ZSIsImRpc3BhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJoMiIsInAiLCJmb3JtIiwiZmllbGRzZXQiLCJsZWdlbmQiLCJpbnB1dCIsIm9uRm9jdXMiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PointOfViewMultiMedia.js\n"));

/***/ })

});