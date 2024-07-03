import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UtilisateurEdit() {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    nom: '',
    prenom: '',
    email: '',
    type: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/utilisateurs/${id}`);
        if (response.status === 200) {
          const userData = response.data;
          setUserData(userData);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/utilisateurs/${id}`, userData);
      // Optionally, you can redirect the user to another page after successful update
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div id='main' className='main'>
      <h2>Modifier Utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom</label>
          <input type="text" className="form-control" id="nom" name="nom" value={userData.nom} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="prenom" className="form-label">Prénom</label>
          <input type="text" className="form-control" id="prenom" name="prenom" value={userData.prenom} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <select className="form-select" id="type" name="type" value={userData.type} onChange={handleChange}>
            <option value="employe">Employé</option>
            <option value="livreur">Livreur</option>
            <option value="client">Client</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Enregistrer</button>
      </form>
    </div>
  );
}

export default UtilisateurEdit;
