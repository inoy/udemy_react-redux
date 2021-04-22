import React from "react";
import PropTypes from "prop-types";

const Accordion = ({ items }) => {
  const renderedItems = items.map(({ title, content }) => {
    return (
      <React.Fragment key={title}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {title}
        </div>
        <div className="content active">
          <p>{content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

Accordion.protoTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Accordion;
