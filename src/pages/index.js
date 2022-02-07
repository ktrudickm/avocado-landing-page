import React, { useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import NavBar from '../components/NavBar/NavBar';

const Home = () => {
    return (
        <>
          <NavBar />
          <Jumbotron />
          <ContactForm/>
          <Footer/>  
        </>
    )
}

export default Home;
