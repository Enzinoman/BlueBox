import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
// import './components/banner';
// import './components/navbar';


function App() {
  const [count, setCount] = useState(0)
  
  
  

  return (
    <div className="App">
      <Header />
      
    </div>
  )
}

export default App
