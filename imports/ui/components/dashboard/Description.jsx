import React, {Component} from "react";

class Description extends Component {

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
                            pestañas a mano izquierda. Luego ...</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Description;