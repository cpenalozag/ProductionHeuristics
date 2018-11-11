import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

import Dashboard from "../dashboard/Dashboard";
import Footer from "./Footer";
import Demand from "../parameters/Demand";


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <Router>
                <div className="wrapper">
                    <div className="sidebar">
                        <div className="sidebar-wrapper">
                            <div className="text-center">
                                <img className="logo" src="images/logo.png" alt="Logo"/>

                            </div>
                            <ul className="nav">
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/">
                                        <i className="far fa-calendar-alt"></i>
                                        <p>Programación</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/demand">
                                        <i className="fas fa-chart-line"></i>
                                        <p>Demanda</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-panel">
                        <nav className="navbar navbar-expand-lg " color-on-scroll="500">
                            <div className=" container-fluid">
                                <h4 className="card-category dark-blue"><strong>Heurísticas</strong></h4>
                                <button className="navbar-toggler navbar-toggler-right" type="button"
                                        data-toggle="collapse" data-target="#navbarNav" aria-controls="navigation-index"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-bar burger-lines"></span>
                                    <span className="navbar-toggler-bar burger-lines"></span>
                                    <span className="navbar-toggler-bar burger-lines"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <NavLink activeClassName="active-link" exact className="nav-link"
                                                     to="/">
                                                <p>Dashboard</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink activeClassName="active-link" exact className="nav-link"
                                                     to="/demand">
                                                <p>Demanda</p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="content">
                            <Switch>
                                <Route exact path="/"
                                       render={() => <Dashboard/>}/>
                                <Route exact path="/demand"
                                       render={() => <Demand/>}/>

                                {/*<Route exact path="/budget"*/}
                                {/*render={(props) => <Budget {...props} budget={this.props.budget}/>}/>*/}
                            </Switch>
                        </div>
                        <Footer/>
                    </div>

                </div>
            </Router>
        );
    }
}

export default Navbar;