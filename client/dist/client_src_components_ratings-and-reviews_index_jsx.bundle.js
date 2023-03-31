"use strict";
(self["webpackChunkfec_jujutsu_kaisen"] = self["webpackChunkfec_jujutsu_kaisen"] || []).push([["client_src_components_ratings-and-reviews_index_jsx"],{

/***/ "./client/src/components/ratings-and-reviews/RRParse.js":
/*!**************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/RRParse.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

var server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/';
var metaEndPoint = 'meta';
var query = '?product_id=';
var sort = '&sort=relevant';
var count = '&count=50';
var config = {
  headers: {
    Authorization: "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"
  }
};
var RRParse = {
  getReviews: function getReviews(prodId, setReviews) {
    var endpointUrl = new URL(query + prodId + sort + count, server);
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpointUrl.toString(), config).then(function (reviews) {
      setReviews(reviews.data.results);
    })["catch"](function (err) {
      console.log('Error getting prod:', prodId, err);
      setReviews([]);
    });
  },
  getMeta: function getMeta(prodId, setRatings, setCharacteristics, setRecommended) {
    var endpointUrl = new URL(query + prodId, server + metaEndPoint);
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpointUrl.toString(), config).then(function (data) {
      setRatings([Number.parseInt(data.data.ratings['1']), Number.parseInt(data.data.ratings['2']), Number.parseInt(data.data.ratings['3']), Number.parseInt(data.data.ratings['4']), Number.parseInt(data.data.ratings['5'])]);
      setCharacteristics(data.data.characteristics);
      setRecommended(data.data.recommended);
    })["catch"](function (err) {
      console.log('Error getting prod:', prodId, err);
      setRatings({});
      setCharacteristics({});
      setRecommended({});
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RRParse);

/***/ }),

/***/ "./client/src/components/ratings-and-reviews/RatingsAndReviews.jsx":
/*!*************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/RatingsAndReviews.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rr_components_RatingSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rr-components/RatingSummary */ "./client/src/components/ratings-and-reviews/rr-components/RatingSummary/index.jsx");
/* harmony import */ var _rr_components_ReviewsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rr-components/ReviewsList */ "./client/src/components/ratings-and-reviews/rr-components/ReviewsList/index.jsx");
/* harmony import */ var _rr_components_AddReviewForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rr-components/AddReviewForm */ "./client/src/components/ratings-and-reviews/rr-components/AddReviewForm/index.jsx");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AppContext */ "./client/src/components/AppContext.jsx");
/* harmony import */ var _RRParse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RRParse */ "./client/src/components/ratings-and-reviews/RRParse.js");
/* harmony import */ var _StyledComponentsRR__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StyledComponentsRR */ "./client/src/components/ratings-and-reviews/StyledComponentsRR/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var RatingsAndReviews = function RatingsAndReviews() {
  var product = (0,_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    reviews = _useState2[0],
    setReviews = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    ratings = _useState4[0],
    setRatings = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    recommended = _useState6[0],
    setRecommended = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    characteristics = _useState8[0],
    setCharacteristics = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (product.state.productId) {
      _RRParse__WEBPACK_IMPORTED_MODULE_5__["default"].getReviews(product.state.productId, setReviews);
      _RRParse__WEBPACK_IMPORTED_MODULE_5__["default"].getMeta(product.state.productId, setRatings, setCharacteristics, setRecommended);
    }
  }, [product.state.productId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StyledComponentsRR__WEBPACK_IMPORTED_MODULE_6__.RatingsAndReviewsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Ratings & Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StyledComponentsRR__WEBPACK_IMPORTED_MODULE_6__.RRFlex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StyledComponentsRR__WEBPACK_IMPORTED_MODULE_6__.RRBoxLeft, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rr_components_RatingSummary__WEBPACK_IMPORTED_MODULE_1__["default"], {
    Ratings: ratings,
    Recommended: recommended,
    Characteristics: characteristics
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StyledComponentsRR__WEBPACK_IMPORTED_MODULE_6__.RRBoxRight, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rr_components_ReviewsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    Reviews: reviews,
    reviewsByStars: ratings
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StyledComponentsRR__WEBPACK_IMPORTED_MODULE_6__.Model, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rr_components_AddReviewForm__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RatingsAndReviews);

/***/ }),

/***/ "./client/src/components/ratings-and-reviews/StyledComponentsRR/StyledComponentsRR.jsx":
/*!*********************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/StyledComponentsRR/StyledComponentsRR.jsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Model": () => (/* binding */ Model),
/* harmony export */   "RRBoxLeft": () => (/* binding */ RRBoxLeft),
/* harmony export */   "RRBoxRight": () => (/* binding */ RRBoxRight),
/* harmony export */   "RRFlex": () => (/* binding */ RRFlex),
/* harmony export */   "RatingsAndReviewsContainer": () => (/* binding */ RatingsAndReviewsContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RatingsAndReviewsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n  font-family: system-ui;\n  color: gray;\n"])));
var RRFlex = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: none;\n  padding-top: 20px;\n  width: 100%;\n"])));
var RRBoxLeft = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 40%;\n  float: left;\n  margin-right: 1rem;\n"])));
var RRBoxRight = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 60%;\n  float: right;\n  margin-left: 1rem;\n"])));
var Model = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    z-index: auto;\n    display: ", ";\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width:100vw;\n    background: rgba(0,0,0,0.5);\n"])), function (_ref) {
  var show = _ref.show;
  return show ? 'block' : 'none';
});


/***/ }),

/***/ "./client/src/components/ratings-and-reviews/StyledComponentsRR/index.js":
/*!*******************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/StyledComponentsRR/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Model": () => (/* reexport safe */ _StyledComponentsRR__WEBPACK_IMPORTED_MODULE_0__.Model),
/* harmony export */   "RRBoxLeft": () => (/* reexport safe */ _StyledComponentsRR__WEBPACK_IMPORTED_MODULE_0__.RRBoxLeft),
/* harmony export */   "RRBoxRight": () => (/* reexport safe */ _StyledComponentsRR__WEBPACK_IMPORTED_MODULE_0__.RRBoxRight),
/* harmony export */   "RRFlex": () => (/* reexport safe */ _StyledComponentsRR__WEBPACK_IMPORTED_MODULE_0__.RRFlex),
/* harmony export */   "RatingsAndReviewsContainer": () => (/* reexport safe */ _StyledComponentsRR__WEBPACK_IMPORTED_MODULE_0__.RatingsAndReviewsContainer)
/* harmony export */ });
/* harmony import */ var _StyledComponentsRR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyledComponentsRR */ "./client/src/components/ratings-and-reviews/StyledComponentsRR/StyledComponentsRR.jsx");


/***/ }),

/***/ "./client/src/components/ratings-and-reviews/index.jsx":
/*!*************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/index.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _RatingsAndReviews__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _RatingsAndReviews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RatingsAndReviews */ "./client/src/components/ratings-and-reviews/RatingsAndReviews.jsx");


/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/AddReviewForm/AddReviewForm.jsx":
/*!*************************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/AddReviewForm/AddReviewForm.jsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var AddReviewForm = function AddReviewForm() {
  // need to refactor to model

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "--Add Review Form--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Write Your Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "About the [Product Name Here]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "--1.2.6.1 Overall Rating--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "overall rating"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2606\u2606\u2606\u2606\u2606"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[1 star - \"Poor\", 5 stars = \"Great\"]")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "--1.2.6.2 Do you reccomend this product?--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Do you recommend this product?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "recommendYes"
  }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "recommendYes",
    name: "recommendYes",
    value: "Yes"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "recommendNo"
  }, "No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "recommendNo",
    name: "recommendNo",
    value: "No"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "--1.2.6.3 Characteristics **good candidate for subcomponent--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "A-size-too-small",
    name: "Size",
    value: "1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "A-size-too-small"
  }, "A size too small"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "\xBD-a-size-too-small",
    name: "Size",
    value: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "\xBD-a-size-too-small"
  }, "\xBD a size too small"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "Perfect",
    name: "Size",
    value: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "Perfect"
  }, "Perfect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "\xBD-a-size-too-big",
    name: "Size",
    value: "4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "\xBD-a-size-too-big"
  }, "\xBD a size too big"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "A-size-too-wide",
    name: "Size",
    value: "5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "A-size-too-wide"
  }, "A size too wide"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Width"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "Too-narrow",
    name: "Width",
    value: "1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "Too-narrow"
  }, "Too narrow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "Slightly-narrow",
    name: "Width",
    value: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "Slightly-narrow"
  }, "Slightly narrow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "Perfect",
    name: "Width",
    value: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "Perfect"
  }, "Perfect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "Slightly-wide",
    name: "Width",
    value: "4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "Slightly-wide"
  }, "Slightly wide"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "Too wide",
    name: "Width",
    value: "5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "Too wide"
  }, "Too wide"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "--1.2.6.4 Review Summary--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "Review-summary"
  }, "Review Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    id: "Review-summary",
    name: "Review-summary",
    maxLength: "60",
    placeholder: "Example: Best purchase ever!"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "--1.2.6.5 Review Body--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "Review-body"
  }, "Review Body"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    id: "Review-body",
    name: "Review-body",
    maxLength: "1000",
    placeholder: "Why did you like the product or not?"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "[ Minimum required characters left: [##] | Minimum Reached ]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "--1.2.6.6 Upload your photos--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "upload-your-photos"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "button",
    value: "Add A Photo",
    name: "upload-your-photos",
    id: "upload-your-photos"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "--1.2.6.7 What is your nickname--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "nickname"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "nickname",
    name: "nickname",
    maxLength: "60",
    placeholder: "Example: jackson11!"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "For privacy reasons, do no use your full name or email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "--1.2.6.8 Your email--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    maxLength: "60",
    placeholder: "Example: jackson11@email.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "For authentication reasons, you will not be emailed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "--1.2.6.9 Submit review (button)--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "Submit-review"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "button",
    id: "Submit-review",
    name: "Submit-review",
    value: "Submit Review"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddReviewForm);

/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/AddReviewForm/index.jsx":
/*!*****************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/AddReviewForm/index.jsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _AddReviewForm__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AddReviewForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddReviewForm */ "./client/src/components/ratings-and-reviews/rr-components/AddReviewForm/AddReviewForm.jsx");


/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/Factors/Factors.jsx":
/*!******************************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/Factors/Factors.jsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FactorsBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FactorsBar */ "./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/Factors/FactorsBar.jsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");



var Factors = function Factors(_ref) {
  var name = _ref.name,
    value = _ref.value;
  var avgRate = Number(value).toFixed(2);
  if (name === 'Size') {
    var scale = avgRate / 5 * 100;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.FactorsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Caret, {
      percent: scale
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCaretDown, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Background, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "A size too small"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "A size too wide"))));
  }
  if (name === 'Width') {
    var _scale = avgRate / 5 * 100;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.FactorsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Caret, {
      percent: _scale
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCaretDown, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Background, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Too narrow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Too wide"))));
  }
  if (name === 'Comfort') {
    var _scale2 = avgRate / 5 * 100;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.FactorsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Caret, {
      percent: _scale2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCaretDown, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Background, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Uncomfortable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Perfect"))));
  }
  if (name === 'Quality') {
    var _scale3 = avgRate / 5 * 100;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.FactorsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Caret, {
      percent: _scale3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCaretDown, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Background, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Poor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Perfect"))));
  }
  if (name === 'Length') {
    var _scale4 = avgRate / 5 * 100;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.FactorsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Caret, {
      percent: _scale4
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCaretDown, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Background, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Runs Short"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Runs long"))));
  }
  if (name === 'Fit') {
    var _scale5 = avgRate / 5 * 100;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.FactorsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Caret, {
      percent: _scale5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCaretDown, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Background, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactorsBar__WEBPACK_IMPORTED_MODULE_1__.Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Runs tight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Runs long"))));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Factors);

/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/Factors/FactorsBar.jsx":
/*!*********************************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/Factors/FactorsBar.jsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Background": () => (/* binding */ Background),
/* harmony export */   "Caret": () => (/* binding */ Caret),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Description": () => (/* binding */ Description),
/* harmony export */   "FactorsContainer": () => (/* binding */ FactorsContainer),
/* harmony export */   "FlexWrapper": () => (/* binding */ FlexWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 0.75rem;\n  width: 100%;\n  position: relative;\n"])));
var BaseBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 3px;\n"])));
var Background = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(BaseBox)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background: #ECF0F1;\n  width: 100%;\n"])));
var FlexWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  "])));
var Description = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(FlexWrapper)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  justify-content: space-between;\n  font-size: 11px;\n  "])));
var Caret = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: ", "%;\n"])), function (props) {
  return props.percent;
});
var FactorsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n"])));


/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/Factors/index.jsx":
/*!****************************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/Factors/index.jsx ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Factors__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Factors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Factors */ "./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/Factors/Factors.jsx");


/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/ProductBreakdown.jsx":
/*!*******************************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/ProductBreakdown.jsx ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Factors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factors */ "./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/Factors/index.jsx");
/* harmony import */ var _ProductBreakdownStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductBreakdownStyles */ "./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/ProductBreakdownStyles.jsx");



var ProductBreakdown = function ProductBreakdown(_ref) {
  var Characteristics = _ref.Characteristics;
  var charTypes = [];
  for (var props in Characteristics) {
    charTypes.push({
      name: props,
      id: Characteristics[props].id,
      value: Characteristics[props].value
    });
  }
  var charItems = charTypes.map(function (_char) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Factors__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: _char.id,
      name: _char.name,
      value: _char.value
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductBreakdownStyles__WEBPACK_IMPORTED_MODULE_2__["default"], null, charItems));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductBreakdown);

/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/ProductBreakdownStyles.jsx":
/*!*************************************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/ProductBreakdownStyles.jsx ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListStyle);

/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/index.jsx":
/*!********************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/index.jsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ProductBreakdown__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ProductBreakdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductBreakdown */ "./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/ProductBreakdown.jsx");


/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/RatingBreakdown/PercentBars.jsx":
/*!*************************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/RatingBreakdown/PercentBars.jsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Background": () => (/* binding */ Background),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Progress": () => (/* binding */ Progress),
/* harmony export */   "Recommend": () => (/* binding */ Recommend)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 7px;\n  width: 100%;\n  position: relative;\n"])));
var BaseBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 3px;\n"])));
var Background = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(BaseBox)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background: #ECF0F1;\n  width: 100%;\n"])));
var Progress = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(BaseBox)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background: #7FFFD4;\n  width: ", "%;\n"])), function (_ref) {
  var percent = _ref.percent;
  return percent;
});
var Recommend = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  word-wrap: break-word;\n  margin-top: 20px;\n"])));


/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/RatingBreakdown/RatingBreakdown.jsx":
/*!*****************************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/RatingBreakdown/RatingBreakdown.jsx ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../AppContext */ "./client/src/components/AppContext.jsx");
/* harmony import */ var _PercentBars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PercentBars */ "./client/src/components/ratings-and-reviews/rr-components/RatingBreakdown/PercentBars.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var RatingBreakdown = function RatingBreakdown(_ref) {
  var Recommended = _ref.Recommended;
  var product = (0,_AppContext__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
  var Ratings = product.state.productAvgRating[1];
  var recoPercent = Math.round(Number(Recommended["true"]) / (Number(Recommended["true"]) + Number(Recommended["false"])) * 100);
  if (Ratings) {
    var ratingTotals = Ratings[0] + Ratings[1] + Ratings[2] + Ratings[3] + Ratings[4];
    var oneStars = Math.round(Ratings[0] / ratingTotals * 100);
    var twoStars = Math.round(Ratings[1] / ratingTotals * 100);
    var threeStars = Math.round(Ratings[2] / ratingTotals * 100);
    var fourStars = Math.round(Ratings[3] / ratingTotals * 100);
    var fiveStars = Math.round(Ratings[4] / ratingTotals * 100);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Recommend, null, recoPercent, '% of reviews recommend this product'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, _toConsumableArray(Array(5)).map(function (star, i) {
      var ratingValue = i + 1;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {
        key: i,
        className: "star",
        fontSize: "1.12rem",
        color: ratingValue <= 5 ? "#F7DC6F" : "#ECF0F1"
      });
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Background, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Progress, {
      percent: fiveStars
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, _toConsumableArray(Array(5)).map(function (star, i) {
      var ratingValue = i + 1;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {
        key: i,
        className: "star",
        fontSize: "1.12rem",
        color: ratingValue <= 4 ? "#F7DC6F" : "#ECF0F1"
      });
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Background, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Progress, {
      percent: fourStars
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, _toConsumableArray(Array(5)).map(function (star, i) {
      var ratingValue = i + 1;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {
        key: i,
        className: "star",
        fontSize: "1.12rem",
        color: ratingValue <= 3 ? "#F7DC6F" : "#ECF0F1"
      });
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Background, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Progress, {
      percent: threeStars
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, _toConsumableArray(Array(5)).map(function (star, i) {
      var ratingValue = i + 1;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {
        key: i,
        className: "star",
        fontSize: "1.12rem",
        color: ratingValue <= 2 ? "#F7DC6F" : "#ECF0F1"
      });
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Background, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Progress, {
      percent: twoStars
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, _toConsumableArray(Array(5)).map(function (star, i) {
      var ratingValue = i + 1;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {
        key: i,
        className: "star",
        fontSize: "1.12rem",
        color: ratingValue <= 1 ? "#F7DC6F" : "#ECF0F1"
      });
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Background, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PercentBars__WEBPACK_IMPORTED_MODULE_2__.Progress, {
      percent: oneStars
    })))));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RatingBreakdown);

/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/RatingBreakdown/index.jsx":
/*!*******************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/RatingBreakdown/index.jsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _RatingBreakdown__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _RatingBreakdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RatingBreakdown */ "./client/src/components/ratings-and-reviews/rr-components/RatingBreakdown/RatingBreakdown.jsx");


/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/RatingSummary/RatingSummary.jsx":
/*!*************************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/RatingSummary/RatingSummary.jsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../AppContext */ "./client/src/components/AppContext.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Stars */ "./client/src/components/ratings-and-reviews/rr-components/Stars/index.jsx");
/* harmony import */ var _RatingBreakdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RatingBreakdown */ "./client/src/components/ratings-and-reviews/rr-components/RatingBreakdown/index.jsx");
/* harmony import */ var _ProductBreakdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProductBreakdown */ "./client/src/components/ratings-and-reviews/rr-components/ProductBreakdown/index.jsx");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var RateDecimal = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: system-ui;\n  font-size: 50px;\n  color: gray;\n  margin: 0;\n  padding: 0;\n"])));
var TopBarLeftPanel = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 0px;\n"])));
var RatingSummary = function RatingSummary(_ref) {
  var Recommended = _ref.Recommended,
    Characteristics = _ref.Characteristics;
  var product = (0,_AppContext__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
  var RatingsArr = product.state.productAvgRating[1];
  var averageRating = product.state.productAvgRating[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TopBarLeftPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RateDecimal, null, averageRating), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Stars__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RatingBreakdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    Recommended: Recommended,
    Ratings: RatingsArr
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductBreakdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Characteristics: Characteristics
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RatingSummary);

/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/RatingSummary/index.jsx":
/*!*****************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/RatingSummary/index.jsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _RatingSummary__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _RatingSummary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RatingSummary */ "./client/src/components/ratings-and-reviews/rr-components/RatingSummary/RatingSummary.jsx");


/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/ReviewTile/ReviewTile.jsx":
/*!*******************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/ReviewTile/ReviewTile.jsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _ReviewTileStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewTileStyles */ "./client/src/components/ratings-and-reviews/rr-components/ReviewTile/ReviewTileStyles.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ReviewTile = function ReviewTile(_ref) {
  var reviewData = _ref.reviewData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(reviewData.rating),
    _useState2 = _slicedToArray(_useState, 1),
    rating = _useState2[0];
  var reviewer = reviewData.reviewer_name || 'anonymous';
  var reviewDate = new Date(reviewData.date).toDateString().split(' ').slice(1).join(' ');
  var doesRecommend = reviewData.recommend;
  var sellerResponse = reviewData.response;
  console.log(reviewData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewTileStyles__WEBPACK_IMPORTED_MODULE_1__.TopBarReviewTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, _toConsumableArray(Array(5)).map(function (star, i) {
    var ratingValue = i + 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {
      key: i,
      className: "star",
      fontSize: "1.12rem",
      color: ratingValue <= rating ? '#F7DC6F' : '#ECF0F1'
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewTileStyles__WEBPACK_IMPORTED_MODULE_1__.UserInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewTileStyles__WEBPACK_IMPORTED_MODULE_1__.BoldSpan, null, reviewer), ', ', reviewDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewTileStyles__WEBPACK_IMPORTED_MODULE_1__.ReviewSummaryStyle, null, reviewData.summary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewTileStyles__WEBPACK_IMPORTED_MODULE_1__.ReviewText, null, reviewData.body), doesRecommend ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewTileStyles__WEBPACK_IMPORTED_MODULE_1__.ReviewText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCheck, null), ' I recommend this product') : null, sellerResponse ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewTileStyles__WEBPACK_IMPORTED_MODULE_1__.Response, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewTileStyles__WEBPACK_IMPORTED_MODULE_1__.ReviewSummaryStyle, null, "Response:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewTileStyles__WEBPACK_IMPORTED_MODULE_1__.ReviewText, null, sellerResponse)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewTileStyles__WEBPACK_IMPORTED_MODULE_1__.HelpfulReport, null, "Was this review Helpful? Yes (", reviewData.helpfulness, ") | No   |   Report"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewTileStyles__WEBPACK_IMPORTED_MODULE_1__.BottomBarReviewTile, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewTile);

/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/ReviewTile/ReviewTileStyles.jsx":
/*!*************************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/ReviewTile/ReviewTileStyles.jsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoldSpan": () => (/* binding */ BoldSpan),
/* harmony export */   "BottomBarReviewTile": () => (/* binding */ BottomBarReviewTile),
/* harmony export */   "HelpfulReport": () => (/* binding */ HelpfulReport),
/* harmony export */   "Response": () => (/* binding */ Response),
/* harmony export */   "ReviewSummaryStyle": () => (/* binding */ ReviewSummaryStyle),
/* harmony export */   "ReviewText": () => (/* binding */ ReviewText),
/* harmony export */   "TopBarReviewTile": () => (/* binding */ TopBarReviewTile),
/* harmony export */   "UserInfo": () => (/* binding */ UserInfo)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TopBarReviewTile = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 25px;\n"])));
var BottomBarReviewTile = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 11px;\n  border-bottom: solid;\n  border-color: lightgray;\n  margin-top: 5px;\n"])));
var HelpfulReport = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 11px;\n  text-align: center;\n"])));
var UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 11px;\n"])));
var BoldSpan = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-weight: bold;\n"])));
var ReviewSummaryStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  margin-top: 10px;\n"])));
var ReviewText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\nfont-weight: normal;\nfont-size: 14px;\nmax-width: 75%;\nword-wrap: break-word;\nmargin-top: 8px;\nmargin-bottom: 20px;\n"])));
var Response = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(ReviewText)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background-color: #D8D8D8;\n  padding-left: 8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  max-width: 95%;\n  border-radius: 5px;\n"])));


/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/ReviewsList/ReviewsList.jsx":
/*!*********************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/ReviewsList/ReviewsList.jsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReviewTile_ReviewTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ReviewTile/ReviewTile */ "./client/src/components/ratings-and-reviews/rr-components/ReviewTile/ReviewTile.jsx");
/* harmony import */ var _ReviewsListStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewsListStyles */ "./client/src/components/ratings-and-reviews/rr-components/ReviewsList/ReviewsListStyles.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ReviewsList = function ReviewsList(_ref) {
  var Reviews = _ref.Reviews,
    reviewsByStars = _ref.reviewsByStars;
  var reviewsData = Reviews;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2),
    _useState2 = _slicedToArray(_useState, 2),
    reviewsLength = _useState2[0],
    setReviewsLength = _useState2[1];
  var reviewsCount = reviewsByStars[0] + reviewsByStars[1] + reviewsByStars[2] + reviewsByStars[3] + reviewsByStars[4];
  var loadMoreReviews = function loadMoreReviews() {
    setReviewsLength(reviewsLength + 2);
  };
  var listItems = reviewsData.slice(0, reviewsLength).map(function (review) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewTile_ReviewTile__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: review.review_id,
      reviewData: review
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "sort"
  }, reviewsCount, 'reviews, sorted by '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "sort",
    id: "sort"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Relevence"
  }, "Relevence"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Helpful"
  }, "Helpful"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Newest"
  }, "Newest")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewsListStyles__WEBPACK_IMPORTED_MODULE_2__.ReviewsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReviewsListStyles__WEBPACK_IMPORTED_MODULE_2__.ListStyle, null, listItems)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "button",
    value: "MORE REVIEWS",
    onClick: loadMoreReviews
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "button",
    value: "ADD A REVIEW +"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewsList);

/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/ReviewsList/ReviewsListStyles.jsx":
/*!***************************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/ReviewsList/ReviewsListStyles.jsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListStyle": () => (/* binding */ ListStyle),
/* harmony export */   "ReviewsContainer": () => (/* binding */ ReviewsContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"])));
var ReviewsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-height: 80vh;\n  overflow-y: auto;\n"])));


/***/ }),

/***/ "./client/src/components/ratings-and-reviews/rr-components/ReviewsList/index.jsx":
/*!***************************************************************************************!*\
  !*** ./client/src/components/ratings-and-reviews/rr-components/ReviewsList/index.jsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ReviewsList__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ReviewsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReviewsList */ "./client/src/components/ratings-and-reviews/rr-components/ReviewsList/ReviewsList.jsx");


/***/ })

}]);
//# sourceMappingURL=client_src_components_ratings-and-reviews_index_jsx.bundle.js.map