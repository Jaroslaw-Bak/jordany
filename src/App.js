import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Fotter from './components/Fotter';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Switch>  
        <Route path="/contact">

        </Route>
        <Route path="/aboutme">
        </Route>
        <Route path="/admin">
          
        </Route>
        <Route path="/">
              <Header />
              <Home />
              <Fotter />
        </Route>     
      </Switch>
    </Router>
  
  </div>)
}

export default App;