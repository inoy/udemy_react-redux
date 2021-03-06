import React from "react";
import PropTypes from "prop-types";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // TODO Mac環境(event.metaKey)で動作確認 新規タブでリンク先が開かれること
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
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
