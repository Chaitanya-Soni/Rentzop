import React from "react";
import "../App.css";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import USP from "./USP";
import Offered from "./OffersComponent";
import Projects from "./LatestPropComponent";
import SignIn from "./SignInComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
function LandingPage() {

  const HomePage =() => {
    return (
      <div>
        <USP />
        <Offered />
        <Projects />
    </div>
    );
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/signin' component={() => <SignIn />} />
        <Redirect exact from="/" to="home" />
      </Switch>
      <Footer />
      
    </div>
  );
}

export default LandingPage;
