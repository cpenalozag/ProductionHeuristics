import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";


export const Demand = new Mongo.Collection("Demand");


if (Meteor.isServer) {
    Meteor.publish("Demand", () => {
        return Demand.find({});
    });
}

Meteor.methods({

});
