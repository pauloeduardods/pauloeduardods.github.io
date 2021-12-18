import React from 'react';
import Header from '../components/Organisms/Header';
import About from '../components/Organisms/About';
import Technologies from '../components/Organisms/Technologies';
import Projects from '../components/Organisms/Projects';

function Home() {
  return (
    <>
      <Header />
      <About />
      <Technologies />
      <Projects />
    </>
  );
}

export default Home;
