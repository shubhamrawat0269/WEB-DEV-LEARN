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

const primaryContainer = (
  <header id="header-section" className="header">
    <div className="logo-container">
      <img
        src="https://static.naukimg.com/s/0/0/i/ni-hamburger/nc_new_logo.svg"
        alt="logo-image"
      />
    </div>
    <ul className="menu-list">
      <li>Prepare</li>
      <li>Participate</li>
      <li>Opportunities</li>
      <input type="text" />
    </ul>
    <div className="btns-container">
      <button>Reminder</button>
      <button>Profile</button>
    </div>
  </header>
);

console.log(primaryContainer)
const root = ReactDOM.createRoot(document.querySelector("#main"));
root.render(primaryContainer);
