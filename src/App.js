import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import "./styles/index.scss";
import Informations from "./pages/Informations"

const App = () => {
  return(  
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Shop" exact component={Shop}/>
        <Route path="/Contact" exact component={Contact}/>
        <Route path="/Shop/Informations" exact component={Informations}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>


  );

};
export default App;