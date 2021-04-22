import React from "react";
import PropTypes from "prop-types";

const Accordion = ({ items }) => {
  return <h1>{items.length}</h1>;
};

Accordion.protoTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Accordion;
