import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './UI/Home';
import Products from './UI/Products';
import ArtisanProfiles from './UI/ArtisanProfiles';
import Login from './UI/Login';
import Signup from './UI/Signup';
import AboutUs from './UI/Aboutus';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/artisanprofiles" element={<ArtisanProfiles/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/aboutUs" element={<AboutUs/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}