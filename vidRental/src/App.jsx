import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import Darea from './components/Darea'
import Footer from "./Footer.jsx"


function App() {

  return (
    <div className="App">
      <Header />
      <Darea/>
      <Footer />
      
    </div>
  )
}

export default App;
