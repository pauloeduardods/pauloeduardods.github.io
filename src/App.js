import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGa from 'react-ga';
import Config from './Config';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGa.initialize(Config.GOOGLE_ANALYTICS_ID);
      ReactGa.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route component={ NotFound } />
    </Switch>
  );
}

export default App;
