//import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/Interface/LandingPage'
import styles from './components/Interface/LandingPage.css'
import { useState } from 'react'


function App() {
  //const[sideToggle, setSideToggle] = useState(false)
  return (
 
    <div className="App">
   <LandingPage />
     
     <BrowserRouter>
        <Routes>
          <Route path="/" element={ LandingPage} />
          
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
