import React from 'react';

function NavNotice() {
  const notifications = [
    {
      id: 1,
      title: "Lorem Ipsum",
      content: "Quae dolorem earum vritatis oditseno",
      time: "1 hr ago",
      icon: "bi-bell"
    },
    {
      id: 2,
      title: "Sit Ipsum",
      content: "Quae dolorem earum vritatis oditseno",
      time: "2 hr ago",
      icon: "bi-chat"
    },
    {
      id: 3,
      title: "Dolor Ipsum",
      content: "Quae dolorem earum vritatis oditseno",
      time: "3 hr ago",
      icon: "bi-envelope"
    },
    {
      id: 4,
      title: "Amet Ipsum",
      content: "Quae dolorem earum vritatis oditseno",
      time: "4 hr ago",
      icon: "bi-calendar"
    }
  ];

  return (
    <li className='nav-item dropdown'>
      <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
        <i className='bi bi-bell'></i>
        {notifications.length > 0 && (
          <span className='badge bg-warning badge-number '>
            {notifications.length}
          </span>
        )}
      </a>
      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
        <li className='dropdown-header'>
          You have {notifications.length} new {notifications.length === 1 ? 'notification' : 'notifications'}
          <a href='#'>
            <span className='badge rounded-pill bg-primary p-2 ms-2'>
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        {notifications.map(notification => (
          <li key={notification.id} className='notification-item'>
            <i className={`bi ${notification.icon} text-warning`}></i>
            <div>
              <h4>{notification.title}</h4>
              <p>{notification.content}</p>
              <p>{notification.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default NavNotice;
