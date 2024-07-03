import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './Index'
import Reservation from '../../Reservation/Reservation'
import About from '../About/About'
import Panier from '../Panier/Panier'
import Contact from '../../contact/forms/Contact'
import HasAccount from '../../sign _in/HasAccount'
import Cakes from '../cakes/Cakes'



export default function Appp() {
  return (
    <div>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/reservation' element={<Reservation/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/panier' element={<Panier/>}/>
                <Route path='/panier/:id' element={<Panier/>}/>
                <Route path='/conatct_no' element={<Contact/>}/>
                <Route path='/signin' element={<HasAccount/>}/>
                <Route path='/cakes' element={<Cakes/>}/>
            </Routes>
    </div>
  )
}
