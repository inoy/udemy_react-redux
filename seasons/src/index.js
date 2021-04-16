import React from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line no-undef
if (module.hot) {
  // eslint-disable-next-line no-undef
  module.hot.accept();
}

class App extends React.Component {
  // JavaScript - Classes Constructor
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define render
  render() {
    return (
      <>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));