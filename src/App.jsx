import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import pages from './pages';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/movies" />} />
      <Route exact path="/movies" element={<pages.MainPage />} />
    </Routes>
  );
}

export default App;
