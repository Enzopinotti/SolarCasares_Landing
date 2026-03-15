import React from 'react';
import '../styles/main.css';

import AboutUs from './AboutUs.js';
import Products from './Products.js';
import Doubs from './Doubs.js';
import ContactUs from './ContactUs.js';

const Main = () => {
  return (
    <main className="main-content">
      <AboutUs />
      <Products />
      <Doubs />
      <ContactUs />
    </main>
  );
};

export default Main;