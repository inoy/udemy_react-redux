import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <>
      PageOne
      <br />
      <Link to="/page-two">Navigate to Page Two</Link>
    </>
  );
};

const PageTwo = () => {
  return (
    <>
      PageTwo
      <button>Click Me!</button>
      <br />
      <Link to="/">Navigate to Page One</Link>
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
