import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import History from './History/History';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  historyData,
  contactData,
  footerData,
  timingsData,
} from '../mock/data';

function App() {
  return (
    <PortfolioProvider
      value={{
        hero: heroData,
        about: aboutData,
        history: historyData,
        contact: contactData,
        footer: footerData,
        timings: timingsData,
      }}
    >
      <Hero />
      <About />
      <History />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
