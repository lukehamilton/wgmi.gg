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
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxHQUFHLENBQUNDLE1BQU07QUFFVixFQUFFLEVBSkYsS0FJeUMsRUFBRSxFQUUxQyxNQUFNLENBQUM7SUFDTixFQUFFLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTSxFQUFFLENBQUM7UUFDbkJDLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Qsd0RBQVk7SUFDbEMsQ0FBQztJQUNEQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTTtBQUN4QixDQUFDO0FBQ0QsaUVBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0B2ZXJpZmllZC1saW5rcy9uZXh0LWFwcC8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxubGV0IHByaXNtYTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XG59XG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"schema\": () => (/* binding */ schema),\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_type_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-type-json */ \"graphql-type-json\");\n/* harmony import */ var graphql_type_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_type_json__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nexus */ \"nexus\");\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micro-cors */ \"micro-cors\");\n/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(micro_cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.js\");\n\n// import { NextApiHandler } from \"next\";\n\n\n\n\n\nconst JSONScalar = (0,nexus__WEBPACK_IMPORTED_MODULE_2__.scalarType)({\n    name: \"JSON\",\n    asNexusMethod: \"json\",\n    serialize: graphql_type_json__WEBPACK_IMPORTED_MODULE_1__.GraphQLJSONObject.serialize,\n    parseValue: graphql_type_json__WEBPACK_IMPORTED_MODULE_1__.GraphQLJSONObject.parseValue,\n    parseLiteral: graphql_type_json__WEBPACK_IMPORTED_MODULE_1__.GraphQLJSONObject.parseLiteral\n});\nconst User = (0,nexus__WEBPACK_IMPORTED_MODULE_2__.objectType)({\n    name: \"User\",\n    definition (t) {\n        t.int(\"id\");\n        t.string(\"address\");\n    }\n});\nconst Project = (0,nexus__WEBPACK_IMPORTED_MODULE_2__.objectType)({\n    name: \"Project\",\n    definition (t) {\n        t.int(\"id\");\n        t.string(\"name\");\n        t.string(\"slug\");\n        t.string(\"website\");\n        t.string(\"twitter\");\n        t.string(\"discord\");\n        t.string(\"opensea\");\n        t.string(\"opensea\");\n        t.json(\"metadata\");\n    }\n});\nconst Query = (0,nexus__WEBPACK_IMPORTED_MODULE_2__.objectType)({\n    name: \"Query\",\n    definition (t) {\n        t.list.field(\"projects\", {\n            type: \"Project\",\n            resolve: (_, args)=>{\n                return _lib_prisma__WEBPACK_IMPORTED_MODULE_5__[\"default\"].project.findMany({\n                    orderBy: [\n                        {\n                            name: \"asc\"\n                        }, \n                    ]\n                });\n            }\n        });\n        t.field(\"project\", {\n            type: \"Project\",\n            args: {\n                slug: (0,nexus__WEBPACK_IMPORTED_MODULE_2__.stringArg)()\n            },\n            resolve: async (_, { slug  })=>{\n                const project = await _lib_prisma__WEBPACK_IMPORTED_MODULE_5__[\"default\"].project.findUnique({\n                    where: {\n                        slug\n                    }\n                });\n                return project;\n            }\n        });\n    }\n});\nconst schema = (0,nexus__WEBPACK_IMPORTED_MODULE_2__.makeSchema)({\n    types: [\n        Query,\n        Project,\n        User,\n        JSONScalar\n    ],\n    outputs: {\n        typegen: path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"generated/nexus-typegen.ts\"),\n        schema: path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"generated/schema.graphql\")\n    }\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n    schema\n});\nlet apolloServerHandler;\nasync function getApolloServerHandler() {\n    if (!apolloServerHandler) {\n        await apolloServer.start();\n        apolloServerHandler = apolloServer.createHandler({\n            path: \"/api\"\n        });\n    }\n    return apolloServerHandler;\n}\nconst handler = async (req, res)=>{\n    const apolloServerHandler1 = await getApolloServerHandler();\n    if (req.method === \"OPTIONS\") {\n        res.end();\n        return;\n    }\n    return apolloServerHandler1(req, res);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (micro_cors__WEBPACK_IMPORTED_MODULE_4___default()()(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDbEQsRUFBeUM7QUFDWTtBQVV2QztBQUVTO0FBQ007QUFDUTtBQUVyQyxLQUFLLENBQUNZLFVBQVUsR0FBR0osaURBQVUsQ0FBQyxDQUFDO0lBQzdCSyxJQUFJLEVBQUUsQ0FBTTtJQUNaWCxhQUFhLEVBQUUsQ0FBTTtJQUNyQlksU0FBUyxFQUFFYiwwRUFBMkI7SUFDdENjLFVBQVUsRUFBRWQsMkVBQTRCO0lBQ3hDZSxZQUFZLEVBQUVmLDZFQUE4QjtBQUM5QyxDQUFDO0FBRUQsS0FBSyxDQUFDZ0IsSUFBSSxHQUFHWCxpREFBVSxDQUFDLENBQUM7SUFDdkJPLElBQUksRUFBRSxDQUFNO0lBQ1pLLFVBQVUsRUFBQ0MsQ0FBQyxFQUFFLENBQUM7UUFDYkEsQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBSTtRQUNWRCxDQUFDLENBQUNFLE1BQU0sQ0FBQyxDQUFTO0lBQ3BCLENBQUM7QUFDSCxDQUFDO0FBRUQsS0FBSyxDQUFDQyxPQUFPLEdBQUdoQixpREFBVSxDQUFDLENBQUM7SUFDMUJPLElBQUksRUFBRSxDQUFTO0lBQ2ZLLFVBQVUsRUFBQ0MsQ0FBQyxFQUFFLENBQUM7UUFDYkEsQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBSTtRQUNWRCxDQUFDLENBQUNFLE1BQU0sQ0FBQyxDQUFNO1FBQ2ZGLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLENBQU07UUFDZkYsQ0FBQyxDQUFDRSxNQUFNLENBQUMsQ0FBUztRQUNsQkYsQ0FBQyxDQUFDRSxNQUFNLENBQUMsQ0FBUztRQUNsQkYsQ0FBQyxDQUFDRSxNQUFNLENBQUMsQ0FBUztRQUNsQkYsQ0FBQyxDQUFDRSxNQUFNLENBQUMsQ0FBUztRQUNsQkYsQ0FBQyxDQUFDRSxNQUFNLENBQUMsQ0FBUztRQUNsQkYsQ0FBQyxDQUFDSSxJQUFJLENBQUMsQ0FBVTtJQUNuQixDQUFDO0FBQ0gsQ0FBQztBQUVELEtBQUssQ0FBQ0MsS0FBSyxHQUFHbEIsaURBQVUsQ0FBQyxDQUFDO0lBQ3hCTyxJQUFJLEVBQUUsQ0FBTztJQUNiSyxVQUFVLEVBQUNDLENBQUMsRUFBRSxDQUFDO1FBQ2JBLENBQUMsQ0FBQ00sSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBVSxXQUFFLENBQUM7WUFDeEJDLElBQUksRUFBRSxDQUFTO1lBQ2ZDLE9BQU8sR0FBR0MsQ0FBQyxFQUFFQyxJQUFJLEdBQUssQ0FBQztnQkFDckIsTUFBTSxDQUFDbkIsb0VBQXVCLENBQUMsQ0FBQztvQkFDOUJzQixPQUFPLEVBQUUsQ0FBQzt3QkFDUixDQUFDOzRCQUNDcEIsSUFBSSxFQUFFLENBQUs7d0JBQ2IsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUNETSxDQUFDLENBQUNPLEtBQUssQ0FBQyxDQUFTLFVBQUUsQ0FBQztZQUNsQkMsSUFBSSxFQUFFLENBQVM7WUFDZkcsSUFBSSxFQUFFLENBQUM7Z0JBQ0xJLElBQUksRUFBRTNCLGdEQUFTO1lBQ2pCLENBQUM7WUFDRHFCLE9BQU8sU0FBU0MsQ0FBQyxFQUFFLENBQUMsQ0FBQ0ssSUFBSSxFQUFDLENBQUMsR0FBSyxDQUFDO2dCQUMvQixLQUFLLENBQUNILE9BQU8sR0FBRyxLQUFLLENBQUNwQixzRUFBeUIsQ0FBQyxDQUFDO29CQUMvQ3lCLEtBQUssRUFBRSxDQUFDO3dCQUFDRixJQUFJO29CQUFDLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDSCxPQUFPO1lBQ2hCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFTSxLQUFLLENBQUNNLE1BQU0sR0FBR2xDLGlEQUFVLENBQUMsQ0FBQztJQUNoQ21DLEtBQUssRUFBRSxDQUFDZDtRQUFBQSxLQUFLO1FBQUVGLE9BQU87UUFBRUwsSUFBSTtRQUFFTCxVQUFVO0lBQUEsQ0FBQztJQUN6QzJCLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLE9BQU8sRUFBRS9CLGdEQUFTLENBQUNpQyxPQUFPLENBQUNDLEdBQUcsSUFBSSxDQUE0QjtRQUM5RE4sTUFBTSxFQUFFNUIsZ0RBQVMsQ0FBQ2lDLE9BQU8sQ0FBQ0MsR0FBRyxJQUFJLENBQTBCO0lBQzdELENBQUM7QUFDSCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNyQkMsR0FBRyxFQUFFLENBQUM7UUFDSkMsVUFBVSxFQUFFLEtBQUs7SUFDbkIsQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLENBQUNDLFlBQVksR0FBRyxHQUFHLENBQUMvQyw2REFBWSxDQUFDLENBQUM7SUFBQ3FDLE1BQU07QUFBQyxDQUFDO0FBRWhELEdBQUcsQ0FBQ1csbUJBQW1CO2VBRVJDLHNCQUFzQixHQUFHLENBQUM7SUFDdkMsRUFBRSxHQUFHRCxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pCLEtBQUssQ0FBQ0QsWUFBWSxDQUFDRyxLQUFLO1FBRXhCRixtQkFBbUIsR0FBR0QsWUFBWSxDQUFDSSxhQUFhLENBQUMsQ0FBQztZQUNoRDFDLElBQUksRUFBRSxDQUFNO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUN1QyxtQkFBbUI7QUFDNUIsQ0FBQztBQUVELEtBQUssQ0FBQ0ksT0FBTyxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ25DLEtBQUssQ0FBQ04sb0JBQW1CLEdBQUcsS0FBSyxDQUFDQyxzQkFBc0I7SUFFeEQsRUFBRSxFQUFFSSxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFTLFVBQUUsQ0FBQztRQUM3QkQsR0FBRyxDQUFDRSxHQUFHO1FBQ1AsTUFBTTtJQUNSLENBQUM7SUFFRCxNQUFNLENBQUNSLG9CQUFtQixDQUFDSyxHQUFHLEVBQUVDLEdBQUc7QUFDckMsQ0FBQztBQUVELGlFQUFlNUMsaURBQUksR0FBRzBDLE9BQU8sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHZlcmlmaWVkLWxpbmtzL25leHQtYXBwLy4vcGFnZXMvYXBpL2luZGV4LmpzP2M1ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItbWljcm9cIjtcbi8vIGltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IEdyYXBoUUxKU09OT2JqZWN0IH0gZnJvbSBcImdyYXBocWwtdHlwZS1qc29uXCI7XG5cbmltcG9ydCB7XG4gIGFzTmV4dXNNZXRob2QsXG4gIG1ha2VTY2hlbWEsXG4gIG5vbk51bGwsXG4gIG51bGxhYmxlLFxuICBvYmplY3RUeXBlLFxuICBzdHJpbmdBcmcsXG4gIHNjYWxhclR5cGUsXG59IGZyb20gXCJuZXh1c1wiO1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGNvcnMgZnJvbSBcIm1pY3JvLWNvcnNcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uL2xpYi9wcmlzbWFcIjtcblxuY29uc3QgSlNPTlNjYWxhciA9IHNjYWxhclR5cGUoe1xuICBuYW1lOiBcIkpTT05cIixcbiAgYXNOZXh1c01ldGhvZDogXCJqc29uXCIsXG4gIHNlcmlhbGl6ZTogR3JhcGhRTEpTT05PYmplY3Quc2VyaWFsaXplLFxuICBwYXJzZVZhbHVlOiBHcmFwaFFMSlNPTk9iamVjdC5wYXJzZVZhbHVlLFxuICBwYXJzZUxpdGVyYWw6IEdyYXBoUUxKU09OT2JqZWN0LnBhcnNlTGl0ZXJhbCxcbn0pO1xuXG5jb25zdCBVc2VyID0gb2JqZWN0VHlwZSh7XG4gIG5hbWU6IFwiVXNlclwiLFxuICBkZWZpbml0aW9uKHQpIHtcbiAgICB0LmludChcImlkXCIpO1xuICAgIHQuc3RyaW5nKFwiYWRkcmVzc1wiKTtcbiAgfSxcbn0pO1xuXG5jb25zdCBQcm9qZWN0ID0gb2JqZWN0VHlwZSh7XG4gIG5hbWU6IFwiUHJvamVjdFwiLFxuICBkZWZpbml0aW9uKHQpIHtcbiAgICB0LmludChcImlkXCIpO1xuICAgIHQuc3RyaW5nKFwibmFtZVwiKTtcbiAgICB0LnN0cmluZyhcInNsdWdcIik7XG4gICAgdC5zdHJpbmcoXCJ3ZWJzaXRlXCIpO1xuICAgIHQuc3RyaW5nKFwidHdpdHRlclwiKTtcbiAgICB0LnN0cmluZyhcImRpc2NvcmRcIik7XG4gICAgdC5zdHJpbmcoXCJvcGVuc2VhXCIpO1xuICAgIHQuc3RyaW5nKFwib3BlbnNlYVwiKTtcbiAgICB0Lmpzb24oXCJtZXRhZGF0YVwiKTtcbiAgfSxcbn0pO1xuXG5jb25zdCBRdWVyeSA9IG9iamVjdFR5cGUoe1xuICBuYW1lOiBcIlF1ZXJ5XCIsXG4gIGRlZmluaXRpb24odCkge1xuICAgIHQubGlzdC5maWVsZChcInByb2plY3RzXCIsIHtcbiAgICAgIHR5cGU6IFwiUHJvamVjdFwiLFxuICAgICAgcmVzb2x2ZTogKF8sIGFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHByaXNtYS5wcm9qZWN0LmZpbmRNYW55KHtcbiAgICAgICAgICBvcmRlckJ5OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiYXNjXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICB0LmZpZWxkKFwicHJvamVjdFwiLCB7XG4gICAgICB0eXBlOiBcIlByb2plY3RcIixcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgc2x1Zzogc3RyaW5nQXJnKCksXG4gICAgICB9LFxuICAgICAgcmVzb2x2ZTogYXN5bmMgKF8sIHsgc2x1ZyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBhd2FpdCBwcmlzbWEucHJvamVjdC5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZTogeyBzbHVnIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHNjaGVtYSA9IG1ha2VTY2hlbWEoe1xuICB0eXBlczogW1F1ZXJ5LCBQcm9qZWN0LCBVc2VyLCBKU09OU2NhbGFyXSxcbiAgb3V0cHV0czoge1xuICAgIHR5cGVnZW46IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImdlbmVyYXRlZC9uZXh1cy10eXBlZ2VuLnRzXCIpLFxuICAgIHNjaGVtYTogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiZ2VuZXJhdGVkL3NjaGVtYS5ncmFwaHFsXCIpLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICB9LFxufTtcblxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7IHNjaGVtYSB9KTtcblxubGV0IGFwb2xsb1NlcnZlckhhbmRsZXI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFwb2xsb1NlcnZlckhhbmRsZXIoKSB7XG4gIGlmICghYXBvbGxvU2VydmVySGFuZGxlcikge1xuICAgIGF3YWl0IGFwb2xsb1NlcnZlci5zdGFydCgpO1xuXG4gICAgYXBvbGxvU2VydmVySGFuZGxlciA9IGFwb2xsb1NlcnZlci5jcmVhdGVIYW5kbGVyKHtcbiAgICAgIHBhdGg6IFwiL2FwaVwiLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGFwb2xsb1NlcnZlckhhbmRsZXI7XG59XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgYXBvbGxvU2VydmVySGFuZGxlciA9IGF3YWl0IGdldEFwb2xsb1NlcnZlckhhbmRsZXIoKTtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJPUFRJT05TXCIpIHtcbiAgICByZXMuZW5kKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIGFwb2xsb1NlcnZlckhhbmRsZXIocmVxLCByZXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ycygpKGhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbIkFwb2xsb1NlcnZlciIsIkdyYXBoUUxKU09OT2JqZWN0IiwiYXNOZXh1c01ldGhvZCIsIm1ha2VTY2hlbWEiLCJub25OdWxsIiwibnVsbGFibGUiLCJvYmplY3RUeXBlIiwic3RyaW5nQXJnIiwic2NhbGFyVHlwZSIsInBhdGgiLCJjb3JzIiwicHJpc21hIiwiSlNPTlNjYWxhciIsIm5hbWUiLCJzZXJpYWxpemUiLCJwYXJzZVZhbHVlIiwicGFyc2VMaXRlcmFsIiwiVXNlciIsImRlZmluaXRpb24iLCJ0IiwiaW50Iiwic3RyaW5nIiwiUHJvamVjdCIsImpzb24iLCJRdWVyeSIsImxpc3QiLCJmaWVsZCIsInR5cGUiLCJyZXNvbHZlIiwiXyIsImFyZ3MiLCJwcm9qZWN0IiwiZmluZE1hbnkiLCJvcmRlckJ5Iiwic2x1ZyIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInNjaGVtYSIsInR5cGVzIiwib3V0cHV0cyIsInR5cGVnZW4iLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJhcG9sbG9TZXJ2ZXIiLCJhcG9sbG9TZXJ2ZXJIYW5kbGVyIiwiZ2V0QXBvbGxvU2VydmVySGFuZGxlciIsInN0YXJ0IiwiY3JlYXRlSGFuZGxlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/index.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "graphql-type-json":
/*!************************************!*\
  !*** external "graphql-type-json" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("graphql-type-json");

/***/ }),

/***/ "micro-cors":
/*!*****************************!*\
  !*** external "micro-cors" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("micro-cors");

/***/ }),

/***/ "nexus":
/*!************************!*\
  !*** external "nexus" ***!
  \************************/
/***/ ((module) => {

module.exports = require("nexus");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.js"));
module.exports = __webpack_exports__;

})();