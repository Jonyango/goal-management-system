import React from 'react';
import{Route,BrowserRouter,Switch} from "react-router-dom";

import './App.css';
import HomePage from './routes/Home';
import GoalPage from './routes/Goals';

function App() {

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <HomePage/>
      </Route>
      <Route path="/goals">
        <GoalPage/>
      </Route>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
