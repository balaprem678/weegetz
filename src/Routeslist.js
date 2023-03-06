import React from "react";
import {
  // BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Privacy from "./Privacy";
import Security from "./Security";


export default function Routeslist() {
  return (
    <div>
   
        <Routes>              
          <Route path='/' element={<Home />} />
          <Route path='/Navigation' element={<Navigation />} />
          <Route path='/Footer' element={<Footer />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/Security' element={<Security />} />
        </Routes>
      
    </div>
  )
}