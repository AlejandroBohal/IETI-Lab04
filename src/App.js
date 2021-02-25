import React from 'react';
import {Login} from './Components/Login/Login';
import {Container} from './Components/TaskPlanner/Container';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

export const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const loggingStatus = user!==null? user.loggingStatus : "";
  return (
    <Router>
          <Route path="/" render={ () =>(
            loggingStatus !== "loggedIn" ? <Login/> : <Redirect to={{pathname:'/taskPlanner'}}/>
           )}/> 
          <Route path="/taskPlanner" render={ () =>(
            loggingStatus === "loggedIn" ? <Container/> : <Redirect to={{pathname:'/'}}/>
          )}/> 
    </Router>
  );
}

export default App;

