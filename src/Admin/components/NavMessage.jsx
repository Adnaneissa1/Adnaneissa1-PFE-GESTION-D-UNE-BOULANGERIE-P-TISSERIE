import React from 'react';

function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <a href="/admin" className='nav-link nav-icon' data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className='badge bg-success badge-number'>1</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
          You have 3 new messages
          <a href="/admin">
            <span className='badge rounded-pill bg-primary p-2 ms-2'>
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li className='message-item'>
          <a href="/admin">
            <img src="/assets/images/avatars/08.jpg" alt="" className='rounded-circle msg-profile' />
            <div>
              <h6>Jason Doe</h6>
              <span>I will be waiting for your response and I am looking forward to hearing from you.</span>
              <small>3 min ago</small>
            </div>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        {/* Add more message items here if needed */}
      </ul>
    </li>
  );
}

export default NavMessage;
