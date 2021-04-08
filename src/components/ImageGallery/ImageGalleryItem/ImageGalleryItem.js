import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, largeImageURL, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={url} alt="" className={styles.ImageGalleryItemImage} onClick={e => onClick(largeImageURL)} />
    </li>
  );
};

export default ImageGalleryItem;
