import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ arrImages, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {arrImages.map(image => (
        <ImageGalleryItem key={image.id} url={image.webformatURL} largeImageURL={image.largeImageURL} onClick={onClick} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  arrImages: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
