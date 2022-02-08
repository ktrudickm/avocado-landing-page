import React, { useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import NavBar from '../components/NavBar/NavBar';
import Carousel from '../components/Carousel/Carousel';
import About from '../components/About/About';

const Home = () => {
    return (
        <>
          <NavBar/>
          <Jumbotron/>
          <Carousel/>
          <About/>
          <ContactForm/>
          <Footer/>  
        </>
    )
}

export default Home;
