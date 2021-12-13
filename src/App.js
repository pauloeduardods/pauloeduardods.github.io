import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route component={ () => (<div>Not found</div>) } />
    </Switch>
  );
}

export default App;
