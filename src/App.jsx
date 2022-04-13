import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import pages from './pages';
import './App.css';

function App() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Navigate to="/movies" />} />
        <Route exact path="/movies" element={<pages.MoviesPage />} />
        <Route exact path="/series" element={<pages.SeriesPage />} />
        <Route exact path="/movies/details/:id" element={<pages.MoviesDetails />} />
        <Route exact path="/series/details/:id" element={<pages.SeriesDetails />} />
      </Routes>
    </main>
  );
}

export default App;
