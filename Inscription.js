import React, { useState } from 'react';
import axios from 'axios';

function Inscription() {
  const [form, setForm] = useState({ nom: '', email: '', motDePasse: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/utilisateurs/inscription', form);
      alert('Inscription réussie');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nom" placeholder="Nom" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="motDePasse" placeholder="Mot de passe" onChange={handleChange} />
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default Inscription;
