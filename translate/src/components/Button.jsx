import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return <button className="ui button primary">Submit</button>;
  }
}
