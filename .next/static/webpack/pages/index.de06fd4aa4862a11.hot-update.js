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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Album2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./src/components/loading.js\");\n/* harmony import */ var _MorSpeech__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MorSpeech */ \"./src/components/MorSpeech.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/grid */ \"./node_modules/swiper/modules/grid/grid.min.css\");\n/* harmony import */ var swiper_css_grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_grid__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _src_db_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/db.json */ \"./src/db.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Album2() {\n    _s();\n    const [albumPhotos2, setAlbumPhotos2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setAlbumPhotos2(_src_db_json__WEBPACK_IMPORTED_MODULE_9__.albumPhoto2);\n    }, []);\n    const nextSlideHandler = ()=>{\n        var _swiperRef_current;\n        (_swiperRef_current = swiperRef.current) === null || _swiperRef_current === void 0 ? void 0 : _swiperRef_current.slideNext();\n    };\n    const prevSlideHandler = ()=>{\n        var _swiperRef_current;\n        (_swiperRef_current = swiperRef.current) === null || _swiperRef_current === void 0 ? void 0 : _swiperRef_current.slidePrev();\n    };\n    if (!albumPhotos2) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n            lineNumber: 27,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" container px-2z mx-auto \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mb-6 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MorSpeech__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    classMore: \"blue-400\",\n                    underline: \"true\",\n                    colorIcon: \"fill-blue-400\",\n                    colorText: \"text-blue-400\",\n                    content: \"پربازدیدترین سخنرانی ها\",\n                    nextButtonHandler: nextSlideHandler,\n                    prevButtonHandler: prevSlideHandler\n                }, void 0, false, {\n                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                    lineNumber: 33,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                slidesPerView: 3,\n                grid: {\n                    rows: 2\n                },\n                spaceBetween: 20,\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_8__.Grid,\n                    swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination,\n                    swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation\n                ],\n                onBeforeInit: (swiper)=>{\n                    swiperRef.current = swiper;\n                },\n                breakpoints: {\n                    // when window width is >= 640px\n                    0: {\n                        slidesPerView: 1\n                    },\n                    640: {\n                        slidesPerView: 2\n                    },\n                    1370: {\n                        slidesPerView: 3\n                    }\n                },\n                className: \"w-full h-96  \",\n                children: albumPhotos2.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        className: \"!flex max-w-[400px] !items-center !justify-center   !h-40  \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                            hre: true,\n                            dir: \"rtl\",\n                            className: \"flex cursor-pointer w-full  h-full rounded-l-md \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 h-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-full h-full  \",\n                                        src: item.src,\n                                        alt: item.alt\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-between h-full w-full py-3 pr-3 bg-neutral-100 border rounded-l-md\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center gap-x-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            viewBox: \"0 0 24 24\",\n                                                            width: \"20\",\n                                                            height: \"20\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    fill: \"none\",\n                                                                    d: \"M0 0h24v24H0z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 72,\n                                                                    columnNumber: 108\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    d: \"M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 72,\n                                                                    columnNumber: 145\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-lg\",\n                                                            children: \"ویس استاد\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm\",\n                                                    children: \"سخنرانی استاد در تهران\"\n                                                }, void 0, false, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            dir: \"rtl\",\n                                            className: \"flex gap-x-8 opacity-70 text-sm \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex gap-x-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            viewBox: \"0 0 24 24\",\n                                                            width: \"20\",\n                                                            height: \"20\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    fill: \"none\",\n                                                                    d: \"M0 0h24v24H0z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 81,\n                                                                    columnNumber: 112\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    d: \"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 81,\n                                                                    columnNumber: 149\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 29\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"1401/9/25\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 29\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 29\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    viewBox: \"0 0 24 24\",\n                                                    width: \"20\",\n                                                    height: \"20\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            fill: \"none\",\n                                                            d: \"M0 0h24v24H0z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 85,\n                                                            columnNumber: 112\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            d: \"M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2h16.005zM8 4H6v16h2V4zm12 0H10v16h10V4z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 85,\n                                                            columnNumber: 149\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                            lineNumber: 65,\n                            columnNumber: 17\n                        }, this)\n                    }, item.id, false, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Album2, \"mHO7qW26qrQD12OxVnaBNukxhxk=\");\n_c = Album2;\nvar _c;\n$RefreshReg$(_c, \"Album2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O3NFQUNoSSw4REFBQ0M7c0VBQUU7Ozs7Ozs7Ozs7Ozs4REFHSCw4REFBQ1I7b0RBQUlDLE9BQU07b0RBQTZCQyxTQUFRO29EQUFZQyxPQUFNO29EQUFLQyxRQUFPOztzRUFBSyw4REFBQ0M7NERBQUtDLE1BQUs7NERBQU9DLEdBQUU7Ozs7OztzRUFBaUIsOERBQUNGOzREQUFLRSxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBckI5SGQsS0FBS2dCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ3JDLENBQUM7R0FyRnVCM0M7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWxidW0yLmpzPzNhMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgTW9yU3BlZWNoIGZyb20gXCIuL01vclNwZWVjaFwiO1xuXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL2dyaWRcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgR3JpZCwgUGFnaW5hdGlvbiAsTmF2aWdhdGlvbn0gZnJvbSBcInN3aXBlclwiO1xuaW1wb3J0IHthbGJ1bVBob3RvMn0gZnJvbSBcIi4uLy4uL3NyYy9kYi5qc29uXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxidW0yKCkge1xuICAgIGNvbnN0IFthbGJ1bVBob3RvczIgLCBzZXRBbGJ1bVBob3RvczJdPXVzZVN0YXRlKG51bGwpXG4gICAgY29uc3Qgc3dpcGVyUmVmID0gdXNlUmVmKCk7XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHNldEFsYnVtUGhvdG9zMihhbGJ1bVBob3RvMilcbiAgICB9LFtdKVxuICAgIGNvbnN0IG5leHRTbGlkZUhhbmRsZXIgPSgpPT57XG4gICAgICAgIHN3aXBlclJlZi5jdXJyZW50Py5zbGlkZU5leHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2U2xpZGVIYW5kbGVyID0oKT0+e1xuICAgICAgICBzd2lwZXJSZWYuY3VycmVudD8uc2xpZGVQcmV2KCk7XG4gICAgfVxuXG4gICAgaWYoIWFsYnVtUGhvdG9zMil7XG4gICAgICAgIHJldHVybiA8TG9hZGluZy8+XG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgY29udGFpbmVyIHB4LTJ6IG14LWF1dG8gXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCIgbWItNiBcIj5cbiAgICA8TW9yU3BlZWNoIGNsYXNzTW9yZT1cImJsdWUtNDAwXCIgdW5kZXJsaW5lPVwidHJ1ZVwiIGNvbG9ySWNvbj1cImZpbGwtYmx1ZS00MDBcIiBjb2xvclRleHQ9XCJ0ZXh0LWJsdWUtNDAwXCIgY29udGVudD1cItm+2LHYqNin2LLYr9uM2K/Yqtix24zZhiDYs9iu2YbYsdin2YbbjCDZh9inXCIgbmV4dEJ1dHRvbkhhbmRsZXI9e25leHRTbGlkZUhhbmRsZXJ9IHByZXZCdXR0b25IYW5kbGVyPXtwcmV2U2xpZGVIYW5kbGVyfS8+XG4gICAgPC9kaXY+XG4gICAgICA8U3dpcGVyXG4gICAgICAgIHNsaWRlc1BlclZpZXc9ezN9XG4gICAgICAgIGdyaWQ9e3tcbiAgICAgICAgICByb3dzOiAyLFxuICAgICAgICB9fVxuICAgICAgICBzcGFjZUJldHdlZW49ezIwfVxuICAgICAgICBtb2R1bGVzPXtbR3JpZCwgUGFnaW5hdGlvbiAsIE5hdmlnYXRpb25dfVxuICAgICAgICBvbkJlZm9yZUluaXQ9eyhzd2lwZXIpID0+IHtcbiAgICAgICAgICBzd2lwZXJSZWYuY3VycmVudCA9IHN3aXBlcjtcbiAgICAgICAgfX1cbiAgICAgICAgXG4gICAgICAgICAgYnJlYWtwb2ludHM9e3tcbiAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxuICAgICAgICAgIDA6e1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgNjQwOiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMzcwOiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtOTYgIFwiXG4gICAgICA+XG4gICAgICAgIHthbGJ1bVBob3RvczIubWFwKGl0ZW09PlxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiIWZsZXggbWF4LXctWzQwMHB4XSAhaXRlbXMtY2VudGVyICFqdXN0aWZ5LWNlbnRlciAgICFoLTQwICBcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmUgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwiZmxleCBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgIGgtZnVsbCByb3VuZGVkLWwtbWQgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00MCBoLWZ1bGwgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCAgXCIgc3JjPXtpdGVtLnNyY30gYWx0PXtpdGVtLmFsdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaC1mdWxsIHctZnVsbCBweS0zIHByLTMgYmctbmV1dHJhbC0xMDAgYm9yZGVyIHJvdW5kZWQtbC1tZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiLz48cGF0aCBkPVwiTTEyIDNhMyAzIDAgMCAwLTMgM3Y0YTMgMyAwIDAgMCA2IDBWNmEzIDMgMCAwIDAtMy0zem0wLTJhNSA1IDAgMCAxIDUgNXY0YTUgNSAwIDAgMS0xMCAwVjZhNSA1IDAgMCAxIDUtNXpNMy4wNTUgMTFINS4wN2E3LjAwMiA3LjAwMiAwIDAgMCAxMy44NTggMGgyLjAxNkE5LjAwNCA5LjAwNCAwIDAgMSAxMyAxOC45NDVWMjNoLTJ2LTQuMDU1QTkuMDA0IDkuMDA0IDAgMCAxIDMuMDU1IDExelwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj7ZiNuM2LMg2KfYs9iq2KfYrzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+2LPYrtmG2LHYp9mG24wg2KfYs9iq2KfYryDYr9ixINiq2YfYsdin2YY8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTggb3BhY2l0eS03MCB0ZXh0LXNtIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAteC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPjxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIi8+PHBhdGggZD1cIk0xNyAzaDRhMSAxIDAgMCAxIDEgMXYxNmExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoNFYxaDJ2Mmg2VjFoMnYyem0zIDhINHY4aDE2di04em0tNS02SDl2Mkg3VjVINHY0aDE2VjVoLTN2MmgtMlY1em0tOSA4aDJ2Mkg2di0yem01IDBoMnYyaC0ydi0yem01IDBoMnYyaC0ydi0yelwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4xNDAxLzkvMjU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiLz48cGF0aCBkPVwiTTIwLjAwNSAyQzIxLjEwNyAyIDIyIDIuODk4IDIyIDMuOTl2MTYuMDJjMCAxLjA5OS0uODkzIDEuOTktMS45OTUgMS45OUg0di00SDJ2LTJoMnYtM0gydi0yaDJWOEgyVjZoMlYyaDE2LjAwNXpNOCA0SDZ2MTZoMlY0em0xMiAwSDEwdjE2aDEwVjR6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIFxuICAgICAgPC9Td2lwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiTG9hZGluZyIsIk1vclNwZWVjaCIsIkdyaWQiLCJQYWdpbmF0aW9uIiwiTmF2aWdhdGlvbiIsImFsYnVtUGhvdG8yIiwiQWxidW0yIiwiYWxidW1QaG90b3MyIiwic2V0QWxidW1QaG90b3MyIiwic3dpcGVyUmVmIiwibmV4dFNsaWRlSGFuZGxlciIsImN1cnJlbnQiLCJzbGlkZU5leHQiLCJwcmV2U2xpZGVIYW5kbGVyIiwic2xpZGVQcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2xhc3NNb3JlIiwidW5kZXJsaW5lIiwiY29sb3JJY29uIiwiY29sb3JUZXh0IiwiY29udGVudCIsIm5leHRCdXR0b25IYW5kbGVyIiwicHJldkJ1dHRvbkhhbmRsZXIiLCJzbGlkZXNQZXJWaWV3IiwiZ3JpZCIsInJvd3MiLCJzcGFjZUJldHdlZW4iLCJtb2R1bGVzIiwib25CZWZvcmVJbml0Iiwic3dpcGVyIiwiYnJlYWtwb2ludHMiLCJtYXAiLCJpdGVtIiwiTGluayIsImhyZSIsImRpciIsImltZyIsInNyYyIsImFsdCIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsIndpZHRoIiwiaGVpZ2h0IiwicGF0aCIsImZpbGwiLCJkIiwicCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Album2.js\n"));

/***/ })

});