import React from 'react'
import './main.css';
import PageTitle from './PageTitle';
import Dashboard from './Dashboard';
function MainEmpl() {
  return (
    <main id='main' className='main'>
        <PageTitle pag="Dashboard" />
        <Dashboard />
    </main>
  )
}

export default MainEmpl;