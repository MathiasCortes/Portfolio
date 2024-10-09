import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import React from 'react';
// --- //
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx';
import Edit from './pages/Edit.jsx'
import Login from './pages/Login.jsx';


<script src='./css/App.css'></script>
function App() {


  return (
    <Router>
      <Routes>  
          <Route path='/' element={<Login/>}/>
          <Route path='/Inicio' element={<Home/>}/>
          <Route path='/Editar' element={<Edit/>}/>
          <Route path='/Error' element={<Error/>}/>
        </Routes>
    </Router>
  );
}

export default App;
