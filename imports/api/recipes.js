import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";


export const Recipes = new Mongo.Collection("Recipes");


if (Meteor.isServer) {
    Meteor.publish("Recipes", () => {
        return Recipes.find({});
    });
}

Meteor.methods({

});
