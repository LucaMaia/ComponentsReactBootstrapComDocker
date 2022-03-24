import React, {useEffect, useState} from "react";
import {Cookies, useCookies} from "react-cookie";
import {useSelector} from "react-redux";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import Header from "../components/Header";
import Footer from "../components/Footer";


function AppRoute() {
    const [usuario, setUsuario] = useState({});
    const [cookies, setCookie] = useCookies(['user']);
    const [logado, setLogado] = useState(false);

     return (
        <BrowserRouter>
            <Header />
            <div id="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="*" component={Error} />                    
                </Switch>
            </div>
            <Footer negative={false}/>
        </BrowserRouter>
    );
}

export default AppRoute;
