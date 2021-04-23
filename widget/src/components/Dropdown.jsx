import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options }) => {
  const renderedOptions = options.map(({ value, label }) => {
    return (
      <div key={value} className="item">
        {label}
      </div>
    );
  });
  console.log(renderedOptions);
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">Select Color</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dropdown;
