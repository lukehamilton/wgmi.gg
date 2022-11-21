"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/apollo-client */ \"./lib/apollo-client.js\");\n/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ethersproject/providers */ \"./node_modules/@ethersproject/providers/lib.esm/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/pro-theme */ \"./node_modules/@chakra-ui/pro-theme/dist/index.mjs\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"./node_modules/wagmi/providers/alchemy/dist/wagmi-providers-alchemy.esm.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/providers/public/dist/wagmi-providers-public.esm.js\");\n\n\n\n\n// import {\n//   Web3ReactProvider,\n//   useWeb3React,\n//   UnsupportedChainIdError\n// } from \"@web3-react/core\";\n// import { ThemeProvider } from \"next-themes\";\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_5__.chain.mainnet\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_3__.alchemyProvider)({\n        apiKey: \"L5RtQ25viZAGFha-aS2qZWP-1ZFmLOiy\"\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__.publicProvider)()\n]), chains = ref.chains, provider = ref.provider;\nvar connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains: chains\n}).connectors;\nvar wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors: connectors,\n    provider: provider\n});\nvar myTheme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.extendTheme)({\n    colors: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_10__.theme.colors), {\n        brand: _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_10__.theme.colors.purple\n    })\n}, _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_10__.theme);\nfunction getLibrary(provider) {\n    var library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_11__.Web3Provider(provider);\n    library.pollingInterval = 12000;\n    return library;\n}\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var apolloClient = (0,_lib_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useApollo)(pageProps);\n    console.log(\"getLibrary\", getLibrary);\n    return(// <Web3ReactProvider getLibrary={getLibrary}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.RainbowKitProvider, {\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_12__.ApolloProvider, {\n                client: apolloClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ChakraProvider, {\n                    theme: myTheme,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, pageProps), void 0, false, {\n                        fileName: \"/Users/piesrtasty/development/projects/verified-links/pages/_app.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/piesrtasty/development/projects/verified-links/pages/_app.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/piesrtasty/development/projects/verified-links/pages/_app.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/piesrtasty/development/projects/verified-links/pages/_app.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/piesrtasty/development/projects/verified-links/pages/_app.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this));\n}\n_s(MyApp, \"tbJ3b4FkvMzOUeZ/NFKWbtTZZvM=\", false, function() {\n    return [\n        _lib_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useApollo\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUFnRDtBQUNoRCxXQUFXO0FBQ1gsdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQiw0QkFBNEI7QUFDNUIsNkJBQTZCO0FBQzdCLCtDQUErQztBQUNFO0FBQ087QUFFTjtBQUNIO0FBQ0Y7QUFFRjtBQU9vQztBQUNMO0FBQ2hCO0FBQ0Y7O0FBRXhELElBQTZCUyxHQU01QixHQU40QkEsc0RBQWUsQ0FDMUM7SUFBQ0QsZ0RBQWE7Q0FBQyxFQUNmO0lBQ0VJLHdFQUFlLENBQUM7UUFBRUcsTUFBTSxFQUFFLGtDQUFrQztLQUFFLENBQUM7SUFDL0RGLHNFQUFjLEVBQUU7Q0FDakIsQ0FDRixFQU5PRyxNQUFNLEdBQWVQLEdBTTVCLENBTk9PLE1BQU0sRUFBRUMsUUFBUSxHQUFLUixHQU01QixDQU5lUSxRQUFRO0FBUXhCLElBQU0sVUFBWSxHQUFLWCx5RUFBaUIsQ0FBQztJQUN2Q2EsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QkgsTUFBTSxFQUFOQSxNQUFNO0NBQ1AsQ0FBQyxDQUhNRSxVQUFVO0FBS2xCLElBQU1FLFdBQVcsR0FBR1YsbURBQVksQ0FBQztJQUMvQlcsV0FBVyxFQUFFLElBQUk7SUFDakJILFVBQVUsRUFBVkEsVUFBVTtJQUNWRCxRQUFRLEVBQVJBLFFBQVE7Q0FDVCxDQUFDO0FBRUYsSUFBTUssT0FBTyxHQUFHbEIsNkRBQVcsQ0FDekI7SUFDRW1CLE1BQU0sRUFBRSx3S0FBS2xCLCtEQUFZO1FBQUVtQixLQUFLLEVBQUVuQixzRUFBbUI7TUFBRTtDQUN4RCxFQUNEQSx3REFBSyxDQUNOO0FBRUQsU0FBU3FCLFVBQVUsQ0FBQ1QsUUFBYSxFQUFnQjtJQUMvQyxJQUFNVSxPQUFPLEdBQUcsSUFBSXpCLG1FQUFZLENBQUNlLFFBQVEsQ0FBQztJQUUxQ1UsT0FBTyxDQUFDQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBRWhDLE9BQU9ELE9BQU8sQ0FBQztDQUNoQjtBQUVELFNBQVNFLEtBQUssQ0FBQyxLQUF3QixFQUFFO1FBQXhCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTOztJQUNuQyxJQUFNQyxZQUFZLEdBQUcvQiw2REFBUyxDQUFDOEIsU0FBUyxDQUFDO0lBRXpDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUVSLFVBQVUsQ0FBQyxDQUFDO0lBRXRDLE9BQ0UsOENBQThDO2tCQUM5Qyw4REFBQ2YsOENBQVc7UUFBQ3dCLE1BQU0sRUFBRWYsV0FBVztrQkFDOUIsNEVBQUNiLHNFQUFrQjtZQUFDUyxNQUFNLEVBQUVBLE1BQU07c0JBQ2hDLDRFQUFDaEIsMkRBQWM7Z0JBQUNtQyxNQUFNLEVBQUVILFlBQVk7MEJBTWxDLDRFQUFDN0IsNERBQWM7b0JBQUNFLEtBQUssRUFBRWlCLE9BQU87OEJBQzVCLDRFQUFDUSxTQUFTLHFGQUFLQyxTQUFTOzs7OzRCQUFJOzs7Ozt3QkFDYjs7Ozs7b0JBRUY7Ozs7O2dCQUNFOzs7OztZQUNULEVBRWQ7Q0FDSDtHQXhCUUYsS0FBSzs7UUFDUzVCLHlEQUFTOzs7QUFEdkI0QixLQUFBQSxLQUFLO0FBMEJkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuLy8gaW1wb3J0IHtcbi8vICAgV2ViM1JlYWN0UHJvdmlkZXIsXG4vLyAgIHVzZVdlYjNSZWFjdCxcbi8vICAgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3Jcbi8vIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcbi8vIGltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcbmltcG9ydCB7IHVzZUFwb2xsbyB9IGZyb20gXCIuLi9saWIvYXBvbGxvLWNsaWVudFwiO1xuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiO1xuXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3Byby10aGVtZVwiO1xuXG5pbXBvcnQgXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3NcIjtcblxuLy8gaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG4vLyBpbXBvcnQgeyBFdGhlcnNBcHBDb250ZXh0IH0gZnJvbSBcImV0aC1ob29rcy9jb250ZXh0XCI7XG4vLyBpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuXG5pbXBvcnQgeyBnZXREZWZhdWx0V2FsbGV0cywgUmFpbmJvd0tpdFByb3ZpZGVyIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCB7IGNoYWluLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvYWxjaGVteVwiO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL3B1YmxpY1wiO1xuXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgW2NoYWluLm1haW5uZXRdLFxuICBbXG4gICAgYWxjaGVteVByb3ZpZGVyKHsgYXBpS2V5OiBcIkw1UnRRMjV2aVpBR0ZoYS1hUzJxWldQLTFaRm1MT2l5XCIgfSksXG4gICAgcHVibGljUHJvdmlkZXIoKVxuICBdXG4pO1xuXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcbiAgYXBwTmFtZTogXCJNeSBSYWluYm93S2l0IEFwcFwiLFxuICBjaGFpbnNcbn0pO1xuXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlclxufSk7XG5cbmNvbnN0IG15VGhlbWUgPSBleHRlbmRUaGVtZShcbiAge1xuICAgIGNvbG9yczogeyAuLi50aGVtZS5jb2xvcnMsIGJyYW5kOiB0aGVtZS5jb2xvcnMucHVycGxlIH1cbiAgfSxcbiAgdGhlbWVcbik7XG5cbmZ1bmN0aW9uIGdldExpYnJhcnkocHJvdmlkZXI6IGFueSk6IFdlYjNQcm92aWRlciB7XG4gIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKTtcblxuICBsaWJyYXJ5LnBvbGxpbmdJbnRlcnZhbCA9IDEyMDAwO1xuXG4gIHJldHVybiBsaWJyYXJ5O1xufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcyk7XG5cbiAgY29uc29sZS5sb2coXCJnZXRMaWJyYXJ5XCIsIGdldExpYnJhcnkpO1xuXG4gIHJldHVybiAoXG4gICAgLy8gPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxuICAgICAgICAgIHsvKiA8VGhlbWVQcm92aWRlclxuICAgICAgICAgIGF0dHJpYnV0ZT1cImNsYXNzXCJcbiAgICAgICAgICBzdG9yYWdlS2V5PVwibmlnaHR3aW5kLW1vZGVcIlxuICAgICAgICAgIGRlZmF1bHRUaGVtZT1cInN5c3RlbVwiXG4gICAgICAgID4gKi99XG4gICAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXtteVRoZW1lfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgICAgICAgIHsvKiA8L1RoZW1lUHJvdmlkZXI+ICovfVxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgICAvLyA8L1dlYjNSZWFjdFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsInVzZUFwb2xsbyIsIldlYjNQcm92aWRlciIsIkNoYWtyYVByb3ZpZGVyIiwiZXh0ZW5kVGhlbWUiLCJ0aGVtZSIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImFsY2hlbXlQcm92aWRlciIsInB1YmxpY1Byb3ZpZGVyIiwibWFpbm5ldCIsImFwaUtleSIsImNoYWlucyIsInByb3ZpZGVyIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwibXlUaGVtZSIsImNvbG9ycyIsImJyYW5kIiwicHVycGxlIiwiZ2V0TGlicmFyeSIsImxpYnJhcnkiLCJwb2xsaW5nSW50ZXJ2YWwiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsb0NsaWVudCIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});