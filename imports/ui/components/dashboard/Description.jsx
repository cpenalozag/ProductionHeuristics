import React, { Component } from "react";

class Description extends Component {

    constructor(props) {
        super(props);

        this.state = {
            politica: "MCU",
            insumo: "Sopa"
        }

        this.handleMCU = this.handleMCU.bind(this);
        this.handlePPB = this.handlePPB.bind(this);
        this.handleSM = this.handleSM.bind(this);
        this.onChangeDropdown = this.onChangeDropdown.bind(this);
    }

    handleMCU() {
        this.setState({ politica: "MCU" });
    }

    handlePPB() {
        this.setState({ politica: "PPB" });
    }

    handleSM() {
        this.setState({ politica: "SM" });
    }

    onChangeDropdown(e) {
        this.setState({ insumo: e.target.value });
    }

    renderResults() {
        if (this.state.politica === "MCU") {
            return (
                this.mcu()
            )
        }
        else if (this.state.politica === "PPB") {
            return (
                this.ppb()
            )
        }
        else if (this.state.politica === "SM") {
            return (
                this.sm()
            )
        }
    }

    ppb() {
        //<td><input className="form-control text-center" min="0" required="" type="number" defaultValue={d.demanda.primero} /></td>
    }

    mcu() {

    }

    sm() {

    }
    renderDropdownItems() {
        return this.props.materials.map((d) => {
            return (
                <option key={d.nombre} className="dropdown-item">{d.nombre}</option>
            )
        });
    }

    render() {
        return (
            <div className="card">
                <div className="content">
                    <div className="card-header ">
                        <h4 className="card-title">Programación de los pedidos</h4>
                    </div>
                    <div className="card-body ">
                        <p className="card-category">Esta herramienta permite realizar la programación de los pedidos
                            mensuales del hospital. Para utilizarse, se deben ingresar los diferentes parámetros en las
                            pestañas a mano izquierda. Una vez ingresados se debe escoger la heurística que se quiere seguir.
                            Finalmente, se escoge el insumo para el cual se quiere conocer la forma en que se deben realizar los pedidos.</p>
                    </div>
                    <hr/>
                    <div className="card-header ">
                        <h4 className="card-title">Escoge la heurística:</h4>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-2 mx-auto">
                            <input className="btn btn-primary" type="submit" value="PPB" onClick={this.handlePPB} />
                        </div>
                        <div className="col-md-2 mx-auto">
                            <input className="btn btn-primary" type="submit" value="Silver Meal" onClick={this.handleSM} />
                        </div>
                        <div className="col-md-2 mx-auto">
                            <input className="btn btn-primary" type="submit" value="MCU" onClick={this.handleMCU} />
                        </div>
                    </div>
                    <div className="card-header ">
                        <h4 className="card-title">Escoge el insumo:</h4>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-md-2 mx-auto">
                                <form>
                                    <label>
                                        <select className="form-control" onChange={this.onChangeDropdown}>
                                            {
                                                this.renderDropdownItems()
                                            }
                                        </select>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card-header ">
                        <h4 className="card-title">Resultados:</h4>
                    </div>
                    <div className="card-body ">
                        <form>
                            <table className="table table-bordered">
                                <tbody className="">
                                    <tr>
                                        <th>Política</th>
                                        <th colSpan="7" scope="colgroup">{this.state.politica}</th>
                                    </tr>
                                    <tr>
                                        <th>Insumo</th>
                                        <th colSpan="7" scope="colgroup">{this.state.insumo}</th>
                                    </tr>
                                    <tr>
                                        <th>Se pide para</th>
                                        <th>Periodo para los que se pide</th>
                                        <th>Cantidad a pedir</th>
                                        <th>Periodo en el que la orden llega</th>
                                        <th>C. ordenar</th>
                                        <th>C. adquirir</th>
                                        <th>C. mantener</th>
                                        <th>C. Total</th>
                                    </tr>
                                    {
                                        this.renderResults()
                                    }
                                </tbody>
                            </table>
                            <div className="row">
                                <div className="col-md-2 mx-auto">
                                    <input className="btn btn-primary" type="submit" value="Guardar" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}

export default Description;