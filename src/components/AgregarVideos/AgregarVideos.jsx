
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Encabezado from '../Encabezado';
import Footer from '../Footer';
import useWindowSize from '../../useWindowSize';
import styles from './AgregarVideos.module.css';
import formacionesData from '../../formacionesData';

const AgregarVideos = ({ onAddVideo }) => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');
    const [video, setVideo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    
    const navigate = useNavigate(); // Hook para redireccionar
    const size = useWindowSize();
    const isMobile = size.width <= 768;

    const handleGuardar = (e) => {
        e.preventDefault();
        const newVideo = {
            id: Date.now(),
            titulo,
            categoria,
            imagen,
            link: video,
            descripcion
        };
        onAddVideo(newVideo);
        navigate('/'); // Redirige al usuario al Home después de guardar el nuevo video
    };

    return (
        <>
            {!isMobile && <Encabezado logoUrl="img/logo.png" />}
            <div className={styles.container}>
                <h1>Nuevo Video</h1>
                <p>Complete el formulario para crear una nueva tarjeta de video</p>
                <form onSubmit={handleGuardar}>
                    <h2>Crear Tarjeta</h2>
                    <div className={styles.formGroup}>
                        <label htmlFor="titulo">Título</label>
                        <input 
                            type="text" 
                            id="titulo" 
                            placeholder="Ingrese el título" 
                            value={titulo} 
                            onChange={(e) => setTitulo(e.target.value)} 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="categoria">Categoría</label>
                        <select 
                            id="categoria" 
                            value={categoria} 
                            onChange={(e) => setCategoria(e.target.value)}>
                            <option value="">Seleccione una categoría</option>
                            {formacionesData.categories.map((category, index) => (
                                <option key={index} value={category.category}>{category.category}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="imagen">Imagen</label>
                        <input 
                            type="text" 
                            id="imagen" 
                            placeholder="Ingrese el enlace de la imagen" 
                            value={imagen} 
                            onChange={(e) => setImagen(e.target.value)} 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="video">Video</label>
                        <input 
                            type="text" 
                            id="video" 
                            placeholder="Ingrese el enlace del video" 
                            value={video} 
                            onChange={(e) => setVideo(e.target.value)} 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea 
                            id="descripcion" 
                            placeholder="¿De qué se trata este video?" 
                            value={descripcion} 
                            onChange={(e) => setDescripcion(e.target.value)} 
                        ></textarea>
                    </div>
                    <div className={styles.buttons}>
                        <button type="submit" className={styles.saveButton}>Guardar</button>
                        <button type="reset" className={styles.clearButton} onClick={() => {
                            setTitulo('');
                            setCategoria('');
                            setImagen('');
                            setVideo('');
                            setDescripcion('');
                        }}>Limpiar</button>
                    </div>
                </form>
            </div>
            {!isMobile && <Footer />}
            {isMobile && (
                <div className={styles.mobileFooter}>
                    <button className={styles.buttonHome} onClick={() => navigate('/')}>HOME</button>
                   <img src="img/NuevoVideo.png" alt="Nuevo Video" onClick={() => navigate('/nuevo-video')} />
                   
                </div>
            )}
        </>
    );
};

export default AgregarVideos;
