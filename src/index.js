import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ResumePage from './pages/ResumePage';
import AboutPage from './pages/AboutPage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="resume" element={<ResumePage />} /> 
        <Route path="about" element={<AboutPage />} />
      </Routes>
  </BrowserRouter>
);


