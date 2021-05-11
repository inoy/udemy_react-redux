import React, { Component } from "react";
import PropTypes from "prop-types";
import Field from "./Field";
import Button from "./Button";

export default class UserCreate extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="ui form">
        <Field />
        <Button />
      </div>
    );
  }
}
