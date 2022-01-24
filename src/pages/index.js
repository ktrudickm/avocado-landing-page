import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const Home = () => {
    return (
        <>
          <NavBar />
          <ContactForm/>
          <Footer/>  
        </>
    )
}

export default Home;
