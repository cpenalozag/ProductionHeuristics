import React, {Component} from "react";
import {Meteor} from "meteor/meteor";

class SecurityStock extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();

        //Meteor.call();
    }

    renderSecurityStocks() {
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" ref={`ss,${material.nombre},primero`} min="0" max="100" required="" type="number" defaultValue={material.ss.primero}/></td>
                    <td><input className="form-control text-center" ref={`ss,${material.nombre},segundo`} min="0" max="100" required="" type="number" defaultValue={material.ss.segundo}/></td>
                    <td><input className="form-control text-center" ref={`ss,${material.nombre},tercero`} min="0" max="100" required="" type="number" defaultValue={material.ss.tercero}/></td>
                    <td><input className="form-control text-center" ref={`ss,${material.nombre},cuarto`} min="0" max="100" required="" type="number" defaultValue={material.ss.cuarto}/></td>
                    <td><input className="form-control text-center" ref={`ss,${material.nombre},quinto`} min="0" max="100" required="" type="number" defaultValue={material.ss.quinto}/></td>
                    <td><input className="form-control text-center" ref={`ss,${material.nombre},sexto`} min="0" max="100" required="" type="number" defaultValue={material.ss.sexto}/></td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="content">
                        <div className="card-header ">
                            <h4 className="card-title">Stock de Seguridad </h4>
                        </div>
                        <div className="card-body ">
                            <form action="">
                                <table className="table table-bordered">
                                    <tbody className="">
                                    <tr>
                                        <th></th>
                                        <th colSpan="6" scope="colgroup">Mes</th>
                                    </tr>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                        <th>4</th>
                                        <th>5</th>
                                        <th>6</th>
                                    </tr>
                                    {this.renderSecurityStocks()}
                                    </tbody>
                                </table>
                                <div className="row">
                                    <div className="col-md-2 mx-auto">
                                        <input className="btn btn-primary" type="submit" value="Guardar"/>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecurityStock;