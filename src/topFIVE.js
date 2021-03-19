import React from "react";
import { Route, Redirect } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { userStorageKey } from "./components/auth/authSettings"
import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./components/ApplicationViews";

export const TopFive = () => (
  <>
    <Route render={() => {
      if (sessionStorage.getItem(userStorageKey)) {
        return (
          <>
            <NavBar />
            <ApplicationViews />
          </>
        )
      } else {
        return <Redirect to="/login" />;
      }
    }} />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);