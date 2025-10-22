const primaryContainer = React.createElement(
  "section",
  {
    className: "container",
    title: "primary-container",
  },
  "This is the first primary container i created"
);


const root = ReactDOM.createRoot(document.querySelector("#main"));
root.render(primaryContainer);