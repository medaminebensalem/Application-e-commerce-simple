import './styles/custom.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Produits from './pages/Produits';
import Panier from './pages/Panier';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </>
  );
}

export default App;