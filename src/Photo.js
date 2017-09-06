import React, { Component } from 'react';
import PropTypes from 'prop-types';

const clickStyle = {
  img: { cursor: 'pointer' },
};

class Photo extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { onClick, index, photo } = this.props;
    onClick(event,{ photo, index });
  }

  render() {
    const { photo, onClick } = this.props;
    return <img style={onClick ? clickStyle.img : {}} {...photo} onClick={onClick ? this.handleClick : null} />;
  }
}

export const photoPropType = PropTypes.shape({
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  srcSet: PropTypes.array,
  sizes: PropTypes.array,
});

Photo.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  photo: photoPropType,
};

export default Photo;
