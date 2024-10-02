import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import React from 'react';
// --- //
import Home from './pages/Home.jsx';
// --- //
import Login from './pages/Login.jsx';

<script src='./css/App.css'></script>
function App() {


  return (
    
    <Router>
      <Routes>  
          <Route path='/' element={<Login/>}/>
          <Route path="/Home" element={<Home />} />
          
        </Routes>
    </Router>
  );
}

export default App;
