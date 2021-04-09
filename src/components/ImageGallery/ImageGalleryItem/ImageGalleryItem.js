import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, largeImageURL, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={url} alt="" className={styles.ImageGalleryItemImage} onClick={e => onClick(largeImageURL)} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
