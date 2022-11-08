import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Footer from './Componets/Footer/Footer';
import Blog1 from './InnerPages/Blog1';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/service" element={<Services></Services>}></Route>
      <Route path="/blog-1" element={<Blog1></Blog1>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
