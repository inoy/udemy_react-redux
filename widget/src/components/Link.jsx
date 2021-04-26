import React from "react";
import PropTypes from "prop-types";

const Link = ({ className, href, children }) => {
  console.log(children, typeof children);
  const onClick = (event) => {
    event.preventDefault();
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Link;
