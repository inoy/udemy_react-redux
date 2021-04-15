// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

const getButtonText = () => "Click on me!";

// Create a react component
const App = () => {
  return (
    <>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById("root"));
