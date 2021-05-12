import React, { Component } from "react";
// import PropTypes from "prop-types";
import LanguageContext from "../contexts/LanguageContext";

export default class Field extends Component {
  static propTypes = {};

  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Name" : "名前";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input type="text" />
      </div>
    );
  }
}
