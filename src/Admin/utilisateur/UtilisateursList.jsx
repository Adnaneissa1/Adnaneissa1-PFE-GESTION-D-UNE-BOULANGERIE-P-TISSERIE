import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UtilisateurList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/utilisateurs');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/utilisateurs/${id}`);
      setUsers(users.filter(user => user.id !== id)); // Remove deleted user from state
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const getUserRowClass = (type) => {
    if (type === 'employe') {
      return 'table-primary';
    } else if (type === 'livreur') {
      return 'table-warning';
    } else if (type === 'client') {
      return 'table-success';
    }
    return '';
  };

  return (
    <div id='main' className='main'>
      <h2>Liste des utilisateurs</h2>
      <Link to="/admin/add_user" className="btn btn-primary mb-3">Ajouter un utilisateur</Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Email</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className={getUserRowClass(user.type)}>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.email}</td>
              <td>{user.type}</td>
              <td>
                <Link to={`/admin/edit_user/${user.id}`} className="btn btn-sm btn-outline-primary me-2">Éditer</Link>
                <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-outline-danger">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UtilisateurList;
