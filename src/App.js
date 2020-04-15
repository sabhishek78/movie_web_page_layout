import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from "./Grid";
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";

import MovieDetail from "./MovieDetail";
function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path='/moviedetail/:id' component={MovieDetail}/>
                  <Route path='/' component={Grid}/>
              </Switch>

          </div>
      </Router>

  );
}

export default App;
