import React from 'react'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Produit from './Produit'
import Contact from './Contact'
import Heeder from './Heeder'

export default function Index() {
  return (
    <div>
        <Menu />
        <Home/>
        <About/>
        <Produit/>
        <Contact/>
        <Heeder/>
    </div>
  )
}
