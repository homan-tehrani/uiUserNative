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

/***/ "./src/components/Album2.js":
/*!**********************************!*\
  !*** ./src/components/Album2.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Album2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./src/components/loading.js\");\n/* harmony import */ var _MorSpeech__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MorSpeech */ \"./src/components/MorSpeech.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/grid */ \"./node_modules/swiper/modules/grid/grid.min.css\");\n/* harmony import */ var swiper_css_grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_grid__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _src_db_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/db.json */ \"./src/db.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Album2() {\n    _s();\n    const [albumPhotos2, setAlbumPhotos2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setAlbumPhotos2(_src_db_json__WEBPACK_IMPORTED_MODULE_9__.albumPhoto2);\n    }, []);\n    const nextSlideHandler = ()=>{\n        console.log(\"next\");\n    };\n    const prevSlideHandler = ()=>{\n        console.log(\"prev\");\n    };\n    if (!albumPhotos2) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n            lineNumber: 26,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mb-4 bg-red-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MorSpeech__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    classMore: \"blue-400\",\n                    colorIcon: \"fill-blue-400\",\n                    colorText: \"text-blue-400\",\n                    content: \"جدیدترین سخنرانی ها\",\n                    nextButtonHandler: nextSlideHandler,\n                    prevButtonHandler: prevSlideHandler\n                }, void 0, false, {\n                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                slidesPerView: 3,\n                grid: {\n                    rows: 2\n                },\n                spaceBetween: 30,\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_8__.Grid,\n                    swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination\n                ],\n                className: \"w-full h-96  \",\n                children: albumPhotos2.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        className: \"!flex !items-center !justify-center !h-40 border rounded-l-md\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            dir: \"rtl\",\n                            className: \"flex w-full h-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 h-full\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-full h-full  \",\n                                        src: item.src,\n                                        alt: item.alt\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-between h-full w-80 py-3 pr-3 bg-neutral-100\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center gap-x-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            viewBox: \"0 0 24 24\",\n                                                            width: \"20\",\n                                                            height: \"20\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    fill: \"none\",\n                                                                    d: \"M0 0h24v24H0z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 52,\n                                                                    columnNumber: 108\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    d: \"M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 52,\n                                                                    columnNumber: 145\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-lg\",\n                                                            children: \"ویس استاد\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 53,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm\",\n                                                    children: \"سخنرانی استاد در تهران\"\n                                                }, void 0, false, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            dir: \"rtl\",\n                                            className: \"flex gap-x-8 opacity-70 text-sm \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex gap-x-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            viewBox: \"0 0 24 24\",\n                                                            width: \"20\",\n                                                            height: \"20\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    fill: \"none\",\n                                                                    d: \"M0 0h24v24H0z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 61,\n                                                                    columnNumber: 112\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    d: \"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 61,\n                                                                    columnNumber: 149\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 29\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"1401/9/25\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 29\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 29\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    viewBox: \"0 0 24 24\",\n                                                    width: \"20\",\n                                                    height: \"20\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            fill: \"none\",\n                                                            d: \"M0 0h24v24H0z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 112\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            d: \"M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2h16.005zM8 4H6v16h2V4zm12 0H10v16h10V4z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 149\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, this)\n                    }, item.id, false, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Album2, \"pZ3IBEQP6/YWDmUFLaZDgRfsGVE=\");\n_c = Album2;\nvar _c;\n$RefreshReg$(_c, \"Album2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbGJ1bTIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ1Q7QUFDbkI7QUFDSTtBQUVoQjtBQUNLO0FBQ007QUFDVztBQUNHO0FBRTlCLFNBQVNXLFNBQVM7O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBZUMsZ0JBQWdCLEdBQUNYLCtDQUFRQSxDQUFDLElBQUk7SUFDcERDLGdEQUFTQSxDQUFDLElBQUk7UUFDVlUsZ0JBQWdCSCxxREFBV0E7SUFDL0IsR0FBRSxFQUFFO0lBQ0osTUFBTUksbUJBQWtCLElBQUk7UUFDeEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLE1BQU1DLG1CQUFrQixJQUFJO1FBQ3hCRixRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFFQSxJQUFHLENBQUNKLGNBQWE7UUFDYixxQkFBTyw4REFBQ04sZ0RBQU9BOzs7OztJQUNuQixDQUFDO0lBRUgscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNmLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ1osa0RBQVNBO29CQUFDYSxXQUFVO29CQUFXQyxXQUFVO29CQUFnQkMsV0FBVTtvQkFBZ0JDLFNBQVE7b0JBQXNCQyxtQkFBbUJWO29CQUFrQlcsbUJBQW1CUjs7Ozs7Ozs7Ozs7MEJBRXhLLDhEQUFDYixnREFBTUE7Z0JBQ0xzQixlQUFlO2dCQUNmQyxNQUFNO29CQUNKQyxNQUFNO2dCQUNSO2dCQUNBQyxjQUFjO2dCQUNkQyxTQUFTO29CQUFDdEIsd0NBQUlBO29CQUFFQyw4Q0FBVUE7aUJBQUM7Z0JBQzNCVSxXQUFVOzBCQUVUUCxhQUFhbUIsR0FBRyxDQUFDQyxDQUFBQSxxQkFDZCw4REFBQzNCLHFEQUFXQTt3QkFBZWMsV0FBVTtrQ0FDakMsNEVBQUNEOzRCQUFJZSxLQUFJOzRCQUFNZCxXQUFVOzs4Q0FDckIsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNmLDRFQUFDZTt3Q0FBSWYsV0FBVTt3Q0FBa0JnQixLQUFLSCxLQUFLRyxHQUFHO3dDQUFFQyxLQUFLSixLQUFLSSxHQUFHOzs7Ozs7Ozs7Ozs4Q0FFN0QsOERBQUNsQjtvQ0FBSUMsV0FBVTs7c0RBQ2YsOERBQUNEOzs4REFDRyw4REFBQ0E7b0RBQUlDLFdBQVU7O3NFQUNmLDhEQUFDa0I7NERBQUlDLE9BQU07NERBQTZCQyxTQUFROzREQUFZQyxPQUFNOzREQUFLQyxRQUFPOzs4RUFBSyw4REFBQ0M7b0VBQUtDLE1BQUs7b0VBQU9DLEdBQUU7Ozs7Ozs4RUFBaUIsOERBQUNGO29FQUFLRSxHQUFFOzs7Ozs7Ozs7Ozs7c0VBQ2hJLDhEQUFDQzs0REFBRTFCLFdBQVU7c0VBQVU7Ozs7Ozs7Ozs7Ozs4REFHdkIsOERBQUMwQjtvREFBRTFCLFdBQVU7OERBQVU7Ozs7Ozs7Ozs7OztzREFHM0IsOERBQUNEOzRDQUFJZSxLQUFJOzRDQUFNZCxXQUFVOzs4REFDakIsOERBQUNEO29EQUFJQyxXQUFVOztzRUFDZiw4REFBQ2tCOzREQUFJQyxPQUFNOzREQUE2QkMsU0FBUTs0REFBWUMsT0FBTTs0REFBS0MsUUFBTzs7OEVBQUssOERBQUNDO29FQUFLQyxNQUFLO29FQUFPQyxHQUFFOzs7Ozs7OEVBQWlCLDhEQUFDRjtvRUFBS0UsR0FBRTs7Ozs7Ozs7Ozs7O3NFQUNoSSw4REFBQ0M7c0VBQUU7Ozs7Ozs7Ozs7Ozs4REFHSCw4REFBQ1I7b0RBQUlDLE9BQU07b0RBQTZCQyxTQUFRO29EQUFZQyxPQUFNO29EQUFLQyxRQUFPOztzRUFBSyw4REFBQ0M7NERBQUtDLE1BQUs7NERBQU9DLEdBQUU7Ozs7OztzRUFBaUIsOERBQUNGOzREQUFLRSxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBckI5SFosS0FBS2MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQWlDckMsQ0FBQztHQWpFdUJuQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbGJ1bTIuanM/M2EwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSAsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmltcG9ydCBNb3JTcGVlY2ggZnJvbSBcIi4vTW9yU3BlZWNoXCI7XG5cbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvZ3JpZFwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgeyBHcmlkLCBQYWdpbmF0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xuaW1wb3J0IHthbGJ1bVBob3RvMn0gZnJvbSBcIi4uLy4uL3NyYy9kYi5qc29uXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxidW0yKCkge1xuICAgIGNvbnN0IFthbGJ1bVBob3RvczIgLCBzZXRBbGJ1bVBob3RvczJdPXVzZVN0YXRlKG51bGwpXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHNldEFsYnVtUGhvdG9zMihhbGJ1bVBob3RvMilcbiAgICB9LFtdKVxuICAgIGNvbnN0IG5leHRTbGlkZUhhbmRsZXIgPSgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV4dFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2U2xpZGVIYW5kbGVyID0oKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcInByZXZcIik7XG4gICAgfVxuXG4gICAgaWYoIWFsYnVtUGhvdG9zMil7XG4gICAgICAgIHJldHVybiA8TG9hZGluZy8+XG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgbXgtMzJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtYi00IGJnLXJlZC0yMDBcIj5cbiAgICA8TW9yU3BlZWNoIGNsYXNzTW9yZT1cImJsdWUtNDAwXCIgY29sb3JJY29uPVwiZmlsbC1ibHVlLTQwMFwiIGNvbG9yVGV4dD1cInRleHQtYmx1ZS00MDBcIiBjb250ZW50PVwi2KzYr9uM2K/Yqtix24zZhiDYs9iu2YbYsdin2YbbjCDZh9inXCIgbmV4dEJ1dHRvbkhhbmRsZXI9e25leHRTbGlkZUhhbmRsZXJ9IHByZXZCdXR0b25IYW5kbGVyPXtwcmV2U2xpZGVIYW5kbGVyfS8+XG4gICAgPC9kaXY+XG4gICAgICA8U3dpcGVyXG4gICAgICAgIHNsaWRlc1BlclZpZXc9ezN9XG4gICAgICAgIGdyaWQ9e3tcbiAgICAgICAgICByb3dzOiAyLFxuICAgICAgICB9fVxuICAgICAgICBzcGFjZUJldHdlZW49ezMwfVxuICAgICAgICBtb2R1bGVzPXtbR3JpZCwgUGFnaW5hdGlvbl19XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTk2ICBcIlxuICAgICAgPlxuICAgICAgICB7YWxidW1QaG90b3MyLm1hcChpdGVtPT5cbiAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIiFmbGV4ICFpdGVtcy1jZW50ZXIgIWp1c3RpZnktY2VudGVyICFoLTQwIGJvcmRlciByb3VuZGVkLWwtbWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNDAgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCAgXCIgc3JjPXtpdGVtLnNyY30gYWx0PXtpdGVtLmFsdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaC1mdWxsIHctODAgcHktMyBwci0zIGJnLW5ldXRyYWwtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIj48cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIvPjxwYXRoIGQ9XCJNMTIgM2EzIDMgMCAwIDAtMyAzdjRhMyAzIDAgMCAwIDYgMFY2YTMgMyAwIDAgMC0zLTN6bTAtMmE1IDUgMCAwIDEgNSA1djRhNSA1IDAgMCAxLTEwIDBWNmE1IDUgMCAwIDEgNS01ek0zLjA1NSAxMUg1LjA3YTcuMDAyIDcuMDAyIDAgMCAwIDEzLjg1OCAwaDIuMDE2QTkuMDA0IDkuMDA0IDAgMCAxIDEzIDE4Ljk0NVYyM2gtMnYtNC4wNTVBOS4wMDQgOS4wMDQgMCAwIDEgMy4wNTUgMTF6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPtmI24zYsyDYp9iz2KrYp9ivPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj7Ys9iu2YbYsdin2YbbjCDYp9iz2KrYp9ivINiv2LEg2KrZh9ix2KfZhjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtOCBvcGFjaXR5LTcwIHRleHQtc20gXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiLz48cGF0aCBkPVwiTTE3IDNoNGExIDEgMCAwIDEgMSAxdjE2YTEgMSAwIDAgMS0xIDFIM2ExIDEgMCAwIDEtMS0xVjRhMSAxIDAgMCAxIDEtMWg0VjFoMnYyaDZWMWgydjJ6bTMgOEg0djhoMTZ2LTh6bS01LTZIOXYySDdWNUg0djRoMTZWNWgtM3YyaC0yVjV6bS05IDhoMnYySDZ2LTJ6bTUgMGgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjE0MDEvOS8yNTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIj48cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIvPjxwYXRoIGQ9XCJNMjAuMDA1IDJDMjEuMTA3IDIgMjIgMi44OTggMjIgMy45OXYxNi4wMmMwIDEuMDk5LS44OTMgMS45OS0xLjk5NSAxLjk5SDR2LTRIMnYtMmgydi0zSDJ2LTJoMlY4SDJWNmgyVjJoMTYuMDA1ek04IDRINnYxNmgyVjR6bTEyIDBIMTB2MTZoMTBWNHpcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgICApfVxuICAgICAgICBcbiAgICAgIDwvU3dpcGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkxvYWRpbmciLCJNb3JTcGVlY2giLCJHcmlkIiwiUGFnaW5hdGlvbiIsImFsYnVtUGhvdG8yIiwiQWxidW0yIiwiYWxidW1QaG90b3MyIiwic2V0QWxidW1QaG90b3MyIiwibmV4dFNsaWRlSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJwcmV2U2xpZGVIYW5kbGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2xhc3NNb3JlIiwiY29sb3JJY29uIiwiY29sb3JUZXh0IiwiY29udGVudCIsIm5leHRCdXR0b25IYW5kbGVyIiwicHJldkJ1dHRvbkhhbmRsZXIiLCJzbGlkZXNQZXJWaWV3IiwiZ3JpZCIsInJvd3MiLCJzcGFjZUJldHdlZW4iLCJtb2R1bGVzIiwibWFwIiwiaXRlbSIsImRpciIsImltZyIsInNyYyIsImFsdCIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsIndpZHRoIiwiaGVpZ2h0IiwicGF0aCIsImZpbGwiLCJkIiwicCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Album2.js\n"));

/***/ })

});