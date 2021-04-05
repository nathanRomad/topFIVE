import React from "react";
import { Route, Redirect } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { userStorageKey } from "./components/auth/authSettings"
import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./components/ApplicationViews";
import { Footer } from "./components/nav/Footer";

export const TopFive = () => (
  <>
    <Route render={() => {
      if (sessionStorage.getItem(userStorageKey)) {
        return (
          <>
            <NavBar />
            <ApplicationViews />
            <Footer />
          </>
        )
      } else {
        return <Redirect to="/login" />;
      }
    }} />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">x
      <Register />
    </Route>
  </>
);