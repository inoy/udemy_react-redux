import React, { Component } from "react";
// import PropTypes from "prop-types";

export default class Field extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="ui field">
        <label>Name</label>
        <input type="text" />
      </div>
    );
  }
}
