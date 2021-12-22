import React from 'react';
import Header from '../components/Organisms/Header';
import About from '../components/Organisms/About';
import Technologies from '../components/Organisms/Technologies';
import Projects from '../components/Organisms/Projects';
import Footer from '../components/Organisms/Footer';

function Home() {
  return (
    <>
      <Header />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
