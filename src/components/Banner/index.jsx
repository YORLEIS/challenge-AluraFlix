// Banner.js
import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ backgroundImage, videoCardImage }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.backgroundOverlay} style={{ backgroundImage: `url(img/${backgroundImage}.png)` }}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.frontEndButton}>FRONT END</div>
          <div className={styles.textContent}>
            <h1>Challenge React</h1>
            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
          </div>
        </div>
        <div className={styles.videoCard}>
          <img src={`img/${videoCardImage}.png`} alt="Video Card" className={styles.videoImage} />
        </div>
      </div>
    </div>
  );
}

export default Banner;

