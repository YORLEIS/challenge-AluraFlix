import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src="/img/logo.png" alt="Logo" />
        <p>Realizado por Yorleis Arias Rocha</p>
      </div>
    </footer>
  );
};

export default Footer;
