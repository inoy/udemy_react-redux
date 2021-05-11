import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Field extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="ui field">
        <label>Name</label>
        <input type="text" />
      </div>
    );
  }
}
