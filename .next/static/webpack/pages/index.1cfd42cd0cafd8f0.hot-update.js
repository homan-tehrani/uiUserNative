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

/***/ "./src/components/Album3.js":
/*!**********************************!*\
  !*** ./src/components/Album3.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Album3; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading */ \"./src/components/loading.js\");\n/* harmony import */ var _MorSpeech__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MorSpeech */ \"./src/components/MorSpeech.js\");\n/* harmony import */ var _src_db_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/db.json */ \"./src/db.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Album3(param) {\n    let { datas  } = param;\n    _s();\n    const [albumPhotos3, setAlbumPhotos3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setAlbumPhotos3(_src_db_json__WEBPACK_IMPORTED_MODULE_8__.albumPhoto3);\n    }, []);\n    const nextSlideHandler = ()=>{\n        console.log(\"next\");\n    };\n    const prevSlideHandler = ()=>{\n        console.log(\"prev\");\n    };\n    if (!albumPhotos3) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n            lineNumber: 26,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-800 pt-12 pb-8 mb-16  px-4 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"-translate-y-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MorSpeech__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    classMore: \"white\",\n                    colorIcon: \"fill-white\",\n                    colorText: \"text-white\",\n                    nextButtonHandler: nextSlideHandler,\n                    prevButtonHandler: prevSlideHandler,\n                    content: \"پربازدیدترین سخنرانی ها\",\n                    icons: true\n                }, void 0, false, {\n                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                slidesPerView: 4,\n                spaceBetween: 15,\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination\n                ],\n                className: \"w-full h-80  \",\n                children: albumPhotos3.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        dir: \"rtl\",\n                        className: \" bg-gray-900  p-4  text-white border border-cyan-500 rounded-lg \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full  flex flex-col justify-between \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex  items-center w-full  \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-24 h-20\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: item.src,\n                                                alt: item.alt,\n                                                className: \"w-full h-full\"\n                                            }, void 0, false, {\n                                                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            dir: \"ltr\",\n                                            className: \"flex flex-col items-center pr-2 text-lg\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: \"استاد\"\n                                                }, void 0, false, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: \"@leui\"\n                                                }, void 0, false, {\n                                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" w-full h-10 text-sm -translate-y-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"مطالب این وب گاه با هدف روشنگری برای شما عزیزان تهیه و تدوین شده است\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" w-full h-10 \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-cyan-500 \",\n                                        href: \"#\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                                            children: \"بیشتر\"\n                                        }, void 0, false, {\n                                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" text-center text-sm\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"pm 5:25 . sep1 2023 \"\n                                    }, void 0, false, {\n                                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    }, item.id, false, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/Album3.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Album3, \"tVVf6NEZ7mxEHCygT7VvOtkM6yw=\");\n_c = Album3;\nvar _c;\n$RefreshReg$(_c, \"Album3\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbGJ1bTMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNSO0FBQy9CO0FBQ1c7QUFDSztBQUNKO0FBQ0k7QUFDUztBQUU5QixTQUFTVSxPQUFPLEtBQVMsRUFBRTtRQUFYLEVBQUVDLE1BQUssRUFBRSxHQUFUOztJQUM3QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RVLGdCQUFnQkoscURBQVdBO0lBQzdCLEdBQUcsRUFBRTtJQUdMLE1BQU1LLG1CQUFrQixJQUFJO1FBQzFCQyxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUVBLE1BQU1DLG1CQUFrQixJQUFJO1FBQzFCRixRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUVBLElBQUksQ0FBQ0osY0FBYztRQUNqQixxQkFBTyw4REFBQ0wsZ0RBQU9BOzs7OztJQUNqQixDQUFDO0lBRUQscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ1gsa0RBQVNBO29CQUFDWSxXQUFVO29CQUFRQyxXQUFVO29CQUFhQyxXQUFVO29CQUFhQyxtQkFBbUJUO29CQUFrQlUsbUJBQW1CUDtvQkFBa0JRLFNBQVE7b0JBQTBCQyxPQUFPLElBQUk7Ozs7Ozs7Ozs7OzBCQUlwTSw4REFBQ3RCLGdEQUFNQTtnQkFDTHVCLGVBQWU7Z0JBQ2ZDLGNBQWM7Z0JBRWRDLFNBQVM7b0JBQUN2Qiw4Q0FBVUE7aUJBQUM7Z0JBQ3JCYSxXQUFVOzBCQUVUUCxhQUFha0IsR0FBRyxDQUFDLENBQUNDLHFCQUNqQiw4REFBQzFCLHFEQUFXQTt3QkFFVjJCLEtBQUk7d0JBQ0piLFdBQVU7a0NBR1YsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FHZiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ2M7Z0RBQUlDLEtBQUtILEtBQUtHLEdBQUc7Z0RBQUVDLEtBQUtKLEtBQUtJLEdBQUc7Z0RBQUVoQixXQUFVOzs7Ozs7Ozs7OztzREFFL0MsOERBQUNEOzRDQUFJYyxLQUFJOzRDQUFNYixXQUFVOzs4REFDdkIsOERBQUNpQjs4REFBRTs7Ozs7OzhEQUNILDhEQUFDQTs4REFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUlQLDhEQUFDbEI7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNpQjtrREFBRTs7Ozs7Ozs7Ozs7OENBTUwsOERBQUNsQjtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ2tCO3dDQUFFbEIsV0FBVTt3Q0FBaUJtQixNQUFLO2tEQUNqQyw0RUFBQ0M7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OENBT1AsOERBQUNyQjtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ2lCO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFuQ0ZMLEtBQUtTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ3RCLENBQUM7R0E5RXVCOUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWxidW0zLmpzP2UzNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gXCJzd2lwZXJcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmltcG9ydCBNb3JTcGVlY2ggZnJvbSBcIi4vTW9yU3BlZWNoXCI7XG5pbXBvcnQge2FsYnVtUGhvdG8zfSBmcm9tIFwiLi4vLi4vc3JjL2RiLmpzb25cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGJ1bTMoeyBkYXRhcyB9KSB7XG4gIGNvbnN0IFthbGJ1bVBob3RvczMsIHNldEFsYnVtUGhvdG9zM10gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBbGJ1bVBob3RvczMoYWxidW1QaG90bzMpO1xuICB9LCBbXSk7XG5cblxuICBjb25zdCBuZXh0U2xpZGVIYW5kbGVyID0oKT0+e1xuICAgIGNvbnNvbGUubG9nKFwibmV4dFwiKTtcbiAgfVxuXG4gIGNvbnN0IHByZXZTbGlkZUhhbmRsZXIgPSgpPT57XG4gICAgY29uc29sZS5sb2coXCJwcmV2XCIpO1xuICB9XG5cbiAgaWYgKCFhbGJ1bVBob3RvczMpIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcHQtMTIgcGItOCBtYi0xNiAgcHgtNCBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItdHJhbnNsYXRlLXktNVwiPlxuICAgICAgICA8TW9yU3BlZWNoIGNsYXNzTW9yZT1cIndoaXRlXCIgY29sb3JJY29uPVwiZmlsbC13aGl0ZVwiIGNvbG9yVGV4dD1cInRleHQtd2hpdGVcIiBuZXh0QnV0dG9uSGFuZGxlcj17bmV4dFNsaWRlSGFuZGxlcn0gcHJldkJ1dHRvbkhhbmRsZXI9e3ByZXZTbGlkZUhhbmRsZXJ9IGNvbnRlbnQ9XCLZvtix2KjYp9iy2K/bjNiv2KrYsduM2YYg2LPYrtmG2LHYp9mG24wg2YfYp1wiIGljb25zPXt0cnVlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgIFxuXG4gICAgICA8U3dpcGVyXG4gICAgICAgIHNsaWRlc1BlclZpZXc9ezR9XG4gICAgICAgIHNwYWNlQmV0d2Vlbj17MTV9XG4gICAgIFxuICAgICAgICBtb2R1bGVzPXtbUGFnaW5hdGlvbl19XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTgwICBcIlxuICAgICAgPlxuICAgICAgICB7YWxidW1QaG90b3MzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxTd2lwZXJTbGlkZVxuICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIGRpcj1cInJ0bFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgYmctZ3JheS05MDAgIHAtNCAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWN5YW4tNTAwIHJvdW5kZWQtbGcgXCJcbiAgICAgICAgXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsICBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBcIj5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGl0ZW1zLWNlbnRlciB3LWZ1bGwgIFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjQgaC0yMFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnNyY30gYWx0PXtpdGVtLmFsdH0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRpcj1cImx0clwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHByLTIgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxwPtin2LPYqtin2K88L3A+XG4gICAgICAgICAgICAgICAgPHA+QGxldWk8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBoLTEwIHRleHQtc20gLXRyYW5zbGF0ZS15LTZcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAg2YXYt9in2YTYqCDYp9uM2YYg2YjYqCDar9in2Ycg2KjYpyDZh9iv2YEg2LHZiNi02Ybar9ix24wg2KjYsdin24wg2LTZhdinINi52LLbjNiy2KfZhiDYqtmH24zZhyDZiCDYqtiv2YjbjNmGINi02K/Zh1xuICAgICAgICAgICAgICAgINin2LPYqlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIGgtMTAgXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtY3lhbi01MDAgXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8dT5cbiAgICAgICAgICAgICAgICDYqNuM2LTYqtixXG4gICAgICAgICAgICAgICAgPC91PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICA8cD5wbSA1OjI1IC4gc2VwMSAyMDIzIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgKSl9XG4gICAgICA8L1N3aXBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJQYWdpbmF0aW9uIiwiTG9hZGluZyIsIk1vclNwZWVjaCIsImFsYnVtUGhvdG8zIiwiQWxidW0zIiwiZGF0YXMiLCJhbGJ1bVBob3RvczMiLCJzZXRBbGJ1bVBob3RvczMiLCJuZXh0U2xpZGVIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsInByZXZTbGlkZUhhbmRsZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjbGFzc01vcmUiLCJjb2xvckljb24iLCJjb2xvclRleHQiLCJuZXh0QnV0dG9uSGFuZGxlciIsInByZXZCdXR0b25IYW5kbGVyIiwiY29udGVudCIsImljb25zIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm1vZHVsZXMiLCJtYXAiLCJpdGVtIiwiZGlyIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsImEiLCJocmVmIiwidSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Album3.js\n"));

/***/ })

});