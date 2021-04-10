import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ arrImages, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {arrImages.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem key={id} url={webformatURL} largeImageURL={largeImageURL} onClick={onClick} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  arrImages: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
