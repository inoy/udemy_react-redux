import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// eslint-disable-next-line no-undef
if (module.hot) {
  // eslint-disable-next-line no-undef
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById("root"));
