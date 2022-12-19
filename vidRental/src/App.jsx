import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import Footer from "./Footer.jsx"
import DisplayArea from './components/DisplayArea'




function App() {
  return (
    <div className="App">
      <Header />
      <DisplayArea />
      <Footer />
    </div>
  )
}

export default App;
