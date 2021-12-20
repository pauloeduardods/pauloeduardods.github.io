import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGa from 'react-ga';
import Header from './components/Organisms/Header';
import Footer from './components/Organisms/Footer';
import Config from './Config';
import Home from './pages/Home';
import './App.css';

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGa.initialize(Config.GOOGLE_ANALYTICS_ID);
      ReactGa.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route component={ () => (<div>Not found</div>) } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
