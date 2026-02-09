import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from '../MainLayout'
import Home from '../Home/Home'

import CatalogoBautizo from '../Bautizo/CatalogoBautizo'
import DetalleBautizo from '../Bautizo/DetalleBautizo'
import CatalogoNinas from '../Ninas/CatalogoNinas'
import DetalleNinas from '../Ninas/DetalleNinas'
import CatalogoNinos from '../Ninos/CatalogoNinos'
import DetalleNinos from '../Ninos/DetalleNinos'
import CatalogoAccesorios from '../Accesorios/CatalogoAccesorios'
import DetalleAccesorios from '../Accesorios/DetalleAccesorios'
import Contacto from '../Contacto'


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
