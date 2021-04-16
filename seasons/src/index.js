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
    console.log("render");
    if (this.state.errorMessage && !this.state.lat) {
      return <>Error: {this.state.errorMessage}</>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <>Latitude: {this.state.lat}</>;
    }

    return <>Loading!</>;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
