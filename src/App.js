import React from 'react';
import './App.css';
import HomePage from "./HomePage";
import Search from "./Search/search";
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";

import MovieDetail from "./MovieDetail";
function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path='/search/:query' component={HomePage}/>
                  <Route path='/search' component={Search}/>

                  <Route path='/moviedetail/:id' component={MovieDetail}/>
                  <Route path='/' component={HomePage}/>
              </Switch>

          </div>
      </Router>

  );
}

export default App;
