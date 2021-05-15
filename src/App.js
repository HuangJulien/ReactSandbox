import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';
import "./styles/index.scss";

const App = () => {
  return(  
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Shop" exact component={Shop}/>
        <Route path="/Contact" exact component={Shop}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>


  );

};
export default App;