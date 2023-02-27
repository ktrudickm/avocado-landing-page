import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import NavBar from '../components/NavBar/NavBar';
import About from '../components/About/About';
import Preview from '../components/Preview/Preview'
import Newsletter from '../components/Newsletter/Newsletter';
import Mission from '../components/Mission/Mission'
import OurTeam from '../components/OurTeam/ourTeam'
import Product from '../components/Product/Product'
import Waitlist from "../components/Waitlist/Waitlist";

const Home = () => {
    return (
        <>
          <NavBar/>
          <Jumbotron/>
          <Preview/>
          <About/>
          <Mission/>
          <Product />
          <OurTeam />
          <Newsletter />
          <Waitlist />
          <Footer/>
        </>
    )
}

export default Home;
