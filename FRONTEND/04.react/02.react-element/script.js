/* 
 Below code is how we can create a React Element i.e. a javascript object with some properties.
*/

const paragraph = React.createElement(
  "p",
  {
    id: "para",
    key: "main-container",
    className: "container",
  },
  [
    React.createElement(
      "span",
      {
        id: "span-para",
        key: "main-span-1",
      },
      "Sample para of React"
    ),
    React.createElement(
      "span",
      {
        id: "span-para-1",
        key: "main-span-2",
      },
      "Sample para of HTML"
    ),
    React.createElement(
      "span",
      {
        id: "sample-para-2",
        key: "main-span-3",
      },
      "Sample para of CSS"
    ),
    React.createElement("img", {
      id: "sample-img",
      key: "main-span-4",
      src: "https://static.naukimg.com/s/0/0/i/ni-hamburger/nc_new_logo.svg",
      alt: "image",
    }),
  ]
);

const paragraphObj = {
  $$typeof: Symbol.for("react.element"), // this property is must to render it in browser due to security reason..
  type: "p", // this is also required
  key: null, // optional but gives warning if not passed
  ref: null, // optional
  props: {
    id: "para",
    className: "container",
    children: [
      {
        $$typeof: Symbol.for("react.element"), // this property is must to render it in browser due to security reason..
        type: "span", // this is also required
        key: null, // optional but gives warning if not passed
        ref: null, // optional
        props: {
          id: "span-para",
          children: "Paragraph sample of HTML",
        }, // it's also required. it can be empty atleast if no prop passed.
      },
      {
        $$typeof: Symbol.for("react.element"), // this property is must to render it in browser due to security reason..
        type: "span", // this is also required
        key: null, // optional but gives warning if not passed
        ref: null, // optional
        props: {
          id: "span-para-1",
          children: "Paragraph sample of CSS",
        }, // it's also required. it can be empty atleast if no prop passed.
      },
      {
        $$typeof: Symbol.for("react.element"), // this property is must to render it in browser due to security reason..
        type: "span", // this is also required
        key: null, // optional but gives warning if not passed
        ref: null, // optional
        props: {
          id: "span-para-2",
          children: "Paragraph sample of Javascript",
        }, // it's also required. it can be empty atleast if no prop passed.
      },
    ],
  }, // it's also required. it can be empty atleast if no prop passed.
};

console.log(paragraph);
// console.log(paragraphObj);
const root = ReactDOM.createRoot(document.querySelector("#main"));

root.render(paragraph);
