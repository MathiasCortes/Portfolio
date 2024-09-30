import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import React from 'react';

// --- //
import Home from './pages/Home';
// --- //
import LoginForm from './pages/LoginForm';

<script src='./css/App.css'></script>
function App() {


  return (
    
    <Router>
      <Routes>  
          <Route path='/' element={<LoginForm/>}/>
          <Route path="/home" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
