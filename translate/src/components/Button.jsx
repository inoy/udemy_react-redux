import React, { Component } from "react";
// import PropTypes from "prop-types";
import LanguageContext from "../contexts/LanguageContext";

export default class Button extends Component {
  static propTypes = {};

  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>;
  }
}
