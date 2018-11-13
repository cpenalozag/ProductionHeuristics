import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";


export const Materials = new Mongo.Collection("Materials");


if (Meteor.isServer) {
    Meteor.publish("Materials", () => {
        return Materials.find({});
    });
}

Meteor.methods({
    "materials.updateCost"(type, material, period, value) {
        const res = Materials.findOne({nombre: material});
        let costs = res.costos;
        costs[type][period] = value;
        Materials.update(res._id, {
            $set: {costos: costs},
        });
    },
    "materials.updateLT"(material, value) {
        const res = Materials.findOne({nombre: material});
        Materials.update(res._id, {
            $set: {leadtime: value},
        });
    },
    "materials.updateSS"(material, period, value) {
        const res = Materials.findOne({nombre: material});
        let ss = res.ss;
        ss[period] = value;
        Materials.update(res._id, {
            $set: {ss: ss},
        });
    },
    "materials.initialInsert"() {
        data.forEach((item) => {
            Materials.insert(
                item
            );
        })
    }
});

const data = [{
    "nombre": "Sopa",
    "costos": {
        "adquirir": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "mantener": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "ordenar": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        }
    },
    "ss": {
        "primero": "0",
        "segundo": "0",
        "tercero": "0",
        "cuarto": "0",
        "quinto": "0",
        "sexto": "0"
    },
    "leadtime": "0"
},
    {
        "nombre": "Arroz",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Carne",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Agua",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Yogurt griego",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Gelatina",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Tomate",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Salmón",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Verduras",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Manzana",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Brócoli",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Huevo",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Aguacate",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Frutos secos",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Pasta",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Cereal",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Leche",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Pollo",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    },
    {
        "nombre": "Compota de frutas",
        "costos": {
            "adquirir": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "mantener": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            },
            "ordenar": {
                "primero": "0",
                "segundo": "0",
                "tercero": "0",
                "cuarto": "0",
                "quinto": "0",
                "sexto": "0"
            }
        },
        "ss": {
            "primero": "0",
            "segundo": "0",
            "tercero": "0",
            "cuarto": "0",
            "quinto": "0",
            "sexto": "0"
        },
        "leadtime": "0"
    }]
