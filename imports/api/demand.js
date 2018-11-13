import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";


export const Demand = new Mongo.Collection("Demand");


if (Meteor.isServer) {
    Meteor.publish("Demand", () => {
        return Demand.find({});
    });
}

Meteor.methods({
    "demand.update"(type, period, amount) {
        const res = Demand.findOne({tipo:type});
        let demand = res.demanda;
        demand[period]=amount;
        Demand.update(res._id, {
            $set: { demanda:demand},});
    }
});
