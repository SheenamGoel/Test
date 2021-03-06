// import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser';
import ViewUsers from './Components/Users/ViewUsers';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/users/add' component={AddUser} />
          <Route exact path='/users/edit/:id' component={EditUser} />
          <Route exact path='/users/:id' component={ViewUsers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
