import React, { Component } from "react";
// import PropTypes from 'prop-types'
import LanguageContext from "../contexts/LanguageContext";

export default class LanguageSelector extends Component {
  static propTypes = {};

  static contextType = LanguageContext;

  render() {
    console.log(this);
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag jp"
          onClick={() => this.context.onLanguageChange("japanese")}
        />
      </div>
    );
  }
}
