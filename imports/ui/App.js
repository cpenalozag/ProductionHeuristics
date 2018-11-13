import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import './App.css';

import Navbar from "./components/layout/Navbar";

import {Demand} from "../api/demand.js";
import {Materials} from "../api/materials.js";
import {Recipes} from "../api/recipes.js";

class App extends Component {

    render() {
        return (
            <Navbar demand={this.props.demand} materials={this.props.materials} recipes={this.props.recipes}/>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe("Demand");
    Meteor.subscribe("Materials");
    Meteor.subscribe("Recipes");
    return {
        demand: Demand.find({}).fetch(),
        materials: Materials.find({}).fetch(),
        recipes: Recipes.find({}).fetch()
    };
})(App);