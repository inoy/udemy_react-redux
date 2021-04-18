import React from "react";
import PropTypes from "prop-types";

const SeasonDisplay = ({ lat }) => {
  console.log(lat);
  return <div>Season Display</div>;
};

SeasonDisplay.propTypes = {
  lat: PropTypes.number.isRequired,
};

export default SeasonDisplay;
