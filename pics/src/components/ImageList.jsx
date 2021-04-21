import React from "react";
import PropTypes from "prop-types";

const ImageList = ({ images }) => {
  const img = images.map((image) => {
    return <img src={image.urls.regular} key={image.urls.regular} />;
  });
  return <div>{img}</div>;
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageList;
