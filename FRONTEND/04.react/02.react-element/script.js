const primaryContainer = React.createElement(
  "section",
  {
    className: "container",
    title: "primary-container",
    key: 1,
  },
  [
    React.createElement("div", { key: 2 }, [
      React.createElement("p", { key: 3 }, "React para text"),
      React.createElement("img", {
        key: 4,
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        alt: 'react-image',
        width: 220,
        height: 220
      }),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#main"));
root.render(primaryContainer);
