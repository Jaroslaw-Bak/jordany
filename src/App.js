import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Fotter from './components/Fotter';
import Contact from './components/Contact';
import SingleBootPage from './components/SingleBootPage';
import AdminSgnIn from './components/AdminSgnIn';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPage from './components/AdminPage';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch> 
        <Route path="/contact">
            <Contact />
        </Route>
        <Route path="/aboutme">
        </Route>
        <Route path="/signin">
          <AdminSgnIn />
        </Route>
        <Route path="/boot/:id">
          <SingleBootPage />
        </Route>
        <ProtectedRoute path="/admin" component={AdminPage} />
        <Route path="/">  
              <Home />    
        </Route>     
      </Switch>
      <Fotter />
    </Router>
  
  </div>)
}

export default App;