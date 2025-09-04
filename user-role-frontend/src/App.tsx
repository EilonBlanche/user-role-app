import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mt-4">
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="active"
            >
              Users List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/users"
              className="nav-link"
              activeClassName="active"
            >
              Add User
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={UsersList} />
          <Route path="/users" component={UserForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
