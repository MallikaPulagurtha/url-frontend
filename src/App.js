import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopBar from './topbar';
import './App.css';
import Welcome from './welcome';
import Register from './register'
import Login from './login'
import Main from './main'

function App() {

  return (
    <>
      <Router>
        <TopBar></TopBar>
        {/* <Main path="/"></Main>
        <URLS></URLS> */}
        <Switch>
          <Route path="/" exact="true"><Welcome /></Route>
          <Route path="/login" exact="true"><Login /></Route>
          <Route path="/register" exact="true"><Register /></Route>
          <Route path="/main/:id" exact="true">
            <Main></Main>
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
