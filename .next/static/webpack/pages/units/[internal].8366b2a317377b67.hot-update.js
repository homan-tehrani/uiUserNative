"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/units/[internal]",{

/***/ "./src/components/GalleryForInternalUnits.js":
/*!***************************************************!*\
  !*** ./src/components/GalleryForInternalUnits.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GalleryForInternalUnits; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_db_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/db.json */ \"./src/db.json\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading */ \"./src/components/loading.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import required modules\n\nfunction GalleryForInternalUnits() {\n    _s();\n    const [images2, setImages2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setImages2(_src_db_json__WEBPACK_IMPORTED_MODULE_5__.albumPhoto2);\n    }, []);\n    console.log(images);\n    if (!images2) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/GalleryForInternalUnits.js\",\n            lineNumber: 22,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n            slidesPerView: 4,\n            spaceBetween: 30,\n            breakpoints: {\n                0: {\n                    slidesPerView: 1\n                },\n                400: {\n                    slidesPerView: 2\n                },\n                640: {\n                    slidesPerView: 2\n                },\n                768: {\n                    slidesPerView: 3\n                },\n                1024: {\n                    slidesPerView: 4\n                }\n            },\n            modules: [\n                swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination\n            ],\n            className: \"w-full h-40\",\n            children: images.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full bg-blue-200 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"w-full h-full\",\n                            src: item.src,\n                            alt: item.alt\n                        }, void 0, false, {\n                            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/GalleryForInternalUnits.js\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/GalleryForInternalUnits.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/GalleryForInternalUnits.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/media/mo3ito/3A5A00825A003CDF/program/next-js/siraf-without-backend/src/components/GalleryForInternalUnits.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(GalleryForInternalUnits, \"TSFM0batSuFnFT5sEX1wnKQEFaw=\");\n_c = GalleryForInternalUnits;\nvar _c;\n$RefreshReg$(_c, \"GalleryForInternalUnits\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5Rm9ySW50ZXJuYWxVbml0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDVDtBQUMvQjtBQUNXO0FBQ2lCO0FBQ2hCO0FBSWhDLDBCQUEwQjtBQUNVO0FBRXJCLFNBQVNTLDBCQUEwQjs7SUFFOUMsTUFBTSxDQUFDQyxTQUFVQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDLElBQUk7SUFDNUNDLGdEQUFTQSxDQUFDLElBQUk7UUFDVlEsV0FBV0wscURBQVdBO0lBQzFCLEdBQUUsRUFBRTtJQUVKTSxRQUFRQyxHQUFHLENBQUNDO0lBQ1osSUFBRyxDQUFDSixTQUFRO1FBQ1IscUJBQU8sOERBQUNILGdEQUFPQTs7Ozs7SUFDbkIsQ0FBQztJQUVILHFCQUNFO2tCQUNFLDRFQUFDSCxnREFBTUE7WUFDTFcsZUFBZTtZQUNmQyxjQUFjO1lBQ2RDLGFBQWE7Z0JBQ1QsR0FBRztvQkFDREYsZUFBZTtnQkFDakI7Z0JBQ0EsS0FBSztvQkFDREEsZUFBZTtnQkFDakI7Z0JBQ0YsS0FBSztvQkFDSEEsZUFBZTtnQkFDakI7Z0JBQ0EsS0FBSztvQkFDSEEsZUFBZTtnQkFDakI7Z0JBQ0EsTUFBTTtvQkFDSkEsZUFBZTtnQkFDakI7WUFDRjtZQUNGRyxTQUFTO2dCQUFDViw4Q0FBVUE7YUFBQztZQUNyQlcsV0FBVTtzQkFHVEwsT0FBT00sR0FBRyxDQUFDQyxDQUFBQSxxQkFDWiw4REFBQ2hCLHFEQUFXQTs4QkFDUiw0RUFBQ2lCO3dCQUFJSCxXQUFVO2tDQUNYLDRFQUFDSTs0QkFBSUosV0FBVTs0QkFBZ0JLLEtBQUtILEtBQUtHLEdBQUc7NEJBQUVDLEtBQUtKLEtBQUtJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRM0UsQ0FBQztHQWpEdUJoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5Rm9ySW50ZXJuYWxVbml0cy5qcz9jOWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgeyBhbGJ1bVBob3RvMiB9IGZyb20gXCIuLi8uLi9zcmMvZGIuanNvblwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vbG9hZGluZ1wiO1xuXG5cblxuLy8gaW1wb3J0IHJlcXVpcmVkIG1vZHVsZXNcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tIFwic3dpcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnlGb3JJbnRlcm5hbFVuaXRzKCkge1xuICAgIFxuICAgIGNvbnN0IFtpbWFnZXMyICwgc2V0SW1hZ2VzMl0gPSB1c2VTdGF0ZShudWxsKVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBzZXRJbWFnZXMyKGFsYnVtUGhvdG8yKVxuICAgIH0sW10pXG5cbiAgICBjb25zb2xlLmxvZyhpbWFnZXMpO1xuICAgIGlmKCFpbWFnZXMyKXtcbiAgICAgICAgcmV0dXJuIDxMb2FkaW5nLz5cbiAgICB9XG4gICAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTd2lwZXJcbiAgICAgICAgc2xpZGVzUGVyVmlldz17NH1cbiAgICAgICAgc3BhY2VCZXR3ZWVuPXszMH1cbiAgICAgICAgYnJlYWtwb2ludHM9e3tcbiAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA0MDA6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjQwOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTAyNDoge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICBtb2R1bGVzPXtbUGFnaW5hdGlvbl19XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTQwXCJcbiAgICAgID5cbiAgICAgICAgXG4gICAgICAgIHtpbWFnZXMubWFwKGl0ZW09PlxuICAgICAgICA8U3dpcGVyU2xpZGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctYmx1ZS0yMDAgXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCIgc3JjPXtpdGVtLnNyY30gYWx0PXtpdGVtLmFsdH0gLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgICApfVxuICAgICAgPC9Td2lwZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJhbGJ1bVBob3RvMiIsIkxvYWRpbmciLCJQYWdpbmF0aW9uIiwiR2FsbGVyeUZvckludGVybmFsVW5pdHMiLCJpbWFnZXMyIiwic2V0SW1hZ2VzMiIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZXMiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiYnJlYWtwb2ludHMiLCJtb2R1bGVzIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImRpdiIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GalleryForInternalUnits.js\n"));

/***/ })

});