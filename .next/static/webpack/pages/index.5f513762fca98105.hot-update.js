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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Album2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./src/components/loading.js\");\n/* harmony import */ var _MorSpeech__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MorSpeech */ \"./src/components/MorSpeech.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/grid */ \"./node_modules/swiper/modules/grid/grid.min.css\");\n/* harmony import */ var swiper_css_grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_grid__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _src_db_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/db.json */ \"./src/db.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Album2() {\n    _s();\n    const [albumPhotos2, setAlbumPhotos2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setAlbumPhotos2(_src_db_json__WEBPACK_IMPORTED_MODULE_9__.albumPhoto2);\n    }, []);\n    const nextSlideHandler = ()=>{\n        console.log(\"next\");\n    };\n    const prevSlideHandler = ()=>{\n        console.log(\"prev\");\n    };\n    if (!albumPhotos2) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n            lineNumber: 26,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mb-6 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MorSpeech__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    classMore: \"blue-400\",\n                    underline: \"true\",\n                    colorIcon: \"fill-blue-400\",\n                    colorText: \"text-blue-400\",\n                    content: \"جدیدترین سخنرانی ها\",\n                    nextButtonHandler: nextSlideHandler,\n                    prevButtonHandler: prevSlideHandler\n                }, void 0, false, {\n                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                slidesPerView: 3,\n                grid: {\n                    rows: 2\n                },\n                spaceBetween: 30,\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_8__.Grid,\n                    swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination\n                ],\n                className: \"w-full h-96  \",\n                children: albumPhotos2.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        className: \"!flex !items-center !justify-center !h-40 border rounded-l-md\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            dir: \"rtl\",\n                            className: \"flex w-full h-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 h-full\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-full h-full  \",\n                                        src: item.src,\n                                        alt: item.alt\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-between h-full w-80 py-3 pr-3 bg-neutral-100\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center gap-x-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            viewBox: \"0 0 24 24\",\n                                                            width: \"20\",\n                                                            height: \"20\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    fill: \"none\",\n                                                                    d: \"M0 0h24v24H0z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 52,\n                                                                    columnNumber: 108\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    d: \"M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 52,\n                                                                    columnNumber: 145\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-lg\",\n                                                            children: \"ویس استاد\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 53,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm\",\n                                                    children: \"سخنرانی استاد در تهران\"\n                                                }, void 0, false, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            dir: \"rtl\",\n                                            className: \"flex gap-x-8 opacity-70 text-sm \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex gap-x-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            viewBox: \"0 0 24 24\",\n                                                            width: \"20\",\n                                                            height: \"20\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    fill: \"none\",\n                                                                    d: \"M0 0h24v24H0z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 61,\n                                                                    columnNumber: 112\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    d: \"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                                    lineNumber: 61,\n                                                                    columnNumber: 149\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 29\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"1401/9/25\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 29\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 29\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    viewBox: \"0 0 24 24\",\n                                                    width: \"20\",\n                                                    height: \"20\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            fill: \"none\",\n                                                            d: \"M0 0h24v24H0z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 112\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            d: \"M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2h16.005zM8 4H6v16h2V4zm12 0H10v16h10V4z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 149\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, this)\n                    }, item.id, false, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album2.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Album2, \"pZ3IBEQP6/YWDmUFLaZDgRfsGVE=\");\n_c = Album2;\nvar _c;\n$RefreshReg$(_c, \"Album2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbGJ1bTIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ1Q7QUFDbkI7QUFDSTtBQUVoQjtBQUNLO0FBQ007QUFDVztBQUNHO0FBRTlCLFNBQVNXLFNBQVM7O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBZUMsZ0JBQWdCLEdBQUNYLCtDQUFRQSxDQUFDLElBQUk7SUFDcERDLGdEQUFTQSxDQUFDLElBQUk7UUFDVlUsZ0JBQWdCSCxxREFBV0E7SUFDL0IsR0FBRSxFQUFFO0lBQ0osTUFBTUksbUJBQWtCLElBQUk7UUFDeEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLE1BQU1DLG1CQUFrQixJQUFJO1FBQ3hCRixRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFFQSxJQUFHLENBQUNKLGNBQWE7UUFDYixxQkFBTyw4REFBQ04sZ0RBQU9BOzs7OztJQUNuQixDQUFDO0lBRUgscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNmLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ1osa0RBQVNBO29CQUFDYSxXQUFVO29CQUFXQyxXQUFVO29CQUFPQyxXQUFVO29CQUFnQkMsV0FBVTtvQkFBZ0JDLFNBQVE7b0JBQXNCQyxtQkFBbUJYO29CQUFrQlksbUJBQW1CVDs7Ozs7Ozs7Ozs7MEJBRXpMLDhEQUFDYixnREFBTUE7Z0JBQ0x1QixlQUFlO2dCQUNmQyxNQUFNO29CQUNKQyxNQUFNO2dCQUNSO2dCQUNBQyxjQUFjO2dCQUNkQyxTQUFTO29CQUFDdkIsd0NBQUlBO29CQUFFQyw4Q0FBVUE7aUJBQUM7Z0JBQzNCVSxXQUFVOzBCQUVUUCxhQUFhb0IsR0FBRyxDQUFDQyxDQUFBQSxxQkFDZCw4REFBQzVCLHFEQUFXQTt3QkFBZWMsV0FBVTtrQ0FDakMsNEVBQUNEOzRCQUFJZ0IsS0FBSTs0QkFBTWYsV0FBVTs7OENBQ3JCLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDZiw0RUFBQ2dCO3dDQUFJaEIsV0FBVTt3Q0FBa0JpQixLQUFLSCxLQUFLRyxHQUFHO3dDQUFFQyxLQUFLSixLQUFLSSxHQUFHOzs7Ozs7Ozs7Ozs4Q0FFN0QsOERBQUNuQjtvQ0FBSUMsV0FBVTs7c0RBQ2YsOERBQUNEOzs4REFDRyw4REFBQ0E7b0RBQUlDLFdBQVU7O3NFQUNmLDhEQUFDbUI7NERBQUlDLE9BQU07NERBQTZCQyxTQUFROzREQUFZQyxPQUFNOzREQUFLQyxRQUFPOzs4RUFBSyw4REFBQ0M7b0VBQUtDLE1BQUs7b0VBQU9DLEdBQUU7Ozs7Ozs4RUFBaUIsOERBQUNGO29FQUFLRSxHQUFFOzs7Ozs7Ozs7Ozs7c0VBQ2hJLDhEQUFDQzs0REFBRTNCLFdBQVU7c0VBQVU7Ozs7Ozs7Ozs7Ozs4REFHdkIsOERBQUMyQjtvREFBRTNCLFdBQVU7OERBQVU7Ozs7Ozs7Ozs7OztzREFHM0IsOERBQUNEOzRDQUFJZ0IsS0FBSTs0Q0FBTWYsV0FBVTs7OERBQ2pCLDhEQUFDRDtvREFBSUMsV0FBVTs7c0VBQ2YsOERBQUNtQjs0REFBSUMsT0FBTTs0REFBNkJDLFNBQVE7NERBQVlDLE9BQU07NERBQUtDLFFBQU87OzhFQUFLLDhEQUFDQztvRUFBS0MsTUFBSztvRUFBT0MsR0FBRTs7Ozs7OzhFQUFpQiw4REFBQ0Y7b0VBQUtFLEdBQUU7Ozs7Ozs7Ozs7OztzRUFDaEksOERBQUNDO3NFQUFFOzs7Ozs7Ozs7Ozs7OERBR0gsOERBQUNSO29EQUFJQyxPQUFNO29EQUE2QkMsU0FBUTtvREFBWUMsT0FBTTtvREFBS0MsUUFBTzs7c0VBQUssOERBQUNDOzREQUFLQyxNQUFLOzREQUFPQyxHQUFFOzs7Ozs7c0VBQWlCLDhEQUFDRjs0REFBS0UsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQXJCOUhaLEtBQUtjLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ3JDLENBQUM7R0FqRXVCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWxidW0yLmpzPzNhMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgTW9yU3BlZWNoIGZyb20gXCIuL01vclNwZWVjaFwiO1xuXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL2dyaWRcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgR3JpZCwgUGFnaW5hdGlvbiB9IGZyb20gXCJzd2lwZXJcIjtcbmltcG9ydCB7YWxidW1QaG90bzJ9IGZyb20gXCIuLi8uLi9zcmMvZGIuanNvblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsYnVtMigpIHtcbiAgICBjb25zdCBbYWxidW1QaG90b3MyICwgc2V0QWxidW1QaG90b3MyXT11c2VTdGF0ZShudWxsKVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBzZXRBbGJ1bVBob3RvczIoYWxidW1QaG90bzIpXG4gICAgfSxbXSlcbiAgICBjb25zdCBuZXh0U2xpZGVIYW5kbGVyID0oKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5leHRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcHJldlNsaWRlSGFuZGxlciA9KCk9PntcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmV2XCIpO1xuICAgIH1cblxuICAgIGlmKCFhbGJ1bVBob3RvczIpe1xuICAgICAgICByZXR1cm4gPExvYWRpbmcvPlxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIG14LTMyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCIgbWItNiBcIj5cbiAgICA8TW9yU3BlZWNoIGNsYXNzTW9yZT1cImJsdWUtNDAwXCIgdW5kZXJsaW5lPVwidHJ1ZVwiIGNvbG9ySWNvbj1cImZpbGwtYmx1ZS00MDBcIiBjb2xvclRleHQ9XCJ0ZXh0LWJsdWUtNDAwXCIgY29udGVudD1cItis2K/bjNiv2KrYsduM2YYg2LPYrtmG2LHYp9mG24wg2YfYp1wiIG5leHRCdXR0b25IYW5kbGVyPXtuZXh0U2xpZGVIYW5kbGVyfSBwcmV2QnV0dG9uSGFuZGxlcj17cHJldlNsaWRlSGFuZGxlcn0vPlxuICAgIDwvZGl2PlxuICAgICAgPFN3aXBlclxuICAgICAgICBzbGlkZXNQZXJWaWV3PXszfVxuICAgICAgICBncmlkPXt7XG4gICAgICAgICAgcm93czogMixcbiAgICAgICAgfX1cbiAgICAgICAgc3BhY2VCZXR3ZWVuPXszMH1cbiAgICAgICAgbW9kdWxlcz17W0dyaWQsIFBhZ2luYXRpb25dfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05NiAgXCJcbiAgICAgID5cbiAgICAgICAge2FsYnVtUGhvdG9zMi5tYXAoaXRlbT0+XG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCIhZmxleCAhaXRlbXMtY2VudGVyICFqdXN0aWZ5LWNlbnRlciAhaC00MCBib3JkZXIgcm91bmRlZC1sLW1kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQwIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgIFwiIHNyYz17aXRlbS5zcmN9IGFsdD17aXRlbS5hbHR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGgtZnVsbCB3LTgwIHB5LTMgcHItMyBiZy1uZXV0cmFsLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiLz48cGF0aCBkPVwiTTEyIDNhMyAzIDAgMCAwLTMgM3Y0YTMgMyAwIDAgMCA2IDBWNmEzIDMgMCAwIDAtMy0zem0wLTJhNSA1IDAgMCAxIDUgNXY0YTUgNSAwIDAgMS0xMCAwVjZhNSA1IDAgMCAxIDUtNXpNMy4wNTUgMTFINS4wN2E3LjAwMiA3LjAwMiAwIDAgMCAxMy44NTggMGgyLjAxNkE5LjAwNCA5LjAwNCAwIDAgMSAxMyAxOC45NDVWMjNoLTJ2LTQuMDU1QTkuMDA0IDkuMDA0IDAgMCAxIDMuMDU1IDExelwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj7ZiNuM2LMg2KfYs9iq2KfYrzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+2LPYrtmG2LHYp9mG24wg2KfYs9iq2KfYryDYr9ixINiq2YfYsdin2YY8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTggb3BhY2l0eS03MCB0ZXh0LXNtIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAteC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPjxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIi8+PHBhdGggZD1cIk0xNyAzaDRhMSAxIDAgMCAxIDEgMXYxNmExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoNFYxaDJ2Mmg2VjFoMnYyem0zIDhINHY4aDE2di04em0tNS02SDl2Mkg3VjVINHY0aDE2VjVoLTN2MmgtMlY1em0tOSA4aDJ2Mkg2di0yem01IDBoMnYyaC0ydi0yem01IDBoMnYyaC0ydi0yelwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4xNDAxLzkvMjU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiLz48cGF0aCBkPVwiTTIwLjAwNSAyQzIxLjEwNyAyIDIyIDIuODk4IDIyIDMuOTl2MTYuMDJjMCAxLjA5OS0uODkzIDEuOTktMS45OTUgMS45OUg0di00SDJ2LTJoMnYtM0gydi0yaDJWOEgyVjZoMlYyaDE2LjAwNXpNOCA0SDZ2MTZoMlY0em0xMiAwSDEwdjE2aDEwVjR6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgXG4gICAgICA8L1N3aXBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJMb2FkaW5nIiwiTW9yU3BlZWNoIiwiR3JpZCIsIlBhZ2luYXRpb24iLCJhbGJ1bVBob3RvMiIsIkFsYnVtMiIsImFsYnVtUGhvdG9zMiIsInNldEFsYnVtUGhvdG9zMiIsIm5leHRTbGlkZUhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwicHJldlNsaWRlSGFuZGxlciIsImRpdiIsImNsYXNzTmFtZSIsImNsYXNzTW9yZSIsInVuZGVybGluZSIsImNvbG9ySWNvbiIsImNvbG9yVGV4dCIsImNvbnRlbnQiLCJuZXh0QnV0dG9uSGFuZGxlciIsInByZXZCdXR0b25IYW5kbGVyIiwic2xpZGVzUGVyVmlldyIsImdyaWQiLCJyb3dzIiwic3BhY2VCZXR3ZWVuIiwibW9kdWxlcyIsIm1hcCIsIml0ZW0iLCJkaXIiLCJpbWciLCJzcmMiLCJhbHQiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJ3aWR0aCIsImhlaWdodCIsInBhdGgiLCJmaWxsIiwiZCIsInAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Album2.js\n"));

/***/ })

});