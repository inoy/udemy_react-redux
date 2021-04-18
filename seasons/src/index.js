import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";

// eslint-disable-next-line no-undef
if (module.hot) {
  // eslint-disable-next-line no-undef
  module.hot.accept();
}

class App extends React.Component {
  // Babelによりconstructorを書いたときと同じ処理に変換
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <>Error: {this.state.errorMessage}</>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <>Loading!</>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
