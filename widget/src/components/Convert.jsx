import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
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
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, text]);
  return (
    <>
      <h1 className="ui header">{translated}</h1>
    </>
  );
};

Convert.propTypes = {
  language: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default Convert;
