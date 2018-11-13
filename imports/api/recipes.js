import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";


export const Recipes = new Mongo.Collection("Recipes");


if (Meteor.isServer) {
    Meteor.publish("Recipes", () => {
        return Recipes.find({});
    });
}

Meteor.methods({
    "recipes.updateIngredients" (name, ingredient, value){
        const res = Recipes.findOne({nombre:name});
        res[ingredient]=value;
        Recipes.update({nombre:name},res)
    },
    "recipes.updateQuantity" (name, value){
        const res = Recipes.findOne({nombre:name});
        Recipes.update(res._id, {
            $set: {cantidad:value},});
    }
});
