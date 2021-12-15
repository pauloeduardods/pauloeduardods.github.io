import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGa from 'react-ga';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    console.log(process.env.NODE_ENV)
    console.log(process.env.GOOGLE_ANALYTICS_ID)
    if (process.env.NODE_ENV === 'production') {
      ReactGa.initialize(process.env.GOOGLE_ANALYTICS_ID);
      ReactGa.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route component={ () => (<div>Not found</div>) } />
    </Switch>
  );
}

export default App;
