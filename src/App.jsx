
import initialData from './formacionesData';

import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AgregarVideos from './components/AgregarVideos/AgregarVideos';


function App() {
    const [formaciones, setFormaciones] = useState(initialData);

    const handleAddVideo = (newVideo) => {
        setFormaciones(prevState => {
            const updatedCategories = prevState.categories.map(category => {
                if (category.category === newVideo.categoria) {
                    return {
                        ...category,
                        courses: [...category.courses, newVideo]
                    };
                }
                return category;
            });
            return { categories: updatedCategories };
        });
    };

    const handleUpdateCourse = (updatedCourse) => {
        setFormaciones(prevState => {
            const updatedCategories = prevState.categories.map(category => {
                // Eliminar el curso de su categoría actual si se encuentra
                if (category.courses.some(course => course.id === updatedCourse.id)) {
                    return {
                        ...category,
                        courses: category.courses.filter(course => course.id !== updatedCourse.id)
                    };
                }
                return category;
            });

            // Añadir el curso a la nueva categoría
            const newCategories = updatedCategories.map(category => {
                if (category.category === updatedCourse.categoria) {
                    return {
                        ...category,
                        courses: [...category.courses, updatedCourse]
                    };
                }
                return category;
            });

            return { categories: newCategories };
        });
    };

    const handleDeleteCourse = (courseId, category) => {
        setFormaciones(prevState => {
            const updatedCategories = prevState.categories.map(cat => {
                if (cat.category === category) {
                    return {
                        ...cat,
                        courses: cat.courses.filter(course => course.id !== courseId)
                    };
                }
                return cat;
            });
            return { categories: updatedCategories };
        });
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home formaciones={formaciones} onEditCourse={handleUpdateCourse} onDeleteCourse={handleDeleteCourse} />} />
                <Route path="/nuevo-video" element={<AgregarVideos onAddVideo={handleAddVideo} />} />
            </Routes>
        </Router>
    );
}

export default App;

