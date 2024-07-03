import React from 'react'
import './logo.css';
import { Link } from 'react-router-dom';
function Logo() {
  const handleToggleSideBar = ()=>{
    document.body.classList.toggle('toggle-sidebar');
  }
  return (
    <div className='d-flex align-items-center justify-content-between'>
      <Link to="/admin" className="logo d-flex align-items-center">
  {/* <img src="your-image-url" alt="Your Image Alt Text" /> */}
  <span className="d-none d-lg-block">Responsable </span>
  </Link>
  <i
   className="bi bi-list toggle-sidebar-btn" 
   onClick={handleToggleSideBar}>
  </i>

    </div>
  )
}

export default Logo