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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Album2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./src/components/loading.js\");\n/* harmony import */ var _MorSpeech__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MorSpeech */ \"./src/components/MorSpeech.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/grid */ \"./node_modules/swiper/modules/grid/grid.min.css\");\n/* harmony import */ var swiper_css_grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_grid__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _src_db_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/db.json */ \"./src/db.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Album2() {\n    _s();\n    const [albumPhotos2, setAlbumPhotos2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setAlbumPhotos2(_src_db_json__WEBPACK_IMPORTED_MODULE_9__.albumPhoto2);\n    }, []);\n    const nextSlideHandler = ()=>{\n        var _swiperRef_current;\n        (_swiperRef_current = swiperRef.current) === null || _swiperRef_current === void 0 ? void 0 : _swiperRef_current.slideNext();\n    };\n    const prevSlideHandler = ()=>{\n        var _swiperRef_current;\n        (_swiperRef_current = swiperRef.current) === null || _swiperRef_current === void 0 ? void 0 : _swiperRef_current.slidePrev();\n    };\n    if (!albumPhotos2) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n            lineNumber: 27,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" container px-6 mx-auto \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mb-6 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MorSpeech__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    classMore: \"blue-400\",\n                    underline: \"true\",\n                    colorIcon: \"fill-blue-400\",\n                    colorText: \"text-blue-400\",\n                    content: \"جدیدترین سخنرانی ها\",\n                    nextButtonHandler: nextSlideHandler,\n                    prevButtonHandler: prevSlideHandler\n                }, void 0, false, {\n                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                    lineNumber: 33,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                slidesPerView: 3,\n                grid: {\n                    rows: 2\n                },\n                spaceBetween: 20,\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_8__.Grid,\n                    swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination,\n                    swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation\n                ],\n                onBeforeInit: (swiper)=>{\n                    swiperRef.current = swiper;\n                },\n                breakpoints: {\n                    // when window width is >= 640px\n                    0: {\n                        slidesPerView: 1\n                    },\n                    640: {\n                        slidesPerView: 2\n                    },\n                    1370: {\n                        slidesPerView: 3\n                    }\n                },\n                className: \"w-full h-96  \",\n                children: albumPhotos2.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        className: \"!flex max-w-[400px] !items-center !justify-center   !h-40  \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            dir: \"rtl\",\n                            className: \"flex  w-full  h-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 h-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-full h-full  \",\n                                        src: item.src,\n                                        alt: item.alt\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-between h-full w-48 py-3 pr-3 bg-neutral-100 border rounded-l-md\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center gap-x-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            viewBox: \"0 0 24 24\",\n                                                            width: \"20\",\n                                                            height: \"20\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    fill: \"none\",\n                                                                    d: \"M0 0h24v24H0z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 72,\n                                                                    columnNumber: 108\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    d: \"M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 72,\n                                                                    columnNumber: 145\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-lg\",\n                                                            children: \"ویس استاد\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm\",\n                                                    children: \"سخنرانی استاد در تهران\"\n                                                }, void 0, false, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            dir: \"rtl\",\n                                            className: \"flex gap-x-8 opacity-70 text-sm \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex gap-x-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            viewBox: \"0 0 24 24\",\n                                                            width: \"20\",\n                                                            height: \"20\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    fill: \"none\",\n                                                                    d: \"M0 0h24v24H0z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 81,\n                                                                    columnNumber: 112\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    d: \"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 81,\n                                                                    columnNumber: 149\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 29\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"1401/9/25\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 29\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 29\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    viewBox: \"0 0 24 24\",\n                                                    width: \"20\",\n                                                    height: \"20\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            fill: \"none\",\n                                                            d: \"M0 0h24v24H0z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 85,\n                                                            columnNumber: 112\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            d: \"M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2h16.005zM8 4H6v16h2V4zm12 0H10v16h10V4z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 85,\n                                                            columnNumber: 149\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                            lineNumber: 65,\n                            columnNumber: 17\n                        }, this)\n                    }, item.id, false, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Album2, \"mHO7qW26qrQD12OxVnaBNukxhxk=\");\n_c = Album2;\nvar _c;\n$RefreshReg$(_c, \"Album2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0M7c0VBQUU7Ozs7Ozs7Ozs7Ozs4REFHSCw4REFBQ1I7b0RBQUlDLE9BQU07b0RBQTZCQyxTQUFRO29EQUFZQyxPQUFNO29EQUFLQyxRQUFPOztzRUFBSyw4REFBQ0M7NERBQUtDLE1BQUs7NERBQU9DLEdBQUU7Ozs7OztzRUFBaUIsOERBQUNGOzREQUFLRSxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBckI5SFosS0FBS2MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQWlDckMsQ0FBQztHQXJGdUJ6QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbGJ1bTIuanM/M2EwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSAsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmltcG9ydCBNb3JTcGVlY2ggZnJvbSBcIi4vTW9yU3BlZWNoXCI7XG5cbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvZ3JpZFwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgeyBHcmlkLCBQYWdpbmF0aW9uICxOYXZpZ2F0aW9ufSBmcm9tIFwic3dpcGVyXCI7XG5pbXBvcnQge2FsYnVtUGhvdG8yfSBmcm9tIFwiLi4vLi4vc3JjL2RiLmpzb25cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGJ1bTIoKSB7XG4gICAgY29uc3QgW2FsYnVtUGhvdG9zMiAsIHNldEFsYnVtUGhvdG9zMl09dXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBzd2lwZXJSZWYgPSB1c2VSZWYoKTtcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgc2V0QWxidW1QaG90b3MyKGFsYnVtUGhvdG8yKVxuICAgIH0sW10pXG4gICAgY29uc3QgbmV4dFNsaWRlSGFuZGxlciA9KCk9PntcbiAgICAgICAgc3dpcGVyUmVmLmN1cnJlbnQ/LnNsaWRlTmV4dCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZTbGlkZUhhbmRsZXIgPSgpPT57XG4gICAgICAgIHN3aXBlclJlZi5jdXJyZW50Py5zbGlkZVByZXYoKTtcbiAgICB9XG5cbiAgICBpZighYWxidW1QaG90b3MyKXtcbiAgICAgICAgcmV0dXJuIDxMb2FkaW5nLz5cbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb250YWluZXIgcHgtNiBteC1hdXRvIFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1iLTYgXCI+XG4gICAgPE1vclNwZWVjaCBjbGFzc01vcmU9XCJibHVlLTQwMFwiIHVuZGVybGluZT1cInRydWVcIiBjb2xvckljb249XCJmaWxsLWJsdWUtNDAwXCIgY29sb3JUZXh0PVwidGV4dC1ibHVlLTQwMFwiIGNvbnRlbnQ9XCLYrNiv24zYr9iq2LHbjNmGINiz2K7Zhtix2KfZhtuMINmH2KdcIiBuZXh0QnV0dG9uSGFuZGxlcj17bmV4dFNsaWRlSGFuZGxlcn0gcHJldkJ1dHRvbkhhbmRsZXI9e3ByZXZTbGlkZUhhbmRsZXJ9Lz5cbiAgICA8L2Rpdj5cbiAgICAgIDxTd2lwZXJcbiAgICAgICAgc2xpZGVzUGVyVmlldz17M31cbiAgICAgICAgZ3JpZD17e1xuICAgICAgICAgIHJvd3M6IDIsXG4gICAgICAgIH19XG4gICAgICAgIHNwYWNlQmV0d2Vlbj17MjB9XG4gICAgICAgIG1vZHVsZXM9e1tHcmlkLCBQYWdpbmF0aW9uICwgTmF2aWdhdGlvbl19XG4gICAgICAgIG9uQmVmb3JlSW5pdD17KHN3aXBlcikgPT4ge1xuICAgICAgICAgIHN3aXBlclJlZi5jdXJyZW50ID0gc3dpcGVyO1xuICAgICAgICB9fVxuICAgICAgICBcbiAgICAgICAgICBicmVha3BvaW50cz17e1xuICAgICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XG4gICAgICAgICAgMDp7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICA2NDA6IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEzNzA6IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05NiAgXCJcbiAgICAgID5cbiAgICAgICAge2FsYnVtUGhvdG9zMi5tYXAoaXRlbT0+XG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCIhZmxleCBtYXgtdy1bNDAwcHhdICFpdGVtcy1jZW50ZXIgIWp1c3RpZnktY2VudGVyICAgIWgtNDAgIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwiZmxleCAgdy1mdWxsICBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQwIGgtZnVsbCBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsICBcIiBzcmM9e2l0ZW0uc3JjfSBhbHQ9e2l0ZW0uYWx0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBoLWZ1bGwgdy00OCBweS0zIHByLTMgYmctbmV1dHJhbC0xMDAgYm9yZGVyIHJvdW5kZWQtbC1tZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiLz48cGF0aCBkPVwiTTEyIDNhMyAzIDAgMCAwLTMgM3Y0YTMgMyAwIDAgMCA2IDBWNmEzIDMgMCAwIDAtMy0zem0wLTJhNSA1IDAgMCAxIDUgNXY0YTUgNSAwIDAgMS0xMCAwVjZhNSA1IDAgMCAxIDUtNXpNMy4wNTUgMTFINS4wN2E3LjAwMiA3LjAwMiAwIDAgMCAxMy44NTggMGgyLjAxNkE5LjAwNCA5LjAwNCAwIDAgMSAxMyAxOC45NDVWMjNoLTJ2LTQuMDU1QTkuMDA0IDkuMDA0IDAgMCAxIDMuMDU1IDExelwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj7ZiNuM2LMg2KfYs9iq2KfYrzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+2LPYrtmG2LHYp9mG24wg2KfYs9iq2KfYryDYr9ixINiq2YfYsdin2YY8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTggb3BhY2l0eS03MCB0ZXh0LXNtIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAteC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPjxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIi8+PHBhdGggZD1cIk0xNyAzaDRhMSAxIDAgMCAxIDEgMXYxNmExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoNFYxaDJ2Mmg2VjFoMnYyem0zIDhINHY4aDE2di04em0tNS02SDl2Mkg3VjVINHY0aDE2VjVoLTN2MmgtMlY1em0tOSA4aDJ2Mkg2di0yem01IDBoMnYyaC0ydi0yem01IDBoMnYyaC0ydi0yelwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4xNDAxLzkvMjU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiLz48cGF0aCBkPVwiTTIwLjAwNSAyQzIxLjEwNyAyIDIyIDIuODk4IDIyIDMuOTl2MTYuMDJjMCAxLjA5OS0uODkzIDEuOTktMS45OTUgMS45OUg0di00SDJ2LTJoMnYtM0gydi0yaDJWOEgyVjZoMlYyaDE2LjAwNXpNOCA0SDZ2MTZoMlY0em0xMiAwSDEwdjE2aDEwVjR6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgXG4gICAgICA8L1N3aXBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJMb2FkaW5nIiwiTW9yU3BlZWNoIiwiR3JpZCIsIlBhZ2luYXRpb24iLCJOYXZpZ2F0aW9uIiwiYWxidW1QaG90bzIiLCJBbGJ1bTIiLCJhbGJ1bVBob3RvczIiLCJzZXRBbGJ1bVBob3RvczIiLCJzd2lwZXJSZWYiLCJuZXh0U2xpZGVIYW5kbGVyIiwiY3VycmVudCIsInNsaWRlTmV4dCIsInByZXZTbGlkZUhhbmRsZXIiLCJzbGlkZVByZXYiLCJkaXYiLCJjbGFzc05hbWUiLCJjbGFzc01vcmUiLCJ1bmRlcmxpbmUiLCJjb2xvckljb24iLCJjb2xvclRleHQiLCJjb250ZW50IiwibmV4dEJ1dHRvbkhhbmRsZXIiLCJwcmV2QnV0dG9uSGFuZGxlciIsInNsaWRlc1BlclZpZXciLCJncmlkIiwicm93cyIsInNwYWNlQmV0d2VlbiIsIm1vZHVsZXMiLCJvbkJlZm9yZUluaXQiLCJzd2lwZXIiLCJicmVha3BvaW50cyIsIm1hcCIsIml0ZW0iLCJkaXIiLCJpbWciLCJzcmMiLCJhbHQiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJ3aWR0aCIsImhlaWdodCIsInBhdGgiLCJmaWxsIiwiZCIsInAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Album2.js\n"));

/***/ })

});