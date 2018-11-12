import React, {Component} from "react";

class Costs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderCostsFirst() {
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" ref={`costs,ordenar,${material.nombre},primero`} min="0" required="" type="number" defaultValue={material.costos.ordenar.primero}/></td>
                    <td><input className="form-control text-center" ref={`costs,adquirir,${material.nombre},primero`} min="0" required="" type="number" defaultValue={material.costos.adquirir.primero}/></td>
                    <td><input className="form-control text-center" ref={`costs,mantener,${material.nombre},primero`} min="0" required="" type="number" defaultValue={material.costos.mantener.primero}/></td>

                    <td><input className="form-control text-center" ref={`costs,ordenar,${material.nombre},segundo`} min="0" required="" type="number" defaultValue={material.costos.ordenar.segundo}/></td>
                    <td><input className="form-control text-center" ref={`costs,adquirir,${material.nombre},segundo`} min="0" required="" type="number" defaultValue={material.costos.adquirir.segundo}/></td>
                    <td><input className="form-control text-center" ref={`costs,mantener,${material.nombre},segundo`} min="0" required="" type="number" defaultValue={material.costos.mantener.segundo}/></td>

                    <td><input className="form-control text-center" ref={`costs,ordenar,${material.nombre},tercero`} min="0" required="" type="number" defaultValue={material.costos.ordenar.tercero}/></td>
                    <td><input className="form-control text-center" ref={`costs,adquirir,${material.nombre},tercero`} min="0" required="" type="number" defaultValue={material.costos.adquirir.tercero}/></td>
                    <td><input className="form-control text-center" ref={`costs,mantener,${material.nombre},tercero`} min="0" required="" type="number" defaultValue={material.costos.mantener.tercero}/></td>
                </tr>
            )
        });
    }

    renderCostsSecond() {
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" ref={`costs,ordenar,${material.nombre},cuarto`} min="0" required="" type="number" defaultValue={material.costos.ordenar.cuarto}/></td>
                    <td><input className="form-control text-center" ref={`costs,adquirir,${material.nombre},cuarto`} min="0" required="" type="number" defaultValue={material.costos.adquirir.cuarto}/></td>
                    <td><input className="form-control text-center" ref={`costs,mantener,${material.nombre},cuarto`} min="0" required="" type="number" defaultValue={material.costos.mantener.cuarto}/></td>

                    <td><input className="form-control text-center" ref={`costs,ordenar,${material.nombre},quinto`} min="0" required="" type="number" defaultValue={material.costos.ordenar.quinto}/></td>
                    <td><input className="form-control text-center" ref={`costs,adquirir,${material.nombre},quinto`} min="0" required="" type="number" defaultValue={material.costos.adquirir.quinto}/></td>
                    <td><input className="form-control text-center" ref={`costs,mantener,${material.nombre},quinto`} min="0" required="" type="number" defaultValue={material.costos.mantener.quinto}/></td>

                    <td><input className="form-control text-center" ref={`costs,ordenar,${material.nombre},sexto`} min="0" required="" type="number" defaultValue={material.costos.ordenar.sexto}/></td>
                    <td><input className="form-control text-center" ref={`costs,adquirir,${material.nombre},sexto`} min="0" required="" type="number" defaultValue={material.costos.adquirir.sexto}/></td>
                    <td><input className="form-control text-center" ref={`costs,mantener,${material.nombre},sexto`} min="0" required="" type="number" defaultValue={material.costos.mantener.sexto}/></td>
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
                            <h4 className="card-title">Estructura de costos</h4>
                        </div>
                        <div className="card-body ">
                            <form action="">
                                <table className="table table-bordered">
                                    <tbody className="">
                                    <tr>
                                        <th></th>
                                        <th colSpan="9" scope="colgroup">Mes</th>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th colSpan="3" scope="colgroup">1</th>
                                        <th colSpan="3" scope="colgroup">2</th>
                                        <th colSpan="3" scope="colgroup">3</th>
                                    </tr>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Ordenar</th>
                                        <th>Adquirir</th>
                                        <th>Mantener</th>
                                        <th>Ordenar</th>
                                        <th>Adquirir</th>
                                        <th>Mantener</th>
                                        <th>Ordenar</th>
                                        <th>Adquirir</th>
                                        <th>Mantener</th>
                                    </tr>
                                    {this.renderCostsFirst()}
                                    </tbody>
                                </table>
                                <table className="table table-bordered">
                                    <tbody className="">
                                    <tr>
                                        <th></th>
                                        <th colSpan="9" scope="colgroup">Mes</th>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th colSpan="3" scope="colgroup">4</th>
                                        <th colSpan="3" scope="colgroup">5</th>
                                        <th colSpan="3" scope="colgroup">6</th>
                                    </tr>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Ordenar</th>
                                        <th>Adquirir</th>
                                        <th>Mantener</th>
                                        <th>Ordenar</th>
                                        <th>Adquirir</th>
                                        <th>Mantener</th>
                                        <th>Ordenar</th>
                                        <th>Adquirir</th>
                                        <th>Mantener</th>
                                    </tr>
                                    {this.renderCostsFirst()}
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

export default Costs;