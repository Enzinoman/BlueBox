import React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from "./Footer.jsx"
import DisplayArea from './components/DisplayArea'
import Item from './components/itemDetails'
import RotatingFrog from './components/rotatingFrog'
import Minis from './components/miniModules'


function App() {
  const [linkTarget, setLinkTarget] = useState('');  
  const [backgroundImage, setBackgroundImage] = useState('');
  const [frontImage, setFrontImage] = useState('');
  const editBackgroundImage = {backgroundImage, setBackgroundImage}
  const editFrontImage = {frontImage, setFrontImage}

  return (
  <appContext.Provider value={{...editBackgroundImage, ...editFrontImage}}>
    <Router>
      <div className="App">
        <div className='content'>
          <Switch >
            <Route exact path='/'>
              <Header />
              <DisplayArea />
              <Footer />
            </Route>
            <Route exact path='/itemDetails'>
              <Header />
              <Item />
              <Footer />
            </Route>
            <Route exact path='/rotatingFrog'>
              <RotatingFrog/>
            </Route>
            <Route exact path='/minis'>
              <Minis/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </appContext.Provider>

  )
};


export const appContext = React.createContext();
export default App;

