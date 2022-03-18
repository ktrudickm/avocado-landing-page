import React, { useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import NavBar from '../components/NavBar/NavBar';
import Carousel from '../components/Carousel/Carousel';
import About from '../components/About/About';
import Newsletter from '../components/Newsletter/Newsletter';
import Team from '../components/Team/Team';

const Home = () => {
    return (
        <>
          <NavBar/>
          <Jumbotron/>
          <Carousel/>
          <About/>
          <Team/>
          <ContactForm/>
          <Newsletter/>
          <Footer/>  
        </>
    )
}

export default Home;
