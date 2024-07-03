import React from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";
import { navlist } from "../data/navItem";

function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#category-nav"
            data-bs-toggle="collapse"
            to="/admin/categories" // Updated here
          >
            <i className="bi bi-archive"></i>
            <span>Category</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="category-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/admin/categories">
                <i className="bi bi-list"></i>
                <span>Categories</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/add_categorie">
                <i className="bi bi-plus"></i>
                <span>Add Category</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#users-nav"
            data-bs-toggle="collapse"
            to="/admin/users" 
          >
            <i className="bi bi-people"></i>
            <span>Users</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="users-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/admin/users"> 
                <i className="bi bi-person"></i>
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/add_user"> 
                <i className="bi bi-person-plus"></i>
                <span>Add User</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#messages-nav"
            data-bs-toggle="collapse"
            to="/admin/messages" // Updated here
          >
            <i className="bi bi-chat-dots"></i>
            <span>Messages</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="messages-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/admin/messages">
                <i className="bi bi-envelope"></i>
                <span>New Messages</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="bi bi-reply"></i>
                <span>Reply Message</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-heading">Pages</li>
        {navlist.map((nav) => (
          <li className="nav-item" key={nav.id}>
            <Link className="nav-link collapsed" to="/"> 
              <i className={nav.icon}></i>
              <span>{nav.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
