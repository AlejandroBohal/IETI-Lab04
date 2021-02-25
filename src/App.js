import React, {useState,useEffect} from 'react';
import {Login} from './Components/Login/Login';
import {TaskPlannerApp} from './Components/TaskPlanner/TaskPlannerApp';
import { BrowserRouter as Router, Redirect, Route,Switch} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { NewTask } from './Components/TaskPlanner/NewTask';
import tasksList from './Components/TaskPlanner/data/tasksList';
import exampleUsers from './Components/Login/exampleUsers';

export const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const loggingStatus = user!==null? user.loggingStatus : "";
  const [tasks,setTasks] = useState(tasksList);
  const [users,setUsers] = useState(exampleUsers)
  
  const addTask = (task) => {
    setTasks([...tasks,task]);
  }
  
  return (
    
    <Router>
        <Switch>
          <Route exact path="/" component={ () =>(
            loggingStatus !== "loggedIn" ? <Login users={users}/> : <Redirect to={{pathname:'/taskPlanner'}}/>
           )}/> 
          <Route path="/taskPlanner" component={ () =>(
            loggingStatus === "loggedIn" ? <TaskPlannerApp tasks={tasks}/> : <Redirect to={{pathname:'/'}}/>
          )}/>
          <Route path="/createTask" component={ () =>(
            loggingStatus === "loggedIn" ? <NewTask addTask={addTask}/> : <Redirect to={{pathname:'/'}}/>
          )}/>
        </Switch>
    </Router>
  );
}

export default App;

