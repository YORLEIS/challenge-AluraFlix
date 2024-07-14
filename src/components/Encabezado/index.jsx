// Encabezado.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Encabezado.module.css';

const Encabezado = ({ logoUrl }) => {
  const navigate = useNavigate();
  return (
    <header className={styles.encabezado}>
      <div className={styles.logo}>
        <img src={logoUrl} alt="Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.nav}>
        <button className={styles.buttonHome}  onClick={() => navigate('/')}>HOME</button>
        <button className={styles.buttonNuevoVideo} onClick={() => navigate('/nuevo-video')}>NUEVO VIDEO</button>
      </nav>
    </header>
  );
}

export default Encabezado;
