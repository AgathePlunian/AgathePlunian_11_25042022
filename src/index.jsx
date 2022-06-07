import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Header from './components/Header';
import Location from './pages/Location/location'
import Error from './pages/Error/error'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './css/styles.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="about" element={<About/>}/>
      <Route path="location/:locationId" element={<Location />}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);

