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

/***/ "./components/FontWrapper.js":
/*!***********************************!*\
  !*** ./components/FontWrapper.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FontWrapper)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_FontContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/FontContext */ \"./contexts/FontContext.js\");\n\n\nfunction FontWrapper({ children }) {\n    const { font } = (0,_contexts_FontContext__WEBPACK_IMPORTED_MODULE_1__.useFontContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            fontFamily: font\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/admin/Documents/jot/jot/components/FontWrapper.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbnRXcmFwcGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlEO0FBRTFDLFNBQVNDLFlBQVksRUFBRUMsUUFBUSxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdILHFFQUFjQTtJQUUvQixxQkFDRSw4REFBQ0k7UUFBSUMsT0FBTztZQUFFQyxZQUFZSDtRQUFLO2tCQUM1QkQ7Ozs7OztBQUdQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlqb3VybmFsLy4vY29tcG9uZW50cy9Gb250V3JhcHBlci5qcz9lZTdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvbnRDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvRm9udENvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb250V3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgeyBmb250IH0gPSB1c2VGb250Q29udGV4dCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiBmb250IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUZvbnRDb250ZXh0IiwiRm9udFdyYXBwZXIiLCJjaGlsZHJlbiIsImZvbnQiLCJkaXYiLCJzdHlsZSIsImZvbnRGYW1pbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FontWrapper.js\n");

/***/ }),

/***/ "./contexts/EntriesContext.js":
/*!************************************!*\
  !*** ./contexts/EntriesContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EntriesProvider: () => (/* binding */ EntriesProvider),\n/* harmony export */   useEntries: () => (/* binding */ useEntries)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst EntriesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useEntries() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(EntriesContext);\n}\nfunction EntriesProvider({ children }) {\n    const [entries, setEntries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Initialize with sample entries\n        const sampleEntries = [\n            {\n                id: 1,\n                title: \"Back to school\",\n                body: \"First day of the new semester\",\n                tag: \"education\",\n                date: \"2024-09-01\"\n            },\n            {\n                id: 2,\n                title: \"Project kickoff\",\n                body: \"Started the new work project today\",\n                tag: \"work\",\n                date: \"2024-09-05\"\n            },\n            {\n                id: 3,\n                title: \"Autumn walk\",\n                body: \"Enjoyed the changing leaves in the park\",\n                tag: \"personal\",\n                date: \"2024-09-10\"\n            },\n            {\n                id: 4,\n                title: \"Book club meeting\",\n                body: \"Discussed 'The Midnight Library'\",\n                tag: \"hobbies\",\n                date: \"2024-09-15\"\n            },\n            {\n                id: 5,\n                title: \"Meal prep Sunday\",\n                body: \"Prepared healthy meals for the week\",\n                tag: \"health\",\n                date: \"2024-09-20\"\n            },\n            {\n                id: 6,\n                title: \"Movie night\",\n                body: \"Watched a new sci-fi film with friends\",\n                tag: \"social\",\n                date: \"2024-09-25\"\n            },\n            {\n                id: 7,\n                title: \"Monthly review\",\n                body: \"Reflected on goals and achievements\",\n                tag: \"personal\",\n                date: \"2024-09-30\"\n            }\n        ];\n        setEntries(sampleEntries);\n    }, []);\n    const addEntry = (newEntry)=>{\n        setEntries((prevEntries)=>[\n                {\n                    id: Date.now(),\n                    ...newEntry\n                },\n                ...prevEntries\n            ]);\n    };\n    const deleteEntry = (id)=>{\n        setEntries((prevEntries)=>prevEntries.filter((entry)=>entry.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EntriesContext.Provider, {\n        value: {\n            entries,\n            addEntry,\n            deleteEntry\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/admin/Documents/jot/jot/contexts/EntriesContext.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9FbnRyaWVzQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThFO0FBRTlFLE1BQU1LLCtCQUFpQkosb0RBQWFBO0FBRTdCLFNBQVNLO0lBQ2QsT0FBT0gsaURBQVVBLENBQUNFO0FBQ3BCO0FBRU8sU0FBU0UsZ0JBQWdCLEVBQUVDLFFBQVEsRUFBRTtJQUMxQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUV6Q0UsZ0RBQVNBLENBQUM7UUFDUixpQ0FBaUM7UUFDakMsTUFBTU8sZ0JBQWdCO1lBQ3BCO2dCQUFFQyxJQUFJO2dCQUFHQyxPQUFPO2dCQUFrQkMsTUFBTTtnQkFBaUNDLEtBQUs7Z0JBQWFDLE1BQU07WUFBYTtZQUM5RztnQkFBRUosSUFBSTtnQkFBR0MsT0FBTztnQkFBbUJDLE1BQU07Z0JBQXNDQyxLQUFLO2dCQUFRQyxNQUFNO1lBQWE7WUFDL0c7Z0JBQUVKLElBQUk7Z0JBQUdDLE9BQU87Z0JBQWVDLE1BQU07Z0JBQTJDQyxLQUFLO2dCQUFZQyxNQUFNO1lBQWE7WUFDcEg7Z0JBQUVKLElBQUk7Z0JBQUdDLE9BQU87Z0JBQXFCQyxNQUFNO2dCQUFvQ0MsS0FBSztnQkFBV0MsTUFBTTtZQUFhO1lBQ2xIO2dCQUFFSixJQUFJO2dCQUFHQyxPQUFPO2dCQUFvQkMsTUFBTTtnQkFBdUNDLEtBQUs7Z0JBQVVDLE1BQU07WUFBYTtZQUNuSDtnQkFBRUosSUFBSTtnQkFBR0MsT0FBTztnQkFBZUMsTUFBTTtnQkFBMENDLEtBQUs7Z0JBQVVDLE1BQU07WUFBYTtZQUNqSDtnQkFBRUosSUFBSTtnQkFBR0MsT0FBTztnQkFBa0JDLE1BQU07Z0JBQXVDQyxLQUFLO2dCQUFZQyxNQUFNO1lBQWE7U0FDcEg7UUFDRE4sV0FBV0M7SUFDYixHQUFHLEVBQUU7SUFFTCxNQUFNTSxXQUFXLENBQUNDO1FBQ2hCUixXQUFXUyxDQUFBQSxjQUFlO2dCQUFDO29CQUFFUCxJQUFJUSxLQUFLQyxHQUFHO29CQUFJLEdBQUdILFFBQVE7Z0JBQUM7bUJBQU1DO2FBQVk7SUFDN0U7SUFFQSxNQUFNRyxjQUFjLENBQUNWO1FBQ25CRixXQUFXUyxDQUFBQSxjQUFlQSxZQUFZSSxNQUFNLENBQUNDLENBQUFBLFFBQVNBLE1BQU1aLEVBQUUsS0FBS0E7SUFDckU7SUFFQSxxQkFDRSw4REFBQ1AsZUFBZW9CLFFBQVE7UUFBQ0MsT0FBTztZQUFFakI7WUFBU1E7WUFBVUs7UUFBWTtrQkFDOURkOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL215am91cm5hbC8uL2NvbnRleHRzL0VudHJpZXNDb250ZXh0LmpzPzljOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEVudHJpZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRW50cmllcygpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoRW50cmllc0NvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRW50cmllc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbZW50cmllcywgc2V0RW50cmllc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJbml0aWFsaXplIHdpdGggc2FtcGxlIGVudHJpZXNcbiAgICBjb25zdCBzYW1wbGVFbnRyaWVzID0gW1xuICAgICAgeyBpZDogMSwgdGl0bGU6IFwiQmFjayB0byBzY2hvb2xcIiwgYm9keTogXCJGaXJzdCBkYXkgb2YgdGhlIG5ldyBzZW1lc3RlclwiLCB0YWc6IFwiZWR1Y2F0aW9uXCIsIGRhdGU6IFwiMjAyNC0wOS0wMVwiIH0sXG4gICAgICB7IGlkOiAyLCB0aXRsZTogXCJQcm9qZWN0IGtpY2tvZmZcIiwgYm9keTogXCJTdGFydGVkIHRoZSBuZXcgd29yayBwcm9qZWN0IHRvZGF5XCIsIHRhZzogXCJ3b3JrXCIsIGRhdGU6IFwiMjAyNC0wOS0wNVwiIH0sXG4gICAgICB7IGlkOiAzLCB0aXRsZTogXCJBdXR1bW4gd2Fsa1wiLCBib2R5OiBcIkVuam95ZWQgdGhlIGNoYW5naW5nIGxlYXZlcyBpbiB0aGUgcGFya1wiLCB0YWc6IFwicGVyc29uYWxcIiwgZGF0ZTogXCIyMDI0LTA5LTEwXCIgfSxcbiAgICAgIHsgaWQ6IDQsIHRpdGxlOiBcIkJvb2sgY2x1YiBtZWV0aW5nXCIsIGJvZHk6IFwiRGlzY3Vzc2VkICdUaGUgTWlkbmlnaHQgTGlicmFyeSdcIiwgdGFnOiBcImhvYmJpZXNcIiwgZGF0ZTogXCIyMDI0LTA5LTE1XCIgfSxcbiAgICAgIHsgaWQ6IDUsIHRpdGxlOiBcIk1lYWwgcHJlcCBTdW5kYXlcIiwgYm9keTogXCJQcmVwYXJlZCBoZWFsdGh5IG1lYWxzIGZvciB0aGUgd2Vla1wiLCB0YWc6IFwiaGVhbHRoXCIsIGRhdGU6IFwiMjAyNC0wOS0yMFwiIH0sXG4gICAgICB7IGlkOiA2LCB0aXRsZTogXCJNb3ZpZSBuaWdodFwiLCBib2R5OiBcIldhdGNoZWQgYSBuZXcgc2NpLWZpIGZpbG0gd2l0aCBmcmllbmRzXCIsIHRhZzogXCJzb2NpYWxcIiwgZGF0ZTogXCIyMDI0LTA5LTI1XCIgfSxcbiAgICAgIHsgaWQ6IDcsIHRpdGxlOiBcIk1vbnRobHkgcmV2aWV3XCIsIGJvZHk6IFwiUmVmbGVjdGVkIG9uIGdvYWxzIGFuZCBhY2hpZXZlbWVudHNcIiwgdGFnOiBcInBlcnNvbmFsXCIsIGRhdGU6IFwiMjAyNC0wOS0zMFwiIH0sXG4gICAgXTtcbiAgICBzZXRFbnRyaWVzKHNhbXBsZUVudHJpZXMpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYWRkRW50cnkgPSAobmV3RW50cnkpID0+IHtcbiAgICBzZXRFbnRyaWVzKHByZXZFbnRyaWVzID0+IFt7IGlkOiBEYXRlLm5vdygpLCAuLi5uZXdFbnRyeSB9LCAuLi5wcmV2RW50cmllc10pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUVudHJ5ID0gKGlkKSA9PiB7XG4gICAgc2V0RW50cmllcyhwcmV2RW50cmllcyA9PiBwcmV2RW50cmllcy5maWx0ZXIoZW50cnkgPT4gZW50cnkuaWQgIT09IGlkKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RW50cmllc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZW50cmllcywgYWRkRW50cnksIGRlbGV0ZUVudHJ5IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRW50cmllc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkVudHJpZXNDb250ZXh0IiwidXNlRW50cmllcyIsIkVudHJpZXNQcm92aWRlciIsImNoaWxkcmVuIiwiZW50cmllcyIsInNldEVudHJpZXMiLCJzYW1wbGVFbnRyaWVzIiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJ0YWciLCJkYXRlIiwiYWRkRW50cnkiLCJuZXdFbnRyeSIsInByZXZFbnRyaWVzIiwiRGF0ZSIsIm5vdyIsImRlbGV0ZUVudHJ5IiwiZmlsdGVyIiwiZW50cnkiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/EntriesContext.js\n");

/***/ }),

/***/ "./contexts/FontContext.js":
/*!*********************************!*\
  !*** ./contexts/FontContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FontProvider: () => (/* binding */ FontProvider),\n/* harmony export */   useFontContext: () => (/* binding */ useFontContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FontContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useFontContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FontContext);\n}\nfunction FontProvider({ children }) {\n    const [font, setFont] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Inter\");\n    const changeFont = (newFont)=>{\n        setFont(newFont);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FontContext.Provider, {\n        value: {\n            font,\n            changeFont\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/admin/Documents/jot/jot/contexts/FontContext.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9Gb250Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1FO0FBRW5FLE1BQU1JLDRCQUFjSCxvREFBYUE7QUFFMUIsU0FBU0k7SUFDZCxPQUFPRixpREFBVUEsQ0FBQ0M7QUFDcEI7QUFFTyxTQUFTRSxhQUFhLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFFakMsTUFBTVEsYUFBYSxDQUFDQztRQUNsQkYsUUFBUUU7SUFDVjtJQUVBLHFCQUNFLDhEQUFDUCxZQUFZUSxRQUFRO1FBQUNDLE9BQU87WUFBRUw7WUFBTUU7UUFBVztrQkFDN0NIOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL215am91cm5hbC8uL2NvbnRleHRzL0ZvbnRDb250ZXh0LmpzPzQyZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGb250Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvbnRDb250ZXh0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChGb250Q29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb250UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtmb250LCBzZXRGb250XSA9IHVzZVN0YXRlKCdJbnRlcicpO1xuXG4gIGNvbnN0IGNoYW5nZUZvbnQgPSAobmV3Rm9udCkgPT4ge1xuICAgIHNldEZvbnQobmV3Rm9udCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9udENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZm9udCwgY2hhbmdlRm9udCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0ZvbnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkZvbnRDb250ZXh0IiwidXNlRm9udENvbnRleHQiLCJGb250UHJvdmlkZXIiLCJjaGlsZHJlbiIsImZvbnQiLCJzZXRGb250IiwiY2hhbmdlRm9udCIsIm5ld0ZvbnQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/FontContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_EntriesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/EntriesContext */ \"./contexts/EntriesContext.js\");\n/* harmony import */ var _contexts_FontContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/FontContext */ \"./contexts/FontContext.js\");\n/* harmony import */ var _components_FontWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FontWrapper */ \"./components/FontWrapper.js\");\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_EntriesContext__WEBPACK_IMPORTED_MODULE_2__.EntriesProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_FontContext__WEBPACK_IMPORTED_MODULE_3__.FontProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FontWrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Documents/jot/jot/pages/_app.js\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Documents/jot/jot/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/admin/Documents/jot/jot/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Documents/jot/jot/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUM4QjtBQUNOO0FBQ0g7QUFFcEQsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0wscUVBQWVBO2tCQUNkLDRFQUFDQywrREFBWUE7c0JBQ1gsNEVBQUNDLCtEQUFXQTswQkFDViw0RUFBQ0U7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWpvdXJuYWwvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgRW50cmllc1Byb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvRW50cmllc0NvbnRleHQnO1xuaW1wb3J0IHsgRm9udFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvRm9udENvbnRleHQnO1xuaW1wb3J0IEZvbnRXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9udFdyYXBwZXInO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8RW50cmllc1Byb3ZpZGVyPlxuICAgICAgPEZvbnRQcm92aWRlcj5cbiAgICAgICAgPEZvbnRXcmFwcGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Gb250V3JhcHBlcj5cbiAgICAgIDwvRm9udFByb3ZpZGVyPlxuICAgIDwvRW50cmllc1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiRW50cmllc1Byb3ZpZGVyIiwiRm9udFByb3ZpZGVyIiwiRm9udFdyYXBwZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



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