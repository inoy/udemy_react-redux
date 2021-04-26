/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language.value,
          // eslint-disable-next-line no-undef
          key: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY,
        },
      }
    );
  }, [language, text]);
  return <></>;
};

Convert.propTypes = {
  language: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default Convert;
