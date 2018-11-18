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
            let resultado = this.mcu();

            return resultado.map((resp, i) => {
                return (
                    <tr key={i}>
                        <td>{resp.split("$")[0]}</td>
                        <td>{resp.split("$")[1]}</td>
                        <td>{resp.split("$")[2]}</td>
                        <td>{resp.split("$")[3]}</td>
                        <td>{resp.split("$")[4]}</td>
                        <td>{resp.split("$")[5]}</td>
                        <td>{resp.split("$")[6]}</td>
                        <td>{resp.split("$")[7]}</td>
                    </tr>
                )
            });
        }
        else if (this.state.politica === "PPB") {
            let resultado = this.ppb();

            return resultado.map((resp, i) => {
                return (
                    <tr key={i}>
                        <td>{resp.split("$")[0]}</td>
                        <td>{resp.split("$")[1]}</td>
                        <td>{resp.split("$")[2]}</td>
                        <td>{resp.split("$")[3]}</td>
                        <td>{resp.split("$")[4]}</td>
                        <td>{resp.split("$")[5]}</td>
                        <td>{resp.split("$")[6]}</td>
                        <td>{resp.split("$")[7]}</td>
                    </tr>
                )
            });
        }
        else if (this.state.politica === "SM") {
            let resultado = this.sm();

            return resultado.map((resp, i) => {
                return (
                    <tr key={i}>
                        <td>{resp.split("$")[0]}</td>
                        <td>{resp.split("$")[1]}</td>
                        <td>{resp.split("$")[2]}</td>
                        <td>{resp.split("$")[3]}</td>
                        <td>{resp.split("$")[4]}</td>
                        <td>{resp.split("$")[5]}</td>
                        <td>{resp.split("$")[6]}</td>
                        <td>{resp.split("$")[7]}</td>
                    </tr>
                )
            });
        }
    }

    ppb() {

        let demandas = [100, 100, 100, 100, 100, 100],
            ss = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
            costosAdquirir = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            costosMantener = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            costosPedir = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            leadTime = 0,
            resultado = [],
            periodosActuales = [],
            cantidadMaximaDeLeadTime = 3,
            numPeriodos = 6;

        let requerimientosNetos = this.calcularRequerimientosNetos(demandas, ss);

        let i = 0;
        while (i < numPeriodos) {

            periodosActuales.push(i);

            let cantidadAPedir = this.calcularCantidadAPedir(requerimientosNetos, periodosActuales);
            //Costos
            let costoAdquirir = this.calcularCostoAdquirir(cantidadAPedir, costosAdquirir[Math.abs(i - leadTime)]);
            let costoMantener = this.calcularCostoMantener(demandas, requerimientosNetos, ss, costosMantener, leadTime, periodosActuales);
            let costoPedir = costosPedir[cantidadMaximaDeLeadTime + i + 1 - leadTime];
            let costoTotal = costoAdquirir + costoMantener + costoPedir;

            let resultadoAAnadir = (periodosActuales[0] + 1) + "$" + this.imprimirPeriodosActuales(periodosActuales) +
                "$" + cantidadAPedir + "$" + (periodosActuales[0] + 1 - leadTime) + "$" + costoPedir + "$" + costoAdquirir
                + "$" + costoMantener + "$" + costoTotal;

            resultado.push(resultadoAAnadir);

            if (periodosActuales.length > 1) {
                let resultadoAnterior = resultado[resultado.length - 2];
                let costoPedirPeriodoAnterior = resultadoAnterior.split("$")[4];
                let costoMantenerPeriodoAnterior = resultadoAnterior.split("$")[6];
                if (Math.abs(costoPedir - costoMantener) > Math.abs(costoPedirPeriodoAnterior - costoMantenerPeriodoAnterior)) {
                    periodosActuales = [];
                    i--;
                }
            }

            i++;
        }

        return resultado;
    }

    mcu() {

        let demandas = [100, 100, 100, 100, 100, 100],
            ss = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
            costosAdquirir = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            costosMantener = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            costosPedir = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            leadTime = 0,
            resultado = [],
            periodosActuales = [],
            cantidadMaximaDeLeadTime = 3,
            numPeriodos = 6;

        let requerimientosNetos = this.calcularRequerimientosNetos(demandas, ss);

        let i = 0;
        while (i < numPeriodos) {

            periodosActuales.push(i);

            let cantidadAPedir = this.calcularCantidadAPedir(requerimientosNetos, periodosActuales);
            //Costos
            let costoAdquirir = this.calcularCostoAdquirir(cantidadAPedir, costosAdquirir[Math.abs(i - leadTime)]);
            let costoMantener = this.calcularCostoMantener(demandas, requerimientosNetos, ss, costosMantener, leadTime, periodosActuales);
            let costoPedir = costosPedir[cantidadMaximaDeLeadTime + i + 1 - leadTime];
            let costoTotal = costoAdquirir + costoMantener + costoPedir;

            let resultadoAAnadir = (periodosActuales[0] + 1) + "$" + this.imprimirPeriodosActuales(periodosActuales) +
                "$" + cantidadAPedir + "$" + (periodosActuales[0] + 1 - leadTime) + "$" + costoPedir + "$" + costoAdquirir
                + "$" + costoMantener + "$" + costoTotal;

            resultado.push(resultadoAAnadir);

            if (periodosActuales.length > 1) {
                let resultadoAnterior = resultado[resultado.length - 2];
                let cantidadAPedirPeriodoAnterior = resultadoAnterior.split("$")[2];
                let costoTotalPeriodoAnterior  = resultadoAnterior.split("$")[7];
                if (costoTotal/cantidadAPedir > costoTotalPeriodoAnterior/cantidadAPedirPeriodoAnterior) {
                    periodosActuales = [];
                    i--;
                }
            }

            i++;
        }

        return resultado;

    }

    sm() {

        let demandas = [100, 100, 100, 100, 100, 100],
            ss = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
            costosAdquirir = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            costosMantener = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            costosPedir = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            leadTime = 0,
            resultado = [],
            periodosActuales = [],
            cantidadMaximaDeLeadTime = 3,
            numPeriodos = 6;

        let requerimientosNetos = this.calcularRequerimientosNetos(demandas, ss);

        let i = 0;
        while (i < numPeriodos) {

            periodosActuales.push(i);

            let cantidadAPedir = this.calcularCantidadAPedir(requerimientosNetos, periodosActuales);
            //Costos
            let costoAdquirir = this.calcularCostoAdquirir(cantidadAPedir, costosAdquirir[Math.abs(i - leadTime)]);
            let costoMantener = this.calcularCostoMantener(demandas, requerimientosNetos, ss, costosMantener, leadTime, periodosActuales);
            let costoPedir = costosPedir[cantidadMaximaDeLeadTime + i + 1 - leadTime];
            let costoTotal = costoAdquirir + costoMantener + costoPedir;

            let resultadoAAnadir = (periodosActuales[0] + 1) + "$" + this.imprimirPeriodosActuales(periodosActuales) +
                "$" + cantidadAPedir + "$" + (periodosActuales[0] + 1 - leadTime) + "$" + costoPedir + "$" + costoAdquirir
                + "$" + costoMantener + "$" + costoTotal;

            resultado.push(resultadoAAnadir);

            if (periodosActuales.length > 1) {
                let resultadoAnterior = resultado[resultado.length - 2];
                let costoTotalPeriodoAnterior  = resultadoAnterior.split("$")[7];
                if (costoTotal/(periodosActuales.length-1) > costoTotalPeriodoAnterior/(periodosActuales.length-2) ){
                    periodosActuales = [];
                    i--;
                }
            }

            i++;
        }

        return resultado;

    }

    //Demandas y ss son arreglos con los datos de los meses que me importan.
    calcularRequerimientosNetos(demandas, ss) {
        let requerimientosNetos = [];

        for (let i = 0; i < demandas.length; i++) {
            if (i === 0) {
                requerimientosNetos.push(demandas[i] + Math.ceil(ss[i] * demandas[i]));
            }
            else {
                requerimientosNetos.push(demandas[i] + Math.ceil(ss[i] * demandas[i]) - Math.ceil(ss[i - 1] * demandas[i - 1]));
            }
        }

        return requerimientosNetos;
    }

    //Requerimientos tiene que ser un Array y costoAdquirir tiene que ser un número.
    calcularCostoAdquirir(cantidadAPedir, costoAdquirir) {
        return cantidadAPedir * costoAdquirir;
    }

    calcularCantidadAPedir(requerimientosNetos, periodosActuales) {
        let cantidad = 0;

        periodosActuales.map((periodo) => {
            cantidad = cantidad + requerimientosNetos[periodo]
        })

        return cantidad;
    }

    //Requerimientos,ss,y costoMantener tienen que ser un Array y leadTime tiene que ser un número.
    //Solamente se pasa en requerimientos netos los periodos que quiero hacer
    calcularCostoMantener(demandas, requerimientosNetos, ss, costoMantener, leadTime, periodosActuales) {

        let costo = 0;

        for (let i = periodosActuales[0]; i < periodosActuales[periodosActuales.length - 1]; i++) {
            let sumaRequerimientos = 0;
            for (let j = i + 1; j < periodosActuales.length; j++) {
                sumaRequerimientos = sumaRequerimientos + requerimientosNetos[j + leadTime];
            }
            costo = costo + (sumaRequerimientos + Math.ceil(ss[i + leadTime] * demandas[i + leadTime])) * costoMantener[i];
        }

        return costo;

    }
    renderDropdownItems() {
        return this.props.materials.map((d) => {
            return (
                <option key={d.nombre} className="dropdown-item">{d.nombre}</option>
            )
        });
    }

    imprimirPeriodosActuales(periodosActuales) {
        let resp = "";

        periodosActuales.map((d, i) => {
            if (i === 0) {
                resp = resp.concat(d + 1);
            }
            else {
                resp = resp.concat(",", d + 1);
            }
        })

        return resp;
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
                    <hr />
                    <div className="card-header ">
                        <h4 className="card-title">Escoge la heurística:</h4>
                    </div>
                    <br />
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
                                        <th>Se pide en</th>
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
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}

export default Description;