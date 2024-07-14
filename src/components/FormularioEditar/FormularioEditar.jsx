import React, { useState, useEffect } from 'react';
import styles from './FormularioEditar.module.css';

const FormularioEditar = ({ categories, course, onClose, onUpdateCourse }) => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [video, setVideo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    if (course) {
      setTitulo(course.titulo || '');
      setCategoria(course.categoria || categories[0].category);
      setImagen(course.imagen || '');
      setVideo(course.link || '');
      setDescripcion(course.descripcion || '');
    }
  }, [course, categories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCourse = {
      ...course,
      titulo,
      categoria,
      imagen,
      link: video,
      descripcion,
    };
    onUpdateCourse(updatedCourse);
    onClose();
  };

  const handleClear = () => {
    setTitulo('');
    setCategoria(categories[0].category);
    setImagen('');
    setVideo('');
    setDescripcion('');
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>EDITAR CARD:</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </label>
          <label>
            Categoría
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat.category}>{cat.category}</option>
              ))}
            </select>
          </label>
          <label>
            Imagen
            <input
              type="text"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
            />
          </label>
          <label>
            Video
            <input
              type="text"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            />
          </label>
          <label>
            Descripción
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </label>
          <div className={styles.buttons}>
            <button type="submit">GUARDAR</button>
            <button type="button" onClick={handleClear}>LIMPIAR</button>
          </div>
        </form>
        <button className={styles.closeButton} onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default FormularioEditar;

