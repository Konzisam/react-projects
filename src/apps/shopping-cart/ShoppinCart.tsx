import React from 'react'
import { Routes, Route } from "react-router-dom"

import './style.css'
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/navbar/Navbar';

const App: React.FC = () => {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/shopping-cart' element={<Home/>}/>
        <Route path='/shopping-cart/store' element={<Store/>}/>
        <Route path='/shopping-cart/about' element={<About/>}/>
      </Routes>
    </>
   
  )
};

export default App

