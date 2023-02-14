import React from 'react'

// import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
// import { Navbar } from './components'
import './App.scss'
import { DetailPortofolio } from './components'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Home/> } />
        <Route exact path='/detail/:params' element={ <DetailPortofolio/> } />
      </Routes>
    </Router>
  )
}

export default App
