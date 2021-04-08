import React from 'react';
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

export default ImageGallery;
