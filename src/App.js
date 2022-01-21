import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./Components/MainPage/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./Components/Appointment/Appointment";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
