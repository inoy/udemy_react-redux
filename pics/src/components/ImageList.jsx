import React from "react";
import PropTypes from "prop-types";

const ImageList = ({ images }) => {
  const imageElements = images.map(({ description, urls, id }) => {
    return <img alt={description} src={urls.regular} key={id} />;
  });
  return <div>{imageElements}</div>;
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageList;
