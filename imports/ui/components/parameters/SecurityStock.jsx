import React, {Component} from "react";

class SecurityStock extends Component {
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
                            <h4 className="card-title">Stock de Seguridad </h4>
                        </div>
                        <div className="card-body ">
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
                                <tr>
                                    <td>Compota de frutas</td>
                                    <td>10%</td>
                                    <td>10%</td>
                                    <td>10%</td>
                                    <td>10%</td>
                                    <td>10%</td>
                                    <td>10%</td>
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

export default SecurityStock;