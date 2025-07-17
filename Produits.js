// src/pages/Produits.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Produits() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/produits')
      .then(res => setProduits(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🛍️ Nos Produits</h2>
      <div className="row">
        {produits.map(produit => (
          <div className="col-md-4 mb-3" key={produit._id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{produit.nom}</h5>
                <p className="card-text">{produit.description}</p>
                <p className="card-text fw-bold">{produit.prix} DH</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produits;
