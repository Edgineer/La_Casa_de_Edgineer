import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Interests from './components/Interests';

function App(){
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/interests" component={Interests}/>
    </Router>
  );
}

export default App;

