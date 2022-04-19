import React, { useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import NavBar from '../components/NavBar/NavBar';
import Carousel from '../components/Carousel/Carousel';
import About from '../components/About/About';
import Newsletter from '../components/Newsletter/Newsletter';
import Team from '../components/Team/Team';
import Mission from '../components/Mission/Mission'

const Home = () => {
    return (
        <>
          <NavBar/>
          <Jumbotron/>
          <Carousel/>
          <About/>
          <Mission/>
          <Team/>
          <ContactForm/>
          <Footer/>
        </>
    )
}

export default Home;
