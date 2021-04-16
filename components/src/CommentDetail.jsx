import React from "react";
import PropTypes from "prop-types";
import faker from "faker";

faker.locale = "ja";

const CommentDetail = ({ author }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};

CommentDetail.propTypes = {
  author: PropTypes.string.isRequired,
};

export default CommentDetail;
