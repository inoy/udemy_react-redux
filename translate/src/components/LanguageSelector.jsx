import React, { Component } from "react";
// import PropTypes from 'prop-types'

export default class LanguageSelector extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("english")}
        />
        <i
          className="flag jp"
          onClick={() => this.props.onLanguageChange("japanese")}
        />
      </div>
    );
  }
}
