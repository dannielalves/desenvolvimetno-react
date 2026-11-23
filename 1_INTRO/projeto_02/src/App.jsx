import { useState } from 'react'
import './App.css'
import imgFranca2 from './assets/Franca_2.webp'
import ManageData from './components/ManageData'

function App() {
 
  return (
    <>
      <h1>Avançando em React</h1>
      {/* Imagem em Public */}
      <img src="./Franca_1.webp" alt="Foto_1 em Paris França" />
      {/* imagem em Assets (é necessário importar a imagem) */}
      <img src={imgFranca2} alt="Foto_2 em Paris França" />
      <ManageData/>
    </>
  )
}

export default App
