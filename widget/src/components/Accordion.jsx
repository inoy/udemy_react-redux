import React from "react";
import PropTypes from "prop-types";

const Accordion = ({ items }) => {
  const onTitleClick = (index) => {
    console.log("Title clicked", index);
  };

  const renderedItems = items.map(({ title, content }, index) => {
    return (
      <React.Fragment key={title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
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
