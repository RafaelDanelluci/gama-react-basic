import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Repositories from '../pages/Repositories/index.js';
import Home from '../pages/Home/index.js';

export default function Routers() {
  return(
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/repositories" element={<Repositories/>} />
      </Routes>
    </Router>
  )
}