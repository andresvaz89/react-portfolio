import './App.css';
import React from 'react';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Portfolio></Portfolio>
      {/*<Testimonials></Testimonials>*/}
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
