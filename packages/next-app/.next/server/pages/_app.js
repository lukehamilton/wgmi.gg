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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APOLLO_STATE_PROP_NAME\": () => (/* binding */ APOLLO_STATE_PROP_NAME),\n/* harmony export */   \"initializeApollo\": () => (/* binding */ initializeApollo),\n/* harmony export */   \"addApolloState\": () => (/* binding */ addApolloState),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.isequal */ \"lodash.isequal\");\n/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst APOLLO_STATE_PROP_NAME = \"__APOLLO_STATE__\";\nlet apolloClient;\nfunction createApolloClient() {\n    const url =  false ? 0 : \"localhost:3000\";\n    const baseUrl = `http${ false ? 0 : \"\"}://${url}`;\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        ssrMode: \"undefined\" === \"undefined\",\n        link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n            //   uri: `${baseUrl}/api`, // Server URL (must be absolute)\n            // uri: \"http://localhost:3000/api\",\n            // uri: \"https://www.wgmi.gg/api\",\n            uri:  true ? \"http://localhost:3000/api\" : 0,\n            // //   uri: \"http://localhost:3000/api\",\n            credentials: \"same-origin\"\n        }),\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({\n            typePolicies: {\n                Query: {\n                    fields: {\n                        projects: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__.concatPagination)()\n                    }\n                }\n            }\n        })\n    });\n}\nfunction initializeApollo(initialState = null) {\n    const _apolloClient = apolloClient !== null && apolloClient !== void 0 ? apolloClient : createApolloClient();\n    // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n    // gets hydrated here\n    if (initialState) {\n        // Get existing cache, loaded during client side data fetching\n        const existingCache = _apolloClient.extract();\n        // Merge the existing cache into data passed from getStaticProps/getServerSideProps\n        const data = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(initialState, existingCache, {\n            // combine arrays using object equality (like in sets)\n            arrayMerge: (destinationArray, sourceArray)=>[\n                    ...sourceArray,\n                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!lodash_isequal__WEBPACK_IMPORTED_MODULE_4___default()(d, s)\n                        )\n                    ), \n                ]\n        });\n        // Restore the cache with the merged data\n        _apolloClient.cache.restore(data);\n    }\n    // For SSG and SSR always create a new Apollo Client\n    if (true) return _apolloClient;\n    // Create the Apollo Client once in the client\n    if (!apolloClient) apolloClient = _apolloClient;\n    return _apolloClient;\n}\nfunction addApolloState(client, pageProps) {\n    if (pageProps === null || pageProps === void 0 ? void 0 : pageProps.props) {\n        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();\n    }\n    return pageProps;\n}\nfunction useApollo(pageProps) {\n    const state = pageProps[APOLLO_STATE_PROP_NAME];\n    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo(state)\n    , [\n        state\n    ]);\n    return store;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsU0FBUyxFQUFFLENBQUM7SUFDcEMsS0FBSyxDQUFDRyxLQUFLLEdBQUdILFNBQVMsQ0FBQ2pDLHNCQUFzQjtJQUM5QyxLQUFLLENBQUNxQyxLQUFLLEdBQUc1Qyw4Q0FBTyxLQUFPd0IsZ0JBQWdCLENBQUNtQixLQUFLO01BQUcsQ0FBQ0E7UUFBQUEsS0FBSztJQUFBLENBQUM7SUFDNUQsTUFBTSxDQUFDQyxLQUFLO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0B2ZXJpZmllZC1saW5rcy9uZXh0LWFwcC8uL2xpYi9hcG9sbG8tY2xpZW50LmpzPzk0NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgY29uY2F0UGFnaW5hdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiZGVlcG1lcmdlXCI7XG5pbXBvcnQgaXNFcXVhbCBmcm9tIFwibG9kYXNoLmlzZXF1YWxcIjtcblxuZXhwb3J0IGNvbnN0IEFQT0xMT19TVEFURV9QUk9QX05BTUUgPSBcIl9fQVBPTExPX1NUQVRFX19cIjtcblxubGV0IGFwb2xsb0NsaWVudDtcblxuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICBjb25zdCB1cmwgPVxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WRVJDRUxfVVJMXG4gICAgICA6IFwibG9jYWxob3N0OjMwMDBcIjtcbiAgY29uc3QgYmFzZVVybCA9IGBodHRwJHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcInNcIiA6IFwiXCJcbiAgfTovLyR7dXJsfWA7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiLFxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7XG4gICAgICAvLyAgIHVyaTogYCR7YmFzZVVybH0vYXBpYCwgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcbiAgICAgIC8vIHVyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpXCIsXG4gICAgICAvLyB1cmk6IFwiaHR0cHM6Ly93d3cud2dtaS5nZy9hcGlcIixcbiAgICAgIHVyaTpcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIlxuICAgICAgICAgID8gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpXCJcbiAgICAgICAgICA6IFwiaHR0cHM6Ly93d3cud2dtaS5nZy9hcGlcIixcbiAgICAgIC8vIC8vICAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGlcIixcbiAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsIC8vIEFkZGl0aW9uYWwgZmV0Y2goKSBvcHRpb25zIGxpa2UgYGNyZWRlbnRpYWxzYCBvciBgaGVhZGVyc2BcbiAgICB9KSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgICAgdHlwZVBvbGljaWVzOiB7XG4gICAgICAgIFF1ZXJ5OiB7XG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICBwcm9qZWN0czogY29uY2F0UGFnaW5hdGlvbigpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlID0gbnVsbCkge1xuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpO1xuXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcbiAgLy8gZ2V0cyBoeWRyYXRlZCBoZXJlXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKTtcblxuICAgIC8vIE1lcmdlIHRoZSBleGlzdGluZyBjYWNoZSBpbnRvIGRhdGEgcGFzc2VkIGZyb20gZ2V0U3RhdGljUHJvcHMvZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgY29uc3QgZGF0YSA9IG1lcmdlKGluaXRpYWxTdGF0ZSwgZXhpc3RpbmdDYWNoZSwge1xuICAgICAgLy8gY29tYmluZSBhcnJheXMgdXNpbmcgb2JqZWN0IGVxdWFsaXR5IChsaWtlIGluIHNldHMpXG4gICAgICBhcnJheU1lcmdlOiAoZGVzdGluYXRpb25BcnJheSwgc291cmNlQXJyYXkpID0+IFtcbiAgICAgICAgLi4uc291cmNlQXJyYXksXG4gICAgICAgIC4uLmRlc3RpbmF0aW9uQXJyYXkuZmlsdGVyKChkKSA9PlxuICAgICAgICAgIHNvdXJjZUFycmF5LmV2ZXJ5KChzKSA9PiAhaXNFcXVhbChkLCBzKSlcbiAgICAgICAgKSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICAvLyBSZXN0b3JlIHRoZSBjYWNoZSB3aXRoIHRoZSBtZXJnZWQgZGF0YVxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShkYXRhKTtcbiAgfVxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbiAgLy8gQ3JlYXRlIHRoZSBBcG9sbG8gQ2xpZW50IG9uY2UgaW4gdGhlIGNsaWVudFxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudDtcblxuICByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFwb2xsb1N0YXRlKGNsaWVudCwgcGFnZVByb3BzKSB7XG4gIGlmIChwYWdlUHJvcHM/LnByb3BzKSB7XG4gICAgcGFnZVByb3BzLnByb3BzW0FQT0xMT19TVEFURV9QUk9QX05BTUVdID0gY2xpZW50LmNhY2hlLmV4dHJhY3QoKTtcbiAgfVxuXG4gIHJldHVybiBwYWdlUHJvcHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8ocGFnZVByb3BzKSB7XG4gIGNvbnN0IHN0YXRlID0gcGFnZVByb3BzW0FQT0xMT19TVEFURV9QUk9QX05BTUVdO1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhzdGF0ZSksIFtzdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsIkFwb2xsb0NsaWVudCIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsImNvbmNhdFBhZ2luYXRpb24iLCJtZXJnZSIsImlzRXF1YWwiLCJBUE9MTE9fU1RBVEVfUFJPUF9OQU1FIiwiYXBvbGxvQ2xpZW50IiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1ZFUkNFTF9VUkwiLCJiYXNlVXJsIiwic3NyTW9kZSIsImxpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsImNhY2hlIiwidHlwZVBvbGljaWVzIiwiUXVlcnkiLCJmaWVsZHMiLCJwcm9qZWN0cyIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJkYXRhIiwiYXJyYXlNZXJnZSIsImRlc3RpbmF0aW9uQXJyYXkiLCJzb3VyY2VBcnJheSIsImZpbHRlciIsImQiLCJldmVyeSIsInMiLCJyZXN0b3JlIiwiYWRkQXBvbGxvU3RhdGUiLCJjbGllbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyIsInVzZUFwb2xsbyIsInN0YXRlIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/apollo-client.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/apollo-client */ \"./lib/apollo-client.js\");\n/* harmony import */ var _styles_global_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global/styles.scss */ \"./styles/global/styles.scss\");\n/* harmony import */ var _styles_global_styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_styles_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n// import \"tailwindcss/tailwind.css\";\n\nfunction MyApp({ Component , pageProps  }) {\n    const apolloClient = (0,_lib_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useApollo)(pageProps);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: apolloClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n            attribute: \"class\",\n            storageKey: \"nightwind-mode\",\n            defaultTheme: \"system\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/piesrtasty/development/projects/verified-links/packages/next-app/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/piesrtasty/development/projects/verified-links/packages/next-app/pages/_app.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/piesrtasty/development/projects/verified-links/packages/next-app/pages/_app.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0o7QUFDSztBQUNoRCxFQUFxQztBQUNBO1NBRTVCRyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxLQUFLLENBQUNDLFlBQVksR0FBR0osNkRBQVMsQ0FBQ0csU0FBUztJQUV4QyxNQUFNLDZFQUNITCwwREFBYztRQUFDTyxNQUFNLEVBQUVELFlBQVk7OEZBQ2pDTCxzREFBYTtZQUNaTyxTQUFTLEVBQUMsQ0FBTztZQUNqQkMsVUFBVSxFQUFDLENBQWdCO1lBQzNCQyxZQUFZLEVBQUMsQ0FBUTtrR0FFcEJOLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdmVyaWZpZWQtbGlua3MvbmV4dC1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcbmltcG9ydCB7IHVzZUFwb2xsbyB9IGZyb20gXCIuLi9saWIvYXBvbGxvLWNsaWVudFwiO1xuLy8gaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsL3N0eWxlcy5zY3NzXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBhcG9sbG9DbGllbnQgPSB1c2VBcG9sbG8ocGFnZVByb3BzKTtcblxuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb0NsaWVudH0+XG4gICAgICA8VGhlbWVQcm92aWRlclxuICAgICAgICBhdHRyaWJ1dGU9XCJjbGFzc1wiXG4gICAgICAgIHN0b3JhZ2VLZXk9XCJuaWdodHdpbmQtbW9kZVwiXG4gICAgICAgIGRlZmF1bHRUaGVtZT1cInN5c3RlbVwiXG4gICAgICA+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsIlRoZW1lUHJvdmlkZXIiLCJ1c2VBcG9sbG8iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsb0NsaWVudCIsImNsaWVudCIsImF0dHJpYnV0ZSIsInN0b3JhZ2VLZXkiLCJkZWZhdWx0VGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global/styles.scss":
/*!***********************************!*\
  !*** ./styles/global/styles.scss ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("deepmerge");

/***/ }),

/***/ "lodash.isequal":
/*!*********************************!*\
  !*** external "lodash.isequal" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash.isequal");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();