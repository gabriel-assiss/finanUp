import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Layout2colunas from './components/Layout2olunas.jsx'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Layout2colunas />
    </div>
  )
}

export default App
