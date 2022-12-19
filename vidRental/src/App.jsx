import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DisplayArea from './components/DisplayArea'
import Item from './components/itemDetails'


// import './components/banner';
// import './components/navbar';

//


function App() {


  return (
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
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
