import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" className={styles.Button} onClick={onClick}>
      загрузить еще
    </button>
  );
};

export default Button;
