import React, {Component} from "react";

class Demand extends Component {

    constructor(props) {
        super(props);
    }

    renderDemand() {
        return this.props.demand.map((d) => {
            return (
                <tr key={d._id}>
                    <td>{d.tipo}</td>
                    <td><input className="form-control text-center" ref={`demand,${d.tipo},primero`} min="0" required="" type="number" defaultValue={d.demanda.primero}/></td>
                    <td><input className="form-control text-center" ref={`demand,${d.tipo},segundo`} min="0" required="" type="number" defaultValue={d.demanda.segundo}/></td>
                    <td><input className="form-control text-center" ref={`demand,${d.tipo},tercero`} min="0" required="" type="number" defaultValue={d.demanda.tercero}/></td>
                    <td><input className="form-control text-center" ref={`demand,${d.tipo},cuarto`} min="0" required="" type="number" defaultValue={d.demanda.cuarto}/></td>
                    <td><input className="form-control text-center" ref={`demand,${d.tipo},quinto`} min="0" required="" type="number" defaultValue={d.demanda.quinto}/></td>
                    <td><input className="form-control text-center" ref={`demand,${d.tipo},sexto`} min="0" required="" type="number" defaultValue={d.demanda.sexto}/></td>
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
                            <h4 className="card-title">Demanda mensual próximos 6 meses</h4>
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
                                    {this.renderDemand()}
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

export default Demand;