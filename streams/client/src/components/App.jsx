import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <>
      PageOne
      <br />
      <a href="/page-two">Navigate to Page Two</a>{" "}
    </>
  );
};

const PageTwo = () => {
  return (
    <>
      PageTwo
      <button>Click Me!</button>
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/page-two" component={PageTwo} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
