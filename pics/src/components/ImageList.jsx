import React from "react";
import PropTypes from "prop-types";

const ImageList = ({ images }) => {
  console.log(images);
  return <div>ImageList</div>;
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageList;
