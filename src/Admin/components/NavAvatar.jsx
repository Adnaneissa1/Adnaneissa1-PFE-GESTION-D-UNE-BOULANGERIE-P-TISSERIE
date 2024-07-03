import React from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../images/adnan.jpg";

function NavAvatar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = 'http://localhost:3000/'; 
  };

  return (
    <li className="nav-item dropdown pe-3">
      <a
        href="/admin"
        className="nav-link nav-profile d-flex align-items-center pe-0"
        data-bs-toggle="dropdown"
      >
        <img src={profileImg} alt="Profile" className="rounded-circle" />
        <span className="d-none d-md-block dropdown-toggle ps-2">A. Issa</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Adnan Issa</h6>
          <span>Web developer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            href="/admin"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="bi bi-person"></i>
            <span>My profile</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            href="/admin"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            href="/admin"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="bi bi-question-circle"></i>
            <span>Need Help?</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          {/* Bouton de déconnexion */}
          <button
            className="dropdown-item d-flex align-items-center"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign out</span>
          </button>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
