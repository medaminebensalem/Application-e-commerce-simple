import { useState } from 'react';
import axios from 'axios';

function AjouterProduit() {
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/produits', { nom, prix });
      alert('✅ Produit ajouté avec succès !');
      setNom('');
      setPrix('');
    } catch (err) {
      console.error(err);
      alert('❌ Une erreur est survenue.');
    }
  };

  return (
    <div>
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du produit"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Prix (€)"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          required
        />
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AjouterProduit;
