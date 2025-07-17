import React, { useState } from 'react';
import axios from 'axios';

function Connexion() {
  const [form, setForm] = useState({ email: '', motDePasse: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/utilisateurs/connexion', form);
      localStorage.setItem('token', res.data.token);
      alert('Connexion réussie');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="motDePasse" placeholder="Mot de passe" onChange={handleChange} />
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default Connexion;
