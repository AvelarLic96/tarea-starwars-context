import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './Componets/Pages/Home';
import People from './Componets/Pages/people/PeopleList';
import Starship from './Componets/Pages/starship/StarshipList';
import Header from './Componets/UI/Header';
import {PeopleProvider} from './Context/PeopleContext';

function App() {
  return (
    <PeopleProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />		
            <Route path="/people" component={People} />
            <Route path="/starship" component={Starship} />
          </Switch> 
        </BrowserRouter>
      </div>
    </PeopleProvider>
  );
}

export default App;
