import React, { Component } from "react";
// import PropTypes from "prop-types";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

export default class Button extends Component {
  static propTypes = {};

  renderSubmit = (value) => (value === "english" ? "Submit" : "送信");

  renderButton = (color) => (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {(value) => this.renderSubmit(value)}
      </LanguageContext.Consumer>
    </button>
  );

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
