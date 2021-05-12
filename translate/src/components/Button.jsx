import React, { Component } from "react";
// import PropTypes from "prop-types";
import LanguageContext from "../contexts/LanguageContext";

export default class Button extends Component {
  static propTypes = {};

  renderSubmit = (value) => {
    return value === "english" ? "Submit" : "送信";
  };

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
