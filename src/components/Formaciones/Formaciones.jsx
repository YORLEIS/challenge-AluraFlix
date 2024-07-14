import React, { useState } from 'react';
import styles from './Formaciones.module.css';
import FormularioEditar from '../FormularioEditar/FormularioEditar';

const Formaciones = ({ formaciones, onEditCourse, onDeleteCourse }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    if (!formaciones || !formaciones.categories) {
        return <div>Cargando...</div>; // Manejo de carga
    }

    const handleEdit = (course) => {
        setSelectedCourse(course);
        setIsEditing(true);
    };

    const handleClose = () => {
        setIsEditing(false);
        setSelectedCourse(null);
    };

    const handleUpdateCourse = (updatedCourse) => {
        onEditCourse(updatedCourse);
        handleClose();
    };

    const handleDelete = (courseId, category) => {
        onDeleteCourse(courseId, category);
    };

    return (
        <div className={styles.container}>
            {formaciones.categories.map((section, index) => (
                <div key={index} className={styles.section}>
                    <h2 className={styles.category} style={{ backgroundColor: section.color }}>
                        {section.category}
                    </h2>
                    <div className={styles.courses}>
                        {section.courses.map((course) => (
                            <div key={course.id} className={styles.courseCard}>
                                <a href={course.link} target="_blank" rel="noopener noreferrer">
                                    <img src={course.imagen} alt={course.titulo} className={styles.courseImage} />
                                </a>
                                <div className={styles.courseContent}>
                                    <h3>{course.titulo}</h3>
                                    <div className={styles.buttons}>
                                        <div className={styles.borrar} onClick={() => handleDelete(course.id, section.category)}>
                                            <img src={`img/Borrar.png`} alt="Borrar" />
                                            <h5>BORRAR</h5>
                                        </div>
                                        <div className={styles.editar} onClick={() => handleEdit(course)}>
                                            <img src={`img/editar.png`} alt="Editar" />
                                            <h5>EDITAR</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {isEditing && (
                <FormularioEditar
                    categories={formaciones.categories}
                    course={selectedCourse}
                    onClose={handleClose}
                    onUpdateCourse={handleUpdateCourse}
                />
            )}
        </div>
    );
};

export default Formaciones;

