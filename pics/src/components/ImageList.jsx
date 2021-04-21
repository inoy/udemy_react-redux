import "./ImageList.css";
import React from "react";
import PropTypes from "prop-types";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const imageElements = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imageElements}</div>;
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageList;
