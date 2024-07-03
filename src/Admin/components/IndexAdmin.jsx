import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import Main from './Main'
import { Route, Routes } from 'react-router-dom'
import CategoryList from '../category/CategoryList'
import AddCategory from '../category/AddCategory'
import EditCategory from '../category/EditCategory'
import AddUtilisateur from '../utilisateur/AddUtilisateur'
import UtilisateurList from '../utilisateur/UtilisateursList'
import UtilisateurEdit from '../utilisateur/UtilisateurEdit'
import MessageList from '../message/MessageList'

function IndexAdmin() {
  return (
    <>
    <Header />
    <SideBar />
    <Routes>
      <Route path="/admin/categories" element={<CategoryList/>} />
      <Route path="/admin" element={<Main />} />
      <Route path='/admin/add_categorie'  element={<AddCategory />} />
      <Route path='/admin/edit_categorie/:id' element={<EditCategory />} />
      <Route path='/admin/add_user' element={<AddUtilisateur />}/>
      <Route path='/admin/users' element={<UtilisateurList  />} />
      <Route path='/admin/edit_user/:id' element={<UtilisateurEdit  />} />
      <Route path='/admin/messages' element={<MessageList />} />
    </Routes>
    </> 
  )
}

export default IndexAdmin;