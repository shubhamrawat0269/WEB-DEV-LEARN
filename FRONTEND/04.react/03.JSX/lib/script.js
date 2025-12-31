"use strict";

// const primaryContainer = React.createElement(
//   "header",
//   { id: "header-section", key: 1, className: "header" },
//   [
//     React.createElement("div", { key: 1, className: "logo-container" }, [
//       React.createElement("img", {
//         key: 1,
//         src: "https://static.naukimg.com/s/0/0/i/ni-hamburger/nc_new_logo.svg",
//         alt: "logo-image",
//       }),
//     ]),
//     React.createElement("ul", { key: 2, className: "menu-list" }, [
//       React.createElement(
//         "li",
//         {
//           key: 1,
//         },
//         "Prepare"
//       ),
//       React.createElement(
//         "li",
//         {
//           key: 2,
//         },
//         "Participate"
//       ),
//       React.createElement(
//         "li",
//         {
//           key: 3,
//         },
//         "Opportunities"
//       ),
//       React.createElement("input", {
//         key: 4,
//         type: "text",
//       }),
//     ]),
//     React.createElement("div", { key: 3, className: "btns-container" }, [
//       React.createElement(
//         "button",
//         {
//           key: 1,
//         },
//         "Reminder"
//       ),
//       React.createElement(
//         "button",
//         {
//           key: 2,
//         },
//         "Profile"
//       ),
//     ]),
//   ]
// );

var primaryContainer = /*#__PURE__*/React.createElement("header", {
  id: "header-section",
  className: "header"
}, /*#__PURE__*/React.createElement("div", {
  className: "logo-container"
}, /*#__PURE__*/React.createElement("img", {
  src: "https://static.naukimg.com/s/0/0/i/ni-hamburger/nc_new_logo.svg",
  alt: "logo-image"
})), /*#__PURE__*/React.createElement("ul", {
  className: "menu-list"
}, /*#__PURE__*/React.createElement("li", null, "Prepare"), /*#__PURE__*/React.createElement("li", null, "Participate"), /*#__PURE__*/React.createElement("li", null, "Opportunities"), /*#__PURE__*/React.createElement("input", {
  type: "text"
})), /*#__PURE__*/React.createElement("div", {
  className: "btns-container"
}, /*#__PURE__*/React.createElement("button", null, "Reminder"), /*#__PURE__*/React.createElement("button", null, "Profile")));
console.log(primaryContainer);
var root = ReactDOM.createRoot(document.querySelector("#main"));
root.render(primaryContainer);