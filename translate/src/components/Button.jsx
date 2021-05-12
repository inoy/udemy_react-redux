import React, { Component } from "react";
// import PropTypes from "prop-types";
import LanguageContext from "../contexts/LanguageContext";

export default class Button extends Component {
  static propTypes = {};

  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "送信";
    return <button className="ui button primary">{text}</button>;
  }
}
