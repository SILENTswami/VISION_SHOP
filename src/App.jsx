import './App.css'
import Appbar from './Components/Appbar'
import Footer from './Components/Footer'
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Body from './Components/Body';

function App() {

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
