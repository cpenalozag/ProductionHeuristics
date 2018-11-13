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
        const res = Demand.findOne({tipo: type});
        let demand = res.demanda;
        demand[period] = amount;
        Demand.update(res._id, {
            $set: {demanda: demand},
        });
    },
    "demand.initialInsert"() {
        data.forEach((demand)=>{
            Demand.insert(demand)
        })
    }
});

const data = [{
    "tipo": "Estéticas",
    "demanda": {
        "primero": "0",
        "segundo": "0",
        "tercero": "0",
        "cuarto": "0",
        "quinto": "0",
        "sexto": "0"
    }
},
    {
        "tipo": "Cardiacas",
        "demanda": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        }
    },
    {
        "tipo": "Respiratorias",
        "demanda": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        }
    },
    {
        "tipo": "Ortopédicas",
        "demanda": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        }
    },
    {
        "tipo": "Neurológicas",
        "demanda": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        }
    },
    {
        "tipo": "Pediátricas",
        "demanda": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        }
    }]