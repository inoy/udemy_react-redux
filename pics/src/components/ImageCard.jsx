import React from "react";
import PropTypes from "prop-types";

class ImageCard extends React.Component {
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageCard;
