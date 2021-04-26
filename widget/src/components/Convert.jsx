/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("New language or text");
  }, [language, text]);
  return <></>;
};

Convert.propTypes = {
  language: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default Convert;
