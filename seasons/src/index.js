import React from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line no-undef
if (module.hot) {
  // eslint-disable-next-line no-undef
  module.hot.accept();
}

const App = () => {
  return <div>Hi there!</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
