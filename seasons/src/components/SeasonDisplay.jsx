import React from "react";
import PropTypes from "prop-types";

const getSeason = (lat, month) => {
  console.log(lat, month);
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  console.log(season);
  return <div>Season Display</div>;
};

SeasonDisplay.propTypes = {
  lat: PropTypes.number.isRequired,
};

export default SeasonDisplay;
