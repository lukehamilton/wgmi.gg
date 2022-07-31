"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/apollo-client.js":
/*!******************************!*\
  !*** ./lib/apollo-client.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APOLLO_STATE_PROP_NAME\": () => (/* binding */ APOLLO_STATE_PROP_NAME),\n/* harmony export */   \"addApolloState\": () => (/* binding */ addApolloState),\n/* harmony export */   \"initializeApollo\": () => (/* binding */ initializeApollo),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.isequal */ \"lodash.isequal\");\n/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst APOLLO_STATE_PROP_NAME = \"__APOLLO_STATE__\";\nlet apolloClient;\nfunction createApolloClient() {\n    const url =  false ? 0 : \"localhost:8080\";\n    const baseUrl = `http${ false ? 0 : \"\"}://${url}`;\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        ssrMode: \"undefined\" === \"undefined\",\n        link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n            //   uri: `${baseUrl}/api`, // Server URL (must be absolute)\n            // uri: \"http://localhost:3000/api\",\n            // uri: \"https://www.wgmi.gg/api\",\n            uri:  true ? \"http://localhost:8080/api\" : 0,\n            // //   uri: \"http://localhost:3000/api\",\n            credentials: \"same-origin\" // Additional fetch() options like `credentials` or `headers`\n        }),\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({\n            typePolicies: {\n                Query: {\n                    fields: {\n                        projects: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__.concatPagination)()\n                    }\n                }\n            }\n        })\n    });\n}\nfunction initializeApollo(initialState = null) {\n    const _apolloClient = apolloClient ?? createApolloClient();\n    // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n    // gets hydrated here\n    if (initialState) {\n        // Get existing cache, loaded during client side data fetching\n        const existingCache = _apolloClient.extract();\n        // Merge the existing cache into data passed from getStaticProps/getServerSideProps\n        const data = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(initialState, existingCache, {\n            // combine arrays using object equality (like in sets)\n            arrayMerge: (destinationArray, sourceArray)=>[\n                    ...sourceArray,\n                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!lodash_isequal__WEBPACK_IMPORTED_MODULE_4___default()(d, s)))\n                ]\n        });\n        // Restore the cache with the merged data\n        _apolloClient.cache.restore(data);\n    }\n    // For SSG and SSR always create a new Apollo Client\n    if (true) return _apolloClient;\n    // Create the Apollo Client once in the client\n    if (!apolloClient) apolloClient = _apolloClient;\n    return _apolloClient;\n}\nfunction addApolloState(client, pageProps) {\n    if (pageProps?.props) {\n        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();\n    }\n    return pageProps;\n}\nfunction useApollo(pageProps) {\n    const state = pageProps[APOLLO_STATE_PROP_NAME];\n    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo(state), [\n        state\n    ]);\n    return store;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLO0tBQUMsQ0FBQztJQUM3RCxPQUFPQyxLQUFLLENBQUM7Q0FDZCIsInNvdXJjZXMiOlsid2VicGFjazovL3ZlcmlmaWVkLWxpbmtzLy4vbGliL2Fwb2xsby1jbGllbnQuanM/OTQ0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBjb25jYXRQYWdpbmF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L3V0aWxpdGllc1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCJkZWVwbWVyZ2VcIjtcbmltcG9ydCBpc0VxdWFsIGZyb20gXCJsb2Rhc2guaXNlcXVhbFwiO1xuXG5leHBvcnQgY29uc3QgQVBPTExPX1NUQVRFX1BST1BfTkFNRSA9IFwiX19BUE9MTE9fU1RBVEVfX1wiO1xuXG5sZXQgYXBvbGxvQ2xpZW50O1xuXG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoKSB7XG4gIGNvbnN0IHVybCA9XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICA/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1ZFUkNFTF9VUkxcbiAgICAgIDogXCJsb2NhbGhvc3Q6ODA4MFwiO1xuICBjb25zdCBiYXNlVXJsID0gYGh0dHAke1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwic1wiIDogXCJcIlxuICB9Oi8vJHt1cmx9YDtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIsXG4gICAgbGluazogbmV3IEh0dHBMaW5rKHtcbiAgICAgIC8vICAgdXJpOiBgJHtiYXNlVXJsfS9hcGlgLCAvLyBTZXJ2ZXIgVVJMIChtdXN0IGJlIGFic29sdXRlKVxuICAgICAgLy8gdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGlcIixcbiAgICAgIC8vIHVyaTogXCJodHRwczovL3d3dy53Z21pLmdnL2FwaVwiLFxuICAgICAgdXJpOlxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXG4gICAgICAgICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGlcIlxuICAgICAgICAgIDogXCJodHRwczovL3d3dy53Z21pLmdnL2FwaVwiLFxuICAgICAgLy8gLy8gICB1cmk6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaVwiLFxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIiAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gICAgfSksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICAgIHR5cGVQb2xpY2llczoge1xuICAgICAgICBRdWVyeToge1xuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgcHJvamVjdHM6IGNvbmNhdFBhZ2luYXRpb24oKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KCk7XG5cbiAgLy8gSWYgeW91ciBwYWdlIGhhcyBOZXh0LmpzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kcyB0aGF0IHVzZSBBcG9sbG8gQ2xpZW50LCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAvLyBnZXRzIGh5ZHJhdGVkIGhlcmVcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIEdldCBleGlzdGluZyBjYWNoZSwgbG9hZGVkIGR1cmluZyBjbGllbnQgc2lkZSBkYXRhIGZldGNoaW5nXG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpO1xuXG4gICAgLy8gTWVyZ2UgdGhlIGV4aXN0aW5nIGNhY2hlIGludG8gZGF0YSBwYXNzZWQgZnJvbSBnZXRTdGF0aWNQcm9wcy9nZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICBjb25zdCBkYXRhID0gbWVyZ2UoaW5pdGlhbFN0YXRlLCBleGlzdGluZ0NhY2hlLCB7XG4gICAgICAvLyBjb21iaW5lIGFycmF5cyB1c2luZyBvYmplY3QgZXF1YWxpdHkgKGxpa2UgaW4gc2V0cylcbiAgICAgIGFycmF5TWVyZ2U6IChkZXN0aW5hdGlvbkFycmF5LCBzb3VyY2VBcnJheSkgPT4gW1xuICAgICAgICAuLi5zb3VyY2VBcnJheSxcbiAgICAgICAgLi4uZGVzdGluYXRpb25BcnJheS5maWx0ZXIoZCA9PiBzb3VyY2VBcnJheS5ldmVyeShzID0+ICFpc0VxdWFsKGQsIHMpKSlcbiAgICAgIF1cbiAgICB9KTtcblxuICAgIC8vIFJlc3RvcmUgdGhlIGNhY2hlIHdpdGggdGhlIG1lcmdlZCBkYXRhXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGRhdGEpO1xuICB9XG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xuICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQXBvbGxvU3RhdGUoY2xpZW50LCBwYWdlUHJvcHMpIHtcbiAgaWYgKHBhZ2VQcm9wcz8ucHJvcHMpIHtcbiAgICBwYWdlUHJvcHMucHJvcHNbQVBPTExPX1NUQVRFX1BST1BfTkFNRV0gPSBjbGllbnQuY2FjaGUuZXh0cmFjdCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhZ2VQcm9wcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhwYWdlUHJvcHMpIHtcbiAgY29uc3Qgc3RhdGUgPSBwYWdlUHJvcHNbQVBPTExPX1NUQVRFX1BST1BfTkFNRV07XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKHN0YXRlKSwgW3N0YXRlXSk7XG4gIHJldHVybiBzdG9yZTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiQXBvbGxvQ2xpZW50IiwiSHR0cExpbmsiLCJJbk1lbW9yeUNhY2hlIiwiY29uY2F0UGFnaW5hdGlvbiIsIm1lcmdlIiwiaXNFcXVhbCIsIkFQT0xMT19TVEFURV9QUk9QX05BTUUiLCJhcG9sbG9DbGllbnQiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVkVSQ0VMX1VSTCIsImJhc2VVcmwiLCJzc3JNb2RlIiwibGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsInByb2plY3RzIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsImRhdGEiLCJhcnJheU1lcmdlIiwiZGVzdGluYXRpb25BcnJheSIsInNvdXJjZUFycmF5IiwiZmlsdGVyIiwiZCIsImV2ZXJ5IiwicyIsInJlc3RvcmUiLCJhZGRBcG9sbG9TdGF0ZSIsImNsaWVudCIsInBhZ2VQcm9wcyIsInByb3BzIiwidXNlQXBvbGxvIiwic3RhdGUiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/apollo-client.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/apollo-client */ \"./lib/apollo-client.js\");\n/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/providers */ \"@ethersproject/providers\");\n/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/pro-theme */ \"@chakra-ui/pro-theme\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_5__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__]);\n([_chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_5__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// import {\n//   Web3ReactProvider,\n//   useWeb3React,\n//   UnsupportedChainIdError\n// } from \"@web3-react/core\";\n// import { ThemeProvider } from \"next-themes\";\n\n\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_7__.chain.mainnet\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_8__.alchemyProvider)({\n        apiKey: \"L5RtQ25viZAGFha-aS2qZWP-1ZFmLOiy\"\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_9__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.extendTheme)({\n    colors: {\n        ..._chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_5__.theme.colors,\n        brand: _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_5__.theme.colors.purple\n    }\n}, _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_5__.theme);\nfunction getLibrary(provider) {\n    const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_3__.Web3Provider(provider);\n    library.pollingInterval = 12000;\n    return library;\n}\nfunction MyApp({ Component , pageProps  }) {\n    const apolloClient = (0,_lib_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useApollo)(pageProps);\n    console.log(\"getLibrary\", getLibrary);\n    return(// <Web3ReactProvider getLibrary={getLibrary}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_7__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.RainbowKitProvider, {\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n                client: apolloClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n                    theme: myTheme,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/piesrtasty/development/projects/verified-links/pages/_app.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/piesrtasty/development/projects/verified-links/pages/_app.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/piesrtasty/development/projects/verified-links/pages/_app.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/piesrtasty/development/projects/verified-links/pages/_app.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/piesrtasty/development/projects/verified-links/pages/_app.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFnRDtBQUNoRCxXQUFXO0FBQ1gsdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQiw0QkFBNEI7QUFDNUIsNkJBQTZCO0FBQzdCLCtDQUErQztBQUNFO0FBQ087QUFFTjtBQUNIO0FBQ0Y7QUFFRjtBQU9vQztBQUNMO0FBQ2hCO0FBQ0Y7QUFFeEQsTUFBTSxFQUFFYyxNQUFNLEdBQUVDLFFBQVEsR0FBRSxHQUFHTixzREFBZSxDQUMxQztJQUFDRCxnREFBYTtDQUFDLEVBQ2Y7SUFDRUksd0VBQWUsQ0FBQztRQUFFSyxNQUFNLEVBQUUsa0NBQWtDO0tBQUUsQ0FBQztJQUMvREosc0VBQWMsRUFBRTtDQUNqQixDQUNGO0FBRUQsTUFBTSxFQUFFSyxVQUFVLEdBQUUsR0FBR1oseUVBQWlCLENBQUM7SUFDdkNhLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUJMLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTU0sV0FBVyxHQUFHVixtREFBWSxDQUFDO0lBQy9CVyxXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVTtJQUNWSCxRQUFRO0NBQ1QsQ0FBQztBQUVGLE1BQU1PLE9BQU8sR0FBR2xCLDZEQUFXLENBQ3pCO0lBQ0VtQixNQUFNLEVBQUU7UUFBRSxHQUFHbEIsOERBQVk7UUFBRW1CLEtBQUssRUFBRW5CLHFFQUFtQjtLQUFFO0NBQ3hELEVBQ0RBLHVEQUFLLENBQ047QUFFRCxTQUFTcUIsVUFBVSxDQUFDWCxRQUFhLEVBQWdCO0lBQy9DLE1BQU1ZLE9BQU8sR0FBRyxJQUFJekIsa0VBQVksQ0FBQ2EsUUFBUSxDQUFDO0lBRTFDWSxPQUFPLENBQUNDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFFaEMsT0FBT0QsT0FBTyxDQUFDO0NBQ2hCO0FBRUQsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMsTUFBTUMsWUFBWSxHQUFHL0IsNkRBQVMsQ0FBQzhCLFNBQVMsQ0FBQztJQUV6Q0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFUixVQUFVLENBQUMsQ0FBQztJQUV0QyxPQUNFLDhDQUE4QztrQkFDOUMsOERBQUNmLDhDQUFXO1FBQUN3QixNQUFNLEVBQUVmLFdBQVc7a0JBQzlCLDRFQUFDYixzRUFBa0I7WUFBQ08sTUFBTSxFQUFFQSxNQUFNO3NCQUNoQyw0RUFBQ2QsMERBQWM7Z0JBQUNtQyxNQUFNLEVBQUVILFlBQVk7MEJBTWxDLDRFQUFDN0IsNERBQWM7b0JBQUNFLEtBQUssRUFBRWlCLE9BQU87OEJBQzVCLDRFQUFDUSxTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7OzRCQUFJOzs7Ozt3QkFDYjs7Ozs7b0JBRUY7Ozs7O2dCQUNFOzs7OztZQUNULEVBRWQ7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZXJpZmllZC1saW5rcy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbi8vIGltcG9ydCB7XG4vLyAgIFdlYjNSZWFjdFByb3ZpZGVyLFxuLy8gICB1c2VXZWIzUmVhY3QsXG4vLyAgIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yXG4vLyB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG4vLyBpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tIFwiLi4vbGliL2Fwb2xsby1jbGllbnRcIjtcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIjtcblxuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9wcm8tdGhlbWVcIjtcblxuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XG5cbi8vIGltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xuLy8gaW1wb3J0IHsgRXRoZXJzQXBwQ29udGV4dCB9IGZyb20gXCJldGgtaG9va3MvY29udGV4dFwiO1xuLy8gaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcblxuaW1wb3J0IHsgZ2V0RGVmYXVsdFdhbGxldHMsIFJhaW5ib3dLaXRQcm92aWRlciB9IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBhbGNoZW15UHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL2FsY2hlbXlcIjtcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9wdWJsaWNcIjtcblxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gIFtjaGFpbi5tYWlubmV0XSxcbiAgW1xuICAgIGFsY2hlbXlQcm92aWRlcih7IGFwaUtleTogXCJMNVJ0UTI1dmlaQUdGaGEtYVMycVpXUC0xWkZtTE9peVwiIH0pLFxuICAgIHB1YmxpY1Byb3ZpZGVyKClcbiAgXVxuKTtcblxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6IFwiTXkgUmFpbmJvd0tpdCBBcHBcIixcbiAgY2hhaW5zXG59KTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXJcbn0pO1xuXG5jb25zdCBteVRoZW1lID0gZXh0ZW5kVGhlbWUoXG4gIHtcbiAgICBjb2xvcnM6IHsgLi4udGhlbWUuY29sb3JzLCBicmFuZDogdGhlbWUuY29sb3JzLnB1cnBsZSB9XG4gIH0sXG4gIHRoZW1lXG4pO1xuXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIge1xuICBjb25zdCBsaWJyYXJ5ID0gbmV3IFdlYjNQcm92aWRlcihwcm92aWRlcik7XG5cbiAgbGlicmFyeS5wb2xsaW5nSW50ZXJ2YWwgPSAxMjAwMDtcblxuICByZXR1cm4gbGlicmFyeTtcbn1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsbyhwYWdlUHJvcHMpO1xuXG4gIGNvbnNvbGUubG9nKFwiZ2V0TGlicmFyeVwiLCBnZXRMaWJyYXJ5KTtcblxuICByZXR1cm4gKFxuICAgIC8vIDxXZWIzUmVhY3RQcm92aWRlciBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT5cbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfT5cbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cbiAgICAgICAgICB7LyogPFRoZW1lUHJvdmlkZXJcbiAgICAgICAgICBhdHRyaWJ1dGU9XCJjbGFzc1wiXG4gICAgICAgICAgc3RvcmFnZUtleT1cIm5pZ2h0d2luZC1tb2RlXCJcbiAgICAgICAgICBkZWZhdWx0VGhlbWU9XCJzeXN0ZW1cIlxuICAgICAgICA+ICovfVxuICAgICAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17bXlUaGVtZX0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICAgICAgICB7LyogPC9UaGVtZVByb3ZpZGVyPiAqL31cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG4gICAgLy8gPC9XZWIzUmVhY3RQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQXBvbGxvUHJvdmlkZXIiLCJ1c2VBcG9sbG8iLCJXZWIzUHJvdmlkZXIiLCJDaGFrcmFQcm92aWRlciIsImV4dGVuZFRoZW1lIiwidGhlbWUiLCJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImNoYWluIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJhbGNoZW15UHJvdmlkZXIiLCJwdWJsaWNQcm92aWRlciIsImNoYWlucyIsInByb3ZpZGVyIiwibWFpbm5ldCIsImFwaUtleSIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIm15VGhlbWUiLCJjb2xvcnMiLCJicmFuZCIsInB1cnBsZSIsImdldExpYnJhcnkiLCJsaWJyYXJ5IiwicG9sbGluZ0ludGVydmFsIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG9DbGllbnQiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@ethersproject/providers":
/*!*******************************************!*\
  !*** external "@ethersproject/providers" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@ethersproject/providers");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ "lodash.isequal":
/*!*********************************!*\
  !*** external "lodash.isequal" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash.isequal");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@chakra-ui/pro-theme":
/*!***************************************!*\
  !*** external "@chakra-ui/pro-theme" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/pro-theme");;

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();