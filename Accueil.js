import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Accueil() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const heure = new Date().getHours();
    if (heure < 12) setMessage("Bonjour 👋");
    else if (heure < 18) setMessage("Bon après-midi ☀️");
    else setMessage("Bonsoir 🌙");
  }, []);

  return (
    <div className="container mt-4">

      {/* Image de couverture */}
      <img
        src="/images/hero.jpg"
        alt="Bannière accueil"
        className="img-fluid rounded mb-4"
      />

      {/* Message de bienvenue */}
      <div className="jumbotron bg-primary text-white p-5 rounded">
        <h1 className="display-4">{message}, bienvenue dans Ma Boutique 🛍️</h1>
        <p className="lead">Découvrez nos meilleurs produits du moment.</p>
        <Link to="/produits" className="btn btn-light btn-lg">Voir les produits</Link>
      </div>

      {/* 3 Avantages */}
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img src="/images/livraison.jpg" className="card-img-top" alt="Livraison" />
            <div className="card-body text-center">
              <h5 className="card-title">Livraison rapide</h5>
              <p className="card-text">Expédition en 24h.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <div className="card shadow-sm h-100">
            <img src="/images/paiement.jpg" className="card-img-top" alt="Paiement" />
            <div className="card-body text-center">
              <h5 className="card-title">Paiement sécurisé</h5>
              <p className="card-text">Stripe, PayPal et plus.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <div className="card shadow-sm h-100">
            <img src="/images/support.jpg" className="card-img-top" alt="Support" />
            <div className="card-body text-center">
              <h5 className="card-title">Support 7j/7</h5>
              <p className="card-text">Service client réactif.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
