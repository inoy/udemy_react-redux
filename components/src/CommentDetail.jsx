import React from "react";
import PropTypes from "prop-types";

const CommentDetail = ({ avatar, author, timeAgo, content }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{timeAgo}</span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  );
};

CommentDetail.propTypes = {
  avatar: PropTypes.node.isRequired,
  author: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CommentDetail;
