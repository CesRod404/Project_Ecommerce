import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './components/MainLayout'
import Home from './components/Home/Home'

import CatalogoBautizo from './components/Bautizo/CatalogoBautizo'
import DetalleBautizo from './components/Bautizo/DetalleBautizo'
import CatalogoNinas from './components/Ninas/CatalogoNinas'
import DetalleNinas from './components/Ninas/DetalleNinas'
import CatalogoNinos from './components/Ninos/CatalogoNinos'
import DetalleNinos from './components/Ninos/DetalleNinos'
import CatalogoAccesorios from './components/Accesorios/CatalogoAccesorios'
import DetalleAccesorios from './components/Accesorios/DetalleAccesorios'
import Contacto from './components/Contacto'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>}/>
          <Route path="bautizo" element={<CatalogoBautizo/>}></Route>
          <Route path='bautizo/:id' element={<DetalleBautizo/>}/>
          <Route path="ninas" element={<CatalogoNinas/>}/>
          <Route path="ninas/:id" element={<DetalleNinas/>}/>
          <Route path='ninos' element={<CatalogoNinos/>}/>
          <Route path="ninos/:id" element={<DetalleNinos />} />
          <Route path="accesorios" element={<CatalogoAccesorios/>}/>
          <Route path="accesorios/:id" element={<DetalleAccesorios/>}/>
          <Route path="contacto" element={<Contacto/>}/>



        </Route>
      </Routes>
  
    </BrowserRouter>
    
  )
}

export default App
