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
import Quizzes from './components/quizCard'


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
        <Header />
        <div className='content'>
          <Switch >
            <Route exact path='/'>
              <DisplayArea />
            </Route>
            <Route exact path='/itemDetails'>
              <Item />
            </Route>
            <Route exact path='/rotatingFrog'>
              <RotatingFrog/>
            </Route>
            <Route exact path='/quizzes'>
              <quizzes/>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  </appContext.Provider>

  )
};


export const appContext = React.createContext();
export default App;

