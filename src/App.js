import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import IndexAdmin from './Admin/components/IndexAdmin';
import IndexEmpl from './employe/components/IndexEmpl';
import Appp from './projet_fin/home/Appp';
import { Route, Routes } from 'react-router-dom/dist';

function App() {
  const [typeUser, setTypeUser] = useState("client");

  // Fetch the user type from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setTypeUser(user.type);
    }
  }, []); 

  return (
    <div>
      {typeUser === "admin" ? (
        <IndexAdmin/>
      ) : typeUser === "employe" ? (
        <IndexEmpl />
      ) : (
        <Appp/>
      )}
    </div>
  );
}

export default App;
