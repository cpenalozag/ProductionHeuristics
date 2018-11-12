import React, {Component} from "react";

class Costs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                            <table className="table table-bordered">
                                <tbody className="">
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
                                    <tr>
                                        <td>Compota de frutas</td>
                                        <td>300</td>
                                        <td>300</td>
                                        <td>300</td>
                                        <td>300</td>
                                        <td>300</td>
                                        <td>300</td>
                                        <td>300</td>
                                        <td>300</td>
                                        <td>300</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table table-bordered">
                                <tbody className="">
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
                                <tr>
                                    <td>Compota de frutas</td>
                                    <td>300</td>
                                    <td>300</td>
                                    <td>300</td>
                                    <td>300</td>
                                    <td>300</td>
                                    <td>300</td>
                                    <td>300</td>
                                    <td>300</td>
                                    <td>300</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Costs;