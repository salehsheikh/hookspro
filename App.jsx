import React, { useState,useMemo } from 'react';
import Index from './components';
import About from './components/About';
import{Route,Link, Routes, BrowserRouter as Router } from "react-router-dom";
import { UserContext } from './UserContext';

const App = () => {
  const[user,setUser]=useState(null);
  const value=useMemo(() => ({user,setUser}), [user,setUser]);
  return (
  
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li> <Link to= "/about/"> About</Link> </li>
        </ul>
      </nav>
      <UserContext.Provider value={value}>
      <Routes>
      <Route path="/" exact element={<Index/>} />
      <Route path="/about/"  element={<About/>} />
      </Routes>
      </UserContext.Provider>
    </Router>
   
  )
}

export default App;
