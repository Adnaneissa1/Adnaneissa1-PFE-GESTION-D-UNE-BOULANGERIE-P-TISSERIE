import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './utilisateurSlice';
import './utilisateur.css'; 

const AddUtilisateur = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    type: '',
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(addUser(formData));
      setFormData({ nom: '', prenom: '', email: '', password: '', type: '' }); // Clear the form after successful submission (optional)
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div id='user' className="user container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2>Ajouter un utilisateur</h2>
          <form onSubmit={handleSubmit}>  
            <div className="form-group">
              <label htmlFor="nom">Nom:</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                placeholder="Entrez votre nom"
                className="form-control"  
              />
            </div>
            <div className="form-group">
              <label htmlFor="prenom">Prénom:</label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
                placeholder="Entrez votre prénom"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Entrez votre email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Entrez votre mot de passe"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type:</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Sélectionner un type</option>
                <option value="livreur">Livreur</option>
                <option value="employe">Employé</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Ajouter l'utilisateur
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUtilisateur;
