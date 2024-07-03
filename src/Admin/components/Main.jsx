import React from 'react'
import './main.css';
import PageTitle from './PageTitle';
import Dashboard from './Dashboard';
import Header from './Header';
import SideBar from './SideBar';
function Main() {
  return (
    <main id='main' className='main'>
        <PageTitle pag="Dashboard" />
        <Dashboard />
    </main>
  )
}

export default Main