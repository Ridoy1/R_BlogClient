import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import Write from './components/Write/Write';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <Router>
         <Switch>
           <Route exact path="/">
             <Home />
           </Route>
           <PrivateRoute path="/write">
             <Write />
           </PrivateRoute>
           <PrivateRoute path="/contact">
             <Contact/>
           </PrivateRoute>
           <Route path="/login">
             <Login />
           </Route>
         </Switch>
       </Router>
       </UserContext.Provider>
    </div>
  );
}

export default App;