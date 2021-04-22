import React, { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
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
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Accordion;
