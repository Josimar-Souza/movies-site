import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import pages from './pages';
import './App.css';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to="/movies" />} />
        <Route exact path="/movies" element={<pages.MoviesPage />} />
        <Route exact path="/series" element={<pages.SeriesPage />} />
      </Routes>
    </main>
  );
}

export default App;
