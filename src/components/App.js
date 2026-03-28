import React from "react";
import "./../styles/App.css";
import UserList from "./UserList";
import { Route, Switch } from "react-router-dom";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/users/:id" component={UserDetails} />
      </Switch>
    </>
  );
};

export default App;
