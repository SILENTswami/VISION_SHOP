import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './Components/Appbar'
import Footer from './Components/Footer'
import React from 'react';
// import Carousal from './components/Carousal';
// import Events from './components/Events';
// import AboutUs from './components/AboutUs'; 
// import OfficeBearers from './components/OfficeBearers';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
// import AllEvents from './components/AllEvents';
// import PageNotFound from './components/PageNotFound';
import Body from './Components/Body';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Appbar/>
        <Routes>
            <Route path='/' element={<><Body /><Footer/></>}/>

          
        </Routes>   
      </Router>
      
    </>
  )
}

export default App
