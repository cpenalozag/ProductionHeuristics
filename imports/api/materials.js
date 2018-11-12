import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";


export const Materials = new Mongo.Collection("Materials");


if (Meteor.isServer) {
    Meteor.publish("Materials", () => {
        return Materials.find({});
    });
}

Meteor.methods({

});
