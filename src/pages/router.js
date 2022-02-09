import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
import Apropos from "../../pages/Apropos";
import Sondages from "../../pages/Sondages";
import Invisibles from "../../pages/Invisibles";
import Inscription from "../../pages/Inscription";
import Profil from "../../pages/Profil";
import NavBar from '../NavBar';
import Redaction from '../../pages/Redaction'

const index = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/apropos" exact component={Apropos}></Route>
                <Route path="/inscription" exact component={Inscription}></Route>
                <Route path="/invisibles" exact component={Invisibles}></Route>
                <Route path="/sondages" exact component={Sondages}></Route>
                <Route path="/profil" exact component={Profil}></Route>
                <Route path="/redaction" exact component={Redaction}></Route>
                <Redirect to="/" />
            </Switch>
        </Router>);
};

export default index;