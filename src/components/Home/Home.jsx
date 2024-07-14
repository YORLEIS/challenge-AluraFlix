import React from 'react';
import Banner from "../Banner";
import Encabezado from "../Encabezado";
import Footer from "../Footer";
import Formaciones from "../Formaciones/Formaciones";
import useWindowSize from '../../useWindowSize';
import styles from "./Home.module.css";
import { useNavigate } from 'react-router-dom';

const Home = ({ formaciones, onEditCourse, onDeleteCourse }) => {
  const size = useWindowSize();
  const isMobile = size.width <= 768;
  const navigate = useNavigate();

  return (
    <>
      {!isMobile && <Encabezado logoUrl="img/logo.png" />}
      {!isMobile && <Banner backgroundImage="banner" videoCardImage="player" />}
      <Formaciones formaciones={formaciones} onEditCourse={onEditCourse} onDeleteCourse={onDeleteCourse} />
      {!isMobile && <Footer />}
      {isMobile && (
        <div className={styles.mobileFooter}>
          <button className={styles.buttonHome} onClick={() => navigate('/')}>HOME</button>
          <img src="img/NuevoVideo.png" alt="Nuevo Video" onClick={() => navigate('/nuevo-video')} />
        
        </div>
      )}
    </>
  );
}

export default Home;
